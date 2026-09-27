import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Reviews.css';

const reviews = [
  { text: "Such a relaxing atmosphere. The staff were so professional and attentive throughout.", stars: 5 },
  { text: "Quality beauty services and very knowledgeable staff. Highly recommended for anyone in Karachi.", stars: 5 },
  { text: "Clean, tidy salon with a warm and welcoming environment. I always leave feeling great.", stars: 5 },
  { text: "Gentle, caring service from start to finish. The best salon experience I've had in Karachi.", stars: 5 },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const ref = useReveal();

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="reviews" className="reviews" ref={ref}>
      <div className="wrap">
        <div className="reviews__rating reveal">
          <p className="reviews__score">4.9</p>
          <div>
            <p className="reviews__stars">★★★★★</p>
            <p className="label reviews__count" style={{ color: 'var(--champagne)' }}>142 Google Reviews</p>
          </div>
        </div>

        <h2 className="display-md reviews__headline reveal delay-1">Loved by our clients.</h2>

        <div className="reviews__carousel reveal delay-2">
          <blockquote className="reviews__quote">
            <p>"{reviews[current].text}"</p>
          </blockquote>

          <div className="reviews__controls">
            <button onClick={prev} className="reviews__btn" aria-label="Previous review">←</button>
            <span className="reviews__indicator label">{current + 1} / {reviews.length}</span>
            <button onClick={next} className="reviews__btn" aria-label="Next review">→</button>
          </div>
        </div>

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
