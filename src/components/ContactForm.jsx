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
        <div className="contact-single-frame">
          {/* Frame Top Header */}
          <div className="contact-frame-header">
            <div>
              <div className="section-tag">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>contact_support</span>
                <span>Connect Directly</span>
              </div>
              <h2 className="section-title">
                Visit Us in Daryaganj or Request a Quote
              </h2>
            </div>
            <div className="contact-header-badges">
              <span className="contact-status-pill">
                <span className="status-dot"></span>
                <span>Mon - Sat: 10:00 AM – 7:30 PM</span>
              </span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="contact-hotline-pill">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>call</span>
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Frame Body Split */}
          <div className="contact-frame-grid">
            {/* Left: Store Info & Quick Hotlines */}
            <div className="contact-frame-info">
              <div className="contact-address-card">
                <span className="material-symbols-outlined address-pin-icon">location_on</span>
                <div>
                  <h4 className="contact-subhead">Daryaganj Workshop &amp; Sales Desk</h4>
                  <p className="contact-addr-text">
                    <strong>Shree Trading Company</strong><br />
                    4658/21, Ansari Road, Daryaganj, near Fire Station, Delhi - 110002
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-map-inline"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>open_in_new</span>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="contact-actions-row">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn-call-compact">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>call</span>
                  <span>Call HQ Desk</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Shree Trading Company, I would like to inquire about printing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-compact"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chat</span>
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="contact-walkin-tip">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>local_shipping</span>
                <span>Walk-in drop-offs for cartridge refills &amp; diagnosis welcomed during working hours.</span>
              </div>
            </div>

            {/* Right: Streamlined Form */}
            <div className="contact-frame-form">
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2-compact">
                  <div className="form-group-compact">
                    <label htmlFor="fullName" className="form-label-compact">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input-compact"
                      placeholder="e.g. Rajesh Kumar"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group-compact">
                    <label htmlFor="phoneNumber" className="form-label-compact">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-input-compact"
                      placeholder="e.g. +91 98995 XXXXX"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2-compact">
                  <div className="form-group-compact">
                    <label htmlFor="serviceCategory" className="form-label-compact">Required Service / Product *</label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      className="form-select-compact"
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

                  <div className="form-group-compact">
                    <label htmlFor="machineModel" className="form-label-compact">Machine Model (Optional)</label>
                    <input
                      type="text"
                      id="machineModel"
                      name="machineModel"
                      className="form-input-compact"
                      placeholder="e.g. Canon iR 2525 / HP 1020"
                      value={formData.machineModel}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group-compact">
                  <label htmlFor="inquiryMessage" className="form-label-compact">Message or Requirement *</label>
                  <textarea
                    id="inquiryMessage"
                    name="inquiryMessage"
                    className="form-textarea-compact"
                    rows={2}
                    placeholder="Describe paper jam, cartridge count, or quote required..."
                    required
                    value={formData.inquiryMessage}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-bottom-compact">
                  <label className="urgent-check-label">
                    <input
                      type="checkbox"
                      id="isUrgent"
                      name="isUrgent"
                      checked={formData.isUrgent}
                      onChange={handleChange}
                      className="urgent-checkbox"
                    />
                    <span>Mark Urgent (Same-Day)</span>
                  </label>

                  <div className="form-btns-compact">
                    <button type="submit" className="btn-submit-compact">
                      <span>Submit Request</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>send</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="btn-whatsapp-send-compact"
                      title="Forward directly to WhatsApp"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>chat</span>
                      <span>Send WhatsApp</span>
                    </button>
                  </div>
                </div>

                {submitted && (
                  <div className="form-success-compact">
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-success)', fontSize: '18px' }}>check_circle</span>
                    <span>Thank you! We received your inquiry and will respond shortly via call or WhatsApp.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
