import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const categories = [
  {
    id: '01', title: 'Hair',
    sub: 'Colour & Styling',
    image: '/images/nidas-salon/hair.webp',
    services: ['Balayage','Blow Dry','Braids','Hairstyling','Shampoo & Conditioning','Hair Threading'],
  },
  {
    id: '02', title: 'Skin + Spa',
    sub: 'Glow & Restore',
    image: '/images/nidas-salon/spa.webp',
    services: ['Acne Treatments','Korean Spa','Hair & Skin Analysis','Massage'],
  },
  {
    id: '03', title: 'Nails',
    sub: 'Details & Polish',
    image: '/images/nidas-salon/nails.webp',
    services: ['Acrylic Nails','Manicure','Pedicure'],
  },
  {
    id: '04', title: 'Makeup + Bridal',
    sub: 'Occasion Beauty',
    image: '/images/nidas-salon/bridal.webp',
    services: ['Make-up Services','Bridal Services'],
  },
  {
    id: '05', title: 'Brows + Threading',
    sub: 'Define & Shape',
    image: '/images/nidas-salon/skin.webp',
    services: ['Eyebrow Beautification','Eyebrow Shaping','Eyebrow Threading'],
  },
  {
    id: '06', title: 'Waxing',
    sub: 'Smooth & Refined',
    image: '/images/nidas-salon/interior.webp',
    services: ['Body Waxing','Brazilian Waxing','Waxing'],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
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

        {/* Panel: list + image */}
        <div className="services__panel">
          {/* List */}
          <div className="services__list">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`services__row ${active === i ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div className="services__row-header">
                  <span className="services__num">{cat.id}</span>
                  <div className="services__row-title">
                    <h3 className="services__cat-name">{cat.title}</h3>
                    <span className="label services__sub">{cat.sub}</span>
                  </div>
                  <span className="services__row-arrow">+</span>
                </div>
                <ul className="services__items">
                  {cat.services.map((s, j) => (
                    <li key={j} className="services__item">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sticky image preview (desktop only) */}
          <div className="services__preview" aria-hidden="true">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`services__preview-img ${active === i ? 'is-active' : ''}`}
              >
                <img src={cat.image} alt={cat.title} loading="lazy" />
              </div>
            ))}
            <div className="services__preview-label">
              <span className="label" style={{ color: 'var(--champagne)' }}>
                {categories[active]?.id}
              </span>
              <span className="services__preview-title">
                {categories[active]?.title}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="services__cta reveal">
          <a href="#booking" className="btn btn-dark btn-arrow">BOOK AN APPOINTMENT</a>
        </div>
      </div>
    </section>
  );
}
