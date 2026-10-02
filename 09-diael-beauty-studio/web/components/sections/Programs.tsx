"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { programs } from "@/lib/constants";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, Gem } from "lucide-react";

const icons = [
  <Sparkles className="w-7 h-7" />,
  <Star className="w-7 h-7" />,
  <Heart className="w-7 h-7" />,
  <Gem className="w-7 h-7" />,
];

export function Programs() {
  return (
    <section id="program" className="py-20 md:py-28 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Semua harga transparan sejak awal. Pilih treatmentmu, lalu booking via WA.">
          Layanan Diael
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProgramCard
                title={prog.title}
                description={prog.description}
                badge={prog.badge}
                icon={icons[i % icons.length]}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-border flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-light/50 rounded-tl-full -z-10 translate-x-1/4 translate-y-1/4" />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-text mb-4">Dua Lokasi, Satu Booking WA</h3>
            <p className="text-muted text-lg max-w-xl">
              Pilih lokasi terdekat: Dharmawangsa atau Royal Plaza. Chat WA untuk cek jadwal dan slot yang masih tersedia.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton label="Booking via WA" size="lg" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
