"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, CheckCircle2 } from "lucide-react";
import { business, about } from "@/lib/constants";

export function LearningExperience() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-primary-light/40 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle={about.description}>{about.title}</SectionHeading>
        <div className="max-w-3xl mx-auto mb-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.points.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 bg-white rounded-2xl border border-border p-4 shadow-sm" >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-text font-medium text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-text text-center mb-2">Galeri {business.name}</h3>
          <p className="text-sm text-muted text-center mb-8 max-w-2xl mx-auto">{about.galleryNote}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="aspect-square rounded-2xl border-2 border-dashed border-primary/30 bg-white/60 flex flex-col items-center justify-center gap-2 text-muted">
                <Camera className="w-6 h-6" />
                <span className="text-xs font-medium">Foto {n} segera hadir</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
