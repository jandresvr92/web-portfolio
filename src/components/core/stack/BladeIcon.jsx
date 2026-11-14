// Technical glyphs mounted in a blade's left slot: a chip, a node graph or a
// wireframe atom, one per category of the stack.
const SHAPES = {
  chip: (
    <>
      <rect x="7.5" y="7.5" width="9" height="9" rx="1" />
      <path d="M10 4.5v3M14 4.5v3M10 16.5v3M14 16.5v3M4.5 10h3M4.5 14h3M16.5 10h3M16.5 14h3" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="10" cy="18" r="2" />
      <path d="M7.7 7.2 10 16M17 9.8 11.6 16.6M8 6.6l8 1.1" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.6" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.6" transform="rotate(120 12 12)" />
    </>
  ),
};

export default function BladeIcon({ shape = "chip", className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {SHAPES[shape] ?? SHAPES.chip}
    </svg>
  );
}