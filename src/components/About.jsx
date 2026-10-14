import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function About() {
  return (
    <section className="section-wrapper about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* Workshop Visual Box */}
          <div className="about-media-box">
            <img
              src="/images/workshop_tech.jpg"
              alt="Technician inspecting and servicing printer hardware at Daryaganj workshop"
              className="about-img"
              loading="lazy"
            />
            <div className="about-media-bar">
              <span style={{ fontWeight: 600 }}>Dedicated Technical &amp; Refilling Facility</span>
              <span style={{ fontFamily: 'monospace', color: 'var(--color-primary-fixed-dim)' }}>Daryaganj Workshop</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div>
            <div className="section-tag">
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>storefront</span>
              <span>About Shree Trading Company</span>
            </div>

            <h2 className="section-title">
              Reliable Printing Equipment &amp; Practical Technical Support
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              At <strong>Shree Trading Company</strong>, we provide dependable printing solutions for businesses, legal chambers, publishing offices, and institutional customers across Delhi NCR. From photocopier and printer hardware to micro-refined cartridge refilling and urgent repairs, we keep your documentation running without interruption.
            </p>

            {/* Feature Pair */}
            <div className="about-cards-pair">
              <div className="about-feature-card">
                <div className="about-feature-title">
                  <span className="material-symbols-outlined">location_city</span>
                  <span>Central Daryaganj Hub</span>
                </div>
                <p className="about-feature-desc">
                  Located right on Ansari Road near the Delhi Fire Station, conveniently reachable for institutional clients across Old, Central, and North Delhi.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-title">
                  <span className="material-symbols-outlined">tune</span>
                  <span>Multi-Brand Compatibility</span>
                </div>
                <p className="about-feature-desc">
                  Complete technical expertise for Canon, HP LaserJet, Ricoh, Brother, Sharp, and Konica Minolta office equipment.
                </p>
              </div>
            </div>

            {/* Quality Checklist */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle</span>
                <span>Direct inspection and transparent diagnosis of hardware faults before quoting repair.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle</span>
                <span>High-density carbon toner refilling with zero compromise on page contrast and yield.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle</span>
                <span>Ready inventory of genuine &amp; premium compatible spares for durable office longevity.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
