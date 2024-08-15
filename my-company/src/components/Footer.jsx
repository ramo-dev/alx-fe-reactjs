
// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#282c34',
      color: '#ffffff',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0' }}>© 2024 My Website</p>

      </div>
    </footer>
  );
};

export default Footer;

