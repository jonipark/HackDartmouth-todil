import React from 'react';
import './GemViewer.css';

const GemViewer = ({ gem }) => {
  return (
    <div className="gem-viewer">
      <h2>{gem.text}</h2>
      <p>{gem.date}</p>
      {/* Add tags display */}
    </div>
  );
};

export default GemViewer;
