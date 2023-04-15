import React from 'react';
import './GemList.css';

const GemList = ({ gems, searchTerm, selectedTags, onGemClick }) => {
  const filteredGems = gems.filter(gem =>
    gem.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTags.length === 0 || gem.tags.some(tag => selectedTags.includes(tag)))
  );

  return (
    <div className="gem-list">
      <ul>
        {filteredGems.map((gem) => (
          <li key={gem.id} onClick={() => onGemClick(gem)}>
            <div className="gem-text">{gem.text}</div>
            <div className="gem-date">{gem.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GemList;