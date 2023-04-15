import React from 'react';
import './Home.css';
import homeBg from '../assets/home-bg.png';
import Insights from '../components/Home/Insights';
import Recap from '../components/Home/Recap';

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-section">
        <img src={homeBg} alt="Home background" style={{height: 800}}/>
        <div className="welcome-text">
          <h1>Hey Sohee, <br />
            What did you learn today?</h1>
          <a className="add-block-btn" href="/gems" ><span role="img" aria-label="pencil">✎</span> Add Block</a>
        </div>
      </section>
      <section className="bottom-section">
        <Insights />
        <Recap />
      </section>
    </div>
  );
};

export default Home;
