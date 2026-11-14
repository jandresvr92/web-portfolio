import { cn } from "@/lib/utils";
import Volume from "./Volume";

const BAYS = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(251,146,60,0.30) 0 1px, transparent 1px 6px), linear-gradient(180deg, #18181b, #09090b)",
};
const VENTS = {
  backgroundImage: "repeating-linear-gradient(90deg, rgba(148,163,184,0.30) 0 1px, transparent 1px 5px)",
  backgroundColor: "#18181b",
};
const RACKS = [
  { left: "6%", top: "14%", width: "17%", depth: "54%", tall: 92 },
  { left: "28%", top: "10%", width: "17%", depth: "58%", tall: 104 },
  { left: "50%", top: "16%", width: "17%", depth: "52%", tall: 86 },
  { left: "72%", top: "10%", width: "17%", depth: "56%", tall: 98 },
];
const LEDS = ["bg-amber-300", "bg-lime-300", "bg-orange-400", "bg-zinc-600"];

// 03 — a micro data center: rack towers with drive bays, blinking LEDs and dense
// cabling running into the patch panel.
export default function ServerDiorama() {
  return (
    <span className="absolute inset-0 block [transform-style:preserve-3d]">
      <span
        className="absolute inset-0 block border border-orange-400/20"
        style={{ background: "radial-gradient(circle at 45% 30%, rgba(251,146,60,0.16), rgba(9,9,11,0.65) 78%)" }}
      />

      {RACKS.map((rack) => (
        <span
          key={rack.left}
          className="absolute block [transform-style:preserve-3d]"
          style={{ left: rack.left, top: rack.top, width: rack.width, height: rack.depth }}
        >
          <Volume className="inset-0" height={rack.tall} frontStyle={BAYS} topStyle={VENTS} />
          {LEDS.map((tone, index) => (
            <span
              key={`${rack.left}-${tone}`}
              className={cn("absolute block h-[6%] w-[16%] animate-led-blink", tone)}
              style={{
                left: `${14 + (index % 2) * 54}%`,
                top: `${18 + Math.floor(index / 2) * 30}%`,
                transform: `translateZ(${rack.tall + 1}px)`,
                animationDelay: `${0.4 + index * 0.35}s`,
              }}
            />
          ))}
        </span>
      ))}

      {/* cabling across the floor */}
      {[
        { top: "74%", width: "88%", left: "6%" },
        { top: "80%", width: "70%", left: "18%" },
        { top: "86%", width: "52%", left: "44%" },
      ].map((cable) => (
        <span
          key={cable.top}
          className="absolute block h-[2px] bg-orange-400/70 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
          style={{ top: cable.top, left: cable.left, width: cable.width, transform: "translateZ(2px)" }}
        />
      ))}

      {/* cooling unit and patch panel */}
      <Volume
        className="left-[6%] top-[88%] h-[9%] w-[30%]"
        height={20}
        topClassName="bg-zinc-800"
        frontStyle={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(148,163,184,0.25) 0 2px, transparent 2px 7px)" }}
      />
      <Volume className="left-[48%] top-[90%] h-[7%] w-[46%]" height={10} topClassName="bg-zinc-700" />
    </span>
  );
}