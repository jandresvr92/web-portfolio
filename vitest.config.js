import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Kept apart from vite.config.js: the tests only read content modules, so they
// need the `@/` alias but none of the TanStack Start / Nitro plugins.
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    include: ["tests/**/*.test.js"],
    environment: "node",
  },
});
