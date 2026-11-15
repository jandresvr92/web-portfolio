import { useI18n } from "@/lib/i18n/I18nContext";
import StatusBadge from "./StatusBadge";

// Tiny gridded readout of the agent's core fields. On phones it spans the full
// width and carries the status badge that AvatarHud hides there.
export default function DossierMeta({ className }) {
  const { dict } = useI18n();
  const rows = dict.panels.hero.dossier.meta;

  return (
    <div
      className={[
        "shrink-0 border border-cyan-500/20 bg-black/30 px-2.5 py-2 font-mono text-[9px] sheet:text-[12px] leading-relaxed sheet:ml-0 sheet:basis-full sheet:px-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <StatusBadge className="mb-2 hidden w-fit sheet:flex" />
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[auto_1fr] gap-x-2">
          <span className="uppercase tracking-[0.1em] text-zinc-500">{row.label}:</span>
          <span className="uppercase tracking-[0.1em] text-cyan-300/90">{row.value}</span>
        </div>
      ))}
    </div>
  );
}