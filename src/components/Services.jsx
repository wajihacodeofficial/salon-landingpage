import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const categories = [
  {
    id: '01', title: 'Hair',
    sub: 'Colour & Styling',
    image: '/images/services/service_hair_1790503225495.jpg',
    desc: 'From signature blowouts to dimensional balayage, experience expert styling.',
  },
  {
    id: '02', title: 'Skin + Spa',
    sub: 'Glow & Restore',
    image: '/images/services/service_skin_1790503238327.jpg',
    desc: 'Revitalizing treatments, including our signature Korean Spa experiences.',
  },
  {
    id: '03', title: 'Nails',
    sub: 'Details & Polish',
    image: '/images/services/service_nails_1790503248112.jpg',
    desc: 'Classic manicures, pedicures, and flawless acrylic extensions.',
  },
  {
    id: '04', title: 'Makeup + Bridal',
    sub: 'Occasion Beauty',
    image: '/images/services/service_makeup_1790503261551.jpg',
    desc: 'Perfectly crafted looks for your most important events.',
  },
  {
    id: '05', title: 'Brows + Threading',
    sub: 'Define & Shape',
    image: '/images/services/service_brows_1790503274327.jpg',
    desc: 'Precise shaping and threading to enhance your natural features.',
  },
  {
    id: '06', title: 'Waxing',
    sub: 'Smooth & Refined',
    image: '/images/services/service_waxing_1790503290405.jpg',
    desc: 'Professional body waxing for lasting smooth results.',
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="services" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className="services__header reveal">
          <span className="label" style={{ color: 'var(--champagne)' }}>What We Offer</span>
          <h2 className="display-lg services__headline">
            Beauty, beautifully<br /><em>covered.</em>
          </h2>
        </div>

        {/* Card Grid */}
        <div className="services__grid">
          {categories.map((cat, i) => (
            <a 
              href="#booking" 
              key={i} 
              className={`services__card reveal delay-${(i % 3) + 1}`}
            >
              <div className="services__card-img-wrap">
                <img src={cat.image} alt={cat.title} className="services__card-img" loading="lazy" />
              </div>
              <div className="services__card-content">
                <div className="services__card-top">
                  <span className="services__card-num">{cat.id}</span>
                  <span className="services__card-sub">{cat.sub}</span>
                </div>
                <h3 className="services__card-title">{cat.title}</h3>
                <p className="services__card-desc">{cat.desc}</p>
                <div className="services__card-arrow">→</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="services__cta reveal">
          <a href="#booking" className="btn btn-outline-light btn-arrow">VIEW FULL MENU</a>
        </div>
      </div>
    </section>
  );
}
