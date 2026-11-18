import { cn } from "@/lib/utils";
import IsoPlane from "./IsoPlane";
import LanguageToggle from "./LanguageToggle";
import TopologyStage from "./topology/TopologyStage";
import InteractiveDirectorHub from "./director/InteractiveDirectorHub";
import MobileNodeStack from "./mobile/MobileNodeStack";
import { useTopology } from "@/lib/TopologyContext";

export default function TopologyScene({ revealed }) {
  // The open dossier owns the top-right corner, so the language switch steps
  // aside while a node is selected.
  const { activeNode } = useTopology();

  return (
    <>
      {/* Below md the portfolio becomes a flat terminal feed */}
      <MobileNodeStack revealed={revealed} />

      <section
        className={cn(
          // The isometric map is the wide-screen, mouse-driven experience; any
          // touch-only device gets the flat column instead, whatever its width.
          "relative hidden min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950 transition-opacity duration-1000 lg:flex [@media(hover:none)]:!hidden",
          revealed ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          <IsoPlane />
        </div>

        {/* Deepens the floor behind the panels so the glass reads as floating */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(9,9,11,0.30)_0%,rgba(9,9,11,0.86)_78%)]"
        />

        <TopologyStage />

        {/* Director hub: the node directory sits above the map, its console below */}
        <InteractiveDirectorHub />

        {/* Canvas HUD (screen space, never tilted) */}
        <div className="pointer-events-none absolute inset-0 z-40 flex flex-col justify-between p-7 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
          <div className="flex items-start justify-end gap-4">
            <div className="pointer-events-auto flex items-center gap-3">
              {!activeNode && <LanguageToggle />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}