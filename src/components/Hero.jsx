import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenQuoteModal }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column Content */}
          <div>
            <div className="hero-pill">
              <span className="pulse-dot"></span>
              <span>Sales • Supplies • Repair • Service</span>
            </div>

            <h1 className="hero-title">
              Your Trusted Partner for Printing Solutions
            </h1>

            <p className="hero-description">
              Sales, cartridge refilling, repair, and servicing for photocopiers, printers, and toner cartridges—all in one place. Located at central Daryaganj, Delhi.
            </p>

            <div className="hero-cta-group">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="btn-primary-lg"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenQuoteModal('General Inquiry')}
                className="btn-secondary-lg"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>chat</span>
                <span>Get Instant Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn-secondary-lg"
                style={{ padding: '0.85rem 1.15rem' }}
                title="Call Daryaganj Desk"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                <span>Call Desk</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>verified</span>
                <span>100% Quality Checked</span>
              </div>
              <div className="hero-badge-item">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>precision_manufacturing</span>
                <span>Precision Toner Fill</span>
              </div>
              <div className="hero-badge-item">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>near_me</span>
                <span>Daryaganj Ansari Rd</span>
              </div>
              <div className="hero-badge-item">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>bolt</span>
                <span>Same-Day Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Equipment Showcase */}
          <div className="hero-media-wrapper">
            <div className="hero-card">
              <img
                src="/images/copier_hero.jpg"
                alt="Modern commercial multi-function photocopier printer"
                className="hero-img"
              />

              {/* Floating Top Inset Badge */}
              <div className="hero-floating-top">
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-primary-fixed)' }}>
                  inventory_2
                </span>
                <span>Commercial Photocopiers</span>
              </div>

              {/* Floating Bottom Inset Card */}
              <div className="hero-floating-bottom">
                <div className="floating-tech-title">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>build_circle</span>
                  <span>Expert Technician Support</span>
                </div>
                <p className="floating-tech-desc">
                  Certified maintenance & quick turnaround diagnosis in Central Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
