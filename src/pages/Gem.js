import React, { useState, useEffect } from "react";
import "./Gem.css";
import GemList from "../components/Gem/GemList";
import GemEditor from "../components/Gem/GemEditor";
import GemViewer from "../components/Gem/GemViewer";
import searchIcon from "../assets/search.png";
import axios from "axios";

const Gem = () => {
  const tags = [
    "AR/VR",
    "React",
    "TypeScript",
    "Swift",
    "iOS",
    "Python",
    "Blockchain",
  ];
  const [allTags, setAllTags] = useState(tags);

  const [selectedGem, setSelectedGem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // const [gems, setGems] = useState(null);
  const gems = [
    {
      id: 2,
      text: "Explored React component lifecycle methods and implemented them in a sample project. Learned about mounting, updating, and unmounting phases in class components. Optimized performance using shouldComponentUpdate and PureComponent.",
      updateDate: "2023-04-14",
      tags: [{ name: "react" }, { name: "lifecycle" }, { name: "performance" }],
    },
    {
      id: 3,
      text: "Learned how to use React Native navigation and built a multi-screen mobile app. Implemented stack and tab-based navigation patterns using React Navigation library. Created custom animations and transitions for an engaging user experience.",
      updateDate: "2023-04-17",
      tags: [
        { name: "react native" },
        { name: "TypeScript" },
        { name: "navigation" },
        { name: "animations" },
      ],
    },
    {
      id: 4,
      text: "Implemented an AR experience for an iOS app using ARKit and Swift. Created 3D models and animations to overlay on the real world. Handled user interactions with virtual objects and optimized performance for a smooth experience.",
      updateDate: "2023-04-17",
      tags: [
        { name: "AR/VR" },
        { name: "iOS" },
        { name: "ARKit" },
        { name: "Swift" },
      ],
    },
    {
      id: 5,
      text: "Developed a VR application for iOS using SceneKit and Swift. Designed immersive 3D environments and created realistic lighting and shadow effects. Implemented user interactions with virtual objects and built a user interface within the VR world.",
      updateDate: "2023-04-20",
      tags: [
        { name: "AR/VR" },
        { name: "iOS" },
        { name: "SceneKit" },
        { name: "Swift" },
      ],
    },
    {
      id: 6,
      text: "Studied the fundamentals of blockchain technology and its applications in various industries. Learned about consensus algorithms, smart contracts, and decentralized applications. Explored Ethereum and Solidity for developing blockchain solutions.",
      updateDate: "2023-04-20",
      tags: [
        { name: "Blockchain" },
        { name: "consensus" },
        { name: "smart contracts" },
        { name: "Ethereum" },
      ],
    },
    {
      id: 7,
      text: "Dove into Python for data analysis and applied mathematical concepts to solve complex problems. Utilized libraries like NumPy, pandas, and matplotlib for data manipulation, analysis, and visualization. Explored machine learning using scikit-learn.",
      updateDate: "2023-04-21",
      tags: [
        { name: "Python" },
        { name: "math" },
        { name: "data analysis" },
        { name: "machine learning" },
      ],
    },
    {
      id: 8,
      text: "Gained insights into business strategy and decision-making processes. Analyzed case studies of successful startups and established companies. Explored the role of innovation, market research, and customer-centric approaches in business growth.",
      updateDate: "2023-04-21",
      tags: [{ name: "business" }, { name: "market research" }],
    },
    {
      id: 9,
      text: "Mastered React Hooks to refactor class components into functional components. Simplified state management and side effects using useState and useEffect. Created custom hooks to reuse logic across components and improve code",
      updateDate: "2023-04-24",
      tags: [{ name: "React" }, { name: "hooks" }, { name: "TypeScript" }],
    },
    {
      id: 10,
      text: "Explored advanced React Native techniques, such as implementing push notifications and deep linking. Integrated third-party libraries for accessing native device functionalities, like geolocation and camera. Improved app performance using techniques like code splitting and optimizing assets.",
      updateDate: "2023-04-24",
      tags: [
        { name: "React Native" },
        { name: "push notifications" },
        { name: "deep linking" },
        { name: "performance" },
      ],
    },
    {
      id: 11,
      text: "Built an AR-based iOS application using RealityKit and SwiftUI. Leveraged Apple's USDZ file format to import and manipulate 3D models in the app. Applied physics and collisions to create realistic object interactions in the AR environment.",
      updateDate: "2023-04-24",
      tags: [
        { name: "AR/VR" },
        { name: "iOS" },
        { name: "RealityKit" },
        { name: "Swift" },
      ],
    },
    {
      id: 12,
      text: "Developed a multiplayer VR experience for iOS devices using WebXR and WebRTC. Synchronized virtual environments across devices and implemented real-time communication between players. Optimized rendering for high frame rates and low latency.",
      updateDate: "2023-04-25",
      tags: [
        { name: "AR/VR" },
        { name: "iOS" },
        { name: "WebXR" },
        { name: "WebRTC" },
      ],
    },
    {
      id: 13,
      text: "Learned about decentralized finance (DeFi) and its applications on the blockchain. Explored various DeFi protocols for lending, borrowing, and trading digital assets. Developed a simple decentralized exchange using smart contracts on the Ethereum network.",
      updateDate: "2023-04-26",
      tags: [
        { name: "Blockchain" },
        { name: "DeFi" },
        { name: "smart contracts" },
        { name: "Ethereum" },
      ],
    },
    {
      id: 14,
      text: "Applied Python and mathematical concepts to build predictive models for various applications. Utilized libraries like TensorFlow and Keras for deep learning. Explored techniques for model evaluation, optimization, and deployment.",
      updateDate: "2023-04-27",
      tags: [
        { name: "Python" },
        { name: "math" },
        { name: "predictive models" },
        { name: "deep learning" },
      ],
    },
    {
      id: 15,
      text: "Delved into business analytics and gained insights into customer behavior and market trends. Utilized tools like Tableau and Power BI for data visualization and reporting. Applied statistical methods to forecast sales and optimize inventory management.",
      updateDate: "2023-04-28",
      tags: [
        { name: "business" },
        { name: "analytics" },
        { name: "data visualization" },
        { name: "forecasting" },
      ],
    },
    {
      id: 16,
      text: "Deepened understanding of React performance optimization techniques, such as memoization, useCallback, and useMemo. Utilized the React DevTools Profiler to identify and resolve performance bottlenecks. Explored strategies for optimizing server-side rendering and code splitting.",
      updateDate: "2023-04-29",
      tags: [
        { name: "React" },
        { name: "performance" },
        { name: "memoization" },
      ],
    },
  ];

  //TODO: Uncomment this when backend is ready
  // const userId = 6;

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/blocks",
  //       {
  //         headers: {
  //           user_id: userId,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setGems(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const saveGem = async (gemText, gemTags) => {
  //   try {
  //     const response = await axios.post(
  //       "http://ec2-3-141-106-245.us-east-2.compute.amazonaws.com:8080/api/v1/blocks",
  //       {
  //         text: gemText,
  //         tags: gemTags,
  //         user_id: userId,
  //       }
  //     );

  //     if (response.status === 201) {
  //       console.log("Gem saved successfully");
  //       fetchData(); // Refetch the data to update the gem list
  //     } else {
  //       console.error(
  //         "Error saving gem:",
  //         response.status,
  //         response.statusText
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error saving gem:", error);
  //   }
  // };

  const saveGem = (gemText, gemTags) => {
    alert("Gem will be saved successfully once backend is ready");
  };

  const handleGemClick = (gem) => {
    setSelectedGem(gem);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleNewTagAdded = (newTag) => {
    setAllTags([...allTags, newTag]);
  };

  return (
    <div className="gem nav-padding">
      <div className="left-side">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <img src={searchIcon} alt="search" className="search-icon" />
        </div>
        <div className="filter-container">
          {tags.map((tag) =>
            selectedTags.includes(tag) ? (
              <div
                className="filter-tag selected"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </div>
            ) : (
              <div className="filter-tag" onClick={() => handleTagClick(tag)}>
                {tag}
              </div>
            )
          )}
        </div>
        <div style={{ marginTop: 40 }}>
          {gems && (
            <GemList
              gems={gems}
              searchTerm={searchTerm}
              selectedTags={selectedTags}
              onGemClick={handleGemClick}
            />
          )}
        </div>
      </div>
      <div className="right-side">
        {selectedGem ? (
          <GemViewer
            date={selectedGem.updateDate}
            tags={selectedGem.tags}
            text={selectedGem.text}
          />
        ) : (
          <GemEditor
            allTags={allTags}
            onNewTagAdded={handleNewTagAdded}
            onSaveGem={saveGem}
          />
        )}
      </div>
    </div>
  );
};

export default Gem;
