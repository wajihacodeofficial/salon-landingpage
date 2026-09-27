import React from 'react';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding container" style={styles.section}>
      <div style={styles.header}>
        <h2 className="heading-lg" style={styles.headline}>Loved by our clients.</h2>
        <div style={styles.stats}>
          <span style={styles.score}>4.9 / 5</span>
          <span className="label-uppercase" style={styles.reviewCount}>142 Reviews</span>
        </div>
      </div>

      <div style={styles.grid}>
        {[
          "Relaxing atmosphere and professional service.",
          "Quality beauty services and very knowledgeable staff.",
          "Clean and tidy environment. Gentle and attentive service.",
        ].map((quote, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.quote}>"{quote}"</p>
          </div>
        ))}
      </div>

      <div style={styles.ctaContainer}>
        <a href="https://g.page/nidassalon" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">READ ALL REVIEWS</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-nude)',
    textAlign: 'center',
  },
  header: {
    marginBottom: '4rem',
  },
  headline: {
    marginBottom: '1rem',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  score: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
  },
  reviewCount: {
    color: 'var(--color-espresso)',
    opacity: 0.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  card: {
    backgroundColor: 'var(--color-ivory)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  stars: {
    color: 'var(--color-champagne)',
    letterSpacing: '0.2em',
  },
  quote: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    fontStyle: 'italic',
  },
  ctaContainer: {
    marginTop: '2rem',
  }
};
