import React from 'react';
import { motion } from 'motion/react';
import { Plane, BookOpen, Compass, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    tag: 'AERONAUTICS',
    title: 'Aviation',
    description: 'A field of study and growing passion, shaped by the wonders of modern aeronautics and global connectivity.',
    icon: Plane,
    accent: 'var(--gold-primary)'
  },
  {
    tag: 'DISCIPLINE',
    title: 'Learning',
    description: 'Building knowledge, personal discipline, and calm confidence through structured education at Alpha Academy.',
    icon: BookOpen,
    accent: 'var(--sky-blue)'
  },
  {
    tag: 'FUTURE',
    title: 'Journey',
    description: 'A personal path toward future opportunities, advancing steadily one step and one milestone at a time.',
    icon: Compass,
    accent: '#f3e5ab'
  }
];

export default function Personality() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
            style={{ justifyContent: 'center' }}
          >
            PHILOSOPHY · GUIDING PILLARS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Beyond The <span className="gold-text">Horizon</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: '0 auto'
            }}
          >
            Core values that fuel her perspective as an 18-year-old student discovering the world of flight.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="glass-panel"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle gold top border indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: item.accent,
                    opacity: 0.6
                  }}
                />

                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2rem'
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color={item.accent} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.85rem',
                      color: '#fff',
                      marginBottom: '1rem',
                      fontWeight: 500
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.96rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      fontWeight: 300
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '2.5rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>ALPHA CADET VALUE</span>
                  <span style={{ color: item.accent }}>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
