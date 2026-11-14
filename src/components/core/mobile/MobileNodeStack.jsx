import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/I18nContext";
import { AVATAR_PATH } from "../profileAsset";
import LanguageToggle from "../LanguageToggle";
import MobileNodeCard from "./MobileNodeCard";
import MobileNodeSheet from "./MobileNodeSheet";
import { MOBILE_NODES } from "./mobileNodes";

// Mobile-only experience: every node of the map stacked in a single column.
// Opening one fills the screen with its diagram on top and its content below.
export default function MobileNodeStack({ revealed }) {
  const { t, dict } = useI18n();
  const [openKey, setOpenKey] = useState(null);

  const open = MOBILE_NODES.find((node) => node.key === openKey) ?? null;

  const titleFor = (node) => t(`nodes.${node.nodeId}`);
  const roleFor = (node) =>
    node.profile ? dict.panels.hero.role : dict.clusters[node.key].role;

  return (
    <div
      className={cn(
        // Every touch-only device gets the column, even a wide one; with a mouse
        // it shows below the wide-screen breakpoint.
        "relative flex h-[100dvh] w-full flex-col bg-zinc-950 font-mono text-zinc-300 transition-opacity duration-1000 lg:hidden [@media(hover:none)]:!flex",
        revealed ? "opacity-100" : "opacity-0"
      )}
    >
      {/* STICKY HUD */}
      <header className="shrink-0 border-b border-zinc-800 bg-zinc-950 px-4 pb-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={AVATAR_PATH}
              alt=""
              width={44}
              height={44}
              draggable={false}
              className="h-11 w-11 shrink-0 select-none border border-neon/40 object-cover"
            />
            <p className="min-w-0 truncate text-[14px] uppercase tracking-[0.1em] text-zinc-100">
              Jaime Andrés <span className="text-neon">- Dev</span>
            </p>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* NODE COLUMN */}
      <main className="terminal-feed min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-4">
        <div className="flex flex-col gap-3">
          {MOBILE_NODES.map((node) => (
            <MobileNodeCard
              key={node.key}
              node={node}
              title={titleFor(node)}
              role={roleFor(node)}
              onOpen={() => setOpenKey(node.key)}
            />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {open && <MobileNodeSheet key={open.key} node={open} onClose={() => setOpenKey(null)} />}
      </AnimatePresence>
    </div>
  );
}