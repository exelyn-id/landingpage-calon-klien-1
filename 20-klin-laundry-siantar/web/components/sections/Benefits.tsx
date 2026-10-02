"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { benefits } from "@/lib/constants";
import { motion } from "framer-motion";
import { Bike, Package, Shirt, Clock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Bike: <Bike className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
  Shirt: <Shirt className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
};

export function Benefits() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Paket bulanan hemat sampai 75 kg. Satuan sepatu, dry clean & kebaya tanya via WA.">
          Kenapa Pilih Mr Klin?
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
