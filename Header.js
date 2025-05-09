import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode }) => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/showcase">Module Showcase</Link></li>
        </ul>
      </nav>
      <button className="darkMode" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;