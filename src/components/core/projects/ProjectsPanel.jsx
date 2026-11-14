import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectsFor } from "./projectsData";
import ProjectCard from "./ProjectCard";
import LockedCard from "./LockedCard";

// Deployment grid of the projects node: deployed modules above, reserved slots
// below, closing with the cluster's diagnostic line.
export default function ProjectsPanel({ currentLocale, className }) {
  const data = projectsFor(currentLocale);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentLocale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.16 } }}
        transition={{ duration: 0.24 }}
        className={cn("font-mono", className)}
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400/60">{data.subtitle}</p>
        <h2 className="mt-1 text-[22px] uppercase leading-tight tracking-[0.14em] text-purple-300 animate-pulse drop-shadow-[0_0_14px_rgba(168,85,247,0.45)]">
          {data.title}
        </h2>

        <p className="mt-6 text-[9px] uppercase tracking-[0.24em] text-zinc-500">
          {data.sections.active}
        </p>
        <div className="mt-2.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.active.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <p className="mt-6 text-[9px] uppercase tracking-[0.24em] text-zinc-500">
          {data.sections.locked}
        </p>
        <div className="mt-2.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.placeholders.map((placeholder, index) => (
            <LockedCard key={placeholder.id} placeholder={placeholder} index={index} />
          ))}
        </div>

        <p className="mt-6 border-t border-gray-800 pt-3 text-[10px] uppercase leading-relaxed tracking-[0.12em] text-purple-300/70">
          {data.statusLine}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}