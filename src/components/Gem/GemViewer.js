import React from 'react';
import './GemViewer.css';

const GemViewer = ({ gem }) => {
  return (
    <div className="gem-viewer">
      <div className="gem-viewer-date">{new Date(gem.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}{"\n"}{new Date(gem.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      <div className="gem-viewer-tags">
        {gem.tags.map ((tag) => (
          <div className="gem-viewer-tag">{tag}</div>
        ))}
      </div>
      <div className="gem-viewer-text">{gem.text}</div>
    </div>
  );
};

export default GemViewer;
