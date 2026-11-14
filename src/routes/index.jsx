import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import BootTerminal from "@/components/boot/BootTerminal";
import CoreCanvas from "@/components/core/CoreCanvas";
import { I18nProvider } from "@/lib/i18n/I18nContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaime Vélez Rojas // Analista Desarrollador" },
      {
        name: "description",
        content:
          "Portafolio de Jaime Vélez Rojas, analista desarrollador: integraciones backend, bases de datos relacionales y flujos automatizados.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  return (
    <main className="relative min-h-screen bg-zinc-950 font-mono text-zinc-200 antialiased">
      {/* One language provider for the whole experience: the boot sequence and the canvas share it. */}
      <I18nProvider>
        <CoreCanvas revealed={booted} />
        {!booted && <BootTerminal onComplete={handleBootComplete} />}
      </I18nProvider>
    </main>
  );
}