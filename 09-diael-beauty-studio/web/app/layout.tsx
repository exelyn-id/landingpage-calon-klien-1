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
  themeColor: "#EC4899",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Diael Beauty Studio - Lash, Brow & Nail Studio di Surabaya",
    template: "%s | Diael",
  },
  description: "Diael Beauty Studio di Surabaya: nail art, threading brow, eyelash, Korean lash lift mulai Rp25rb. Walk-in dan booking di Dharmawangsa dan Royal Plaza. Buka 11.00-20.00.",
  keywords: ["Diael Beauty Studio", "lash lift Surabaya", "eyelash Surabaya", "nail art Surabaya", "threading brow Surabaya", "diael.studio"],
  authors: [{ name: "Diael Beauty Studio" }],
  creator: "Diael",
  publisher: "Diael Beauty Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Diael Beauty Studio - Lash, Brow & Nail Studio di Surabaya",
    description: "Diael Beauty Studio di Surabaya: nail art, threading brow, eyelash, Korean lash lift mulai Rp25rb. Walk-in dan booking di Dharmawangsa dan Royal Plaza. Buka 11.00-20.00.",
    siteName: "Diael Beauty Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diael Beauty Studio - Lash, Brow & Nail Studio di Surabaya",
    description: "Diael Beauty Studio di Surabaya: nail art, threading brow, eyelash, Korean lash lift mulai Rp25rb. Walk-in dan booking di Dharmawangsa dan Royal Plaza. Buka 11.00-20.00.",
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
  category: "Lash / Brow / Nail Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Diael Beauty Studio",
    url: "https://www.instagram.com/diael.studio/",
    sameAs: ["https://www.instagram.com/diael.studio/"],
    description: "Diael Beauty Studio di Surabaya: nail art, threading brow, eyelash, Korean lash lift mulai Rp25rb. Walk-in dan booking di Dharmawangsa dan Royal Plaza. Buka 11.00-20.00.",
    telephone: "+628139234983",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dharmawangsa No.71", addressLocality: "Surabaya", addressCountry: "ID"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Diael Beauty Studio",
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
