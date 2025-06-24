import React from "react";
import "./PetDeskUserExperienceResearch.scss";

const PetDeskUserExperienceResearch = () => {
  return (
    <div className="project-container">
      <h1>PetDesk User Experience Research</h1>
      <div className="image-grid">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="image-placeholder">
            {/* 待内容上传 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetDeskUserExperienceResearch;
