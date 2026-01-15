import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bookehealth-footer">
      <div className="footer-container">
        <section className="footer-brand">
          <h3>BookEHealth</h3>
          <p>
            A simple platform to book and manage doctor appointments efficiently.
            Your health, our priority.
          </p>
        </section>

        <section className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/doctors" className="footer-link">
                Doctor Consultation
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" className="footer-link">
                Online Appointment
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Medical Services
              </Link>
            </li>
          </ul>
        </section>

        <section className="footer-company">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </section>

        <section className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>📍 123 Health Street, Medical City</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ support@bookehealth.com</li>
            <li>🕒 24/7 Emergency Support</li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <div className="footer-legal">
          <p>
            © 2025 BookEHealth (Logische Innovative Pvt. Ltd). All rights reserved.
          </p>
          <div className="footer-links">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
            <Link to="/cookies" className="footer-legal-link">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;