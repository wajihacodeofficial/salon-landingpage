import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './QuickDiscovery.css';

const services = [
  { name: 'HAIR', href: '#hair' },
  { name: 'SKIN + SPA', href: '#skin' },
  { name: 'NAILS', href: '#nails' },
  { name: 'MAKEUP', href: '#makeup' },
  { name: 'BRIDAL', href: '#bridal' },
  { name: 'WAXING', href: '#waxing' },
];

export default function QuickDiscovery() {
  const ref = useReveal();

  return (
    <section className="quick-discovery" ref={ref}>
      <div className="wrap">
        <h2 className="label quick-discovery__title reveal">
          WHAT ARE YOU LOOKING FOR?
        </h2>
        <div className="quick-discovery__links reveal delay-1">
          {services.map((s, i) => (
            <React.Fragment key={s.name}>
              <a href={s.href} className="quick-discovery__link">
                {s.name}
              </a>
              {i < services.length - 1 && (
                <span className="quick-discovery__sep">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
