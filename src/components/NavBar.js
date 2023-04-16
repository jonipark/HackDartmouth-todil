import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import bigLogo from '../assets/big-logo.png';
import homeIcon from '../assets/home.png';
import gemIcon from '../assets/gem.png';
import digestIcon from '../assets/stats.png';
import exploreIcon from '../assets/globe.png';
import userIcon from '../assets/person.png';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" className="logo" />
      <img src={bigLogo} alt="Big Logo" className="big-logo" />
      <div className="nav-items">
        <a href="/" className='icon-text-container'>
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span className="nav-text">Home</span>
        </a>
        <a href="/gems" className='icon-text-container'>
          <img src={gemIcon} alt="Gems" className="nav-icon" />
          <span className="nav-text">Gems</span>
        </a>
        <a href="/digest" className='icon-text-container'>
          <img src={digestIcon} alt="Digest" className="nav-icon" />
          <span className="nav-text">Digest</span>
        </a>
        <a href="/explore" className='icon-text-container'>
          <img src={exploreIcon} alt="Explore" className="nav-icon" />
          <span className="nav-text">Explore</span>
        </a>
      </div>
      <div className="user-info">
        <img src={userIcon} alt="User" className="nav-icon user-icon" />
        <div className="nav-divider"></div>
        <span className="user-info-text">Username</span>
        <span className="user-info-text">User email</span>
      </div>
    </div>
  );
};

export default NavBar;
