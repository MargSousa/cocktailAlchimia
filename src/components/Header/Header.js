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
          src="https://i.imgur.com/CPOfn13.png"
          alt="alchimia"
        />
      </div>
      <div>
        <Link to="/">
          <div className="arrow-button" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
