import React from "react";
import "./HealthcareDashboardDesign.scss";

const HealthcareDashboardDesign = () => {
  return (
    <div className="project-container">
      <h1>Healthcare Dashboard Design</h1>
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

export default HealthcareDashboardDesign;
