import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) {
  // Prevent background scroll and restore on unmount/close
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Touch Swipe Handlers for mobile gestures
  const handleDragEnd = useCallback(
    (event, info) => {
      const swipeThreshold = 50;
      if (info.offset.x < -swipeThreshold) {
        onNext();
      } else if (info.offset.x > swipeThreshold) {
        onPrev();
      }
    },
    [onNext, onPrev]
  );

  if (!isOpen || currentIndex === null || !images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(images.length).padStart(2, '0');

  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Gallery"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            minHeight: '100vh',
            zIndex: 10000,
            backgroundColor: 'rgba(5, 7, 12, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 'max(16px, env(safe-area-inset-top, 16px))',
            paddingBottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
            paddingLeft: 'max(16px, env(safe-area-inset-left, 16px))',
            paddingRight: 'max(16px, env(safe-area-inset-right, 16px))',
            boxSizing: 'border-box',
            touchAction: 'none'
          }}
          onClick={onClose}
        >
          {/* Top Header Bar */}
          <div
            style={{
              width: '100%',
              maxWidth: '1240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10005,
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Left: Category & Index */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(15, 20, 32, 0.75)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Compass size={15} color="var(--gold-primary)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase'
                }}
              >
                ARCHIVE · {formattedIndex} / {formattedTotal}
              </span>
            </div>

            {/* Dedicated Top-Right Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="lightbox-close-btn"
              style={{
                width: '48px',
                height: '48px',
                minWidth: '48px',
                minHeight: '48px',
                borderRadius: '50%',
                background: 'rgba(15, 20, 32, 0.85)',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.25s ease',
                touchAction: 'manipulation',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.25)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 20, 32, 0.85)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Center Stage: Image and Left/Right Nav Arrows */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: '0.75rem 0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="lightbox-nav-btn prev-btn"
              style={{
                position: 'absolute',
                left: 'max(8px, env(safe-area-inset-left, 8px))',
                zIndex: 10005,
                width: '48px',
                height: '48px',
                minWidth: '48px',
                minHeight: '48px',
                borderRadius: '50%',
                background: 'rgba(10, 14, 24, 0.82)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.25s ease',
                touchAction: 'manipulation'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.25)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 14, 24, 0.82)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Draggable / Swipeable Image */}
            <motion.div
              key={currentImage.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={handleDragEnd}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                padding: '0 0.5rem'
              }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                style={{
                  maxWidth: 'min(92vw, 1200px)',
                  maxHeight: 'calc(100dvh - 160px)',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '14px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  pointerEvents: 'auto'
                }}
                draggable={false}
              />
            </motion.div>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="lightbox-nav-btn next-btn"
              style={{
                position: 'absolute',
                right: 'max(8px, env(safe-area-inset-right, 8px))',
                zIndex: 10005,
                width: '48px',
                height: '48px',
                minWidth: '48px',
                minHeight: '48px',
                borderRadius: '50%',
                background: 'rgba(10, 14, 24, 0.82)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.25s ease',
                touchAction: 'manipulation'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.25)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 14, 24, 0.82)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption & Mobile Swipe Hint */}
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              textAlign: 'center',
              zIndex: 10005,
              padding: '0.4rem 1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)',
                color: '#ffffff',
                fontWeight: 500,
                lineHeight: 1.2
              }}
            >
              {currentImage.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.68rem, 2vw, 0.75rem)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.08em',
                marginTop: '0.2rem'
              }}
            >
              {currentImage.subtitle}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
}
