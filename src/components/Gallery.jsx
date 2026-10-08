import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Sparkles } from 'lucide-react';
import Lightbox from './Lightbox';

import img1 from '../assets/photos/IMG_20250331_213846.jpg';
import img2 from '../assets/photos/photo_6172472538635028065_y.jpg';
import img3 from '../assets/photos/photo_6190346092285726777_x.jpg';
import img4 from '../assets/photos/photo_6107373556120798455_y.jpg';
import img5 from '../assets/photos/photo_6190346092285726773_y.jpg';

const galleryPhotos = [
  {
    id: 1,
    src: img1,
    title: 'Serenity & Poise',
    subtitle: 'Alpha Academy Student · Malappuram, Kerala',
    tag: 'EDITORIAL PORTRAIT',
    gridClass: 'gallery-large'
  },
  {
    id: 2,
    src: img2,
    title: 'Skybound Vision',
    subtitle: 'Aviator Persona · Sunlight & Poise',
    tag: 'AVIATOR AURA',
    gridClass: 'gallery-medium-1'
  },
  {
    id: 3,
    src: img3,
    title: 'Grace in Profile',
    subtitle: 'Tradition & Composure',
    tag: 'CONTEMPLATION',
    gridClass: 'gallery-medium-2'
  },
  {
    id: 4,
    src: img4,
    title: 'Reflective Moments',
    subtitle: 'Heritage Setting · Grounded Ambition',
    tag: 'HERITAGE & CALM',
    gridClass: 'gallery-bottom-1'
  },
  {
    id: 5,
    src: img5,
    title: 'Golden Daylight',
    subtitle: 'Ivory Silhouette · Forward Steps',
    tag: 'HORIZONS',
    gridClass: 'gallery-bottom-2'
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleOpenLightbox = (index) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            VISUAL ARCHIVE · PORTFOLIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Curated <span className="gold-text">Moments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
          >
            An editorial selection of portraits celebrating poise, individuality, and personal presence.
          </motion.p>
        </div>

        {/* Responsive Editorial Gallery Grid */}
        <div className="editorial-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className={`gallery-card interactive ${photo.gridClass}`}
              onClick={() => handleOpenLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease'
              }}
            >
              <div className="gallery-inner-wrap">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="gallery-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease'
                  }}
                  loading="lazy"
                />

                {/* Soft Vignette Gradient */}
                <div
                  className="gallery-gradient"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(6, 8, 14, 0.92) 0%, rgba(6, 8, 14, 0.25) 45%, transparent 80%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Top Tag Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    background: 'rgba(8, 12, 20, 0.78)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    zIndex: 2
                  }}
                >
                  <Sparkles size={11} />
                  <span>{photo.tag}</span>
                </div>

                {/* Expand Icon Button */}
                <div
                  className="gallery-zoom-btn"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(8, 12, 20, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    zIndex: 2
                  }}
                >
                  <Maximize2 size={15} />
                </div>

                {/* Bottom Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    zIndex: 2
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
                      color: '#ffffff',
                      fontWeight: 500,
                      marginBottom: '0.2rem',
                      lineHeight: 1.25
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (rendered via Portal into document.body) */}
      <Lightbox
        images={galleryPhotos}
        currentIndex={activePhotoIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <style>{`
        .editorial-gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
          width: 100%;
        }

        .gallery-inner-wrap {
          width: 100%;
          height: 100%;
          min-height: 380px;
          position: relative;
          overflow: hidden;
        }

        /* Desktop Layout (7/5/5/6/6) */
        @media (min-width: 961px) {
          .gallery-large {
            grid-column: span 7;
            grid-row: span 2;
          }
          .gallery-large .gallery-inner-wrap {
            min-height: 560px;
          }
          .gallery-medium-1,
          .gallery-medium-2 {
            grid-column: span 5;
          }
          .gallery-bottom-1,
          .gallery-bottom-2 {
            grid-column: span 6;
          }
        }

        /* Tablet Layout (2 Columns) */
        @media (min-width: 601px) and (max-width: 960px) {
          .editorial-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .gallery-large {
            grid-column: 1 / -1;
          }
          .gallery-large .gallery-inner-wrap {
            min-height: 440px;
          }
          .gallery-medium-1,
          .gallery-medium-2,
          .gallery-bottom-1,
          .gallery-bottom-2 {
            grid-column: span 1;
          }
          .gallery-inner-wrap {
            min-height: 360px;
          }
        }

        /* Mobile Layout (1 Column Natural Proportions) */
        @media (max-width: 600px) {
          .editorial-gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .gallery-large,
          .gallery-medium-1,
          .gallery-medium-2,
          .gallery-bottom-1,
          .gallery-bottom-2 {
            grid-column: 1 / -1;
          }
          .gallery-inner-wrap {
            min-height: 340px;
            aspect-ratio: 4/5;
          }
        }

        .gallery-card:hover {
          border-color: rgba(212, 175, 55, 0.45) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.12) !important;
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.05);
          filter: brightness(1.04);
        }
        .gallery-card:hover .gallery-zoom-btn {
          transform: scale(1.1);
          background-color: rgba(212, 175, 55, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
