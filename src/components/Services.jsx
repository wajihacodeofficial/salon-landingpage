import React, { useState } from 'react';
import { salonImages } from '../config/images';
import './Services.css';

const categories = [
  {
    id: '01',
    title: 'Hair',
    tag: 'Colour & Styling',
    image: salonImages.hair,
    services: [
      'Balayage',
      'Blow Dry',
      'Braids',
      'Hairstyling',
      'Shampoo & Conditioning',
      'Hair Threading',
    ],
  },
  {
    id: '02',
    title: 'Skin & Wellness',
    tag: 'Glow & Restore',
    image: salonImages.skin,
    services: [
      'Acne Treatments',
      'Korean Spa',
      'Hair & Skin Analysis',
    ],
  },
  {
    id: '03',
    title: 'Nails',
    tag: 'Details & Polish',
    image: salonImages.nails,
    services: [
      'Acrylic Nails',
      'Manicure',
      'Pedicure',
    ],
  },
  {
    id: '04',
    title: 'Makeup & Bridal',
    tag: 'For Every Occasion',
    image: salonImages.bridal,
    services: [
      'Make-up Services',
      'Bridal Services',
    ],
  },
  {
    id: '05',
    title: 'Brows & Threading',
    tag: 'Define & Shape',
    image: salonImages.makeup,
    services: [
      'Eyebrow Beautification',
      'Eyebrow Shaping',
      'Eyebrow Threading',
    ],
  },
  {
    id: '06',
    title: 'Body & Spa',
    tag: 'Relax & Renew',
    image: salonImages.spa,
    services: [
      'Massage',
      'Body Waxing',
      'Brazilian Waxing',
      'Waxing',
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <section id="services" className="services-section">
      {/* HEADER */}
      <div className="services-header container">
        <span className="services-eyebrow label-uppercase">Our Services</span>
        <h2 className="services-headline heading-lg">
          Your beauty,<br />beautifully covered.
        </h2>
        <p className="services-subline">
          From hair and skin to nails, makeup, spa and bridal beauty —<br />
          every service designed for every occasion.
        </p>
      </div>

      {/* FULL SERVICES MASTER LIST */}
      <div className="services-all-container container">
        <div className="services-all-label label-uppercase">All Services</div>
        <div className="services-chips">
          {[
            'Acne Treatments', 'Acrylic Nails', 'Balayage', 'Blow Dry',
            'Body Waxing', 'Braids', 'Brazilian Waxing', 'Bridal Services',
            'Eyebrow Beautification', 'Eyebrow Shaping', 'Eyebrow Threading',
            'Hairstyling', 'Hair Threading', 'Hair & Skin Analysis',
            'Korean Spa', 'Make-up Services', 'Manicure', 'Massage',
            'Pedicure', 'Shampoo & Conditioning', 'Waxing',
          ].map((s, i) => (
            <span key={i} className="services-chip">{s}</span>
          ))}
        </div>
      </div>

      {/* INTERACTIVE ACCORDION + PREVIEW PANEL */}
      <div className="services-panel-wrapper container">
        <div className="services-accordion">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`accordion-item ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="accordion-header">
                <span className="accordion-number">{cat.id}</span>
                <div className="accordion-title-block">
                  <h3 className="accordion-title">{cat.title}</h3>
                  <span className="accordion-tag label-uppercase">{cat.tag}</span>
                </div>
                <span className="accordion-arrow">{activeIndex === idx ? '↑' : '↓'}</span>
              </div>
              <div className="accordion-body">
                <ul className="accordion-services-list">
                  {cat.services.map((srv, i) => (
                    <li key={i} className="accordion-service-item">
                      <span className="service-dot" />
                      {srv}
                    </li>
                  ))}
                </ul>
                {/* Mobile image — shows only inside the expanded item on small screens */}
                <div className="accordion-mobile-image">
                  <img src={cat.image} alt={cat.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STICKY PREVIEW PANEL — desktop only */}
        <div className="services-preview">
          <div className="services-preview-image-wrapper">
            <img
              key={active.id}
              src={active.image}
              alt={active.title}
              className="services-preview-image"
            />
            <div className="services-preview-overlay">
              <span className="services-preview-number">{active.id}</span>
              <span className="services-preview-title">{active.title}</span>
            </div>
          </div>
          <div className="services-preview-list">
            {active.services.map((srv, i) => (
              <div key={i} className="preview-service-row">
                <span className="preview-service-name">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta container">
        <a href="#booking" className="btn btn-primary">BOOK AN APPOINTMENT →</a>
      </div>
    </section>
  );
}
