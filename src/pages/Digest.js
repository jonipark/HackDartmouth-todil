import React from 'react'
import './Digest.css'


const Digest = () => {
    const digestTags = ['javascript', 'python', 'react'];

    return (
        <div className='nav-padding digest-container'>
            <div className="top-digest-bar"> 
            <h2>Weekly Digest</h2>
            </div>

            <div className="center digest">
                <span className="date-bar">
                    <span className="back-btn">&lt;</span>
                    <span className="date-range">
                    Apr 15 - Apr 22
                    </span>
                    <span className="fwd-btn">&gt;</span>
                </span>
                <hr class="line"></hr>

                <div className="digest-gem-stats">
                    Hey Joni, <br></br> You learned 56 blocks 
                    <span className="digest-gem-perc">
                        30%
                    </span>
                    this week! <br></br>
                </div>

                <div className="digest-motivation">
                    Some chatgtp motivational quote
                </div>

                <div className="digest-top-tags">
                    Top Tags
                    <ol type="1">
                        <li>Java</li>
                        <li>Docker</li>
                        <li>Spring Boot</li>
                    </ol>
                </div>

                <div className="digest-suggestions">
                    Something that may interest you...
                    <div className="dtags">
                        {digestTags.map((dtag, index) => (
                        <span key={index} className="dtag">{dtag}</span>
                        ))}
                    </div>
                    <div className="interest-tags">
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Digest;