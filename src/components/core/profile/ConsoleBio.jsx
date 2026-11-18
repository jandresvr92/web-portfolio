import { useI18n } from "@/lib/i18n/I18nContext";
import { fill } from "@/lib/i18n/format";
import { YEARS_OF_EXPERIENCE } from "../experience/experienceData";

// Bio rendered as a terminal console: scan lines, corner brackets, and cyan
// highlights on the keywords.
export default function ConsoleBio({ className }) {
  const { dict } = useI18n();
  const bio = dict.panels.hero.dossier.bio;

  return (
    <div
      className={[
        "relative overflow-hidden border border-zinc-800/80 bg-black/40 p-4 font-mono text-[12px] sheet:text-[16px] leading-relaxed text-zinc-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_4px)]"
      />
      <span aria-hidden className="pointer-events-none absolute left-1 top-0.5 font-mono text-[10px] text-cyan-500/40">┌</span>
      <span aria-hidden className="pointer-events-none absolute right-1 top-0.5 font-mono text-[10px] text-cyan-500/40">┐</span>
      <span aria-hidden className="pointer-events-none absolute bottom-0 left-1 font-mono text-[10px] text-cyan-500/40">└</span>
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-1 font-mono text-[10px] text-cyan-500/40">┘</span>

      <p className="relative">
        {bio.map((segment, index) =>
          segment.hl ? (
            <span key={index} className="text-cyan-400">
              {fill(segment.text, { years: YEARS_OF_EXPERIENCE })}
            </span>
          ) : (
            <span key={index}>{fill(segment.text, { years: YEARS_OF_EXPERIENCE })}</span>
          )
        )}
      </p>
    </div>
  );
}