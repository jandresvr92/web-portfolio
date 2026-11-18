import { motion } from "framer-motion";
import ProjectGlyph from "./ProjectGlyph";

// One deployed module. The whole card is the link into the live deployment, so
// the visual, the title and the body all carry the hover state and open it.
// The visual is the project's screenshot when it has one, else its glyph.
export default function ProjectCard({ project, index }) {
  const { image } = project;

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
        {image ? (
          <>
            {/* Decorative: the title below names the project, so alt stays empty. */}
            <img
              src={image}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-75 saturate-[0.85] transition duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100"
            />
            {/* Dark purple tint that lifts on hover, matching the node's palette. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-purple-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-40"
            />
          </>
        ) : (
          <ProjectGlyph name={project.icon} />
        )}
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