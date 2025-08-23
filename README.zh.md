<div align="right"><a href="./README.md">English</a> | <a href="./README.zh.md">中文</a></div>


# 个人作品集（Vite + React）

线上地址：https://cai841150484.github.io/portfolio/

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
- vite.config.js 在构建阶段使用 base: "/portfolio/"（开发环境为 "/"）
- index.html 与 public/manifest.json 的图标路径使用相对路径（不要以 "/" 开头）
- 组件中的本地图片在运行时以 import.meta.env.BASE_URL 拼接，确保子路径可用
- 推送到 main 即可触发发布（若启用 Pages 工作流）

## 内容配置
在 src/portfolio.js 中编辑：问候语、社交链接、技能、教育/经历、项目、联系信息。

示例（节选）：
```js
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hao-cai-6328351b4/",
  gmail: "jhoncai811@gmail.com",
  display: true
};

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

## 社交图标
- 统一使用本地 SVG，在运行时以 import.meta.env.BASE_URL 拼接，避免 GitHub Pages 子路径 404

## 常见问题（FAQ）
- 访问时报 404 或 Manifest 图标报错？
  - vite.config.js 的 base 在构建阶段是否为 "/portfolio/"
  - index.html/manifest.json 是否使用相对路径（不要以 / 开头）
  - 组件是否用 import.meta.env.BASE_URL 引用 public 资源
  - 部署后强刷缓存（Cmd+Shift+R / Ctrl+F5）

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
- 许可证：MIT（见 LICENSE）
- 致谢：本项目参考并现代化了 developerFolio 的理念与结构

---
如果这个仓库对你有帮助，欢迎点个 Star ⭐️

