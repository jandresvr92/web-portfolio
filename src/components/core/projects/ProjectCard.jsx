import { motion } from "framer-motion";
import ProjectGlyph from "./ProjectGlyph";

// One deployed module. The whole card is the link into the live deployment, so
// the icon, the title and the body all carry the hover state and open it.
export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col rounded-sm border border-gray-800 bg-black/40 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-gray-800 bg-gray-900">
        <ProjectGlyph name={project.icon} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-body text-[15px] sheet:text-[18px] font-bold tracking-[0.01em] text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
          {project.title}
        </h3>

        <p className="mt-1.5 text-[11.5px] sheet:text-[16px] leading-relaxed text-zinc-400">{project.desc}</p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-gray-800 px-1 py-0.5 text-[10px] sheet:text-[12px] uppercase tracking-widest text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-auto pt-3 self-end text-[9px] sheet:text-[12px] uppercase tracking-[0.16em] text-green-400 animate-pulse">
          {project.status}
        </span>
      </div>
    </motion.a>
  );
}