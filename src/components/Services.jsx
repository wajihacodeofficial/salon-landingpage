import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const categories = [
  {
    id: '01', title: 'Hair',
    sub: 'Colour & Styling',
    image: '/images/services/service_hair_1790503225495.jpg',
    desc: 'From signature blowouts to dimensional balayage, experience expert styling.',
    anchor: '#hair',
  },
  {
    id: '02', title: 'Skin + Spa',
    sub: 'Glow & Restore',
    image: '/images/services/service_skin_1790503238327.jpg',
    desc: 'Revitalizing treatments, including our signature Korean Spa experiences.',
    anchor: '#skin',
  },
  {
    id: '03', title: 'Nails',
    sub: 'Details & Polish',
    image: '/images/services/service_nails_1790503248112.jpg',
    desc: 'Classic manicures, pedicures, and flawless acrylic extensions.',
    anchor: '#nails',
  },
  {
    id: '04', title: 'Makeup + Bridal',
    sub: 'Occasion Beauty',
    image: '/images/services/service_makeup_1790503261551.jpg',
    desc: 'Perfectly crafted looks for your most important events.',
    anchor: '#bridal',
  },
  {
    id: '05', title: 'Brows + Threading',
    sub: 'Define & Shape',
    image: '/images/services/service_brows_1790503274327.jpg',
    desc: 'Precise shaping and threading to enhance your natural features.',
    anchor: '#brows',
  },
  {
    id: '06', title: 'Waxing',
    sub: 'Smooth & Refined',
    image: '/images/services/service_waxing_1790503290405.jpg',
    desc: 'Professional body waxing for lasting smooth results.',
    anchor: '#waxing',
  },
];

/* Full menu — all services grouped by category */
const fullMenu = [
  {
    num: '01',
    category: 'Hair',
    items: [
      'Balayage',
      'Blow Dry',
      'Braids',
      'Hairstyling',
      'Shampoo & Conditioning',
      'Hair Threading',
    ],
  },
  {
    num: '02',
    category: 'Skin & Wellness',
    items: [
      'Korean Spa',
      'Acne Treatments',
      'Hair & Skin Analysis',
    ],
  },
  {
    num: '03',
    category: 'Nails',
    items: [
      'Acrylic Nails',
      'Manicure',
      'Pedicure',
    ],
  },
  {
    num: '04',
    category: 'Makeup & Bridal',
    items: [
      'Bridal Services',
      'Make-up Services',
      'Hair Styling',
    ],
  },
  {
    num: '05',
    category: 'Brows & Threading',
    items: [
      'Eyebrow Beautification',
      'Eyebrow Shaping',
      'Eyebrow Threading',
    ],
  },
  {
    num: '06',
    category: 'Waxing & Spa',
    items: [
      'Body Waxing',
      'Brazilian Waxing',
      'Waxing',
      'Massage',
    ],
  },
];

export default function Services() {
  const ref = useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="services" className="services" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className="services__header reveal" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--champagne)' }}>What We Offer</span>
          <h2 className="display-lg services__headline">
            Beauty, beautifully<br /><em>covered.</em>
          </h2>
        </div>

        {/* Card Grid */}
        <div className="services__grid">
          {categories.map((cat, i) => (
            <a
              href={cat.anchor}
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

        {/* VIEW FULL MENU toggle */}
        <div className="services__cta reveal">
          <button
            className="btn btn-outline-light btn-arrow"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'CLOSE MENU ✕' : 'VIEW FULL MENU →'}
          </button>
        </div>

        {/* Full Menu Panel */}
        {menuOpen && (
          <div className="services__full-menu">
            <div className="services__full-menu-grid">
              {fullMenu.map((group) => (
                <div key={group.num} className="services__menu-col">
                  <div className="services__menu-col-header">
                    <span className="services__menu-num">{group.num}</span>
                    <span className="services__menu-cat">{group.category}</span>
                  </div>
                  <ul className="services__menu-list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href="#booking" className="services__menu-link">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#booking" className="btn btn-dark" style={{ padding: '1rem 2.5rem' }}>
                BOOK AN APPOINTMENT →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
