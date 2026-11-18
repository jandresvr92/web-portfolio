import { fill, pad2 } from "@/lib/i18n/format";
import { PROJECTS_COPY } from "./projectsCopy";

// Deployed projects, in display order. Everything here is the same in every
// language; titles and descriptions live in projectsCopy.js under the same id.
// - image: 16:9 screenshot in public/images/projects/ (1280×720 .webp), or null
//   to show the `icon` glyph instead (see ProjectGlyph for the names).
// - status: a key of `status` in projectsCopy.js.
// To add a project: append it here, add its title/desc to every language in
// projectsCopy.js, drop the screenshot in public/images/projects/, then run
// `npm test`. The project count in the status line updates on its own.
export const PROJECTS = [
  {
    id: "skilltree",
    tech: ["REACT 18", "TYPESCRIPT", "ZUSTAND", "REACT FLOW"],
    link: "https://skilltree-sand-two.vercel.app/",
    image: "/images/projects/skilltree.webp",
    icon: "graph",
    status: "active",
  },
  {
    id: "platformer",
    tech: ["REACT 19", "TYPESCRIPT", "CANVAS 2D", "TAILWIND"],
    link: "https://juego-aventura-alpha.vercel.app/",
    image: "/images/projects/platformer.webp",
    icon: "gamepad",
    status: "active",
  },
  {
    id: "devops-diorama",
    tech: ["THREE.JS", "R3F", "DREI", "VITE"],
    link: "https://nicos-roadmap.vercel.app/",
    image: "/images/projects/devops-diorama.webp",
    icon: "box",
    status: "active",
  },
  {
    id: "bella-sasha-3d",
    tech: ["REACT 19", "THREE.JS", "R3F", "DREI", "VITE"],
    link: "https://3-d-room-gules.vercel.app/",
    image: "/images/projects/bella-sasha-3d.webp",
    icon: "box",
    status: "active",
  },
];

// Reserved "under construction" slots after the deployed projects. They are
// numbered after the last project (MODULE_05, MODULE_06 for four projects).
export const LOCKED_SLOTS = 2;

// The projects node as the panel renders it, in one language.
export function projectsFor(lang) {
  const copy = PROJECTS_COPY[lang] ?? PROJECTS_COPY.en;
  return {
    title: copy.title,
    subtitle: copy.subtitle,
    sections: copy.sections,
    statusLine: fill(copy.statusLine, { count: PROJECTS.length }),
    active: PROJECTS.map((project) => ({
      ...project,
      ...copy.projects[project.id],
      status: copy.status[project.status],
    })),
    placeholders: Array.from({ length: LOCKED_SLOTS }, (_, i) => ({
      id: `locked-${i + 1}`,
      label: fill(copy.locked.label, { n: pad2(PROJECTS.length + i + 1) }),
      sub: fill(copy.locked.sub, { n: pad2(i + 1) }),
    })),
  };
}
