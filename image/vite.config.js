import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "image", // Set the root to the "image" directory
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "../dist", // Ensure the output directory is correct
    emptyOutDir: true, // Clear the output directory before building
  },
});
