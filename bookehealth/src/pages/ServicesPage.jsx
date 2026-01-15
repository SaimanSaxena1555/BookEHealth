import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ServicesPage = () => {
  const services = [
    { id: 1, title: "General Consultation", description: "Basic health check-ups and medical advice", icon: "🩺" },
    { id: 2, title: "Specialist Consultation", description: "Consult with specialized doctors for specific conditions", icon: "👨‍⚕️" },
    { id: 3, title: "Online Prescription", description: "Get digital prescriptions delivered to your phone", icon: "📱" },
    { id: 4, title: "Lab Test Booking", description: "Schedule and book diagnostic tests", icon: "🧪" },
    { id: 5, title: "Health Records", description: "Digital storage of your medical history", icon: "📋" },
    { id: 6, title: "Emergency Consultation", description: "24/7 urgent care with doctors", icon: "🚑" },
  ];

  return (
    <div className="page">
      <main className="page-content">
        <div className="page-header">
          <h1>Our Services</h1>
          <p>Comprehensive healthcare solutions for all your needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;