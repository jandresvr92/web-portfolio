// Localized copy for the portfolio scene. Every visible string lives here;
// components read it through `useI18n()`.
// `panels` is the desktop spatial layout, `clusters` the flat mobile feed.

export const LANGUAGES = ["en", "es", "de"];

export const DICTS = {
  en: {
    code: "EN",
    name: "English",
    nodes: {
      profile: "ABOUT ME",
      projects: "PROJECTS",
      stack: "STACK",
      experience: "EXPERIENCE",
      hobbies: "HOBBIES",
    },
    interaction: {
      init: "[ 🖱 CLICK TO START ]",
      access: "[ ACCESS ]",
      close: "close",
    },
    hud: {
      phase: "Jaime Andres Dev",
      canvas: "canvas :: iso_world",
      online: "system online",
      coords: "x:0 y:0 z:panel",
      bus: "core.sys // mobile_bus",
      coreNode: "profile",
      sync: "sync",
    },
    panels: {
      hero: {
        label: "core.sys // profile",
        name: "JAIME VÉLEZ ROJAS",
        role: "SOFTWARE DEVELOPER",
        intro:
          "I engineer interactive digital experiences from the server to the screen. With 3+ years of experience across React, Angular, Node/Python, and cloud deployments, I enjoy the puzzle of turning complex monolithic systems into agile, scalable microservices. I’m a proud tech geek and relentless learner — always experimenting with 3D web environments, gamified UIs, and robust database architectures. I bring analytical problem-solving and a creative flair to the full stack, always aiming to deliver tangible value. Let’s build something awesome.",
        download: "download_cv",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "frontend" },
            { label: "exp", value: "3 yrs" },
          ],
          bio: [
            { text: "I engineer interactive digital experiences from the server to the screen. With " },
            { text: "3+ years", hl: true },
            { text: " of experience across " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            { text: ", and cloud deployments, I enjoy the puzzle of turning complex monolithic systems into agile, scalable microservices. I’m a proud tech geek and relentless learner, always experimenting with " },
            { text: "3D web", hl: true },
            { text: " environments, gamified UIs, and robust database architectures. I bring analytical problem-solving and a creative flair to the full stack, always aiming to deliver tangible value. Let’s build something awesome." },
          ],
        },
      },
      experience: {
        label: "01 // experience",
        title: "EXPERIENCE",
        headline: "3+ YEARS",
        items: ["Analyst Developer", "Backend services · SQL", "PQR workflow automation"],
      },
      stack: {
        label: "02 // stack",
        title: "STACK",
        items: [
          "Node.js",
          "Express",
          "React",
          "Next.js 14",
          "Python",
          "PostgreSQL",
          "SQLite",
          "WSL2 · Ubuntu",
        ],
      },
      projects: {
        label: "03 // projects",
        title: "PROJECTS",
        items: [
          { name: "Skilltree", note: "React Flow knowledge graph" },
          { name: "Pokédex Arcana", note: "Multi-agent architecture" },
          { name: "PQR workflow API", note: "Node.js + PostgreSQL automation" },
        ],
      },
    },
    clusters: {
      operations: {
        name: "OPERATIONS_CLUSTER",
        role: "EXPERIENCE",
        blocks: [
          { kind: "text", label: "role", value: "Analyst Developer" },
          {
            kind: "text",
            label: "focus",
            value:
              "Backend service integrations, relational databases, and automated system workflows (PQR platforms).",
          },
          { kind: "text", label: "experience", value: "3 years of professional experience." },
        ],
      },
      deployment: {
        name: "DEPLOYMENT_CLUSTER",
        role: "PROJECTS",
        blocks: [
          {
            kind: "list",
            label: "active modules",
            items: [
              { name: "Skilltree", note: "React Flow knowledge graph" },
              { name: "Pokédex Arcana", note: "Multi-agent architecture" },
              { name: "Pixel-art web app", note: "React / Framer Motion" },
            ],
          },
        ],
      },
      hobbies: {
        name: "OFFLINE_CLUSTER",
        role: "HOBBIES",
        blocks: [
          {
            kind: "tags",
            label: "off the clock",
            items: ["Swimming", "Trail walks", "Chess", "Specialty coffee"],
          },
        ],
      },
      processing: {
        name: "PROCESSING_CLUSTER",
        role: "TECH STACK",
        blocks: [
          {
            kind: "tags",
            label: "system stack",
            items: ["Next.js 14 App Router", "Node.js", "Python", "PostgreSQL", "SQLite"],
          },
          { kind: "tags", label: "environment", items: ["WSL2", "Ubuntu", "Zsh"] },
        ],
      },
    },
    unlock: {
      title: "system unlocked",
      download: "download_data",
    },
    boot: {
      label: "Boot sequence",
      window: "ROOT@JAIME-ANDRES — BOOT_SEQ",
      lines: [
        "Montando entorno isométrico 3D...",
        "Sincronizando nodos de despliegue...",
        "Cargando credenciales de agente...",
      ],
      ready: "root@jaime-andres:~$ system online",
      booting: "booting",
      linked: "core linked",
    },
    lang: {
      label: "Language",
      switch: "Switch language",
    },
  },

  es: {
    code: "ES",
    name: "Español",
    nodes: {
      profile: "SOBRE MÍ",
      projects: "PROYECTOS",
      stack: "STACK",
      experience: "EXPERIENCIA",
      hobbies: "HOBBIES",
    },
    interaction: {
      init: "[ 🖱 CLIC PARA INICIAR ]",
      access: "[ ACCEDER ]",
      close: "cerrar",
    },
    hud: {
      phase: "Jaime Andres Dev",
      canvas: "canvas :: iso_world",
      online: "sistema en línea",
      coords: "x:0 y:0 z:panel",
      bus: "core.sys // bus_móvil",
      coreNode: "perfil",
      sync: "sincro",
    },
    panels: {
      hero: {
        label: "core.sys // perfil",
        name: "JAIME VÉLEZ ROJAS",
        role: "DESARROLLADOR DE SOFTWARE",
        intro:
          "Diseño experiencias digitales interactivas desde el servidor hasta la pantalla. Con más de 3 años de experiencia en React, Angular, Node/Python y despliegues en la nube, disfruto el reto de convertir sistemas monolíticos complejos en microservicios ágiles y escalables. Soy un geek de la tecnología y aprendiz incansable — siempre experimentando con entornos web 3D, interfaces gamificadas y arquitecturas de datos robustas. Aporto resolución analítica de problemas y una chispa creativa a todo el stack, buscando siempre entregar valor tangible. Construyamos algo increíble.",
        download: "descargar_cv",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "frontend" },
            { label: "exp", value: "3 años" },
          ],
          bio: [
            { text: "Diseño experiencias digitales interactivas desde el servidor hasta la pantalla. Con más de " },
            { text: "3 años", hl: true },
            { text: " de experiencia en " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            { text: " y despliegues en la nube, disfruto el reto de convertir sistemas monolíticos complejos en microservicios ágiles y escalables. Soy un geek de la tecnología y aprendiz incansable, siempre experimentando con entornos " },
            { text: "web 3D", hl: true },
            { text: ", interfaces gamificadas y arquitecturas de datos robustas. Aporto resolución analítica de problemas y una chispa creativa a todo el stack, buscando siempre entregar valor tangible. Construyamos algo increíble." },
          ],
        },
      },
      experience: {
        label: "01 // experiencia",
        title: "EXPERIENCIA",
        headline: "3+ AÑOS",
        items: ["Analista Desarrollador", "Servicios backend · SQL", "Automatización de flujos PQR"],
      },
      stack: {
        label: "02 // stack",
        title: "STACK",
        items: [
          "Node.js",
          "Express",
          "React",
          "Next.js 14",
          "Python",
          "PostgreSQL",
          "SQLite",
          "WSL2 · Ubuntu",
        ],
      },
      projects: {
        label: "03 // proyectos",
        title: "PROYECTOS",
        items: [
          { name: "Skilltree", note: "Grafo de conocimiento con React Flow" },
          { name: "Pokédex Arcana", note: "Arquitectura multiagente" },
          { name: "API de flujos PQR", note: "Automatización Node.js + PostgreSQL" },
        ],
      },
    },
    clusters: {
      operations: {
        name: "CLÚSTER_OPERACIONES",
        role: "EXPERIENCIA",
        blocks: [
          { kind: "text", label: "rol", value: "Analista Desarrollador" },
          {
            kind: "text",
            label: "enfoque",
            value:
              "Integración de servicios backend, bases de datos relacionales y flujos de sistema automatizados (plataformas PQR).",
          },
          { kind: "text", label: "experiencia", value: "3 años de experiencia profesional." },
        ],
      },
      deployment: {
        name: "CLÚSTER_DESPLIEGUE",
        role: "PROYECTOS",
        blocks: [
          {
            kind: "list",
            label: "módulos activos",
            items: [
              { name: "Skilltree", note: "Grafo de conocimiento con React Flow" },
              { name: "Pokédex Arcana", note: "Arquitectura multiagente" },
              { name: "Pixel-art web app", note: "React / Framer Motion" },
            ],
          },
        ],
      },
      hobbies: {
        name: "CLÚSTER_OFFLINE",
        role: "HOBBIES",
        blocks: [
          {
            kind: "tags",
            label: "fuera del terminal",
            items: ["Natación", "Senderismo", "Ajedrez", "Café de especialidad"],
          },
        ],
      },
      processing: {
        name: "CLÚSTER_PROCESAMIENTO",
        role: "STACK TÉCNICO",
        blocks: [
          {
            kind: "tags",
            label: "stack del sistema",
            items: ["Next.js 14 App Router", "Node.js", "Python", "PostgreSQL", "SQLite"],
          },
          { kind: "tags", label: "entorno", items: ["WSL2", "Ubuntu", "Zsh"] },
        ],
      },
    },
    unlock: {
      title: "sistema desbloqueado",
      download: "descargar_datos",
    },
    boot: {
      label: "Secuencia de arranque",
      window: "ROOT@JAIME-ANDRES — BOOT_SEQ",
      lines: [
        "Montando entorno isométrico 3D...",
        "Sincronizando nodos de despliegue...",
        "Cargando credenciales de agente...",
      ],
      ready: "root@jaime-andres:~$ sistema en línea",
      booting: "arrancando",
      linked: "core enlazado",
    },
    lang: {
      label: "Idioma",
      switch: "Cambiar idioma",
    },
  },

  de: {
    code: "DE",
    name: "Deutsch",
    nodes: {
      profile: "ÜBER MICH",
      projects: "PROJEKTE",
      stack: "STACK",
      experience: "ERFAHRUNG",
      hobbies: "HOBBYS",
    },
    interaction: {
      init: "[ 🖱 KLICKEN ZUM STARTEN ]",
      access: "[ ZUGRIFF ]",
      close: "schließen",
    },
    hud: {
      phase: "Jaime Andres Dev",
      canvas: "canvas :: iso_world",
      online: "system aktiv",
      coords: "x:0 y:0 z:panel",
      bus: "core.sys // mobile_bus",
      coreNode: "profil",
      sync: "sync",
    },
    panels: {
      hero: {
        label: "core.sys // profil",
        name: "JAIME VÉLEZ ROJAS",
        role: "SOFTWAREENTWICKLER",
        intro:
          "Ich entwickle interaktive digitale Erlebnisse vom Server bis zum Bildschirm. Mit über 3 Jahren Erfahrung in React, Angular, Node/Python und Cloud-Deployments liebe ich die Knobelei, komplexe monolithische Systeme in agile, skalierbare Microservices zu verwandeln. Ich bin ein stolzer Tech-Geek und unermüdlicher Lernender — immer am Experimentieren mit 3D-Webumgebungen, gamifizierten UIs und robusten Datenbankarchitekturen. Ich bringe analytisches Problemlösen und eine kreative Note in den gesamten Stack, stets mit dem Ziel, echten Mehrwert zu liefern. Bauen wir etwas Großartiges.",
        download: "lebenslauf_laden",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "frontend" },
            { label: "exp", value: "3 jahre" },
          ],
          bio: [
            { text: "Ich entwickle interaktive digitale Erlebnisse vom Server bis zum Bildschirm. Mit über " },
            { text: "3 Jahren", hl: true },
            { text: " Erfahrung in " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            { text: " und Cloud-Deployments liebe ich die Knobelei, komplexe monolithische Systeme in agile, skalierbare Microservices zu verwandeln. Ich bin ein stolzer Tech-Geek und unermüdlicher Lernender, immer am Experimentieren mit " },
            { text: "3D-Webumgebungen", hl: true },
            { text: ", gamifizierten UIs und robusten Datenbankarchitekturen. Ich bringe analytisches Problemlösen und eine kreative Note in den gesamten Stack, stets mit dem Ziel, echten Mehrwert zu liefern. Bauen wir etwas Großartiges." },
          ],
        },
      },
      experience: {
        label: "01 // erfahrung",
        title: "ERFAHRUNG",
        headline: "3+ JAHRE",
        items: ["Analyst-Entwickler", "Backend-Services · SQL", "PQR-Workflow-Automatisierung"],
      },
      stack: {
        label: "02 // stack",
        title: "STACK",
        items: [
          "Node.js",
          "Express",
          "React",
          "Next.js 14",
          "Python",
          "PostgreSQL",
          "SQLite",
          "WSL2 · Ubuntu",
        ],
      },
      projects: {
        label: "03 // projekte",
        title: "PROJEKTE",
        items: [
          { name: "Skilltree", note: "React-Flow-Wissensgraph" },
          { name: "Pokédex Arcana", note: "Multi-Agenten-Architektur" },
          { name: "PQR-Workflow-API", note: "Node.js + PostgreSQL Automatisierung" },
        ],
      },
    },
    clusters: {
      operations: {
        name: "OPERATIONS_CLUSTER",
        role: "ERFAHRUNG",
        blocks: [
          { kind: "text", label: "rolle", value: "Analyst-Entwickler" },
          {
            kind: "text",
            label: "fokus",
            value:
              "Backend-Service-Integration, relationale Datenbanken und automatisierte System-Workflows (PQR-Plattformen).",
          },
          { kind: "text", label: "erfahrung", value: "3 Jahre Berufserfahrung." },
        ],
      },
      deployment: {
        name: "DEPLOYMENT_CLUSTER",
        role: "PROJEKTE",
        blocks: [
          {
            kind: "list",
            label: "aktive module",
            items: [
              { name: "Skilltree", note: "React-Flow-Wissensgraph" },
              { name: "Pokédex Arcana", note: "Multi-Agenten-Architektur" },
              { name: "Pixel-art web app", note: "React / Framer Motion" },
            ],
          },
        ],
      },
      hobbies: {
        name: "OFFLINE_CLUSTER",
        role: "HOBBYS",
        blocks: [
          {
            kind: "tags",
            label: "abseits des Terminals",
            items: ["Schwimmen", "Wandern", "Schach", "Kaffee"],
          },
        ],
      },
      processing: {
        name: "PROCESSING_CLUSTER",
        role: "TECH-STACK",
        blocks: [
          {
            kind: "tags",
            label: "system-stack",
            items: ["Next.js 14 App Router", "Node.js", "Python", "PostgreSQL", "SQLite"],
          },
          { kind: "tags", label: "umgebung", items: ["WSL2", "Ubuntu", "Zsh"] },
        ],
      },
    },
    unlock: {
      title: "system entsperrt",
      download: "daten_herunterladen",
    },
    boot: {
      label: "Startsequenz",
      window: "ROOT@JAIME-ANDRES — BOOT_SEQ",
      lines: [
        "Montando entorno isométrico 3D...",
        "Sincronizando nodos de despliegue...",
        "Cargando credenciales de agente...",
      ],
      ready: "root@jaime-andres:~$ system online",
      booting: "startet",
      linked: "core verbunden",
    },
    lang: {
      label: "Sprache",
      switch: "Sprache wechseln",
    },
  },
};