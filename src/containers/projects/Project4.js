import React from 'react';
import './Project4.scss';

const Project4 = () => {
  return (
    <div className="project-container">
      <h1>Project4</h1>
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

export default Project4;