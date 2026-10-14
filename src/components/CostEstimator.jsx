import React, { useState } from 'react';

export default function CostEstimator({ onInquireEstimate }) {
  const [deviceType, setDeviceType] = useState('laser');
  const [serviceType, setServiceType] = useState('refill');
  const [quantity, setQuantity] = useState(1);

  // Price matrix calculation logic
  const pricingData = {
    laser: {
      refill: { base: 350, turnaround: '30-45 mins', oemCost: 1800 },
      drum: { base: 650, turnaround: '1-2 hours', oemCost: 2200 },
      maintenance: { base: 450, turnaround: 'Same Day', oemCost: 1500 },
      roller: { base: 300, turnaround: '45 mins', oemCost: 900 }
    },
    copier_a4: {
      refill: { base: 650, turnaround: '45 mins', oemCost: 3500 },
      drum: { base: 1200, turnaround: '2-3 hours', oemCost: 4800 },
      maintenance: { base: 900, turnaround: 'Same Day', oemCost: 2500 },
      roller: { base: 550, turnaround: '1-2 hours', oemCost: 1800 }
    },
    copier_heavy: {
      refill: { base: 1200, turnaround: '1-2 hours', oemCost: 7500 },
      drum: { base: 2800, turnaround: '3-4 hours', oemCost: 11000 },
      maintenance: { base: 1800, turnaround: 'Same Day', oemCost: 4500 },
      roller: { base: 950, turnaround: '2 hours', oemCost: 2900 }
    }
  };

  const selectedTier = pricingData[deviceType][serviceType];
  const unitCost = selectedTier.base;
  const totalCost = unitCost * quantity;
  const oemTotal = selectedTier.oemCost * quantity;
  const savings = Math.max(0, oemTotal - totalCost);
  const savingsPercent = Math.round((savings / oemTotal) * 100);

  const getDeviceLabel = () => {
    if (deviceType === 'laser') return 'Desktop Laser Printer';
    if (deviceType === 'copier_a4') return 'Workgroup Copier / MFD';
    return 'Heavy Production Photocopier';
  };

  const getServiceLabel = () => {
    if (serviceType === 'refill') return 'Precision Toner Refilling';
    if (serviceType === 'drum') return 'OPC Drum / Blade Replacement';
    if (serviceType === 'maintenance') return 'Preventative Overhaul & Servicing';
    return 'Pickup Roller & Feed Jam Rectification';
  };

  const handleInquire = () => {
    if (onInquireEstimate) {
      onInquireEstimate({
        device: getDeviceLabel(),
        service: getServiceLabel(),
        quantity,
        estimatedTotal: `₹${totalCost.toLocaleString('en-IN')}`,
        turnaround: selectedTier.turnaround
      });
    }
  };

  return (
    <section className="section-wrapper" id="calculator" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <div className="section-tag">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>calculate</span>
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="section-title">
            Instant Toner Refill &amp; Service Estimator
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Calculate estimated costs and savings for printer refilling, drum replacements, or routine machine diagnostics in central Delhi.
          </p>
        </div>

        <div className="estimator-card">
          <div className="estimator-grid">
            {/* Controls */}
            <div className="estimator-controls">
              <div className="estimator-control-group">
                <label htmlFor="est-device">1. Select Machine Type</label>
                <select
                  id="est-device"
                  className="estimator-select"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                >
                  <option value="laser">Desktop Laser Printer (HP, Canon, Brother)</option>
                  <option value="copier_a4">Workgroup Copier / Multifunction A4/A3</option>
                  <option value="copier_heavy">Heavy Production Office Photocopier (Canon iR, Ricoh, Sharp)</option>
                </select>
              </div>

              <div className="estimator-control-group">
                <label htmlFor="est-service">2. Select Required Service</label>
                <select
                  id="est-service"
                  className="estimator-select"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="refill">Precision Toner Refill (High Yield Carbon)</option>
                  <option value="drum">OPC Drum &amp; Doctor Blade Overhaul</option>
                  <option value="maintenance">Preventative Servicing &amp; Deep Cleaning</option>
                  <option value="roller">Pickup Roller &amp; Paper Jam Rectification</option>
                </select>
              </div>

              <div className="estimator-control-group">
                <label htmlFor="est-quantity">3. Number of Cartridges / Units ({quantity})</label>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <input
                    id="est-quantity"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    style={{ flex: 1, accentColor: 'var(--color-secondary)' }}
                  />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', minWidth: '45px', textAlign: 'right' }}>
                    {quantity} {quantity === 1 ? 'unit' : 'units'}
                  </span>
                </div>
              </div>
            </div>

            {/* Calculated Results Box */}
            <div className="estimator-result-box">
              <div className="estimator-price-label">Estimated Service Cost</div>
              <div className="estimator-price-amount">
                ₹{totalCost.toLocaleString('en-IN')}*
              </div>

              <div className="estimator-savings-pill">
                Save ~{savingsPercent}% (Approx ₹{savings.toLocaleString('en-IN')} vs OEM)
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-primary-fixed-dim)', marginBottom: '1.25rem' }}>
                <div><strong>Turnaround Time:</strong> ~{selectedTier.turnaround}</div>
                <div><strong>Location:</strong> Daryaganj Workshop Drop-off</div>
              </div>

              <button
                type="button"
                onClick={handleInquire}
                className="btn-primary-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Inquire With This Estimate</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
