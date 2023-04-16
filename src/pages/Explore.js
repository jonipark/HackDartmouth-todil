import React from 'react'
import './Explore.css'

import homeBg from '../assets/home-bg.png';


const Explore = () => {
    const exploreItems = [
        {
            userImg: 1,
            username: "Joni Park",
            eText: "TIL Building Apps with RealityKit. I watched the session from WWDC19, I learned about different elements in RealityKit, such as Scenes, Entities, Anchors, and Components.",
            eTags: ["AR/VR", "RealityKit", "Swift"],
            timeAgo: "2min",
        },
        {
            userImg: 2,
            username: "Laura Brown",
            eText: "TIL about JavaScript promises and async/await. I learned how to handle asynchronous operations more effectively and make my code more readable.",
            eTags: ["JavaScript", "Promises", "Async/Await"],
            timeAgo: "15min"
        },
        {
            userImg: 3,
            username: "Jessica Lee",
            eText: "TIL about SwiftUI, Apple's UI toolkit. I followed a tutorial to create a basic app with a custom user interface using SwiftUI components.",
            eTags: ["Swift", "SwiftUI", "iOS"],
            timeAgo: "25min"
        },
        {
            userImg: 4,
            username: "Karina Lam",
            eText: "TIL about React hooks. I refactored a class component into a functional component using useState and useEffect hooks, making the code cleaner.",
            eTags: ["React", "Hooks", "Web Development"],
            timeAgo: "40min"
        },
        {
            userImg: 5,
            username: "Vico Lee",
            eText: "TIL about stock market analysis using technical indicators. I practiced using moving averages and relative strength index (RSI) to make more informed trading decisions.",
            eTags: ["Stock", "Technical Analysis", "Trading"],
            timeAgo: "1hr 30min"
        },
        {
            userImg: 6,
            username: "Sohee Kim",
            eText: "TIL about Java streams and lambda expressions. I practiced using streams to process collections of data in a more functional programming style.",
            eTags: ["Java", "Streams", "Lambda Expressions"],
            timeAgo: "55min"
        },
        {
            userImg: 7,
            username: "Hieu Do",
            eText: "TIL about Node.js and Express for backend development. I built a simple REST API that allows CRUD operations on a collection of data.",
            eTags: ["Node.js", "Express", "Backend"],
            timeAgo: "1hr"
        },
        {
            userImg: 8,
            username: "Nina Gonzalez",
            eText: "TIL about blockchain technology and its potential use cases. I learned about decentralized systems, consensus mechanisms, and smart contracts.",
            eTags: ["Blockchain", "Decentralization", "Smart Contracts"],
            timeAgo: "1hr 15min"
        },
        {
            userImg: 9,
            username: "Olivia Ramirez",
            eText: "TIL about public speaking techniques. I watched a TED talk on the power of storytelling and practiced incorporating personal stories to engage my audience.",
            eTags: ["Public Speaking", "Storytelling", "Engagement"],
            timeAgo: "1hr 45min"
        },

    ]

    return (
        <div className='nav-padding explore-container'>
            <div className="top-explore-bar"> 
            <h2>Explore</h2>
            </div>

            <div className="center explore">
                <div className="center explore-items">
                    <ul>
                        {exploreItems.map((item) => (
                        <li key={item.id} className="egem-list-item">
                            <div className="exp-items-user"> 
                                <img src={homeBg} alt="Home background"/> 
                                
                                <span className="exp-items-name">{item.username}</span>
                            </div>
                            
                            <div className="exp-items-text">{item.eText}</div>
                            
                            <div className="exp-items-tag-time">
                                <div>
                                    {item.eTags.map((eTag) => (
                                    <span className="exp-items-tags">{eTag}</span>
                                    ))}
                                </div>
                                <span className="exp-items-time">{item.timeAgo}</span>
                            </div>

                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Explore;