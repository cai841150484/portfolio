import React from 'react';
import './Project1.scss';

const Project1 = () => {
  return (
    <div className="project-container">
      <h1>Project1</h1>
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

export default Project1;