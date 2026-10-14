import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Shree Trading Company, I have an inquiry regarding printing equipment and refilling services.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Shree Trading Company on WhatsApp"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>chat</span>
      <span className="floating-whatsapp-ping"></span>
      <span className="floating-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
}
