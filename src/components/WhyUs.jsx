import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import MobileSlider from './MobileSlider';

export default function WhyUs() {
  return (
    <section className="section-wrapper why-section" id="why-us">
      <div className="section-container">
        <div className="why-single-frame">
          <div className="why-frame-header">
            <div>
              <div className="section-tag">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>verified_user</span>
                <span>Direct &amp; Transparent</span>
              </div>
              <h2 className="section-title">
                Why Choose Shree Trading Company
              </h2>
            </div>
            <p className="section-subtitle why-frame-subtitle">
              Genuine guidance, responsive communication, and central accessibility in the heart of Delhi's commercial publishing district.
            </p>
          </div>

          <MobileSlider desktopGridClass="why-grid-compact">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="why-compact-card">
                <div className="why-compact-badge">{item.number}</div>
                <h3 className="why-compact-title">{item.title}</h3>
                <p className="why-compact-desc">{item.description}</p>
              </div>
            ))}
          </MobileSlider>
        </div>
      </div>
    </section>
  );
}
