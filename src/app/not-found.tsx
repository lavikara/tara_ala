import type { Metadata } from "next";
import Link from "next/link";
import ClientShell from "../components/ClientShell";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found — Tara Ala",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: false },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <ClientShell>
      <Navbar />
      <main className="not-found" role="main">
        {/* Left: content */}
        <div className="nf-left">
          <p className="nf-eyebrow">Error 404</p>

          <div className="nf-code" aria-hidden="true">
            404
          </div>

          <h1 className="nf-heading">
            <span className="row r1">
              <span>Nothing here</span>
            </span>
            <span className="row r2">
              <span>to wear.</span>
            </span>
          </h1>

          <p className="nf-body">
            The page you&apos;re looking for has moved, been archived, or never
            existed. It happens to the best wardrobes too — sometimes a piece
            simply isn&apos;t where you left it.
          </p>

          <div className="nf-actions">
            <Link href="/" className="nf-btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="nf-btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: decorative panel with quick-nav */}
        <div className="nf-right" aria-hidden="true">
          <div className="nf-right-bg" />
          <nav className="nf-links" aria-label="Quick navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="nf-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </ClientShell>
  );
}
