import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const categories = [
  {
    id: '01', title: 'Hair',
    image: '/images/services/service_hair_1790503225495.jpg',
    anchor: '#hair',
  },
  {
    id: '02', title: 'Skin + Spa',
    image: '/images/services/service_skin_1790503238327.jpg',
    anchor: '#skin',
  },
  {
    id: '03', title: 'Nails',
    image: '/images/services/service_nails_1790503248112.jpg',
    anchor: '#nails',
  },
  {
    id: '04', title: 'Makeup + Bridal',
    image: '/images/services/service_makeup_1790503261551.jpg',
    anchor: '#bridal',
  },
  {
    id: '05', title: 'Brows + Threading',
    image: '/images/services/service_brows_1790503274327.jpg',
    anchor: '#brows',
  },
  {
    id: '06', title: 'Waxing',
    image: '/images/services/service_waxing_1790503290405.jpg',
    anchor: '#waxing',
  },
];

export default function Services() {
  const ref = useReveal();
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="services" className="services" ref={ref}>
      <div className="wrap">
        <div className="services__header reveal">
          <span className="section-eyebrow" style={{ color: 'var(--champagne)' }}>What We Offer</span>
        </div>

        <div className="services__layout">
          {/* Left: Interactive List */}
          <div className="services__list">
            {categories.map((cat, i) => {
              const isHovered = hoveredIdx === i;
              const isFaded = hoveredIdx !== null && hoveredIdx !== i;
              
              return (
                <a
                  href={cat.anchor}
                  key={cat.id}
                  className={`services__list-item reveal delay-${i + 1}`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  style={{ opacity: isFaded ? 0.3 : 1 }}
                >
                  <div className="services__list-left">
                    <span className="services__list-num">{cat.id}</span>
                    <span className="services__list-title">{cat.title}</span>
                  </div>
                  <span className="services__list-arrow">→</span>
                </a>
              );
            })}
          </div>

          {/* Right: Dynamic Image Display */}
          <div className="services__image-wrapper reveal delay-3">
            {categories.map((cat, i) => (
              <img
                key={cat.id}
                src={cat.image}
                alt={cat.title}
                className={`services__image ${hoveredIdx === i ? 'is-active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="services__cta reveal delay-4">
          <a href="#booking" className="btn btn-outline-light btn-arrow">
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
}
