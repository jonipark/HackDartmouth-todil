// import React from 'react'
// import './Digest.css'


// const Digest = () => {
//     const digestTags = ['javascript', 'python', 'react'];

//     return (
//         <div className='nav-padding digest-container'>
//             <div className="top-digest-bar"> 
//             <h2>Weekly Digest</h2>
//             </div>

//             <div className="center digest">
//                 <span className="date-bar">
//                     <span className="back-btn">&lt;</span>
//                     <span className="date-range">
//                     Apr 15 - Apr 22
//                     </span>
//                     <span className="fwd-btn">&gt;</span>
//                 </span>
//                 <hr class="line"></hr>

//                 <div className="digest-gem-stats">
//                     Hey Joni, <br></br> You learned 56 blocks 
//                     <span className="digest-gem-perc">
//                         30%
//                     </span>
//                     this week! <br></br>
//                 </div>

//                 <div className="digest-motivation">
//                     Some chatgtp motivational quote
//                 </div>

//                 <div className="digest-top-tags">
//                     Top Tags
//                     <ol type="1">
//                         <li>Java</li>
//                         <li>Docker</li>
//                         <li>Spring Boot</li>
//                     </ol>
//                 </div>

//                 <div className="digest-suggestions">
//                     Something that may interest you...
//                     <div className="dtags">
//                         {digestTags.map((dtag, index) => (
//                         <span key={index} className="dtag">{dtag}</span>
//                         ))}
//                     </div>
//                     <div className="interest-tags">
                    
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Digest;

import React, { useState, useEffect } from 'react';
import './Digest.css';

const Digest = () => {
  const [digestData, setDigestData] = useState(null);
  const userId = 6;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/digests', {
        headers: {
          'user_id': userId,
          'start_date': '2023-04-15T00:00:00',
        },
      });
      const data = await response.json();
      console.log(data)
      setDigestData(data);
    };

    fetchData();
  }, []);

  if (!digestData) {
    return <div>Loading...</div>;
  }
  let userTopTags = [];
  let suggestedTags = [];
  if (digestData.user_top_tags) {
    userTopTags = digestData.user_top_tags.split(',');
  }
  if (digestData.suggested_tags) {
    suggestedTags = digestData.suggested_tags.split(',');
  }

  return (
    <div className="nav-padding digest-container">
      <div className="top-digest-bar">
        <h2>Weekly Digest</h2>
      </div>

      <div className="center digest">
        <span className="date-bar">
          <span className="back-btn">&lt;</span>
          <span className="date-range">Apr 15 - Apr 22</span>
          <span className="fwd-btn">&gt;</span>
        </span>
        <hr className="line" />

        <div className='stats-text-container'>
            <div className="digest-gem-stats">
            Hey {digestData.firstName}, <br />
            You learned <span style={{fontWeight: 700}}>{digestData.total_blocks}</span> blocks
            <span className="digest-increase">⬆{digestData.weekly_increase}%</span>
            this week! <br />
            </div>

            <div className="digest-motivation">{digestData.digest_text}</div>
        </div>

        <div className="digest-top-tags">
          Top Tags
          <ol type="1">
            {userTopTags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ol>
        </div>

        <div className="digest-suggestions">
          Something that may interest you...
          <div className="dtags">
            {suggestedTags.map((dtag, index) => (
              <span key={index} className="dtag">{dtag}</span>
            ))}
          </div>
          <div className="interest-tags"></div>
        </div>
      </div>
    </div>
  );
};

export default Digest;
