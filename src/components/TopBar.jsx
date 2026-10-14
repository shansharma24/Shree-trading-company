import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>location_on</span>
            <span>{COMPANY_INFO.shortAddress}</span>
          </span>
          <span className="top-bar-divider">|</span>
          <span className="top-bar-item" style={{ color: 'var(--color-surface-container-high)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>schedule</span>
            <span>{COMPANY_INFO.hours}</span>
          </span>
        </div>
        
        <div className="top-bar-right">
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="top-bar-item">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>call</span>
            <span>Call HQ: {COMPANY_INFO.phone}</span>
          </a>
          <span className="top-bar-divider">|</span>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Shree Trading Company, I would like to inquire about printing services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-item"
            style={{ color: '#4ade80' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
