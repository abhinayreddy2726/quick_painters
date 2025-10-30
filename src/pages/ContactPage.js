import React from 'react';
import './ContactPage.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div className="contact-page">
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;