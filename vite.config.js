import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      // '@': resolve(import.meta.dirname, './src'),
      apis: resolve(import.meta.dirname, "./src/apis"),
      assets: resolve(import.meta.dirname, "./src/assets"),
      components: resolve(import.meta.dirname, "./src/components"),
      layouts: resolve(import.meta.dirname, "./src/layouts"),
      pages: resolve(import.meta.dirname, "./src/pages"),
      utils: resolve(import.meta.dirname, "./src/utils"),
    },
    dedupe: ["react", "react-dom"],
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:5000/",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // port: 3000,
  },
  test: {
    css: false,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/test/setup.js",
    coverage: {
      reporter: ["text", "lcov"],
    },
  },
});
