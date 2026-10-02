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
  themeColor: "#1D4ED8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Mumu Bimbel — Les Private Calistung & Matematika di Depok & Jakarta Selatan",
    template: `%s | Mumu Bimbel`,
  },
  description: "Mumu Bimbel adalah les private ke rumah untuk calistung, matematika SD–SMP–SMA, dan lancar baca di Sawangan Depok dan Jakarta Selatan. Tutor berpengalaman, buka 12.30–22.00.",
  keywords: [
    "mumu bimbel",
    "les private depok",
    "les private sawangan",
    "bimbel calistung depok",
    "les matematika sd smp sma",
    "guru les ke rumah jaksel",
  ],
  authors: [{ name: "Mumu Bimbel" }],
  creator: "Mumu Bimbel",
  publisher: "Mumu Bimbel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mumu Bimbel — Les Private Calistung & Matematika di Depok & Jakarta Selatan",
    description: "Mumu Bimbel adalah les private ke rumah untuk calistung, matematika SD–SMP–SMA, dan lancar baca di Sawangan Depok dan Jakarta Selatan. Tutor berpengalaman, buka 12.30–22.00.",
    siteName: "Mumu Bimbel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Mumu Bimbel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumu Bimbel — Les Private Calistung & Matematika di Depok & Jakarta Selatan",
    description: "Mumu Bimbel adalah les private ke rumah untuk calistung, matematika SD–SMP–SMA, dan lancar baca di Sawangan Depok dan Jakarta Selatan. Tutor berpengalaman, buka 12.30–22.00.",
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
  category: "Bimbel / Les Private",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mumu Bimbel",
    description: "Mumu Bimbel adalah les private ke rumah untuk calistung, matematika SD–SMP–SMA, dan lancar baca di Sawangan Depok dan Jakarta Selatan. Tutor berpengalaman, buka 12.30–22.00.",
    url: "https://www.instagram.com/mumubimbel/",
    telephone: "+6285773386952",
    image: "/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sawangan, Depok",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "12.30–22.00",
    },
    sameAs: ["https://www.instagram.com/mumubimbel/"],
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
