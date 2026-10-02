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
  themeColor: "#C1355E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "CLARISSA Solo Fashion Wanita - Boutique Fashion Wanita di Solo",
    template: "%s | CLARISSA",
  },
  description: "CLARISSA Solo Fashion Wanita, toko fashion wanita kekinian di Solo. New arrival tiap minggu, buka 08.00-21.00 setiap hari. Cek katalog @clarissa.catalog lalu chat WA admin.",
  keywords: ["CLARISSA Solo", "boutique Solo", "fashion wanita Solo", "toko baju Solo", "clarissasolo.id", "outfit wanita Solo", "leather jacket Solo"],
  authors: [{ name: "CLARISSA Solo Fashion Wanita" }],
  creator: "CLARISSA",
  publisher: "CLARISSA Solo Fashion Wanita",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CLARISSA Solo Fashion Wanita - Boutique Fashion Wanita di Solo",
    description: "CLARISSA Solo Fashion Wanita, toko fashion wanita kekinian di Solo. New arrival tiap minggu, buka 08.00-21.00 setiap hari. Cek katalog @clarissa.catalog lalu chat WA admin.",
    siteName: "CLARISSA Solo Fashion Wanita",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLARISSA Solo Fashion Wanita - Boutique Fashion Wanita di Solo",
    description: "CLARISSA Solo Fashion Wanita, toko fashion wanita kekinian di Solo. New arrival tiap minggu, buka 08.00-21.00 setiap hari. Cek katalog @clarissa.catalog lalu chat WA admin.",
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
  category: "Boutique / Fashion Wanita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "CLARISSA Solo Fashion Wanita",
    url: "https://www.instagram.com/clarissasolo.id/",
    sameAs: ["https://www.instagram.com/clarissasolo.id/"],
    description: "CLARISSA Solo Fashion Wanita, toko fashion wanita kekinian di Solo. New arrival tiap minggu, buka 08.00-21.00 setiap hari. Cek katalog @clarissa.catalog lalu chat WA admin.",
    telephone: "+6285719611812",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solo", addressRegion: "Jawa Tengah", addressCountry: "ID"
    },
        openingHours: "Mo-Su 08:00-21:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan CLARISSA Solo Fashion Wanita",
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
