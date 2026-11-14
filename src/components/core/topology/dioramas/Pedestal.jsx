import { cn } from "@/lib/utils";

// The thick physical base a diorama rests on: a lit neon lip at its foot, the
// two camera-facing walls with vent slots, and a dark plate to build on.
export default function Pedestal({ thickness, theme, lit }) {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      {/* accent lip at the foot of the slab */}
      <span
        className={cn(
          "absolute -inset-1 block border-2 transition-all duration-300",
          theme.borderStrong,
          lit ? "opacity-100" : "opacity-60"
        )}
        style={{ transform: "translateZ(2px)" }}
      />

      {/* south wall (+Y), vent slots facing the viewer */}
      <span
        className="absolute bottom-0 left-0 block w-full border-t border-white/10"
        style={{
          height: thickness,
          transformOrigin: "center top",
          transform: "rotateX(90deg)",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(63,63,70,0.55) 0 2px, transparent 2px 11px), linear-gradient(180deg, #27272a, #09090b)",
        }}
      />

      {/* east wall (+X), the shaded side */}
      <span
        className="absolute right-0 top-0 block h-full"
        style={{
          width: thickness,
          transformOrigin: "right center",
          transform: "rotateY(90deg)",
          background: "linear-gradient(180deg, #1c1c20, #050507)",
        }}
      />

      {/* top plate */}
      <span
        className="absolute inset-0 block border border-white/10 bg-zinc-900"
        style={{ transform: `translateZ(${thickness}px)`, boxShadow: "inset 0 0 46px rgba(0,0,0,0.95)" }}
      />
    </span>
  );
}