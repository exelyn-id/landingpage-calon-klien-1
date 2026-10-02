"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MessageCircle } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Cerita dan ulasan asli dari pelanggan Kaosan akan kami tampilkan di sini.">
          Testimoni Pelanggan
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-3xl border-2 border-dashed border-primary/40 bg-white p-8 md:p-12 text-center"
        >
          <div className="mx-auto w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text mb-3">
            Testimoni asli segera hadir di sini
          </h3>
          <p className="text-muted leading-relaxed mb-8">
            Kami tidak menampilkan ulasan palsu. Ulasan asli dari pelanggan Kaosan akan ditampilkan di bagian ini. Sementara itu, intip keseruan kami di Instagram atau tanya-tanya langsung via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/kaosan.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @kaosan.co.id
            </a>
            <WhatsAppButton variant="outline" label="Tanya via WhatsApp" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
