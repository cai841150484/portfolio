import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import "./ProjectPage.scss";
import {bigProjects} from "./portfolio";
import LazyImage from "./components/lazyImage/LazyImage";
import {ProjectCardSkeleton, useLoadingState} from "./components/loading/LoadingSpinner";

function ProjectPage() {
  const {projectName} = useParams();
  const {isLoading, startLoading, stopLoading} = useLoadingState(true);

  // 模拟加载状态
  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500); // 模拟1.5秒加载时间

    return () => clearTimeout(timer);
  }, [stopLoading]);

  // 该页面已移除项目筛选功能，直接展示所有项目

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
                <LazyImage
                  className="project-image"
                  src={project.image}
                  webpSrc={project.webpImage}
                  alt={project.projectName}
                  placeholder="/api/placeholder/800/400"
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
        {isLoading ? (
          // 显示骨架屏
          Array.from({length: 4}).map((_, idx) => (
            <ProjectCardSkeleton key={idx} />
          ))
        ) : bigProjects.projects.length > 0 ? (
          bigProjects.projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-container">
              <LazyImage
                className="project-image"
                src={project.image}
                webpSrc={project.webpImage}
                alt={project.projectName}
                placeholder="/api/placeholder/350/220"
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
          ))
        ) : (
          <div className="no-projects-found">No projects found.</div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
