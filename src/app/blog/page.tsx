import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientShell from "../../components/ClientShell";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles } from "../../lib/articles";

export const metadata: Metadata = {
  title: "Journal — Style Intelligence, Considered Dressing & Fashion Insight",
  description:
    "The Tara Ala journal: thoughtful writing on personal style, wardrobe architecture, creative direction, and the art of considered dressing. Published from London.",
  keywords: [
    "fashion journal London",
    "personal style blog",
    "capsule wardrobe advice",
    "fashion editorial insight",
    "considered dressing",
    "wardrobe architecture tips",
    "style intelligence",
    "investment dressing",
    "fashion creative direction",
    "London fashion blog",
  ],
  alternates: { canonical: "https://www.taraala.com/blog" },
  openGraph: {
    title: "Journal — Style Intelligence & Considered Dressing | Tara Ala",
    description:
      "Thoughtful writing on personal style, wardrobe architecture, and the art of considered dressing. The Tara Ala journal, published from London.",
    url: "https://www.taraala.com/blog",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tara Ala Journal — style intelligence and considered dressing",
      },
    ],
  },
  twitter: {
    title: "Journal — Style Intelligence & Considered Dressing | Tara Ala",
    description:
      "Thoughtful writing on personal style, wardrobe architecture, and the art of considered dressing.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85&auto=format&fit=crop",
    ],
  },
};

const [featured, ...rest] = articles;

export default function BlogPage() {
  return (
    <ClientShell>
      <Navbar />

      {/* JSON-LD: Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "The Tara Ala Journal",
            url: "https://www.taraala.com/blog",
            description:
              "Style intelligence, considered dressing, and fashion insight by Tara Ala.",
            author: {
              "@type": "Person",
              name: "Tara Ala",
              url: "https://www.taraala.com",
            },
            blogPost: articles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              description: a.excerpt,
              datePublished: a.dateISO,
              author: { "@type": "Person", name: "Tara Ala" },
              image: a.imgWide,
              url: `https://www.taraala.com/blog/${a.slug}`,
              keywords: a.tag,
            })),
          }),
        }}
      />

      <header className="pg-hero pg-hero-light">
        <span className="pg-eye">The Journal</span>
        <h1 className="pg-title pg-title-light">
          <span className="row r1">
            <span>Thoughts on</span>
          </span>
          <span className="row r2">
            <span>style &amp; life.</span>
          </span>
        </h1>
        <div className="pg-rule" />
      </header>

      {/* Featured */}
      <Link
        href={`/blog/${featured.slug}`}
        style={{ display: "block", textDecoration: "none" }}
      >
        <article className="bl-featured" style={{ cursor: "none" }}>
          <div className="bl-feat-img">
            <Image
              src={featured.imgWide}
              alt={featured.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,8,6,0.35)",
              }}
            />
          </div>
          <div className="bl-feat-content rv">
            <p className="bl-feat-tag">{featured.tag} · Featured</p>
            <h2 className="bl-feat-h">
              Why Your Capsule Wardrobe
              <br />
              Isn&apos;t <em>Working</em>
            </h2>
            <p className="bl-feat-excerpt">{featured.excerpt}</p>
            <span className="bl-feat-meta">
              {featured.date} · {featured.readTime}
            </span>
            <div style={{ marginTop: "2.5rem" }}>
              <span className="cta-line">Read Article</span>
            </div>
          </div>
        </article>
      </Link>

      {/* Grid */}
      <div className="bl-grid">
        {rest.map((a) => (
          <Link
            href={`/blog/${a.slug}`}
            key={a.slug}
            style={{ display: "block", textDecoration: "none" }}
          >
            <article className="bl-card rv">
              <div className="bl-card-img">
                <Image
                  src={a.img}
                  alt={a.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  className="bl-card-img-bg"
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <span className="bl-card-tag">{a.tag}</span>
              <h3 className="bl-card-h">{a.title}</h3>
              <p className="bl-card-excerpt">{a.excerpt}</p>
              <span className="bl-card-meta">
                {a.date} · {a.readTime}
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <section
        style={{
          background: "var(--dark-2)",
          padding: "6rem var(--px)",
          textAlign: "center",
        }}
      >
        <div className="rv">
          <p
            className="s-lbl"
            style={{ color: "var(--gold-s)", justifyContent: "center" }}
          >
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
            The Letter
          </p>
          <h2
            style={{
              fontFamily: "var(--f-serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem,4vw,4rem)",
              color: "var(--bg)",
              marginTop: "1rem",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Style intelligence,
            <br />
            <em style={{ color: "var(--gold)" }}>delivered monthly.</em>
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: "0.88rem",
              color: "var(--light)",
              maxWidth: "36ch",
              margin: "0 auto 2.5rem",
              lineHeight: 1.9,
            }}
          >
            Considered thoughts on dressing, occasional behind-the-scenes, and
            the pieces worth knowing about. No noise.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRight: "none",
                padding: "0.85em 1.2em",
                fontFamily: "var(--f-sans)",
                fontWeight: 300,
                fontSize: "0.85rem",
                color: "var(--bg)",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "var(--gold)",
                border: "1px solid var(--gold)",
                color: "var(--dark)",
                fontFamily: "var(--f-sans)",
                fontWeight: 300,
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.85em 1.8em",
                cursor: "none",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
