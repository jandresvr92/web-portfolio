import { Coffee, Gamepad2, Grid3X3, Mountain, Music4, PenLine } from "lucide-react";

// One simple line icon per inventory item, keyed by the dictionary's icon id.
const ICONS = {
  ViolinIcon: Music4,
  MountainIcon: Mountain,
  GridIcon: Grid3X3,
  GamepadIcon: Gamepad2,
  PenIcon: PenLine,
  CoffeeIcon: Coffee,
};

export default function HobbyIcon({ name, className }) {
  const Icon = ICONS[name] ?? Grid3X3;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}