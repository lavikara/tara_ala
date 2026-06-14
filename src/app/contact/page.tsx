import type { Metadata } from "next";
import ClientShell from "../../components/ClientShell";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Book a Styling Consultation in London",
  description:
    "Book a personal styling consultation, wardrobe edit, or editorial project with Tara Ala. Studio in Mayfair, London. Virtual appointments available worldwide. Responding within two business days.",
  keywords: [
    "book fashion stylist London",
    "styling consultation Mayfair",
    "personal stylist appointment London",
    "wardrobe consultation booking",
    "editorial stylist enquiry",
    "contact Tara Ala",
    "fashion stylist contact",
    "virtual styling consultation",
    "luxury stylist London enquiry",
  ],
  alternates: {
    canonical: "https://www.taraala.com/contact",
  },
  openGraph: {
    title: "Contact Tara Ala — Book a Styling Consultation",
    description:
      "Book a personal styling consultation, wardrobe edit, or editorial project. Studio in Mayfair, London. Virtual appointments available worldwide.",
    url: "https://www.taraala.com/contact",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Contact Tara Ala — book a styling consultation in London",
      },
    ],
  },
  twitter: {
    title: "Contact Tara Ala — Book a Styling Consultation",
    description:
      "Book a personal styling consultation, wardrobe edit, or editorial project. Studio in Mayfair, London.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop",
    ],
  },
};

const info = [
  {
    label: "Email",
    value: "hello@taraala.com",
    href: "mailto:hello@taraala.com",
  },
  { label: "Studio", value: "Mayfair, London W1", href: null },
  {
    label: "Availability",
    value: "Currently accepting new clients for Q3 2026",
    href: null,
  },
];

const faqs = [
  {
    q: "Where are you based?",
    a: "My studio is in Mayfair, London. I travel internationally for editorial and campaign projects.",
  },
  {
    q: "Do you work virtually?",
    a: "Yes — virtual consultations are available for wardrobe audits and style direction, wherever you are.",
  },
  {
    q: "What does a consultation cost?",
    a: "Engagements vary based on scope. Please reach out and I'll send a detailed proposal.",
  },
  {
    q: "How far in advance should I book?",
    a: "Personal styling engagements are booked 4–6 weeks in advance. Editorial work varies by project.",
  },
];

export default function ContactPage() {
  return (
    <ClientShell>
      <Navbar />

      {/* JSON-LD: ContactPage + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Tara Ala",
              url: "https://www.taraala.com/contact",
              description:
                "Book a personal styling consultation, wardrobe edit, or editorial project with Tara Ala.",
              mainEntity: {
                "@type": "Person",
                name: "Tara Ala",
                email: "hello@taraala.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mayfair",
                  addressLocality: "London",
                  postalCode: "W1",
                  addressCountry: "GB",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]),
        }}
      />

      <header className="pg-hero pg-hero-dark">
        <span className="pg-eye">Get in Touch</span>
        <h1 className="pg-title pg-title-dark">
          <span className="row r1">
            <span>Let&apos;s</span>
          </span>
          <span className="row r2">
            <span>begin.</span>
          </span>
        </h1>
        <div className="pg-rule" />
      </header>

      <div className="cp-grid">
        <div className="rv">
          <p className="s-lbl">Contact Information</p>
          <div style={{ marginBottom: "3rem" }}>
            {info.map((item) => (
              <div className="cp-info-item" key={item.label}>
                <span className="cp-info-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="cp-info-value">
                    {item.value}
                  </a>
                ) : (
                  <span className="cp-info-value" style={{ cursor: "default" }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
            <div className="cp-info-item">
              <span className="cp-info-label">Social</span>
              <div className="cp-socials">
                <a href="#" className="cp-social-link">
                  Instagram
                </a>
                <a href="#" className="cp-social-link">
                  Pinterest
                </a>
                <a href="#" className="cp-social-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="a-body" style={{ maxWidth: "34ch", marginBottom: 0 }}>
            <p>
              I read every message personally and aim to respond within two
              business days. For urgent editorial enquiries, please include
              &ldquo;Urgent&rdquo; in your subject line.
            </p>
          </div>
        </div>

        <div className="rv">
          <p className="s-lbl">Send a Message</p>
          <ContactForm />
        </div>
      </div>

      <section
        style={{ background: "var(--bg-alt)", padding: "6rem var(--px)" }}
      >
        <div className="rv">
          <p className="s-lbl">Before You Write</p>
          <h2 className="a-h" style={{ marginBottom: "3rem" }}>
            Common <em>questions.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {faqs.map((faq) => (
            <div
              key={faq.q}
              style={{ background: "var(--bg-alt)", padding: "3rem 2.5rem" }}
              className="rv"
            >
              <h3
                style={{
                  fontFamily: "var(--f-serif)",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  color: "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  lineHeight: 1.85,
                  color: "var(--mid)",
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
