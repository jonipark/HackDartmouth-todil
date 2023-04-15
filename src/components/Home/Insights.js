import React from 'react';
import './Insights.css';

const Insights = () => {
  return (
    <div className="insights">
      <h2>Insights</h2>
      <div className="flex space-btwn center">
        <div className="column">
          <h3>10</h3>
          <p>Longest Streak</p>
        </div>
        <div className="column">
          <h3>5</h3>
          <p>Current Streak</p>
        </div>
        <div className="column">
          <h3>50</h3>
          <p>Total Gems</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
