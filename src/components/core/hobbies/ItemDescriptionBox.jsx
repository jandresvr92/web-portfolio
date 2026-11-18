import { AnimatePresence, motion } from "framer-motion";

// Terminal readout under the grid: swaps its whole body when the active item
// changes, so no field ever mixes two hobbies.
export default function ItemDescriptionBox({ copy, item }) {
  return (
    <div className="mt-4 border border-zinc-800 bg-zinc-950/70 p-4">
      <p className="text-[9px] sheet:text-[12px] uppercase tracking-[0.26em] text-yellow-400/70">
        {copy.descriptionLabel}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <p className="mt-3 text-[10px] sheet:text-[12px] uppercase tracking-[0.16em] text-zinc-400">
            {copy.selectedLabel}
          </p>
          <p className="text-[13px] sheet:text-[18px] uppercase tracking-[0.16em] text-yellow-300">{item.name}</p>

          <p className="mt-3 text-[10px] sheet:text-[12px] uppercase tracking-[0.16em] text-zinc-400">
            {copy.buffLabel}
          </p>
          <p className="text-[11px] sheet:text-[12px] uppercase leading-relaxed tracking-[0.12em] text-yellow-200/90">
            {item.buff}
          </p>

          <p className="mt-3 text-[13px] sheet:text-[16px] leading-relaxed text-zinc-300">{item.desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}