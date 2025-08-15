<div align="right">English | <a href="./README.zh.md">中文</a></div>

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

# Hao Cai – Portfolio (Vite + React) 🚀

简洁、高速、可维护的个人作品集网站。当前线上地址：
- https://cai841150484.github.io/portfolio/

## 特点
- 现代动效与信息架构：强化首屏叙事、简洁导航、明显的行动按钮
- Vite 构建，极快的本地开发与发布构建
- 图标体系统一：Simple Icons 优先，本地 SVG 兜底（TouchDesigner 等）
- 深度适配 GitHub Pages 子路径（/portfolio/），避免 404 与 PWA 图标错误
- 代码与样式分层清晰，便于扩展与维护

## 技术栈
- React + Vite + SCSS
- Simple Icons（品牌图标），Lottie（动画）
- GitHub Pages（托管与发布）

## 快速开始
1) 克隆与安装
```bash
git clone https://github.com/cai841150484/portfolio.git
cd portfolio
npm install
```
2) 本地开发
```bash
npm run dev
# 访问 http://localhost:3000
```
3) 生产构建
```bash
npm run build
# 产物在 build/ 目录
```

## 发布到 GitHub Pages（已配置）
- vite.config.js 已将 base 设置为在 build 阶段使用 "/portfolio/"，本地开发用 "/"
- index.html 与 manifest.json 的图标路径使用相对路径，社交图标与本地兜底图标在运行时使用 import.meta.env.BASE_URL 拼接
- 推送到 main 即可触发发布（若你启用了 Pages Action）

## 内容配置
主要在 src/portfolio.js 编辑：问候语、社交链接、技能、教育/经历、项目、联系信息。

示例（节选）：
```js
// 社交链接开关
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hao-cai-6328351b4/",
  gmail: "jhoncai811@gmail.com",
  display: true
};

// 技能（Simple Icons 优先，本地兜底）
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
  { skillName: "Python" }
]
```

## 图标体系与新增技能
- 组件优先使用 Simple Icons（src/components/softwareSkills/simpleIconsMap.js）
- 如果某品牌在 Simple Icons 中不存在（如 TouchDesigner），则读取 portfolio.js 的 iconSrc，并在运行时自动拼接 import.meta.env.BASE_URL 确保在 /portfolio/ 下也能访问
- 新增技能：
  1. 先查 Simple Icons 是否包含该品牌（在 simpleIconsMap.js 中按示例导入并加入 iconMap）
  2. 如果没有，放一份单色 SVG 到 public/icons/，在 portfolio.js 为该技能加上 iconSrc: "/icons/xxx.svg"

## 社交图标
- 统一使用本地 SVG，路径在运行时以 import.meta.env.BASE_URL 拼接，避免 GitHub Pages 子路径 404

## 常见问题（FAQ）
- 访问时报 404 或 Manifest 图标报错？
  - 确认 vite.config.js 的 base 在 build 阶段为 "/portfolio/"
  - index.html/manifest.json 使用相对路径（不要以 / 开头）
  - 组件中的本地资源以 import.meta.env.BASE_URL 动态拼接
  - 部署后强制刷新缓存（Cmd+Shift+R / Ctrl+F5）

## 目录结构
```
├─ public/               # 静态资源（图标、清单、站点地图）
├─ src/
│  ├─ components/        # 通用组件
│  │  └─ softwareSkills/ # 技能图标与样式（Simple Icons + fallback）
│  ├─ containers/        # 页面容器
│  ├─ assets/            # 图片与动画
│  ├─ portfolio.js       # 站点文案与数据入口
│  └─ index.js           # 入口
├─ vite.config.js        # Vite 配置（GitHub Pages base）
└─ build/                # 构建产物
```

## 脚本
- 开发：`npm run dev`
- 构建：`npm run build`

## 许可与致谢
- License: MIT（见 LICENSE）
- 致谢：本项目基于 developerFolio 思想与结构进行改造与现代化

---
如果这个仓库对你有帮助，欢迎点个 Star ⭐️

# Personal Portfolio Website 🚀

This is my personal portfolio website, a modern and responsive developer portfolio built with React.

## 🌟 Live Preview

Visit my portfolio: [https://cai841150484.github.io/portfolio](https://cai841150484.github.io/portfolio)


## ✨ Features

- 📱 **Fully Responsive Design** - Adapts to all devices
- 🎨 **Modern UI** - Clean and beautiful user interface
- ⚡ **Fast Loading** - Optimized performance
- 🌙 **Theme Toggle** - Support for light/dark themes
- 📊 **GitHub Integration** - Automatically display GitHub projects and statistics
- 🎯 **SEO Optimized** - Search engine friendly
- 🚀 **Auto Deployment** - GitHub Actions automated deployment

## 📋 Sections Included

✅ About Me and Introduction
✅ Skills Showcase
✅ Education Background
✅ Work Experience
✅ Projects Display (Connected to GitHub)
✅ Achievements and Certifications
✅ Contact Information
✅ GitHub Profile

## 🛠️ Tech Stack

- **Frontend Framework**: React 16+
- **Styling**: SASS/SCSS
- **Icons**: React Icons
- **Animation**: Lottie React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Requirements

```bash
node@v16.0.0 or higher
npm@8.0.0 or higher
git@2.17.1 or higher
```

### Local Development

1. **Clone the project**

```bash
git clone https://github.com/cai841150484/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

4. **Visit in browser**

```
http://localhost:3000
```

## ⚙️ Customization

### Personal Information Setup

Edit the `src/portfolio.js` file to customize your personal information:

```javascript
const greeting = {
  title: "Your Name",
  subTitle: "Your Job Description",
  resumeLink: "Your Resume Link"
};

const socialMediaLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username/",
  gmail: "your-email@gmail.com"
  // More social media links...
};
```

### GitHub Integration Setup

1. **Create `.env` file** (if you haven't already)

```bash
cp env.example .env
```

2. **Configure environment variables**

```env
REACT_APP_GITHUB_TOKEN=your-github-token
GITHUB_USERNAME=your-github-username
USE_GITHUB_DATA=true
```

### Theme Customization

Modify the `src/_globalColor.scss` file to customize color themes:

```scss
// Primary colors
$primaryColor: #your-primary-color;
$secondaryColor: #your-secondary-color;
```

### Resume Upload

Place your resume PDF file in the `src/containers/greeting/` directory and rename it to `resume.pdf`.

## 📦 Build and Deploy

### Build Project

```bash
npm run build
```

### Manual Deploy to GitHub Pages

```bash
npm run deploy
```

### Auto Deploy

The project is configured with GitHub Actions. It will automatically deploy when you push code to the `main` branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── containers/          # Page container components
├── assets/             # Static resources
│   ├── images/         # Image files
│   ├── lottie/         # Lottie animation files
│   └── fonts/          # Font files
├── contexts/           # React Context
├── hooks/              # Custom Hooks
├── portfolio.js        # Main configuration file
└── App.js             # Main application component
```

## 🎯 Performance Optimization

- ✅ Code splitting and lazy loading
- ✅ Image optimization and compression
- ✅ CSS optimization
- ✅ Bundle analysis and optimization

## 🔧 Development Tools

- **Code Formatting**: Prettier
- **Code Linting**: ESLint
- **Git Hooks**: Pre-commit
- **CI/CD**: GitHub Actions

## 📱 Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to help improve this project!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Me

- 📧 Email: jhoncai811@gmail.com
- 💼 LinkedIn: [https://www.linkedin.com/in/hao-cai-ux/](https://www.linkedin.com/in/hao-cai-ux/)
- 🐱 GitHub: [https://github.com/cai841150484](https://github.com/cai841150484)

## 🙏 Acknowledgments

- Thanks to [developerFolio](https://github.com/saadpasta/developerFolio) project for providing the template foundation
- Thanks to all open source contributors

---

⭐ If this project helps you, please give it a star!

