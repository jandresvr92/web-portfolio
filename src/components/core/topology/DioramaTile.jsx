import { PLANE_TRANSFORM } from "./layout";
import { themeFor } from "../nodeTheme";
import Pedestal from "./dioramas/Pedestal";
import DioramaScene from "./dioramas/DioramaScene";

const THICKNESS = 28;
const PAD = 14;

// A node's diorama shown on its own, off the map but still in its isometric
// frame, so it looks exactly like the miniature that left the grid.
export default function DioramaTile({ node }) {
  const theme = themeFor(node.accent);

  return (
    <div
      className="relative [transform-style:preserve-3d]"
      style={{ width: node.size, height: node.size, transform: PLANE_TRANSFORM }}
    >
      <Pedestal thickness={THICKNESS} theme={theme} lit />
      <span
        className="absolute block [transform-style:preserve-3d]"
        style={{ inset: PAD, transform: `translateZ(${THICKNESS + 1}px)` }}
      >
        <DioramaScene id={node.id} lit />
      </span>
    </div>
  );
}