import React, { useState, useRef } from 'react';
import './GemEditor.css';

const GemEditor = ({ allTags, onNewTagAdded }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const newTagInputRef = useRef(null);
  const [gemText, setGemText] = useState('');

  const handleNewTag = (newTag) => {
    if (!allTags.includes(newTag)) {
      onNewTagAdded(newTag);
    }
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleNewTagBlur = () => {
    if (newTag.trim()) {
      setSelectedTags([...selectedTags, newTag.trim()]);
      handleNewTag(newTag.trim());
      setNewTag('');
    }
  };

  const handleGemTextInput = (e) => {
    setGemText(e.target.value);
  };

  const handleSaveClick = () => {
    // Call API to save the gem and then refresh the page
    console.log('Gem saved:', { text: gemText, tags: selectedTags });
  };

  return (
    <div className="gem-editor">
      <div className="gem-editor-date">{new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</div>
      <div className="gem-editor-tags">
        {allTags.map(tag => (
          <div
            key={tag}
            className={`gem-editor-tag${selectedTags.includes(tag) ? ' selected' : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
        <input
          ref={newTagInputRef}
          type="text"
          className="gem-editor-new-tag"
          placeholder="+"
          value={newTag}
          onChange={(e) => {
            setNewTag(e.target.value);
            newTagInputRef.current.style.width = e.target.value.length === 0 ? '12px' : `${e.target.value.length * 6 + 12}px`;
          }}
          onBlur={handleNewTagBlur}
        />
      </div>
      <div className="gem-editor-today-text">Today I learned (TIL) ...</div>
      <textarea
        type="text"
        className="gem-editor-input"
        value={gemText}
        onChange={handleGemTextInput}
        placeholder="Enter your gem here..."
      />
      <button className="gem-editor-save" onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default GemEditor;
