// Localized text of the projects node. `projects` is keyed by the ids in
// projectsData.js; every language must list the same ids (the content tests
// check it). {count} and {n} are filled in by projectsFor().
export const PROJECTS_COPY = {
  es: {
    title: "PROYECTOS",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "MÓDULOS ACTIVOS", locked: "MÓDULOS EN CONSTRUCCIÓN" },
    statusLine: "DIAGNÓSTICO: +{count} PROYECTOS DESPLEGADOS // DESPLIEGUE EN LÍNEA_",
    status: { active: "STATUS: ACTIVO" },
    locked: { label: "[ MÓDULO_{n} EN CONSTRUCCIÓN ]", sub: "[ LOCKED_{n} ]" },
    projects: {
      skilltree: { title: "SkillTree", desc: "App interactiva basada en grafos para visualizar rutas de aprendizaje." },
      platformer: { title: "Plataformas 2D", desc: "Minijuego web en HTML5 Canvas con Web Audio y físicas." },
      "devops-diorama": {
        title: "DevOps 3D Roadmap",
        desc: "Diorama isométrico interactivo en Three.js y R3F con nodos de logros y audio.",
      },
      "bella-sasha-3d": {
        title: "Bella & Sasha 3D",
        desc: "Habitación interactiva en 3D con navegación espacial, álbum virtual y audio lofi.",
      },
    },
  },
  en: {
    title: "PROJECTS",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "ACTIVE MODULES", locked: "MODULES UNDER CONSTRUCTION" },
    statusLine: "DIAGNOSTIC: {count}+ PROJECTS DEPLOYED // DEPLOYMENT ONLINE_",
    status: { active: "STATUS: ACTIVE" },
    locked: { label: "[ MODULE_{n} UNDER CONSTRUCTION ]", sub: "[ LOCKED_{n} ]" },
    projects: {
      skilltree: { title: "SkillTree", desc: "Interactive graph-based app to visualize and track learning paths." },
      platformer: { title: "2D Platformer", desc: "HTML5 Canvas web minigame with Web Audio and custom physics." },
      "devops-diorama": {
        title: "DevOps 3D Roadmap",
        desc: "Interactive isometric diorama built with Three.js & R3F featuring achievement nodes.",
      },
      "bella-sasha-3d": {
        title: "Bella & Sasha 3D",
        desc: "Interactive 3D room with spatial navigation, virtual album, and lofi audio.",
      },
    },
  },
  de: {
    title: "PROJEKTE",
    subtitle: "DEPLOYMENT_CLUSTER",
    sections: { active: "AKTIVE MODULE", locked: "MODULE IM BAU" },
    statusLine: "DIAGNOSE: {count}+ PROJEKTE BEREITGESTELLT // DEPLOYMENT ONLINE_",
    status: { active: "STATUS: AKTIV" },
    locked: { label: "[ MODUL_{n} IM BAU ]", sub: "[ LOCKED_{n} ]" },
    projects: {
      skilltree: { title: "SkillTree", desc: "Interaktive, graphenbasierte App zur Visualisierung von Lernpfaden." },
      platformer: { title: "2D-Plattform", desc: "HTML5-Canvas-Web-Minispiel mit Web-Audio und eigener Physik." },
      "devops-diorama": {
        title: "DevOps 3D Roadmap",
        desc: "Interaktives isometrisches Diorama mit Three.js & R3F und interaktiven Knoten.",
      },
      "bella-sasha-3d": {
        title: "Bella & Sasha 3D",
        desc: "Interaktiver 3D-Raum mit räumlicher Navigation, virtuellem Album und Lofi-Audio.",
      },
    },
  },
};
