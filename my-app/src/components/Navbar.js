import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar__container">
    <div className="navbar__left">
      <Link to="/" className="navbar__logo">Billettlyst</Link>
    </div>

    <div className="navbar__center">
      <Link to="/category/musikk" className="navbar__link">Musikk</Link>
      <Link to="/category/sport" className="navbar__link">Sport</Link>
      <Link to="/category/teater" className="navbar__link">Teater</Link>
    </div>

    <div className="navbar__right">
      <Link to="/dashboard" className="navbar__login">Logg inn</Link>
    </div>
    
  </div>
</nav>
  );
}
