import React, { useEffect } from 'react';
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
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2000,
          background: 'rgba(5, 7, 12, 0.94)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem',
          boxSizing: 'border-box'
        }}
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Compass size={18} color="var(--gold-primary)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase'
              }}
            >
              PORTRAIT ARCHIVE · {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Center Stage: Image & Navigation */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: '1rem 0'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={onPrev}
            aria-label="Previous Image"
            style={{
              position: 'absolute',
              left: '1rem',
              zIndex: 20,
              background: 'rgba(10, 14, 24, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 14, 24, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Active Image with Transition */}
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: '85vw',
              maxHeight: '75vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.25)'
              }}
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            aria-label="Next Image"
            style={{
              position: 'absolute',
              right: '1rem',
              zIndex: 20,
              background: 'rgba(10, 14, 24, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 14, 24, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '650px',
            margin: '0 auto',
            zIndex: 10
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: '#fff',
              fontWeight: 500
            }}
          >
            {currentImage.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.1em',
              marginTop: '0.25rem'
            }}
          >
            {currentImage.subtitle}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
