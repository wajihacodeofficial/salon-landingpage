import React, { useState, useEffect } from 'react';
import './Navigation.css';

const links = ['About', 'Services', 'Gallery', 'Reviews', 'Contact'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner wrap">
          {/* Logo */}
          <a href="#home" className="nav__logo" aria-label="Nida's Salon – Home">
            <img
              src="/logo.png"
              alt="Nida's Salon"
              className={`nav__logo-img ${scrolled ? '' : 'nav__logo-img--light'}`}
            />
            <span className="nav__logo-text">NIDA'S SALON</span>
          </a>

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Main navigation">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">
                {l}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="nav__right">
            <a href="#booking" className="btn btn-dark nav__book">
              BOOK APPOINTMENT
            </a>
            <button
              className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div className={`nav__overlay ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav__overlay-inner">
          <nav className="nav__overlay-links">
            <a href="#home" className="nav__overlay-link" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            {links.map((l, i) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nav__overlay-link"
                style={{ transitionDelay: menuOpen ? `${0.05 * (i + 1)}s` : '0s' }}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="nav__overlay-footer">
            <a
              href="#booking"
              className="btn btn-dark"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              BOOK APPOINTMENT
            </a>
            <div className="nav__overlay-contact">
              <a href="tel:03012992766">0301 2992766</a>
              <span>·</span>
              <span>12 PM – 9 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
