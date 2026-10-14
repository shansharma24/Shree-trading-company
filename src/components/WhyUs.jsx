import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';

export default function WhyUs() {
  return (
    <section className="section-wrapper why-section" id="why-us">
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>verified_user</span>
            <span>Direct &amp; Transparent</span>
          </div>
          <h2 className="section-title">
            Why Choose Shree Trading Company
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Genuine guidance, responsive communication, and central accessibility in the heart of Delhi's commercial publishing district.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className={`why-card ${index === 4 ? 'wide-col' : ''}`}
            >
              <div className="why-number-badge">
                {item.number}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
