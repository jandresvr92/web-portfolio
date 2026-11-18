// Localized copy shared across the portfolio scene; components read it
// through `useI18n()`. Section-specific copy lives next to each section's data.
// `clusters.<key>.role` is the subtitle each node shows in the mobile column.

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
    interaction: { close: "close" },
    panels: {
      hero: {
        name: "JAIME VÉLEZ ROJAS",
        role: "FRONTEND DEVELOPER",
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
            { text: "I build interactive digital experiences, from data-heavy dashboards to 3D scenes on the web. With " },
            { text: "3+ years", hl: true },
            { text: " of experience across " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: " and " },
            { text: "TypeScript", hl: true },
            { text: ", I have built reactive data visualizations, migrated monolithic platforms to microservices and turned Figma designs into polished interfaces. I’m a proud tech geek and relentless learner, always experimenting with " },
            { text: "3D web", hl: true },
            { text: " environments, gamified UIs and solid database design. I bring analytical problem-solving and a creative flair to every project, always aiming to deliver tangible value. Let’s build something awesome." },
          ],
        },
      },
    },
    clusters: {
      operations: { role: "EXPERIENCE" },
      deployment: { role: "PROJECTS" },
      hobbies: { role: "HOBBIES" },
      processing: { role: "TECH STACK" },
    },
    boot: {
      label: "Boot sequence",
      window: "ROOT@JAIME-ANDRES — BOOT_SEQ",
      lines: [
        "Mounting isometric 3D environment...",
        "Syncing deployment nodes...",
        "Loading agent credentials...",
      ],
      ready: "root@jaime-andres:~$ system online",
      booting: "booting",
      linked: "core linked",
    },
    lang: { label: "Language", switch: "Switch language" },
    errors: {
      notFoundTitle: "404 // node not found",
      notFound: "The page you are looking for does not exist.",
      errorTitle: "fatal // something broke",
      back: "go back",
      home: "start over",
      retry: "try again",
    },
    meta: {
      title: "Jaime Vélez Rojas // Frontend Developer",
      description:
        "Portfolio of Jaime Andrés Vélez Rojas, frontend developer with Angular and React: data visualization, interactive interfaces and 3D web experiences.",
      locale: "en_US",
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
    interaction: { close: "cerrar" },
    panels: {
      hero: {
        name: "JAIME VÉLEZ ROJAS",
        role: "DESARROLLADOR FRONTEND",
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
            { text: "Construyo experiencias digitales interactivas, desde dashboards cargados de datos hasta escenas 3D en la web. Con más de " },
            { text: "3 años", hl: true },
            { text: " de experiencia en " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: " y " },
            { text: "TypeScript", hl: true },
            { text: ", he creado visualizaciones de datos reactivas, migrado plataformas monolíticas a microservicios y convertido diseños de Figma en interfaces pulidas. Soy un geek de la tecnología y aprendiz incansable, siempre experimentando con entornos " },
            { text: "web 3D", hl: true },
            { text: ", interfaces gamificadas y un diseño de datos sólido. Aporto resolución analítica de problemas y una chispa creativa a cada proyecto, buscando siempre entregar valor tangible. Construyamos algo increíble." },
          ],
        },
      },
    },
    clusters: {
      operations: { role: "EXPERIENCIA" },
      deployment: { role: "PROYECTOS" },
      hobbies: { role: "HOBBIES" },
      processing: { role: "STACK TÉCNICO" },
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
    lang: { label: "Idioma", switch: "Cambiar idioma" },
    errors: {
      notFoundTitle: "404 // nodo no encontrado",
      notFound: "La página que buscas no existe.",
      errorTitle: "fatal // algo falló",
      back: "volver",
      home: "ir al inicio",
      retry: "reintentar",
    },
    meta: {
      title: "Jaime Vélez Rojas // Desarrollador Frontend",
      description:
        "Portafolio de Jaime Andrés Vélez Rojas, desarrollador frontend con Angular y React: visualización de datos, interfaces interactivas y experiencias web 3D.",
      locale: "es_CO",
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
    interaction: { close: "schließen" },
    panels: {
      hero: {
        name: "JAIME VÉLEZ ROJAS",
        role: "FRONTEND-ENTWICKLER",
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
            { text: "Ich entwickle interaktive digitale Erlebnisse, von datenreichen Dashboards bis zu 3D-Szenen im Web. Mit über " },
            { text: "3 Jahren", hl: true },
            { text: " Erfahrung in " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: " und " },
            { text: "TypeScript", hl: true },
            { text: " habe ich reaktive Datenvisualisierungen gebaut, monolithische Plattformen auf Microservices migriert und Figma-Designs in ausgefeilte Oberflächen verwandelt. Ich bin ein stolzer Tech-Geek und unermüdlicher Lernender, immer am Experimentieren mit " },
            { text: "3D-Webumgebungen", hl: true },
            { text: ", gamifizierten UIs und solidem Datenbankdesign. Ich bringe analytisches Problemlösen und eine kreative Note in jedes Projekt, stets mit dem Ziel, echten Mehrwert zu liefern. Bauen wir etwas Großartiges." },
          ],
        },
      },
    },
    clusters: {
      operations: { role: "ERFAHRUNG" },
      deployment: { role: "PROJEKTE" },
      hobbies: { role: "HOBBYS" },
      processing: { role: "TECH-STACK" },
    },
    boot: {
      label: "Startsequenz",
      window: "ROOT@JAIME-ANDRES — BOOT_SEQ",
      lines: [
        "3D-Umgebung wird geladen...",
        "Knoten werden synchronisiert...",
        "Agentendaten werden geladen...",
      ],
      ready: "root@jaime-andres:~$ System online",
      booting: "startet",
      linked: "core verbunden",
    },
    lang: { label: "Sprache", switch: "Sprache wechseln" },
    errors: {
      notFoundTitle: "404 // Knoten nicht gefunden",
      notFound: "Die gesuchte Seite existiert nicht.",
      errorTitle: "fatal // etwas ist schiefgelaufen",
      back: "zurück",
      home: "zur Startseite",
      retry: "erneut versuchen",
    },
    meta: {
      title: "Jaime Vélez Rojas // Frontend-Entwickler",
      description:
        "Portfolio von Jaime Andrés Vélez Rojas, Frontend-Entwickler mit Angular und React: Datenvisualisierung, interaktive Oberflächen und 3D-Weberlebnisse.",
      locale: "de_DE",
    },
  },
};
