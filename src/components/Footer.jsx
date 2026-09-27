import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <h2 style={styles.logo}>NIDA'S SALON</h2>
            <p style={styles.tagline}>“Where elegance meets artistry.”</p>
          </div>
          
          <div style={styles.linksContainer}>
            <div style={styles.linkGroup}>
              <h4 style={styles.linkHeader}>Navigation</h4>
              <a href="#home" style={styles.link}>Home</a>
              <a href="#about" style={styles.link}>About</a>
              <a href="#services" style={styles.link}>Services</a>
              <a href="#bridal" style={styles.link}>Bridal</a>
              <a href="#gallery" style={styles.link}>Gallery</a>
              <a href="#reviews" style={styles.link}>Reviews</a>
              <a href="#contact" style={styles.link}>Contact</a>
            </div>
            
            <div style={styles.linkGroup}>
              <h4 style={styles.linkHeader}>Services</h4>
              <span style={styles.link}>Hair</span>
              <span style={styles.link}>Skin</span>
              <span style={styles.link}>Nails</span>
              <span style={styles.link}>Makeup</span>
              <span style={styles.link}>Bridal</span>
              <span style={styles.link}>Spa</span>
            </div>
            
            <div style={styles.linkGroup}>
              <h4 style={styles.linkHeader}>Contact</h4>
              <span style={styles.link}>0301 2992766</span>
              <span style={styles.link}>Karachi, Pakistan</span>
              <span style={styles.link}>12 PM — 9 PM</span>
              <div style={styles.social}>
                <a href="https://instagram.com/nidassalon" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
                <a href="https://facebook.com/nidasbeautysalon" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p>© {new Date().getFullYear()} Nida's Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--color-ivory)',
    borderTop: '1px solid var(--color-nude)',
    paddingTop: '4rem',
    paddingBottom: '2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  },
  brand: {
    maxWidth: '300px',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '1rem',
  },
  tagline: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '1.125rem',
    opacity: 0.8,
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  linkHeader: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-champagne)',
    marginBottom: '0.5rem',
  },
  link: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: 'var(--color-espresso)',
    opacity: 0.8,
    transition: 'opacity 0.2s ease',
  },
  social: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  bottom: {
    borderTop: '1px solid var(--color-nude)',
    paddingTop: '2rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    textAlign: 'center',
    opacity: 0.6,
  }
};
