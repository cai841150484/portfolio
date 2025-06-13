import React from "react";
import "./MyProject.scss";

const myProjects = [
  {
    title: "Personal Portfolio Website",
    time: "2024",
    description:
      "A modern, responsive portfolio website showcasing my design philosophy and work. Features smooth animations, dark mode toggle, and optimized performance. Built with React and SCSS with custom design components.",
    link: "https://caidesign.co/",
    type: "Web Design & Development"
  },
  {
    title: "Creative Brand Identity Suite",
    time: "2023",
    description:
      "Complete brand identity design for a creative agency including logo design, color system, typography guidelines, and brand applications. Emphasized modern minimalism with vibrant accent colors.",
    link: "#",
    type: "Brand Identity"
  },
  {
    title: "Mobile UI Design System",
    time: "2023",
    description:
      "Comprehensive UI kit for cross-platform mobile applications featuring 200+ components, design tokens, and interaction patterns. Focused on accessibility and consistency across iOS and Android.",
    link: "#",
    type: "UI/UX Design"
  },
  {
    title: "Digital Art Collection",
    time: "2022",
    description:
      "Series of digital illustrations and graphics exploring themes of technology and human connection. Created using Adobe Creative Suite with focus on color theory and visual storytelling.",
    link: "#",
    type: "Digital Art"
  }
];

export default function MyProject() {
  return (
    <div className="myproject-container" id="myproject">
      <h1 className="myproject-heading">Creative Portfolio</h1>
      <p className="myproject-subheading">
        Personal creative works and design explorations
      </p>
      <div className="myproject-list">
        {myProjects.map((proj, idx) => (
          <div className="myproject-card" key={idx}>
            <div className="myproject-header">
              <h2 className="myproject-title">{proj.title}</h2>
              <div className="myproject-meta">
                <span className="myproject-type">{proj.type}</span>
                <span className="myproject-time">{proj.time}</span>
              </div>
            </div>
            <p className="myproject-desc">{proj.description}</p>
            {proj.link && proj.link !== "#" && (
              <a
                className="myproject-link"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
