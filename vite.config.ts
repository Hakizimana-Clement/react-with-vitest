/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [`./src/setupTest.ts`],
    coverage: {
      reporter: ["text", "html", "lcov", "json-summary"],
      exclude: ["node_modules/", "src/main.tsx"],
    },
  },
});
