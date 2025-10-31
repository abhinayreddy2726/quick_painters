import React, { useState } from 'react';
import './HomePage.css';
import Footer from '../components/Footer';

function HomePage() {
  // BookingForm component
  const BookingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      location: 'Hyderabad'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your interest! We will contact you shortly.');
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="inspection-form">
        <h3 className="form-title">Book Home Inspection</h3>
        <p className="form-subtitle">Get a through home inspection from our experts</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            className="form-input"
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone"
            className="form-input"
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="location"
            className="form-input"
            value={formData.location}
            onChange={handleChange}
            readOnly
          />
          <button type="submit" className="form-button">Book Home Inspection</button>
        </form>
      </div>
    );
  };

  // Banner component
  const Banner = () => {
    return (
        <div className="banner-section">
          <video
            className="banner-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/4776828_Couple_Paint_3840x2160.mp4" type="video/mp4" />
          </video>
          <div className="banner-content">
            <h2>Color Your World</h2>
            <p>Our skilled professionals are committed to delivering exceptional painting services that exceed your expectations.</p>
          </div>
          <div className="explore-now">
            <span>Explore Now</span>
            <img src="/assets/arrow-right.svg" alt="Arrow Right" />
          </div>
          <div className="banner-pagination">
            <div className="pagination-dot active"></div>
            <div className="pagination-dot"></div>
            <div className="pagination-dot"></div>
          </div>
      </div>
    );
  };

  // Features component
  const Features = () => {
    const features = [
      {
        icon: '/assets/smiley-icon-2.svg',
        iconBg: 'solid',
        title: 'Quality Service',
        description: 'Our team of professional painters delivers top-notch residential and commercial painting services.'
      },
      {
        icon: '/assets/sparkle-icon-2.svg',
        iconBg: '/assets/ellipse.svg',
        title: 'Quality Service',
        description: 'Our team of professional painters delivers top-notch residential and commercial painting services.'
      },
      {
        icon: '/assets/brain-icon-2.svg',
        iconBg: '/assets/ellipse.svg',
        title: 'Quality Service',
        description: 'Our team of professional painters delivers top-notch residential and commercial painting services.'
      },
      {
        icon: '/assets/lightning-icon-2.svg',
        iconBg: '/assets/ellipse.svg',
        title: 'Quality Service',
        description: 'Our team of professional painters delivers top-notch residential and commercial painting services.'
      }
    ];

    return (
      <section className="features-section" id="features">
        <h2>Our <span className="highlight">Features</span></h2>
        <div className="features-grid">
          <div className="feature-row">
            <div className="feature-pair">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className={`feature-icon ${feature.iconBg === 'solid' ? 'feature-icon-solid' : ''}`}>
                    {feature.iconBg !== 'solid' && (
                      <img src={feature.iconBg} alt="" className="feature-icon-bg" />
                    )}
                    <img src={feature.icon} alt={`${feature.title} Icon`} className="feature-icon-img" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-row">
            <div className="feature-pair">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className={`feature-icon ${feature.iconBg === 'solid' ? 'feature-icon-solid' : ''}`}>
                    {feature.iconBg !== 'solid' && (
                      <img src={feature.iconBg} alt="" className="feature-icon-bg" />
                    )}
                    <img src={feature.icon} alt={`${feature.title} Icon`} className="feature-icon-img" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // About component
  const About = () => {
    return (
      <section className="about-section" id="about">
        <div className="vector-decoration-2">
          <img src="/assets/vector-decoration-2.svg" alt="" />
        </div>
        <h2>About <span className="highlight">Quick Painters</span></h2>
        <p>Quick Painters, a reputable painting service provider in Hyderabad, India, brings your vision to life with expert interior and exterior painting solutions. Since 2020, we have been delivering top-notch services, specializing in lime textures, wallpapers, royal play, wood polish and artist works. Our dedicated team caters to both residential and commercial projects, ensuring impeccable results that exceed expectations.</p>
        <div className="about-images">
          <div className="about-image">
            <video 
              className="about-video" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/assets/2195016_Painting_Scaffolding_3840x2160.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="about-image">
            <video 
              className="about-video" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/assets/1859107_Wall_Painter_3840x2160.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    );
  };

  // Services component - 4-column grid for HomePage
  const Services = () => {
    const services = [
      {
        title: 'Internal Painting',
        price: '₹7 per sft',
        image: '/assets/service-internal-painting.png'
      },
      {
        title: 'External Painting',
        price: '₹7 per sft',
        image: '/assets/service-external-painting.png'
      },
      {
        title: 'Scratch Texture',
        price: '₹7 per sft',
        image: '/assets/service-scratch-texture.png'
      },
      {
        title: 'Concrete Texture',
        price: '₹7 per sft',
        image: '/assets/service-concrete-texture.png'
      },
      {
        title: 'Textures & Designs',
        price: '₹7 per sft',
        image: '/assets/service-textures-designs.png'
      },
      {
        title: 'Stucco Marbel',
        price: '₹7 per sft',
        image: '/assets/service-stucco-marbel.png'
      },
      {
        title: 'Wall Paper',
        price: '₹7 per sft',
        image: '/assets/service-wall-paper.png'
      },
      {
        title: 'Wall Punning',
        price: '₹7 per sft',
        image: '/assets/service-wall-punning.png'
      },
      {
        title: 'Artist Work',
        price: '₹7 per sft',
        image: '/assets/service-artist-work.png'
      },
      {
        title: 'Wood Finishes',
        price: '₹7 per sft',
        image: '/assets/service-wood-finishes.png'
      }
    ];

    return (
      <section className="services-section" id="services">
        <h2 className="section-title">Book Your <span className="highlight">Service</span></h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={`service-${index}`} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-price-badge">{service.price}</div>
              <p className="service-name">{service.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Testimonials component
  const Testimonials = () => {
    return (
      <section className="testimonials-section" id="testimonials">
        <h2><span className="highlight">Happy</span> Customers</h2>
        <div className="testimonial-container">
          <button className="nav-button left">
            <img src="/assets/caret-right.svg" alt="Previous" />
          </button>
          <div className="testimonial-content">
            <p className="testimonial-quote">"My journey in recruitment has been an incredibly fulfilling one, shaped by dedication, expertise, and an unwavering commitment to excellence. I began my career as a recruiter and have had the privilege of leading recruitment teams at large, renowned companies across diverse industries, including airlines, healthcare</p>
            <div className="testimonial-image">
              <video 
                className="testimonial-video" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/assets/5290351_Painting_Woman_3840x2160.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <button className="nav-button right">
            <img src="/assets/caret-right.svg" alt="Next" />
          </button>
        </div>
      </section>
    );
  };

  // Achievement component
  const Achievement = () => {
    return (
      <section className="achievement-section" id="achievement">
        {/* Video placeholder - add achievement.mp4 to /public/assets/videos/ */}
        <div className="achievement-content">
          <h3>OUR ACHIEVEMENT</h3>
          <div className="achievement-stats">
            <div className="achievement-stat">
              <h2>2000 +</h2>
              <p>Satisfied Customers</p>
            </div>
            <div className="achievement-stat">
              <h2>110 +</h2>
              <p>Locations Covered</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="homepage">
      <section className="hero-section" id="home">
        <div className="hero-content-wrapper">
          <div className="hero-left-content">
            <h1 className="hero-title">"Bringing Colors to Life with <span className="highlight">Quick Painter"</span></h1>
            <div className="hero-image">
              <img src="/assets/african-american-painter-man-isolated-blue-background-extending-hands-side-inviting-come-copy-10.png" alt="Professional Painter" />
            </div>
          </div>
          <div className="hero-right-content">
            <div className="vector-background">
              <img src="/assets/vector-decoration.svg" alt="Vector Background" />
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
      <Banner />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Achievement />
      <Footer />
    </div>
  );
}

export default HomePage;