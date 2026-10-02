"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, AtSign } from "lucide-react";
import { instagramUrl, instagramHandle } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Cerita asli pelanggan Teh Wie 2 akan tampil di bagian ini.">
          Testimoni Pelanggan
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white border-2 border-dashed border-border rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center gap-1 mb-4" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-border" />
            ))}
          </div>
          <p className="font-semibold text-lg md:text-xl text-text mb-2">
            Testimoni pelanggan akan tampil di sini
          </p>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
            Kami tidak menampilkan ulasan palsu. Tangkapan layar testimoni asli dari pelanggan
            akan dipasang di bagian ini. Pantau update terbaru di Instagram {instagramHandle}.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md text-sm"
          >
            <AtSign className="w-5 h-5" />
            Lihat Instagram {instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
