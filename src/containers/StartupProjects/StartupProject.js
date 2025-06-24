import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const navigate = useNavigate();

  function openUrlInNewTab(url, isInternal) {
    if (!url) {
      return;
    }
    if (isInternal) {
      console.log("[DEBUG] Attempting internal navigation to:", url);
      navigate(url);
    } else {
      console.log("[DEBUG] Opening external link:", url);
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  function handleNavigation(url, isInternal) {
    openUrlInNewTab(url, isInternal);
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p
          className={
            isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => {
                        return (
                          <span
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => {
                              console.log("[BASIC] Button clicked");
                              console.log("[DEBUG] Project data:", project);
                              console.log("[DEBUG] Link data:", link);
                              
                              // Check if it's a "View Case Study" link
                              if (link.name.toLowerCase().includes("case study") || 
                                  link.name.toLowerCase().includes("详情") ||
                                  link.name.toLowerCase().includes("view project")) {
                                // Navigate to project detail page
                                let projectPath = '';
                                switch (project.projectName) {
                                  case 'SHEIN Heuristic Evaluation':
                                    projectPath = '/projects/shein-heuristic-evaluation';
                                    break;
                                  case 'PetDesk User Experience Research':
                                    projectPath = '/projects/petdesk-user-experience-research';
                                    break;
                                  case 'Ecommerce Mobile App Redesign':
                                    projectPath = '/projects/ecommerce-mobile-app-redesign';
                                    break;
                                  case 'Healthcare Dashboard Design':
                                    projectPath = '/projects/healthcare-dashboard-design';
                                    break;
                                  default:
                                    projectPath = '/projects';
                                }
                                handleNavigation(projectPath, true);
                              } else {
                                // External link
                                handleNavigation(link.url, false);
                              }
                            }}
                          >
                            {link.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
