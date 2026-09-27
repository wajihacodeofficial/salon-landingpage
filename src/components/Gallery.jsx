import React, { useState } from 'react';
import { salonImages } from '../config/images';
import './Gallery.css';

const ALL_CATEGORIES = ['ALL', 'INTERIOR', 'HAIR', 'NAILS', 'SKIN', 'SPA', 'SALON'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'ALL'
    ? salonImages.gallery
    : salonImages.gallery.filter(img => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="gallery-section">
      {/* Header */}
      <div className="gallery-header container">
        <span className="label-uppercase gallery-eyebrow">The Space</span>
        <h2 className="heading-lg gallery-headline">Inside Nida's Salon.</h2>
        <p className="gallery-subline">
          A real look at our salon — from styling stations and treatment rooms to the pedicure lounge and skin suite.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="gallery-filters container">
        {ALL_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gallery-grid container">
        {filtered.map((img, index) => (
          <div
            key={img.src}
            className={`gallery-item gallery-item--${(index % 5) + 1}`}
            onClick={() => setLightboxIndex(index)}
          >
            <div className="gallery-item-inner">
              <img
                src={img.src}
                alt={img.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category label-uppercase">{img.category}</span>
                <h3 className="gallery-item-title">{img.title}</h3>
                <p className="gallery-item-desc">{img.description}</p>
                <span className="gallery-item-view">VIEW →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">←</button>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">→</button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span className="label-uppercase lightbox-category">
                {filtered[lightboxIndex].category}
              </span>
              <h3 className="lightbox-title">{filtered[lightboxIndex].title}</h3>
              <p className="lightbox-desc">{filtered[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
