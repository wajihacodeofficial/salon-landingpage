import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function NailsFeature() {
  const ref = useReveal();
  return (
    <section id="nailsfeature" className="feature-section" ref={ref} style={{ background: 'var(--nude)', borderTop: '1px solid rgba(41,35,33,0.05)' }}>
      <div className="wrap reveal">
        <div className="feature-section__header" style={{ marginBottom: '5rem', maxWidth: '400px' }}>
          <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>03 — Nails</span>
          <h2 className="display-md feature-section__headline">
            Details worth noticing.
          </h2>
        </div>
        
        <div className="feature-section__grid reveal delay-1">
          <div className="feature-section__grid-item">
            <span className="feature-section__grid-num">01</span>
            <h3 className="feature-section__grid-title">ACRYLIC NAILS</h3>
            <p className="feature-section__grid-desc">Expertly crafted extensions for a flawless, long-lasting finish.</p>
          </div>
          <div className="feature-section__grid-item">
            <span className="feature-section__grid-num">02</span>
            <h3 className="feature-section__grid-title">MANICURE</h3>
            <p className="feature-section__grid-desc">Classic hand care to keep your nails healthy and elegant.</p>
          </div>
          <div className="feature-section__grid-item">
            <span className="feature-section__grid-num">03</span>
            <h3 className="feature-section__grid-title">PEDICURE</h3>
            <p className="feature-section__grid-desc">Relaxing foot care treatments for ultimate smoothness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
