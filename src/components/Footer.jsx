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

  const mapEmbedUrl = "https://maps.google.com/maps?q=4658%2F21+Ansari+Road+Daryaganj+near+fire+station+Delhi+110002&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const mapDirectionsUrl = "https://maps.google.com/?q=4658%2F21+Ansari+Road+Daryaganj+near+fire+station+Delhi+110002";

  return (
    <footer className="site-footer site-footer-minimal">
      <div className="section-container">
        <div className="footer-minimal-grid">
          {/* Company Brief & Address */}
          <div className="footer-info-col">
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>print</span>
              </div>
              <div>
                <h3 className="footer-brand-title">Shree Trading Company</h3>
                <p className="footer-brand-sub">Commercial Copiers, Printers &amp; Refilling Hub</p>
              </div>
            </div>

            {/* Exact Location Card */}
            <div className="footer-address-box">
              <span className="material-symbols-outlined footer-address-icon">location_on</span>
              <div>
                <p className="footer-address-text">
                  <strong>4658/21, Ansari Road, Daryaganj</strong><br />
                  Near Fire Station, Delhi - 110002
                </p>
                <div className="footer-meta-pills">
                  <span className="footer-meta-pill">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                    <span>Mon - Sat: 10:00 AM – 7:30 PM</span>
                  </span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="footer-meta-pill footer-meta-link">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>call</span>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Minimal Essential Navigation Links */}
            <nav className="footer-minimal-nav">
              <a href="#home" onClick={(e) => scrollTo(e, 'home')}>Home</a>
              <span className="footer-nav-dot">•</span>
              <a href="#catalog" onClick={(e) => scrollTo(e, 'catalog')}>Catalog</a>
              <span className="footer-nav-dot">•</span>
              <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Services</a>
              <span className="footer-nav-dot">•</span>
              <a href="#about" onClick={(e) => scrollTo(e, 'about')}>Workshop</a>
              <span className="footer-nav-dot">•</span>
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
              <span className="footer-nav-dot">•</span>
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Footer Quick RFQ')}
                className="footer-nav-quote-btn"
              >
                Request Quote
              </button>
            </nav>
          </div>

          {/* Minimal Map Column */}
          <div className="footer-map-col">
            <div className="footer-map-frame">
              <div className="footer-map-header">
                <div className="footer-map-pin">
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>explore</span>
                  <span>Daryaganj Workshop Location</span>
                </div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-map-directions-btn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>open_in_new</span>
                  <span>Google Maps</span>
                </a>
              </div>
              <div className="footer-map-embed">
                <iframe
                  title="Shree Trading Company - 4658/21 Ansari Road Daryaganj near fire station"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="footer-minimal-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Shree Trading Company. 4658/21 Ansari Road, Daryaganj, Delhi - 110002. All rights reserved.
          </p>
          <div className="footer-quick-actions">
            <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="footer-bottom-link">
              WhatsApp Desk
            </a>
            <span className="footer-nav-dot">•</span>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="footer-bottom-link">
              Drop-off Inquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
