import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass, Plane } from 'lucide-react';
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
        paddingTop: '6rem',
        paddingBottom: '4rem',
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
          width: '500px',
          height: '500px',
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
          width: '450px',
          height: '450px',
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
            gap: '2.5rem',
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                width: 'fit-content',
                marginBottom: '1.75rem'
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#d4af37',
                  boxShadow: '0 0 8px #d4af37'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Aviation Student · Alpha Academy
              </span>
            </motion.div>

            {/* Large Editorial Heading */}
            <div style={{ overflow: 'hidden', marginBottom: '0.2rem' }}>
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3.8rem, 8vw, 7.5rem)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  color: '#ffffff'
                }}
              >
                FILCIYA
              </motion.h1>
            </div>

            <div style={{ overflow: 'hidden', marginBottom: '1.75rem' }}>
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.5rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(3.8rem, 8vw, 7.5rem)',
                    fontWeight: 300,
                    lineHeight: 0.95,
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
                    fontSize: '0.75rem',
                    letterSpacing: '0.25em',
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                fontWeight: 300,
                marginBottom: '2.5rem'
              }}
            >
              Learning to turn a passion for aviation into a journey among the skies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a href="#journey" className="btn-primary">
                Explore My Journey <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>

            {/* Editorial Coordinates / Technical Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '3.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
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
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                maxWidth: '440px',
                margin: '0 auto'
              }}
            >
              {/* Outer Luxury Frame Border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '24px',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* Corner Accents */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '-16px',
                  width: '28px',
                  height: '28px',
                  borderTop: '2px solid var(--gold-primary)',
                  borderLeft: '2px solid var(--gold-primary)',
                  zIndex: 3
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  width: '28px',
                  height: '28px',
                  borderBottom: '2px solid var(--gold-primary)',
                  borderRight: '2px solid var(--gold-primary)',
                  zIndex: 3
                }}
              />

              {/* Image Container with Soft Shadow */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#0b0f19',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.1)',
                  aspectRatio: '3/4'
                }}
              >
                <img
                  src={heroImg}
                  alt="Filciya PS - Aviation Student"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block'
                  }}
                  loading="eager"
                />

                {/* Subtle vignette gradient overlay that leaves face clear */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 8, 14, 0.65) 0%, transparent 45%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating Bottom Card: Student Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '12px',
                    background: 'rgba(8, 12, 20, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plane size={15} color="var(--gold-primary)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#fff'
                        }}
                      >
                        Alpha Academy
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--gold-primary)',
                          letterSpacing: '0.05em'
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
                      letterSpacing: '0.1em'
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
          transition={{ delay: 1.3, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'var(--text-muted)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
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
            gap: 3.5rem !important;
          }
          .hero-content {
            grid-column: 1 / -1 !important;
            text-align: left;
          }
          .hero-image-col {
            grid-column: 1 / -1 !important;
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
