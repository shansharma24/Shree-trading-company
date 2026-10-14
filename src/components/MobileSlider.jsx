import React, { useRef, useState, useEffect, useCallback } from 'react';

export default function MobileSlider({
  children,
  className = '',
  desktopGridClass = '',
  autoMove = true,
  interval = 2000,
  hideControls = false
}) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pauseTimeoutRef = useRef(null);
  const totalSlides = React.Children.count(children);

  // Track scroll position to update active index indicator
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

  const scrollToSlide = useCallback((index) => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    if (index === 0) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const items = track.children;
      if (items && items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
    setActiveIndex(index);
  }, []);

  const pauseAutoPlayBriefly = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  const nextSlide = () => {
    pauseAutoPlayBriefly();
    const nextIdx = (activeIndex + 1) % totalSlides;
    scrollToSlide(nextIdx);
  };

  const prevSlide = () => {
    pauseAutoPlayBriefly();
    const prevIdx = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
    scrollToSlide(prevIdx);
  };

  const handleDotClick = (index) => {
    pauseAutoPlayBriefly();
    scrollToSlide(index);
  };

  // Visibility check with IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-move with 2 second interval
  useEffect(() => {
    if (!autoMove || totalSlides <= 1 || isPaused || !isVisible) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalSlides;
        const track = scrollRef.current;
        if (track) {
          if (next === 0) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
          } else if (track.children && track.children[next]) {
            track.children[next].scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest'
            });
          }
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoMove, totalSlides, isPaused, isVisible, interval]);

  return (
    <div
      ref={containerRef}
      className={`mobile-slider-container ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 2500);
      }}
    >
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
        {!hideControls && totalSlides > 1 && (
          <div className="mobile-slider-controls">
            <button
              type="button"
              onClick={prevSlide}
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
                  onClick={() => handleDotClick(idx)}
                  className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
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
