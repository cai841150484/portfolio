import React from "react";
import "./ProjectPage.scss";

const caseStudies = [
  {
    title: "SHEIN.com - Heuristic Evaluation",
    category: "UX Research",
    description:
      "Conducted a comprehensive heuristic evaluation of SHEIN.com, a leading e-commerce platform specializing in fast fashion. Assessed usability, discoverability, and overall user experience through Nielsen's Ten Usability Heuristics.",
    image: "https://via.placeholder.com/350x200?text=SHEIN+Case+Study",
    tools: ["Figma", "Miro", "Google Analytics"],
    duration: "3 weeks",
    link: "#"
  },
  {
    title: "PetDesk - User Experience Research",
    category: "UX Research",
    description:
      "Evaluated user experience on the PetDesk app for new and returning users to identify strengths and challenges in interface and usability. Conducted user interviews and usability testing.",
    image: "https://via.placeholder.com/350x200?text=PetDesk+Research",
    tools: ["Figma", "UserTesting", "Maze"],
    duration: "4 weeks",
    link: "#"
  },
  {
    title: "E-commerce Mobile App Redesign",
    category: "UI/UX Design",
    description:
      "Complete redesign of a mobile shopping app focusing on improving conversion rates and user engagement. Implemented new navigation patterns and streamlined checkout process.",
    image: "https://via.placeholder.com/350x200?text=Mobile+App+Redesign",
    tools: ["Figma", "Principle", "InVision"],
    duration: "6 weeks",
    link: "#"
  },
  {
    title: "Healthcare Dashboard Design",
    category: "UI Design",
    description:
      "Designed an intuitive dashboard for healthcare professionals to manage patient data and appointments. Focused on accessibility and quick information retrieval.",
    image: "https://via.placeholder.com/350x200?text=Healthcare+Dashboard",
    tools: ["Figma", "Adobe Illustrator", "Zeplin"],
    duration: "5 weeks",
    link: "#"
  }
];

function ProjectPage() {
  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-main-title">
          Case Studies & Technical Projects
        </h1>
        <p className="project-subtitle">
          Deep dives into my design process, research methodologies, and
          technical implementations
        </p>
      </div>

      <div className="project-list">
        {caseStudies.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-category">{project.category}</div>
            </div>
            <div className="project-info">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <div className="project-tools">
                  <strong>Tools:</strong> {project.tools.join(", ")}
                </div>
                <div className="project-duration">
                  <strong>Duration:</strong> {project.duration}
                </div>
              </div>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
