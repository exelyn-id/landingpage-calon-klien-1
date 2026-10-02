"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { benefits } from "@/lib/constants";
import { motion } from "framer-motion";
import { ShoppingBag, AtSign, MessageCircle, MapPin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  AtSign: <AtSign className="w-8 h-8" />,
  MessageCircle: <MessageCircle className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />,
};

export function Benefits() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Stok dan menu ready harian. Selalu tanya ketersediaan via WA sebelum order.">
          Kenapa Pilih Ncik Yuli?
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={iconMap[benefit.icon]}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
