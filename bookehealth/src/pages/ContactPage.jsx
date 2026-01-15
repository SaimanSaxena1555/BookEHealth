import { useState } from 'react';
import Footer from '../Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Failed to send message');
        return;
      }

      alert('✅ Message sent successfully');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      alert('❌ Server error. Try again later.');
    }
  };

  return (
    <div className="page">
      <main className="page-content">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our support team</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
