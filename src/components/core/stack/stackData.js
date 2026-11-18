// Server-blade dictionary of the tech stack node, one complete locale per key.
export const stackData = {
  es: {
    title: "STACK TÉCNICO",
    subtitle: "CLÚSTER_PROCESAMIENTO",
    tabs: { front: "01_FRONTEND", back: "02_BACKEND", env: "03_ENTORNO_IA" },
    statusLine: "DIAGNÓSTICO: Transición de monolitos a microservicios // SYSTEM READY_",
    content: {
      front: [
        { name: "Angular & TypeScript", desc: "Interfaces empresariales reactivas con código tipado y mantenible.", status: "RUNNING •••" },
        { name: "Highcharts & AG Grid", desc: "Gráficos interactivos enlazados a tablas de datos con filtros en vivo.", status: "ACTIVE •" },
        { name: "React 19 & Three.js", desc: "Apps renderizadas en servidor y escenas 3D interactivas con React Three Fiber.", status: "ACTIVE •" },
        { name: "Tailwind CSS & Motion", desc: "Sistemas de diseño utility-first y animaciones fluidas.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & REST APIs", desc: "APIs REST e integraciones frontend–backend.", status: "RUNNING •••" },
        { name: "PostgreSQL", desc: "Modelado de datos relacionales y esquemas que simplifican las consultas.", status: "OPTIMIZED •" },
        { name: "Microservices", desc: "Migración de plataformas monolíticas a arquitecturas de microservicios.", status: "DEPLOYED •" },
        { name: "Python", desc: "Scripts de automatización y lógica de servidor.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Control de versiones, flujos de pull requests y despliegue serverless.", status: "DEPLOYED •" },
        { name: "Azure DevOps & Jira", desc: "Tableros ágiles, sprints y flujos de trabajo en equipo.", status: "ACTIVE •" },
        { name: "Figma & Miro", desc: "Del archivo de diseño y la pizarra a interfaces fieles al píxel.", status: "ACTIVE •" },
        { name: "Cursor, Kiro & LLMs", desc: "Flujos acelerados por IA, agentes y Model Context Protocol.", status: "SYNCED •••" },
      ],
    },
  },
  en: {
    title: "TECH STACK",
    subtitle: "PROCESSING_CLUSTER",
    tabs: { front: "01_FRONTEND", back: "02_BACKEND", env: "03_ENVIRONMENT_AI" },
    statusLine: "DIAGNOSTIC: Transitioning from monoliths to microservices // SYSTEM READY_",
    content: {
      front: [
        { name: "Angular & TypeScript", desc: "Reactive enterprise interfaces with typed, maintainable code.", status: "RUNNING •••" },
        { name: "Highcharts & AG Grid", desc: "Interactive charts bound to data grids with live filters.", status: "ACTIVE •" },
        { name: "React 19 & Three.js", desc: "Server-rendered apps and interactive 3D scenes with React Three Fiber.", status: "ACTIVE •" },
        { name: "Tailwind CSS & Motion", desc: "Utility-first design systems and fluid animations.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & REST APIs", desc: "REST APIs and frontend–backend integrations.", status: "RUNNING •••" },
        { name: "PostgreSQL", desc: "Relational data modeling and schemas that keep queries simple.", status: "OPTIMIZED •" },
        { name: "Microservices", desc: "Migrating monolithic platforms to microservice architectures.", status: "DEPLOYED •" },
        { name: "Python", desc: "Automation scripts and backend logic.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Version control, pull request workflows and serverless deployment.", status: "DEPLOYED •" },
        { name: "Azure DevOps & Jira", desc: "Agile boards, sprints and team workflows.", status: "ACTIVE •" },
        { name: "Figma & Miro", desc: "From design files and whiteboards to pixel-accurate UIs.", status: "ACTIVE •" },
        { name: "Cursor, Kiro & LLMs", desc: "AI-accelerated workflows, agents and Model Context Protocol.", status: "SYNCED •••" },
      ],
    },
  },
  de: {
    title: "TECH-STACK",
    subtitle: "VERARBEITUNGSCLUSTER",
    tabs: { front: "01_FRONTEND", back: "02_BACKEND", env: "03_UMGEBUNG_KI" },
    statusLine: "DIAGNOSE: Übergang von Monolithen zu Microservices // SYSTEM READY_",
    content: {
      front: [
        { name: "Angular & TypeScript", desc: "Reaktive Unternehmensoberflächen mit typisiertem, wartbarem Code.", status: "RUNNING •••" },
        { name: "Highcharts & AG Grid", desc: "Interaktive Diagramme, verknüpft mit Datentabellen und Live-Filtern.", status: "ACTIVE •" },
        { name: "React 19 & Three.js", desc: "Serverseitig gerenderte Apps und interaktive 3D-Szenen mit React Three Fiber.", status: "ACTIVE •" },
        { name: "Tailwind CSS & Motion", desc: "Utility-First-Designsysteme und flüssige Animationen.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & REST APIs", desc: "REST-APIs und Frontend-Backend-Integrationen.", status: "RUNNING •••" },
        { name: "PostgreSQL", desc: "Relationale Datenmodellierung und Schemas, die Abfragen einfach halten.", status: "OPTIMIZED •" },
        { name: "Microservices", desc: "Migration monolithischer Plattformen auf Microservice-Architekturen.", status: "DEPLOYED •" },
        { name: "Python", desc: "Automatisierungsskripte und Backend-Logik.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Versionskontrolle, Pull-Request-Workflows und Serverless-Deployment.", status: "DEPLOYED •" },
        { name: "Azure DevOps & Jira", desc: "Agile Boards, Sprints und Team-Workflows.", status: "ACTIVE •" },
        { name: "Figma & Miro", desc: "Von Designdateien und Whiteboards zu pixelgenauen UIs.", status: "ACTIVE •" },
        { name: "Cursor, Kiro & LLMs", desc: "KI-beschleunigte Workflows, Agenten und Model Context Protocol.", status: "SYNCED •••" },
      ],
    },
  },
};

export const stackFor = (locale) => stackData[locale] ?? stackData.en;