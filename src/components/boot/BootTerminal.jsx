import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/I18nContext";

const PAUSE_COST = 10;
const TICK_MS = 16;

export default function BootTerminal({ onComplete }) {
  const { dict } = useI18n();
  const boot = dict.boot;

  const [typed, setTyped] = useState(0);
  const [exiting, setExiting] = useState(false);

  const totalCost = useMemo(
    () => boot.lines.reduce((acc, line) => acc + line.length + PAUSE_COST, 0) + boot.ready.length,
    [boot]
  );

  // Typewriter: one character per tick.
  useEffect(() => {
    if (typed >= totalCost) return;
    const timer = setTimeout(() => setTyped((value) => value + 1), TICK_MS);
    return () => clearTimeout(timer);
  }, [typed, totalCost]);

  // Hard timeline: fade at 3s, unmount shortly after.
  useEffect(() => {
    const fade = setTimeout(() => setExiting(true), 3000);
    const done = setTimeout(() => onComplete?.(), 3600);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [onComplete]);

  let offset = 0;
  const lines = boot.lines.map((line) => {
    const shown = Math.min(Math.max(typed - offset, 0), line.length);
    offset += line.length + PAUSE_COST;
    return { text: line.slice(0, shown), done: shown === line.length };
  });
  const readyShown = boot.ready.slice(0, Math.min(Math.max(typed - offset, 0), boot.ready.length));
  const finished = typed >= totalCost;

  return (
    <div
      role="status"
      aria-label={boot.label}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 px-4 transition-all duration-500 motion-reduce:transition-none",
        exiting ? "pointer-events-none scale-[0.98] opacity-0" : "opacity-100"
      )}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-2 truncate text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            {boot.window}
          </span>
        </div>

        {/* Log body */}
        <div className="min-h-[190px] px-5 py-4 text-[13px] leading-7 text-zinc-400">
          {lines.map((line, index) => (
            <div key={index} className="flex items-baseline gap-2">
              <span className="text-neon">▸</span>
              <span className="text-zinc-300">{line.text}</span>
              {line.done && (
                <span className="ml-auto text-[10px] uppercase tracking-[0.25em] text-neon/80">
                  [ ok ]
                </span>
              )}
            </div>
          ))}

          <div className="mt-1 flex items-baseline gap-2 text-neon">
            <span>{readyShown}</span>
            {!finished && (
              <span className="inline-block h-3.5 w-[7px] animate-boot-caret bg-neon align-middle motion-reduce:animate-none" />
            )}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <span>ttys001</span>
          <span className={cn("transition-colors", finished ? "text-neon/80" : "text-zinc-600")}>
            {finished ? boot.linked : boot.booting}
          </span>
        </div>
      </div>
    </div>
  );
}