import { useState } from 'react';
import Footer from '../Footer';

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Failed to book appointment');
        return;
      }

      alert('✅ Appointment booked successfully');

      setFormData({
        name: '',
        email: '',
        doctor: '',
        date: '',
        time: '',
        reason: ''
      });
    } catch (err) {
      alert('❌ Server error. Try again later.');
    }
  };

  return (
    <div className="page">
      <main className="page-content">
        <div className="page-header">
          <h1>Book an Appointment</h1>
          <p>Fill in your details to schedule a consultation</p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Sarah Johnson">Dr. Sarah Johnson – Cardiologist</option>
            <option value="Dr. Michael Chen">Dr. Michael Chen – Neurologist</option>
            <option value="Dr. Priya Sharma">Dr. Priya Sharma – Pediatrician</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Time</option>
            <option value="09:00 - 11:00">09:00 AM - 11:00 AM</option>
            <option value="11:00 - 13:00">11:00 AM - 01:00 PM</option>
            <option value="14:00 - 16:00">02:00 AM - 04:00 PM</option>
          </select>

          <textarea
            name="reason"
            placeholder="Reason for visit"
            value={formData.reason}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>
      </main>
    </div>
  );
};

export default BookAppointmentPage;
