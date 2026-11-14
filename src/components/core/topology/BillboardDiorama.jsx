import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BILLBOARD_TRANSFORM, STAGE_PERSPECTIVE, TILT_X } from "./layout";

// The packed artwork keeps a margin around the room it shows, so the box is
// sized from the room itself. Each node declares its own framing: the canvas
// ratio, the share of the canvas width the room spans, the width the room is
// drawn at (every room shares one size on screen), and the drop that puts the
// room's front corner just past the grid point the cables converge on.
const VISIBLE_WIDTH = 290;
const DEFAULT_FRAMING = {
  sourceAspect: 1024 / 1536,
  contentFraction: 0.8275,
  contentWidth: VISIBLE_WIDTH,
  baseDrop: 72,
};
const HOVER_LIFT = 20;

const TILT = (TILT_X * Math.PI) / 180;
const TILT_SIN = Math.sin(TILT);
const TILT_COS = Math.cos(TILT);
const TARGET_DEPTH = 130;

// The room faces the camera while the floor is tilted, so the half of the floor
// in front of it is nearer and would paint over the artwork (the cables used to
// run across it). Lifting the room ahead of that half of the floor puts it back
// on top, and the scale cancels the size the closer plane would otherwise gain,
// so the room looks exactly as it does at rest.
function depthFor(baseDrop) {
  const roomDepth = -TILT_SIN * baseDrop;
  const push = TARGET_DEPTH - roomDepth;
  const pushX = -0.7071 * TILT_SIN * push;
  const pushY = 0.7071 * TILT_SIN * push;
  const pushZ = (-1.4142 * TILT_COS * pushX) / TILT_SIN;
  return {
    pushX,
    pushY,
    pushZ,
    scale: (STAGE_PERSPECTIVE - TARGET_DEPTH) / (STAGE_PERSPECTIVE - roomDepth),
  };
}

// An isometric room supplied as artwork: it is counter-rotated against the
// tilted floor so it stands upright and faces the camera, with its base welded
// to the floor.
export default function BillboardDiorama({ node, lit, dimmed, glowClass, layoutId }) {
  const framing = { ...DEFAULT_FRAMING, ...node.framing };
  const boxWidth = Math.round(framing.contentWidth / framing.contentFraction);
  const boxHeight = Math.round(boxWidth * framing.sourceAspect);
  const { pushX, pushY, pushZ, scale } = depthFor(framing.baseDrop);

  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      {/* its exact bottom centre lands on the node's grid point, so the base of
          the room touches the intersection the cables converge on */}
      <span
        className="absolute left-1/2 top-1/2 block [transform-style:preserve-3d]"
        style={{
          width: boxWidth,
          height: boxHeight,
          transform: "translate(-50%, -100%)",
        }}
      >
        {/* counter-rotated about its own base, so the room stands upright while
            that base stays welded to the floor; the hover lift runs after it,
            straight up the screen, instead of along the tilted floor */}
        <span
          className="block h-full w-full [transform-style:preserve-3d] transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${pushX.toFixed(2)}px, ${pushY.toFixed(
              2
            )}px, ${pushZ.toFixed(2)}px) ${BILLBOARD_TRANSFORM} translateY(${
              framing.baseDrop - (lit ? HOVER_LIFT : 0)
            }px) scale(${scale.toFixed(4)})`,
            transformOrigin: "50% 100%",
          }}
        >
          {/* the shared element: this box is exactly the room's on-screen frame */}
          <motion.div layoutId={layoutId} className="h-full w-full">
            <img
              src={node.asset}
              alt=""
              width={boxWidth}
              height={boxHeight}
              draggable={false}
              // The dim lives on the flat artwork itself: an opacity on the
              // tilted wrapper would flatten its 3D transforms.
              className={cn(
                "h-full w-full select-none object-contain transition-opacity duration-300",
                dimmed ? "opacity-45" : lit ? cn("opacity-100", glowClass) : "opacity-95"
              )}
            />
          </motion.div>
        </span>
      </span>
    </span>
  );
}