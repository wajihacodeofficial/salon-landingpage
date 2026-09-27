import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const categories = [
  {
    id: '01',
    title: 'Hair',
    desc: 'Balayage · Blow Dry · Braids · Hairstyling · Shampoo & Conditioning · Hair Threading',
    image: '/images/services/service_hair_1790503225495.jpg',
    anchor: '#hair',
  },
  {
    id: '02',
    title: 'Skin + Spa',
    desc: 'Korean Spa · Acne Treatments · Hair & Skin Analysis',
    image: '/images/services/service_skin_1790503238327.jpg',
    anchor: '#skin',
  },
  {
    id: '03',
    title: 'Nails',
    desc: 'Acrylic Nails · Manicure · Pedicure',
    image: '/images/services/service_nails_1790503248112.jpg',
    anchor: '#nails',
  },
  {
    id: '04',
    title: 'Makeup + Bridal',
    desc: 'Bridal Services · Make-up Services · Hair Styling',
    image: '/images/services/service_makeup_1790503261551.jpg',
    anchor: '#bridal',
  },
  {
    id: '05',
    title: 'Brows + Threading',
    desc: 'Eyebrow Beautification · Eyebrow Shaping · Eyebrow Threading',
    image: '/images/services/service_brows_1790503274327.jpg',
    anchor: '#brows',
  },
  {
    id: '06',
    title: 'Waxing',
    desc: 'Body Waxing · Brazilian Waxing · Waxing · Massage',
    image: '/images/services/service_waxing_1790503290405.jpg',
    anchor: '#waxing',
  },
];

const allServices = [
  'Acne Treatments', 'Acrylic Nails', 'Balayage', 'Blow Dry',
  'Body Waxing', 'Braids', 'Brazilian Waxing', 'Bridal Services',
  'Eyebrow Beautification', 'Eyebrow Shaping', 'Eyebrow Threading',
  'Hairstyling', 'Hair Threading', 'Hair & Skin Analysis',
  'Korean Spa', 'Make-up Services', 'Manicure', 'Massage',
  'Pedicure', 'Shampoo & Conditioning', 'Waxing',
];

export default function Services() {
  const ref = useReveal();
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="services" className="services" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className="services__header reveal">
          <span className="section-eyebrow" style={{ color: 'var(--champagne)' }}>What We Offer</span>
          <h2 className="display-sm services__headline reveal delay-1">
            Hair, skin, nails, makeup, bridal<br />and spa — all in one salon.
          </h2>
        </div>

        {/* ── MOBILE ONLY: 2-column card grid ── */}
        <div className="services__card-grid">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={cat.anchor}
              className="services__card reveal"
            >
              <div className="services__card-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="services__card-img"
                  loading="lazy"
                />
                <span className="services__card-num">{cat.id}</span>
              </div>
              <div className="services__card-body">
                <h3 className="services__card-title">{cat.title}</h3>
                <p className="services__card-desc">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── DESKTOP ONLY: interactive hover list + image ── */}
        <div className="services__layout">
          {/* Left: Interactive List */}
          <div className="services__list">
            {categories.map((cat, i) => {
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
                    <div className="services__list-text">
                      <span className="services__list-title">{cat.title}</span>
                      <span className="services__list-desc">{cat.desc}</span>
                    </div>
                  </div>
                  <span className="services__list-arrow">→</span>
                </a>
              );
            })}
          </div>

          {/* Right: Dynamic hover image */}
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

        {/* Full services tag list */}
        <div className="services__full reveal delay-4">
          <p className="label" style={{ color: 'var(--champagne)', marginBottom: '1.5rem', letterSpacing: '0.12em' }}>
            ALL SERVICES
          </p>
          <div className="services__tags">
            {allServices.map(s => (
              <a key={s} href="#booking" className="services__tag">{s}</a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="services__cta reveal delay-5">
          <a href="#booking" className="btn btn-outline-light btn-arrow">
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>
    </section>
  );
}
