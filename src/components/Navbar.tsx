"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navClass = ["main-nav", scrolled || !isHome ? "scrolled" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        <Link href="/" className="n-logo">
          Tara Ala
        </Link>

        <ul className="n-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "n-active" : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="n-btn">
          Book a Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          className="n-ham"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={open ? "ham-top open" : "ham-top"} />
          <span className={open ? "ham-bot open" : "ham-bot"} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={open ? "n-drawer open" : "n-drawer"}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="n-drawer-link">
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="n-drawer-cta">
          Book a Consultation
        </Link>
      </div>
    </>
  );
}
