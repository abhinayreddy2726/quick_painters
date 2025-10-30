import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <header className="navigation-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src="/assets/logo.png" alt="Quick Painters Logo" />
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            Portfolio
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            Services
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;

