import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/companyData';

export default function Catalog({ onSelectProduct, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Equipment & Supplies' },
    { id: 'copiers', label: 'Photocopier Machines' },
    { id: 'printers', label: 'Office Printers' },
    { id: 'cartridges', label: 'Toner & Cartridges' },
    { id: 'services', label: 'Refilling & Maintenance' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === activeCategory);

  const getBadgeClass = (color) => {
    if (color === 'primary') return 'badge-primary';
    if (color === 'secondary') return 'badge-secondary';
    return 'badge-amber';
  };

  const handleInquiry = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal(product.inquiryTopic, product.name);
    }
  };

  return (
    <section className="section-wrapper catalog-section" id="catalog">
      <div className="section-container">
        {/* Section Heading */}
        <div className="catalog-header">
          <div>
            <div className="section-tag">
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>inventory_2</span>
              <span>Inventory &amp; Procurement</span>
            </div>
            <h2 className="section-title">
              Commercial Equipment &amp; Supplies
            </h2>
            <p className="section-subtitle">
              Engineered hardware and verified consumables ready for fast delivery and deployment across Delhi NCR offices.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Custom Bulk Quote')}
              className="btn-secondary-lg"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>swap_calls</span>
              <span>Custom Bulk RFQ</span>
            </button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-media">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-img"
                  loading="lazy"
                />
                <span className={`product-badge ${getBadgeClass(product.badgeColor)}`}>
                  {product.badge}
                </span>
              </div>

              <div className="product-body">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>

                {/* Specs Box */}
                <div className="product-specs-box">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="spec-row">
                      <span className="spec-label">{spec.label}:</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => handleInquiry(product)}
                  className="btn-card-inquire"
                >
                  <span>Send Inquiry</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </button>
              </div>
            </div>
          ))}

          {/* Quick RFQ Tile */}
          <div className="rfq-banner-card">
            <div>
              <div className="rfq-banner-icon">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>request_quote</span>
              </div>
              <h3 className="rfq-banner-title">Need a Specific Part or Model?</h3>
              <p className="rfq-banner-desc">
                We stock an extensive variety of drums, doctor blades, PCR rollers, gears, and toner grades at our Daryaganj inventory.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenQuoteModal('Specific Part or Model RFQ')}
              className="btn-primary-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Contact Daryaganj Desk</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
