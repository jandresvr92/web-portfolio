// Content checks: every node's data must be complete in every language, point
// at files that exist, and fit the layout it is drawn in. When one fails, its
// message says what to fix; the limits below are the design's, so change them
// only together with the component that draws the content.
import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { DICTS, LANGUAGES } from "@/lib/i18n/dictionaries";
import { fill } from "@/lib/i18n/format";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import { LOCKED_SLOTS, PROJECTS, projectsFor } from "@/components/core/projects/projectsData";
import { PROJECTS_COPY } from "@/components/core/projects/projectsCopy";
import { GLYPHS } from "@/components/core/projects/ProjectGlyph";
import { JOBS, YEARS_OF_EXPERIENCE, experienceFor } from "@/components/core/experience/experienceData";
import { EXPERIENCE_COPY } from "@/components/core/experience/experienceCopy";
import { BLADES_PER_TAB, STACK, stackFor } from "@/components/core/stack/stackData";
import { STACK_COPY } from "@/components/core/stack/stackCopy";
import { SHAPES, TABS } from "@/components/core/stack/TechStackPanel";
import { HOBBIES, INVENTORY_SLOTS, hobbiesFor } from "@/components/core/hobbies/hobbiesData";
import { HOBBIES_COPY } from "@/components/core/hobbies/hobbiesCopy";
import { ICONS } from "@/components/core/hobbies/HobbyIcon";
import { ACCENTS, DIRECTORY_NODES, directoryFor } from "@/components/core/director/directoryData";
import { NODE_THEMES } from "@/components/core/nodeTheme";
import { CORE, NODES } from "@/components/core/topology/layout";
import { MOBILE_NODES } from "@/components/core/mobile/mobileNodes";
import { CV_PATH } from "@/components/core/cvAsset";
import { AVATAR_PATH } from "@/components/core/profileAsset";

// ---------- helpers ----------

const publicFile = (url) => path.join("public", url);
const expectPublicFile = (url, where) =>
  expect(fs.existsSync(publicFile(url)), `${where}: ${url} is missing from public/`).toBe(true);

// Every "key path" of a value: objects by key, arrays as [] with their items merged.
function shape(value, prefix = "") {
  if (Array.isArray(value)) return [...new Set(value.flatMap((item) => shape(item, `${prefix}[]`)))];
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => shape(item, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

// A localized copy object must have the same structure in every language.
function expectSameShape(copyByLang, name) {
  expect(Object.keys(copyByLang).sort(), `${name}: languages`).toEqual([...LANGUAGES].sort());
  const reference = shape(copyByLang[LANGUAGES[0]]).sort();
  for (const lang of LANGUAGES.slice(1)) {
    const actual = shape(copyByLang[lang]).sort();
    const missing = reference.filter((key) => !actual.includes(key));
    const extra = actual.filter((key) => !reference.includes(key));
    expect({ missing, extra }, `${name}: "${lang}" differs from "${LANGUAGES[0]}"`).toEqual({ missing: [], extra: [] });
  }
}

// Every string in a rendered node must be non-empty and fully filled in.
function expectRendered(value, where) {
  for (const text of JSON.stringify(value).match(/"(?:[^"\\]|\\.)*"/g) ?? []) {
    expect(text, `${where}: unfilled placeholder in ${text}`).not.toMatch(/\{\w+\}/);
  }
  expect(JSON.stringify(value), `${where}: an empty or missing text`).not.toMatch(/:""|:null(?!,"icon")|undefined/);
}

const maxLength = (text, limit, where) =>
  expect(text.length, `${where}: "${text}" is ${text.length} chars, the layout fits ${limit}`).toBeLessThanOrEqual(limit);

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const expectIds = (ids, where) => {
  for (const id of ids) expect(id, `${where}: ids are kebab-case`).toMatch(kebab);
  expect(new Set(ids).size, `${where}: duplicate id`).toBe(ids.length);
};

// ---------- shared strings ----------

describe("dictionaries", () => {
  test("every language has the same keys", () => expectSameShape(DICTS, "dictionaries.js"));

  test("dates list twelve months in every language", () => {
    for (const lang of LANGUAGES) expect(DICTS[lang].dates.months, lang).toHaveLength(12);
  });

  test("profile placeholders are filled", () => {
    for (const lang of LANGUAGES) {
      const { bio, meta } = DICTS[lang].panels.hero.dossier;
      const texts = [...bio.map((s) => s.text), ...meta.map((m) => m.value)];
      for (const text of texts) expect(fill(text, { years: YEARS_OF_EXPERIENCE }), lang).not.toMatch(/\{\w+\}/);
    }
  });
});

// ---------- projects ----------

describe("projects", () => {
  test("copy has the same structure in every language", () => expectSameShape(PROJECTS_COPY, "projectsCopy.js"));

  test("every project has text in every language, and nothing else does", () => {
    expectIds(PROJECTS.map((p) => p.id), "projectsData.js");
    for (const lang of LANGUAGES) {
      expect(Object.keys(PROJECTS_COPY[lang].projects).sort(), `projectsCopy.js "${lang}"`).toEqual(
        PROJECTS.map((p) => p.id).sort()
      );
    }
  });

  test("structure is valid", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
    expect(LOCKED_SLOTS).toBeGreaterThanOrEqual(0);
    for (const p of PROJECTS) {
      const where = `project "${p.id}"`;
      expect(p.link, `${where}: link`).toMatch(/^https:\/\//);
      if (p.image) expectPublicFile(p.image, where);
      expect(Object.keys(GLYPHS), `${where}: icon must be a key of GLYPHS in ProjectGlyph.jsx`).toContain(p.icon);
      for (const lang of LANGUAGES) expect(Object.keys(PROJECTS_COPY[lang].status), `${where}: status`).toContain(p.status);
      expect(p.tech.length, `${where}: 1–6 tech tags`).toBeGreaterThan(0);
      expect(p.tech.length, `${where}: 1–6 tech tags`).toBeLessThanOrEqual(6);
      for (const tag of p.tech) {
        expect(tag, `${where}: tech tags are uppercase`).toBe(tag.toUpperCase());
        maxLength(tag, 14, `${where} tech tag`);
      }
    }
  });

  test("renders in every language and fits the cards", () => {
    for (const lang of LANGUAGES) {
      const data = projectsFor(lang);
      expectRendered(data, `projects (${lang})`);
      for (const p of data.active) {
        maxLength(p.title, 24, `project "${p.id}" title (${lang})`);
        maxLength(p.desc, 100, `project "${p.id}" desc (${lang})`);
      }
    }
  });
});

// ---------- experience ----------

describe("experience", () => {
  test("copy has the same structure in every language", () => expectSameShape(EXPERIENCE_COPY, "experienceCopy.js"));

  test("every job has text in every language, and nothing else does", () => {
    expectIds(JOBS.map((j) => j.id), "experienceData.js");
    for (const lang of LANGUAGES) {
      expect(Object.keys(EXPERIENCE_COPY[lang].jobs).sort(), `experienceCopy.js "${lang}"`).toEqual(
        JOBS.map((j) => j.id).sort()
      );
    }
  });

  test("dates are valid and jobs run newest first", () => {
    const month = /^\d{4}-(0[1-9]|1[0-2])$/;
    JOBS.forEach((job, i) => {
      const where = `job "${job.id}"`;
      expect(job.start, `${where}: start is "YYYY-MM"`).toMatch(month);
      if (job.end !== null) {
        expect(job.end, `${where}: end is "YYYY-MM" or null`).toMatch(month);
        expect(job.end >= job.start, `${where}: ends before it starts`).toBe(true);
      }
      if (i > 0) expect(job.start <= JOBS[i - 1].start, `${where}: jobs must be listed newest first`).toBe(true);
    });
    expect(Number.isInteger(YEARS_OF_EXPERIENCE) && YEARS_OF_EXPERIENCE > 0).toBe(true);
  });

  test("renders in every language and fits the timeline", () => {
    for (const lang of LANGUAGES) {
      const data = experienceFor(lang);
      expectRendered(data, `experience (${lang})`);
      for (const job of data.jobs) {
        const where = `job "${job.id}" (${lang})`;
        maxLength(job.role, 32, `${where} role`);
        expect(job.achievements.length, `${where}: 1–3 achievements`).toBeGreaterThan(0);
        expect(job.achievements.length, `${where}: 1–3 achievements`).toBeLessThanOrEqual(3);
        for (const line of job.achievements) maxLength(line, 120, `${where} achievement`);
      }
    }
  });
});

// ---------- tech stack ----------

describe("tech stack", () => {
  test("copy has the same structure in every language", () => expectSameShape(STACK_COPY, "stackCopy.js"));

  test("tabs match the panel", () => {
    expect(Object.keys(STACK), "stackData.js tabs must match TABS in TechStackPanel.jsx").toEqual(TABS);
    for (const tab of TABS) expect(SHAPES, `tab "${tab}" needs a glyph in SHAPES`).toHaveProperty(tab);
    for (const lang of LANGUAGES) expect(Object.keys(STACK_COPY[lang].tabs), `stackCopy.js "${lang}" tabs`).toEqual(TABS);
  });

  test(`each tab holds exactly ${BLADES_PER_TAB} blades, each described in every language`, () => {
    const ids = Object.values(STACK).flat().map((b) => b.id);
    expectIds(ids, "stackData.js");
    for (const [tab, blades] of Object.entries(STACK)) {
      expect(blades, `tab "${tab}": the rack holds ${BLADES_PER_TAB} blades; replace or merge one`).toHaveLength(BLADES_PER_TAB);
    }
    for (const lang of LANGUAGES) expect(Object.keys(STACK_COPY[lang].items).sort(), `stackCopy.js "${lang}"`).toEqual([...ids].sort());
  });

  test("renders in every language and fits the blades", () => {
    for (const lang of LANGUAGES) {
      const data = stackFor(lang);
      expectRendered(data, `stack (${lang})`);
      for (const blade of Object.values(data.content).flat()) {
        maxLength(blade.name, 24, `blade "${blade.id}" name`);
        maxLength(blade.desc, 90, `blade "${blade.id}" desc (${lang})`);
      }
    }
  });
});

// ---------- hobbies ----------

describe("hobbies", () => {
  test("copy has the same structure in every language", () => expectSameShape(HOBBIES_COPY, "hobbiesCopy.js"));

  test(`the inventory holds exactly ${INVENTORY_SLOTS} items, each described in every language`, () => {
    expectIds(HOBBIES.map((h) => h.id), "hobbiesData.js");
    expect(HOBBIES, `the inventory is a ${INVENTORY_SLOTS}-slot grid; swap a hobby out to add one`).toHaveLength(INVENTORY_SLOTS);
    for (const h of HOBBIES) expect(Object.keys(ICONS), `hobby "${h.id}": icon must be a key of ICONS in HobbyIcon.jsx`).toContain(h.icon);
    for (const lang of LANGUAGES) {
      expect(Object.keys(HOBBIES_COPY[lang].items).sort(), `hobbiesCopy.js "${lang}"`).toEqual(HOBBIES.map((h) => h.id).sort());
    }
  });

  test("renders in every language and fits the slots", () => {
    for (const lang of LANGUAGES) {
      const data = hobbiesFor(lang);
      expectRendered(data, `hobbies (${lang})`);
      for (const item of data.items) {
        const where = `hobby "${item.id}" (${lang})`;
        maxLength(item.name, 24, `${where} name`);
        maxLength(item.buff, 44, `${where} buff`);
        maxLength(item.desc, 180, `${where} desc`);
      }
    }
  });
});

// ---------- map, directory and assets ----------

describe("map and assets", () => {
  test("every map node has a known accent and its artwork", () => {
    for (const node of [CORE, ...NODES]) {
      expect(Object.keys(NODE_THEMES), `node "${node.id}": accent must be a key of NODE_THEMES`).toContain(node.accent);
      expectPublicFile(node.asset, `node "${node.id}"`);
    }
  });

  test("the mobile column lists every node once, in order", () => {
    expect(MOBILE_NODES.map((n) => n.nodeId).sort()).toEqual([CORE, ...NODES].map((n) => n.id).sort());
    expect(MOBILE_NODES.map((n) => n.index)).toEqual(MOBILE_NODES.map((_, i) => String(i + 1).padStart(2, "0")));
  });

  test("the directory lists every map node with a known color", () => {
    expect(DIRECTORY_NODES.map((n) => n.id).sort()).toEqual([CORE, ...NODES].map((n) => n.id).sort());
    for (const node of DIRECTORY_NODES) expect(Object.keys(ACCENTS), `directory "${node.id}": color`).toContain(node.color);
    for (const lang of LANGUAGES) expectRendered(directoryFor(lang), `directory (${lang})`);
  });

  test("site files exist", () => {
    expect(SITE_URL, "SITE_URL: https and no trailing slash").toMatch(/^https:\/\/[^/]+$/);
    for (const url of [OG_IMAGE.path, CV_PATH, AVATAR_PATH, "/favicon.svg", "/favicon.ico", "/apple-touch-icon.png"]) {
      expectPublicFile(url, "site");
    }
  });
});
