import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './pages/Landing_page';
import DoctorsPage from './pages/DoctorsPage';
import ServicesPage from './pages/ServicesPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;