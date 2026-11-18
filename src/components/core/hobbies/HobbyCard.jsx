import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HobbyIcon from "./HobbyIcon";

// RPG inventory slot: the active item lights its yellow frame, every other
// slot stays recessed until hovered or focused.
export default function HobbyCard({ item, active, onActivate }) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      aria-pressed={active}
      className={cn(
        "flex min-h-[92px] flex-col items-start justify-between gap-2 border p-2.5 text-left transition-colors duration-200 focus-visible:outline-none",
        active
          ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_10px_#facc15]"
          : "border-zinc-800 bg-zinc-950/60 hover:border-yellow-400/50"
      )}
    >
      <HobbyIcon
        name={item.icon}
        className={cn(
          "h-5 w-5 transition-colors duration-200",
          active ? "text-yellow-300" : "text-zinc-500"
        )}
      />
      <span className="flex flex-col gap-0.5">
        <span
          className={cn(
            "text-[10px] sheet:text-[12px] uppercase leading-tight tracking-[0.12em]",
            active ? "text-yellow-200" : "text-zinc-300"
          )}
        >
          {item.name}
        </span>
        <span className="text-[8.5px] sheet:text-[12px] uppercase leading-tight tracking-[0.08em] text-zinc-400">
          {item.buff}
        </span>
      </span>
    </motion.button>
  );
}