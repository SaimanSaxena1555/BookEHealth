import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardNav from "./assets/react comp/CardNav";
import logo from "./assets/BOOKeHealth logo.png";


function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Home",
      bgColor: "#1fa67a",
      textColor: "#ffffff",
      links: [
        { 
          label: "Home", 
          ariaLabel: "Go to Home page",
          onClick: () => navigate('/')
        }
      ]
    },
    {
      label: "Doctors",
      bgColor: "#2ab58e",
      textColor: "#ffffff",
      links: [
        { 
          label: "Browse Doctors", 
          ariaLabel: "Browse all doctors",
          onClick: () => navigate('/doctors')
        }
      ]
    },
    {
      label: "Appointments",
      bgColor: "#35c4a1",
      textColor: "#ffffff",
      links: [
        { 
          label: "Book Appointment", 
          ariaLabel: "Book a new appointment",
          onClick: () => navigate('/book-appointment')
        }
      ]
    },
    {
      label: "Services",
      bgColor: "#40d3b5",
      textColor: "#ffffff",
      links: [
        { 
          label: "All Services", 
          ariaLabel: "View all services",
          onClick: () => navigate('/services')
        }
      ]
    },
    {
      label: "Contact",
      bgColor: "#4be2c8",
      textColor: "#ffffff",
      links: [
        { 
          label: "Contact Us", 
          ariaLabel: "Contact our team",
          onClick: () => navigate('/contact')
        }
      ]
    }
  ];

  const handleCardClick = (itemLabel) => {
    setActiveItem(itemLabel);
    
    const routeMap = {
      'Home': '/',
      'Doctors': '/doctors',
      'Appointments': '/book-appointment',
      'Services': '/services',
      'Contact': '/contact'
    };
    
    if (routeMap[itemLabel]) {
      navigate(routeMap[itemLabel]);
    }
  };

  const handleLinkClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <header className="bookehealth-header">
      <CardNav
        logo={logo}
        logoAlt="BOOKeHealth Logo - Your trusted healthcare partner"
        items={navItems}
        className="bookehealth-card-nav"
        ease="power3.out"
        baseColor="#ffffff"
        menuColor="#1fa67a"
        buttonBgColor="#1fa67a"
        buttonTextColor="#ffffff"
        onCardClick={handleCardClick}
        onLinkClick={handleLinkClick}
        activeCard={activeItem}
        ctaText="Book Now"
        onCtaClick={() => navigate('/book-appointment')}
      />
      <div className="header-divider" />
    </header>
  );
}

export default Header;
