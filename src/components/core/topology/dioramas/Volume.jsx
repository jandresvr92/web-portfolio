import { cn } from "@/lib/utils";

// An extruded block: a lit top face plus the two walls the camera sees, so the
// furniture inside a diorama reads as volume instead of flat paint.
export default function Volume({ className, height = 40, topClassName, topStyle, frontStyle, sideStyle }) {
  return (
    <span className={cn("absolute block [transform-style:preserve-3d]", className)}>
      <span
        className="absolute bottom-0 left-0 block w-full bg-zinc-900"
        style={{ height, transformOrigin: "center top", transform: "rotateX(90deg)", ...frontStyle }}
      />
      <span
        className="absolute right-0 top-0 block h-full bg-zinc-950"
        style={{ width: height, transformOrigin: "right center", transform: "rotateY(90deg)", ...sideStyle }}
      />
      <span
        className={cn("absolute inset-0 block bg-zinc-700", topClassName)}
        style={{ transform: `translateZ(${height}px)`, ...topStyle }}
      />
    </span>
  );
}