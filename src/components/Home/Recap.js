import React from 'react';
import './Recap.css';

const Recap = ({ data }) => {

  return (
    <div className="recap">
      <h2>Recap</h2>
      <p>One year ago you added...</p>
      <div className='recap-text'>{data.text}</div>
      <div className="tags">
        {data.tags?.map((rtag, index) => (
          <span key={index} className="rtag">{rtag.name}</span>
        ))}
      </div>
    </div>
 );
};

export default Recap;
