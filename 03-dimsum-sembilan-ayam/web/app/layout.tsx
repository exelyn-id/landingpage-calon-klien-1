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
  themeColor: "#B91C1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Dimsum Sembilan Ayam - Dimsum Halal di Bandung",
    template: "%s | Dimsum Sembilan Ayam",
  },
  description: "Dimsum Sembilan Ayam di Pasir Kaliki, Bandung. Dimsum halal ala Hong Kong: hakau, bakpao telur asin, siomay. Buka tiap hari 07.00-22.00. Rating Google 4.5.",
  keywords: [
    "dimsum sembilan ayam",
    "dimsum bandung",
    "dimsum halal bandung",
    "dimsum pasir kaliki",
    "bakpao telur asin bandung",
    "dimsum hong kong bandung",
  ],
  authors: [{ name: "Dimsum Sembilan Ayam" }],
  creator: "Dimsum Sembilan Ayam",
  publisher: "Dimsum Sembilan Ayam",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Dimsum Sembilan Ayam - Dimsum Halal di Bandung",
    description: "Hakau, bakpao telur asin best seller, siomay. Halal, buka tiap hari 07.00-22.00 di Pasir Kaliki.",
    siteName: "Dimsum Sembilan Ayam",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "Dimsum Sembilan Ayam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimsum Sembilan Ayam - Dimsum Halal di Bandung",
    description: "Hakau, bakpao telur asin best seller, siomay. Halal, buka tiap hari 07.00-22.00 di Pasir Kaliki.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Resto Dimsum Halal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Dimsum Sembilan Ayam",
    description: "Dimsum Sembilan Ayam di Pasir Kaliki, Bandung. Dimsum halal ala Hong Kong: hakau, bakpao telur asin, siomay. Buka tiap hari 07.00-22.00. Rating Google 4.5.",
    telephone: "+628112228213",
    address: { "@type": "PostalAddress", streetAddress: "Jl. Pasir Kaliki No.170, Bandung", addressLocality: "Bandung", addressCountry: "ID" },
    openingHours: "07.00-22.00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Dimsum Sembilan Ayam",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hakau Udang",
            description: "Dimsum kukus isi udang yang juicy.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bakpao Telur Asin",
            description: "Best seller dengan isian telur asin lumer.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Siomay",
            description: "Siomay ayam kukus yang gurih.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wonton Soup",
            description: "Sup hangat berisi wonton ayam.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cheong Fun",
            description: "Kulit beras gulung lembut khas Hong Kong.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bubur & Bakmie Kering",
            description: "Bubur hangat dan bakmie kering untuk pengganjal.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paket Hampers",
            description: "Parsel dimsum untuk bingkisan. Hubungi 0821-2080-5258.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">{children}</body>
    </html>
  );
}
