import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const DoctorsPage = () => {
  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", experience: "12 years" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Neurologist", experience: "8 years" },
    { id: 3, name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: "10 years" },
    { id: 4, name: "Dr. Robert Brown", specialty: "Orthopedic", experience: "15 years" },
    { id: 5, name: "Dr. Lisa Wang", specialty: "Dermatologist", experience: "7 years" },
    { id: 6, name: "Dr. David Miller", specialty: "General Physician", experience: "20 years" },
  ];

  return (
    <div className="page">
      <main className="page-content">
        <div className="page-header">
          <h1>Our Verified Doctors</h1>
          <p>Browse through our team of certified medical professionals</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-avatar">👨‍⚕️</div>
              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-experience">Experience: {doctor.experience}</p>
              <button className="book-btn">View Profile</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorsPage;