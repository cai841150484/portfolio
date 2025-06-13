import React from "react";
import ProjectPage from "./ProjectPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";
import "./ProjectStandalone.scss";

function ProjectStandalone() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={
        isDark
          ? "dark-mode project-standalone-wrapper"
          : "project-standalone-wrapper"
      }
    >
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <ProjectPage />
        <Footer />
      </StyleProvider>
    </div>
  );
}

export default ProjectStandalone;
