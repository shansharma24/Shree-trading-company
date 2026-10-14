import React, { useState } from 'react';
import { FAQS } from '../data/companyData';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-wrapper faq-section" id="faq">
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>help</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Got Questions About Printing &amp; Refilling?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Clear answers to help you understand our repair workflows, refilling guarantees, and workshop support.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <span
                    className="material-symbols-outlined"
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
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
