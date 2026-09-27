import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Founder.css';

export default function Founder() {
  const ref = useReveal();

  return (
    <section id="founder" className="founder" ref={ref}>
      <div className="wrap founder__inner">
        {/* Left: Image with offset frame */}
        <div className="founder__media reveal-left">
          <div className="founder__frame"></div>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
            alt="Nida, Founder of Nida's Salon" 
            className="founder__img"
          />
        </div>

        {/* Right: Content */}
        <div className="founder__content">
          <span className="label founder__eyebrow reveal delay-1">Meet The Founder</span>
          
          <h2 className="display-sm founder__headline reveal delay-2">
            Where you'll <em>always</em><br />leave as your best self
          </h2>
          
          <p className="body-sm founder__copy reveal delay-3">
            Nida's Salon is a premier space in Amil Colony where you'll feel relaxed and pampered through expert styling and beauty services. As your stylist, I'm committed to giving you a positive in-salon experience. Even when life feels chaotic, you can feel comforted knowing that when it's hair day, you'll always walk out of here lighter, empowered, and looking your very best.
          </p>
          
          <div className="founder__cta reveal delay-4">
            <a href="#about" className="btn btn-outline">
              Learn More about Nida's Salon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
