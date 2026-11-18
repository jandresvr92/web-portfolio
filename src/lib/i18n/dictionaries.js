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
        role: "FULL-STACK DEVELOPER",
        download: "download_cv",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "full-stack" },
            { label: "exp", value: "{years} yrs" },
          ],
          bio: [
            { text: "I build complete web products, from the database to the interface, with a strong frontend core. With " },
            { text: "{years}+ years", hl: true },
            { text: " of experience across " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Node.js", hl: true },
            { text: " and " },
            { text: "PostgreSQL", hl: true },
            { text: ", I have built reactive data visualizations, designed relational schemas, migrated monolithic platforms to microservices and turned Figma designs into polished interfaces. I’m a proud tech geek and relentless learner, always experimenting with " },
            { text: "3D web", hl: true },
            { text: " environments and gamified UIs. I bring analytical problem-solving and a creative flair to every layer of the stack, always aiming to deliver tangible value. Let’s build something awesome." },
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
    // Short month names and the open end of a job span (see lib/i18n/format.js).
    dates: { months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], present: "Present" },
    errors: {
      notFoundTitle: "404 // node not found",
      notFound: "The page you are looking for does not exist.",
      errorTitle: "fatal // something broke",
      back: "go back",
      home: "start over",
      retry: "try again",
    },
    meta: {
      title: "Jaime Vélez Rojas // Full-stack Developer",
      description:
        "Portfolio of Jaime Andrés Vélez Rojas, full-stack developer with Angular, React, Node.js and PostgreSQL: web apps, data visualization and 3D experiences.",
      locale: "en_US",
      imageAlt: "Jaime Vélez Rojas, full-stack developer, beside the isometric rooms of his portfolio.",
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
        role: "DESARROLLADOR FULL-STACK",
        download: "descargar_cv",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "full-stack" },
            { label: "exp", value: "{years} años" },
          ],
          bio: [
            { text: "Construyo productos web completos, de la base de datos a la interfaz, con un núcleo fuerte en frontend. Con más de " },
            { text: "{years} años", hl: true },
            { text: " de experiencia en " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Node.js", hl: true },
            { text: " y " },
            { text: "PostgreSQL", hl: true },
            { text: ", he creado visualizaciones de datos reactivas, diseñado esquemas relacionales, migrado plataformas monolíticas a microservicios y convertido diseños de Figma en interfaces pulidas. Soy un geek de la tecnología y aprendiz incansable, siempre experimentando con entornos " },
            { text: "web 3D", hl: true },
            { text: " e interfaces gamificadas. Aporto resolución analítica de problemas y una chispa creativa a cada capa del stack, buscando siempre entregar valor tangible. Construyamos algo increíble." },
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
    // Short month names and the open end of a job span (see lib/i18n/format.js).
    dates: { months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], present: "Actualidad" },
    errors: {
      notFoundTitle: "404 // nodo no encontrado",
      notFound: "La página que buscas no existe.",
      errorTitle: "fatal // algo falló",
      back: "volver",
      home: "ir al inicio",
      retry: "reintentar",
    },
    meta: {
      title: "Jaime Vélez Rojas // Desarrollador Full-stack",
      description:
        "Portafolio de Jaime Andrés Vélez Rojas, desarrollador full-stack con Angular, React, Node.js y PostgreSQL: aplicaciones web, visualización de datos y experiencias 3D.",
      locale: "es_CO",
      imageAlt: "Jaime Vélez Rojas, desarrollador full-stack, junto a las salas isométricas de su portafolio.",
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
        role: "FULL-STACK-ENTWICKLER",
        download: "lebenslauf_laden",
        dossier: {
          tag: "dossier // agent_file",
          status: "online",
          badge: "sys_admin",
          meta: [
            { label: "location", value: "medellín" },
            { label: "role", value: "full-stack" },
            { label: "exp", value: "{years} jahre" },
          ],
          bio: [
            { text: "Ich entwickle komplette Webprodukte, von der Datenbank bis zur Oberfläche, mit einem starken Frontend-Kern. Mit über " },
            { text: "{years} Jahren", hl: true },
            { text: " Erfahrung in " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Node.js", hl: true },
            { text: " und " },
            { text: "PostgreSQL", hl: true },
            { text: " habe ich reaktive Datenvisualisierungen gebaut, relationale Schemas entworfen, monolithische Plattformen auf Microservices migriert und Figma-Designs in ausgefeilte Oberflächen verwandelt. Ich bin ein stolzer Tech-Geek und unermüdlicher Lernender, immer am Experimentieren mit " },
            { text: "3D-Webumgebungen", hl: true },
            { text: " und gamifizierten UIs. Ich bringe analytisches Problemlösen und eine kreative Note in jede Schicht des Stacks, stets mit dem Ziel, echten Mehrwert zu liefern. Bauen wir etwas Großartiges." },
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
    // Short month names and the open end of a job span (see lib/i18n/format.js).
    dates: { months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], present: "Heute" },
    errors: {
      notFoundTitle: "404 // Knoten nicht gefunden",
      notFound: "Die gesuchte Seite existiert nicht.",
      errorTitle: "fatal // etwas ist schiefgelaufen",
      back: "zurück",
      home: "zur Startseite",
      retry: "erneut versuchen",
    },
    meta: {
      title: "Jaime Vélez Rojas // Full-Stack-Entwickler",
      description:
        "Portfolio von Jaime Andrés Vélez Rojas, Full-Stack-Entwickler mit Angular, React, Node.js und PostgreSQL: Web-Apps, Datenvisualisierung und 3D-Erlebnisse.",
      locale: "de_DE",
      imageAlt: "Jaime Vélez Rojas, Full-Stack-Entwickler, neben den isometrischen Räumen seines Portfolios.",
    },
  },
};
