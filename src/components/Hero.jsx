import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const img = el.querySelector('.hero__img');
    const content = el.querySelector('.hero__content');

    const onScroll = () => {
      const y = window.scrollY;
      if (img)     img.style.transform     = `scale(1.05) translateY(${y * 0.15}px)`;
      if (content) content.style.transform = `translateY(${y * 0.06}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background image */}
      <div className="hero__media">
        <img
          src="/images/nidas-salon/hero.webp"
          alt="Nida's Salon interior — arched gold mirrors, Karachi"
          className="hero__img"
          fetchpriority="high"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content wrap">
        <div className="hero__meta hero__anim hero__anim--1">
          <span className="label" style={{ color: 'var(--champagne)' }}>
            Nida's Salon
          </span>
          <span className="label" style={{ color: 'rgba(248,244,239,0.5)' }}>
            Karachi
          </span>
        </div>

        <h1 className="hero__headline hero__anim hero__anim--2">
          Where<br />
          <em>Elegance</em><br />
          Meets<br />
          Artistry.
        </h1>

        <p className="hero__sub hero__anim hero__anim--3">
          Beauty crafted exclusively for you.
        </p>

        <div className="hero__ctas hero__anim hero__anim--4">
          <a href="#booking" className="btn btn-dark btn-arrow">
            BOOK APPOINTMENT
          </a>
          <a href="#services" className="btn btn-outline-light btn-arrow">
            EXPLORE SERVICES
          </a>
        </div>

        <div className="hero__info hero__anim hero__anim--5">
          <div className="hero__info-item">
            <span className="label" style={{ color: 'var(--champagne)' }}>Hours</span>
            <span>12 PM — 9 PM</span>
          </div>
          <div className="hero__info-divider" />
          <div className="hero__info-item">
            <span className="label" style={{ color: 'var(--champagne)' }}>Rating</span>
            <span>4.9 ★ · 142 Reviews</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll hero__anim hero__anim--5">
        <div className="hero__scroll-line" />
        <span className="label" style={{ color: 'rgba(248,244,239,0.4)' }}>SCROLL</span>
      </div>
    </section>
  );
}
