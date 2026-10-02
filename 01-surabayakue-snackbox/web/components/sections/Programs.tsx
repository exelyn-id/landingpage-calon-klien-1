"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business, programs } from "@/lib/constants";
import { motion } from "framer-motion";
import { BadgeCheck, Cake, Package, Layers, Gift, UtensilsCrossed, Coffee, CupSoda, Croissant, Soup, Drumstick, Shirt, Sparkles, Star, ShoppingBag, Truck, MessageCircle, Cookie, CalendarDays, PieChart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  halal: <BadgeCheck className="w-7 h-7" />,
  cake: <Cake className="w-7 h-7" />,
  box: <Package className="w-7 h-7" />,
  tray: <Layers className="w-7 h-7" />,
  gift: <Gift className="w-7 h-7" />,
  feast: <UtensilsCrossed className="w-7 h-7" />,
  rice: <Soup className="w-7 h-7" />,
  coffee: <Coffee className="w-7 h-7" />,
  cup: <CupSoda className="w-7 h-7" />,
  bread: <Croissant className="w-7 h-7" />,
  soup: <Soup className="w-7 h-7" />,
  meat: <Drumstick className="w-7 h-7" />,
  shirt: <Shirt className="w-7 h-7" />,
  sparkle: <Sparkles className="w-7 h-7" />,
  star: <Star className="w-7 h-7" />,
  bag: <ShoppingBag className="w-7 h-7" />,
  truck: <Truck className="w-7 h-7" />,
  chat: <MessageCircle className="w-7 h-7" />,
  cookie: <Cookie className="w-7 h-7" />,
  calendar: <CalendarDays className="w-7 h-7" />,
  pie: <PieChart className="w-7 h-7" />,
};

export function Programs() {
  return (
    <section id="program" className="py-20 md:py-28 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle={business.servicesSubtitle}>{business.servicesTitle}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((prog, i) => (
            <motion.div key={prog.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: (i % 3) * 0.1, duration: 0.5 }} className="flex flex-col">
              <ProgramCard title={prog.title} description={prog.description} badge={prog.badge} icon={iconMap[prog.icon] ?? <Package className="w-7 h-7" />} className="h-full" />
              <div className="mt-3">
                <WhatsAppButton variant="outline" size="sm" className="w-full" label={"Tanya: " + prog.title} message={prog.waMessage} />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-border flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden" >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-light/50 rounded-tl-full -z-0 translate-x-1/4 translate-y-1/4" />
          <div className="flex-1 text-center md:text-left relative z-10">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-primary/10 p-2.5 rounded-xl"><MessageCircle className="w-6 h-6 text-primary" /></div>
              <h3 className="text-2xl font-bold text-text">Butuh yang lain atau jumlah besar?</h3>
            </div>
            <p className="text-muted text-lg max-w-xl">Ceritakan kebutuhanmu via WhatsApp. Harga pasti menyusul sesuai jenis dan jumlah pesanan.</p>
          </div>
          <div className="shrink-0 w-full md:w-auto relative z-10">
            <WhatsAppButton label="Tanya via WhatsApp" size="lg" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
