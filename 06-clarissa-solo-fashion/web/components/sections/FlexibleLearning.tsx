"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { DecorativeSymbols } from "@/components/illustrations/DecorativeSymbols";

const items = [
  { icon: <Clock className="w-6 h-6 text-primary" />, text: "Buka 08.00-21.00 setiap hari" },
  { icon: <Calendar className="w-6 h-6 text-primary" />, text: "Tanpa reservasi, langsung datang" },
  { icon: <MessageCircle className="w-6 h-6 text-primary" />, text: "Tanya stok dulu via WA juga bisa" },
];

export function FlexibleLearning() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <DecorativeSymbols />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="bg-primary-dark rounded-3xl p-8 md:p-16 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/20">
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white"
            >
              Mampir ke Store, Kapan Saja
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-cream/90 leading-relaxed mb-0"
            >
              Store CLARISSA buka setiap hari pukul 08.00-21.00. Pagi, siang, atau malam, tinggal datang dan pilih outfit favoritmu.
            </motion.p>
          </div>

          <div className="flex-1 w-full flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors"
              >
                <div className="bg-cream p-2.5 rounded-lg shrink-0">
                  {item.icon}
                </div>
                <span className="text-white font-medium text-left">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
