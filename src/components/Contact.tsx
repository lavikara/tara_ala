'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="rv">
        <p className="s-lbl">Contact</p>
        <h2 className="co-h">
          Let&apos;s<br /><em>begin.</em>
        </h2>
        <p className="co-note">
          Whether you&apos;re looking to transform your wardrobe, collaborate on an editorial project,
          or explore what a more considered approach to dressing could mean for you — I&apos;d love
          to hear from you.
        </p>
        <a href="mailto:hello@taraala.com" className="co-mail">hello@taraala.com</a>
      </div>

      <div className="co-form rv">
        {submitted ? (
          <p style={{ fontFamily: 'var(--f-serif)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8 }}>
            Thank you for reaching out. I&apos;ll be in touch shortly.
          </p>
        ) : (
          <>
            <div className="fg">
              <label className="fl" htmlFor="name">Your Name</label>
              <input
                className="fi"
                id="name"
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label className="fl" htmlFor="email">Email Address</label>
              <input
                className="fi"
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label className="fl" htmlFor="service">Service of Interest</label>
              <input
                className="fi"
                id="service"
                type="text"
                placeholder="Personal Styling · Editorial · Other"
                value={form.service}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label className="fl" htmlFor="message">Your Message</label>
              <textarea
                className="ft"
                id="message"
                placeholder="Tell me about yourself and what you're hoping to achieve..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="f-sub" type="button" onClick={handleSubmit}>
              Send Enquiry
            </button>
          </>
        )}
      </div>
    </section>
  );
}
