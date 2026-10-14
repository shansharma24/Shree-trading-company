import React from 'react';
import { QUICK_METRICS } from '../data/companyData';

export default function PillarsStrip() {
  return (
    <div className="pillars-strip">
      <div className="section-container">
        <div className="pillars-grid">
          {QUICK_METRICS.map((metric, idx) => (
            <div key={idx} className="pillar-item">
              <div className="pillar-icon-box">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  {metric.icon}
                </span>
              </div>
              <div>
                <div className="pillar-title">{metric.title}</div>
                <div className="pillar-sub">{metric.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
