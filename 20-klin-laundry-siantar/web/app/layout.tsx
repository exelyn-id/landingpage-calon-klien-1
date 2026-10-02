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
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Mr Klin Laundry Siantar - Laundry Kiloan & Antar-Jemput Gratis",
    template: "%s | Mr Klin",
  },
  description: "Mr Klin Laundry di Jl Sutomo No.29, Pematangsiantar. Paket bulanan 30-75 kg mulai Rp174rb, sepatu & dry clean. Antar-jemput gratis. Order via WA.",
  keywords: ["laundry siantar", "laundry kiloan pematangsiantar", "laundry antar jemput siantar", "dry clean siantar", "cuci sepatu siantar"],
  authors: [{ name: "Mr Klin Laundry Siantar" }],
  creator: "Mr Klin",
  publisher: "Mr Klin Laundry Siantar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mr Klin Laundry Siantar - Laundry Kiloan & Antar-Jemput Gratis",
    description: "Mr Klin Laundry di Jl Sutomo No.29, Pematangsiantar. Paket bulanan 30-75 kg mulai Rp174rb, sepatu & dry clean. Antar-jemput gratis. Order via WA.",
    siteName: "Mr Klin Laundry Siantar",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Mr Klin Laundry Siantar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Klin Laundry Siantar - Laundry Kiloan & Antar-Jemput Gratis",
    description: "Mr Klin Laundry di Jl Sutomo No.29, Pematangsiantar. Paket bulanan 30-75 kg mulai Rp174rb, sepatu & dry clean. Antar-jemput gratis. Order via WA.",
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
  category: "Laundry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: "Mr Klin Laundry Siantar",
    image: "/images/logo.jpg",
    description: "Mr Klin Laundry di Jl Sutomo No.29, Pematangsiantar. Paket bulanan 30-75 kg mulai Rp174rb, sepatu & dry clean. Antar-jemput gratis. Order via WA.",
    telephone: "+6285277780009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl Sutomo No.29, Pematangsiantar",
      addressCountry: "ID",
    },
    priceRange: "Rp174.000+",
        openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: ["https://www.instagram.com/klinlaundry_siantar/"],
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
