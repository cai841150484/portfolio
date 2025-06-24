import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Project.scss";
import SHEINHeuristicEvaluation from "./SHEINHeuristicEvaluation";
import PetDeskUserExperienceResearch from "./PetDeskUserExperienceResearch";
import EcommerceMobileAppRedesign from "./EcommerceMobileAppRedesign";
import HealthcareDashboardDesign from "./HealthcareDashboardDesign";

export default function Projects() {
  return (
    <Routes>
      <Route path="/projects/shein-heuristic-evaluation" element={<SHEINHeuristicEvaluation />} />
      <Route path="/projects/petdesk-user-experience-research" element={<PetDeskUserExperienceResearch />} />
      <Route path="/projects/ecommerce-mobile-app-redesign" element={<EcommerceMobileAppRedesign />} />
      <Route path="/projects/healthcare-dashboard-design" element={<HealthcareDashboardDesign />} />
    </Routes>
  );
}
