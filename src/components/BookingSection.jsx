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
      {/* Background image */}
      <div className="booking__bg">
        <img src="/images/nidas-salon/exterior.webp" alt="" aria-hidden="true" />
        <div className="booking__overlay" />
      </div>

      <div className="wrap booking__inner">
        <div className="booking__headline reveal">
          <span className="label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '1rem' }}>Book a Visit</span>
          <h2 className="display-lg" style={{ color: 'var(--white)' }}>
            Ready for your<br /><em style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>next beauty moment?</em>
          </h2>
          <p className="body-lg reveal delay-1" style={{ color: 'rgba(248,244,239,0.65)', marginTop: '1.5rem', maxWidth: '380px' }}>
            Book your appointment with Nida's Salon. We'll confirm your availability via WhatsApp.
          </p>
        </div>

        <div className="booking__form-wrap reveal delay-2">
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
