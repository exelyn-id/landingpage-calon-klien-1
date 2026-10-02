import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { faqs, programs } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#27272A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Hypergrafi - Fotografer Freelance Bandung",
    template: "%s | Hypergrafi",
  },
  description: "Hypergrafi, fotografer freelance Bandung untuk engagement, prewedding, wisuda dan yearbook, family, maternity, hingga gathering. Booking by appointment via WA/DM.",
  keywords: ["Hypergrafi", "fotografer Bandung", "jasa foto Bandung", "foto prewedding Bandung", "foto wisuda Bandung", "fotografer freelance", "hypergrafi"],
  authors: [{ name: "Hypergrafi Fotografer Freelance" }],
  creator: "Hypergrafi",
  publisher: "Hypergrafi Fotografer Freelance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hypergrafi - Fotografer Freelance Bandung",
    description: "Hypergrafi, fotografer freelance Bandung untuk engagement, prewedding, wisuda dan yearbook, family, maternity, hingga gathering. Booking by appointment via WA/DM.",
    siteName: "Hypergrafi Fotografer Freelance",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypergrafi - Fotografer Freelance Bandung",
    description: "Hypergrafi, fotografer freelance Bandung untuk engagement, prewedding, wisuda dan yearbook, family, maternity, hingga gathering. Booking by appointment via WA/DM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Jasa Fotografi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hypergrafi Fotografer Freelance",
    url: "https://www.instagram.com/hypergrafi/",
    sameAs: ["https://www.instagram.com/hypergrafi/"],
    description: "Hypergrafi, fotografer freelance Bandung untuk engagement, prewedding, wisuda dan yearbook, family, maternity, hingga gathering. Booking by appointment via WA/DM.",
    telephone: "+6285798282962",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung", addressCountry: "ID"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Hypergrafi Fotografer Freelance",
      itemListElement: programs.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
