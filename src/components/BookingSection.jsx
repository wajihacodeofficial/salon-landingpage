import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './BookingSection.css';

const serviceOptions = [
  'Hair','Skin','Nails','Makeup','Bridal','Brows & Threading',
  'Body Waxing','Brazilian Waxing','Massage','Korean Spa','Hair & Skin Analysis',
];

export default function BookingSection() {
  const ref = useReveal();
  const [form, setForm] = useState({ name:'', phone:'', service:'', date:'', time:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Nida's Salon, I would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\nMessage: ${form.message || 'N/A'}`;
    window.open(`https://wa.me/923012992766?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="booking" ref={ref}>
      {/* Full-bleed exterior background */}
      <div className="booking__bg">
        <img src="/images/nidas-salon/exterior.webp" alt="Nida's Salon exterior" />
        <div className="booking__overlay" />
      </div>

      {/* Logo watermark visible over photo */}
      <div className="booking__logo-mark">
        <span>NIDA'S</span>
        <span className="booking__logo-sub">SALON</span>
      </div>

      <div className="wrap booking__inner">

        {/* LEFT — Find Us */}
        <div className="booking__headline reveal">
          <span className="section-eyebrow" style={{ color: 'var(--champagne)', textAlign: 'left' }}>Find Us · Book a Visit</span>
          <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: '2.5rem' }}>
            Come visit us<br /><em style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>— or book online.</em>
          </h2>

          {/* Address */}
          <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.5rem' }}>Address</p>
              <p className="body-sm" style={{ opacity: 0.75, lineHeight: 1.9 }}>
                Shop No. 01, Ground Floor,<br />
                Plot No. 362, Decent Heights,<br />
                near Mazar-e-Quaid,<br />
                Amil Colony, Karachi 75300.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.4rem' }}>Phone</p>
                <a href="tel:03012992766" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', opacity: 0.75, color: 'inherit', textDecoration: 'none' }}>
                  0301 2992766
                </a>
              </div>
              <div>
                <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.4rem' }}>Hours</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', opacity: 0.75 }}>12:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="reveal delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '240px' }}>
            {[
              { label: 'CALL NOW', href: 'tel:03012992766' },
              { label: 'GET DIRECTIONS', href: "https://www.google.com/maps/search/Nida's+Salon+Decent+Heights+Amil+Colony+Karachi" },
              { label: 'WHATSAPP', href: "https://wa.me/923012992766?text=Hello%20Nida's%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment." },
            ].map((b, i) => (
              <a
                key={i}
                href={b.href}
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn btn-outline-light"
                style={{ justifyContent: 'center', transitionDelay: `${0.1 * i}s` }}
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Booking Form */}
        <div className="booking__form-wrap reveal delay-2">
          <p className="label" style={{ color: 'var(--champagne)', marginBottom: '0.5rem', display: 'block' }}>Book a Visit</p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--espresso)', marginBottom: '2rem', fontWeight: 400 }}>
            Request your appointment
          </h3>
          {submitted ? (
            <div className="booking__success">
              <h3>Request Sent ✓</h3>
              <p>Thank you. Your appointment request has been received. Nida's Salon will contact you to confirm availability.</p>
              <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="booking__form" onSubmit={onSubmit} noValidate>
              <div className="booking__row">
                <div className="booking__field">
                  <label className="label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your name" />
                </div>
                <div className="booking__field">
                  <label className="label" htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="03xx-xxxxxxx" />
                </div>
              </div>
              <div className="booking__field">
                <label className="label" htmlFor="service">Service</label>
                <select id="service" name="service" required value={form.service} onChange={onChange}>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="booking__row">
                <div className="booking__field">
                  <label className="label" htmlFor="date">Preferred Date</label>
                  <input id="date" name="date" type="date" required value={form.date} onChange={onChange} />
                </div>
                <div className="booking__field">
                  <label className="label" htmlFor="time">Preferred Time</label>
                  <input id="time" name="time" type="time" value={form.time} onChange={onChange} />
                </div>
              </div>
              <div className="booking__field">
                <label className="label" htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows="3" value={form.message} onChange={onChange} placeholder="Any details…" />
              </div>
              <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}>
                REQUEST APPOINTMENT →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
