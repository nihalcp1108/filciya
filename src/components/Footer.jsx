import React from 'react';
import { Mail, Phone, Plane, ArrowUp, Compass } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: '#04060a',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom, 2.5rem))',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Gold Glow Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)',
          boxShadow: '0 0 15px #d4af37'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5rem'
          }}
        >
          {/* Main Footer Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2.5rem'
            }}
          >
            {/* Brand Signature */}
            <div style={{ maxWidth: '380px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}
                >
                  <Plane size={16} color="var(--gold-primary)" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                    color: '#fff'
                  }}
                >
                  FILCIYA PS
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1rem'
                }}
              >
                Aviation student at Alpha Academy, Tirur. Striving for discipline, knowledge, and
                poise across every elevation of life.
              </p>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase'
                }}
              >
                AVIATION STUDENT · MALAPPURAM, KERALA
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem'
                }}
              >
                SECTIONS
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem'
                }}
              >
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About Filciya', href: '#about' },
                  { name: 'Aviation Focus', href: '#aviation' },
                  { name: 'Flight Path So Far', href: '#journey' },
                  { name: 'Photo Gallery', href: '#gallery' },
                  { name: 'Connect', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Channels & Back to Top */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem'
                  }}
                >
                  DIRECT CHANNELS
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href="https://www.instagram.com/filziyahhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      e.currentTarget.style.color = 'var(--gold-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <InstagramIcon size={18} />
                  </a>

                  <a
                    href="mailto:filciaps@gmail.com"
                    aria-label="Email Filciya PS"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      e.currentTarget.style.color = 'var(--gold-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <Mail size={18} />
                  </a>

                  <a
                    href="tel:8891986204"
                    aria-label="Call Filciya PS"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      e.currentTarget.style.color = 'var(--gold-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>

              {/* Back to top button */}
              <button
                type="button"
                onClick={scrollToTop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'transparent',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  color: 'var(--gold-light)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                }}
              >
                <span>ASCEND TO TOP</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Coordinates Bar */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}
          >
            <div>© 2026 Filciya PS. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <span>LAT 10.9760° N</span>
              <span>LON 75.9255° E</span>
              <span style={{ color: 'var(--gold-primary)' }}>ALPHA CADET</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
