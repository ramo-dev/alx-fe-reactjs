
// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      position: "fixed",
      top: 0,
      width: "100%",
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#282c34',
      color: '#ffffff'
    }}>
      <Link
        to="/"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
      >
        Services
      </Link>

      <Link
        to="/contact"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;

