// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Billettlyst</Link>
      <div className="navbar__links">
        <Link to="/category/musikk">Musikk</Link>
        <Link to="/category/sport">Sport</Link>
        <Link to="/category/teater">Teater</Link>
      </div>
      <Link to="/dashboard" className="navbar__login">Logg inn</Link>
    </nav>
  );
}
