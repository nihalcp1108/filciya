import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Plane } from 'lucide-react';
import FlightPath from './FlightPath';
import heroImg from '../assets/photos/IMG_20250331_213846.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'max(5.5rem, calc(env(safe-area-inset-top, 0px) + 4.5rem))',
        paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
        overflow: 'hidden'
      }}
    >
      {/* Background Animated Flight Path */}
      <FlightPath />

      {/* Atmospheric Radial Shimmers */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 'clamp(280px, 40vw, 500px)',
          height: 'clamp(280px, 40vw, 500px)',
          background: 'radial-gradient(circle, rgba(112, 153, 194, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 'clamp(260px, 35vw, 450px)',
          height: 'clamp(260px, 35vw, 450px)',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Typography */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2
            }}
            className="hero-content"
          >
            {/* Small Label Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                width: 'fit-content',
                maxWidth: '100%',
                marginBottom: 'clamp(1rem, 2.5vw, 1.75rem)'
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  minWidth: 6,
                  borderRadius: '50%',
                  background: '#d4af37',
                  boxShadow: '0 0 8px #d4af37'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
                  letterSpacing: '0.16em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                Aviation Student · Alpha Academy
              </span>
            </motion.div>

            {/* Large Editorial Heading */}
            <div style={{ overflow: 'hidden', marginBottom: '0.15rem' }}>
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.75rem, 10.5vw, 7.5rem)',
                  fontWeight: 400,
                  lineHeight: 0.96,
                  letterSpacing: '-0.03em',
                  color: '#ffffff'
                }}
              >
                FILCIYA
              </motion.h1>
            </div>

            <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}>
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                  flexWrap: 'wrap'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.75rem, 10.5vw, 7.5rem)',
                    fontWeight: 300,
                    lineHeight: 0.96,
                    letterSpacing: '-0.02em',
                    color: 'var(--gold-primary)',
                    fontStyle: 'italic'
                  }}
                >
                  PS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)',
                    letterSpacing: '0.22em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  · MALAPPURAM, IN
                </span>
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                fontSize: 'clamp(0.98rem, 2.2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                fontWeight: 300,
                marginBottom: 'clamp(1.75rem, 3.5vw, 2.5rem)'
              }}
            >
              Learning to turn a passion for aviation into a journey among the skies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center'
              }}
            >
              <a href="#journey" className="btn-primary hero-btn">
                Explore My Journey <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary hero-btn">
                Get in Touch
              </a>
            </motion.div>

            {/* Editorial Coordinates / Technical Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem 1rem',
                marginTop: 'clamp(2rem, 4vw, 3.5rem)',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.64rem, 1.8vw, 0.7rem)',
                letterSpacing: '0.14em',
                color: 'var(--text-muted)'
              }}
            >
              <span>10.9760° N, 75.9255° E</span>
              <span>·</span>
              <span>ALPHA CADET · 2026</span>
              <span>·</span>
              <span style={{ color: 'var(--gold-primary)' }}>ACTIVE STUDIES</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative'
            }}
            className="hero-image-col"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
                margin: '0 auto'
              }}
            >
              {/* Outer Luxury Frame Border */}
              <div
                className="hero-frame-border"
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '22px',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* Corner Accents */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  width: '24px',
                  height: '24px',
                  borderTop: '2px solid var(--gold-primary)',
                  borderLeft: '2px solid var(--gold-primary)',
                  zIndex: 3
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '24px',
                  height: '24px',
                  borderBottom: '2px solid var(--gold-primary)',
                  borderRight: '2px solid var(--gold-primary)',
                  zIndex: 3
                }}
              />

              {/* Image Container with Soft Shadow */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#0b0f19',
                  boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.08)',
                  aspectRatio: '3/4',
                  width: '100%'
                }}
              >
                <img
                  src={heroImg}
                  alt="Filciya PS - Aviation Student"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 18%',
                    display: 'block'
                  }}
                  loading="eager"
                />

                {/* Subtle vignette gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 8, 14, 0.72) 0%, transparent 45%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Bottom Card: Student Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.75 }}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(8, 12, 20, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(212, 175, 55, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        borderRadius: '50%',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plane size={14} color="var(--gold-primary)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#fff',
                          lineHeight: 1.2
                        }}
                      >
                        Alpha Academy
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: 'var(--gold-primary)',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Tirur, Malappuram
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    18 YRS
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.35rem',
            marginTop: 'clamp(2rem, 5vw, 3.5rem)',
            width: '100%'
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'var(--text-muted)',
              padding: '0.5rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} color="var(--gold-primary)" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-content {
            grid-column: 1 / -1 !important;
            text-align: left;
          }
          .hero-image-col {
            grid-column: 1 / -1 !important;
            order: -1;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-frame-border {
            inset: -6px !important;
          }
        }
      `}</style>
    </section>
  );
}
