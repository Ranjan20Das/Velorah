import { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-inner">
        <p className="section-label" style={{ textAlign: 'center' }}>
          Booking
        </p>
        <h2 className="booking-heading">
          Book your escape
        </h2>
        <p className="booking-subtext">
          Fill out the form, and our team will contact you within 24 hours to match the expedition perfectly to your expectations.
        </p>

        <div className="booking-card liquid-glass">
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
            }}>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '2.5rem',
                marginBottom: '1rem',
              }}>
                Thank you!
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.0625rem',
                lineHeight: 1.7,
              }}>
                Your submission has been sent. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="firstName"
                  placeholder="Anna"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="lastName"
                  placeholder="Kowalska"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  placeholder="anna@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  placeholder="+44 123 456 789"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="destination">
                  Preferred destination
                </label>
                <select className="form-select" id="destination" defaultValue="">
                  <option value="" disabled>Select destination</option>
                  <option value="scandinavia">Scandinavia</option>
                  <option value="patagonia">Patagonia</option>
                  <option value="iceland">Iceland</option>
                  <option value="alps">Alps</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">
                  Number of guests
                </label>
                <select className="form-select" id="guests" defaultValue="2">
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5+">5+ guests</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="dateFrom">
                  Preferred date
                </label>
                <input
                  className="form-input"
                  type="date"
                  id="dateFrom"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="duration">
                  Duration
                </label>
                <select className="form-select" id="duration" defaultValue="week">
                  <option value="weekend">Weekend (2-3 days)</option>
                  <option value="week">A week (5-7 days)</option>
                  <option value="twoweeks">Two weeks</option>
                  <option value="month">A month</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  placeholder="Tell us about your expectations..."
                  rows={4}
                />
              </div>

              <button type="submit" className="liquid-glass booking-submit">
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
