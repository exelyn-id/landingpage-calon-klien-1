"use client";

import * as React from "react";
import Image from "next/image";
import { testimonials } from "@/lib/constants";
import { ImageLightbox } from "../ui/ImageLightbox";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "center", 
    loop: true,
    skipSnaps: false,
  });
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.internalEngine().index.get());
    emblaApi.on("select", onSelect);
    
    // Simple autoplay logic
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="testimoni" className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Cerita dari Siswa & Orang Tua</h2>
        <p className="text-lg text-muted max-w-3xl mx-auto">Lihat pengalaman yang dibagikan melalui percakapan WhatsApp bersama MathGenius Academy.</p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y items-center">
            {testimonials.map((item, index) => (
              <div 
                key={item.id} 
                className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 px-2 md:px-4 relative transition-transform duration-500 ease-in-out"
                style={{
                  opacity: selectedIndex === index ? 1 : 0.5,
                  transform: selectedIndex === index ? "scale(1)" : "scale(0.9)",
                }}
              >
                <div 
                  className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow bg-white"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 30vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-navy-950/0 hover:bg-navy-950/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 hover:opacity-100 transition-opacity bg-white/90 text-navy-950 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">
                      Perbesar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Desktop */}
        <button 
          className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center shadow-lg text-navy-950 hover:bg-blue-50 transition-colors z-10"
          onClick={scrollPrev}
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center shadow-lg text-navy-950 hover:bg-blue-50 transition-colors z-10"
          onClick={scrollNext}
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Pagination Mobile/Desktop indicator */}
      <div className="flex flex-col items-center mt-12">
        <span className="text-sm font-medium text-muted mb-4">
          {String(selectedIndex + 1).padStart(2, "0")} / {testimonials.length}
        </span>
        <div className="flex flex-wrap justify-center gap-1.5 max-w-sm px-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-blue-600" : "w-1.5 bg-border hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ImageLightbox
        images={testimonials}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
