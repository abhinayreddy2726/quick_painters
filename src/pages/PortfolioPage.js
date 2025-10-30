import React, { useState } from 'react';
import './PortfolioPage.css';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import NavigationBar from '../components/NavigationBar';

function PortfolioPage() {
  const carouselImages = [
    '/assets/service-internal-painting.png',
    '/assets/service-external-painting.png',
    '/assets/service-textures-designs.png',
    '/assets/service-artist-work.png',
    '/assets/service-stucco-marbel.png',
    '/assets/service-wall-paper.png',
    '/assets/service-wall-punning.png',
    '/assets/service-wood-finishes.png',
    '/assets/service-concrete-texture.png',
    '/assets/service-scratch-texture.png',
    '/assets/internal-painting.png',
    '/assets/external-painting.png'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="portfolio-page">
      {/* Common Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Column - Text Content */}
          <div className="hero-content">
            <div className="hero-text-wrapper">
              <div className="hero-title-wrapper">
                <h1 className="hero-title">
                  <span className="highlight-green">Craftsmanship</span>
                  <span> in color</span>
                </h1>
              </div>
              <p className="hero-description">
                Each stroke tells a story of dedication and precision. From vibrant
                interiors to flawless exteriors, our work reflects the artistry and
                expertise we bring to every project. Discover the beauty of transformation
                through our gallery
              </p>
              <button className="book-home-visit-btn">Book Home Visit</button>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="hero-gallery">
            <div className="gallery-container">
              <div className="gallery-grid">
                {/* Top Left - Large */}
                <div className="gallery-item gallery-item-1">
                  <img src="/assets/service-artist-work.png" alt="Artist work" />
                </div>
                {/* Top Right - Large with shadow */}
                <div className="gallery-item gallery-item-2">
                  <video autoPlay loop muted playsInline>
                    <source src="/assets/4776828_Couple_Paint_3840x2160.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Bottom Left - Medium */}
                <div className="gallery-item gallery-item-3">
                  <video autoPlay loop muted playsInline>
                    <source src="/assets/5290351_Painting_Woman_3840x2160.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Bottom Right - Medium */}
                <div className="gallery-item gallery-item-4">
                  <video autoPlay loop muted playsInline>
                    <source src="/assets/1859107_Wall_Painter_3840x2160.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div 
          className="carousel-container"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60.694%, rgba(0, 0, 0, 0.5) 68.338%), url(${carouselImages[currentSlide]})`
          }}
        >
          {/* Page Counter */}
          <div className="carousel-counter">
            {currentSlide + 1}/{carouselImages.length}
          </div>

          {/* Navigation Buttons */}
          <button className="carousel-nav carousel-nav-prev" onClick={previousSlide}>
            <img src="/assets/caret-right.svg" alt="Previous" className="caret-icon" />
          </button>
          <button className="carousel-nav carousel-nav-next" onClick={nextSlide}>
            <img src="/assets/caret-right.svg" alt="Next" className="caret-icon" />
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PortfolioPage;