import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/I18nContext";
import { useTopology } from "@/lib/TopologyContext";
import { ACCENTS, directoryFor } from "./directoryData";

// Bottom-left console: reports the node currently under the pointer (or the one
// open) and falls back to the idle line when nothing is focused.
export default function StatusMonitor({ className }) {
  const { lang } = useI18n();
  const { hoveredNode, activeNode } = useTopology();
  const copy = directoryFor(lang);

  const focusId = hoveredNode ?? activeNode;
  const focusNode = focusId ? copy.nodes.find((node) => node.id === focusId) : null;
  const accent = focusNode ? ACCENTS[focusNode.color] : null;

  return (
    <div
      className={cn(
        "pointer-events-none w-[300px] border-l-2 border-neon/50 bg-zinc-950/60 px-3.5 py-3 font-mono backdrop-blur-sm",
        className
      )}
    >
      <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500">{copy.statusBase}</p>

      {focusNode ? (
        <>
          <p
            className={cn(
              "mt-1 text-[11px] uppercase tracking-[0.08em]",
              accent.text
            )}
          >
            {copy.statusLink}
            {focusNode.name}
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-zinc-400">
            {activeNode ? copy.statusOpen : copy.statusAccess}
          </p>
        </>
      ) : (
        <p className="mt-1 text-[10px] uppercase leading-relaxed tracking-[0.06em] text-zinc-400">
          {copy.statusAwaiting}
          <span className="ml-0.5 inline-block animate-boot-caret motion-reduce:animate-none">
            _
          </span>
        </p>
      )}
    </div>
  );
}