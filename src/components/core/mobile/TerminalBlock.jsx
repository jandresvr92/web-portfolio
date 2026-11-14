import { cn } from "@/lib/utils";

// Flat renderer for one localized dossier block inside a terminal card.
export default function TerminalBlock({ block, theme }) {
  return (
    <div className="mt-3 first:mt-0">
      <p className={cn("text-[11px] uppercase tracking-[0.18em]", theme.textSoft)}>{block.label}</p>

      {block.kind === "text" && (
        <p className="mt-1 text-[14.5px] leading-relaxed text-zinc-200">{block.value}</p>
      )}

      {block.kind === "list" && (
        <ul className="mt-1.5 space-y-1.5">
          {block.items.map((item) => (
            <li key={item.name} className="flex items-baseline gap-2 text-[14px]">
              <span className={cn("shrink-0", theme.text)}>{item.name}</span>
              <span className="truncate text-[12.5px] text-zinc-400">{item.note}</span>
            </li>
          ))}
        </ul>
      )}

      {block.kind === "tags" && (
        <div className="mt-1.5 flex flex-wrap gap-1">
          {block.items.map((item) => (
            <span
              key={item}
              className={cn(
                "border px-1.5 py-0.5 text-[9.5px] uppercase tracking-[0.12em]",
                theme.border,
                theme.textSoft
              )}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}