import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { transform } from "esbuild";

export default defineConfig(({ command }) => ({
  plugins: [
    // Ensure .js in src/ is parsed as JSX before import analysis
    {
      name: 'js-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (id.endsWith('.js') && id.includes('/src/')) {
          const result = await transform(code, { loader: 'jsx', jsx: 'automatic', sourcemap: true });
          return { code: result.code, map: result.map };
        }
        return null;
      },
    },
    react({ jsxRuntime: 'automatic' }),
  ],
  // Use root base in dev, GitHub Pages base in build
  base: command === 'build' ? "/portfolio/" : "/",
  // Allow JSX in .js files (CRA-style) for both source and dep pre-bundling
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    jsx: 'automatic',
  },
  optimizeDeps: {
  entries: ["index.html"],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    // Align with existing Pages workflow artifact path
    outDir: "build",
    emptyOutDir: true,
  },
  server: {
  // Bind to all interfaces to avoid IPv6 (::1) vs IPv4 (127.0.0.1) localhost issues
  host: true,
  // Use a stable port to avoid confusion when 3000-3003 are taken
  port: 3004,
  strictPort: true,
  open: false,
  },
}));
