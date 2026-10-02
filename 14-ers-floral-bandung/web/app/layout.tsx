import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { faqs } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C4839B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "ers.floral — Florist Buket Bunga Handcrafted di Bandung, Mulai Rp30 Ribu",
    template: `%s | ers.floral`,
  },
  description: "ers.floral adalah florist di Bandung dengan buket fresh dan artificial handcrafted: bouquet, money bouquet, basket, dan letter flower. Harga mulai Rp30 ribu. Order H-3 via WhatsApp.",
  keywords: [
    "ers.floral",
    "florist bandung",
    "buket bunga bandung",
    "money bouquet bandung",
    "artificial bouquet bandung",
    "buket wisuda bandung",
  ],
  authors: [{ name: "ers.floral" }],
  creator: "ers.floral",
  publisher: "ers.floral",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ers.floral — Florist Buket Bunga Handcrafted di Bandung, Mulai Rp30 Ribu",
    description: "ers.floral adalah florist di Bandung dengan buket fresh dan artificial handcrafted: bouquet, money bouquet, basket, dan letter flower. Harga mulai Rp30 ribu. Order H-3 via WhatsApp.",
    siteName: "ers.floral",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo ers.floral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ers.floral — Florist Buket Bunga Handcrafted di Bandung, Mulai Rp30 Ribu",
    description: "ers.floral adalah florist di Bandung dengan buket fresh dan artificial handcrafted: bouquet, money bouquet, basket, dan letter flower. Harga mulai Rp30 ribu. Order H-3 via WhatsApp.",
    images: ["/images/logo.jpg"],
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
  category: "Florist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",    additionalType: "https://schema.org/Florist",

    name: "ers.floral",
    description: "ers.floral adalah florist di Bandung dengan buket fresh dan artificial handcrafted: bouquet, money bouquet, basket, dan letter flower. Harga mulai Rp30 ribu. Order H-3 via WhatsApp.",
    url: "https://www.instagram.com/ers.floral/",
    telephone: "+6285168888782",
    image: "/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "Order H-3 (pre-order 3 hari sebelumnya)",
    },
    sameAs: ["https://www.instagram.com/ers.floral/"],
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
