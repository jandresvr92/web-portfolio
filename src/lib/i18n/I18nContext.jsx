import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DICTS, LANGUAGES } from "./dictionaries";

const STORAGE_KEY = "isoglow.lang";

const I18nContext = createContext(null);

function resolve(dict, path) {
  return path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), dict);
}

// Language of the whole canvas. Starts on English so the server render and the
// first client render agree; the stored choice is applied after mount.
export function I18nProvider({ children }) {
  const [lang, setLang] = useState(LANGUAGES[0]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (LANGUAGES.includes(stored)) setLang(stored);
    } catch {
      // Storage unavailable: keep the default language.
    }
  }, []);

  const skipFirstWrite = useRef(true);

  useEffect(() => {
    if (skipFirstWrite.current) {
      skipFirstWrite.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable: the session still works, it just won't persist.
    }
  }, [lang]);

  const cycleLang = useCallback(() => {
    setLang((current) => {
      const index = LANGUAGES.indexOf(current);
      return LANGUAGES[(index + 1) % LANGUAGES.length];
    });
  }, []);

  const value = useMemo(() => {
    const dict = DICTS[lang];

    // t("hud.synced", { synced: 2, total: 3 }) → "modules synced: 2/3"
    const t = (path, vars) => {
      const raw = resolve(dict, path);
      const text = typeof raw === "string" ? raw : path;
      if (!vars) return text;
      return text.replace(/\{(\w+)\}/g, (match, key) =>
        vars[key] === undefined ? match : String(vars[key])
      );
    };

    return { lang, dict, t, cycleLang, setLang };
  }, [lang, cycleLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}