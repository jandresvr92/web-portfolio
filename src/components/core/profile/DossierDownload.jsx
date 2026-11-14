import { Download } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nContext";
import { CV_FILENAME, CV_PATH } from "../cvAsset";

// Full-width command button with technical corner brackets.
export default function DossierDownload({ className }) {
  const { dict } = useI18n();
  const label = dict.panels.hero.download;

  return (
    <a
      href={CV_PATH}
      download={CV_FILENAME}
      className={[
        "group relative flex w-full items-center justify-center gap-2 border border-cyan-400/50 bg-cyan-950/10 px-4 py-3 font-mono text-[10px] sheet:text-[12px] uppercase tracking-[0.2em] text-cyan-300 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-950/30 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-cyan-400",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden className="absolute -left-px -top-px h-2 w-2 border-l border-t border-cyan-300" />
      <span aria-hidden className="absolute -right-px -top-px h-2 w-2 border-r border-t border-cyan-300" />
      <span aria-hidden className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-cyan-300" />
      <span aria-hidden className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-cyan-300" />

      <Download className="h-4 w-4 animate-pulse motion-reduce:animate-none" />
      <span>[ {label} ]</span>
    </a>
  );
}