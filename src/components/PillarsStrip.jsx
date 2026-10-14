import React from 'react';
import { QUICK_METRICS } from '../data/companyData';

export default function PillarsStrip() {
  // Duplicate metrics 3 times for a completely seamless, gap-free infinite loop
  const marqueeItems = [...QUICK_METRICS, ...QUICK_METRICS, ...QUICK_METRICS];

  return (
    <div className="pillars-strip-marquee" aria-label="Commercial Assurances and Services">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((metric, idx) => (
            <div key={idx} className="marquee-pillar-card">
              <div className="marquee-pillar-icon-box">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {metric.icon}
                </span>
              </div>
              <div className="marquee-pillar-text">
                <div className="marquee-pillar-header">
                  <span className="marquee-pillar-title">{metric.title}</span>
                  {metric.badge && (
                    <span className="marquee-pillar-badge">{metric.badge}</span>
                  )}
                </div>
                <div className="marquee-pillar-sub">{metric.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
