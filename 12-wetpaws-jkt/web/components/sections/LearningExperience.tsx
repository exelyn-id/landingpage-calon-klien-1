"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { siteInfo } from "@/lib/constants";

export function LearningExperience() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-primary-light/40 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Kami di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00.">
          Lokasi & Jam
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-light p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text">Alamat</h3>
            </div>
            <p className="text-muted leading-relaxed mb-6">{siteInfo.location}</p>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => {
                window.open(siteInfo.mapsUrl, "_blank", "noopener,noreferrer");
              }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Buka Google Maps
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-light p-3 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text">Jam Operasional</h3>
            </div>
            <p className="text-muted leading-relaxed mb-6">{siteInfo.hours}</p>
            <WhatsAppButton size="lg" className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
