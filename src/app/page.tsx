import type { Metadata } from "next";
import ClientShell from "../components/ClientShell";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tara Ala — Fashion Stylist & Creative Director, London",
  description:
    "Tara Ala is a London-based fashion stylist and creative director specialising in personal styling, wardrobe consultation, and editorial direction. Mayfair studio, clients worldwide.",
  keywords: [
    "fashion stylist London",
    "personal stylist Mayfair",
    "wardrobe consultant London",
    "creative director",
    "editorial stylist UK",
    "luxury personal styling",
    "Tara Ala stylist",
  ],
  alternates: {
    canonical: "https://www.taraala.com",
  },
  openGraph: {
    title: "Tara Ala — Fashion Stylist & Creative Director, London",
    description:
      "London-based fashion stylist and creative director. Personal styling, wardrobe consultation, and editorial direction for discerning clients worldwide.",
    url: "https://www.taraala.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tara Ala — Fashion Stylist & Creative Director",
      },
    ],
  },
  twitter: {
    title: "Tara Ala — Fashion Stylist & Creative Director, London",
    description:
      "London-based fashion stylist and creative director. Personal styling, wardrobe consultation, and editorial direction.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85&auto=format&fit=crop",
    ],
  },
};

export default function Home() {
  return (
    <ClientShell>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Philosophy />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </ClientShell>
  );
}
