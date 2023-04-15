import React from 'react';
import './GemList.css';

const GemList = ({ onGemClick }) => {
    const tags = ['react', 'react360', 'python', 'javascript'];

    const gems = [
        { id: 1, text: 'Learned React', date: '2023-04-14', tags: ['react', 'react360'] },
        { id: 2, text: 'Learned Python', date: '2023-04-13', tags: ['python'] },
        { id: 3, text: 'Learned JavaScript', date: '2023-04-12', tags: ['javascript'] },
        // Add more gems as needed
    ];

  return (
    <div className="gem-list">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className='filter-container'>
            {tags.map((tag) => (
                <div className="tag">{tag}</div>
            ))}
        </div>
        <ul>
        {gems.map((gem) => (
            <li key={gem.id} onClick={() => onGemClick(gem)}>
            <div className="gem-text">{gem.text}</div>
            <div className="gem-date">{gem.date}</div>
            <div className="gem-tags-container">
                {gem.tags.map((tag) => (
                    <div className="gem-tag">{tag}</div>
                ))}
            </div>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default GemList;
