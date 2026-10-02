import React from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#program" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex flex-col items-center text-center">
        <div className="mb-8">
          <p className="text-3xl font-bold mb-2">Hypergrafi</p>
          <p className="text-lg font-medium opacity-90">Fotografer Freelance Bandung</p>
        </div>

        <p className="max-w-md mx-auto mb-4 opacity-80 leading-relaxed">
          Engagement, prewedding, wisuda, family, maternity dan gathering. By appointment.
        </p>

        <p className="max-w-md mx-auto mb-2 opacity-80 text-sm leading-relaxed">
          Bandung (freelance) - By appointment
        </p>

        <a
          href="https://www.instagram.com/hypergrafi/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 opacity-80 hover:opacity-100 transition-opacity text-sm font-medium underline underline-offset-4"
        >
          Instagram @hypergrafi
        </a>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-cream opacity-80 hover:opacity-100 transition-opacity text-sm md:text-base font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mb-12">
          <WhatsAppButton variant="light" label="Booking via WA via WhatsApp" />
        </div>

        <div className="border-t border-cream/20 pt-8 w-full">
          <p className="text-sm opacity-60">
            &copy; {currentYear} Hypergrafi Fotografer Freelance. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
