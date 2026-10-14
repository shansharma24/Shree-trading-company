import React, { useRef, useState } from 'react';

export default function MobileSlider({ children, className = '', desktopGridClass = '' }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    const items = track.children;
    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const diff = Math.abs(trackCenter - itemCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    setActiveIndex(closestIdx);
  };

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    const items = scrollRef.current.children;
    if (items && items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    if (activeIndex < totalSlides - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  return (
    <div className={`mobile-slider-container ${className}`}>
      {/* Desktop Grid Layout (Screen > 768px) */}
      <div className={`mobile-slider-desktop ${desktopGridClass}`}>
        {children}
      </div>

      {/* Mobile Slide Component (Screen <= 768px) */}
      <div className="mobile-slider-viewport">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mobile-slider-track"
        >
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="mobile-slider-item">
              {child}
            </div>
          ))}
        </div>

        {/* Minimal Slide Pagination Controls */}
        {totalSlides > 1 && (
          <div className="mobile-slider-controls">
            <button
              type="button"
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="slider-nav-btn"
              aria-label="Previous card"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
            </button>

            <div className="slider-dots">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              disabled={activeIndex === totalSlides - 1}
              className="slider-nav-btn"
              aria-label="Next card"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
            </button>

            <span className="slider-counter">
              {activeIndex + 1}/{totalSlides}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
