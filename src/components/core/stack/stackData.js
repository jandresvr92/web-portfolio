// Server-blade dictionary of the tech stack node, one complete locale per key.
export const stackData = {
  es: {
    title: "STACK TÉCNICO",
    subtitle: "CLÚSTER_PROCESAMIENTO",
    tabs: { front: "01_FRONTEND", back: "02_BACKEND", env: "03_ENTORNO_IA" },
    statusLine: "DIAGNÓSTICO: Transición de monolitos a microservicios // SYSTEM READY_",
    content: {
      front: [
        { name: "React 19 & Next.js 14", desc: "Server-Side Rendering, App Router y arquitecturas escalables.", status: "RUNNING •••" },
        { name: "Vue.js & Vite", desc: "Desarrollo de interfaces progresivas, reactivas y de alto rendimiento.", status: "ACTIVE •" },
        { name: "Tailwind CSS 4", desc: "Sistemas de diseño utility-first para UI altamente responsiva.", status: "ACTIVE •" },
        { name: "Zustand & Motion", desc: "Gestión de estado global ligero y animaciones fluidas.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & Express", desc: "Creación de APIs RESTful robustas y microservicios.", status: "RUNNING •••" },
        { name: "Python", desc: "Scripts de automatización, análisis de datos y lógica de servidor.", status: "ACTIVE •" },
        { name: "PostgreSQL", desc: "Modelado de datos relacionales y consultas complejas en producción.", status: "OPTIMIZED •" },
        { name: "SQLite", desc: "Bases de datos ligeras para prototipado rápido y entornos locales.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Control de versiones, flujos CI/CD y despliegue serverless.", status: "DEPLOYED •" },
        { name: "Ubuntu (WSL2) & Zsh", desc: "Entorno de desarrollo nativo en Linux integrado en Windows.", status: "MOUNTED •" },
        { name: "Cursor IDE & Kiro", desc: "Flujos de desarrollo acelerados por IA y herramientas personalizadas.", status: "ACTIVE •" },
        { name: "Gemini, LLMs & MCPs", desc: "Integración de agentes IA y Model Context Protocol.", status: "SYNCED •••" },
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
        { name: "React 19 & Next.js 14", desc: "Server-Side Rendering, App Router, and scalable architectures.", status: "RUNNING •••" },
        { name: "Vue.js & Vite", desc: "Building progressive, reactive, and high-performance interfaces.", status: "ACTIVE •" },
        { name: "Tailwind CSS 4", desc: "Utility-first design systems for highly responsive UIs.", status: "ACTIVE •" },
        { name: "Zustand & Motion", desc: "Lightweight global state management and fluid animations.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & Express", desc: "Building robust RESTful APIs and microservices.", status: "RUNNING •••" },
        { name: "Python", desc: "Automation scripts, data analysis, and backend logic.", status: "ACTIVE •" },
        { name: "PostgreSQL", desc: "Relational data modeling and complex queries in production.", status: "OPTIMIZED •" },
        { name: "SQLite", desc: "Lightweight databases for rapid prototyping and local environments.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Version control, CI/CD pipelines, and serverless deployment.", status: "DEPLOYED •" },
        { name: "Ubuntu (WSL2) & Zsh", desc: "Native Linux development environment integrated into Windows.", status: "MOUNTED •" },
        { name: "Cursor IDE & Kiro", desc: "AI-accelerated development workflows and custom tools.", status: "ACTIVE •" },
        { name: "Gemini, LLMs & MCPs", desc: "Integration of AI agents and Model Context Protocol.", status: "SYNCED •••" },
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
        { name: "React 19 & Next.js 14", desc: "Server-Side Rendering, App Router und skalierbare Architekturen.", status: "RUNNING •••" },
        { name: "Vue.js & Vite", desc: "Entwicklung progressiver, reaktiver und hochleistungsfähiger Schnittstellen.", status: "ACTIVE •" },
        { name: "Tailwind CSS 4", desc: "Utility-First-Designsysteme für hochgradig responsive UIs.", status: "ACTIVE •" },
        { name: "Zustand & Motion", desc: "Leichtgewichtiges globales Zustandsmanagement und flüssige Animationen.", status: "ACTIVE •" },
      ],
      back: [
        { name: "Node.js & Express", desc: "Aufbau robuster RESTful APIs und Microservices.", status: "RUNNING •••" },
        { name: "Python", desc: "Automatisierungsskripte, Datenanalyse und Backend-Logik.", status: "ACTIVE •" },
        { name: "PostgreSQL", desc: "Relationale Datenmodellierung und komplexe Abfragen in Produktion.", status: "OPTIMIZED •" },
        { name: "SQLite", desc: "Leichte Datenbanken für schnelles Prototyping und lokale Umgebungen.", status: "STANDBY •" },
      ],
      env: [
        { name: "Git, GitHub & Vercel", desc: "Versionskontrolle, CI/CD-Pipelines und Serverless-Deployment.", status: "DEPLOYED •" },
        { name: "Ubuntu (WSL2) & Zsh", desc: "Native Linux-Entwicklungsumgebung integriert in Windows.", status: "MOUNTED •" },
        { name: "Cursor IDE & Kiro", desc: "KI-beschleunigte Entwicklungs-Workflows und benutzerdefinierte Tools.", status: "ACTIVE •" },
        { name: "Gemini, LLMs & MCPs", desc: "Integration von KI-Agenten und Model Context Protocol.", status: "SYNCED •••" },
      ],
    },
  },
};

export const stackFor = (locale) => stackData[locale] ?? stackData.en;