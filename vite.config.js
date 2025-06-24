import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "public/index.html"),
        project: resolve(__dirname, "public/project.html")
      }
    }
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/portfolio\/.*$/, to: '/portfolio/index.html' }
      ]
    }
  }
});
