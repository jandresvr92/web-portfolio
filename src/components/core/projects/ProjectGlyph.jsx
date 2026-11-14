import { Box, Gamepad2, Network } from "lucide-react";

// Lucide glyph matching each project's subject, shown in the card's visual area.
const GLYPHS = {
  graph: Network,
  gamepad: Gamepad2,
  box: Box,
};

export default function ProjectGlyph({ name }) {
  const Icon = GLYPHS[name] ?? Network;
  return (
    <Icon
      className="h-10 w-10 text-purple-400/70 transition-colors duration-300 group-hover:text-purple-300"
      strokeWidth={1.5}
      aria-hidden="true"
    />
  );
}