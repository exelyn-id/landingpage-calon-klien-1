"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, AtSign, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { address, hours, instagramUrl, instagramHandle, mapsUrl } from "@/lib/constants";

export function LearningExperience() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-primary-light/40 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading centered={false} subtitle="Datang langsung atau hubungi kami terlebih dulu via WhatsApp.">
                Lokasi & Jam Operasional
              </SectionHeading>

              <ul className="space-y-4 max-w-md mx-auto lg:mx-0 text-left mb-8">
                <li className="flex items-start gap-3 bg-white border border-border rounded-2xl p-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text font-medium text-sm leading-relaxed">{address}</span>
                </li>
                <li className="flex items-start gap-3 bg-white border border-border rounded-2xl p-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text font-medium text-sm leading-relaxed">{hours}</span>
                </li>
                <li className="flex items-start gap-3 bg-white border border-border rounded-2xl p-4">
                  <AtSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text font-medium text-sm leading-relaxed underline underline-offset-4"
                  >
                    {instagramHandle} (update terbaru di sini)
                  </a>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-5 h-5" />
                  Buka Google Maps
                </a>
                <WhatsAppButton label="Order via WhatsApp" size="lg" className="h-12 rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
