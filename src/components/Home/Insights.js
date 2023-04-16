// import React from 'react';
// import './Insights.css';

// const Insights = () => {
//   return (
//     <div className="insights">
//       <h2>Insights</h2>
//       <div className="flex space-btw center pd-16">
//         <div className='insight-unit'>
//           <h3>10</h3>
//           <p>Longest<br/>Streak</p>
//         </div>
//         <div className='insight-unit'>
//           <h3>5</h3>
//           <p>Current<br/>Streak</p>
//         </div>
//         <div className='insight-unit'>
//           <h3>50</h3>
//           <p>Total<br/>Gems</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Insights;
import React from 'react';
import './Insights.css';

const Insights = ({ longestStreak, currentStreak, totalBlocks }) => {
  return (
    <div className="insights">
      <h2>Insights</h2>
      <div className="flex space-btw center pd-16">
        <div className='insight-unit'>
          <h3>{longestStreak}</h3>
          <p>Longest<br/>Streak</p>
        </div>
        <div className='insight-unit'>
          <h3>{currentStreak}</h3>
          <p>Current<br/>Streak</p>
        </div>
        <div className='insight-unit'>
          <h3>{totalBlocks}</h3>
          <p>Total<br/>Gems</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
