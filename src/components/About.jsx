import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" style={{ background: 'var(--ivory)', padding: '7rem 0' }} ref={ref}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 340px' }}>
          <span className="label reveal" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>The Nida's Experience</span>
          <h2 className="display-lg reveal delay-1" style={{ maxWidth: '480px' }}>
            Beauty,<br />thoughtfully<br /><em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>crafted around you.</em>
          </h2>
        </div>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p className="body-lg reveal" style={{ maxWidth: '420px', opacity: 0.75 }}>
            At Nida's Salon, every appointment is an opportunity to slow down, feel genuinely cared for, and enjoy a beauty experience designed entirely around you.
          </p>
          <a href="#services" className="reveal delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--espresso)', paddingBottom: '2px', width: 'fit-content', transition: 'gap 0.3s ease' }}>
            DISCOVER NIDA'S SALON <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
