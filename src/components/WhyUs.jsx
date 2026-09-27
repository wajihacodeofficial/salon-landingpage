import React from 'react';

const reasons = [
  {
    number: '01',
    title: 'COMPLETE BEAUTY CARE',
    description: 'Hair, skin, nails, makeup, spa and beauty services.'
  },
  {
    number: '02',
    title: 'PERSONALIZED EXPERIENCE',
    description: 'Services designed around each client\'s preferences and occasion.'
  },
  {
    number: '03',
    title: 'BRIDAL BEAUTY',
    description: 'Dedicated services for important celebrations.'
  },
  {
    number: '04',
    title: 'MODERN BEAUTY SERVICES',
    description: 'Balayage, acrylic nails, Korean spa, makeup and contemporary beauty treatments.'
  },
  {
    number: '05',
    title: 'BEAUTY UNDER ONE ROOF',
    description: 'Multiple beauty categories available in one salon.'
  }
];

export default function WhyUs() {
  return (
    <section id="whyus" className="section-padding container" style={styles.section}>
      <h2 className="heading-lg" style={styles.headline}>Why Nida's Salon</h2>
      
      <div style={styles.list}>
        {reasons.map((reason, index) => (
          <div key={index} style={styles.listItem}>
            <div style={styles.number}>{reason.number}</div>
            <div style={styles.content}>
              <h3 style={styles.title}>{reason.title}</h3>
              <p style={styles.desc}>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-ivory)',
  },
  headline: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: '0 auto',
  },
  listItem: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem 0',
    borderBottom: '1px solid var(--color-nude)',
  },
  number: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--color-champagne)',
    paddingTop: '0.25rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  title: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  desc: {
    opacity: 0.8,
  }
};
