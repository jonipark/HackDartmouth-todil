import React, { useState, useEffect } from "react";
import "./Digest.css";

const Digest = () => {
  const [digestData, setDigestData] = useState({
    firstName: "Joni",
    user_top_tags: "React,Swift,AR/VR,Python,Math",
    suggested_tags: "Computer Vision,Vector calculus",
    digest_text:
      "Congratulations on learning React Hooks and Swift, and successfully building an AR iOS application! Your dedication and hard work have paid off, opening up new possibilities in the world of app development. Embrace the power of these modern technologies and let your creativity soar. Keep pushing boundaries, and remember that every step you take is an opportunity to create something truly remarkable. Let your passion drive you forward, and never stop learning and innovating!",
    total_blocks: 12,
    weekly_increase: 20,
  });

  //TODO: Uncomment this when backend is ready
  // const userId = 6;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/digests', {
  //       headers: {
  //         'user_id': userId,
  //         'start_date': '2023-04-15T00:00:00',
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data)
  //     setDigestData(data);
  //   };

  //   fetchData();
  // }, []);

  if (!digestData) {
    return <div>Loading...</div>;
  }
  let userTopTags = [];
  let suggestedTags = [];
  if (digestData.user_top_tags) {
    userTopTags = digestData.user_top_tags.split(",");
  }
  if (digestData.suggested_tags) {
    suggestedTags = digestData.suggested_tags.split(",");
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

        <div className="stats-text-container">
          <div className="digest-gem-stats">
            Hey {digestData.firstName}, <br />
            You learned{" "}
            <span style={{ fontWeight: 700 }}>
              {digestData.total_blocks}
            </span>{" "}
            blocks
            <span className="digest-increase">
              ⬆{digestData.weekly_increase}%
            </span>
            this week! <br />
          </div>

          <div className="digest-motivation">{digestData.digest_text}</div>
        </div>

        <div className="tags-container">
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
                <span key={index} className="dtag">
                  {dtag}
                </span>
              ))}
            </div>
            <div className="interest-tags"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digest;
