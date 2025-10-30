import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', email: '' });
      setErrors({});
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-component">
      <section className="booking-section">
        <div className="booking-left">
          <h2 className="booking-title">
            "Bringing Colors to Life with <span className="highlight">Quick Painter"</span>
          </h2>
          <div className="booking-image-container">
            <img src="/assets/painter-hero.png" className="booking-image" alt="Painter" />
          </div>
        </div>
        
        <div className="booking-form-container">
          <img src="/assets/vector-decoration.svg" alt="Decorative" className="decorative-vector" />
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Book Home Inspection</h3>
            <p className="form-subtitle">Get a thorough home inspection from our experts</p>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Name" 
              required 
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="Phone Number" 
              required 
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
            <input 
              type="text" 
              className="form-input"
              value="Hyderabad"
              readOnly
            />
            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Home Inspection'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
