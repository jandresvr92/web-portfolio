import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { themeFor } from "../nodeTheme";
import NodeDiagram from "./NodeDiagram";

// One row of the mobile column: the node's diagram over its indexed label.
export default function MobileNodeCard({ node, title, onOpen }) {
  const theme = themeFor(node.accent);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={title}
      className={cn(
        "terminal-card block w-full overflow-hidden border bg-zinc-900/40 text-left outline-none transition-colors duration-200 focus-visible:bg-white/5 active:bg-white/5",
        theme.border
      )}
    >
      <div className="flex h-[164px] items-center justify-center overflow-hidden">
        <NodeDiagram node={node} />
      </div>

      <div className={cn("flex items-center gap-2.5 border-t px-3.5 py-3.5", theme.border)}>
        <span className={cn("shrink-0 text-[13px] tabular-nums", theme.text)}>{node.index}</span>
        <span className="shrink-0 text-[13px] text-zinc-600">//</span>
        <span className="min-w-0 flex-1 truncate text-[15px] uppercase tracking-[0.1em] text-zinc-100">
          {title}
        </span>
        <ChevronRight className={cn("h-5 w-5 shrink-0", theme.textSoft)} />
      </div>
    </button>
  );
}