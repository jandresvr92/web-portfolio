import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/I18nContext";
import { useTopology } from "@/lib/TopologyContext";
import { ACCENTS, directoryFor } from "./directoryData";

// Top-left HUD: the brand, a live shell prompt and the numbered node list.
// Hovering an entry lights the matching diorama; hovering a diorama lights the
// entry, because both read the same hoveredNode.
export default function NodeDirectory({ className }) {
  const { lang } = useI18n();
  const { hoveredNode, setHoveredNode, openNode, activeNode } = useTopology();
  const copy = directoryFor(lang);
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "pointer-events-auto w-[264px] border border-white/10 bg-zinc-950/70 p-4 font-mono backdrop-blur-md",
        className
      )}
    >
      <p className="font-body text-[13px] font-medium tracking-[0.04em] text-zinc-100">
        {copy.brand} <span className="text-neon">{copy.brandAccent}</span>
      </p>
      <p className="mt-1 text-[10px] tracking-[0.02em] text-neon/80">
        {copy.prompt}
        <span className="ml-0.5 inline-block animate-boot-caret motion-reduce:animate-none">
          _
        </span>
      </p>

      <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-zinc-600">
        {copy.directoryTitle}
      </p>

      <motion.ul className="mt-2.5 flex flex-col">
        {copy.nodes.map((node, index) => {
          const accent = ACCENTS[node.color];
          const lit = hoveredNode === node.id || activeNode === node.id;

          return (
            <motion.li
              key={node.id}
              initial={reduced ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.06 * index, ease: "easeOut" }}
            >
              <button
                type="button"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode(node.id)}
                onBlur={() => setHoveredNode(null)}
                onClick={() => openNode(node.id)}
                aria-pressed={activeNode === node.id}
                className={cn(
                  "flex w-full items-center gap-2 px-1 py-[7px] text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-neon",
                  lit ? accent.text : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200",
                    lit ? cn(accent.led, accent.glowDot) : "bg-zinc-700"
                  )}
                />
                <span aria-hidden="true" className="shrink-0 text-[10px] text-zinc-600">
                  &gt;
                </span>
                <span className="shrink-0 text-[10px] tabular-nums opacity-70">{node.code}</span>
                <span className="min-w-0 flex-1 truncate text-[11px] uppercase tracking-[0.08em]">
                  {node.name}
                </span>
              </button>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}