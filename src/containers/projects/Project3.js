import React from 'react';
import './Project3.scss';

const Project3 = () => {
  return (
    <div className="project-container">
      <h1>Project3</h1>
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

export default Project3;