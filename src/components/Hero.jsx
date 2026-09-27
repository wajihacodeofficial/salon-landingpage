import React from 'react';
import { salonImages } from '../config/images';

export default function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.overlay}></div>
      <img src={salonImages.hero} alt="Nida's Salon Interior" style={styles.backgroundImage} />
      
      <div style={styles.contentContainer} className="container fade-in">
        <span className="label-uppercase" style={styles.eyebrow}>Nida's Salon • Karachi</span>
        
        <h1 className="heading-xl" style={styles.headline}>
          Where Elegance<br />Meets Artistry.
        </h1>
        
        <p style={styles.supportingCopy}>
          Discover a world of beauty crafted exclusively for you.
        </p>
        
        <div style={styles.ctaGroup}>
          <a href="#booking" className="btn btn-primary" style={styles.btnPrimary}>Book Your Appointment</a>
          <a href="#services" className="btn btn-secondary" style={styles.btnSecondary}>Explore Services</a>
        </div>

        <div style={styles.bottomInfo}>
          <div style={styles.infoBlock}>
            <span className="label-uppercase">Karachi</span>
            <span style={styles.infoDetail}>12 PM — 9 PM</span>
          </div>
          <div style={styles.infoBlockRight}>
            <span className="label-uppercase" style={styles.servicesLabel}>Hair • Skin • Nails • Makeup • Spa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'var(--color-espresso)',
    color: 'var(--color-ivory)',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    opacity: 0.6,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(41, 35, 33, 0.55)',
    zIndex: 2,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingTop: '80px', // account for nav
  },
  eyebrow: {
    color: 'var(--color-champagne)',
    marginBottom: '1.5rem',
    display: 'block',
  },
  headline: {
    color: 'var(--color-white)',
    marginBottom: '1.5rem',
  },
  supportingCopy: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    maxWidth: '500px',
    marginBottom: '3rem',
    opacity: 0.9,
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: 'auto', // Pushes bottom info down if needed, but flex-direction might need adjusting
  },
  btnPrimary: {
    backgroundColor: 'var(--color-champagne)',
    color: 'var(--color-espresso)',
  },
  btnSecondary: {
    borderColor: 'var(--color-ivory)',
    color: 'var(--color-ivory)',
  },
  bottomInfo: {
    marginTop: 'auto',
    paddingBottom: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '100%',
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  infoDetail: {
    fontFamily: 'var(--font-sans)',
  },
  infoBlockRight: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  servicesLabel: {
    color: 'var(--color-champagne)',
    opacity: 0.8,
  }
};
