import { useState } from "react";
import { cn } from "@/lib/utils";
import HobbyCard from "./HobbyCard";
import ItemDescriptionBox from "./ItemDescriptionBox";
import { hobbiesFor } from "./hobbiesData";

// Inventory screen of the hobbies node: a 3x2 slot grid on top and the
// terminal readout of the active slot underneath.
export default function HobbiesPanel({ locale, onClose, className }) {
  const copy = hobbiesFor(locale);
  const [activeId, setActiveId] = useState(copy.items[0].id);
  const active = copy.items.find((item) => item.id === activeId) ?? copy.items[0];

  return (
    <div className={cn("font-mono", className)}>
      <p className="text-[9px] uppercase tracking-[0.3em] text-yellow-400/70">{copy.subtitle}</p>
      <h2 className="mt-1 text-[22px] uppercase leading-tight tracking-[0.14em] text-yellow-300">
        {copy.title}
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {copy.items.map((item) => (
          <HobbyCard
            key={item.id}
            item={item}
            active={item.id === active.id}
            onActivate={() => setActiveId(item.id)}
          />
        ))}
      </div>

      <ItemDescriptionBox copy={copy} item={active} />

      <button
        type="button"
        onClick={onClose}
        className="mt-4 w-full border border-yellow-400/40 px-3 py-2.5 text-[10px] uppercase tracking-[0.2em] text-yellow-300 transition-colors duration-200 hover:border-yellow-400 hover:bg-yellow-400/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-yellow-400"
      >
        {copy.closePanel}
      </button>
    </div>
  );
}