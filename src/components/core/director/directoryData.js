// Copy and accent palette of the desktop director hub: the node directory and
// the status monitor under it. `id` matches the topology node it points at.
export const ACCENTS = {
  cyan: {
    text: "text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]",
    led: "bg-cyan-400",
    glowDot: "shadow-[0_0_10px_#22d3ee]",
  },
  orange: {
    text: "text-orange-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.75)]",
    led: "bg-orange-400",
    glowDot: "shadow-[0_0_10px_#fb923c]",
  },
  purple: {
    text: "text-purple-300 drop-shadow-[0_0_10px_rgba(192,132,252,0.75)]",
    led: "bg-purple-400",
    glowDot: "shadow-[0_0_10px_#c084fc]",
  },
  green: {
    text: "text-green-300 drop-shadow-[0_0_10px_rgba(74,222,128,0.75)]",
    led: "bg-green-400",
    glowDot: "shadow-[0_0_10px_#4ade80]",
  },
  yellow: {
    text: "text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.75)]",
    led: "bg-yellow-400",
    glowDot: "shadow-[0_0_10px_#facc15]",
  },
};

const DIRECTORY = {
  es: {
    brand: "JAIME ANDRES",
    brandAccent: "- DEV",
    prompt: "root@jaime-andres:~$",
    directoryTitle: "[ DIRECTORIO_DE_NODOS ]",
    statusBase: "SISTEMA EN LÍNEA >",
    statusAwaiting: "EN ESPERA DE SELECCIÓN_ [ REVELAR NODO ]",
    statusLink: "ENLACE: NODO_",
    statusAccess: "[ CLICK PARA ACCEDER ]",
    statusOpen: "ACCESO CONCEDIDO_",
    nodes: [
      { id: "profile", code: "00", name: "SOBRE_MÍ", color: "cyan" },
      { id: "stack", code: "01", name: "STACK_TÉCNICO", color: "orange" },
      { id: "projects", code: "02", name: "PROYECTOS", color: "purple" },
      { id: "experience", code: "03", name: "EXPERIENCIA", color: "green" },
      { id: "hobbies", code: "04", name: "HOBBIES & ARCADE", color: "yellow" },
    ],
  },
  en: {
    brand: "JAIME ANDRES",
    brandAccent: "- DEV",
    prompt: "root@jaime-andres:~$",
    directoryTitle: "[ NODE_DIRECTORY ]",
    statusBase: "SYSTEM ONLINE >",
    statusAwaiting: "AWAITING NODE SELECTION_ [ CLICK TO ENTER ]",
    statusLink: "LINK: NODE_",
    statusAccess: "[ CLICK TO ENTER ]",
    statusOpen: "ACCESS GRANTED_",
    nodes: [
      { id: "profile", code: "00", name: "ABOUT_ME", color: "cyan" },
      { id: "stack", code: "01", name: "TECH_STACK", color: "orange" },
      { id: "projects", code: "02", name: "PROJECTS", color: "purple" },
      { id: "experience", code: "03", name: "EXPERIENCE", color: "green" },
      { id: "hobbies", code: "04", name: "HOBBIES & ARCADE", color: "yellow" },
    ],
  },
  de: {
    brand: "JAIME ANDRES",
    brandAccent: "- DEV",
    prompt: "root@jaime-andres:~$",
    directoryTitle: "[ NODE_VERZEICHNIS ]",
    statusBase: "SYSTEM AKTIV >",
    statusAwaiting: "WARTE AUF AUSWAHL_ [ NODE ÖFFNEN ]",
    statusLink: "VERBINDUNG: NODE_",
    statusAccess: "[ KLICK ZUM ÖFFNEN ]",
    statusOpen: "ZUGRIFF GEWÄHRT_",
    nodes: [
      { id: "profile", code: "00", name: "ÜBER_MICH", color: "cyan" },
      { id: "stack", code: "01", name: "TECH_STACK", color: "orange" },
      { id: "projects", code: "02", name: "PROJEKTE", color: "purple" },
      { id: "experience", code: "03", name: "ERFAHRUNG", color: "green" },
      { id: "hobbies", code: "04", name: "HOBBIES & ARCADE", color: "yellow" },
    ],
  },
};

export const directoryFor = (lang) => DIRECTORY[lang] ?? DIRECTORY.en;