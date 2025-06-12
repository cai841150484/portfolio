import React from "react";
import "./MyProject.scss";

const myProjects = [
  {
    title: "Portfolio Website Redesign",
    time: "2024",
    description: "A complete redesign of my personal portfolio website, focusing on minimalism, accessibility, and smooth user experience. Built with React and SCSS, featuring custom animations and responsive layouts.",
    link: "https://caidesign.co/"
  },
  {
    title: "Mobile App UI Kit",
    time: "2023",
    description: "Designed a comprehensive UI kit for a cross-platform mobile app, including iconography, color system, and reusable components. The kit accelerated the development process and ensured design consistency.",
    link: "#"
  },
  {
    title: "Brand Identity for Local Startup",
    time: "2022",
    description: "Created a full brand identity (logo, color palette, typography, and guidelines) for a local tech startup, helping them establish a strong and memorable visual presence.",
    link: "#"
  }
];

export default function MyProject() {
  return (
    <div className="myproject-container" id="myproject">
      <h1 className="myproject-heading">My Projects</h1>
      <div className="myproject-list">
        {myProjects.map((proj, idx) => (
          <div className="myproject-card" key={idx}>
            <h2 className="myproject-title">{proj.title}</h2>
            <span className="myproject-time">{proj.time}</span>
            <p className="myproject-desc">{proj.description}</p>
            {proj.link && proj.link !== "#" && (
              <a className="myproject-link" href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
