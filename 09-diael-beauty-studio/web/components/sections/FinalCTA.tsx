"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MessageCircle, Navigation } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-dark/50 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
            Booking Treatment Favoritmu Sekarang
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Nail art mulai Rp25rb di dua lokasi Surabaya. Chat WA untuk cek slot, atau langsung walk-in.
          </p>

          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto">
            Dharmawangsa No.71 & Royal Plaza Lt I, Surabaya - Buka 11.00-20.00
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto"
            >
              <WhatsAppButton
                size="lg"
                variant="light"
                label="Booking via WA"
                className="text-lg px-8 h-14 w-full sm:w-auto"
              />
            </motion.div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Diael%20Beauty%20Studio%20Surabaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 text-lg px-8 h-14 w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Buka Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
