import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import { useI18n } from "@/lib/i18n/I18nContext";
import { themeFor } from "../nodeTheme";
import AgentDossier from "../profile/AgentDossier";
import ExperiencePanel from "../experience/ExperiencePanel";
import HobbiesPanel from "../hobbies/HobbiesPanel";
import ProjectsPanel from "../projects/ProjectsPanel";
import TechStackPanel from "../stack/TechStackPanel";
import DetailBlock from "./DetailBlock";
import DioramaTile from "./DioramaTile";
import { CORE, LAYOUT_SPRING, layoutIdFor } from "./layout";

// Master-detail view of the opened node: its diorama lands on the left half
// while the dossier of that same node slides in from the right edge.
export default function NodeDetailView({ node, onClose }) {
  const { dict, t, lang } = useI18n();
  const theme = themeFor(node.accent);
  const isProfile = node.id === CORE.id;
  const hero = dict.panels.hero;
  const cluster = isProfile ? null : dict.clusters[node.dossier];

  return (
    <motion.div
      className="absolute inset-0 z-30 grid grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.26 } }}
    >
      <div className="flex items-center justify-center px-10">
        <motion.div
          layoutId={layoutIdFor(node.id)}
          transition={LAYOUT_SPRING}
          className="flex items-center justify-center"
          style={
            node.asset
              ? { width: "min(100%, 520px)", aspectRatio: "1536 / 1024" }
              : { width: node.size, height: node.size, perspective: "1600px" }
          }
        >
          {node.asset ? (
            <Image
              src={node.asset}
              alt={hero.name}
              draggable={false}
              className="h-full w-full select-none object-contain"
            />
          ) : (
            <DioramaTile node={node} />
          )}
        </motion.div>
      </div>

      <motion.aside
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.24 } }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        className={cn(
          "no-scrollbar relative flex h-full w-full flex-col overflow-y-auto border-l bg-zinc-950/95 p-8 backdrop-blur-md",
          theme.borderStrong,
          theme.shadowFloor
        )}
      >
        <div className="flex items-start justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label={t("interaction.close")}
            className="shrink-0 border border-white/15 p-1.5 text-zinc-400 transition-colors hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-neon"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {isProfile ? (
          <AgentDossier className="mt-5" />
        ) : node.id === "projects" ? (
          <ProjectsPanel currentLocale={lang} className="mt-6" />
        ) : node.id === "experience" ? (
          <ExperiencePanel currentLocale={lang} className="mt-6" />
        ) : node.id === "stack" ? (
          <TechStackPanel currentLocale={lang} className="mt-6" />
        ) : node.id === "hobbies" ? (
          <HobbiesPanel locale={lang} onClose={onClose} className="mt-6" />
        ) : (
          <>
            <h2 className="mt-5 text-[22px] uppercase leading-tight tracking-[0.08em] text-zinc-100">
              {cluster.role}
            </h2>
            {cluster.blocks.map((block) => (
              <DetailBlock key={block.label} block={block} theme={theme} />
            ))}
          </>
        )}
      </motion.aside>
    </motion.div>
  );
}