import { cn } from "@/lib/utils";

// One localized dossier block inside the desktop detail panel.
export default function DetailBlock({ block, theme }) {
  return (
    <div className="mt-4">
      <p className={cn("text-[9px] uppercase tracking-[0.24em]", theme.textSoft)}>{block.label}</p>

      {block.kind === "text" && (
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-300">{block.value}</p>
      )}

      {block.kind === "list" && (
        <ul className="mt-2 space-y-1.5">
          {block.items.map((item) => (
            <li key={item.name} className={cn("border-l pl-2.5", theme.border)}>
              <p className={cn("text-[12px]", theme.text)}>{item.name}</p>
              <p className="text-[10.5px] text-zinc-500">{item.note}</p>
            </li>
          ))}
        </ul>
      )}

      {block.kind === "tags" && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {block.items.map((item) => (
            <span
              key={item}
              className={cn(
                "border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em]",
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