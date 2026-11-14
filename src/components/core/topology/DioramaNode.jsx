import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { themeFor } from "../nodeTheme";
import Pedestal from "./dioramas/Pedestal";
import DioramaScene from "./dioramas/DioramaScene";
import BillboardDiorama from "./BillboardDiorama";


const THICKNESS = 28;
const PAD = 14;
const HOVER_LIFT = 34;

// One diorama of the map: its pedestal and interior rise off the grid while it
// is lit, and its label is painted on the floor in front of the base.
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
  const lit = hovered || active;

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
      className={cn(
        "absolute block cursor-pointer bg-transparent p-0 outline-none [transform-style:preserve-3d] focus-visible:z-40",
        node.asset ? "z-30" : "z-10"
      )}
      style={{ left: node.x - half, top: node.y - half, width: node.size, height: node.size }}
    >
      {node.asset ? (
        <BillboardDiorama
          node={node}
          lit={lit}
          dimmed={dimmed}
          glowClass={theme.drop}
          layoutId={layoutId}
        />
      ) : (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 block [transform-style:preserve-3d]"
        >
          {/* the base and its interior lift together */}
          <span
            className="absolute inset-0 block [transform-style:preserve-3d] transition-transform duration-300 ease-out"
            style={{ transform: `translateZ(${lit ? HOVER_LIFT : 0}px)` }}
          >
            <Pedestal thickness={THICKNESS} theme={theme} lit={lit} />
            <span
              className="absolute block [transform-style:preserve-3d]"
              style={{ inset: PAD, transform: `translateZ(${THICKNESS + 1}px)` }}
            >
              <DioramaScene id={node.id} lit={lit} />
            </span>
          </span>
        </motion.div>
      )}

    </button>
  );
}