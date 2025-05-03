import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // Ensure the root is set to the current directory
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
