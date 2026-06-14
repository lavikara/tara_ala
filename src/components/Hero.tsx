import Image from "next/image";
import Link from "next/link";
import { imgs } from "../lib/images";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="h-left">
        <span className="h-eye">
          London · Fashion Stylist &amp; Creative Director
        </span>
        <h1 className="h-name">
          <span className="row l1">
            <span>Tara</span>
          </span>
          <span className="row l2">
            <span>Ala</span>
          </span>
        </h1>
        <div className="h-rule" />
        <div className="h-desc">
          <span className="h-desc-i">Personal Styling</span>
          <span className="h-desc-i">Creative Direction</span>
          <span className="h-desc-i">Editorial Vision</span>
        </div>
        <div
          style={{
            marginTop: "3.5rem",
            opacity: 0,
            animation: "fu 1s ease 1.4s forwards",
          }}
        >
          <Link href="/about" className="cta-line">
            Discover the Practice
          </Link>
        </div>
      </div>
      <div className="h-right">
        <Image
          src={imgs.hero}
          alt="Fashion editorial portrait"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div className="h-img-overlay" />
      </div>
    </section>
  );
}
