"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { classFormats } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";

export function ClassFormats() {
  return (
    <section id="cara-booking" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cream/70 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Mudah & Cepat</span>
          </div>
          <SectionHeading
            centered
            subtitle="Tiga langkah mudah mulai les di Mumu Bimbel."
          >
            Cara Mendaftar
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {classFormats.map((format, idx) => (
            <motion.div
              key={format.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                format.popular
                  ? "bg-gradient-to-b from-primary-light/40 via-white to-white border-primary shadow-xl ring-2 ring-primary/20 hover:-translate-y-1.5"
                  : "bg-white border-border shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-6">
                <span
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full ${
                    format.popular
                      ? "bg-primary text-white shadow-sm"
                      : "bg-primary-light text-primary-dark"
                  }`}
                >
                  {format.badge}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-cream border border-border flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                  {idx + 1}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-1">{format.title}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{format.subtitle}</p>
                <p className="text-muted text-sm leading-relaxed">{format.description}</p>
              </div>

              <div className="mb-8 pt-6 border-t border-border/70 flex-grow">
                <ul className="space-y-3">
                  {format.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-text">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  variant={format.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 group text-sm sm:text-base h-12 rounded-2xl"
                  onClick={() => {
                    window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
                  }}
                >
                  <span>{format.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
