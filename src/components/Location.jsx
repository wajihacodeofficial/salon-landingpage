import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Location() {
  const ref = useReveal();
  return (
    <section id="contact" style={{ background: 'var(--espresso)', color: 'var(--ivory)', padding: '7rem 0' }} ref={ref}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 340px' }}>
          <span className="label reveal" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>Find Us</span>
          <h2 className="display-lg reveal delay-1" style={{ color: 'var(--white)', marginBottom: '3rem' }}>Come<br />visit us.</h2>
          <div className="reveal delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.5rem' }}>Address</p>
              <p className="body-sm" style={{ opacity: 0.7, lineHeight: 1.9 }}>
                Shop No. 01, Ground Floor,<br />
                Plot No. 362, Decent Heights,<br />
                near Mazar-e-Quaid,<br />
                Cosmopolitan Society, Amil Colony,<br />
                Karachi 75300, Pakistan.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.4rem' }}>Phone</p>
                <a href="tel:03012992766" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', opacity: 0.7, color: 'inherit', textDecoration: 'none' }}>0301 2992766</a>
              </div>
              <div>
                <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.4rem' }}>Hours</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', opacity: 0.7 }}>12:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '220px', justifyContent: 'flex-end' }}>
          {[
            { label: 'CALL NOW', href: 'tel:03012992766', style: 'btn-outline-light' },
            { label: 'GET DIRECTIONS', href: 'https://www.google.com/maps/search/Nida\'s+Salon+Decent+Heights+Amil+Colony+Karachi', style: 'btn-outline-light' },
            { label: 'WHATSAPP', href: 'https://wa.me/923012992766?text=Hello%20Nida\'s%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.', style: 'btn-outline-light' },
            { label: 'BOOK APPOINTMENT', href: '#booking', style: 'btn-dark' },
          ].map((b, i) => (
            <a
              key={i}
              href={b.href}
              target={b.href.startsWith('http') ? '_blank' : undefined}
              rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`btn ${b.style} reveal`}
              style={{ justifyContent: 'center', transitionDelay: `${0.1 * i}s` }}
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
