import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="/">🏠</a></li>
        <li><a href="/gems">💎</a></li>
        <li><a href="/digest">📈</a></li>
        <li><a href="/explore">🌎</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
