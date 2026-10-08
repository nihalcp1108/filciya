import React from 'react';
import { motion } from 'motion/react';
import { Compass, Navigation, Plane } from 'lucide-react';
import aviatorImg from '../assets/photos/photo_6172472538635028065_y.jpg';

const statementLines = ['THE JOURNEY', 'STARTS', 'BEFORE', 'THE TAKEOFF.'];

export default function Aviation() {
  return (
    <section
      id="aviation"
      className="section"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #06080e 0%, #0a0e19 50%, #06080e 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Radial Backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 60vw, 700px)',
          height: 'clamp(300px, 60vw, 700px)',
          background: 'radial-gradient(circle, rgba(112, 153, 194, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(2.5rem, 6vw, 4.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
            style={{ justifyContent: 'center' }}
          >
            ASPIRATION · PASSION FOR AERONAUTICS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Into The <span className="gold-text">Skies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: '0 auto'
            }}
          >
            An early chapter in a journey shaped by curiosity, ambition and a fascination with aviation.
          </motion.p>
        </div>

        {/* Large Statement Scroll Reveal */}
        <div
          style={{
            margin: 'clamp(2rem, 5vw, 3.5rem) 0 clamp(3rem, 7vw, 5rem)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem'
          }}
        >
          {statementLines.map((line, index) => (
            <div key={line} style={{ overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.9rem, 6.2vw, 5.2rem)',
                  fontWeight: index === 3 ? 600 : 300,
                  letterSpacing: index === 3 ? '0.04em' : '0.02em',
                  color: index === 3 ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.92)',
                  fontStyle: index % 2 === 1 ? 'italic' : 'normal',
                  lineHeight: 1.15
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Aviation Interactive Grid: Boarding Pass & Visual Elements */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.75rem, 4vw, 2.5rem)',
            alignItems: 'center'
          }}
          className="aviation-grid"
        >
          {/* Left: Aviator Persona Showcase */}
          <div style={{ gridColumn: 'span 6' }} className="aviation-photo-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: '0 20px 45px -12px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={aviatorImg}
                alt="Filciya PS with aviator sunglasses"
                style={{
                  width: '100%',
                  height: 'clamp(360px, 55vw, 520px)',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block'
                }}
                loading="lazy"
              />

              {/* Decorative HUD Telemetry Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 8, 14, 0.88) 0%, transparent 42%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Decorative Compass Circle in Corner */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(8, 12, 20, 0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.1em'
                }}
              >
                <Compass size={13} className="compass-spin" />
                <span>HDG 042° · SKIES</span>
              </div>

              {/* Bottom Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 'clamp(1rem, 3vw, 1.5rem)',
                  left: 'clamp(1rem, 3vw, 1.5rem)',
                  right: 'clamp(1rem, 3vw, 1.5rem)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                    color: '#fff',
                    marginBottom: '0.15rem'
                  }}
                >
                  Clear Horizons
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.08em'
                  }}
                >
                  INSPIRATION & COURAGE TOWARD THE SKIES
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Boarding-Pass & Aeronautical Card Motif */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            className="aviation-data-col"
          >
            {/* Editorial Boarding Pass */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1 }}
              style={{
                borderRadius: '18px',
                background: 'rgba(12, 17, 29, 0.88)',
                border: '1px solid rgba(212, 175, 55, 0.28)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Pass Top Bar */}
              <div
                style={{
                  padding: 'clamp(0.9rem, 2vw, 1.25rem) clamp(1.15rem, 3vw, 1.75rem)',
                  background: 'rgba(212, 175, 55, 0.08)',
                  borderBottom: '1px dashed rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Plane size={16} color="var(--gold-primary)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
                      letterSpacing: '0.14em',
                      color: 'var(--gold-primary)',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    BOARDING RECORD · CADET
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em'
                  }}
                >
                  ALPHA-2026
                </span>
              </div>

              {/* Pass Content Body */}
              <div style={{ padding: 'clamp(1.15rem, 3vw, 1.75rem)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.15em',
                        display: 'block'
                      }}
                    >
                      ORIGIN
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                        color: '#fff',
                        fontWeight: 600,
                        lineHeight: 1.1
                      }}
                    >
                      TIRUR
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--gold-primary)',
                        display: 'block'
                      }}
                    >
                      Alpha Academy
                    </span>
                  </div>

                  {/* Flight Route Icon */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <Plane
                      size={18}
                      color="var(--gold-primary)"
                      style={{ transform: 'rotate(90deg)' }}
                    />
                    <div
                      style={{
                        width: 'clamp(40px, 12vw, 80px)',
                        height: '1px',
                        borderTop: '1px dashed rgba(212, 175, 55, 0.4)'
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        color: 'var(--sky-blue)',
                        letterSpacing: '0.1em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      DIRECT EXPEDITION
                    </span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.15em',
                        display: 'block'
                      }}
                    >
                      DESTINATION
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                        color: '#fff',
                        fontWeight: 600,
                        lineHeight: 1.1
                      }}
                    >
                      THE SKIES
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--gold-primary)',
                        display: 'block'
                      }}
                    >
                      Aviation Horizon
                    </span>
                  </div>
                </div>

                {/* Details Matrix */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))',
                    gap: '0.85rem',
                    paddingTop: '1.15rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        display: 'block'
                      }}
                    >
                      PASSENGER
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        color: '#fff',
                        fontWeight: 600
                      }}
                    >
                      Filciya PS
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        display: 'block'
                      }}
                    >
                      DESIGNATION
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        color: 'var(--gold-light)',
                        fontWeight: 600
                      }}
                    >
                      Cadet
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        display: 'block'
                      }}
                    >
                      STATUS
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: '#38e58a',
                        fontWeight: 600
                      }}
                    >
                      LEARNING
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aeronautical Instruments & Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.15rem, 3vw, 1.75rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    borderRadius: '8px',
                    background: 'rgba(112, 153, 194, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Navigation size={15} color="var(--sky-blue)" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 500
                  }}
                >
                  Principles in Flight
                </h3>
              </div>

              <p
                style={{
                  fontSize: 'clamp(0.88rem, 2vw, 0.94rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1rem'
                }}
              >
                Aviation teaches precision, calm temperament under high standards, and unwavering
                respect for preparation. Every lecture at Alpha Academy Tirur builds the foundation
                for this lifelong pursuit.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--gold-primary)'
                }}
              >
                <span>ALT · 36,000 FT ASPIRATION</span>
                <span>·</span>
                <span>NAV · ACTIVE COURSE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotateCompass {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .compass-spin {
          animation: rotateCompass 20s linear infinite;
        }
        @media (max-width: 960px) {
          .aviation-grid {
            grid-template-columns: 1fr !important;
          }
          .aviation-photo-col,
          .aviation-data-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
