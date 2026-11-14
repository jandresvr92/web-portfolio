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
        role: "SOFTWARE DEVELOPER",
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
            {
              text: "I engineer interactive digital experiences from the server to the screen. With ",
            },
            { text: "3+ years", hl: true },
            { text: " of experience across " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            {
              text: ", and cloud deployments, I enjoy the puzzle of turning complex monolithic systems into agile, scalable microservices. I’m a proud tech geek and relentless learner, always experimenting with ",
            },
            { text: "3D web", hl: true },
            {
              text: " environments, gamified UIs, and robust database architectures. I bring analytical problem-solving and a creative flair to the full stack, always aiming to deliver tangible value. Let’s build something awesome.",
            },
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
        "Montando entorno isométrico 3D...",
        "Sincronizando nodos de despliegue...",
        "Cargando credenciales de agente...",
      ],
      ready: "root@jaime-andres:~$ system online",
      booting: "booting",
      linked: "core linked",
    },
    lang: { label: "Language", switch: "Switch language" },
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
        role: "DESARROLLADOR DE SOFTWARE",
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
            {
              text: "Diseño experiencias digitales interactivas desde el servidor hasta la pantalla. Con más de ",
            },
            { text: "3 años", hl: true },
            { text: " de experiencia en " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            {
              text: " y despliegues en la nube, disfruto el reto de convertir sistemas monolíticos complejos en microservicios ágiles y escalables. Soy un geek de la tecnología y aprendiz incansable, siempre experimentando con entornos ",
            },
            { text: "web 3D", hl: true },
            {
              text: ", interfaces gamificadas y arquitecturas de datos robustas. Aporto resolución analítica de problemas y una chispa creativa a todo el stack, buscando siempre entregar valor tangible. Construyamos algo increíble.",
            },
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
        role: "SOFTWAREENTWICKLER",
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
            {
              text: "Ich entwickle interaktive digitale Erlebnisse vom Server bis zum Bildschirm. Mit über ",
            },
            { text: "3 Jahren", hl: true },
            { text: " Erfahrung in " },
            { text: "React", hl: true },
            { text: ", " },
            { text: "Angular", hl: true },
            { text: ", " },
            { text: "Node/Python", hl: true },
            {
              text: " und Cloud-Deployments liebe ich die Knobelei, komplexe monolithische Systeme in agile, skalierbare Microservices zu verwandeln. Ich bin ein stolzer Tech-Geek und unermüdlicher Lernender, immer am Experimentieren mit ",
            },
            { text: "3D-Webumgebungen", hl: true },
            {
              text: ", gamifizierten UIs und robusten Datenbankarchitekturen. Ich bringe analytisches Problemlösen und eine kreative Note in den gesamten Stack, stets mit dem Ziel, echten Mehrwert zu liefern. Bauen wir etwas Großartiges.",
            },
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
        "Montando entorno isométrico 3D...",
        "Sincronizando nodos de despliegue...",
        "Cargando credenciales de agente...",
      ],
      ready: "root@jaime-andres:~$ system online",
      booting: "startet",
      linked: "core verbunden",
    },
    lang: { label: "Sprache", switch: "Sprache wechseln" },
  },
};
