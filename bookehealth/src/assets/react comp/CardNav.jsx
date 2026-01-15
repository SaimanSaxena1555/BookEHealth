import { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import "../react comp/CardNav.css"; 

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor,
  ctaText = 'Get Started',
  onCtaClick,
  onCardClick,
  onLinkClick,
  activeCard,
  maxCards = 5
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 70;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;
        
        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        
        contentEl.offsetHeight;
        
        const topBar = 70;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;
        
        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;
        
        return topBar + contentHeight + padding;
      }
      return 70;
    }
    
    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 70, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 30, opacity: 0, scale: 0.95 });

    const tl = gsap.timeline({ 
      paused: true,
      onStart: () => {
        if (navEl) {
          navEl.style.overflow = 'visible';
          navEl.style.zIndex = '1000';
        }
      },
      onReverseComplete: () => {
        if (navEl) {
          navEl.style.overflow = 'hidden';
          navEl.style.zIndex = 'auto';
        }
      }
    });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease: ease
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      duration: 0.4, 
      ease: "back.out(1.2)",
      stagger: 0.05 
    }, '-=0.2');

    return tl;
  }, [ease, calculateHeight]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, createTimeline, calculateHeight]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
      document.body.style.overflow = 'hidden';
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => {
        setIsExpanded(false);
        document.body.style.overflow = '';
      });
      tl.reverse();
    }
  };

  const handleCardClick = (item, index) => {
    if (onCardClick) {
      onCardClick(item.label);
    }
    
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        toggleMenu();
      }, 300);
    }
  };

  const handleLinkClick = (lnk, e) => {
    e.stopPropagation();
    
    // If link has onClick handler, use it
    if (lnk.onClick) {
      lnk.onClick();
    }
    // Otherwise, use the global onLinkClick
    else if (onLinkClick && lnk.href) {
      onLinkClick(lnk.href);
    }
    
    // Close menu on mobile after click
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        toggleMenu();
      }, 300);
    }
  };

  const setCardRef = (index) => (el) => {
    if (el) cardsRef.current[index] = el;
  };

  const handleCtaClick = (e) => {
    e.stopPropagation();
    if (onCtaClick) {
      onCtaClick();
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Use onClick or navigate to home
    window.location.href = '/';
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav 
        ref={navRef} 
        className={`card-nav ${isExpanded ? 'open' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`} 
        style={{ backgroundColor: baseColor }}
        aria-label="Main navigation"
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close navigation menu' : 'Open navigation menu'}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            style={{ color: menuColor || '#1fa67a' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <a 
              href="/" 
              onClick={handleLogoClick}
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <img 
                src={logo} 
                alt={logoAlt} 
                className="logo" 
              />
            </a>
          </div>

          <button
            type="button"
            className="card-nav-cta-button"
            onClick={handleCtaClick}
            style={{ 
              backgroundColor: buttonBgColor, 
              color: buttonTextColor 
            }}
            aria-label={ctaText}
          >
            {ctaText}
            <span className="cta-arrow">→</span>
          </button>
        </div>

        <div 
          className="card-nav-content" 
          aria-hidden={!isExpanded}
          role="region"
          aria-label="Navigation cards"
        >
          {items.slice(0, maxCards).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`nav-card ${activeCard === item.label ? 'active' : ''}`}
              ref={setCardRef(idx)}
              style={{ 
                backgroundColor: item.bgColor, 
                color: item.textColor,
                border: activeCard === item.label ? '2px solid rgba(255, 255, 255, 0.5)' : 'none'
              }}
              onClick={() => handleCardClick(item, idx)}
              role="button"
              tabIndex={isExpanded ? 0 : -1}
              aria-label={`Open ${item.label} menu`}
              onKeyDown={(e) => {
                if (isExpanded && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleCardClick(item, idx);
                }
              }}
            >
              <div className="nav-card-label">
                <span className="nav-card-icon">{item.icon}</span>
                {item.label}
              </div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <div
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    onClick={(e) => handleLinkClick(lnk, e)}
                    role={lnk.onClick ? "button" : "link"}
                    tabIndex={isExpanded ? 0 : -1}
                    aria-label={lnk.ariaLabel || lnk.label}
                    onKeyDown={(e) => {
                      if (isExpanded && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        handleLinkClick(lnk, e);
                      }
                    }}
                    style={{ 
                      color: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {lnk.icon && <span className="link-icon">{lnk.icon}</span>}
                      <span className="link-text">{lnk.label}</span>
                    </div>
                    <span className="link-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
      
      {isExpanded && (
        <div 
          className="nav-overlay" 
          onClick={toggleMenu}
          role="button"
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}
    </div>
  );
};

export default CardNav;