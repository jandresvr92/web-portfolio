// Regenerates the CV PDF and the share image from their HTML sources:
//   npm run cv:build  → tools/cv/cv.html → public/cv/CV_Jaime_Andres_Velez_Rojas.pdf
//   npm run og:build  → tools/og/og.html → public/images/og/og-image.jpg
//
// {{VALUES}} in the sources are filled from src/lib/site.js, so the name, role,
// domain and LinkedIn link always match the site. It drives the Chrome or Edge
// already installed (puppeteer-core downloads no browser); set CHROME_PATH if
// it lives somewhere unusual.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";
import { LINKEDIN_URL, OG_IMAGE, PERSON, SITE_URL } from "../src/lib/site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = {
  cv: { source: "tools/cv/cv.html", output: "public/cv/CV_Jaime_Andres_Velez_Rojas.pdf" },
  og: { source: "tools/og/og.html", output: `public${OG_IMAGE.path}` },
};

const BROWSERS = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

const escape = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// "Jaime Andrés Vélez Rojas" → "Jaime Andrés<br>Vélez Rojas" (given names, family names).
function twoLines(name) {
  const words = name.split(" ");
  const half = Math.ceil(words.length / 2);
  return `${escape(words.slice(0, half).join(" "))}<br>${escape(words.slice(half).join(" "))}`;
}

const VALUES = {
  NAME: escape(PERSON.name),
  NAME_TWO_LINES: twoLines(PERSON.name),
  ROLE: escape(PERSON.jobTitle),
  ROLE_UPPER: escape(PERSON.jobTitle.toUpperCase()),
  SITE_URL: escape(SITE_URL),
  SITE_HOST: escape(new URL(SITE_URL).host),
  LINKEDIN_URL: escape(LINKEDIN_URL),
  LINKEDIN_LABEL: escape(LINKEDIN_URL.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")),
};

function fill(template, file) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (!(key in VALUES)) throw new Error(`${file}: unknown value {{${key}}}`);
    return VALUES[key];
  });
}

async function render(name) {
  const target = TARGETS[name];
  if (!target) throw new Error(`Unknown target "${name}". Use: ${Object.keys(TARGETS).join(", ")}`);

  const executablePath = BROWSERS.find((candidate) => candidate && fs.existsSync(candidate));
  if (!executablePath) throw new Error("No Chrome or Edge found. Set CHROME_PATH to its executable.");

  // The filled page sits next to its source so relative paths (../../public/…) resolve.
  const source = path.join(root, target.source);
  const filled = path.join(path.dirname(source), `.${path.basename(source, ".html")}.filled.html`);
  fs.writeFileSync(filled, fill(fs.readFileSync(source, "utf8"), target.source));

  const browser = await puppeteer.launch({ executablePath, args: ["--allow-file-access-from-files"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(filled).href, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);

    const output = path.join(root, target.output);
    if (name === "cv") {
      await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true });
    } else {
      await page.screenshot({ path: output, type: "jpeg", quality: 88 });
    }
    console.log(`${target.source} → ${target.output} (${Math.round(fs.statSync(output).size / 1024)} KB)`);
  } finally {
    await browser.close();
    fs.rmSync(filled, { force: true });
  }
}

for (const name of process.argv.slice(2)) await render(name);
