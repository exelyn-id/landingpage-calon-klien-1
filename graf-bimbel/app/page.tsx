import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA"

import { Hero } from "@/components/sections/Hero"
import { Programs } from "@/components/sections/Programs"
import { OneOnOne } from "@/components/sections/OneOnOne"
import { Curriculum } from "@/components/sections/Curriculum"
import { LearningExperience } from "@/components/sections/LearningExperience"
import { OlympiadSNBT } from "@/components/sections/OlympiadSNBT"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 w-full relative">
        <Hero />
        <Programs />
        <OneOnOne />
        <Curriculum />
        <LearningExperience />
        <OlympiadSNBT />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  )
}
