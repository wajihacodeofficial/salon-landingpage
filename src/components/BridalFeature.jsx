import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function BridalFeature() {
  const ref = useReveal();
  return (
    <section id="bridalfeature" className="feature-section" ref={ref} style={{ background: 'var(--ivory)' }}>
      <div className="wrap feature-section__inner reveal">
        <div className="feature-section__left">
          <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>04 — Bridal</span>
          <h2 className="display-md feature-section__headline">
            Your most beautiful<br />moments deserve artistry.
          </h2>
          <p className="body-lg" style={{ color: 'rgba(41,35,33,0.7)', marginBottom: '3rem' }}>
            From elegant makeup to complete bridal beauty preparation, create a look that feels unmistakably yours.
          </p>
          <a href="#booking" className="label" style={{ color: 'var(--espresso)', borderBottom: '1px solid currentColor', paddingBottom: '2px', display: 'inline-block' }}>
            BOOK BRIDAL CONSULTATION
          </a>
        </div>
        <div className="feature-section__right reveal delay-1">
          <ul className="feature-section__list">
            <li className="feature-section__list-item" style={{ border: 'none', paddingBottom: '2rem' }}>
              <span className="feature-section__grid-num" style={{ width: '40px' }}>01</span>
              <span>Bridal Services</span>
            </li>
            <li className="feature-section__list-item" style={{ border: 'none', paddingBottom: '2rem' }}>
              <span className="feature-section__grid-num" style={{ width: '40px' }}>02</span>
              <span>Make-up Services</span>
            </li>
            <li className="feature-section__list-item" style={{ border: 'none', paddingBottom: '2rem' }}>
              <span className="feature-section__grid-num" style={{ width: '40px' }}>03</span>
              <span>Hair Styling</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
