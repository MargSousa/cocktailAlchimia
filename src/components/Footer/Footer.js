import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="/aboutus">About Us</Link>
        <span>Created by </span>
        <a href="https://github.com/fabbud">Fernanda </a>
        <span>|</span>
        <a href="https://github.com/isadorahaashillebrand"> Isadora </a>
        <span>|</span>
        <a href="https://github.com/MargSousa"> Margarida </a>
        <span>|</span>
        <a href="https://github.com/RoxyPursey"> Roxy</a>
        <span> - </span>
        <a href="https://www.wildcodeschool.com">Wild Code School</a>
      </div>
    </div>
  );
}

export default Footer;
