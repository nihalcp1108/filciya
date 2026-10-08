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
      if (window.scrollY > 40) {
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
          zIndex: 900,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '0.75rem 0' : '1.5rem 0'
        }}
      >
        <div className="container">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isScrolled ? '0.6rem 1.4rem' : '0.8rem 1.2rem',
              borderRadius: '9999px',
              background: isScrolled ? 'rgba(8, 11, 18, 0.82)' : 'transparent',
              backdropFilter: isScrolled ? 'blur(16px)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
              border: isScrolled ? '1px solid rgba(212, 175, 55, 0.16)' : '1px solid transparent',
              boxShadow: isScrolled ? '0 12px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
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
                  borderRadius: '50%',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(212, 175, 55, 0.08)'
                }}
              >
                <Compass size={16} color="var(--gold-primary)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
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
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
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
                gap: '2rem'
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                    position: 'relative'
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
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.75rem',
                  gap: '0.4rem'
                }}
              >
                Connect <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              className="mobile-burger-btn"
            >
              {mobileMenuOpen ? <X size={20} color="var(--gold-primary)" /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'radial-gradient(circle at 50% 30%, #0d1322 0%, #06080e 100%)',
              zIndex: 899,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.75rem',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
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
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 300,
                    letterSpacing: '0.04em'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Let's Connect <ArrowUpRight size={16} />
              </motion.a>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.15em'
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
