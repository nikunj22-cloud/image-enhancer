import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const vitconfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = vitconfig;
