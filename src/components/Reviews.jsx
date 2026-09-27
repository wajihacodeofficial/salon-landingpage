import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Reviews.css';

const reviews = [
  { text: "Such a relaxing atmosphere. The staff were so professional and attentive throughout.", name: "Aisha K.", service: "Hair Coloring" },
  { text: "Quality beauty services and very knowledgeable staff. Highly recommended for anyone in Karachi.", name: "Fatima S.", service: "Balayage" },
  { text: "Clean, tidy salon with a warm and welcoming environment. I always leave feeling great.", name: "Sana M.", service: "Korean Spa" },
  { text: "Gentle, caring service from start to finish. The best salon experience I've had in Karachi.", name: "Hira A.", service: "Bridal Makeup" },
  { text: "Incredible attention to detail. My nails have never looked this good before!", name: "Zainab R.", service: "Acrylic Nails" },
  { text: "The only place I trust with my hair. Every visit is an absolute treat.", name: "Kiran T.", service: "Hairstyling" },
];

// Duplicate for infinite scroll effect
const repeatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  const ref = useReveal();

  return (
    <section id="reviews" className="reviews" ref={ref}>
      <div className="wrap">
        <div className="reviews__header reveal">
          <div className="reviews__rating">
            <p className="reviews__score">4.9</p>
            <div>
              <p className="reviews__stars">★★★★★</p>
              <p className="label reviews__count" style={{ color: 'var(--champagne)' }}>142 Google Reviews</p>
            </div>
          </div>
          <h2 className="display-md reviews__headline reveal delay-1">Loved by our clients.</h2>
        </div>
      </div>

      <div className="reviews__track-container reveal delay-2">
        <div className="reviews__track">
          {repeatedReviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-card__stars">★★★★★</div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <span className="review-card__name">{r.name}</span>
                <span className="review-card__service">{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="reviews__cta reveal delay-3">
          <a
            href="https://www.google.com/maps/search/Nida's+Salon+Amil+Colony+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            READ ALL REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
}
