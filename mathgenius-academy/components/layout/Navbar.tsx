"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { cn } from "../ui/Button";

const NAV_LINKS = [
  { name: "Program", href: "#program" },
  { name: "Kurikulum", href: "#kurikulum" },
  { name: "Persiapan Tes", href: "#persiapan-tes" },
  { name: "Prestasi", href: "#prestasi" },
  { name: "Testimoni", href: "#testimoni" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50 shrink-0 flex items-center gap-3">
            <div className="relative h-12 w-12 md:h-14 md:w-14 bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden flex items-center justify-center p-1">
              <Image
                src="/images/logo/mathgenius-logo.jpg"
                alt="MathGenius Academy Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-bold text-navy-950 text-xl hidden sm:block tracking-tight">MathGenius</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-950 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <WhatsAppButton size="sm" />
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-navy-950 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-white transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6 w-full px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-navy-950 w-full text-center py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4 w-full">
            <WhatsAppButton className="w-full" onClick={() => setIsMobileMenuOpen(false)} />
            <Link
              href="https://www.instagram.com/bimbel.mathgenius/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-full border-2 border-navy-900 text-navy-950 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lihat Instagram
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
