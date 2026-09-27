import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function SocialMedia() {
  const ref = useReveal();
  return (
    <section className="social-footer-container" ref={ref} style={{ paddingBottom: '0' }}>
      <div className="wrap">
        <div className="social-section reveal">
          <div className="social-section__left">
            <span className="section-eyebrow reveal" style={{ color: 'rgba(41,35,33,0.6)' }}>Follow Along</span>
            <h2 className="display-md" style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>
              Follow the artistry.
            </h2>
            <p className="body-sm" style={{ color: 'rgba(41,35,33,0.7)' }}>
              Stay updated with our latest work, beauty tips and salon highlights on social media.
            </p>
          </div>
          
          <div className="social-section__right reveal delay-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ borderTop: '1px solid rgba(41,35,33,0.1)' }}>
              <span>INSTAGRAM</span>
              <h3>@nidassalon</h3>
              <span style={{ fontSize: '1.25rem' }}>→</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>FACEBOOK</span>
              <h3>Nida's Beauty Salon</h3>
              <span style={{ fontSize: '1.25rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
