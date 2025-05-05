import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/parkarcars-v2",
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };
});
