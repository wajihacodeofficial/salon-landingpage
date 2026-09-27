import React from 'react';

export default function SocialMedia() {
  return (
    <section id="social" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>Follow Along</span>
          <h2 className="heading-lg" style={styles.headline}>Follow the artistry.</h2>
          <p style={styles.copy}>
            Stay updated with our latest work, beauty tips and salon highlights on social media.
          </p>
        </div>

        <div style={styles.right}>
          <a
            href="https://instagram.com/nidassalon"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialCard}
          >
            <span style={styles.platform}>Instagram</span>
            <span style={styles.handle}>@nidassalon</span>
            <span style={styles.arrow}>→</span>
          </a>

          <a
            href="https://facebook.com/nidasbeautysalon"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialCard}
          >
            <span style={styles.platform}>Facebook</span>
            <span style={styles.handle}>Nida's Beauty Salon</span>
            <span style={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-nude)',
    padding: '6rem 0',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  eyebrow: {
    color: 'var(--color-espresso)',
    opacity: 0.55,
  },
  headline: {
    maxWidth: '360px',
  },
  copy: {
    opacity: 0.7,
    maxWidth: '360px',
    lineHeight: 1.8,
    fontSize: '0.9375rem',
  },
  right: {
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    borderTop: '1px solid rgba(41,35,33,0.15)',
  },
  socialCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.75rem 0',
    borderBottom: '1px solid rgba(41,35,33,0.15)',
    textDecoration: 'none',
    color: 'var(--color-espresso)',
    transition: 'var(--transition-smooth)',
  },
  platform: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-champagne)',
    minWidth: '80px',
  },
  handle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    flex: 1,
  },
  arrow: {
    fontSize: '1rem',
    opacity: 0.4,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
};
