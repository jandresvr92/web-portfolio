import Volume from "./Volume";

const GLASS = { background: "linear-gradient(140deg, rgba(163,230,53,0.42), rgba(20,83,45,0.4))" };
const WINDOWS = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(240,253,244,0.3) 0 1px, transparent 1px 6px), repeating-linear-gradient(0deg, rgba(240,253,244,0.22) 0 1px, transparent 1px 7px)",
};
const STALLS = {
  backgroundImage: "repeating-linear-gradient(90deg, rgba(244,244,245,0.28) 0 1px, transparent 1px 22px)",
};
const CARS = [
  { left: "13%", top: "67%", tone: "#ef4444" },
  { left: "25%", top: "67%", tone: "#a1a1aa" },
  { left: "37%", top: "67%", tone: "#f4f4f5" },
  { left: "61%", top: "78%", tone: "#ef4444" },
  { left: "73%", top: "78%", tone: "#71717a" },
];
const TREES = [
  { left: "4%", top: "44%" },
  { left: "88%", top: "32%" },
  { left: "46%", top: "14%" },
  { left: "82%", top: "90%" },
];

// 04 — a corporate campus: two glass office blocks above a parking lot with
// miniature cars, driveways and landscaping.
export default function CampusDiorama() {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      <span
        className="absolute inset-0 block border border-lime-400/25"
        style={{ background: "radial-gradient(circle at 50% 30%, rgba(163,230,53,0.14), rgba(6,24,12,0.7) 78%)" }}
      />

      {/* towers */}
      <Volume className="left-[8%] top-[8%] h-[34%] w-[34%]" height={76} topStyle={{ ...GLASS, ...WINDOWS }} />
      <Volume className="left-[52%] top-[14%] h-[26%] w-[26%]" height={52} topStyle={{ ...GLASS, ...WINDOWS }} />

      {/* rooftop units */}
      <span
        className="absolute left-[12%] top-[12%] block h-[8%] w-[10%] border border-lime-300/40 bg-zinc-500"
        style={{ transform: "translateZ(79px)" }}
      />
      <span
        className="absolute left-[56%] top-[18%] block h-[6%] w-[8%] border border-lime-300/40 bg-zinc-500"
        style={{ transform: "translateZ(55px)" }}
      />

      {/* driveway */}
      <span
        className="absolute left-[4%] top-[50%] block h-[5%] w-[90%] bg-zinc-700/80"
        style={{ transform: "translateZ(1px)" }}
      />
      <span
        className="absolute left-[4%] top-[50%] block h-[1%] w-[90%] bg-lime-300/40"
        style={{ transform: "translateZ(2px)" }}
      />

      {/* parking lot with painted stalls */}
      <span
        className="absolute left-[6%] top-[60%] block h-[34%] w-[88%] border border-zinc-600 bg-zinc-800"
        style={{ transform: "translateZ(1px)", ...STALLS }}
      />

      {/* cars */}
      {CARS.map((car) => (
        <span
          key={`${car.left}-${car.tone}`}
          className="absolute block h-[6%] w-[7%] rounded-[2px] border border-black/40"
          style={{ left: car.left, top: car.top, background: car.tone, transform: "translateZ(4px)" }}
        >
          <span className="absolute inset-[24%] block rounded-[1px] bg-black/35" />
        </span>
      ))}

      {/* trees */}
      {TREES.map((tree) => (
        <span
          key={tree.left}
          className="absolute block h-[8%] w-[8%] rounded-full border border-lime-300/30 bg-emerald-700"
          style={{ left: tree.left, top: tree.top, transform: "translateZ(14px)" }}
        />
      ))}
    </span>
  );
}