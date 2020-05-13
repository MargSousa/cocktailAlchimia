import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="imgFooter-div">
        <Link to="/">
          <img
            className="logo-img"
            src="https://i.imgur.com/vLhf37l.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="about-wcs">
        <div className="aboutus">
          <Link to="/about/team">About Us </Link>
        </div>
        <div className="team">
          <a href="https://github.com/fabbud">Fernanda </a>
          <span>|</span>
          <a href="https://github.com/isadorahaashillebrand"> Isadora </a>
          <span>|</span>
          <a href="https://github.com/MargSousa"> Margarida </a>
          <span>|</span>
          <a href="https://github.com/RoxyPursey"> Roxy</a>
        </div>
        <div className="wcs">
          <a href="https://www.wildcodeschool.com">
            Wild Code School{' '}
            <span role="img" aria-label="drink">
              🍸
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
