import React from 'react';
import './EcommerceMobileAppRedesign.scss';

const EcommerceMobileAppRedesign = () => {
  return (
    <div className="project-container">
      <h1>E-commerce Mobile App Redesign</h1>
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

export default EcommerceMobileAppRedesign;