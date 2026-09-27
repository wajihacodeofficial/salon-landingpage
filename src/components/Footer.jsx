import React from 'react';
import './Features.css';

/* ─── SVG Icons ─── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

/* Shared pill button style */
const pillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.55rem',
  width: '100%',
  height: '44px',
  color: 'rgba(248,244,239,0.8)',
  textDecoration: 'none',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  border: '1px solid rgba(200,170,135,0.28)',
  borderRadius: '50px',
  padding: '0 1.25rem',
  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
  whiteSpace: 'nowrap',
};

const pillHover = (e) => {
  e.currentTarget.style.background = 'rgba(200,170,135,0.18)';
  e.currentTarget.style.color = 'var(--champagne)';
  e.currentTarget.style.borderColor = 'rgba(200,170,135,0.6)';
};
const pillLeave = (e) => {
  e.currentTarget.style.background = 'transparent';
  e.currentTarget.style.color = 'rgba(248,244,239,0.8)';
  e.currentTarget.style.borderColor = 'rgba(200,170,135,0.28)';
};

const socialLinks = [
  {
    icon: <InstagramIcon />,
    label: '@nidasbeautysalon',
    href: 'https://www.instagram.com/nidasbeautysalon/',
  },
  {
    icon: <FacebookIcon />,
    label: "Nida's Beauty Salon",
    href: 'https://www.facebook.com/nidasbeautysalon',
  },
  {
    icon: <WhatsAppIcon />,
    label: '0301 2992766',
    href: "https://wa.me/923012992766?text=Hello%20Nida's%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  },
  {
    icon: <PhoneIcon />,
    label: 'Call Us',
    href: 'tel:03012992766',
  },
  {
    icon: <MapPinIcon />,
    label: 'Get Directions',
    href: "https://www.google.com/maps/search/Nida's+Salon+Decent+Heights+Amil+Colony+Karachi",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#2a1f1a', paddingTop: '0' }}>
      <div className="wrap" style={{ padding: '5rem 2rem 3rem' }}>
        <div className="footer" style={{ borderBottom: '1px solid rgba(200,170,135,0.15)', paddingBottom: '4rem', marginBottom: '3rem' }}>

          {/* Brand + Pill Buttons */}
          <div className="footer__brand">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--champagne)', marginBottom: '1rem' }}>
              NIDA'S SALON
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(248,244,239,0.5)', marginBottom: '2rem' }}>
              "Where elegance meets artistry."
            </p>

            {/* Uniform pill buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', maxWidth: '380px' }}>
              {socialLinks.map(({ icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    ...pillStyle,
                    /* last item spans both columns if odd */
                    ...(i === socialLinks.length - 1 && socialLinks.length % 2 !== 0
                      ? { gridColumn: '1 / -1' }
                      : {}),
                  }}
                  onMouseEnter={pillHover}
                  onMouseLeave={pillLeave}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer__nav">
            <div className="footer__col">
              <h4 style={{ color: 'var(--champagne)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>NAVIGATION</h4>
              <ul className="footer__links">
                {[['#', 'Home'], ['#about', 'About'], ['#services', 'Services'], ['#bridal', 'Bridal'], ['#gallery', 'Gallery'], ['#reviews', 'Reviews'], ['#booking', 'Book']].map(([href, label]) => (
                  <li key={label}><a href={href} style={{ color: 'rgba(248,244,239,0.55)' }}>{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 style={{ color: 'var(--champagne)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>SERVICES</h4>
              <ul className="footer__links">
                {['Hair', 'Skin', 'Nails', 'Makeup', 'Bridal', 'Spa'].map(s => (
                  <li key={s}><a href={`#${s.toLowerCase()}`} style={{ color: 'rgba(248,244,239,0.55)' }}>{s}</a></li>
                ))}
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
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(248,244,239,0.3)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Nida's Salon. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(248,244,239,0.3)', letterSpacing: '0.05em' }}>
            Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
