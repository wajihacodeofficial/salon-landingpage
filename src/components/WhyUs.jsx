import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const points = [
  { n: '01', title: 'Personalized Beauty', desc: 'A complete experience designed around your individual preferences and occasion.' },
  { n: '02', title: 'Beauty Under One Roof', desc: 'Hair, skin, nails, makeup, bridal and spa — all in one salon.' },
  { n: '03', title: 'Bridal Beauty', desc: 'Dedicated beauty services crafted for your most important celebrations.' },
  { n: '04', title: 'Modern Services', desc: 'Balayage, Korean spa, acrylic nails and contemporary treatments.' },
  { n: '05', title: 'Local Karachi Salon', desc: 'Conveniently located in Amil Colony, near Mazar-e-Quaid, Karachi.' },
];

export default function WhyUs() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="whyus" style={{ background: 'var(--ivory)', padding: '7rem 0', borderTop: '1px solid var(--nude)' }} ref={ref}>
      <div className="wrap">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-eyebrow reveal" style={{ color: 'var(--champagne)' }}>Why Choose Us</span>
          <h2 className="display-md reveal delay-1">Why Nida's Salon.</h2>
        </div>
        
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {points.map((p, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="reveal" 
                style={{ 
                  transitionDelay: `${0.1 * i}s`, 
                  borderBottom: '1px solid var(--nude)',
                }}
              >
                <button
                  onClick={() => toggleItem(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    padding: '2rem 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="label" style={{ color: 'var(--champagne)', minWidth: '2rem', paddingTop: '3px' }}>
                    {p.n}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '1rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.06em', 
                      textTransform: 'uppercase',
                      color: isOpen ? 'var(--champagne)' : 'var(--espresso)',
                      transition: 'color 0.3s ease'
                    }}>
                      {p.title}
                    </h3>
                  </div>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--champagne)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }}>
                    +
                  </span>
                </button>
                
                <div style={{ 
                  overflow: 'hidden',
                  maxHeight: isOpen ? '200px' : '0',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.4s var(--ease-out)',
                  paddingLeft: '4rem',
                  paddingRight: '2rem'
                }}>
                  <p className="body-sm" style={{ 
                    opacity: 0.65, 
                    paddingBottom: '2rem',
                    marginTop: '-0.5rem'
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
