import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Book Doctor Appointments Easily</h1>
            <p className="hero-subtitle">Get instant access to verified doctors and schedule appointments in minutes</p>
            <button className="cta-button">
              Book Appointment
            </button>
          </div>  
          <div className="hero-image">
            <div className="placeholder-image">
              🏥
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose BookEHealth</h2>
          <p className="section-subtitle">Simple, fast, and reliable healthcare booking</p>
          
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3 className="feature-title">Easy Booking</h3>
              <p className="feature-description">
                Book appointments with just a few clicks. No more waiting on hold or complicated forms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3 className="feature-title">Verified Doctors</h3>
              <p className="feature-description">
                All our doctors are thoroughly verified and certified. Your health is in safe hands.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-title">Flexible Time Slots</h3>
              <p className="feature-description">
                Choose from morning, afternoon, or evening slots that fit your schedule perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Verified Doctors</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10,000+</h3>
            <p className="stat-label">Appointments Booked</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">24/7</h3>
            <p className="stat-label">Support Available</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">Patient Satisfaction</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">Ready to Book Your Appointment?</h2>
          <p className="cta-subtitle">Join thousands of satisfied patients who trust BookEHealth</p>
            <button className="cta-button secondary">
            Get Started Today
          </button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;