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
  themeColor: "#8B5E34",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Kedai KopiKita - Coffee Shop Cozy di Sleman",
    template: "%s | Kedai KopiKita",
  },
  description: "Kedai KopiKita di Sleman, Yogyakarta. Espresso, manual brew, main course, dan dessert. Dine-in & take away, GoFood/GrabFood. Buka 11.00-23.00, tutup Kamis.",
  keywords: [
    "kopikita",
    "kedai kopi sleman",
    "coffee shop sleman",
    "kopi sleman",
    "nongkrong sleman",
    "manual brew sleman",
  ],
  authors: [{ name: "Kedai KopiKita" }],
  creator: "Kedai KopiKita",
  publisher: "Kedai KopiKita",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Kedai KopiKita - Coffee Shop Cozy di Sleman",
    description: "Espresso, manual brew, makanan, dan dessert. Dine-in & take away, tersedia di GoFood dan GrabFood.",
    siteName: "Kedai KopiKita",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "Kedai KopiKita" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedai KopiKita - Coffee Shop Cozy di Sleman",
    description: "Espresso, manual brew, makanan, dan dessert. Dine-in & take away, tersedia di GoFood dan GrabFood.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Coffee Shop / Kedai Kopi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Kedai KopiKita",
    description: "Kedai KopiKita di Sleman, Yogyakarta. Espresso, manual brew, main course, dan dessert. Dine-in & take away, GoFood/GrabFood. Buka 11.00-23.00, tutup Kamis.",
    telephone: "+6287834198643",
    address: { "@type": "PostalAddress", streetAddress: "Jln Salak Turi km 1, Kepitu, Sleman, Yogyakarta", addressLocality: "Sleman", addressCountry: "ID" },
    openingHours: "11.00-23.00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Kedai KopiKita",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Espresso Based",
            description: "Kopi susu, latte, dan varian espresso lainnya.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manual Brew",
            description: "Seduhan V60 dan aeropress untuk penikmat kopi.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Main Course",
            description: "Makanan berat untuk makan siang dan malam.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snacking",
            description: "Camilan pendamping kopi dan nongkrong.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sweetest Things",
            description: "Dessert manis penutup yang pas.",
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
