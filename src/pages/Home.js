import React, { useState, useEffect } from 'react';
import './Home.css';
import homeBg from '../assets/home-bg.png';
import Insights from '../components/Home/Insights';
import Recap from '../components/Home/Recap';
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const userId = 4

  const fetchData = async () => {
    try {
      const response = await axios.get('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/home', {
        headers: {
          user_id: userId,
          monthDiff: 12,
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home nav-padding">
      <section className="welcome-section">
        <img src={homeBg} alt="Home background" />
        <div className="welcome-text">
          <h1>Hey Sohee, <br />
            What did you learn today?</h1>
          <a className="add-block-btn" href="/gems" ><span role="img" aria-label="pencil">✎</span> Add Block</a>
        </div>
      </section>
      {data && (<section className="bottom-section">
        <Insights longestStreak={data.longest_streak} currentStreak={data.current_streak} totalBlocks={data.total_blocks} />
        <Recap data={data.block} />
      </section>)}
    </div>
  );
};

export default Home;
