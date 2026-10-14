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
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>settings</span>
            <span>Maintenance &amp; Support</span>
          </div>
          <h2 className="section-title">
            Specialized Repair &amp; Maintenance Services
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From emergency jam rectifications to scheduled fleet maintenance, our certified technicians in Delhi ensure minimum equipment downtime.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="services-grid">
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="service-card">
              <span className="service-badge">{service.badge}</span>
              
              <div className="service-icon-box">
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                  {service.icon}
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <ul className="service-points-list">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="service-point-item">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleServiceInquiry(service)}
                className="btn-service-action"
              >
                <span>Request {service.title}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* Prominent Assistance Banner */}
        <div className="assistance-banner">
          <div>
            <div className="assistance-title">
              Need Urgent Assistance With Your Printer or Copier?
            </div>
            <p className="assistance-desc">
              Experiencing blurry streaks, paper feeding jams, cartridge error lights, or abnormal gear noise? Reach our Daryaganj service desk for quick advice or express drop-off diagnosis.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-primary-lg"
              style={{ backgroundColor: 'var(--color-amber)', color: '#ffffff' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Urgent Assistance')}
              className="btn-secondary-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}
            >
              <span>Contact Service Desk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
