const WATER = {
  background: "linear-gradient(135deg, rgba(34,211,238,0.75), rgba(14,116,144,0.85))",
};
const TREES = [
  { left: "4%", top: "12%", size: "11%" },
  { left: "16%", top: "4%", size: "8%" },
  { left: "86%", top: "10%", size: "10%" },
  { left: "76%", top: "88%", size: "9%" },
  { left: "6%", top: "86%", size: "8%" },
];

// 05 — a recreational park: two pools, walking paths, a playground and greenery.
export default function ParkDiorama() {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      <span
        className="absolute inset-0 block border border-amber-300/25"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(163,230,53,0.18), rgba(6,24,12,0.72) 80%)" }}
      />

      {/* walking paths */}
      <span
        className="absolute left-[6%] top-[46%] block h-[6%] w-[88%] rounded-full bg-zinc-600/80"
        style={{ transform: "translateZ(1px)" }}
      />
      <span
        className="absolute left-[46%] top-[8%] block h-[84%] w-[6%] rounded-full bg-zinc-600/80"
        style={{ transform: "translateZ(1px)" }}
      />

      {/* pools */}
      {[
        { left: "10%", top: "12%", width: "26%", height: "26%" },
        { left: "10%", top: "58%", width: "26%", height: "28%" },
      ].map((pool) => (
        <span
          key={pool.top}
          className="absolute block border-2 border-cyan-200/50"
          style={{ ...pool, transform: "translateZ(1px)", background: "rgba(8,47,73,0.9)" }}
        >
          <span className="absolute inset-[10%] block" style={{ ...WATER, transform: "translateZ(2px)" }} />
          <span
            className="absolute left-[18%] top-[24%] block h-[10%] w-[46%] bg-white/60"
            style={{ transform: "translateZ(3px)" }}
          />
        </span>
      ))}

      {/* playground */}
      <span className="absolute left-[58%] top-[16%] block h-[30%] w-[32%] [transform-style:preserve-3d]">
        <span
          className="absolute left-0 top-0 block w-[8%] border border-amber-200/60 bg-amber-500/70"
          style={{ height: 26, transformOrigin: "center bottom", transform: "rotateX(-90deg)" }}
        />
        <span
          className="absolute left-[70%] top-[10%] block w-[8%] border border-amber-200/60 bg-amber-500/70"
          style={{ height: 26, transformOrigin: "center bottom", transform: "rotateX(-90deg)" }}
        />
        {/* slide */}
        <span
          className="absolute left-[14%] top-[58%] block h-[10%] w-[46%] border border-amber-200/70 bg-amber-300/80"
          style={{ transform: "translateZ(16px)", background: "linear-gradient(90deg, rgba(252,211,77,0.9), rgba(180,83,9,0.9))" }}
        />
        {/* swing beam */}
        <span
          className="absolute left-[8%] top-[34%] block h-[4%] w-[74%] bg-zinc-300/80"
          style={{ transform: "translateZ(24px)" }}
        />
      </span>

      {/* benches */}
      {[
        { left: "58%", top: "56%" },
        { left: "30%", top: "90%" },
      ].map((bench) => (
        <span
          key={bench.left}
          className="absolute block h-[4%] w-[14%] border border-zinc-400/50 bg-zinc-500"
          style={{ left: bench.left, top: bench.top, transform: "translateZ(8px)" }}
        />
      ))}

      {/* vegetation */}
      {TREES.map((tree) => (
        <span
          key={`${tree.left}-${tree.size}`}
          className="absolute block rounded-full border border-lime-300/30 bg-emerald-700"
          style={{
            left: tree.left,
            top: tree.top,
            width: tree.size,
            height: tree.size,
            transform: "translateZ(18px)",
          }}
        />
      ))}
      {TREES.map((tree) => (
        <span
          key={`shade-${tree.left}`}
          className="absolute block rounded-full bg-black/40 blur-[2px]"
          style={{
            left: `calc(${tree.left} + 3%)`,
            top: `calc(${tree.top} + 4%)`,
            width: tree.size,
            height: tree.size,
            transform: "translateZ(1px)",
          }}
        />
      ))}
    </span>
  );
}