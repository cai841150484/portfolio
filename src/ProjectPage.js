import {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import "./ProjectPage.scss";
import { usePortfolio } from "./portfolio.index";
import { useI18n } from "./i18n/useI18n";
import LazyImage from "./components/lazyImage/LazyImage";
import {ProjectCardSkeleton, useLoadingState} from "./components/loading/LoadingSpinner";

const slugify = s =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

function ProjectPage() {
  const { t } = useI18n();
  const { bigProjects } = usePortfolio();
  const {projectName} = useParams();
  const {isLoading, stopLoading} = useLoadingState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);
    return () => clearTimeout(timer);
  }, [stopLoading]);

  if (projectName) {
    const project = bigProjects.projects.find(
      p => slugify(p.projectName) === projectName
    );

    if (project) {
      return (
        <div className="project-page-container">
          <div className="project-hero">
            <h1 className="project-main-title">{project.projectName}</h1>
            <p className="project-subtitle">{project.projectDesc}</p>
          </div>

          <nav className="project-breadcrumb">
            <Link to="/projects">{t("projectPage.breadcrumbProjects", "Projects")}</Link>
            <span className="sep">/</span>
            <span>{project.projectName}</span>
          </nav>

          <div className="project-detail-content">
            {project.image && (
              <div className="project-image-container">
                <LazyImage
                  className="project-image contain-fit"
                  src={project.image}
                  alt={project.projectName}
                  placeholder="/api/placeholder/1720/1080"
                />
              </div>
            )}

            {project && project.projectName === "ZenFlow (Processing)" && (
              <div className="interactive-embed" style={{margin: "30px 0"}}>
                <iframe
                  title="ZenFlow Interactive"
                  src={`${import.meta.env.BASE_URL}zenflow/index.html`}
                  loading="lazy"
                  style={{ width: "100%", height: "720px", border: 0, borderRadius: "12px", background: "#000" }}
                />
                <p style={{marginTop: 10, fontSize: 14, color: "#7f8c8d"}}>
                  {t("projectPage.zenflowTip")}
                </p>
              </div>
            )}

            {project && project.projectName === "Sandboxie UI Refresh" && (
              <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:0, marginTop: 24}}>
                <iframe
                  title="Sandboxie Flipbook"
                  style={{position:'absolute', border:'none', width:'100%', height:'100%', left:0, top:0}}
                  src="https://online.fliphtml5.com/geigd/mqtp/"
                  seamless="seamless"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                />
              </div>
            )}

            {project && project.projectName === "Miltons Philosophy" && (
              <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:0, marginTop: 24}}>
                <iframe
                  title="Miltons Philosophy Flipbook"
                  style={{position:'absolute', border:'none', width:'100%', height:'100%', left:0, top:0}}
                  src="https://online.fliphtml5.com/klnrl/nbch/"
                  seamless="seamless"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                />
              </div>
            )}

            <div className="project-info">
              <h2>{t("projectPage.overviewTitle", "Project Overview")}</h2>
              <p>{project.projectDesc}</p>

              {project.category && (
                <div className="project-meta">
                  <div className="project-category">
                    <strong>{t("projectPage.category", "Category:")}</strong> {project.category}
                  </div>
                  {project.tools && (
                    <div className="project-tools">
                      <strong>{t("projectPage.tools", "Tools:")}</strong> {project.tools.join(", ")}
                    </div>
                  )}
                  {project.duration && (
                    <div className="project-duration">
                      <strong>{t("projectPage.duration", "Duration:")}</strong> {project.duration}
                    </div>
                  )}
                </div>
              )}

              {project.sections && project.sections.length > 0 && (
                <div className="case-study-sections">
                  {project.sections.map((sec, idx) => (
                    <section key={idx} className="case-section">
                      <h3 className="case-section-title">{sec.title}</h3>
                      {sec.paragraphs && sec.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul>
                          {sec.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {sec.images && sec.images.length > 0 && (
                        <div className="case-gallery">
                          {sec.images.map((img, i) => (
                            <LazyImage key={i} className="case-img" src={img.src} alt={img.alt || project.projectName} />
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
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

  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-main-title">
          {t("projectPage.listTitle", "Case Studies & Technical Projects")}
        </h1>
        <p className="project-subtitle">
          {t("projectPage.listSubtitle", "Deep dives into my design process, research methodologies, and technical implementations")}
        </p>
      </div>

      <div className="project-list">
        {isLoading ? (
          Array.from({length: 4}).map((_, idx) => (
            <ProjectCardSkeleton key={idx} />
          ))
        ) : bigProjects.projects.length > 0 ? (
          bigProjects.projects.map((project, idx) => {
            const slug = project.footerLink?.[0]?.url || `/projects/${slugify(project.projectName)}`;
            return (
              <div className="project-card clickable" key={idx}>
                <Link to={slug} className="project-image-container">
                  <LazyImage
                    className="project-image contain-fit"
                    src={project.thumbnail || project.image}
                    alt={project.projectName}
                    placeholder="/api/placeholder/1720/1080"
                  />
                  {project.category && (
                    <div className="project-category">{project.category}</div>
                  )}
                </Link>
                <div className="project-info">
                  <h2 className="project-card-title">
                    <Link to={slug}>{project.projectName}</Link>
                  </h2>
                  <p className="project-description">{project.projectDesc}</p>

                  <div className="project-meta">
                    {project.tools && (
                      <div className="project-tools">
                        <strong>{t("projectPage.tools", "Tools:")}</strong> {project.tools.join(", ")}
                      </div>
                    )}
                    {project.duration && (
                      <div className="project-duration">
                        <strong>{t("projectPage.duration", "Duration:")}</strong> {project.duration}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-projects-found">{t("projectPage.noProjects", "No projects found.")}</div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
