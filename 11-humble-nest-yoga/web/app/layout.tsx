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
  themeColor: "#7A6547",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Humble Nest Yoga — Home Yoga Studio di Lebak Bulus, Jakarta Selatan",
    template: `%s | Humble Nest Yoga`,
  },
  description: "Humble Nest Yoga adalah home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan. Tersedia kelas grup ramah pemula, private, prenatal, kids, senior, dan workshop. Daftar kelas via WhatsApp.",
  keywords: [
    "humble nest yoga",
    "home yoga studio lebak bulus",
    "yoga jakarta selatan",
    "kelas yoga pemula jakarta",
    "private yoga jaksel",
    "prenatal yoga jakarta",
  ],
  authors: [{ name: "Humble Nest Yoga" }],
  creator: "Humble Nest Yoga",
  publisher: "Humble Nest Yoga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Humble Nest Yoga — Home Yoga Studio di Lebak Bulus, Jakarta Selatan",
    description: "Humble Nest Yoga adalah home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan. Tersedia kelas grup ramah pemula, private, prenatal, kids, senior, dan workshop. Daftar kelas via WhatsApp.",
    siteName: "Humble Nest Yoga",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Humble Nest Yoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humble Nest Yoga — Home Yoga Studio di Lebak Bulus, Jakarta Selatan",
    description: "Humble Nest Yoga adalah home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan. Tersedia kelas grup ramah pemula, private, prenatal, kids, senior, dan workshop. Daftar kelas via WhatsApp.",
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
  category: "Home Yoga Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",    additionalType: "https://schema.org/ExerciseGym",

    name: "Humble Nest Yoga",
    description: "Humble Nest Yoga adalah home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan. Tersedia kelas grup ramah pemula, private, prenatal, kids, senior, dan workshop. Daftar kelas via WhatsApp.",
    url: "https://www.instagram.com/humblenestyoga/",
    telephone: "+6287875984552",
    image: "/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lebak Bulus, Jaksel",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "Jadwal mingguan (cek carousel Instagram)",
    },
    sameAs: ["https://www.instagram.com/humblenestyoga/"],
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
