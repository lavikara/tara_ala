import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientShell from "../../components/ClientShell";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { imgs } from "../../lib/images";

export const metadata: Metadata = {
  title: "About Tara Ala — London Fashion Stylist & Creative Director",
  description:
    "Meet Tara Ala — London College of Fashion graduate, former Fashion Director at Porter Magazine, and founder of Tara Ala Studio. A decade of considered work in personal styling and creative direction.",
  keywords: [
    "Tara Ala biography",
    "fashion stylist background",
    "London College of Fashion graduate",
    "Porter Magazine fashion director",
    "Net-a-Porter stylist",
    "Vogue Arabia contributing editor",
    "fashion creative director London",
    "personal stylist credentials",
  ],
  alternates: {
    canonical: "https://www.taraala.com/about",
  },
  openGraph: {
    title: "About Tara Ala — London Fashion Stylist & Creative Director",
    description:
      "A decade of considered work in personal styling, editorial direction, and brand development. London College of Fashion graduate and former Fashion Director at Porter Magazine.",
    url: "https://www.taraala.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tara Ala — Fashion Stylist at work in her London studio",
      },
    ],
  },
  twitter: {
    title: "About Tara Ala — London Fashion Stylist & Creative Director",
    description:
      "A decade of considered work in personal styling, editorial direction, and brand development.",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85&auto=format&fit=crop",
    ],
  },
};

const credentials = [
  {
    year: "2012",
    role: "BA Fashion Styling",
    place: "London College of Fashion, UAL",
  },
  {
    year: "2013 – 2017",
    role: "Senior Stylist",
    place: "Net-a-Porter Editorial",
  },
  { year: "2017 – 2020", role: "Fashion Director", place: "Porter Magazine" },
  {
    year: "2020 – 2022",
    role: "Creative Director",
    place: "Independent · London & Paris",
  },
  { year: "2022 –", role: "Founder & Lead Stylist", place: "Tara Ala Studio" },
  {
    year: "Ongoing",
    role: "Contributing Editor",
    place: "Vogue Arabia · Grazia UK",
  },
];

const values = [
  {
    n: "01",
    text: (
      <>
        Intention over <em>impulse</em>
      </>
    ),
  },
  {
    n: "02",
    text: (
      <>
        Clothes as a form of <em>language</em>
      </>
    ),
  },
  {
    n: "03",
    text: (
      <>
        Quality over <em>quantity</em>, always
      </>
    ),
  },
  {
    n: "04",
    text: (
      <>
        The body as <em>context</em>, never obstacle
      </>
    ),
  },
  {
    n: "05",
    text: (
      <>
        Style earned through <em>knowing yourself</em>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <ClientShell>
      <Navbar />

      {/* JSON-LD: AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tara Ala",
            url: "https://www.taraala.com/about",
            description:
              "Tara Ala is a London-based fashion stylist and creative director with over a decade of professional experience.",
            mainEntity: {
              "@type": "Person",
              name: "Tara Ala",
              jobTitle: "Fashion Stylist & Creative Director",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "London College of Fashion",
              },
              worksFor: {
                "@type": "Organization",
                name: "Tara Ala Studio",
              },
            },
          }),
        }}
      />

      <header className="pg-hero pg-hero-dark">
        <span className="pg-eye">About Tara Ala</span>
        <h1 className="pg-title pg-title-dark">
          <span className="row r1">
            <span>A stylist</span>
          </span>
          <span className="row r2">
            <span>with conviction.</span>
          </span>
        </h1>
        <div className="pg-rule" />
      </header>

      <section className="ap-intro">
        <div className="ap-img">
          <Image
            src={imgs.aboutPage}
            alt="Tara Ala — fashion stylist at work in London"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>
        <div className="ap-content rv">
          <p className="s-lbl">The Practice</p>
          <h2 className="a-h">
            Style that speaks
            <br />
            before <em>you</em> do.
          </h2>
          <div className="a-body">
            <p>
              I work with women who understand that dressing is a considered act
              — that the space between wardrobe and world is where identity is
              most plainly expressed.
            </p>
            <p>
              With a foundation in fashion education at London College of
              Fashion and over a decade of professional experience spanning
              styling, editorial direction, and brand development, I bring an
              analytical intelligence to aesthetic decisions.
            </p>
            <p>
              This is not about trends. It is about cultivating a personal
              visual language — coherent, elevated, and entirely yours.
            </p>
          </div>
          <Link href="/contact" className="cta-line">
            Begin the Conversation
          </Link>
        </div>
      </section>

      <section className="ap-credentials">
        <div className="rv">
          <p className="s-lbl">Experience</p>
          <h2 className="a-h" style={{ maxWidth: "18ch" }}>
            A decade of
            <br />
            <em>considered</em> work.
          </h2>
        </div>
        <div className="ap-cred-grid rv">
          {credentials.map((c) => (
            <div className="ap-cred-item" key={c.year}>
              <span className="ap-cred-year">{c.year}</span>
              <p className="ap-cred-role">{c.role}</p>
              <p className="ap-cred-place">{c.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-values">
        <div className="rv">
          <p className="s-lbl">What I believe</p>
          <h2 className="a-h">
            The principles
            <br />
            behind the <em>work.</em>
          </h2>
          <div className="a-body" style={{ marginBottom: 0 }}>
            <p>
              Every decision I make for a client — whether selecting a garment
              or editing a wardrobe of two hundred pieces — is filtered through
              a consistent set of values.
            </p>
          </div>
        </div>
        <div className="ap-values-list rv">
          {values.map((v) => (
            <div className="ap-value-item" key={v.n}>
              <span className="ap-value-n">{v.n}</span>
              <span className="ap-value-text">{v.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="phil">
        <blockquote className="ph-q rv">
          &ldquo;The considered dresser doesn&apos;t follow fashion &mdash; she{" "}
          <em>converses</em> with it.&rdquo;
        </blockquote>
        <p className="ph-a">&mdash; Tara Ala</p>
        <div style={{ marginTop: "3rem" }}>
          <Link href="/services" className="cta-line rv">
            Explore Services
          </Link>
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
