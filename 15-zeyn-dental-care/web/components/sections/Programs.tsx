"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { programs } from "@/lib/constants";
import { motion } from "framer-motion";
import { MessageCircle, Stethoscope, Sparkles, Smile, ShieldCheck, Baby, Star, Heart } from "lucide-react";

const icons = [<Stethoscope className="w-7 h-7" />, <Sparkles className="w-7 h-7" />, <Smile className="w-7 h-7" />, <ShieldCheck className="w-7 h-7" />, <Baby className="w-7 h-7" />, <Star className="w-7 h-7" />, <Heart className="w-7 h-7" />];

export function Programs() {
  return (
    <section id="program" className="py-20 md:py-28 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Tujuh layanan gigi — konsultasikan kebutuhanmu via WhatsApp.">
          Layanan Perawatan
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-light opacity-50 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary shadow-sm">
                  {icons[i % icons.length]}
                </div>

                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold text-text">{prog.title}</h3>
                  {prog.badge && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {prog.badge}
                    </span>
                  )}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {prog.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-border/70">
                  <span className="text-sm font-semibold text-primary-dark">
                    Tanya via WA
                  </span>
                  <button
                    onClick={() => {
                      window.open(getWhatsAppUrl(prog.message), "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                    aria-label={`Tanya ${prog.title} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat WA
                  </button>
                </div>
              </div>
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
            <h3 className="text-2xl font-bold text-text mb-2">Berapa Biayanya?</h3>
            <p className="text-muted text-lg max-w-xl">
              Biaya tergantung perawatan dan kondisi gigi. Tanya via WhatsApp untuk info biaya.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton label="Tanya Harga via WA" size="lg" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
