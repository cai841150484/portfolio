import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
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
    // PWA service worker (keep using existing manifest.json in public)
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: false,
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,svg,ico,json,xml,webp,avif,woff,woff2,ttf}'
        ],
        navigateFallback: '/portfolio/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'assets' },
          }
        ]
      }
    })
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
    // Raise chunk warning limit; we also code-split routes to reduce size
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lottie-web')) {
              return 'vendor-lottie';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    // Bind to all interfaces to avoid IPv6 (::1) vs IPv4 (127.0.0.1) localhost issues
    host: true,
    // Use standard React dev port
    port: 3000,
    strictPort: true,
    open: false,
  },
}));
