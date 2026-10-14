import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsStrip from './components/PillarsStrip';
import Catalog from './components/Catalog';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    topic: '',
    itemName: ''
  });

  const [formPrefill, setFormPrefill] = useState({
    category: 'Photocopier Sales',
    model: '',
    notes: ''
  });

  const openQuoteModal = (topic = 'General Inquiry', itemName = '') => {
    setModalState({
      isOpen: true,
      topic,
      itemName
    });
  };

  const closeQuoteModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectProduct = (product) => {
    setFormPrefill({
      category: product.inquiryTopic.includes('Refill')
        ? 'Toner Refilling'
        : product.inquiryTopic.includes('Cartridge')
        ? 'Cartridge Supplies'
        : product.inquiryTopic.includes('Printer')
        ? 'Printer Sales'
        : 'Photocopier Sales',
      model: product.name,
      notes: `Inquiring for: ${product.name}. Please confirm pricing and stock.`
    });
    scrollToContact();
  };

  const handleSelectService = (service) => {
    setFormPrefill({
      category: service.inquiry,
      model: '',
      notes: `Interested in ${service.title}. Need turnaround time and quote.`
    });
    scrollToContact();
  };

  return (
    <div className="app-container">
      {/* Top utility strip */}
      <TopBar />

      {/* Main sticky navigation */}
      <Navbar onOpenQuoteModal={openQuoteModal} />

      <main className="site-main">
        {/* Hero Banner with Visual Media Showcase */}
        <Hero onOpenQuoteModal={openQuoteModal} />

        {/* Pillars Quick Bar */}
        <PillarsStrip />

        {/* Commercial Equipment & Supplies Catalog */}
        <Catalog
          onSelectProduct={handleSelectProduct}
          onOpenQuoteModal={openQuoteModal}
        />

        {/* Specialized Repair & Maintenance Services */}
        <Services
          onSelectService={handleSelectService}
          onOpenQuoteModal={openQuoteModal}
        />

        {/* About Us & Daryaganj Workshop */}
        <About />

        {/* Why Choose Shree Trading Company */}
        <WhyUs />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Contact, Location & Inquiry Form */}
        <ContactForm
          prefillCategory={formPrefill.category}
          prefillModel={formPrefill.model}
          prefillNotes={formPrefill.notes}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenQuoteModal={openQuoteModal} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Quick Quote Inquiry Popup Modal */}
      <QuoteModal
        isOpen={modalState.isOpen}
        onClose={closeQuoteModal}
        topic={modalState.topic}
        itemName={modalState.itemName}
      />
    </div>
  );
}
