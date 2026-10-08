import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, User, MapPin } from 'lucide-react';
import aboutImg from '../assets/photos/photo_6190346092285726777_x.jpg';

const stats = [
  { label: 'Age', value: '18', detail: 'Years Old', icon: User },
  { label: 'Born', value: '2007', detail: '26 December', icon: Calendar },
  { label: 'Academy', value: 'Alpha', detail: 'Tirur, Malappuram', icon: GraduationCap },
  { label: 'Focus', value: 'Aviation', detail: 'Student', icon: MapPin }
];

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            DISCOVERY · THE INDIVIDUAL
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            More Than A <span className="gold-text">Destination</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
          >
            A dedicated student embracing the discipline, elegance, and limitless possibilities of aviation.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Portrait Column */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative'
            }}
            className="about-image-col"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 20px 45px -15px rgba(0,0,0,0.7)'
              }}
            >
              <img
                src={aboutImg}
                alt="Filciya PS portrait in traditional attire"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />

              {/* Minimal floating caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem',
                  background: 'linear-gradient(to top, rgba(6, 8, 14, 0.9) 0%, transparent 100%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      color: '#fff'
                    }}
                  >
                    Filciya PS
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    PORTRAIT · EDITORIAL
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  MALAPPURAM
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial Text & Stat Cards */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
            className="about-text-col"
          >
            {/* Primary Editorial Description */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              style={{
                borderLeft: '2px solid var(--gold-primary)',
                paddingLeft: '1.75rem'
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  fontWeight: 300,
                  fontFamily: 'var(--font-sans)',
                  marginBottom: '1rem'
                }}
              >
                Filciya PS is an aviation student currently pursuing her studies at{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>Alpha Academy, Tirur</strong>.
                With a growing interest in aviation and the world beyond the horizon, she is building
                her knowledge, confidence and experience toward a future in the aviation industry.
              </p>
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  fontWeight: 300
                }}
              >
                Grounded in determination and cultural warmth from Malappuram, Kerala, her path is
                defined by curiosity for the skies and steady academic dedication.
              </p>
            </motion.div>

            {/* Information Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    className="glass-panel"
                    style={{
                      padding: '1.25rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'var(--gold-primary)'
                      }}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.9rem',
                        fontWeight: 600,
                        lineHeight: 1,
                        color: '#fff',
                        marginTop: '0.25rem'
                      }}
                    >
                      {stat.value}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {stat.detail}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-image-col,
          .about-text-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
