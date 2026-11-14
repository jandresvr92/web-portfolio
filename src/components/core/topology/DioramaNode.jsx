import { themeFor } from "../nodeTheme";
import BillboardDiorama from "./BillboardDiorama";

// One room of the map: its isometric artwork stands on the grid as a billboard
// and lifts while it is lit.
export default function DioramaNode({
  node,
  label,
  active,
  hovered,
  dimmed,
  layoutId,
  onSelect,
  onHover,
  onLeave,
}) {
  const theme = themeFor(node.accent);
  const half = node.size / 2;

  return (
    <button
      type="button"
      onClick={() => onSelect(node.id)}
      onMouseEnter={() => onHover(node.id)}
      onFocus={() => onHover(node.id)}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      aria-label={label}
      aria-pressed={active}
      className="absolute z-30 block cursor-pointer bg-transparent p-0 outline-none [transform-style:preserve-3d] focus-visible:z-40"
      style={{ left: node.x - half, top: node.y - half, width: node.size, height: node.size }}
    >
      <BillboardDiorama
        node={node}
        lit={hovered || active}
        dimmed={dimmed}
        glowClass={theme.drop}
        layoutId={layoutId}
      />
    </button>
  );
}
