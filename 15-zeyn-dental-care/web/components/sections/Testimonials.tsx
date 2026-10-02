"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteInfo } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Cerita asli pasien akan ditampilkan di sini.">
          Testimoni
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-dashed border-border p-8 md:p-12 text-center shadow-sm"
        >
          <div className="mx-auto w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
            <MessageCircleHeart className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-text mb-3">
            Testimoni Segera Hadir
          </h3>
          <p className="text-muted leading-relaxed mb-8">
            Kami tidak menampilkan testimoni palsu. Cerita dan ulasan asli pelanggan
            akan ditampilkan di sini. Sementara itu, intip aktivitas kami di Instagram
            atau tanya langsung via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-primary text-white hover:opacity-90 transition-opacity"
            >
              <AtSign className="w-5 h-5" />
              {siteInfo.instagramHandle}
            </a>
            <WhatsAppButton label="Tanya via WhatsApp" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
