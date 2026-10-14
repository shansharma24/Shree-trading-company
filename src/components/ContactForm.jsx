import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactForm({ prefillCategory, prefillModel, prefillNotes }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    serviceCategory: 'Photocopier Sales',
    machineModel: '',
    inquiryMessage: '',
    isUrgent: false
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillCategory) {
      setFormData(prev => ({
        ...prev,
        serviceCategory: prefillCategory,
        machineModel: prefillModel || prev.machineModel,
        inquiryMessage: prefillNotes || prev.inquiryMessage
      }));
    }
  }, [prefillCategory, prefillModel, prefillNotes]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const urgencyText = formData.isUrgent ? ' [URGENT REQUIREMENT]' : '';
    const message = `Hello Shree Trading Company,${urgencyText}\n\n*Name:* ${formData.fullName || 'Not provided'}\n*Phone:* ${formData.phoneNumber || 'Not provided'}\n*Service Category:* ${formData.serviceCategory}\n*Model:* ${formData.machineModel || 'N/A'}\n*Details:* ${formData.inquiryMessage || 'Inquiring about quotation and availability.'}`;
    
    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>contact_support</span>
            <span>Connect Directly</span>
          </div>
          <h2 className="section-title">
            Visit Us in Daryaganj or Request a Quote
          </h2>
          <p className="section-subtitle">
            Have an urgent cartridge refill requirement or need a photocopier repaired? Contact our support desk.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Store & Location Details */}
          <div className="contact-info-panel">
            <div className="info-card-box">
              {/* Address */}
              <div className="info-row">
                <span className="material-symbols-outlined info-icon">location_on</span>
                <div>
                  <h3 className="info-title">Store &amp; Technical Service Center</h3>
                  <p className="info-text">
                    <strong>Shree Trading Company</strong><br />
                    4658/21, Ansari Road, Daryaganj,<br />
                    Near Delhi Fire Station, Delhi - 110002, India.
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-map-link"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="info-row" style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-surface-dim)' }}>
                <span className="material-symbols-outlined info-icon">schedule</span>
                <div>
                  <h3 className="info-title">Working Hours</h3>
                  <p className="info-text">
                    Monday to Saturday: 10:00 AM – 7:30 PM<br />
                    <span style={{ color: 'var(--color-amber)', fontWeight: 600 }}>Sunday: Closed</span>
                  </p>
                </div>
              </div>

              {/* Fast Inquiry Buttons */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-surface-dim)' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                  Instant Hotline &amp; Chat
                </h4>
                <div className="contact-quick-buttons">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-call-action">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                    <span>Call HQ Desk</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Shree Trading Company, I would like to inquire about printing services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-action"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* Micro Walk-In Tip */}
            <div className="dropoff-notice-box">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>local_shipping</span>
              <span>Walk-in cartridge refilling and diagnostic drop-offs welcomed during working hours.</span>
            </div>
          </div>

          {/* Right: Interactive Frontend Inquiry Form */}
          <div className="form-panel">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
              Request Service or Price Quotation
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Fill in your requirement details below. Our team reviews specifications and responds directly via call or WhatsApp.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    placeholder="e.g. Rajesh Kumar"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-input"
                    placeholder="e.g. +91 98111 XXXXX"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceCategory" className="form-label">Required Service or Product *</label>
                <select
                  id="serviceCategory"
                  name="serviceCategory"
                  className="form-select"
                  required
                  value={formData.serviceCategory}
                  onChange={handleChange}
                >
                  <option value="Photocopier Sales">Commercial Photocopier Sales &amp; Lease</option>
                  <option value="Printer Sales">Printer Sales &amp; Office Setup</option>
                  <option value="Toner Refilling">Toner Cartridge Refilling (Micro Fill)</option>
                  <option value="Printer Repair">Printer Repair &amp; Diagnostics</option>
                  <option value="Photocopier Repair">Commercial Photocopier Repair &amp; AMC</option>
                  <option value="Cartridge Supplies">Cartridge &amp; Bulk Toner Supplies</option>
                  <option value="Spare Parts">Spare Parts (Drums, Blades, Rollers)</option>
                  <option value="General Inquiry">General Service Maintenance Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="machineModel" className="form-label">Printer / Copier Model (Optional)</label>
                <input
                  type="text"
                  id="machineModel"
                  name="machineModel"
                  className="form-input"
                  placeholder="e.g. Canon iR 2525 / HP LaserJet 1020 / Ricoh MP 2014"
                  value={formData.machineModel}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiryMessage" className="form-label">Message or Specific Requirement *</label>
                <textarea
                  id="inquiryMessage"
                  name="inquiryMessage"
                  className="form-textarea"
                  rows={3}
                  placeholder="Describe the paper jam, cartridge count, or equipment quote required..."
                  required
                  value={formData.inquiryMessage}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Urgency Checkbox */}
              <div className="urgency-toggle-box">
                <input
                  type="checkbox"
                  id="isUrgent"
                  name="isUrgent"
                  checked={formData.isUrgent}
                  onChange={handleChange}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--color-amber)', cursor: 'pointer' }}
                />
                <label htmlFor="isUrgent" style={{ cursor: 'pointer', fontWeight: 600 }}>
                  Mark as Urgent: Need same-day turnaround or emergency repair visit
                </label>
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn-submit-form">
                  <span>Submit Inquiry Request</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="btn-direct-whatsapp"
                  title="Forward directly to WhatsApp"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                  <span>Instant WhatsApp Send</span>
                </button>
              </div>

              {/* Form success message simulation */}
              {submitted && (
                <div className="form-success-banner">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-success)', fontSize: '20px' }}>check_circle</span>
                    <span>Thank you for contacting Shree Trading Company!</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>
                    Your requirement has been noted. For immediate dispatch or urgent questions, you can also reach us directly at <strong style={{ textDecoration: 'underline' }}>{COMPANY_INFO.phone}</strong> or tap the WhatsApp button above.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
