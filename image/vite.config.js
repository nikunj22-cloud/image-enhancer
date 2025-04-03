import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // या अपने रिपोजिटरी नाम के अनुसार
  plugins: [react()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  build: {
    outDir: "dist", // सुनिश्चित करें कि यह Vercel के अनुकूल है
  },
});
