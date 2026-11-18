import BladeIcon from "./BladeIcon";

// One server blade: hardware slot, tech identity in the middle, live readout on
// the right. The border lights up orange when the blade is inspected.
export default function StackItem({ item, shape }) {
  return (
    <li className="group flex items-center gap-3 border border-gray-800 bg-zinc-900/40 px-3 py-2.5 transition-colors duration-200 hover:border-orange-500/50">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-800 bg-zinc-950/70 text-orange-500/70 transition-colors duration-200 group-hover:text-orange-400">
        <BladeIcon shape={shape} className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] sheet:text-[17px] font-bold leading-snug text-zinc-100">
          {item.name}
        </p>
        <p className="mt-0.5 text-[10.5px] sheet:text-[16px] leading-snug text-zinc-400">{item.desc}</p>
      </div>
    </li>
  );
}