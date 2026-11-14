import Volume from "./Volume";

const GLASS = { background: "linear-gradient(135deg, rgba(192,132,252,0.5), rgba(76,29,149,0.35))" };
const WINDOWS = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(226,232,240,0.22) 0 1px, transparent 1px 7px), repeating-linear-gradient(0deg, rgba(226,232,240,0.18) 0 1px, transparent 1px 8px)",
};
const SOLAR = {
  background:
    "repeating-linear-gradient(90deg, rgba(56,189,248,0.4) 0 1px, transparent 1px 4px), rgba(8,47,73,0.92)",
};

// 02 — LABEX: a multi-level glass research tower with solar array and radar.
export default function LabexDiorama() {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      <span
        className="absolute inset-0 block border border-purple-400/25"
        style={{ background: "radial-gradient(circle at 42% 32%, rgba(168,85,247,0.18), rgba(9,9,11,0.6) 76%)" }}
      />

      {/* courtyard walkway */}
      <span
        className="absolute left-[6%] top-[72%] block h-[7%] w-[86%] bg-zinc-700/70"
        style={{ transform: "translateZ(1px)" }}
      />

      {/* main tower */}
      <Volume className="left-[10%] top-[8%] h-[40%] w-[38%]" height={96} topStyle={{ ...GLASS, ...WINDOWS }} />
      <span
        className="absolute left-[10%] top-[8%] block h-[40%] w-[38%] border border-purple-200/50"
        style={{ transform: "translateZ(97px)" }}
      />

      {/* annex with the solar deck */}
      <Volume className="left-[52%] top-[30%] h-[32%] w-[30%]" height={44} topStyle={{ ...GLASS, ...WINDOWS }} />
      {[0, 1, 2].map((panel) => (
        <span
          key={panel}
          className="absolute block border border-cyan-300/40"
          style={{
            left: `${54 + panel * 9}%`,
            top: "34%",
            width: "8%",
            height: "22%",
            transform: "translateZ(46px)",
            ...SOLAR,
          }}
        />
      ))}

      {/* radar dish on the roof */}
      <span
        className="absolute left-[22%] top-[14%] block h-[16%] w-[16%] rounded-full border border-purple-200/70"
        style={{
          transform: "translateZ(112px)",
          background: "radial-gradient(circle at 35% 30%, rgba(233,213,255,0.9), rgba(147,51,234,0.5))",
        }}
      />

      {/* antenna masts */}
      {[
        { left: "37%", top: "12%", tall: 26 },
        { left: "68%", top: "36%", tall: 18 },
      ].map((mast) => (
        <span
          key={mast.left}
          className="absolute block w-[1.5%] bg-purple-200/70"
          style={{
            left: mast.left,
            top: mast.top,
            height: mast.tall,
            transformOrigin: "center bottom",
            transform: "translateZ(98px) rotateX(-90deg)",
          }}
        />
      ))}

      {/* rooftop beacons */}
      <span
        className="absolute left-[42%] top-[40%] block h-[3%] w-[3%] rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.9)]"
        style={{ transform: "translateZ(99px)" }}
      />

      {/* trees on the plot */}
      {[
        { left: "8%", top: "58%" },
        { left: "82%", top: "22%" },
        { left: "34%", top: "62%" },
      ].map((tree) => (
        <span
          key={tree.left}
          className="absolute block h-[7%] w-[7%] rounded-full border border-emerald-300/30 bg-emerald-700/80"
          style={{ left: tree.left, top: tree.top, transform: "translateZ(12px)" }}
        />
      ))}
    </span>
  );
}