import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="images-section">
        <Link to="/">
          <img
            className="header-logo"
            src="https://i.imgur.com/vLhf37l.png"
            alt="logo"
          />
        </Link>
        <img
          className="header-image"
          src="https://i.imgur.com/5zLG7i9.png"
          alt="alchimia"
        />
      </div>
    </div>
  );
}

export default Header;
