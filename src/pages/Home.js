import React, { useState, useEffect } from "react";
import "./Home.css";
import homeBg from "../assets/home-bg.png";
import Insights from "../components/Home/Insights";
import Recap from "../components/Home/Recap";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    block: {
      tags: [{ name: "React" }, { name: "Hooks" }],
      text: "I explored React Hooks, which simplify state management and side-effects in functional components. I learned about core hooks like useState, useEffect, and useContext, as well as custom hooks for reusable logic. React Hooks improve code readability, maintainability, and replace class components.",
      user: {
        first_name: "Joni",
      },
    },
    longest_streak: 58,
    current_streak: 20,
    total_blocks: 212,
  });

  //TODO: Uncomment this when backend is ready
  // const userId = 6;
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/home', {
  //       headers: {
  //         user_id: userId,
  //         monthDiff: 12,
  //       },
  //     });
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="home nav-padding">
      <section className="welcome-section">
        <img src={homeBg} alt="Home background" />
        <div className="welcome-text">
          {data && data.block.user ? (
            <h1>
              Hey {data.block.user.first_name}, <br />
              What did you learn today?
            </h1>
          ) : (
            <h1>
              Hey, <br />
              What did you learn today?
            </h1>
          )}
          <a className="add-block-btn" href="/gems">
            <span
              role="img"
              aria-label="pencil"
              style={{ marginRight: "16px" }}
            >
              ✎
            </span>
            Add Gem
          </a>
        </div>
      </section>
      {data && data.block && (
        <section className="bottom-section">
          <Insights
            longestStreak={data.longest_streak}
            currentStreak={data.current_streak}
            totalBlocks={data.total_blocks}
          />
          <Recap data={data.block} />
        </section>
      )}
    </div>
  );
};

export default Home;
