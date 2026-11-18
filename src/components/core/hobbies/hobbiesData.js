// Inventory copy of the hobbies node, one complete dictionary per locale. The
// panel renders only the dictionary of the active language.
const HOBBIES_DATA = {
  es: {
    title: "HOBBIES",
    subtitle: "FUERA DE SERVICIO",
    descriptionLabel: "DESCRIPCIÓN DEL ÍTEM",
    selectedLabel: "ÍTEM SELECCIONADO",
    buffLabel: "ESTADÍSTICAS",
    closePanel: "[ CERRAR PANEL ]",
    items: [
      { id: "violin", name: "Violín", buff: "+40 Enfoque // Flujo Creativo", desc: "Un estudio de disciplina, paciencia y expresión. Tocar arreglos clásicos y modernos es mi escape creativo.", icon: "ViolinIcon" },
      { id: "hiking", name: "Senderismo", buff: "+30 Resistencia // Conexión Natural", desc: "Explorar senderos, montañas y miradores. Es el reinicio definitivo para mantenerme con los pies en la tierra.", icon: "MountainIcon" },
      { id: "sudoku", name: "Sudoku", buff: "+50 Estrategia // Gimnasia Mental", desc: "Rompecabezas de lógica y reconocimiento de patrones. Una forma rápida y aguda de mantener activas las habilidades de resolución de problemas.", icon: "GridIcon" },
      { id: "gaming", name: "Videojuegos", buff: "+80 Reflejos // Narrativa", desc: "Mundos virtuales inmersivos, mecánicas complejas y clásicos retro. Los buenos juegos son una clase magistral de UI/UX y lógica.", icon: "GamepadIcon" },
      { id: "writing", name: "Escritura", buff: "+40 Imaginación // Creación de Mundos", desc: "Plasmar pensamientos, historias e ideas estructuradas. Es el puente entre la imaginación caótica y la comunicación clara.", icon: "PenIcon" },
      { id: "coffee", name: "Café de Especialidad", buff: "+100 Enfoque // Maestría de Extracción", desc: "Exploración de orígenes, moliendas exactas y métodos como V60 y AeroPress. El verdadero combustible para programar.", icon: "CoffeeIcon" },
    ],
  },
  en: {
    title: "HOBBIES",
    subtitle: "OFF THE CLOCK",
    descriptionLabel: "ITEM DESCRIPTION",
    selectedLabel: "ITEM SELECTED",
    buffLabel: "BUFFS",
    closePanel: "[ CLOSE PANEL ]",
    items: [
      { id: "violin", name: "Violin", buff: "+40 Focus // Creative Flow", desc: "A study in discipline, patience, and expression. Playing classic and modern arrangements provides a rich creative outlet.", icon: "ViolinIcon" },
      { id: "hiking", name: "Trail Walks", buff: "+30 Stamina // Nature Connection", desc: "Exploring natural trails, mountains, and outlooks. It's the ultimate reset to stay grounded and clear-headed.", icon: "MountainIcon" },
      { id: "sudoku", name: "Sudoku", buff: "+50 Strategy // Mind Workout", desc: "Grid-based logic puzzles and pattern identification. A quick, sharp way to keep problem-solving skills active.", icon: "GridIcon" },
      { id: "gaming", name: "Gaming", buff: "+80 Reflexes // Storytelling", desc: "Experiencing immersive virtual worlds, complex mechanics, and retro classics. Good games are a masterclass in UI/UX and logic.", icon: "GamepadIcon" },
      { id: "writing", name: "Writing", buff: "+40 Imagination // World Building", desc: "Capturing thoughts, stories, and structured ideas. Writing is the bridge between chaotic imagination and clear, thoughtful communication.", icon: "PenIcon" },
      { id: "coffee", name: "Specialty Coffee", buff: "+100 Focus // Brew Mastery", desc: "An exploration of distinct bean origins, precise grind sizes, and brewing methods like V60 and AeroPress. True fuel for coding.", icon: "CoffeeIcon" },
    ],
  },
  de: {
    title: "HOBBYS",
    subtitle: "FEIERABEND",
    descriptionLabel: "ARTIKELBESCHREIBUNG",
    selectedLabel: "AUSGEWÄHLTER ARTIKEL",
    buffLabel: "ATTRIBUTE",
    closePanel: "[ PANEL SCHLIESSEN ]",
    items: [
      { id: "violin", name: "Geige", buff: "+40 Fokus // Kreativer Fluss", desc: "Ein Studium der Disziplin, Geduld und des Ausdrucks. Das Spielen klassischer und moderner Arrangements bietet ein reiches kreatives Ventil.", icon: "ViolinIcon" },
      { id: "hiking", name: "Wandern", buff: "+30 Ausdauer // Naturverbundenheit", desc: "Die Erkundung von Naturpfaden, Bergen und Aussichtspunkten. Der ultimative Neustart, um geerdet und klar im Kopf zu bleiben.", icon: "MountainIcon" },
      { id: "sudoku", name: "Sudoku", buff: "+50 Strategie // Geistiges Training", desc: "Gitterbasierte Logikrätsel und Mustererkennung. Ein schneller, scharfer Weg, um die Problemlösungsfähigkeiten aktiv zu halten.", icon: "GridIcon" },
      { id: "gaming", name: "Videospiele", buff: "+80 Reflexe // Storytelling", desc: "Immersive virtuelle Welten, komplexe Mechaniken und Retro-Klassiker erleben. Gute Spiele sind eine Meisterklasse in UI/UX und Logik.", icon: "GamepadIcon" },
      { id: "writing", name: "Schreiben", buff: "+40 Vorstellung // Weltenbau", desc: "Gedanken, Geschichten und strukturierte Ideen festhalten. Schreiben ist die Brücke zwischen chaotischer Vorstellungskraft und klarer Kommunikation.", icon: "PenIcon" },
      { id: "coffee", name: "Spezialitätenkaffee", buff: "+100 Fokus // Braumeisterschaft", desc: "Eine Erkundung verschiedener Bohnenherkünfte, Mahlgrade und Brühmethoden wie V60. Der wahre Treibstoff fürs Programmieren.", icon: "CoffeeIcon" },
    ],
  },
};

export const hobbiesFor = (locale) => HOBBIES_DATA[locale] ?? HOBBIES_DATA.en;