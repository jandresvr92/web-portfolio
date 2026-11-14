import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { experienceFor } from "./experienceData";

// System-log view of the experience node: a glowing green rail holding one
// commit card per job, closing with the system status line.
export default function ExperiencePanel({ currentLocale, className, mobile = false }) {
  const data = experienceFor(currentLocale);

  return (
    <div className={cn("font-mono", className)}>
      <p
        className={cn(
          "uppercase text-green-500/60",
          mobile ? "text-[11px] tracking-[0.24em]" : "text-[9px] tracking-[0.3em]"
        )}
      >
        {data.subtitle}
      </p>
      <h2
        className={cn(
          "mt-1 uppercase leading-tight text-green-300",
          mobile ? "text-[26px] tracking-[0.1em]" : "text-[22px] tracking-[0.14em]"
        )}
      >
        {data.title}
      </h2>

      <ol className="mt-6 border-l-2 border-green-500/40 pl-5">
        {data.jobs.map((job, index) => (
          <motion.li
            key={`${job.company}-${job.date}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.32, delay: index * 0.09, ease: "easeOut" }}
            className="relative pb-5 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[26px] top-[11px] h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"
            />
            <div
              className={cn(
                "border border-gray-800 bg-white/[0.02] transition-colors duration-200 hover:border-green-500/50",
                mobile ? "p-4" : "p-3.5"
              )}
            >
              <h3
                className={cn(
                  "font-semibold leading-snug tracking-[0.01em] text-zinc-100",
                  mobile ? "text-[17px]" : "text-[13px]"
                )}
              >
                {job.role}
              </h3>
              <p
                className={cn(
                  "mt-1 uppercase text-green-400/80",
                  mobile ? "text-[12.5px] tracking-[0.1em]" : "text-[10px] tracking-[0.14em]"
                )}
              >
                {job.company} <span className="text-zinc-500">// {job.date}</span>
              </p>
              <ul className={cn("flex flex-col", mobile ? "mt-3 gap-2" : "mt-2.5 gap-1.5")}>
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className={cn(
                      "flex gap-2 leading-relaxed text-zinc-400",
                      mobile ? "text-[14.5px]" : "text-[11.5px]"
                    )}
                  >
                    <span aria-hidden="true" className="shrink-0 text-green-500">
                      &gt;
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>

      <p
        className={cn(
          "mt-5 border-t border-gray-800 pt-3 uppercase leading-relaxed tracking-[0.12em] text-green-400/70",
          mobile ? "text-[12.5px]" : "text-[10px]"
        )}
      >
        {data.statusLine}
      </p>
    </div>
  );
}