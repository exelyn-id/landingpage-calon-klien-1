"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, AtSign } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/lib/constants";

export function FlexibleLearning() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="bg-primary-dark rounded-3xl p-8 md:p-16 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/20">
          <div className="flex-1 max-w-2xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Lokasi &amp; Jam Operasional
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-cream/90 leading-relaxed mb-8">
              {business.address}. {business.hoursNote}: {business.hours}.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full font-semibold transition-all bg-white text-primary hover:bg-cream shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 min-h-14 h-auto py-3.5 px-6 sm:px-8 text-sm sm:text-base">
                <MapPin className="mr-2 h-5 w-5" />Buka Google Maps
              </a>
              <WhatsAppButton variant="light" size="lg" label="Chat WhatsApp" />
            </motion.div>
          </div>
          <div className="flex-1 w-full flex flex-col gap-4">
            {[
              { icon: <Clock className="w-6 h-6 text-primary" />, text: business.hoursNote + ": " + business.hours },
              { icon: <MapPin className="w-6 h-6 text-primary" />, text: business.address },
              { icon: <AtSign className="w-6 h-6 text-primary" />, text: business.igHandle + " - " + business.followers },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors" >
                <div className="bg-cream p-2.5 rounded-lg shrink-0">{item.icon}</div>
                <span className="text-white font-medium text-left">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
