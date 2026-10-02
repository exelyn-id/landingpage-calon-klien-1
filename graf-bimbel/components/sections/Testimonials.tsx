"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"

const TESTIMONIALS = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  src: `/images/testimonials/testimonial-${(i + 1).toString().padStart(2, "0")}.webp`,
  alt: `Testimonial GRAF Bimbel Online ${i + 1}`
}))

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [activeImage, setActiveImage] = React.useState("")

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    // Autoplay functionality
    let autoplayInterval: NodeJS.Timeout
    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
      }, 5000)
    }

    const stopAutoplay = () => clearInterval(autoplayInterval)

    emblaApi.on("select", onSelect)
    emblaApi.on("pointerDown", stopAutoplay)
    emblaApi.on("pointerUp", startAutoplay)
    
    startAutoplay()
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("pointerDown", stopAutoplay)
      emblaApi.off("pointerUp", startAutoplay)
      stopAutoplay()
    }
  }, [emblaApi])

  // Handle Lightbox Esc key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const openLightbox = (src: string) => {
    setActiveImage(src)
    setLightboxOpen(true)
  }

  return (
    <section id="testimoni" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Pengalaman Mereka Bersama GRAF" 
          subtitle="Lihat beberapa testimonial yang dibagikan oleh pelanggan GRAF."
          align="center"
        />

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y items-center">
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={cn(
                    "flex-[0_0_80%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_33.33%] px-3 transition-opacity duration-300",
                    index !== selectedIndex && "opacity-40"
                  )}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[9/16] bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-border"
                    onClick={() => openLightbox(testimonial.src)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full testimonial ${testimonial.id}`}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(testimonial.src)}
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button 
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-black hover:bg-yellow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    index === selectedIndex ? "bg-primary-dark w-6" : "bg-border hover:bg-primary"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === selectedIndex}
                />
              ))}
            </div>
            <button 
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-black hover:bg-yellow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Testimonial lightbox"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white z-50"
              aria-label="Close lightbox"
              autoFocus
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl h-[85vh] flex items-center justify-center outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={activeImage}
                  alt="Testimonial Full View"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
