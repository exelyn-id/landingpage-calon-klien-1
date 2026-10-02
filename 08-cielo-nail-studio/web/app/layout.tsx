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
  themeColor: "#BE7E8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Cielo Nail Studio - Nail Art Studio di Cipete, Jakarta Selatan",
    template: "%s | Cielo",
  },
  description: "Cielo Nail Studio di Cipete, Jakarta Selatan. Manicure, pedicure + spa, nail art, builder, gel polish, kids, hingga home service. Buka 10.00-21.00 setiap hari.",
  keywords: ["Cielo Nail Studio", "nail art Cipete", "nail studio Jakarta Selatan", "manicure pedicure Jaksel", "home service nail art", "cielonailstudio.id"],
  authors: [{ name: "Cielo Nail Studio" }],
  creator: "Cielo",
  publisher: "Cielo Nail Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cielo Nail Studio - Nail Art Studio di Cipete, Jakarta Selatan",
    description: "Cielo Nail Studio di Cipete, Jakarta Selatan. Manicure, pedicure + spa, nail art, builder, gel polish, kids, hingga home service. Buka 10.00-21.00 setiap hari.",
    siteName: "Cielo Nail Studio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cielo Nail Studio - Nail Art Studio di Cipete, Jakarta Selatan",
    description: "Cielo Nail Studio di Cipete, Jakarta Selatan. Manicure, pedicure + spa, nail art, builder, gel polish, kids, hingga home service. Buka 10.00-21.00 setiap hari.",
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
  category: "Nail Art Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Cielo Nail Studio",
    url: "https://www.instagram.com/cielonailstudio.id/",
    sameAs: ["https://www.instagram.com/cielonailstudio.id/"],
    description: "Cielo Nail Studio di Cipete, Jakarta Selatan. Manicure, pedicure + spa, nail art, builder, gel polish, kids, hingga home service. Buka 10.00-21.00 setiap hari.",
    telephone: "+6282118301357",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Abdul Majid Raya No.44R, Cipete", addressLocality: "Jakarta Selatan", addressCountry: "ID"
    },
        openingHours: "Mo-Su 10:00-21:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Cielo Nail Studio",
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
