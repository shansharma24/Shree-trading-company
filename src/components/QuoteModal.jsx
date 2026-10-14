import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, topic, itemName }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Shree Trading Company,\n\n*Inquiry Topic:* ${topic || 'General Quote'}\n*Item:* ${itemName || 'General Inquiry'}\n*Name:* ${name || 'Prospective Client'}\n*Phone:* ${phone}\n*Details:* ${notes || 'Looking for pricing and availability.'}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSent(true);
  };

  const handleStandardSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
        </button>

        {!sent ? (
          <div>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)', background: 'var(--color-secondary-light)', padding: '0.25rem 0.65rem', borderRadius: '4px', marginBottom: '0.5rem' }}>
              {topic || 'Quick Inquiry'}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
              {itemName ? `Inquire: ${itemName}` : 'Request Fast Quotation'}
            </h3>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Send your request to our Daryaganj team for immediate pricing, stock verification, and turnaround time.
            </p>

            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Sharma"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98995 XXXXX"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Specific Details / Quantity</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need 2 toner refills for Canon 2525 today..."
                  className="form-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                <button
                  type="submit"
                  className="btn-primary-lg"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
                  <span>Connect via WhatsApp (Fastest)</span>
                </button>

                <button
                  type="button"
                  onClick={handleStandardSubmit}
                  className="btn-secondary-lg"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  <span>Submit Client Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-success-bg)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>check_circle</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Inquiry Dispatched!
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Thank you for connecting with Shree Trading Company. Our Daryaganj team will reach out to you shortly at <strong>{phone}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Back to Website</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
