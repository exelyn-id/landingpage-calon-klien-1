"use client";

import * as React from "react";
import Image from "next/image";
import { achievements } from "@/lib/constants";
import { ImageLightbox } from "../ui/ImageLightbox";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

export function Achievements() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="prestasi" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Dokumentasi Prestasi Siswa</h2>
          <p className="text-lg text-muted">Lihat dokumentasi siswa-siswa MathGenius Academy yang meraih medali dan penghargaan setelah mengikuti bimbingan.</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group bg-off-white"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 33vw, 25vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-navy-950 text-sm font-semibold py-2 px-4 rounded-full">
                  Lihat Foto
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {achievements.map((item, index) => (
                <div key={item.id} className="flex-[0_0_85%] min-w-0 pr-4 relative">
                  <div 
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-off-white"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="85vw"
                      quality={80}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Indicators */}
          <div className="flex flex-col items-center mt-6">
            <span className="text-sm font-medium text-muted mb-3">
              {String(selectedIndex + 1).padStart(2, "0")} / {achievements.length}
            </span>
            <div className="flex gap-1.5">
              {achievements.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "w-6 bg-blue-600" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <ImageLightbox
        images={achievements}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
