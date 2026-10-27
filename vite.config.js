// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Bibliotecas em arquivos separados: ficam em cache entre deploys
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\/](react|react-dom|scheduler)[\/]/.test(id)) return "react";
          if (/[\/](motion|framer-motion|motion-dom|motion-utils)[\/]/.test(id))
            return "motion";
        },
      },
    },
  },
});
