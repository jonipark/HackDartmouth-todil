import React from 'react';
import './GemViewer.css';

const GemViewer = ({ gem }) => {
  return (
    <div className="gem-viewer">
      <div>{gem.text}</div>
      <div>{gem.date}</div>
      <div>
        {gem.tags.map ((tag) => (
          <div className="gem-tag">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default GemViewer;
