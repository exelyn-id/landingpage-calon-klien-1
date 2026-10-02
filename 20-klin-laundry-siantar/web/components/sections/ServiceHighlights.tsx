"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Bike, Package } from "lucide-react";

const highlights = [
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "Sutomo No.29",
    desc: "Pematangsiantar."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "08.00-19.00",
    desc: "Min 08.00-15.00."
  },
  {
    icon: <Bike className="w-8 h-8 text-primary" />,
    title: "Antar Gratis",
    desc: "Jemput & antar cucian."
  },
  {
    icon: <Package className="w-8 h-8 text-primary" />,
    title: "S.d. 75 Kg",
    desc: "Paket bulanan hemat."
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
