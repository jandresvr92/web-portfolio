import { LANGUAGES } from "./dictionaries";

// Cookie that keeps the visitor's explicit choice from the language toggle.
// It is a cookie rather than localStorage so the server can read it and render
// the first frame (boot terminal included) in that language.
export const LANG_COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const isLang = (value) => LANGUAGES.includes(value);

// First supported language in an Accept-Language header, honouring q-weights:
// "es-CO,es;q=0.9,en;q=0.8" → "es", "fr-FR,de;q=0.7" → "de", "fr" → null.
export function langFromAcceptLanguage(header) {
  if (!header) return null;

  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number.parseFloat(q.slice(2)) : 1;
      return { base: tag.trim().toLowerCase().split("-")[0], weight, index };
    })
    .filter(({ base, weight }) => base && weight > 0)
    // Higher weight first; equal weights keep the browser's order.
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  return ranked.find(({ base }) => isLang(base))?.base ?? null;
}

// The visitor's language: their explicit choice, else their browser's, else
// the first language in LANGUAGES.
export function pickLang({ cookie, acceptLanguage }) {
  if (isLang(cookie)) return cookie;
  return langFromAcceptLanguage(acceptLanguage) ?? LANGUAGES[0];
}

export function readLangCookie() {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function writeLangCookie(lang) {
  document.cookie = `${LANG_COOKIE}=${lang}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax`;
}
