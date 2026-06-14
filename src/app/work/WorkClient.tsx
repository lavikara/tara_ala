"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClientShell from "../../components/ClientShell";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { imgs } from "../../lib/images";

const categories = ["All", "Editorial", "Personal", "Brand", "Campaign"];

const projects = [
  {
    img: imgs.portfolio1,
    alt: "AW collection editorial direction for Porter Magazine",
    tag: "Editorial Styling",
    cat: "Editorial",
    title: "AW Collection Direction",
    client: "Porter Magazine",
  },
  {
    img: imgs.portfolio2,
    alt: "Personal styling complete wardrobe edit",
    tag: "Personal Styling",
    cat: "Personal",
    title: "The Complete Edit",
    client: "Private Client",
  },
  {
    img: imgs.portfolio3,
    alt: "Trend intelligence editorial series for Net-a-Porter",
    tag: "Brand Styling",
    cat: "Brand",
    title: "Trend Intelligence Series",
    client: "Net-a-Porter",
  },
  {
    img: imgs.portfolio4,
    alt: "SS campaign creative direction",
    tag: "Campaign",
    cat: "Campaign",
    title: "SS Campaign Direction",
    client: "Stella McCartney",
  },
  {
    img: imgs.portfolio5,
    alt: "The new minimalism editorial for Vogue Arabia",
    tag: "Editorial Styling",
    cat: "Editorial",
    title: "The New Minimalism",
    client: "Vogue Arabia",
  },
  {
    img: imgs.portfolio6,
    alt: "Wardrobe architecture personal styling",
    tag: "Personal Styling",
    cat: "Personal",
    title: "Wardrobe Architecture",
    client: "Private Client",
  },
];

export default function WorkClient() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.cat === active);

  return (
    <ClientShell>
      <Navbar />

      <header className="pg-hero pg-hero-dark">
        <span className="pg-eye">Selected Work</span>
        <h1 className="pg-title pg-title-dark">
          <span className="row r1">
            <span>Portfolio</span>
          </span>
          <span className="row r2">
            <span>&amp; projects.</span>
          </span>
        </h1>
        <div className="pg-rule" />
      </header>

      <div className="wp-filter">
        {categories.map((c) => (
          <button
            key={c}
            className={`wp-filter-btn${active === c ? " active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="wp-grid">
        {filtered.map((p, i) => (
          <div className="wp-item" key={i}>
            <Image
              src={p.img}
              alt={p.alt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="wp-photo"
              sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <div className="wp-ov">
              <div>
                <span className="wp-tag">
                  {p.tag} · {p.client}
                </span>
                <span className="wp-title">{p.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section
        style={{
          padding: "5rem var(--px) 8rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="rv"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "2rem",
          }}
        >
          <p className="s-lbl" style={{ justifyContent: "center" }}>
            Work Together
          </p>
          <h2 className="a-h" style={{ maxWidth: "18ch", textAlign: "center" }}>
            Have a project in <em>mind?</em>
          </h2>
          <p
            className="a-body"
            style={{ maxWidth: "38ch", textAlign: "center", marginBottom: 0 }}
          >
            Whether editorial, personal, or brand — I&apos;d love to hear what
            you&apos;re working on.
          </p>
          <Link href="/contact" className="cta-line">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </ClientShell>
  );
}
