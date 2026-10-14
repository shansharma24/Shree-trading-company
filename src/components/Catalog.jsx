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
        <div className="catalog-grid catalog-grid-minimal">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card product-card-minimal">
              <div className="product-media product-media-minimal">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-img product-img-minimal"
                  loading="lazy"
                />
                <span className={`product-badge ${getBadgeClass(product.badgeColor)}`}>
                  {product.badge}
                </span>
              </div>

              <div className="product-body product-body-minimal">
                <h3 className="product-title product-title-minimal">{product.name}</h3>
                <p className="product-desc product-desc-minimal">{product.description}</p>

                {/* Minimal Tags */}
                {product.tags && (
                  <div className="product-tags-minimal">
                    {product.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="product-tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
