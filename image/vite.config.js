import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "image", // Explicitly set the root directory
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
