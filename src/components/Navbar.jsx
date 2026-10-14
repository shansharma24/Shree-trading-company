import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'catalog', 'calculator', 'services', 'about', 'why-us', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand identity */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="brand-link">
          <div className="brand-icon-box">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>print</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Shree Trading Co.</span>
            <span className="brand-sub">Daryaganj Commercial Equipment</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#catalog"
                onClick={(e) => handleNavClick(e, 'catalog')}
                className={`nav-link ${activeSection === 'catalog' ? 'active' : ''}`}
              >
                Catalog
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                onClick={(e) => handleNavClick(e, 'calculator')}
                className={`nav-link ${activeSection === 'calculator' ? 'active' : ''}`}
              >
                Cost Estimator
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, 'why-us')}
                className={`nav-link ${activeSection === 'why-us' ? 'active' : ''}`}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Trailing Quick Actions */}
        <div className="nav-actions">
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-phone-header">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
            <span>HQ Desk</span>
          </a>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('General Inquiry')}
            className="btn-quote-header"
          >
            <span>Request Quote</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href="#catalog"
            onClick={(e) => handleNavClick(e, 'catalog')}
            className="mobile-nav-link"
          >
            <span>Hardware Catalog</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="mobile-nav-link"
          >
            <span>Repair & Refill Services</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>
          <a
            href="#calculator"
            onClick={(e) => handleNavClick(e, 'calculator')}
            className="mobile-nav-link"
          >
            <span>Cost & Refill Estimator</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="mobile-nav-link"
          >
            <span>About Daryaganj Workshop</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>
          <a
            href="#why-us"
            onClick={(e) => handleNavClick(e, 'why-us')}
            className="mobile-nav-link"
          >
            <span>Why Choose Us</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mobile-nav-link"
          >
            <span>Contact & Store Location</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-phone-header"
              style={{ justifyContent: 'center', width: '100%', padding: '0.75rem' }}
            >
              <span className="material-symbols-outlined">call</span>
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal('General Inquiry');
              }}
              className="btn-quote-header"
              style={{ justifyContent: 'center', width: '100%', padding: '0.75rem' }}
            >
              <span>Request Instant Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
