import React, { useState, useEffect } from 'react';
import './Gem.css';
import GemList from '../components/Gem/GemList';
import GemEditor from '../components/Gem/GemEditor';
import GemViewer from '../components/Gem/GemViewer';
import searchIcon from '../assets/search.png'
import axios from "axios";

const Gem = () => {
  const tags = ["AR/VR", "Java", "Python", "React", "JavaScript", "Node", "Blockchain"];
  const [allTags, setAllTags] = useState(tags);

  const [selectedGem, setSelectedGem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const [gems, setGems] = useState(null);
  const userId = 4

  const fetchData = async () => {
    try {
      const response = await axios.get('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/blocks', {
        headers: {
          user_id: userId,
        },
      });
      console.log(response.data);
      setGems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveGem = async (gemText, gemTags) => {
    try {
      const response = await axios.post('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/blocks', {
        text: gemText,
        tags: gemTags,
        user_id: userId
      });
  
      if (response.status === 201) {
        console.log('Gem saved successfully');
        fetchData(); // Refetch the data to update the gem list
      } else {
        console.error('Error saving gem:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error saving gem:', error);
    }
  };
  

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

  const handleNewTagAdded = (newTag) => {
    setAllTags([...allTags, newTag]);
  };

  return (
    <div className="gem nav-padding">
        <div className="left-side">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchInput}
            />
            <img src={searchIcon} alt="search" className="search-icon" />
          </div>
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
            {gems && <GemList
              gems={gems}
              searchTerm={searchTerm}
              selectedTags={selectedTags}
              onGemClick={handleGemClick}
            />}
          </div>
        </div>
        <div className="right-side">
            {selectedGem ? <GemViewer date={selectedGem.updateDate} tags={selectedGem.tags} text={selectedGem.text} /> : <GemEditor allTags={allTags} onNewTagAdded={handleNewTagAdded} onSaveGem={saveGem}/>}
        </div>
    </div>
  );
};

export default Gem;
