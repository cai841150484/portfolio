import React from 'react';
import './SHEINHeuristicEvaluation.scss';

const SHEINHeuristicEvaluation = () => {
  return (
    <div className="project-container">
      <h1>SHEIN Heuristic Evaluation</h1>
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

export default SHEINHeuristicEvaluation;