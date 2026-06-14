import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.taraala.com";
const SITE_NAME = "Tara Ala";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85&auto=format&fit=crop";

export const viewport: Viewport = {
  themeColor: "#1C1914",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Core ─────────────────────────────────────────────────────
  title: {
    default: "Tara Ala — Fashion Stylist & Creative Director",
    template: "%s | Tara Ala",
  },
  description:
    "London-based fashion stylist and creative director. Specialising in personal styling, wardrobe consultation, and editorial direction for discerning clients worldwide.",
  keywords: [
    "fashion stylist London",
    "personal stylist London",
    "wardrobe consultant",
    "creative director fashion",
    "editorial stylist",
    "luxury fashion stylist",
    "style consultant London",
    "wardrobe edit",
    "fashion editorial direction",
    "Mayfair stylist",
    "Tara Ala",
  ],
  authors: [{ name: "Tara Ala", url: SITE_URL }],
  creator: "Tara Ala",
  publisher: "Tara Ala",
  category: "Fashion & Style",

  // ── Icons ────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
  },

  // ── Robots ───────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ───────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tara Ala — Fashion Stylist & Creative Director",
    description:
      "London-based fashion stylist and creative director. Personal styling, wardrobe consultation, and editorial direction for discerning clients worldwide.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tara Ala — Fashion Stylist & Creative Director, London",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@taraala",
    creator: "@taraala",
    title: "Tara Ala — Fashion Stylist & Creative Director",
    description:
      "London-based fashion stylist and creative director. Personal styling, wardrobe consultation, and editorial direction.",
    images: [DEFAULT_OG_IMAGE],
  },

  // ── Alternate languages / canonical ──────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Verification (placeholders — replace with real tokens) ───
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <head>
        {/* JSON-LD: Person + ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Tara Ala",
                url: SITE_URL,
                image: DEFAULT_OG_IMAGE,
                jobTitle: "Fashion Stylist & Creative Director",
                worksFor: {
                  "@type": "Organization",
                  name: "Tara Ala Studio",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "London",
                  addressRegion: "Mayfair",
                  addressCountry: "GB",
                },
                sameAs: [
                  "https://www.instagram.com/taraala",
                  "https://www.pinterest.com/taraala",
                  "https://www.linkedin.com/in/taraala",
                ],
                knowsAbout: [
                  "Fashion Styling",
                  "Personal Styling",
                  "Creative Direction",
                  "Wardrobe Consultation",
                  "Editorial Direction",
                  "Brand Styling",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Tara Ala Studio",
                url: SITE_URL,
                logo: `${SITE_URL}/icon-192.png`,
                image: DEFAULT_OG_IMAGE,
                description:
                  "London-based fashion styling and creative direction studio offering personal styling, wardrobe consultation, and editorial direction.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mayfair",
                  addressLocality: "London",
                  postalCode: "W1",
                  addressCountry: "GB",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 51.5117,
                  longitude: -0.1478,
                },
                telephone: "",
                email: "hello@taraala.com",
                priceRange: "£££",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Styling Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Personal Styling",
                        description:
                          "Comprehensive personal styling engagement including wardrobe edit, colour analysis, style direction, and curated shopping.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Wardrobe Consultation",
                        description:
                          "In-depth wardrobe audit, gap analysis, and capsule wardrobe blueprint.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Editorial Direction",
                        description:
                          "Creative and fashion direction for editorial, campaign, and digital content.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Brand Styling",
                        description:
                          "Personal brand aesthetic development for founders, executives, and public figures.",
                      },
                    },
                  ],
                },
                sameAs: [
                  "https://www.instagram.com/taraala",
                  "https://www.pinterest.com/taraala",
                  "https://www.linkedin.com/in/taraala",
                ],
              },
            ]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
