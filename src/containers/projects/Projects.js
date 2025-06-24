import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Project.scss";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

export default function Projects() {
  return (
    <Routes>
      <Route path="/projects/project1" element={<Project1 />} />
      <Route path="/projects/project2" element={<Project2 />} />
      <Route path="/projects/project3" element={<Project3 />} />
      <Route path="/projects/project4" element={<Project4 />} />
    </Routes>
  );
}
