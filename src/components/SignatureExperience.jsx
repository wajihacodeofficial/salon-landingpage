import React from 'react';

const pillars = [
  { id: '01', label: 'HAIR',   items: ['Balayage', 'Blow Dry', 'Braids', 'Hairstyling'] },
  { id: '02', label: 'SKIN',   items: ['Korean Spa', 'Acne Treatments', 'Skin Analysis'] },
  { id: '03', label: 'NAILS',  items: ['Acrylic Nails', 'Manicure', 'Pedicure'] },
  { id: '04', label: 'MAKEUP', items: ['Make-up Services', 'Bridal Services'] },
  { id: '05', label: 'SPA',    items: ['Massage', 'Body Waxing', 'Waxing'] },
];

export default function SignatureExperience() {
  return (
    <section id="signature" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <span className="label-uppercase" style={styles.eyebrow}>The Nida's Touch</span>
          <h2 className="heading-lg" style={styles.headline}>
            More than a beauty appointment.
          </h2>
          <p style={styles.subline}>
            From the first consultation to the finishing touch, every detail is part of your experience.
          </p>
        </div>

        {/* Pillars */}
        <div style={styles.pillars}>
          {pillars.map((p) => (
            <div key={p.id} style={styles.pillar}>
              <div style={styles.pillarTop}>
                <span style={styles.pillarNum}>{p.id}</span>
                <span className="label-uppercase" style={styles.pillarLabel}>{p.label}</span>
              </div>
              <ul style={styles.pillarList}>
                {p.items.map((item, i) => (
                  <li key={i} style={styles.pillarItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-espresso)',
    color: 'var(--color-ivory)',
    padding: '6rem 0',
  },
  header: {
    maxWidth: '600px',
    marginBottom: '4rem',
  },
  eyebrow: {
    display: 'inline-block',
    color: 'var(--color-champagne)',
    marginBottom: '1.25rem',
  },
  headline: {
    color: 'var(--color-white)',
    marginBottom: '1.25rem',
  },
  subline: {
    opacity: 0.65,
    lineHeight: 1.8,
    fontSize: '1rem',
  },
  pillars: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    borderTop: '1px solid rgba(248,244,239,0.12)',
  },
  pillar: {
    padding: '2.5rem 1.5rem 2.5rem 0',
    borderRight: '1px solid rgba(248,244,239,0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  pillarTop: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  pillarNum: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6875rem',
    color: 'var(--color-champagne)',
    letterSpacing: '0.1em',
  },
  pillarLabel: {
    fontSize: '0.75rem',
    color: 'var(--color-ivory)',
  },
  pillarList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  pillarItem: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    opacity: 0.6,
  },
};
