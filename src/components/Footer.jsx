import React from 'react';
import './Features.css';

/* ─── SVG Icons ─── */
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#2a1f1a', paddingTop: '0' }}>
      <div className="wrap" style={{ padding: '5rem 2rem 3rem' }}>
        <div className="footer" style={{ borderBottom: '1px solid rgba(200,170,135,0.15)', paddingBottom: '4rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div className="footer__brand">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--champagne)', marginBottom: '1rem' }}>
              NIDA'S SALON
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(248,244,239,0.55)', marginBottom: '2rem' }}>
              "Where elegance meets artistry."
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/nidasbeautysalon/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram — @nidasbeautysalon"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(248,244,239,0.75)', textDecoration: 'none',
                  fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: '1px solid rgba(200,170,135,0.3)', borderRadius: '50px',
                  padding: '0.65rem 1.2rem', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,170,135,0.15)'; e.currentTarget.style.color = 'var(--champagne)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(248,244,239,0.75)'; }}
              >
                <InstagramIcon /> @nidasbeautysalon
              </a>
              <a
                href="https://www.facebook.com/nidasbeautysalon"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook — Nida's Beauty Salon"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(248,244,239,0.75)', textDecoration: 'none',
                  fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: '1px solid rgba(200,170,135,0.3)', borderRadius: '50px',
                  padding: '0.65rem 1.2rem', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,170,135,0.15)'; e.currentTarget.style.color = 'var(--champagne)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(248,244,239,0.75)'; }}
              >
                <FacebookIcon /> Nida's Beauty Salon
              </a>
              <a
                href="https://wa.me/923012992766?text=Hello%20Nida's%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp — 0301 2992766"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(248,244,239,0.75)', textDecoration: 'none',
                  fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: '1px solid rgba(200,170,135,0.3)', borderRadius: '50px',
                  padding: '0.65rem 1.2rem', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,170,135,0.15)'; e.currentTarget.style.color = 'var(--champagne)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(248,244,239,0.75)'; }}
              >
                <WhatsAppIcon /> 0301 2992766
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer__nav">
            <div className="footer__col">
              <h4 style={{ color: 'var(--champagne)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>NAVIGATION</h4>
              <ul className="footer__links" style={{ '--link-color': 'rgba(248,244,239,0.55)' }}>
                <li><a href="#" style={{ color: 'rgba(248,244,239,0.55)' }}>Home</a></li>
                <li><a href="#about" style={{ color: 'rgba(248,244,239,0.55)' }}>About</a></li>
                <li><a href="#services" style={{ color: 'rgba(248,244,239,0.55)' }}>Services</a></li>
                <li><a href="#bridal" style={{ color: 'rgba(248,244,239,0.55)' }}>Bridal</a></li>
                <li><a href="#gallery" style={{ color: 'rgba(248,244,239,0.55)' }}>Gallery</a></li>
                <li><a href="#reviews" style={{ color: 'rgba(248,244,239,0.55)' }}>Reviews</a></li>
                <li><a href="#contact" style={{ color: 'rgba(248,244,239,0.55)' }}>Contact</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 style={{ color: 'var(--champagne)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>SERVICES</h4>
              <ul className="footer__links">
                <li><a href="#hair" style={{ color: 'rgba(248,244,239,0.55)' }}>Hair</a></li>
                <li><a href="#skin" style={{ color: 'rgba(248,244,239,0.55)' }}>Skin</a></li>
                <li><a href="#nails" style={{ color: 'rgba(248,244,239,0.55)' }}>Nails</a></li>
                <li><a href="#makeup" style={{ color: 'rgba(248,244,239,0.55)' }}>Makeup</a></li>
                <li><a href="#bridal" style={{ color: 'rgba(248,244,239,0.55)' }}>Bridal</a></li>
                <li><a href="#spa" style={{ color: 'rgba(248,244,239,0.55)' }}>Spa</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 style={{ color: 'var(--champagne)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>CONTACT</h4>
              <ul className="footer__links">
                <li style={{ color: 'rgba(248,244,239,0.55)' }}>0301 2992766</li>
                <li style={{ color: 'rgba(248,244,239,0.55)' }}>Amil Colony, Karachi</li>
                <li style={{ color: 'rgba(248,244,239,0.55)' }}>12 PM — 9 PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(248,244,239,0.35)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Nida's Salon. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(248,244,239,0.35)', letterSpacing: '0.05em' }}>
            Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
