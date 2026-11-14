// Floor grid drawn in the plane's own coordinates, so it reads as isometric
// once the plane is tilted.
export default function IsoGrid() {
  const minor =
    "linear-gradient(hsl(var(--neon) / 0.10) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon) / 0.10) 1px, transparent 1px)";
  const major =
    "linear-gradient(hsl(var(--neon) / 0.20) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon) / 0.20) 1px, transparent 1px)";
  const mask = "radial-gradient(circle at center, black 0%, black 18%, transparent 58%)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `${major}, ${minor}`,
        backgroundSize: "320px 320px, 320px 320px, 64px 64px, 64px 64px",
        backgroundPosition: "center",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}