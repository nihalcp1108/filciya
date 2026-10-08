import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Aviation', href: '#aviation' },
  { name: 'Journey', href: '#journey' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original || '';
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          paddingTop: isScrolled
            ? 'max(0.6rem, env(safe-area-inset-top, 0.6rem))'
            : 'max(1.1rem, env(safe-area-inset-top, 1.1rem))',
          paddingBottom: isScrolled ? '0.6rem' : '1.1rem'
        }}
      >
        <div className="container">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isScrolled ? '0.55rem 1.25rem' : '0.75rem 1.25rem',
              borderRadius: '9999px',
              background: isScrolled ? 'rgba(8, 11, 18, 0.88)' : 'rgba(8, 11, 18, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isScrolled
                ? '1px solid rgba(212, 175, 55, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: isScrolled ? '0 12px 30px -10px rgba(0, 0, 0, 0.6)' : 'none',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Logo */}
            <a
              href="#home"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
                color: '#fff'
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  minWidth: 32,
                  borderRadius: '50%',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(212, 175, 55, 0.1)'
                }}
              >
                <Compass size={16} color="var(--gold-primary)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.05rem, 3vw, 1.25rem)',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    lineHeight: 1
                  }}
                >
                  FILCIYA PS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                    marginTop: '2px'
                  }}
                >
                  Aviation Student
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1.75rem'
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                    position: 'relative',
                    padding: '0.3rem 0'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                className="btn-primary"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.74rem',
                  minHeight: '40px',
                  gap: '0.4rem'
                }}
              >
                Connect <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '50%',
                width: 44,
                height: 44,
                minWidth: 44,
                minHeight: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                touchAction: 'manipulation'
              }}
              className="mobile-burger-btn"
            >
              <Menu size={20} color="var(--gold-primary)" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay (Layered above Navbar at z-index: 2000) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100dvh',
              minHeight: '100vh',
              background: 'radial-gradient(circle at 50% 25%, #0f1628 0%, #06080e 100%)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 'max(24px, env(safe-area-inset-top, 24px))',
              paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
              paddingLeft: 'max(20px, env(safe-area-inset-left, 20px))',
              paddingRight: 'max(20px, env(safe-area-inset-right, 20px))',
              boxSizing: 'border-box'
            }}
          >
            {/* Top Bar inside Overlay */}
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Compass size={18} color="var(--gold-primary)" />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    color: '#fff'
                  }}
                >
                  FILCIYA PS
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  minHeight: 48,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  touchAction: 'manipulation'
                }}
              >
                <X size={22} color="var(--gold-primary)" />
              </button>
            </div>

            {/* Menu Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(1rem, 3.5vh, 1.8rem)',
                textAlign: 'center',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '0.2rem'
                }}
              >
                NAVIGATION
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 6vw, 2.3rem)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    display: 'block',
                    padding: '0.25rem 1rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="btn-primary"
                style={{
                  marginTop: '0.5rem',
                  width: '100%',
                  maxWidth: '260px'
                }}
              >
                Let's Connect <ArrowUpRight size={16} />
              </motion.a>
            </div>

            {/* Bottom Footnote inside Overlay */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                textAlign: 'center'
              }}
            >
              ALPHA ACADEMY · TIRUR, KERALA
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
