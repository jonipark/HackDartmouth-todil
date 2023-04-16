import React from 'react';
import './GemList.css';

const GemList = ({ gems, searchTerm, selectedTags, onGemClick }) => {
  const filteredGems = gems.filter(gem =>
    gem.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTags.length === 0 || gem.tags.some(tag => selectedTags.includes(tag.name)))
  );

  const reversedGems = filteredGems.reverse();

  return (
    <div className="gem-list">
      <ul>
        {reversedGems.map((gem) => (
          <li key={gem.id} onClick={() => onGemClick(gem)} className="gem-list-item">
            <div className="gem-list-text">{gem.text}</div>
            <div className="gem-list-date">{new Date(gem.updateDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GemList;
