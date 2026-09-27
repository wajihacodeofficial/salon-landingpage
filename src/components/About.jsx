import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();
  
  return (
    <section id="about" className="about" ref={ref}>
      <div className="wrap about__inner">
        {/* Left: Large feature image */}
        <div className="about__media reveal-left">
          <img
            src="/images/nidas-salon/interior.webp"
            alt="Nida's Salon interior space"
            className="about__img"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div className="about__content">
          <span className="section-eyebrow reveal" style={{ color: 'var(--champagne)', textAlign: 'left' }}>
            The Nida's Experience
          </span>
          
          <h2 className="display-sm about__headline reveal delay-1">
            Beauty, thoughtfully crafted around you.
          </h2>
          
          <div className="about__copy reveal delay-2">
            <p>
              At Nida's Salon, every appointment is an opportunity to slow down and feel genuinely cared for in a space designed entirely around your comfort. We believe that true beauty isn't just about the final look—it's about the feeling you leave with.
            </p>
            <p>
              Located in the heart of Karachi's Amil Colony, our team brings expert knowledge and a gentle touch to every service, ensuring you always walk out feeling lighter, empowered, and looking your absolute best.
            </p>
          </div>
          
          <a href="#services" className="btn btn-outline reveal delay-3" style={{ marginBottom: '3rem' }}>
            DISCOVER NIDA'S SALON →
          </a>
          
          {/* Quick info list */}
          <div className="about__services-list reveal delay-4">
            <div className="about__service-item">
              <span>01</span> HAIR
            </div>
            <div className="about__service-item">
              <span>02</span> SKIN + SPA
            </div>
            <div className="about__service-item">
              <span>03</span> BEAUTY + BRIDAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
