import React from 'react';
import './GemViewer.css';

const GemViewer = ({ date, tags, text }) => {
  return (
    <div className="gem-viewer">
      <div className="gem-viewer-date">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}{"\n"}{new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      <div className="gem-viewer-tags">
        {tags.map((tag) => (
          <div className="gem-viewer-tag">{tag.name}</div>
        ))}
      </div>
      <div className="gem-viewer-text">{text}</div>
    </div>
  );
};

export default GemViewer;
