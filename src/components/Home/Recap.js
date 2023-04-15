import React from 'react';
import './Recap.css';

const Recap = () => {
  const recapTags = ['javascript', 'python', 'react'];

  return (
    <div className="recap">
      <h2>Recap</h2>
      <p>One year ago you added...</p>
      <p>TIL how to declare a variable using three dumplings and one ice latte.</p>
      <div className="tags">
        {recapTags.map((rtag, index) => (
          <span key={index} className="rtag">{rtag}</span>
        ))}
      </div>
    </div>
  );
};

export default Recap;
