import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { salonImages } from '../config/images';
import './Gallery.css';

const ALL_CATEGORIES = ['ALL', 'INTERIOR', 'HAIR', 'NAILS', 'SKIN', 'SPA', 'SALON'];

export default function Gallery() {
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'ALL'
    ? salonImages.gallery
    : salonImages.gallery.filter(img => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="gallery" ref={ref}>
      {/* Header */}
      <div className="wrap gallery__header reveal">
        <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1.5rem' }}>The Space</span>
        <h2 className="display-md gallery__headline">Inside Nida's Salon.</h2>
        <p className="body-lg gallery__subline">
          A real look at our salon — from styling stations and treatment rooms to the pedicure lounge and skin suite.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="wrap gallery__grid reveal delay-2">
        {filtered.map((img, index) => (
          <div
            key={img.src}
            className={`gallery__item gallery__item--${(index % 5) + 1}`}
            onClick={() => setLightboxIndex(index)}
          >
            <div className="gallery__item-inner">
              <img
                src={img.src}
                alt={img.title}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <span className="label gallery__item-category">{img.category}</span>
                <h3 className="gallery__item-title">{img.title}</h3>
                <span className="gallery__item-view">VIEW →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>
          
          <div className="lightbox__controls">
            <button className="lightbox__btn" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">←</button>
            <button className="lightbox__btn" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">→</button>
          </div>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="lightbox__img"
            />
            <div className="lightbox__caption">
              <span className="label" style={{ color: 'var(--champagne)', marginBottom: '0.5rem', display: 'block' }}>
                {filtered[lightboxIndex].category}
              </span>
              <h3 className="display-sm" style={{ color: 'var(--white)' }}>{filtered[lightboxIndex].title}</h3>
              <p className="body-sm" style={{ color: 'rgba(248, 244, 239, 0.7)' }}>{filtered[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
