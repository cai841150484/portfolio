import React from "react";
import {useParams} from "react-router-dom";
import "./ProjectPage.scss";
import {bigProjects} from "./portfolio";

function ProjectPage() {
  const {projectName} = useParams();

  // If a specific project is requested, try to find it
  if (projectName) {
    const project = bigProjects.projects.find(
      p => p.projectName.toLowerCase().replace(/\s+/g, "-") === projectName
    );

    if (project) {
      return (
        <div className="project-page-container">
          <div className="project-hero">
            <h1 className="project-main-title">{project.projectName}</h1>
            <p className="project-subtitle">{project.projectDesc}</p>
          </div>

          <div className="project-detail-content">
            {project.image && (
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.projectName}
                />
              </div>
            )}

            <div className="project-info">
              <h2>Project Overview</h2>
              <p>{project.projectDesc}</p>

              {project.category && (
                <div className="project-meta">
                  <div className="project-category">
                    <strong>Category:</strong> {project.category}
                  </div>
                  {project.tools && (
                    <div className="project-tools">
                      <strong>Tools:</strong> {project.tools.join(", ")}
                    </div>
                  )}
                  {project.duration && (
                    <div className="project-duration">
                      <strong>Duration:</strong> {project.duration}
                    </div>
                  )}
                </div>
              )}

              {project.footerLink && (
                <div className="project-links">
                  {project.footerLink.map((link, i) => (
                    <a
                      key={i}
                      className="project-link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }

  // Default: show all projects
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
        {bigProjects.projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.projectName}
              />
              {project.category && (
                <div className="project-category">{project.category}</div>
              )}
            </div>
            <div className="project-info">
              <h2 className="project-card-title">{project.projectName}</h2>
              <p className="project-description">{project.projectDesc}</p>

              <div className="project-meta">
                {project.tools && (
                  <div className="project-tools">
                    <strong>Tools:</strong> {project.tools.join(", ")}
                  </div>
                )}
                {project.duration && (
                  <div className="project-duration">
                    <strong>Duration:</strong> {project.duration}
                  </div>
                )}
              </div>

              {project.footerLink &&
                project.footerLink.map((link, i) => (
                  <a
                    key={i}
                    className="project-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginRight:
                        i < project.footerLink.length - 1 ? "10px" : "0"
                    }}
                  >
                    {link.name}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
