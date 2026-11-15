import { useI18n } from "@/lib/i18n/I18nContext";

// Pulsing "online" dot plus the agent's clearance label.
export default function StatusBadge({ className }) {
  const { dict } = useI18n();
  const dossier = dict.panels.hero.dossier;

  return (
    <div
      className={[
        "flex items-center gap-1.5 whitespace-nowrap border border-cyan-400/40 bg-zinc-950/90 px-2 py-[3px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse motion-reduce:animate-none" />
      <span className="font-mono text-[8px] sheet:text-[12px] uppercase tracking-[0.16em] text-green-300">
        {dossier.status}
      </span>
      <span className="font-mono text-[8px] sheet:text-[12px] uppercase tracking-[0.16em] text-zinc-500">
        {dossier.badge}
      </span>
    </div>
  );
}
