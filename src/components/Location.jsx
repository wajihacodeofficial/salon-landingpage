import React from 'react';

export default function Location() {
  return (
    <section id="location" style={styles.section}>
      <div className="container" style={styles.inner}>
        {/* Left: address block */}
        <div style={styles.left}>
          <span className="label-uppercase" style={styles.eyebrow}>Find Us</span>
          <h2 className="heading-lg" style={styles.headline}>Come visit us.</h2>

          <div style={styles.details}>
            <p style={styles.salonName}>Nida's Salon</p>
            <p style={styles.address}>
              Shop No. 01, Ground Floor,<br />
              Plot No. 362, Decent Heights,<br />
              near Mazar-e-Quaid,<br />
              Cosmopolitan Society,<br />
              Amil Colony, Karachi 75300.
            </p>
          </div>

          <div style={styles.meta}>
            <div style={styles.metaRow}>
              <span className="label-uppercase" style={styles.metaLabel}>Phone</span>
              <a href="tel:03012992766" style={styles.metaValue}>0301 2992766</a>
            </div>
            <div style={styles.metaRow}>
              <span className="label-uppercase" style={styles.metaLabel}>Hours</span>
              <span style={styles.metaValue}>12:00 PM — 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right: action buttons */}
        <div style={styles.right}>
          <a href="tel:03012992766" className="btn btn-secondary" style={styles.btn}>
            CALL NOW
          </a>
          <a
            href="https://www.google.com/maps/search/Nida's+Salon+Decent+Heights+Amil+Colony+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={styles.btn}
          >
            GET DIRECTIONS
          </a>
          <a href="#booking" className="btn btn-primary" style={styles.btn}>
            BOOK APPOINTMENT
          </a>
          <a
            href="https://wa.me/923012992766?text=Hello%20Nida's%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20the%20available%20timings."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={styles.btn}
          >
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-ivory)',
    padding: '6rem 0',
    borderTop: '1px solid var(--color-nude)',
    borderBottom: '1px solid var(--color-nude)',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5rem',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  left: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  eyebrow: {
    color: 'var(--color-champagne)',
  },
  headline: {
    marginTop: '-0.5rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  salonName: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
  },
  address: {
    lineHeight: 2,
    opacity: 0.7,
    fontSize: '0.9375rem',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderTop: '1px solid var(--color-nude)',
    paddingTop: '2rem',
  },
  metaRow: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'baseline',
  },
  metaLabel: {
    color: 'var(--color-champagne)',
    minWidth: '60px',
  },
  metaValue: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9375rem',
    color: 'var(--color-espresso)',
    textDecoration: 'none',
  },
  right: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'stretch',
    minWidth: '220px',
  },
  btn: {
    textAlign: 'center',
    justifyContent: 'center',
  },
};
