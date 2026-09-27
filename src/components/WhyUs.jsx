import React from 'react';
import { useReveal } from '../hooks/useReveal';

const points = [
  { n: '01', title: 'Personalized Beauty', desc: 'A complete experience designed around your individual preferences and occasion.' },
  { n: '02', title: 'Beauty Under One Roof', desc: 'Hair, skin, nails, makeup, bridal and spa — all in one salon.' },
  { n: '03', title: 'Bridal Beauty', desc: 'Dedicated beauty services crafted for your most important celebrations.' },
  { n: '04', title: 'Modern Services', desc: 'Balayage, Korean spa, acrylic nails and contemporary treatments.' },
  { n: '05', title: 'Local Karachi Salon', desc: 'Conveniently located in Amil Colony, near Mazar-e-Quaid, Karachi.' },
];

export default function WhyUs() {
  const ref = useReveal();
  return (
    <section id="whyus" style={{ background: 'var(--ivory)', padding: '7rem 0', borderTop: '1px solid var(--nude)' }} ref={ref}>
      <div className="wrap">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-eyebrow reveal" style={{ color: 'var(--champagne)' }}>Why Choose Us</span>
          <h2 className="display-md reveal delay-1">Why Nida's Salon.</h2>
        </div>
        <div style={{ maxWidth: '700px' }}>
          {points.map((p, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${0.1 * i}s`, display: 'flex', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid var(--nude)', alignItems: 'flex-start' }}>
              <span className="label" style={{ color: 'var(--champagne)', minWidth: '2rem', paddingTop: '3px' }}>{p.n}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p className="body-sm" style={{ opacity: 0.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
