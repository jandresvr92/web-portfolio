// System-log dictionary of the experience node, one complete locale per key.
export const experienceData = {
  es: {
    title: "EXPERIENCIA",
    subtitle: "CLÚSTER_OPERACIONES",
    statusLine: "DIAGNÓSTICO: +3 AÑOS DE EXPERIENCIA EN DESARROLLO FRONTEND // SYSTEM_ONLINE_",
    jobs: [
      {
        role: "Software Developer",
        company: "Fuse Tech",
        date: "Ago 2025 - Nov 2025",
        achievements: [
          "Resolví bugs críticos y optimicé el rendimiento de la UI.",
          "Colaboré en el desarrollo de funcionalidades y despliegues ágiles.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Yuxi Global",
        date: "Dic 2021 - Ene 2023",
        achievements: [
          "Integración de gráficos dinámicos y reactivos con Angular, Highcharts y Ag-grid.",
          "Resolución del 90% de bugs de maquetación UI/UX por sprint (Figma a Código).",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Talos Digital",
        date: "Jun 2021 - Dic 2021",
        achievements: [
          "Migración de plataforma e-commerce monolítica a arquitectura de microservicios.",
          "Identificación de servicios críticos y estabilización del sistema durante el despliegue.",
        ],
      },
      {
        role: "Web UI Developer",
        company: "Globant",
        date: "Dic 2020 - Mar 2021",
        achievements: [
          "Liderazgo de iniciativa de automatización de pruebas (BDD y TDD) con Selenium.",
          "Contribución directa a interfaces de plataforma global de streaming deportivo.",
        ],
      },
      {
        role: "Full-stack Developer",
        company: "TALENTA 365",
        date: "Jun 2020 - Dic 2020",
        achievements: [
          "Plataforma de preselección de candidatos que redujo costos de selección y agilizó la contratación.",
          "Diseño de esquema PostgreSQL que simplificó las consultas.",
        ],
      },
    ],
  },
  en: {
    title: "EXPERIENCE",
    subtitle: "OPERATIONS_CLUSTER",
    statusLine: "DIAGNOSTIC: 3+ YEARS OF EXPERIENCE IN FRONTEND DEVELOPMENT // SYSTEM_ONLINE_",
    jobs: [
      {
        role: "Software Developer",
        company: "Fuse Tech",
        date: "Aug 2025 - Nov 2025",
        achievements: [
          "Resolved critical bugs and optimized UI performance.",
          "Collaborated on feature development and agile deployments.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Yuxi Global",
        date: "Dec 2021 - Jan 2023",
        achievements: [
          "Integrated dynamic and reactive charts using Angular, Highcharts, and Ag-grid.",
          "Resolved 90% of UI/UX layout bugs per sprint (Figma to Code).",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Talos Digital",
        date: "Jun 2021 - Dec 2021",
        achievements: [
          "Migrated a monolithic e-commerce platform to a microservices architecture.",
          "Identified critical services and ensured system stability during deployment.",
        ],
      },
      {
        role: "Web UI Developer",
        company: "Globant",
        date: "Dec 2020 - Mar 2021",
        achievements: [
          "Led a test automation initiative (BDD and TDD) using Selenium.",
          "Directly contributed to the interfaces of a global sports streaming platform.",
        ],
      },
      {
        role: "Full-stack Developer",
        company: "TALENTA 365",
        date: "Jun 2020 - Dec 2020",
        achievements: [
          "Built a candidate pre-screening platform that cut selection costs and sped up hiring.",
          "Designed a PostgreSQL schema that simplified the queries.",
        ],
      },
    ],
  },
  de: {
    title: "ERFAHRUNG",
    subtitle: "BETRIEBS_CLUSTER",
    statusLine: "DIAGNOSE: 3+ JAHRE ERFAHRUNG IN DER FRONTEND-ENTWICKLUNG // SYSTEM_ONLINE_",
    jobs: [
      {
        role: "Software Developer",
        company: "Fuse Tech",
        date: "Aug 2025 - Nov 2025",
        achievements: [
          "Behebung kritischer Bugs und Optimierung der UI-Leistung.",
          "Zusammenarbeit bei der Funktionsentwicklung und agilen Deployments.",
        ],
      },
      {
        role: "Frontend-Entwickler",
        company: "Yuxi Global",
        date: "Dez 2021 - Jan 2023",
        achievements: [
          "Integration dynamischer und reaktiver Diagramme mit Angular, Highcharts und Ag-grid.",
          "Behebung von 90% der UI/UX-Layout-Bugs pro Sprint (Figma zu Code).",
        ],
      },
      {
        role: "Frontend-Entwickler",
        company: "Talos Digital",
        date: "Jun 2021 - Dez 2021",
        achievements: [
          "Migration einer monolithischen E-Commerce-Plattform zu einer Microservices-Architektur.",
          "Identifizierung kritischer Dienste und Sicherstellung der Systemstabilität.",
        ],
      },
      {
        role: "Web-UI-Entwickler",
        company: "Globant",
        date: "Dez 2020 - Mär 2021",
        achievements: [
          "Leitung einer Testautomatisierungsinitiative (BDD und TDD) mit Selenium.",
          "Direkter Beitrag zu den Schnittstellen einer globalen Sport-Streaming-Plattform.",
        ],
      },
      {
        role: "Full-Stack-Entwickler",
        company: "TALENTA 365",
        date: "Jun 2020 - Dez 2020",
        achievements: [
          "Plattform zur Bewerbervorauswahl, die Auswahlkosten senkte und Einstellungen beschleunigte.",
          "Entwurf eines PostgreSQL-Schemas, das die Abfragen vereinfachte.",
        ],
      },
    ],
  },
};

export const experienceFor = (locale) => experienceData[locale] ?? experienceData.en;