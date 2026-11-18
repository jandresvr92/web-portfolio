import { HOBBIES_COPY } from "./hobbiesCopy";

// Inventory slots, in display order. The panel is a fixed 3×2 grid (2×3 on
// phones), so there are exactly INVENTORY_SLOTS items: to add a hobby, swap one
// out. `icon` is a key of HobbyIcon's ICONS; names, buffs and descriptions live
// in hobbiesCopy.js under the same id.
export const INVENTORY_SLOTS = 6;

export const HOBBIES = [
  { id: "violin", icon: "ViolinIcon" },
  { id: "hiking", icon: "MountainIcon" },
  { id: "sudoku", icon: "GridIcon" },
  { id: "gaming", icon: "GamepadIcon" },
  { id: "writing", icon: "PenIcon" },
  { id: "coffee", icon: "CoffeeIcon" },
];

// The hobbies node as the panel renders it, in one language.
export function hobbiesFor(lang) {
  const { items, ...labels } = HOBBIES_COPY[lang] ?? HOBBIES_COPY.en;
  return { ...labels, items: HOBBIES.map((hobby) => ({ ...hobby, ...items[hobby.id] })) };
}
