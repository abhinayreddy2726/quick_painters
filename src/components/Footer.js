import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="footer" id="footer">
      <p className="footer-watermark">QUICKPAINTERS</p>
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-description">Thank you for visiting our website! We appreciate your interest in our company and hope that you found everything you were looking for. If have any questions or feedback, please do not hesitate to contact us.</p>
          <div className="footer-newsletter">
            <h3>Get latest updates from QUICK PAINTERS</h3>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links-nav">
            <div className="footer-links-column">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-subscribe-wrapper">
        <div className="footer-subscribe">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src="/assets/CaretRight.svg" alt="" className="footer-arrow-icon" />
          <span className="footer-subscribe-btn" onClick={handleSubscribe}>Subscribe</span>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" aria-label="Instagram">
          <img src="/assets/instagram.svg" alt="Instagram" />
        </a>
        <a href="#" aria-label="YouTube">
          <img src="/assets/youtube.svg" alt="YouTube" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 Quick Painters</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

