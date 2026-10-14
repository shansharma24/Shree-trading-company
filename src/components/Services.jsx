import React from 'react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';

export default function Services({ onSelectService, onOpenQuoteModal }) {
  const handleServiceInquiry = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal(service.inquiry, service.title);
    }
  };

  return (
    <section className="section-wrapper services-section" id="services">
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>settings</span>
            <span>Maintenance &amp; Support</span>
          </div>
          <h2 className="section-title">
            Specialized Repair &amp; Maintenance Services
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Fast diagnostics, precision refills, and emergency jam fixes for office printers and enterprise photocopiers across Delhi NCR.
          </p>
        </div>

        {/* Minimal 6 Services Grid */}
        <div className="services-grid services-grid-minimal">
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="service-card service-card-minimal">
              <div className="service-card-header">
                <div className="service-icon-box service-icon-box-minimal">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    {service.icon}
                  </span>
                </div>
                <span className="service-badge-minimal">{service.badge}</span>
              </div>

              <h3 className="service-title service-title-minimal">{service.title}</h3>
              <p className="service-desc service-desc-minimal">{service.description}</p>

              {/* Minimal Service Highlights */}
              <ul className="service-points-list service-points-minimal">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="service-point-item service-point-item-minimal">
                    <span className="material-symbols-outlined">check</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleServiceInquiry(service)}
                className="btn-service-minimal"
              >
                <span>Request Service</span>
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* Minimal Assistance Banner */}
        <div className="assistance-banner assistance-banner-minimal">
          <div className="assistance-content">
            <h3 className="assistance-title-minimal">
              Need Urgent Hardware Diagnostics or Emergency Repair?
            </h3>
            <p className="assistance-desc-minimal">
              Drop by our Daryaganj workshop for express testing or reach our service desk directly.
            </p>
          </div>

          <div className="assistance-actions-minimal">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-primary-sm"
              style={{ backgroundColor: 'var(--color-amber)', color: '#ffffff' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>call</span>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Urgent Assistance')}
              className="btn-secondary-sm"
            >
              <span>Quick Desk Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
