"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Wallet } from "lucide-react";

const highlights = [
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Mulai Rp25rb",
    desc: "Harga jelas sejak awal."
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "2 Lokasi Surabaya",
    desc: "Dharmawangsa & Royal Plaza."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "46,3rb Followers",
    desc: "@diael.studio yang ramai."
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Walk-in & Booking",
    desc: "Datang langsung atau reservasi."
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
