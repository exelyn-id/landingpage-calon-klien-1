"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#program" },
  { name: "Cara Order", href: "#format-belajar" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 md:px-8 max-w-7xl flex items-center justify-between">
          <Link
            href="#beranda"
            className="relative z-50 font-bold text-lg tracking-tight text-text"
            aria-label="Hypergrafi Fotografer Freelance - Beranda"
          >
            Hypergrafi
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text font-medium hover:text-primary transition-colors text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <WhatsAppButton size="sm" label="Booking via WA" />
          </nav>

          <button
            className="md:hidden relative z-50 p-2 text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-[100dvh]"
          >
            <ul className="flex flex-col gap-6 text-lg font-semibold text-text">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href={link.href} onClick={handleMobileLinkClick} className="block w-full py-2">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto mb-10 w-full pt-8 border-t border-border">
              <WhatsAppButton className="w-full" size="lg" label="Booking via WA" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
