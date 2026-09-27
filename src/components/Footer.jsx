import React from 'react';
import './Features.css';

export default function Footer() {
  return (
    <footer className="social-footer-container" style={{ borderTop: 'none', paddingTop: '0' }}>
      <div className="wrap">
        <div className="footer">
          <div className="footer__brand">
            <h2>NIDA'S SALON</h2>
            <p>"Where elegance meets artistry."</p>
          </div>
          
          <div className="footer__nav">
            <div className="footer__col">
              <h4>NAVIGATION</h4>
              <ul className="footer__links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#bridal">Bridal</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>SERVICES</h4>
              <ul className="footer__links">
                <li><a href="#hair">Hair</a></li>
                <li><a href="#skin">Skin</a></li>
                <li><a href="#nails">Nails</a></li>
                <li><a href="#makeup">Makeup</a></li>
                <li><a href="#bridal">Bridal</a></li>
                <li><a href="#spa">Spa</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>CONTACT</h4>
              <ul className="footer__links">
                <li>0301 2992766</li>
                <li>Karachi, Pakistan</li>
                <li>12 PM — 9 PM</li>
                <li style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
