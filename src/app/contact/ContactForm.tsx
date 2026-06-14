'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  if (submitted) {
    return (
      <div style={{ padding: '3rem 0' }}>
        <p style={{ fontFamily: 'var(--f-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.5, marginBottom: '1rem' }}>
          Thank you, {form.name || 'for reaching out'}.
        </p>
        <p style={{ fontWeight: 300, fontSize: '0.88rem', color: 'var(--mid)', lineHeight: 1.9 }}>
          I&apos;ve received your message and will be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <div className="co-form">
      <div className="fg">
        <label className="fl" htmlFor="name">Your Name</label>
        <input className="fi" id="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange} />
      </div>
      <div className="fg">
        <label className="fl" htmlFor="email">Email Address</label>
        <input className="fi" id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
      </div>
      <div className="fg">
        <label className="fl" htmlFor="service">Service of Interest</label>
        <select
          className="fi"
          id="service"
          value={form.service}
          onChange={handleChange}
          style={{ appearance: 'none', cursor: 'none' }}
        >
          <option value="">Select a service…</option>
          <option value="personal">Personal Styling</option>
          <option value="wardrobe">Wardrobe Consultation</option>
          <option value="editorial">Editorial Direction</option>
          <option value="brand">Brand Styling</option>
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>
      <div className="fg">
        <label className="fl" htmlFor="message">Your Message</label>
        <textarea
          className="ft"
          id="message"
          placeholder="Tell me a little about yourself and what you're hoping to achieve…"
          value={form.message}
          onChange={handleChange}
          style={{ minHeight: '120px' }}
        />
      </div>
      <button
        className="f-sub"
        type="button"
        onClick={() => setSubmitted(true)}
      >
        Send Enquiry
      </button>
    </div>
  );
}
