import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function HairFeature() {
  const ref = useReveal();
  return (
    <section id="hairfeature" className="feature-section" ref={ref}>
      <div className="wrap feature-section__inner reveal">
        <div className="feature-section__left">
          <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>01 — Hair</span>
          <h2 className="display-md feature-section__headline">
            Hair that feels<br />like you.
          </h2>
          <a href="#booking" className="label" style={{ color: 'var(--espresso)', borderBottom: '1px solid currentColor', paddingBottom: '2px', display: 'inline-block' }}>
            EXPLORE HAIR SERVICES
          </a>
        </div>
        <div className="feature-section__right reveal delay-1">
          <ul className="feature-section__list">
            {['Balayage', 'Blow Dry', 'Braids', 'Hairstyling', 'Shampoo & Conditioning', 'Hair Threading'].map((s, i) => (
              <li key={i} className="feature-section__list-item">
                <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--champagne)' }} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
