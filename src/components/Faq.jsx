import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-wrapper faq-section" id="faq">
      <div className="section-container">
        <div className="faq-single-frame">
          {/* Left Column: Heading & Quick Support */}
          <div className="faq-frame-left">
            <div>
              <div className="section-tag">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>help</span>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title">
                Got Questions About Printing &amp; Refilling?
              </h2>
              <p className="section-subtitle">
                Clear answers regarding our repair workflows, refilling guarantees, and workshop support in Daryaganj.
              </p>
            </div>

            {/* Quick Helper Box */}
            <div className="faq-quick-helper">
              <div className="faq-helper-icon">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>support_agent</span>
              </div>
              <div>
                <h4 className="faq-helper-title">Have a specific model inquiry?</h4>
                <p className="faq-helper-desc">Talk directly with our technicians for instant advice or drop-off confirmation.</p>
                <div className="faq-helper-actions">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-helper-call">
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>call</span>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello, I have a question regarding printer refilling/repair.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-helper-whatsapp"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>chat</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Accordions */}
          <div className="faq-frame-right">
            <div className="faq-compact-list">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className={`faq-compact-item ${isOpen ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="faq-compact-btn"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="faq-compact-q">{faq.q}</span>
                      <span
                        className="material-symbols-outlined faq-compact-arrow"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          color: 'var(--color-secondary)'
                        }}
                      >
                        expand_more
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-compact-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
