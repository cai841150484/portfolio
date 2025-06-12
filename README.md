# 个人作品集网站 🚀

这是我的个人作品集网站，使用React构建的现代化、响应式的开发者作品集。

## 🌟 在线预览

访问我的作品集：[https://cai841150484.github.io/portfolio](https://cai841150484.github.io/portfolio)

## 📸 网站截图

![Portfolio Preview](https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif)

## ✨ 特性

- 📱 **完全响应式设计** - 适配所有设备
- 🎨 **现代化UI** - 简洁美观的用户界面
- ⚡ **快速加载** - 优化的性能表现
- 🌙 **主题切换** - 支持亮色/暗色主题
- 📊 **GitHub集成** - 自动展示GitHub项目和统计
- 🎯 **SEO优化** - 搜索引擎友好
- 🚀 **自动部署** - GitHub Actions自动化部署

## 📋 包含的部分

✅ 个人简介和关于我  
✅ 技能展示  
✅ 教育背景  
✅ 工作经验  
✅ 项目展示（连接GitHub）  
✅ 成就和认证  
✅ 联系方式  
✅ GitHub个人资料  

## 🛠️ 技术栈

- **前端框架**: React 16+
- **样式**: SASS/SCSS
- **图标**: React Icons
- **动画**: Lottie React
- **部署**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 快速开始

### 环境要求

```bash
node@v16.0.0 或更高版本
npm@8.0.0 或更高版本
git@2.17.1 或更高版本
```

### 本地运行

1. **克隆项目**
```bash
git clone https://github.com/cai841150484/portfolio.git
cd portfolio
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm start
```

4. **在浏览器中访问**
```
http://localhost:3000
```

## ⚙️ 自定义配置

### 个人信息配置

编辑 `src/portfolio.js` 文件来自定义你的个人信息：

```javascript
const greeting = {
  title: "你的名字",
  subTitle: "你的职业描述",
  resumeLink: "你的简历链接"
};

const socialMediaLinks = {
  github: "https://github.com/你的用户名",
  linkedin: "https://www.linkedin.com/in/你的用户名/",
  gmail: "你的邮箱@gmail.com",
  // 更多社交媒体链接...
};
```

### GitHub集成配置

1. **创建 `.env` 文件**（如果还没有的话）
```bash
cp env.example .env
```

2. **配置环境变量**
```env
REACT_APP_GITHUB_TOKEN=你的GitHub令牌
GITHUB_USERNAME=你的GitHub用户名
USE_GITHUB_DATA=true
```

### 主题自定义

修改 `src/_globalColor.scss` 文件来自定义颜色主题：

```scss
// 主要颜色
$primaryColor: #你的主色;
$secondaryColor: #你的辅助色;
```

### 简历上传

将你的简历PDF文件放置在 `src/containers/greeting/` 目录下，并重命名为 `resume.pdf`。

## 📦 构建和部署

### 构建项目

```bash
npm run build
```

### 手动部署到GitHub Pages

```bash
npm run deploy
```

### 自动部署

项目已配置GitHub Actions，当你推送代码到`main`分支时会自动部署：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
├── containers/          # 页面容器组件
├── assets/             # 静态资源
│   ├── images/         # 图片文件
│   ├── lottie/         # Lottie动画文件
│   └── fonts/          # 字体文件
├── contexts/           # React Context
├── hooks/              # 自定义Hooks
├── portfolio.js        # 主要配置文件
└── App.js             # 主应用组件
```

## 🎯 性能优化

- ✅ 代码分割和懒加载
- ✅ 图片优化和压缩
- ✅ CSS优化
- ✅ Bundle分析和优化

## 🔧 开发工具

- **代码格式化**: Prettier
- **代码检查**: ESLint
- **Git Hooks**: Pre-commit
- **CI/CD**: GitHub Actions

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 🤝 贡献

欢迎提交Issue和Pull Request来帮助改进这个项目！

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我

- 📧 Email: [你的邮箱]
- 💼 LinkedIn: [你的LinkedIn]
- 🐱 GitHub: [你的GitHub]

## 🙏 致谢

- 感谢 [developerFolio](https://github.com/saadpasta/developerFolio) 项目提供的模板基础
- 感谢所有开源贡献者

---

⭐ 如果这个项目对你有帮助，请给它一个星星！

---
