import React from 'react';
import './Header.css';
import videop from '../assets/videoP.mp4'

const Header = () => (
  <div className="header-container">
    <video autoPlay loop muted className="header-video">
      <source src= {videop} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="header-content">
      <h1 className="header-title">Lactancia Materna</h1>
      <h1 className="header-subtitle">Blog de Enfermería</h1>
    </div>
  </div>
);

export default Header;
