import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('filciaps@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:filciaps@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2rem, 5vw, 3.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="section-tag"
            style={{ justifyContent: 'center' }}
          >
            COMMUNICATION · GET IN TOUCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Let's <span className="gold-text">Connect</span>
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
            For conversations, opportunities or simply to say hello.
          </motion.p>
        </div>

        {/* Quick Action Buttons Group: Email Me, Call, Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
            width: '100%'
          }}
          className="contact-quick-actions"
        >
          <a
            href="mailto:filciaps@gmail.com"
            className="btn-primary contact-action-btn"
            style={{ minHeight: '48px', padding: '0.85rem 1.6rem' }}
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="tel:8891986204"
            className="btn-secondary contact-action-btn"
            style={{ minHeight: '48px', padding: '0.85rem 1.6rem' }}
          >
            <Phone size={16} /> Call
          </a>
          <a
            href="https://www.instagram.com/filziyahhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary contact-action-btn"
            style={{ minHeight: '48px', padding: '0.85rem 1.6rem' }}
          >
            <InstagramIcon size={16} /> Instagram
          </a>
        </motion.div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.75rem, 4vw, 3rem)',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
            className="contact-cards-col"
          >
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-primary)'
                    }}
                  >
                    <Mail size={17} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    EMAIL INQUIRIES
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? '#38e58a' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    padding: '0.3rem 0.5rem',
                    transition: 'color 0.2s ease',
                    touchAction: 'manipulation'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href="mailto:filciaps@gmail.com"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'color 0.2s ease',
                  wordBreak: 'break-all'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                filciaps@gmail.com <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
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
                    width: 36,
                    height: 36,
                    minWidth: 36,
                    borderRadius: '10px',
                    background: 'rgba(112, 153, 194, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--sky-blue)'
                  }}
                >
                  <Phone size={17} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  DIRECT PHONE
                </span>
              </div>

              <a
                href="tel:8891986204"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                +91 8891986204 <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Instagram Social Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
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
                    width: 36,
                    height: 36,
                    minWidth: 36,
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)'
                  }}
                >
                  <InstagramIcon size={17} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  INSTAGRAM IDENTITY
                </span>
              </div>

              <a
                href="https://www.instagram.com/filziyahhh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                @filziyahhh <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Location & Academy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.65rem'
                }}
              >
                <MapPin size={17} color="var(--gold-primary)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  ACADEMIC RESIDENCE
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.86rem, 2vw, 0.92rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6
                }}
              >
                Nedumparabu, Moonniyur, Malappuram
                <br />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  Kerala, India – 676311
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right Column: Direct Mail Composer Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase'
                  }}
                >
                  DISPATCH DIRECT TRANSMISSION
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
                    color: '#fff',
                    marginTop: '0.35rem',
                    fontWeight: 500
                  }}
                >
                  Send a Message
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                    color: 'var(--text-secondary)',
                    marginTop: '0.35rem',
                    fontWeight: 300
                  }}
                >
                  Composes directly into your email client to reach Filciya PS.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <label
                      htmlFor="sender-name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        background: 'rgba(7, 10, 18, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        background: 'rgba(7, 10, 18, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sender-subject"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="sender-subject"
                    type="text"
                    required
                    placeholder="Regarding Aviation Studies / Connection"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(7, 10, 18, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sender-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="sender-message"
                    required
                    rows={4}
                    placeholder="Hello Filciya, I came across your portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(7, 10, 18, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.25s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.35rem',
                    minHeight: '48px'
                  }}
                >
                  Send Transmission <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-cards-col,
          .contact-form-col {
            grid-column: 1 / -1 !important;
          }
        }

        @media (max-width: 520px) {
          .contact-quick-actions {
            flex-direction: column !important;
          }
          .contact-action-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
