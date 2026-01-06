import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
  ],
  build: {
    cssMinify: true,
    minify: "esbuild",
  },
  server: {
    port: 3000,
    host: true,
  },
});
