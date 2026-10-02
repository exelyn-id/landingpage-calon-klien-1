"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { usePathname } from "next/navigation"

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    // Show after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 p-4 pb-safe md:hidden z-40 bg-gradient-to-t from-cream via-cream to-transparent"
        >
          <WhatsAppButton 
            label="💬 Konsultasi via WhatsApp" 
            className="w-full shadow-lg h-14 text-base"
            showIcon={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
