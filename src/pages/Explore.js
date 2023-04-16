import React from 'react'
import './Explore.css'

import homeBg from '../assets/home-bg.png';


const Explore = () => {
    const exploreItems = [{userImg: 1, username: "Karina", eText: "TIL how to swim", eTags: "Java", timeAgo: "2min"},
    {userImg: 2, username: "Joni", eText: "TIL how to swim", eTags: "Java", timeAgo: "3min"},
    {userImg: 3, username: "Sohee", eText: "TIL how to swim", eTags: "Java", timeAgo: "5min"},
    {userImg: 5, username: "anon-person", eText: "TIL how to swim", eTags: "Java", timeAgo: "10min"},
    {userImg: 6, username: "anon-persontwo", eText: "TIL how to swim", eTags: "Java", timeAgo: "11min"}]

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
                                <span className="exp-items-tags">{item.eTags}</span>
                                <span className="exp-items-time">{item.time}</span>
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