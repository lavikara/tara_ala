import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: "Portfolio — Editorial Styling, Personal Styling & Campaign Direction",
  description:
    "Selected work by Tara Ala: editorial styling for Porter Magazine and Vogue Arabia, personal styling engagements, campaign direction for Stella McCartney, and brand styling for Net-a-Porter.",
  keywords: [
    "fashion stylist portfolio London",
    "editorial styling portfolio",
    "fashion creative director work",
    "Porter Magazine styling",
    "Vogue Arabia editorial",
    "campaign fashion direction",
    "personal styling examples",
    "wardrobe transformation",
    "brand styling portfolio",
  ],
  alternates: {
    canonical: "https://www.taraala.com/work",
  },
  openGraph: {
    title: "Portfolio — Tara Ala, London",
    description:
      "Selected editorial, personal, brand, and campaign work by fashion stylist and creative director Tara Ala.",
    url: "https://www.taraala.com/work",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tara Ala portfolio — editorial fashion styling",
      },
    ],
  },
  twitter: {
    title: "Portfolio — Tara Ala, London",
    description:
      "Selected editorial, personal, brand, and campaign work by fashion stylist and creative director Tara Ala.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop"],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
