import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="ft-top">
        <Link href="/" className="ft-logo">
          Tara Ala
        </Link>
        <nav className="ft-nav">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
      <div className="ft-bot">
        <span className="ft-c">&copy; 2026 Tara Ala. All rights reserved.</span>
        <div className="ft-soc">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
