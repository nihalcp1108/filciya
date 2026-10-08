import React from 'react';
import { motion } from 'motion/react';
import { Compass, GraduationCap, Sparkles, MapPin } from 'lucide-react';
import journeyImg from '../assets/photos/photo_6107373556120798455_y.jpg';

const timelineSteps = [
  {
    year: '2007',
    date: '26 December 2007',
    title: 'Beginnings in Kerala',
    location: 'Moonniyur, Malappuram',
    description:
      'Born in Malappuram, Kerala, cultivating foundational values, cultural depth, and early curiosity for the boundless world outside.',
    icon: Sparkles
  },
  {
    year: 'Present',
    date: 'Current Chapter',
    title: 'Aviation Studies',
    location: 'Alpha Academy, Tirur',
    description:
      'Immersed in aviation education at Alpha Academy. Developing technical acumen, discipline, communication poise, and industry awareness.',
    icon: GraduationCap
  },
  {
    year: 'Horizon',
    date: 'Continuous Growth',
    title: 'Skybound Evolution',
    location: 'Aviation Industry Aspirations',
    description:
      'Steadily building knowledge and self-confidence toward a lasting career among the global aviation landscape.',
    icon: Compass
  }
];

export default function Journey() {
  return (
    <section id="journey" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            CHRONOLOGY · PROGRESSION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            The Flight Path <span className="gold-text">So Far</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
          >
            A truthful chronicle of education, identity, and personal milestones in Malappuram, Kerala.
          </motion.p>
        </div>

        {/* 2-Column Layout: Timeline & Heritage Photograph */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="journey-grid"
        >
          {/* Left: Timeline */}
          <div style={{ gridColumn: 'span 7' }} className="journey-timeline-col">
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Vertical Progress Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  bottom: '1rem',
                  left: '11px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #d4af37 0%, rgba(212, 175, 55, 0.2) 100%)',
                  transformOrigin: 'top'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {timelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.year}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, delay: idx * 0.18 }}
                      style={{ position: 'relative' }}
                    >
                      {/* Node Dot */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '-2rem',
                          top: '0.25rem',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'var(--bg-primary)',
                          border: '2px solid var(--gold-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#d4af37'
                          }}
                        />
                      </div>

                      {/* Content Card */}
                      <div
                        className="glass-panel"
                        style={{
                          padding: '1.75rem',
                          marginLeft: '0.5rem'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            gap: '0.5rem',
                            marginBottom: '0.75rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: 'var(--gold-primary)'
                              }}
                            >
                              {step.year}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                color: 'var(--text-muted)'
                              }}
                            >
                              · {step.date}
                            </span>
                          </div>

                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: 'var(--sky-blue)'
                            }}
                          >
                            <MapPin size={12} /> {step.location}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.45rem',
                            color: '#fff',
                            marginBottom: '0.6rem',
                            fontWeight: 500
                          }}
                        >
                          {step.title}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.92rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            fontWeight: 300
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Heritage Editorial Portrait */}
          <div style={{ gridColumn: 'span 5' }} className="journey-photo-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={journeyImg}
                alt="Filciya PS in traditional purple attire on heritage steps"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />

              {/* Bottom Quote Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.75rem',
                  background: 'linear-gradient(to top, rgba(6, 8, 14, 0.95) 0%, transparent 100%)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.95)',
                    lineHeight: 1.6,
                    marginBottom: '0.4rem'
                  }}
                >
                  "Grounding in one's roots gives the wings to fly higher."
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}
                >
                  FILCIYA PS · MALAPPURAM
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
          }
          .journey-timeline-col,
          .journey-photo-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
