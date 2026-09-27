import React from 'react';

export default function HairFeature() {
  return (
    <section id="hairfeature" style={styles.section}>
      <div className="container" style={styles.inner}>
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>01 — Hair</span>
          <h2 className="heading-lg" style={styles.headline}>
            Hair that feels<br />like you.
          </h2>
          <a href="#services" className="btn btn-secondary" style={styles.cta}>
            EXPLORE HAIR SERVICES
          </a>
        </div>

        <ul style={styles.list}>
          {['Balayage', 'Blow Dry', 'Braids', 'Hairstyling', 'Shampoo & Conditioning', 'Hair Threading'].map((s, i) => (
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
    backgroundColor: 'var(--color-ivory)',
    borderTop: '1px solid var(--color-nude)',
    borderBottom: '1px solid var(--color-nude)',
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
    maxWidth: '360px',
  },
  cta: {},
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
    borderBottom: '1px solid var(--color-nude)',
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
