import React, { useState } from 'react';
import './Gem.css';
import GemList from '../components/Gem/GemList';
import GemEditor from '../components/Gem/GemEditor';
import GemViewer from '../components/Gem/GemViewer';

const Gem = () => {
  const [selectedGem, setSelectedGem] = useState(null);

  const handleGemClick = (gem) => {
    setSelectedGem(gem);
  };

  return (
    <div className="gem nav-padding">
      <div className="left-side">
        <GemList onGemClick={handleGemClick} />
      </div>
      <div className="right-side">
        {selectedGem ? <GemViewer gem={selectedGem} /> : <GemEditor />}
      </div>
    </div>
  );
};

export default Gem;
