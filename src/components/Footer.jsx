import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenQuoteModal }) {
  const scrollTo = (e, id) => {
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
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          {/* Identity & Address */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-fixed)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>print</span>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Shree Trading Company
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-surface-container-high)', maxWidth: '380px', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Commercial office equipment, precision cartridge refilling, and authorized diagnostic repairs. Serving corporate offices, legal chambers, schools, and print centers across Delhi NCR.
            </p>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-primary-fixed-dim)', lineHeight: '1.6' }}>
              <p><strong>Address:</strong> 4658/21, Ansari Road, Daryaganj, near Fire Station, Delhi - 110002</p>
              <p><strong>Hours:</strong> Mon - Sat: 10:00 AM - 7:30 PM (Sunday Closed)</p>
              <p><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => scrollTo(e, 'home')} className="footer-link">Home Overview</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Equipment Catalog</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Technical Services</a></li>
              <li><a href="#calculator" onClick={(e) => scrollTo(e, 'calculator')} className="footer-link">Cost Estimator</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="footer-link">About Workshop</a></li>
              <li><a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="footer-link">Why Choose Us</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="footer-link">Contact &amp; Map</a></li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="footer-col-title">Equipment &amp; Supplies</h4>
            <ul className="footer-links-list">
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Heavy Photocopiers</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Commercial Laser Printers</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Toner Cartridges</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Photocopier Bottles</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">OPC Drums &amp; Blades</a></li>
              <li><a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')} className="footer-link">Pickup Rollers &amp; Spares</a></li>
            </ul>
          </div>

          {/* Services & Support */}
          <div>
            <h4 className="footer-col-title">Services &amp; Refill</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Laser Toner Refilling</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Printer Repair</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Photocopier AMC Servicing</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="footer-link">Daryaganj Drop-Offs</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Footer Request Quote')}
                  style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
                  className="footer-link"
                >
                  Request Official Quote &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Shree Trading Company. Daryaganj, Delhi. All Rights Reserved. Commercial Office Equipment &amp; Refilling Solutions.
          </div>
          <div className="footer-bottom-links">
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Privacy Policy</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Terms of Service</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Support Desk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
