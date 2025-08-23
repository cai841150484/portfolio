<div align="right"><a href="./README.md">English</a> | <a href="./README.zh.md">中文</a></div>

# Hao Cai – Portfolio (Vite + React)

Live site: https://cai841150484.github.io/portfolio/

## Highlights
- Fast Vite + React setup with clean architecture
- Unified icon system: Simple Icons first, local SVG fallback (e.g., TouchDesigner)
- GitHub Pages–ready (subpath /portfolio/): no 404s, correct manifest icons
- Clear separation of data (src/portfolio.js) and UI components

## Tech Stack
- React, Vite, SCSS
- Simple Icons (brand icons), Lottie (animation)
- GitHub Pages for hosting

## Quick Start
1) Clone and install
```bash
git clone https://github.com/cai841150484/portfolio.git
cd portfolio
npm install
```
2) Develop
```bash
npm run dev
# http://localhost:3000
```
3) Build
```bash
npm run build
# output in build/
```

## Deploying to GitHub Pages
- vite.config.js sets base to "/portfolio/" during build ("/" in dev)
- index.html and public/manifest.json use relative icon paths (no leading "/")
- Local images in components use import.meta.env.BASE_URL at runtime to work under /portfolio/
- Push to main to publish (if Pages workflow is enabled)

## Content Configuration
Edit src/portfolio.js to update greeting, social links, skills, education/experience, projects, and contact info.

Example (excerpt):
```js
// Social links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hao-cai-6328351b4/",
  gmail: "jhoncai811@gmail.com",
  display: true,
};

// Skills (Simple Icons first, local fallback)
softwareSkills: [
  { skillName: "Figma" },
  { skillName: "Adobe Illustrator" },
  { skillName: "Adobe Photoshop" },
  { skillName: "Adobe XD" },
  { skillName: "After Effects" },
  { skillName: "Lightroom" },
  { skillName: "InDesign" },
  { skillName: "TouchDesigner", iconSrc: "/icons/touchdesigner.svg" },
  { skillName: "Processing" },
  { skillName: "HTML5" },
  { skillName: "CSS3" },
  { skillName: "JavaScript" },
  { skillName: "Python" },
]
```

## Icon System & Adding Skills
- Primary source: Simple Icons (see src/components/softwareSkills/simpleIconsMap.js)
- If a brand is missing (e.g., TouchDesigner), add a monochrome SVG to public/icons/ and set iconSrc in portfolio.js
- For new brands:
  1) Import from simple-icons/icons and add to iconMap
  2) Or provide a local SVG fallback via iconSrc

## Social Icons
- Use local SVGs, resolved via import.meta.env.BASE_URL at runtime to avoid subpath issues on Pages

## FAQ
- 404s or manifest icon errors on Pages?
  - Ensure vite.config.js base is "/portfolio/" for build
  - Use relative paths in index.html and public/manifest.json (no leading "/")
  - Use import.meta.env.BASE_URL when referencing public assets at runtime
  - Hard refresh after deploy (Cmd+Shift+R / Ctrl+F5)

## Project Structure
```
├─ public/               # Static assets (icons, manifest, sitemap)
├─ src/
│  ├─ components/        # Reusable components
│  │  └─ softwareSkills/ # Simple Icons + fallback renderer
│  ├─ containers/        # Page containers
│  ├─ assets/            # Images & lotties
│  ├─ portfolio.js       # Site content/data
│  └─ index.js           # App entry
├─ vite.config.js        # Vite config (GitHub Pages base)
└─ build/                # Production output
```

## Scripts
- Dev: `npm run dev`
- Build: `npm run build`

## License & Credits
- License: MIT (see LICENSE)
- Based on and modernized from developerFolio ideas/structure

---
If this repo helps, please consider giving it a ⭐️


