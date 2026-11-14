import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nContext";

// Cycles EN → ES → DE. Sits in the canvas HUD, so it re-enables pointer events
// on itself inside the otherwise inert overlay.
export default function LanguageToggle() {
  const { dict, cycleLang, t } = useI18n();

  return (
    <button
      type="button"
      onClick={cycleLang}
      aria-label={`${t("lang.label")} — ${dict.name}`}
      title={t("lang.switch")}
      className="group pointer-events-auto flex items-center gap-1.5 rounded-sm border border-zinc-800 bg-zinc-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.26em] text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:text-white hover:shadow-[0_0_16px_-2px_hsl(var(--neon)/0.45)] focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon/70"
    >
      <Globe
        className="h-3 w-3 transition-colors duration-300 group-hover:text-neon"
        strokeWidth={1.5}
      />
      <span>[ {dict.code} ]</span>
    </button>
  );
}