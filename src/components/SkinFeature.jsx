import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function SkinFeature() {
  const ref = useReveal();
  return (
    <section id="skinfeature" className="feature-section" ref={ref}>
      <div className="wrap feature-section__inner reveal">
        <div className="feature-section__left">
          <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>02 — Skin & Wellness</span>
          <h2 className="display-md feature-section__headline">
            Give your skin<br />a moment of its own.
          </h2>
          <p className="body-lg" style={{ color: 'rgba(41,35,33,0.7)' }}>
            Experience rejuvenating skincare and wellness services designed to restore your natural glow.
          </p>
        </div>
        <div className="feature-section__right reveal delay-1">
          <ul className="feature-section__list">
            {['Korean Spa', 'Acne Treatments', 'Hair & Skin Analysis'].map((s, i) => (
              <li key={i} className="feature-section__list-item">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
