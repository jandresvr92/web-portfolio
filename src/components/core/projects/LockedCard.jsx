import { motion } from "framer-motion";
import { Lock } from "lucide-react";

// A reserved slot in the deployment grid: no release yet.
export default function LockedCard({ placeholder, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 0.4, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col items-center justify-center rounded-sm border border-dashed border-gray-800 bg-transparent p-6 text-center"
    >
      <Lock size={16} className="text-purple-400/70" aria-hidden="true" />
      <p className="mt-2 text-[10px] sheet:text-[12px] uppercase leading-relaxed tracking-[0.14em] text-zinc-400">
        {placeholder.label}
      </p>
      <p className="mt-1 text-[9px] sheet:text-[12px] uppercase tracking-[0.2em] text-zinc-500">{placeholder.sub}</p>
    </motion.div>
  );
}