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
  themeColor: "#262626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Blade House Barbershop Jakarta - Cukur & Fade di Kebayoran Baru",
    template: "%s | Blade House",
  },
  description: "Blade House Barbershop di Kebayoran Baru, Jakarta Selatan. Cut, fade & beard trim. Buka Senin-Minggu 11.00-22.00. Walk in & reservasi via WA.",
  keywords: ["barbershop jakarta selatan", "cukur kebayoran baru", "fade jakarta", "beard trim jakarta", "blade house barber"],
  authors: [{ name: "Blade House Barbershop Jakarta" }],
  creator: "Blade House",
  publisher: "Blade House Barbershop Jakarta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Blade House Barbershop Jakarta - Cukur & Fade di Kebayoran Baru",
    description: "Blade House Barbershop di Kebayoran Baru, Jakarta Selatan. Cut, fade & beard trim. Buka Senin-Minggu 11.00-22.00. Walk in & reservasi via WA.",
    siteName: "Blade House Barbershop Jakarta",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Blade House Barbershop Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blade House Barbershop Jakarta - Cukur & Fade di Kebayoran Baru",
    description: "Blade House Barbershop di Kebayoran Baru, Jakarta Selatan. Cut, fade & beard trim. Buka Senin-Minggu 11.00-22.00. Walk in & reservasi via WA.",
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
  category: "Barbershop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    name: "Blade House Barbershop Jakarta",
    image: "/images/logo.jpg",
    description: "Blade House Barbershop di Kebayoran Baru, Jakarta Selatan. Cut, fade & beard trim. Buka Senin-Minggu 11.00-22.00. Walk in & reservasi via WA.",
    telephone: "+628118462569",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kebayoran Baru, Jakarta Selatan",
      addressCountry: "ID",
    },
    
        openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "22:00",
    },
    sameAs: ["https://www.instagram.com/bladehousebarber.jkt/"],
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
