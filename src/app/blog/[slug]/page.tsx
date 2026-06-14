import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ClientShell from "../../../components/ClientShell";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "../../../lib/articles";
import type { ArticleSection } from "../../../lib/articles";

const SITE_URL = "https://www.taraala.com";

// ── Static generation ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ── Per-page metadata ──────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      article.tag,
      "fashion journal",
      "personal style",
      "considered dressing",
      "Tara Ala",
      "London fashion",
    ],
    authors: [{ name: "Tara Ala", url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.dateISO,
      authors: ["Tara Ala"],
      tags: [article.tag],
      images: [
        {
          url: article.imgWide,
          width: 1400,
          height: 788,
          alt: article.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.imgWide],
    },
  };
}

// ── Body renderer ─────────────────────────────────────────────────────────
function RenderBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((s, i) => {
        if (s.type === "p") {
          return i === 0 ? (
            <p key={i} className="prose-intro">
              {s.text}
            </p>
          ) : (
            <p key={i} className="prose-p">
              {s.text}
            </p>
          );
        }
        if (s.type === "h2")
          return (
            <h2 key={i} className="prose-h2">
              {s.text}
            </h2>
          );
        if (s.type === "h3")
          return (
            <h3 key={i} className="prose-h3">
              {s.text}
            </h3>
          );
        if (s.type === "quote") {
          return (
            <blockquote key={i} className="prose-quote">
              <span className="prose-quote-text">&ldquo;{s.text}&rdquo;</span>
              {s.attribution && (
                <cite className="prose-quote-attr">
                  &mdash; {s.attribution}
                </cite>
              )}
            </blockquote>
          );
        }
        if (s.type === "ul") {
          return (
            <ul key={i} className="prose-ul">
              {s.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug);
  const titleWords = article.title.split(" ");
  // Split title into up to 3 lines for the animated hero
  const third = Math.ceil(titleWords.length / 3);
  const titleLines = [
    titleWords.slice(0, third).join(" "),
    titleWords.slice(third, third * 2).join(" "),
    titleWords.slice(third * 2).join(" "),
  ].filter(Boolean);

  return (
    <ClientShell>
      <Navbar />

      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.dateISO,
            dateModified: article.dateISO,
            author: {
              "@type": "Person",
              name: "Tara Ala",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Tara Ala",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-192.png` },
            },
            image: { "@type": "ImageObject", url: article.imgWide },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${article.slug}`,
            },
            keywords: article.tag,
            articleSection: article.tag,
            wordCount: article.body
              .map((s) =>
                "text" in s ? s.text : "items" in s ? s.items.join(" ") : "",
              )
              .join(" ")
              .split(" ").length,
          }),
        }}
      />

      {/* Hero */}
      <header className="art-hero">
        <div className="art-hero-img">
          <Image
            src={article.imgWide}
            alt={article.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="art-hero-overlay" />
        <div className="art-hero-content">
          <span className="art-tag">{article.tag}</span>
          <h1 className="art-title">
            {titleLines.map((line, i) => (
              <span className="row" key={i}>
                <span
                  className={`r${i + 1}`}
                  style={{
                    display: "block",
                    opacity: 0,
                    transform: "translateY(100%)",
                    animation: `su 1s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.15}s forwards`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div className="art-meta">
            <span>{article.date}</span>
            <span className="art-meta-sep" />
            <span>{article.readTime}</span>
            <span className="art-meta-sep" />
            <span>Tara Ala</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="art-layout">
        <div className="art-body">
          <Link href="/blog" className="art-back">
            Back to Journal
          </Link>
          <RenderBody sections={article.body} />
          <hr className="prose-rule" />

          {/* Author byline */}
          <div className="art-byline">
            <div className="art-byline-avatar">
              <Image
                src={`https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=104&q=80&auto=format&fit=crop&crop=faces`}
                alt="Tara Ala"
                width={52}
                height={52}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <span className="art-byline-name">Tara Ala</span>
              <span className="art-byline-role">
                Fashion Stylist &amp; Creative Director · London
              </span>
            </div>
          </div>

          {/* Share / back */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Link href="/blog" className="art-back" style={{ marginBottom: 0 }}>
              All Articles
            </Link>
            <Link href="/contact" className="cta-line">
              Work with Tara
            </Link>
          </div>
        </div>
      </div>

      {/* Related articles */}
      <section className="art-related">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="s-lbl">Continue Reading</p>
            <h2 className="a-h" style={{ marginTop: "0.5rem" }}>
              More from the <em>journal.</em>
            </h2>
          </div>
          <Link href="/blog" className="cta-line">
            All Articles
          </Link>
        </div>
        <div className="art-related-grid">
          {related.map((rel) => (
            <Link
              href={`/blog/${rel.slug}`}
              key={rel.slug}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article className="bl-card rv">
                <div className="bl-card-img">
                  <Image
                    src={rel.img}
                    alt={rel.alt}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    className="bl-card-img-bg"
                    sizes="(max-width: 540px) 100vw, (max-width: 860px) 50vw, 33vw"
                  />
                </div>
                <span className="bl-card-tag">{rel.tag}</span>
                <h3 className="bl-card-h">{rel.title}</h3>
                <p className="bl-card-excerpt">{rel.excerpt}</p>
                <span className="bl-card-meta">
                  {rel.date} · {rel.readTime}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
