import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/I18nContext";
import { themeFor } from "../nodeTheme";
import AgentDossier from "../profile/AgentDossier";
import ExperiencePanel from "../experience/ExperiencePanel";
import HobbiesPanel from "../hobbies/HobbiesPanel";
import ProjectsPanel from "../projects/ProjectsPanel";
import TechStackPanel from "../stack/TechStackPanel";
import NodeDiagram from "./NodeDiagram";

// A node opened on mobile: the diagram takes the top of the screen and the
// node's own content fills the rest, the two spanning the whole viewport.
export default function MobileNodeSheet({ node, onClose }) {
  const { t, lang } = useI18n();
  const theme = themeFor(node.accent);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-[100dvh] w-full flex-col bg-zinc-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: -14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 210, damping: 26 }}
        className={cn(
          "relative flex h-[30dvh] shrink-0 items-center justify-center overflow-hidden border-b",
          theme.border
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("interaction.close")}
          className="flex h-full w-full items-center justify-center"
        >
          <NodeDiagram node={node} fill />
        </button>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-end p-4 pt-[calc(env(safe-area-inset-top)+0.75rem)]">
          <button
            type="button"
            onClick={onClose}
            aria-label={t("interaction.close")}
            className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 bg-zinc-950/80 text-zinc-200 transition-colors active:border-white/50 active:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-neon"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 26 }}
        className="mobile-sheet min-h-0 flex-1 overflow-y-auto px-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-5"
      >
        {node.profile ? (
          <AgentDossier />
        ) : node.nodeId === "projects" ? (
          <ProjectsPanel currentLocale={lang} />
        ) : node.nodeId === "experience" ? (
          <ExperiencePanel currentLocale={lang} mobile />
        ) : node.nodeId === "stack" ? (
          <TechStackPanel currentLocale={lang} />
        ) : node.nodeId === "hobbies" ? (
          <HobbiesPanel locale={lang} onClose={onClose} />
        ) : null}
      </motion.div>
    </motion.div>
  );
}