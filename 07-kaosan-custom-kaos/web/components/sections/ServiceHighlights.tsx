"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Palette, Shirt, Wallet } from "lucide-react";

const highlights = [
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Free Desain",
    desc: "Custom DTF sudah termasuk desain."
  },
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Cotton 24s & 30s",
    desc: "Bahan adem plus opsi jersey."
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Mulai Rp65rb",
    desc: "Harga jelas sejak awal."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Buka Setiap Hari",
    desc: "Order kapan saja via WA."
  },
];

export function ServiceHighlights() {
  return (
    <section className="py-12 bg-primary-light/30 relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="bg-primary-light p-3 rounded-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-text text-lg mb-1">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
