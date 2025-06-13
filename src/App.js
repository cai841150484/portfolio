import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ProjectStandalone from "./ProjectStandalone";

function App() {
  return (
    <Router basename="/portfolio">
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectStandalone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
