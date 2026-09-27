import React from 'react';

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>The Nida's Experience</span>
          <h2 className="heading-lg" style={styles.headline}>
            Beauty, thoughtfully<br />crafted around you.
          </h2>
        </div>

        <div style={styles.right}>
          <p style={styles.copy}>
            At Nida's Salon, every appointment is an opportunity to slow down, feel confident and enjoy a beauty experience designed around you.
          </p>
          <a href="#services" className="btn btn-secondary">DISCOVER NIDA'S SALON</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-ivory)',
    padding: '6rem 0',
    borderBottom: '1px solid var(--color-nude)',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  left: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  eyebrow: {
    color: 'var(--color-champagne)',
  },
  headline: {
    maxWidth: '420px',
  },
  right: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    alignItems: 'flex-start',
  },
  copy: {
    fontSize: '1.0625rem',
    lineHeight: 1.85,
    opacity: 0.75,
    maxWidth: '420px',
  },
};
