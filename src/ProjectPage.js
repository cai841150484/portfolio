import {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import "./ProjectPage.scss";
import { usePortfolio } from "./portfolio.index";
import { useI18n } from "./i18n/useI18n";
import LazyImage from "./components/lazyImage/LazyImage";
import {ProjectCardSkeleton, useLoadingState} from "./components/loading/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const slugify = s =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");


const splitCategories = (s) =>
  (s || "")
    .split(/[\u00B7\u2022,\/|]/) // middle dot, bullet, comma, slash, pipe
    .map(x => x.trim())
    .filter(Boolean);


// Parse duration like "2025 Spring", "Fall_2022", "2024 Q3", or "2023" to a sortable score
const parseDurationScore = (raw) => {
  if (!raw) return -1;
  const s = String(raw).toLowerCase().replace(/[_·]/g, ' ');
  const yearMatches = Array.from(s.matchAll(/(20[0-9]{2})/g)).map(m => parseInt(m[1], 10));
  const year = yearMatches.length ? Math.max(...yearMatches) : -1;
  const seasonMap = { winter: 1, spring: 2, summer: 3, fall: 4, autumn: 4, q1: 1, q2: 2, q3: 3, q4: 4 };
  let season = -1;
  for (const key of Object.keys(seasonMap)) {
    if (s.includes(key)) { season = seasonMap[key]; break; }
  }
  if (season === -1 && year !== -1) season = 3; // default to mid-year if only year is given
  if (year === -1) return -1;
  return year * 10 + season;
};

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
          <Helmet>
            <title>{`${project.projectName} | Hao Cai Portfolio`}</title>
            {project.projectDesc && (
              <meta name="description" content={project.projectDesc} />
            )}
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + `${import.meta.env.BASE_URL}projects/${slugify(project.projectName)}` : ''} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${project.projectName} | Hao Cai Portfolio`} />
            {project.projectDesc && (
              <meta property="og:description" content={project.projectDesc} />
            )}
            {project.thumbnail || project.image ? (
              <meta
                property="og:image"
                content={typeof window !== 'undefined'
                  ? new URL(project.thumbnail || project.image, window.location.origin).toString()
                  : (project.thumbnail || project.image)}
              />
            ) : null}
          </Helmet>
          <nav className="project-breadcrumb">
            <Link to="/projects">{t("projectPage.breadcrumbProjects", "Projects")}</Link>
            <span className="sep">/</span>
            <span>{project.projectName}</span>
          </nav>

          <div className="project-text-summary">
            <h1 className="project-title">{project.projectName}</h1>

            {(project.category || project.tools || project.duration) && (
              <div className="project-meta-slab">
                {project.category && (
                  <div className="meta-row meta-row--domains">
                    {splitCategories(project.category).map((c, i) => (
                      <span key={i} className="chip chip--domain">{c}</span>
                    ))}
                  </div>
                )}
                {(project.tools || project.duration) && (
                  <div className="meta-row meta-row--tools">
                    {project.tools && project.tools.map((tool, i) => (
                      <span key={i} className="chip chip--tool">{tool}</span>
                    ))}
                    {project.duration && (
                      <span className="chip chip--year" aria-label="Project duration or year">{project.duration}</span>
                    )}
                  </div>
                )}
              </div>
            )}

            {project.projectDesc && <p className="project-description">{project.projectDesc}</p>}

            {Array.isArray(project.footerLink) && project.footerLink.some(l => /^https?:\/\//.test(l?.url || "")) && (
              <div className="project-links">
                {project.footerLink
                  .filter(l => /^https?:\/\//.test(l?.url || ""))
                  .map((l, i) => (
                    <a
                      key={i}
                      className="project-link"
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.name}
                    </a>
                  ))}
              </div>
            )}


            {Array.isArray(project.sections) && project.sections.filter(sec => (sec?.title || "").trim().toLowerCase() !== "overview").length > 0 && (
              <div className="project-sections">
                {project.sections
                  .filter(sec => (sec?.title || "").trim().toLowerCase() !== "overview")
                  .map((sec, idx) => (
                    <section key={idx} className="text-section">
                      <h3 className="section-title">{sec.title}</h3>
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
          </div>


          <div className="project-detail-content">
            {project.image && (
              <div className="project-image-container">
                <LazyImage
                  className="project-image contain-fit"
                  src={project.image}
                  alt={project.projectName}
                  
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
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}

            {project && project.projectName === "Miltons Philosophy" && (
              <div style={{position:'relative', paddingTop:'max(60%,324px)', width:'100%', height:0, marginTop: 24}}>
                <iframe
                  title="Miltons Philosophy Flipbook"
                  style={{position:'absolute', border:'none', width:'100%', height:'100%', left:0, top:0}}
                  src="https://online.fliphtml5.com/klnrl/nbch/"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}



          </div>
        </div>
      );
    }
  }

  return (
    <div className="project-page-container">
      <Helmet>
        <title>{t("projectPage.listTitle", "Case Studies & Technical Projects")} | Hao Cai Portfolio</title>
        <meta name="description" content={t("projectPage.listSubtitle", "Deep dives into my design process, research methodologies, and technical implementations")} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + `${import.meta.env.BASE_URL}projects` : ''} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("projectPage.listTitle", "Case Studies & Technical Projects")} />
        <meta property="og:description" content={t("projectPage.listSubtitle", "Deep dives into my design process, research methodologies, and technical implementations")} />
      </Helmet>
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
          [...bigProjects.projects]
            .sort((a, b) => parseDurationScore(b.duration) - parseDurationScore(a.duration))
            .map((project, idx) => {
            const slug = `/projects/${slugify(project.projectName)}`; // Always go to internal detail page
            return (
              <div className="project-card clickable" key={idx}>
                <Link to={slug} className="project-image-container">
                  <LazyImage
                    className="project-image contain-fit"
                    src={project.thumbnail || project.image}
                    alt={project.projectName}

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
