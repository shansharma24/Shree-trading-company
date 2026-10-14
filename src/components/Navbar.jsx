import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const NAV_ITEMS = [
    { id: 'catalog', label: 'Commercial Catalog', desc: 'Copiers, printers & toners', icon: 'inventory_2' },
    { id: 'services', label: 'Maintenance & Support', desc: 'Precision toner & diagnostics', icon: 'settings' },
    { id: 'about', label: 'About Workshop', desc: 'Central Daryaganj hub', icon: 'storefront' },
    { id: 'why-us', label: 'Why Choose Us', desc: 'Direct pricing & genuine spares', icon: 'verified_user' },
    { id: 'faq', label: 'Frequently Asked Questions', desc: 'Warranty, repairs & pricing', icon: 'help' },
    { id: 'contact', label: 'Contact & Store Location', desc: 'Ansari Road near Fire Station', icon: 'contact_support' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'catalog', 'services', 'about', 'why-us', 'faq', 'contact'];
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    onOpenQuoteModal('General Inquiry');
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Brand identity */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="brand-link">
            <div className="brand-icon-box">
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>print</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">Shree Trading Co.</span>
              <span className="brand-sub">Daryaganj Commercial Equipment</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
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
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-phone-header desktop-only">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
              <span>HQ Desk</span>
            </a>

            <button
              type="button"
              onClick={handleQuoteClick}
              className="btn-quote-header"
            >
              <span>Request Quote</span>
            </button>

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Mobile Drawer & Backdrop Portal */}
      {mobileMenuOpen && (
        <div className="mobile-nav-portal">
          {/* Backdrop Blur Overlay */}
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Down Navigation Card Drawer */}
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
            {/* Top Store Status Bar */}
            <div className="mobile-drawer-status">
              <span className="status-dot"></span>
              <span>Mon - Sat: 10:00 AM – 7:30 PM • Daryaganj</span>
            </div>

            {/* Navigation Cards List */}
            <nav className="mobile-drawer-links">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`mobile-drawer-link-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="drawer-link-icon-box">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
                    </div>
                    <div className="drawer-link-content">
                      <span className="drawer-link-title">{item.label}</span>
                      <span className="drawer-link-sub">{item.desc}</span>
                    </div>
                    <span className="material-symbols-outlined drawer-link-arrow">chevron_right</span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Action Contacts inside Drawer */}
            <div className="mobile-drawer-actions">
              <div className="drawer-hotline-grid">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="drawer-hotline-btn call">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                  <div>
                    <div className="hotline-btn-sub">HQ Phone Desk</div>
                    <div className="hotline-btn-val">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Shree Trading Company, I would like to inquire about printing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-hotline-btn whatsapp"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                  <div>
                    <div className="hotline-btn-sub">Fast Response</div>
                    <div className="hotline-btn-val">WhatsApp</div>
                  </div>
                </a>
              </div>

              <button
                type="button"
                onClick={handleQuoteClick}
                className="drawer-btn-quote"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>request_quote</span>
                <span>Get Instant Quotation</span>
              </button>

              <div className="mobile-drawer-footer">
                <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'var(--color-amber)' }}>location_on</span>
                <span>4658/21 Ansari Road, Daryaganj, near Fire Station, Delhi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
