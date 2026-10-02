"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageIcon, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteInfo } from "@/lib/constants";

const placeholders = [1, 2, 3, 4, 5, 6];

export function FlexibleLearning() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <SectionHeading subtitle="Foto buket segera hadir. Sementara itu, intip katalog terbaru di Instagram.">
          Galeri
        </SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          {placeholders.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.4 }}
              className="aspect-square rounded-2xl border-2 border-dashed border-border bg-cream flex flex-col items-center justify-center gap-2 text-muted"
            >
              <ImageIcon className="w-8 h-8" />
              <span className="text-xs font-medium px-4 text-center">Foto segera hadir</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-4">Lihat foto terbaru di Instagram kami:</p>
          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            <AtSign className="w-5 h-5" />
            {siteInfo.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
