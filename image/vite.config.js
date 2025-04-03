import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "./image", // अपने रिपोजिटरी नाम के अनुसार बदलें
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // केवल TailwindCSS
      ],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
