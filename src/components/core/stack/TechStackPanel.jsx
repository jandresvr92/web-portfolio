import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import StackItem from "./StackItem";
import { stackFor } from "./stackData";

export const TABS = ["front", "back", "env"];
// Each category mounts its own glyph in the blades' hardware slot.
export const SHAPES = { front: "chip", back: "nodes", env: "atom" };

// Data-center view of the tech stack node: three switch tabs over four server
// blades each, closing with the system status line.
export default function TechStackPanel({ currentLocale, className }) {
  const data = stackFor(currentLocale);
  const [activeTab, setActiveTab] = useState("front");

  return (
    <div className={cn("font-mono", className)}>
      <p className="text-[9px] sheet:text-[12px] uppercase tracking-[0.3em] text-orange-500/60">
        {data.subtitle}
      </p>
      <h2 className="mt-1 text-[22px] uppercase leading-tight tracking-[0.14em] text-orange-300">
        {data.title}
      </h2>

      <div
        role="tablist"
        aria-label={data.title}
        className="mt-5 flex flex-wrap gap-x-6 gap-y-1 border-b border-gray-800"
      >
        {TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "-mb-px whitespace-nowrap border-b-2 pb-2 text-[9.5px] uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline-none sm:text-[10px] sheet:text-[12px]",
                active
                  ? "border-orange-500 text-white"
                  : "border-transparent text-gray-500 hover:text-zinc-300"
              )}
            >
              {data.tabs[tab]}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mt-4 flex flex-col gap-2.5"
        >
          {data.content[activeTab].map((item) => (
            <StackItem key={item.id} item={item} shape={SHAPES[activeTab]} />
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 border-t border-gray-800 pt-3 text-[10px] sheet:text-[12px] uppercase leading-relaxed tracking-[0.12em] text-orange-400/70">
        {data.statusLine}
      </p>
    </div>
  );
}