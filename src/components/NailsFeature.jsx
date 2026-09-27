import React from 'react';

const services = [
  { name: 'Acrylic Nails', desc: 'Expertly crafted extensions for a flawless, long-lasting finish.' },
  { name: 'Manicure',      desc: 'Classic hand care to keep your nails healthy and elegant.' },
  { name: 'Pedicure',      desc: 'Relaxing foot care treatments for ultimate smoothness.' },
];

export default function NailsFeature() {
  return (
    <section id="nailsfeature" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.header}>
          <span className="label-uppercase" style={styles.eyebrow}>03 — Nails</span>
          <h2 className="heading-lg" style={styles.headline}>Details worth noticing.</h2>
        </div>

        <div style={styles.cards}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <span style={styles.cardNumber}>0{i + 1}</span>
              <h3 style={styles.cardTitle}>{s.name}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-ivory)',
    borderTop: '1px solid var(--color-nude)',
    borderBottom: '1px solid var(--color-nude)',
    padding: '5rem 0',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  eyebrow: {
    color: 'var(--color-champagne)',
  },
  headline: {
    maxWidth: '500px',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0',
    borderTop: '1px solid var(--color-nude)',
  },
  card: {
    padding: '2.5rem 2rem 2.5rem 0',
    borderRight: '1px solid var(--color-nude)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  cardNumber: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    color: 'var(--color-champagne)',
    letterSpacing: '0.08em',
  },
  cardTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.125rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  cardDesc: {
    fontSize: '0.9375rem',
    opacity: 0.7,
    lineHeight: 1.7,
  },
};
