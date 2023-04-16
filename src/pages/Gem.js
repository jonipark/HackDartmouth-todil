import React, { useState } from 'react';
import './Gem.css';
import GemList from '../components/Gem/GemList';
import GemEditor from '../components/Gem/GemEditor';
import GemViewer from '../components/Gem/GemViewer';
import searchIcon from '../assets/search.png'

const Gem = () => {
  const tags = ['react', 'react360', 'python', 'javascript'];

  const gems = [
    { id: 1, text: 'Learned React', date: '2023-04-14', tags: ['react', 'react360'] },
    { id: 2, text: 'Learned Python', date: '2023-04-13', tags: ['python'] },
    { id: 3, text: 'Learned JavaScript', date: '2023-04-12', tags: ['javascript'] },
    // Add more gems as needed
  ];
  const [selectedGem, setSelectedGem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleGemClick = (gem) => {
    setSelectedGem(gem);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="gem nav-padding">
        <div className="left-side">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchInput}
            />
            <div className='filter-container'>
            {tags.map((tag) => (
                selectedTags.includes(tag) ?(
                <div
                    className='filter-tag selected'
                    onClick={() => handleTagClick(tag)}>{tag}
                </div>) : (
                <div
                    className='filter-tag'
                    onClick={() => handleTagClick(tag)}>
                {tag}
                </div>)
            ))}
            </div>
            <div style={{marginTop: 40}}>
                <GemList
                    gems={gems}
                    searchTerm={searchTerm}
                    selectedTags={selectedTags}
                    onGemClick={handleGemClick}
                />
            </div>
        </div>
        <div className="right-side">
            {selectedGem ? <GemViewer gem={selectedGem} /> : <GemEditor />}
        </div>
    </div>
  );
};

export default Gem;
