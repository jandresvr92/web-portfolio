import { STACK_COPY } from "./stackCopy";

// Server blades per tab, in display order. Names and status readouts are the
// same in every language; descriptions live in stackCopy.js under the same id.
// Each tab holds exactly BLADES_PER_TAB blades: the panel is drawn as a rack of
// four, so to add a technology, replace one or merge two ("Figma & Miro").
export const BLADES_PER_TAB = 4;

export const STACK = {
  front: [
    { id: "angular-typescript", name: "Angular & TypeScript", status: "RUNNING •••" },
    { id: "highcharts-ag-grid", name: "Highcharts & AG Grid", status: "ACTIVE •" },
    { id: "react-19-three-js", name: "React 19 & Three.js", status: "ACTIVE •" },
    { id: "tailwind-css-motion", name: "Tailwind CSS & Motion", status: "ACTIVE •" },
  ],
  back: [
    { id: "node-js-rest-apis", name: "Node.js & REST APIs", status: "RUNNING •••" },
    { id: "postgresql", name: "PostgreSQL", status: "OPTIMIZED •" },
    { id: "microservices", name: "Microservices", status: "DEPLOYED •" },
    { id: "python", name: "Python", status: "STANDBY •" },
  ],
  env: [
    { id: "git-github-vercel", name: "Git, GitHub & Vercel", status: "DEPLOYED •" },
    { id: "azure-devops-jira", name: "Azure DevOps & Jira", status: "ACTIVE •" },
    { id: "figma-miro", name: "Figma & Miro", status: "ACTIVE •" },
    { id: "cursor-kiro-llms", name: "Cursor, Kiro & LLMs", status: "SYNCED •••" },
  ],
};

// The stack node as the panel renders it, in one language.
export function stackFor(lang) {
  const copy = STACK_COPY[lang] ?? STACK_COPY.en;
  return {
    title: copy.title,
    subtitle: copy.subtitle,
    tabs: copy.tabs,
    statusLine: copy.statusLine,
    content: Object.fromEntries(
      Object.entries(STACK).map(([tab, blades]) => [
        tab,
        blades.map((blade) => ({ ...blade, desc: copy.items[blade.id] })),
      ])
    ),
  };
}
