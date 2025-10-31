import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navigation-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <img src="/assets/logo.png" alt="Quick Painters Logo" />
          </Link>
        </div>

        <button
          className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default NavigationBar;

