import React from 'react';

export default function SkinFeature() {
  return (
    <section id="skinfeature" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>02 — Skin & Wellness</span>
          <h2 className="heading-lg" style={styles.headline}>
            Give your skin<br />a moment of its own.
          </h2>
          <p style={styles.copy}>
            Experience rejuvenating skincare and wellness services designed to restore your natural glow.
          </p>
        </div>

        <ul style={styles.list}>
          {['Korean Spa', 'Acne Treatments', 'Hair & Skin Analysis'].map((s, i) => (
            <li key={i} style={styles.listItem}>
              <span style={styles.dot} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-nude)',
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
    gap: '1.5rem',
    flex: '1 1 300px',
  },
  eyebrow: {
    color: 'var(--color-espresso)',
    opacity: 0.6,
  },
  headline: {
    maxWidth: '360px',
  },
  copy: {
    opacity: 0.75,
    maxWidth: '340px',
    lineHeight: 1.8,
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    flex: '1 1 260px',
  },
  listItem: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.0625rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.875rem',
    paddingBottom: '1.25rem',
    borderBottom: '1px solid rgba(41,35,33,0.12)',
  },
  dot: {
    display: 'inline-block',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-champagne)',
    flexShrink: 0,
  },
};
