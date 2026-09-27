import React from 'react';

export default function BridalFeature() {
  return (
    <section id="bridal" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>04 — Bridal</span>
          <h2 className="heading-lg" style={styles.headline}>
            Your most beautiful<br />moments deserve artistry.
          </h2>
          <p style={styles.copy}>
            From elegant makeup to complete bridal beauty preparation, create a look that feels unmistakably yours.
          </p>
          <a href="#booking" className="btn btn-primary" style={styles.cta}>
            BOOK BRIDAL CONSULTATION
          </a>
        </div>

        <div style={styles.right}>
          {['Bridal Services', 'Make-up Services', 'Hair Styling'].map((s, i) => (
            <div key={i} style={styles.serviceRow}>
              <span style={styles.serviceNum}>0{i + 1}</span>
              <span style={styles.serviceName}>{s}</span>
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
    padding: '5rem 0',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    flex: '1 1 300px',
  },
  eyebrow: {
    color: 'var(--color-champagne)',
  },
  headline: {
    color: 'var(--color-white)',
    maxWidth: '400px',
  },
  copy: {
    opacity: 0.7,
    maxWidth: '380px',
    lineHeight: 1.8,
  },
  cta: {
    alignSelf: 'flex-start',
    backgroundColor: 'var(--color-champagne)',
    color: 'var(--color-espresso)',
    border: 'none',
  },
  right: {
    flex: '1 1 260px',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid rgba(248,244,239,0.15)',
  },
  serviceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '1.75rem 0',
    borderBottom: '1px solid rgba(248,244,239,0.15)',
  },
  serviceNum: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    color: 'var(--color-champagne)',
    letterSpacing: '0.1em',
    minWidth: '2rem',
  },
  serviceName: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.0625rem',
    opacity: 0.85,
  },
};
