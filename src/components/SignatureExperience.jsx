import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Features.css';

export default function SignatureExperience() {
  const ref = useReveal();
  
  return (
    <section className="signature-section" ref={ref}>
      <div className="wrap">
        <div className="signature-section__header reveal">
          <span className="label" style={{ color: 'var(--espresso)', display: 'block', marginBottom: '1rem' }}>The Nida's Touch</span>
          <h2 className="display-md" style={{ color: 'var(--espresso)' }}>More than a beauty appointment.</h2>
          <p className="body-lg signature-section__desc">
            From the first consultation to the finishing touch, every detail is part of your experience.
          </p>
        </div>

        <div className="signature-section__menu reveal delay-1">
          {/* Col 1 */}
          <div>
            <div className="signature-section__col-title">
              <span>01</span> HAIR
            </div>
            <ul className="signature-section__links">
              <li><a href="#hair" className="signature-section__link">Balayage</a></li>
              <li><a href="#hair" className="signature-section__link">Blow Dry</a></li>
              <li><a href="#hair" className="signature-section__link">Braids</a></li>
              <li><a href="#hair" className="signature-section__link">Hairstyling</a></li>
            </ul>
          </div>
          {/* Col 2 */}
          <div>
            <div className="signature-section__col-title">
              <span>02</span> SKIN
            </div>
            <ul className="signature-section__links">
              <li><a href="#skin" className="signature-section__link">Korean Spa</a></li>
              <li><a href="#skin" className="signature-section__link">Acne Treatments</a></li>
              <li><a href="#skin" className="signature-section__link">Skin Analysis</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <div className="signature-section__col-title">
              <span>03</span> NAILS
            </div>
            <ul className="signature-section__links">
              <li><a href="#nails" className="signature-section__link">Acrylic Nails</a></li>
              <li><a href="#nails" className="signature-section__link">Manicure</a></li>
              <li><a href="#nails" className="signature-section__link">Pedicure</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <div className="signature-section__col-title">
              <span>04</span> MAKEUP
            </div>
            <ul className="signature-section__links">
              <li><a href="#makeup" className="signature-section__link">Make-up Services</a></li>
              <li><a href="#makeup" className="signature-section__link">Bridal Services</a></li>
            </ul>
          </div>
          {/* Col 5 */}
          <div>
            <div className="signature-section__col-title">
              <span>05</span> SPA
            </div>
            <ul className="signature-section__links">
              <li><a href="#spa" className="signature-section__link">Massage</a></li>
              <li><a href="#spa" className="signature-section__link">Body Waxing</a></li>
              <li><a href="#spa" className="signature-section__link">Waxing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
