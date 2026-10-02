"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, AtSign } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramUrl, instagramHandle, shortName } from "@/lib/constants";

const slots = [1, 2, 3, 4, 5, 6];

export function FlexibleLearning() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <SectionHeading subtitle="Foto hasil cucian & aktivitas laundry. Update promo ada di Instagram @klinlaundry_siantar.">
          Galeri
        </SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {slots.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.4 }}
              className="aspect-square rounded-2xl border-2 border-dashed border-border bg-cream flex flex-col items-center justify-center gap-2 p-4 text-center"
            >
              <Camera className="w-8 h-8 text-primary/50" />
              <span className="text-xs md:text-sm font-medium text-muted">
                Foto {shortName} {n}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-primary-light/50 border border-primary/20 text-center max-w-4xl mx-auto">
          <p className="text-sm text-text font-medium leading-relaxed mb-4">
            Foto HD menyusul dari owner. Sementara itu, lihat dokumentasi terbaru di Instagram {instagramHandle}.
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
        </div>
      </div>
    </section>
  );
}
