import IsoGrid from "./IsoGrid";

// The isometric floor: the grid is drawn in the plane's own coordinates and the
// plane carries the tilt. The glass panels float in their own stage above it.
export default function IsoPlane() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1900px] w-[1900px] [transform:translate(-50%,-50%)_rotateX(60deg)_rotateZ(-45deg)]">
      <IsoGrid />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--neon)/0.10),transparent_62%)]" />
    </div>
  );
}