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

## <!-- Last updated: December 2024 -->
