import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nContext";
import SocialLinks from "../topology/SocialLinks";
import AvatarHud from "./AvatarHud";
import ConsoleBio from "./ConsoleBio";
import DossierDownload from "./DossierDownload";
import DossierMeta from "./DossierMeta";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const hud = {
  hidden: { opacity: 0, y: -10, rotate: -1.5 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const block = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

// The profile node's dossier: HUD header, terminal bio, connectors and CV.
export default function AgentDossier({ className }) {
  const { t, dict } = useI18n();
  const hero = dict.panels.hero;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={["flex flex-col gap-4", className].filter(Boolean).join(" ")}
    >
      <motion.div variants={hud} className="flex flex-wrap items-center gap-x-5 gap-y-5">
        <AvatarHud name={hero.name} />
        <div className="min-w-[130px] flex-1">
          <p className="font-mono text-[9px] sheet:text-[12px] uppercase tracking-[0.26em] text-cyan-400/50">
            {hero.dossier.tag}
          </p>
          <h2 className="mt-1.5 font-mono text-[21px] font-bold uppercase leading-none tracking-[0.12em] text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">
            {t("nodes.profile")}
          </h2>
          <p className="mt-2 font-mono text-[10px] sheet:text-[12px] uppercase tracking-[0.18em] text-zinc-400">
            {hero.role}
          </p>
        </div>
        <DossierMeta className="ml-auto" />
      </motion.div>

      <motion.div variants={block}>
        <ConsoleBio />
      </motion.div>

      <motion.div variants={block}>
        <SocialLinks />
      </motion.div>

      <motion.div variants={block}>
        <DossierDownload />
      </motion.div>
    </motion.div>
  );
}