import { DICTS, LANGUAGES } from "./dictionaries";

// Fills {name} placeholders in a localized template: fill("{count}+ PROJECTS",
// { count: 4 }) → "4+ PROJECTS". Unknown placeholders stay as they are, so a
// missing value shows up on screen (and in the content tests) instead of
// silently vanishing.
export function fill(template, vars) {
  return template.replace(/\{(\w+)\}/g, (match, key) => (vars[key] === undefined ? match : String(vars[key])));
}

const dictFor = (lang) => DICTS[lang] ?? DICTS[LANGUAGES[0]];

// "2021-12" → "Dec 2021" (es "Dic 2021", de "Dez 2021"). Month names come from
// the dictionaries rather than Intl, so the server and the browser always
// print the same text and hydration matches.
export function formatMonth(isoMonth, lang) {
  const [year, month] = isoMonth.split("-").map(Number);
  return `${dictFor(lang).dates.months[month - 1]} ${year}`;
}

// A job's span: "Jun 2021 - Dec 2021", or "Aug 2025 - Present" when it has no end.
export function formatRange(start, end, lang) {
  const to = end ? formatMonth(end, lang) : dictFor(lang).dates.present;
  return `${formatMonth(start, lang)} - ${to}`;
}

// Two-digit slot numbers: 5 → "05".
export const pad2 = (n) => String(n).padStart(2, "0");
