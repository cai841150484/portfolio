import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.scss";

// Route-level code splitting: split Home and Project pages into separate chunks
const Main = lazy(() => import("./containers/Main"));
const ProjectStandalone = lazy(() => import("./ProjectStandalone"));

function App() {
  // 检测是否在 GitHub Pages 环境
  const isGitHubPages = window.location.hostname.includes("github.io");
  const basename = isGitHubPages ? "/portfolio" : "";

  return (
    <Router basename={basename}>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectStandalone />} />
          <Route
            path="/projects/:projectName"
            element={<ProjectStandalone />}
          />
          {/* 添加一个捕获所有未匹配路由的fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
