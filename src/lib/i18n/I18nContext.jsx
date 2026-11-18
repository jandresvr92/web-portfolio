import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DICTS, LANGUAGES } from "./dictionaries";
import { isLang, writeLangCookie } from "./lang";

const I18nContext = createContext(null);

function resolve(dict, path) {
  return path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), dict);
}

// Language of the whole canvas. `initialLang` is what the server detected for
// this request (see detectLang), so the server render and the first client
// render agree and the boot terminal types in it from its first character.
// Toggling saves the choice in a cookie, which the next request reads.
export function I18nProvider({ initialLang, children }) {
  const [lang, setLang] = useState(isLang(initialLang) ? initialLang : LANGUAGES[0]);

  // The server set <html lang> and <title> for the first render; keep them in
  // step when the visitor toggles the language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = DICTS[lang].meta.title;
  }, [lang]);

  // Only an explicit choice writes the cookie: the detected language is not
  // one, so a visitor who never toggles keeps following their browser.
  const chooseLang = useCallback((next) => {
    if (!isLang(next)) return;
    writeLangCookie(next);
    setLang(next);
  }, []);

  const cycleLang = useCallback(() => {
    chooseLang(LANGUAGES[(LANGUAGES.indexOf(lang) + 1) % LANGUAGES.length]);
  }, [lang, chooseLang]);

  const value = useMemo(() => {
    const dict = DICTS[lang];

    // t("nodes.profile") → "ABOUT ME"; {name} placeholders are filled from `vars`.
    const t = (path, vars) => {
      const raw = resolve(dict, path);
      const text = typeof raw === "string" ? raw : path;
      if (!vars) return text;
      return text.replace(/\{(\w+)\}/g, (match, key) =>
        vars[key] === undefined ? match : String(vars[key])
      );
    };

    return { lang, dict, t, cycleLang, setLang: chooseLang };
  }, [lang, cycleLang, chooseLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}