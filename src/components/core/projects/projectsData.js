// Localized copy of the projects node. `icon` names the Lucide glyph shown in
// the card's visual area (see ProjectGlyph).
export const PROJECTS = {
  es: {
    title: "PROYECTOS",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "MÓDULOS ACTIVOS", locked: "MÓDULOS EN CONSTRUCCIÓN" },
    statusLine: "DIAGNÓSTICO: +3 PROYECTOS DESPLEGADOS // DESPLIEGUE EN LÍNEA_",
    active: [
      {
        id: "skilltree",
        title: "SkillTree",
        desc: "App interactiva basada en grafos para visualizar rutas de aprendizaje.",
        tech: ["REACT 18", "TYPESCRIPT", "ZUSTAND", "REACT FLOW"],
        link: "https://skilltree-sand-two.vercel.app/",
        status: "STATUS: ACTIVO",
        icon: "graph",
      },
      {
        id: "platformer",
        title: "Plataformas 2D",
        desc: "Minijuego web en HTML5 Canvas con Web Audio y físicas.",
        tech: ["REACT 19", "TYPESCRIPT", "CANVAS 2D", "TAILWIND"],
        link: "https://juego-aventura-alpha.vercel.app/",
        status: "STATUS: ACTIVO",
        icon: "gamepad",
      },
      {
        id: "devops-diorama",
        title: "DevOps 3D Roadmap",
        desc: "Diorama isométrico interactivo en Three.js y R3F con nodos de logros y audio.",
        tech: ["THREE.JS", "R3F", "DREI", "VITE"],
        link: "https://nicos-roadmap.vercel.app/",
        status: "STATUS: ACTIVO",
        icon: "box",
      },
    ],
    placeholders: [
      { id: "mod-04", label: "[ MÓDULO_04 EN CONSTRUCCIÓN ]", sub: "[ LOCKED_01 ]" },
      { id: "mod-05", label: "[ MÓDULO_05 EN CONSTRUCCIÓN ]", sub: "[ LOCKED_02 ]" },
    ],
  },
  en: {
    title: "PROJECTS",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "ACTIVE MODULES", locked: "MODULES UNDER CONSTRUCTION" },
    statusLine: "DIAGNOSTIC: 3+ PROJECTS DEPLOYED // DEPLOYMENT ONLINE_",
    active: [
      {
        id: "skilltree",
        title: "SkillTree",
        desc: "Interactive graph-based app to visualize and track learning paths.",
        tech: ["REACT 18", "TYPESCRIPT", "ZUSTAND", "REACT FLOW"],
        link: "https://skilltree-sand-two.vercel.app/",
        status: "STATUS: ACTIVE",
        icon: "graph",
      },
      {
        id: "platformer",
        title: "2D Platformer",
        desc: "HTML5 Canvas web minigame with Web Audio and custom physics.",
        tech: ["REACT 19", "TYPESCRIPT", "CANVAS 2D", "TAILWIND"],
        link: "https://juego-aventura-alpha.vercel.app/",
        status: "STATUS: ACTIVE",
        icon: "gamepad",
      },
      {
        id: "devops-diorama",
        title: "DevOps 3D Roadmap",
        desc: "Interactive isometric diorama built with Three.js & R3F featuring achievement nodes.",
        tech: ["THREE.JS", "R3F", "DREI", "VITE"],
        link: "https://nicos-roadmap.vercel.app/",
        status: "STATUS: ACTIVE",
        icon: "box",
      },
    ],
    placeholders: [
      { id: "mod-04", label: "[ MODULE_04 UNDER CONSTRUCTION ]", sub: "[ LOCKED_01 ]" },
      { id: "mod-05", label: "[ MODULE_05 UNDER CONSTRUCTION ]", sub: "[ LOCKED_02 ]" },
    ],
  },
  de: {
    title: "PROJEKTE",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "AKTIVE MODULE", locked: "MODULE IM BAU" },
    statusLine: "DIAGNOSE: 3+ PROJEKTE BEREITGESTELLT // DEPLOYMENT ONLINE_",
    active: [
      {
        id: "skilltree",
        title: "SkillTree",
        desc: "Interaktive, graphenbasierte App zur Visualisierung von Lernpfaden.",
        tech: ["REACT 18", "TYPESCRIPT", "ZUSTAND", "REACT FLOW"],
        link: "https://skilltree-sand-two.vercel.app/",
        status: "STATUS: AKTIV",
        icon: "graph",
      },
      {
        id: "platformer",
        title: "2D-Plattform",
        desc: "HTML5-Canvas-Web-Minispiel mit Web-Audio und eigener Physik.",
        tech: ["REACT 19", "TYPESCRIPT", "CANVAS 2D", "TAILWIND"],
        link: "https://juego-aventura-alpha.vercel.app/",
        status: "STATUS: AKTIV",
        icon: "gamepad",
      },
      {
        id: "devops-diorama",
        title: "DevOps 3D Roadmap",
        desc: "Interaktives isometrisches Diorama mit Three.js & R3F und interaktiven Knoten.",
        tech: ["THREE.JS", "R3F", "DREI", "VITE"],
        link: "https://nicos-roadmap.vercel.app/",
        status: "STATUS: AKTIV",
        icon: "box",
      },
    ],
    placeholders: [
      { id: "mod-04", label: "[ MODUL_04 IM BAU ]", sub: "[ LOCKED_01 ]" },
      { id: "mod-05", label: "[ MODUL_05 IM BAU ]", sub: "[ LOCKED_02 ]" },
    ],
  },
};

export const projectsFor = (locale) => PROJECTS[locale] ?? PROJECTS.en;