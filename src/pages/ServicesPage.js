import React from 'react';
import './ServicesPage.css';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/Contact';

const ServicesPage = () => {
  const services = [
    {
      title: 'Internal Painting',
      price: 'Starting from ₹7 per sft',
      image: '/assets/service-internal-painting.png'
    },
    {
      title: 'External Painting',
      price: 'Starting from ₹12 per sft',
      image: '/assets/service-external-painting.png'
    },
    {
      title: 'Scratch Texture',
      price: 'Starting from ₹22 per sft',
      image: '/assets/service-scratch-texture.png'
    },
    {
      title: 'Concrete texture',
      price: 'Starting from ₹110 per sft',
      image: '/assets/service-concrete-texture.png'
    },
    {
      title: 'Texture and Designs',
      price: 'Starting from ₹60 per sft',
      image: '/assets/service-textures-designs.png'
    },
    {
      title: 'Stucco Marbel',
      price: 'Starting from ₹60 per sft',
      image: '/assets/service-stucco-marbel.png'
    },
    {
      title: 'Wall Paper',
      price: 'Starting from ₹60 per sft',
      image: '/assets/service-wall-paper.png'
    },
    {
      title: 'Wall Punning',
      price: 'Starting from ₹40 per sft',
      image: '/assets/service-wall-punning.png'
    },
    {
      title: 'Artist Work',
      price: 'Starting from ₹40 per sft',
      image: '/assets/service-artist-work.png'
    },
    {
      title: 'Wood Finishes',
      price: 'Starting from ₹40 per sft',
      image: '/assets/service-wood-finishes.png'
    }
  ];


  return (
    <div className="services-page">
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="services-hero">
        {/* Left Content */}
        <div className="services-left-content">
          <h2>Services at your doorstep</h2>
          <p>
            Each stroke tells a story of dedication and precision. From vibrant interiors to flawless exteriors, our work reflects the artistry and expertise we bring to every project. Discover the beauty of transformation through our gallery
          </p>
          <button className="book-visit-btn">Book Home Visit</button>
        </div>

        {/* Right Video */}
        <div className="services-right-video">
          <video autoPlay loop muted playsInline>
            <source src="/assets/nice-handmade-brush-with-colors-rainbow.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="frame-1339736">
          <div className="frame-1339734">
            <div className="group-3578">
              <div className="frame-1339701" style={{backgroundImage: `url(${services[0].image})`}}>
                <div className="service-title">{services[0].title}</div>
                <div className="service-price">{services[0].price}</div>
              </div>
            </div>
            <div className="group-3580">
              <div className="frame-1339702" style={{backgroundImage: `url(${services[1].image})`}}>
                <div className="service-title">{services[1].title}</div>
                <div className="service-price">{services[1].price}</div>
              </div>
            </div>
          </div>
          
          <div className="frame-1339735">
            <div className="group-3578">
              <div className="frame-1339703" style={{backgroundImage: `url(${services[2].image})`}}>
                <div className="service-title">{services[2].title}</div>
                <div className="service-price">{services[2].price}</div>
              </div>
            </div>
            <div className="group-3580">
              <div className="frame-1339704" style={{backgroundImage: `url(${services[3].image})`}}>
                <div className="service-title">{services[3].title}</div>
                <div className="service-price">{services[3].price}</div>
              </div>
            </div>
          </div>
          
          <div className="frame-13397362">
            <div className="group-3578">
              <div className="frame-1339705" style={{backgroundImage: `url(${services[4].image})`}}>
                <div className="service-title">{services[4].title}</div>
                <div className="service-price">{services[4].price}</div>
              </div>
            </div>
            <div className="group-3580">
              <div className="frame-1339696" style={{backgroundImage: `url(${services[5].image})`}}>
                <div className="service-title">{services[5].title}</div>
                <div className="service-price">{services[5].price}</div>
              </div>
            </div>
          </div>
          
          <div className="frame-1339737">
            <div className="group-3578">
              <div className="frame-1339697" style={{backgroundImage: `url(${services[6].image})`}}>
                <div className="service-title">{services[6].title}</div>
                <div className="service-price">{services[6].price}</div>
              </div>
            </div>
            <div className="group-3580">
              <div className="frame-1339698" style={{backgroundImage: `url(${services[7].image})`}}>
                <div className="service-title">{services[7].title}</div>
                <div className="service-price">{services[7].price}</div>
              </div>
            </div>
          </div>
          
          <div className="frame-1339738">
            <div className="group-3578">
              <div className="frame-1339699" style={{backgroundImage: `url(${services[8].image})`}}>
                <div className="service-title">{services[8].title}</div>
                <div className="service-price">{services[8].price}</div>
              </div>
            </div>
            <div className="group-3580">
              <div className="frame-1339700" style={{backgroundImage: `url(${services[9].image})`}}>
                <div className="service-title">{services[9].title}</div>
                <div className="service-price">{services[9].price}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default ServicesPage;