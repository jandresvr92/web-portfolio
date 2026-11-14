import { themeFor } from "../nodeTheme";
import { CORE, NODES, PLANE_SIZE } from "./layout";

// Cables laid on the floor: a recessed channel, an accent glow and a dash flow
// running outward from the central pedestal to each peripheral diorama. They
// meet in a single cross at the centre; the central room is lifted ahead of them
// in depth (see BillboardDiorama), so the room itself covers the crossing and no
// cable is ever cut short or painted over its artwork.
// The glow is painted with wide, low-opacity strokes instead of an SVG filter:
// a filter flattens the layer and breaks the 3D sorting, letting the cables
// paint over the dioramas.
export default function NetworkLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox={`0 0 ${PLANE_SIZE} ${PLANE_SIZE}`}
      style={{ transform: "translateZ(-24px)" }}
    >
      <g>
      {NODES.map((node) => {
        const theme = themeFor(node.accent);

        return (
          <g key={node.id}>
            <line
              x1={CORE.x}
              y1={CORE.y}
              x2={node.x}
              y2={node.y}
              stroke="#0b0b0e"
              strokeWidth="10"
              strokeOpacity="0.9"
            />
            <line
              x1={CORE.x}
              y1={CORE.y}
              x2={node.x}
              y2={node.y}
              stroke={theme.dash}
              strokeWidth="9"
              strokeOpacity="0.12"
            />
            <line
              x1={CORE.x}
              y1={CORE.y}
              x2={node.x}
              y2={node.y}
              stroke={theme.dash}
              strokeWidth="2.5"
              strokeOpacity="0.35"
            />
            <line
              x1={CORE.x}
              y1={CORE.y}
              x2={node.x}
              y2={node.y}
              stroke={theme.dash}
              strokeWidth="2.5"
              strokeDasharray="6 12"
              className="flow-line"
            />
            <circle cx={node.x} cy={node.y} r="5" fill={theme.dash} fillOpacity="0.55" />
            <circle cx={node.x} cy={node.y} r="2.5" fill={theme.dash} />
          </g>
        );
      })}
      </g>
    </svg>
  );
}