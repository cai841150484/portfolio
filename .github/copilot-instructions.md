# Copilot instructions for this repo

Goal: Enable AI coding agents to be productive quickly in this Vite + React portfolio and avoid repo-specific pitfalls.

## Big picture
- SPA using React 18 + Vite; hosted on GitHub Pages at https://cai841150484.github.io/portfolio/.
- Build output dir: `build/` (customized via `vite.config.js -> build.outDir`).
- Routing: `react-router-dom@^7` with GitHub Pages base. `App.js` sets `basename` to `/portfolio` on `*.github.io`. `vite.config.js` sets `base: '/portfolio/'`.

## Key files and flows
- `src/App.js`: Declares routes (`/`, `/projects`, `/projects/:projectName`), wraps with `HelmetProvider` and `ErrorBoundary`.
- `src/containers/Main.js`: Aggregates home sections (greeting, skills, projects, etc.).
- `src/ProjectStandalone.js`, `src/ProjectPage.js`: Project list/detail. Detail slug = `name.toLowerCase().replace(/\s+/g, '-')`.
- `src/portfolio.js`: Data source (e.g., `bigProjects.projects`). Extend here to add content.
- `src/components/lazyImage/LazyImage.*`: Lazy image with WebP + placeholder.
- `src/components/loading/LoadingSpinner.*`: Spinners, skeletons, and `useLoadingState`.
- `src/_globalColor.scss`: Theme tokens; SCSS per component/page (no CSS Modules).

## Dev workflow
- Dev server: `npm start` (Vite) → http://localhost:3000 (see `vite.config.js` server.port/open/host).
- Build: `npm run build` → emits to `build/`.
- Preview: `npm run preview` (serves production build locally).
- Deploy: CI auto-deploys on push to `main` via `.github/workflows/deploy.yml`. Manual `npm run deploy` uses `gh-pages` but CI is preferred.

## Conventions and gotchas
- Env vars: Use Vite style `VITE_*` via `import.meta.env` (README’s `REACT_APP_*` is legacy).
- Routing/base: Keep `App.js` basename logic and Vite `base` in sync; test both locally and on Pages.
- Case sensitivity: CI runs on Linux. Match exact file/case in imports (e.g., `components/lazyImage/LazyImage`).
- Images: Prefer `LazyImage` with `webpSrc` and a placeholder string.
- Projects data: Add/edit in `src/portfolio.js`; detail pages rely on the slug rule above.
- Removed feature: `src/components/projectFilter` was deleted. Don’t reintroduce without approval.
- Code splitting: `vite.config.js` manualChunks (`vendor`, `router`, `lottie`); extend cautiously.

## Common tasks
- Add a project:
  1) Update `bigProjects.projects` in `src/portfolio.js` (fields: `projectName`, `projectDesc`, `image`/`webpImage`, `footerLink`, etc.).
  2) Put assets under `src/assets/images/` and import with correct relative paths.
- Add a route/page:
  1) Create component in `src/containers/<Page>/` (+ SCSS).
  2) Add a `<Route>` in `src/App.js`. Validate with base `/portfolio` on Pages.

If patterns are missing or unclear, leave a note to refine this document.
