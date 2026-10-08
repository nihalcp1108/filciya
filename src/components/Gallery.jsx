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
    aspect: '3/4',
    gridClass: 'gallery-large'
  },
  {
    id: 2,
    src: img2,
    title: 'Skybound Vision',
    subtitle: 'Aviator Persona · Sunlight & Poise',
    tag: 'AVIATOR AURA',
    aspect: '4/5',
    gridClass: 'gallery-medium-1'
  },
  {
    id: 3,
    src: img3,
    title: 'Grace in Profile',
    subtitle: 'Tradition & Composure',
    tag: 'CONTEMPLATION',
    aspect: '4/5',
    gridClass: 'gallery-medium-2'
  },
  {
    id: 4,
    src: img4,
    title: 'Reflective Moments',
    subtitle: 'Heritage Setting · Grounded Ambition',
    tag: 'HERITAGE & CALM',
    aspect: '3/4',
    gridClass: 'gallery-bottom-1'
  },
  {
    id: 5,
    src: img5,
    title: 'Golden Daylight',
    subtitle: 'Ivory Silhouette · Forward Steps',
    tag: 'HORIZONS',
    aspect: '3/4',
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
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            VISUAL ARCHIVE · PORTFOLIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Curated <span className="gold-text">Moments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
          >
            An editorial selection of portraits celebrating poise, individuality, and personal presence.
          </motion.p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="editorial-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className={`gallery-card interactive ${photo.gridClass}`}
              onClick={() => handleOpenLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
              }}
            >
              {/* Photo Image */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: index === 0 ? '540px' : '360px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="gallery-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 25%',
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
                      'linear-gradient(to top, rgba(6, 8, 14, 0.9) 0%, rgba(6, 8, 14, 0.2) 40%, transparent 80%)',
                    transition: 'opacity 0.4s ease'
                  }}
                />

                {/* Top Tag Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(8, 12, 20, 0.75)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  <Sparkles size={11} />
                  <span>{photo.tag}</span>
                </div>

                {/* Expand Icon Button (Hover reveal) */}
                <div
                  className="gallery-zoom-btn"
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(8, 12, 20, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    transition: 'transform 0.3s ease, opacity 0.3s ease'
                  }}
                >
                  <Maximize2 size={16} />
                </div>

                {/* Bottom Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    transform: 'translateY(0)',
                    transition: 'transform 0.4s ease'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#fff',
                      fontWeight: 500,
                      marginBottom: '0.25rem'
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
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

      {/* Lightbox Modal */}
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
        }
        .gallery-large {
          grid-column: span 7;
          grid-row: span 2;
        }
        .gallery-medium-1 {
          grid-column: span 5;
        }
        .gallery-medium-2 {
          grid-column: span 5;
        }
        .gallery-bottom-1 {
          grid-column: span 6;
        }
        .gallery-bottom-2 {
          grid-column: span 6;
        }

        .gallery-card:hover {
          border-color: rgba(212, 175, 55, 0.4) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.1) !important;
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.05);
          filter: brightness(1.05);
        }
        .gallery-card:hover .gallery-zoom-btn {
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .editorial-gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-large,
          .gallery-medium-1,
          .gallery-medium-2,
          .gallery-bottom-1,
          .gallery-bottom-2 {
            grid-column: span 1 !important;
            grid-row: auto !important;
          }
          .gallery-card div {
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
