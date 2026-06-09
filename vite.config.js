import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // root: "src/", // Sources files (typically where index.html is)
  // publicDir: "../static/", // Path from "root" to static assets (files that are served as they are)
  build: {
    outDir: "./docs", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
  base: "./",
  plugins: [react()],
});
