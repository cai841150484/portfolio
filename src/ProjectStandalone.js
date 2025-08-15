import ProjectPage from "./ProjectPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./containers/topButton/Top";
import "./ProjectStandalone.scss";


function ProjectStandalone() {
  return (
    <div className="project-standalone-wrapper">
        <Header />
        <ProjectPage />
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}

export default ProjectStandalone;
