import type { Metadata } from "next";
import ClientShell from "../../components/ClientShell";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Styling Services — Personal Styling, Wardrobe Consultation & Editorial Direction",
  description:
    "Tara Ala offers personal styling, wardrobe consultation, editorial direction, and brand styling from her Mayfair studio. Bespoke engagements tailored to your life, not a template.",
  keywords: [
    "personal styling service London",
    "wardrobe consultation Mayfair",
    "editorial direction fashion",
    "brand styling service",
    "capsule wardrobe London",
    "luxury styling service UK",
    "fashion consultation London",
    "style direction service",
    "wardrobe edit London",
    "fashion stylist booking",
  ],
  alternates: {
    canonical: "https://www.taraala.com/services",
  },
  openGraph: {
    title: "Styling Services — Tara Ala, London",
    description:
      "Personal styling, wardrobe consultation, editorial direction, and brand styling. Bespoke engagements from Tara Ala's Mayfair studio.",
    url: "https://www.taraala.com/services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tara Ala styling services — personal styling and wardrobe consultation in London",
      },
    ],
  },
  twitter: {
    title: "Styling Services — Tara Ala, London",
    description:
      "Personal styling, wardrobe consultation, editorial direction, and brand styling from Mayfair.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85&auto=format&fit=crop",
    ],
  },
};

const services = [
  {
    num: "01",
    title: "Personal Styling",
    body: "A comprehensive styling engagement built around your life — not a template. We begin with an in-depth consultation, move through colour and body profile analysis, then build your style architecture from the ground up. Shopping is curated and purposeful.",
    includes: [
      "2-hour initial consultation",
      "Colour & body profile analysis",
      "Style direction document",
      "Full wardrobe edit",
      "Curated shopping itinerary",
      "Follow-up review session",
    ],
  },
  {
    num: "02",
    title: "Wardrobe Consultation",
    body: "An incisive audit of your existing wardrobe. What works, what doesn't, and the precise gaps that — once filled — will make everything else function at its best. Ideal for those who already have a strong foundation but need clarity.",
    includes: [
      "3-hour wardrobe edit session",
      "Keep / donate / alter guidance",
      "Gap analysis report",
      "Capsule wardrobe blueprint",
      "Shopping shortlist",
    ],
  },
  {
    num: "03",
    title: "Editorial Direction",
    body: "Creative and fashion direction for editorial, campaign, and digital content. I bring a discerning, trend-intelligent eye to every visual narrative — from concept development and mood-boarding through to on-set direction and post-production review.",
    includes: [
      "Concept & mood-board development",
      "Talent and team briefing",
      "Garment sourcing & styling",
      "On-set creative direction",
      "Post-shoot edit consultation",
    ],
  },
  {
    num: "04",
    title: "Brand Styling",
    body: "For founders, executives, and public figures whose visual identity is inseparable from their professional one. I create a consistent, powerful, and authentic personal brand aesthetic that translates across every context.",
    includes: [
      "Brand identity audit",
      "Visual language development",
      "Occasion-specific styling guides",
      "Ongoing seasonal updates",
      "Travel & event prep",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery",
    d: "A detailed intake form followed by a 60-minute call. I want to understand your life, not just your wardrobe.",
  },
  {
    n: "02",
    title: "Analysis",
    d: "I review your existing wardrobe, lifestyle, and aspirations and build a picture of the gap between where you are and where you want to be.",
  },
  {
    n: "03",
    title: "Direction",
    d: "I present a tailored style direction — your colour palette, silhouette principles, fabric hierarchy, and reference aesthetic.",
  },
  {
    n: "04",
    title: "Execution",
    d: "We implement: editing, sourcing, and building. Then we review, refine, and continue as your style evolves.",
  },
];

export default function ServicesPage() {
  return (
    <ClientShell>
      <Navbar />

      {/* JSON-LD: Service page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Styling Services — Tara Ala",
            url: "https://www.taraala.com/services",
            description:
              "Personal styling, wardrobe consultation, editorial direction, and brand styling services by Tara Ala.",
            provider: {
              "@type": "Person",
              name: "Tara Ala",
              url: "https://www.taraala.com",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Service",
                  name: s.title,
                  description: s.body,
                  provider: {
                    "@type": "Person",
                    name: "Tara Ala",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "United Kingdom",
                  },
                },
              })),
            },
          }),
        }}
      />

      <header className="pg-hero pg-hero-light">
        <span className="pg-eye">What I Offer</span>
        <h1 className="pg-title pg-title-light">
          <span className="row r1">
            <span>Services</span>
          </span>
          <span className="row r2">
            <span>&amp; process.</span>
          </span>
        </h1>
        <div className="pg-rule" />
      </header>

      <section className="sp-overview">
        <div className="rv">
          <p className="s-lbl">The Approach</p>
          <h2 className="a-h">
            Each engagement
            <br />
            begins with <em>listening.</em>
          </h2>
        </div>
        <div className="rv">
          <div
            className="a-body"
            style={{ marginBottom: "2rem", maxWidth: "44ch" }}
          >
            <p>
              I don&apos;t offer packages in the conventional sense. What I
              offer are engagements — considered, collaborative, and calibrated
              to what you actually need. Every client is different, and every
              starting point is honoured.
            </p>
            <p>
              The services below represent the primary modes of working
              together. If none maps precisely to what you have in mind, please
              reach out — the most interesting projects rarely fit a template.
            </p>
          </div>
          <Link href="/contact" className="cta-line">
            Discuss Your Needs
          </Link>
        </div>
      </section>

      <div className="sp-cards">
        {services.map((s) => (
          <div className="sp-card rv" key={s.num}>
            <div className="sp-card-left">
              <span className="sp-card-n">{s.num}</span>
              <h2 className="sp-card-title">{s.title}</h2>
            </div>
            <div>
              <p className="sp-card-body">{s.body}</p>
              <ul className="sp-card-includes">
                {s.includes.map((inc) => (
                  <li className="sp-card-inc-item" key={inc}>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-card-cta">
              <Link href="/contact" className="cta-line">
                Enquire
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="sp-process">
        <div className="rv">
          <p className="s-lbl" style={{ color: "var(--gold-s)" }}>
            <span
              style={{
                display: "inline-block",
                width: "2rem",
                height: "1px",
                background: "var(--gold-s)",
                marginRight: "1rem",
                verticalAlign: "middle",
              }}
            />
            How It Works
          </p>
          <h2 className="wk-h rv" style={{ marginTop: "1rem" }}>
            The four-step
            <br />
            <em>process.</em>
          </h2>
        </div>
        <div className="sp-process-grid rv">
          {steps.map((s) => (
            <div className="sp-step" key={s.n}>
              <span className="sp-step-n">{s.n}</span>
              <h3 className="sp-step-title">{s.title}</h3>
              <p className="sp-step-d">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="phil rv">
        <blockquote className="ph-q">
          &ldquo;The right clothes don&apos;t just change how others see you.
          They change how <em>you</em> see yourself.&rdquo;
        </blockquote>
        <p className="ph-a">&mdash; Tara Ala</p>
        <div style={{ marginTop: "3rem" }}>
          <Link href="/contact" className="cta-line">
            Start Your Engagement
          </Link>
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
