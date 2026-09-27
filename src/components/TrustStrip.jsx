import React from 'react';

export default function TrustStrip() {
  return (
    <section style={styles.strip} className="container">
      <div style={styles.item}>
        <span style={styles.value}>4.9 ★</span>
        <span className="label-uppercase" style={styles.label}>Google Rating</span>
      </div>
      <div style={styles.divider}></div>
      <div style={styles.item}>
        <span style={styles.value}>142</span>
        <span className="label-uppercase" style={styles.label}>Reviews</span>
      </div>
      <div style={styles.divider}></div>
      <div style={styles.item}>
        <span style={styles.value}>12 PM — 9 PM</span>
        <span className="label-uppercase" style={styles.label}>Opening Hours</span>
      </div>
      <div style={styles.divider}></div>
      <div style={styles.item}>
        <span style={styles.value}>KARACHI</span>
        <span className="label-uppercase" style={styles.label}>Amil Colony</span>
      </div>
    </section>
  );
}

const styles = {
  strip: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem 5%',
    borderBottom: '1px solid var(--color-nude)',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1',
    minWidth: '150px',
  },
  value: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    color: 'var(--color-espresso)',
    marginBottom: '0.5rem',
  },
  label: {
    color: 'var(--color-champagne)',
  },
  divider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'var(--color-nude)',
    display: 'none', // Can use media queries to show on desktop
  }
};
