"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { programs, businessName } from "@/lib/constants";
import { motion } from "framer-motion";
import { Snowflake, CookingPot, UtensilsCrossed, CakeSlice, Drumstick, Apple } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-7 h-7" />,
  CookingPot: <CookingPot className="w-7 h-7" />,
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7" />,
  CakeSlice: <CakeSlice className="w-7 h-7" />,
  Drumstick: <Drumstick className="w-7 h-7" />,
  Apple: <Apple className="w-7 h-7" />,
};

export function Programs() {
  return (
    <section id="program" className="py-20 md:py-28 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Stok dan menu ready harian. Selalu tanya ketersediaan via WA sebelum order.">
          Etalase Warung Ncik Yuli
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full flex flex-col">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-light opacity-50 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary shadow-sm">
                    {iconMap[prog.icon]}
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-text">{prog.title}</h3>
                    {prog.badge ? (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {prog.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {prog.description}
                  </p>
                  <p className="text-text font-bold text-sm mb-4">
                    {prog.price ? prog.price : "Harga: Tanya via WA"}
                    {prog.tag ? (
                      <span className="ml-2 font-medium text-muted">• {prog.tag}</span>
                    ) : null}
                  </p>
                  <div className="mt-auto">
                    <WhatsAppButton
                      size="sm"
                      className="w-full"
                      label="Tanya via WA"
                      message={`Halo ${businessName}, saya mau tanya tentang ${prog.title}.`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-border flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-light/50 rounded-tl-full -z-10 translate-x-1/4 translate-y-1/4" />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-text mb-3">Cari barang lain? Bisa dicariin.</h3>
            <p className="text-muted text-lg max-w-xl">
              Sesuai bio kami: makanan, snack, buah, sampai obat dan fashion bisa dicariin. Chat WA dan sebutkan kebutuhanmu.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton label="Chat via WhatsApp" size="lg" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
