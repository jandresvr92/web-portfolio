import { fileURLToPath } from "node:url";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Plugin order follows the TanStack Start hosting guide. Nitro builds the
// server output and detects Vercel on its own (preset "vercel") when the
// build runs there; locally it emits a Node server in .output/.
export default defineConfig({
  resolve: {
    // Same alias as jsconfig.json: `@/lib/utils` → `src/lib/utils`.
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [tanstackStart({ srcDirectory: "src" }), nitro(), react()],
});
