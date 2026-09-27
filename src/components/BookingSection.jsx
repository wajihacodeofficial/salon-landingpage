import React, { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `Hello Nida's Salon, I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp
    window.open(`https://wa.me/923012992766?text=${encodedText}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding container" style={styles.section}>
      <div style={styles.header}>
        <h2 className="heading-lg" style={styles.headline}>Book Appointment</h2>
        <p style={styles.copy}>
          Request an appointment and we will confirm availability with you shortly.
        </p>
      </div>

      <div style={styles.formContainer}>
        {submitted ? (
          <div style={styles.successMessage}>
            <h3 className="heading-sm">Request Sent via WhatsApp</h3>
            <p>Thank you for reaching out to Nida's Salon. We will respond to your WhatsApp message shortly.</p>
            <button className="btn btn-secondary" onClick={() => setSubmitted(false)} style={{marginTop: '2rem'}}>
              Book Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="name">Full Name</label>
              <input style={styles.input} type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="phone">Phone Number</label>
              <input style={styles.input} type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="service">Service</label>
              <select style={styles.input} id="service" name="service" required value={formData.service} onChange={handleChange}>
                <option value="" disabled>Select a service</option>
                <option value="Hair">Hair</option>
                <option value="Skin">Skin</option>
                <option value="Nails">Nails</option>
                <option value="Makeup">Makeup</option>
                <option value="Bridal">Bridal</option>
                <option value="Brows & Threading">Brows & Threading</option>
                <option value="Waxing">Waxing</option>
                <option value="Massage">Massage</option>
                <option value="Korean Spa">Korean Spa</option>
                <option value="Hair & Skin Analysis">Hair & Skin Analysis</option>
              </select>
            </div>

            <div style={styles.row}>
              <div style={{...styles.inputGroup, flex: 1}}>
                <label style={styles.label} htmlFor="date">Preferred Date</label>
                <input style={styles.input} type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
              </div>
              <div style={{...styles.inputGroup, flex: 1}}>
                <label style={styles.label} htmlFor="time">Preferred Time</label>
                <input style={styles.input} type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="message">Message (Optional)</label>
              <textarea style={styles.textarea} id="message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
              REQUEST APPOINTMENT
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-espresso)',
    color: 'var(--color-ivory)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  headline: {
    color: 'var(--color-white)',
    marginBottom: '1rem',
  },
  copy: {
    opacity: 0.8,
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'var(--color-ivory)',
    color: 'var(--color-espresso)',
    padding: '3rem',
  },
  successMessage: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  input: {
    padding: '1rem',
    border: '1px solid var(--color-nude)',
    backgroundColor: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--color-espresso)',
  },
  textarea: {
    padding: '1rem',
    border: '1px solid var(--color-nude)',
    backgroundColor: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--color-espresso)',
    resize: 'vertical',
  },
  submitBtn: {
    width: '100%',
    marginTop: '1rem',
    padding: '1.25rem',
  }
};
