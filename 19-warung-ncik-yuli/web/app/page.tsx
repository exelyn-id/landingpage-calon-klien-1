import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsAppCTA } from "@/components/layout/StickyWhatsAppCTA";
import { Hero } from "@/components/sections/Hero";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { Programs } from "@/components/sections/Programs";
import { ClassFormats } from "@/components/sections/ClassFormats";
import { Benefits } from "@/components/sections/Benefits";
import { FlexibleLearning } from "@/components/sections/FlexibleLearning";
import { Testimonials } from "@/components/sections/Testimonials";
import { LearningExperience } from "@/components/sections/LearningExperience";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <ServiceHighlights />
        <Programs />
        <ClassFormats />
        <Benefits />
        <FlexibleLearning />
        <Testimonials />
        <LearningExperience />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsAppCTA />
    </>
  );
}
