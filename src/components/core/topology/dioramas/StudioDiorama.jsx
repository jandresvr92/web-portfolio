import { cn } from "@/lib/utils";
import Volume from "./Volume";

const BOOKS = ["bg-cyan-400/70", "bg-purple-400/70", "bg-orange-400/70", "bg-lime-400/70", "bg-zinc-300/70"];

// 01 — a cutaway micro studio: desk with a glowing screen, shelves, bed, plant.
export default function StudioDiorama({ lit }) {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      <span
        className="absolute inset-0 block"
        style={{ background: "radial-gradient(circle at 58% 38%, rgba(34,211,238,0.14), transparent 72%)" }}
      />

      {/* cutaway walls */}
      <span
        className="absolute left-0 top-0 block w-full border-b border-cyan-400/30 bg-zinc-900"
        style={{ height: 46, transformOrigin: "center top", transform: "rotateX(90deg)" }}
      >
        <span className="absolute inset-x-[18%] bottom-[18%] top-[26%] block bg-cyan-300/20" />
      </span>
      <span
        className="absolute left-0 top-0 block h-full bg-zinc-900"
        style={{ width: 34, transformOrigin: "left center", transform: "rotateY(-90deg)" }}
      />

      {/* rug */}
      <span className="absolute left-[34%] top-[54%] block h-[28%] w-[32%] border border-cyan-400/20 bg-cyan-500/10" />

      {/* desk */}
      <Volume className="left-[9%] top-[13%] h-[15%] w-[44%]" height={16} topClassName="bg-zinc-600" />

      {/* screen standing on the desk */}
      <span
        className={cn(
          "absolute left-[21%] top-[19%] block w-[23%] border border-cyan-300/60 bg-gradient-to-b from-cyan-100/80 to-cyan-500/25",
          lit && "shadow-[0_0_24px_rgba(34,211,238,0.7)]"
        )}
        style={{ height: 22, transformOrigin: "center bottom", transform: "translateZ(16px) rotateX(-90deg)" }}
      />

      {/* desk clutter */}
      <span
        className="absolute left-[48%] top-[16%] block h-[4%] w-[6%] bg-zinc-400"
        style={{ transform: "translateZ(18px)" }}
      />
      <span
        className="absolute left-[58%] top-[15%] block h-[9%] w-[7%] rounded-full bg-emerald-500"
        style={{ transform: "translateZ(18px)" }}
      />

      {/* chair and the developer */}
      <span
        className="absolute left-[26%] top-[32%] block h-[11%] w-[12%] rounded-full border border-zinc-500/70 bg-zinc-700"
        style={{ transform: "translateZ(7px)" }}
      />
      <span
        className="absolute left-[27%] top-[43%] block h-[4%] w-[9%] rounded-[2px] bg-zinc-600"
        style={{ transform: "translateZ(9px)" }}
      />
      <span
        className="absolute left-[29.5%] top-[33.5%] block h-[5%] w-[5%] rounded-full bg-cyan-200"
        style={{ transform: "translateZ(17px)" }}
      />
      <span
        className="absolute left-[27%] top-[37%] block h-[4%] w-[10%] rounded-[2px] bg-cyan-300/70"
        style={{ transform: "translateZ(11px)" }}
      />

      {/* shelves with books */}
      <Volume className="left-[63%] top-[5%] h-[30%] w-[13%]" height={40} topClassName="bg-zinc-800" />
      {BOOKS.map((tone, index) => (
        <span
          key={tone}
          className={cn("absolute block", tone)}
          style={{
            left: `${64.5 + index * 2.2}%`,
            top: "9%",
            width: "1.6%",
            height: "16%",
            transform: "translateZ(41px)",
          }}
        />
      ))}

      {/* bed */}
      <Volume className="left-[50%] top-[55%] h-[33%] w-[42%]" height={10} topClassName="bg-zinc-700" />
      <span
        className="absolute left-[54%] top-[58%] block h-[9%] w-[13%] rounded-[2px] bg-zinc-200"
        style={{ transform: "translateZ(12px)" }}
      />
      <span
        className="absolute left-[72%] top-[70%] block h-[13%] w-[16%] border border-cyan-400/25 bg-cyan-400/15"
        style={{ transform: "translateZ(11px)" }}
      />

      {/* floor lamp bloom */}
      <span
        className="absolute left-[8%] top-[46%] block h-[26%] w-[26%] rounded-full bg-cyan-400/15 blur-md"
        style={{ transform: "translateZ(2px)" }}
      />
    </span>
  );
}