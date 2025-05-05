import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/parkarcars-v2",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
