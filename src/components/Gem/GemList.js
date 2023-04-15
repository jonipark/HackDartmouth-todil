import React from 'react';
import './GemList.css';

const GemList = ({ gems, searchTerm, onGemClick }) => {
  const filteredGems = gems.filter(gem => gem.text.toLowerCase().includes(searchTerm.toLowerCase()));

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