import React from 'react';
import { QUICK_METRICS } from '../data/companyData';
import MobileSlider from './MobileSlider';

export default function PillarsStrip() {
  return (
    <div className="pillars-strip">
      <div className="section-container">
        <MobileSlider desktopGridClass="pillars-grid" hideControls={true}>
          {QUICK_METRICS.map((metric, idx) => (
            <div key={idx} className="pillar-item">
              <div className="pillar-icon-box">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                  {metric.icon}
                </span>
              </div>
              <div>
                <div className="pillar-title">{metric.title}</div>
                <div className="pillar-sub">{metric.subtitle}</div>
              </div>
            </div>
          ))}
        </MobileSlider>
      </div>
    </div>
  );
}
