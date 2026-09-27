import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './TrustStrip.css';

export default function TrustStrip() {
  const ref = useReveal();

  return (
    <section className="trust" ref={ref}>
      <div className="trust__inner wrap">
        {[
          { value: '4.9★', label: 'Google Rating' },
          { value: '142', label: 'Client Reviews' },
          { value: '12 – 9 PM', label: 'Open Daily' },
          { value: 'Karachi', label: 'Amil Colony' },
        ].map((item, i) => (
          <div key={i} className={`trust__item reveal delay-${i + 1}`}>
            <span className="trust__value">{item.value}</span>
            <span className="label trust__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
