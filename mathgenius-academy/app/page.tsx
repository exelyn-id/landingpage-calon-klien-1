import { Navbar } from "@/components/layout/Navbar";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Curriculum } from "@/components/sections/Curriculum";
import { TestPreparation } from "@/components/sections/TestPreparation";
import { Olympiad } from "@/components/sections/Olympiad";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative font-sans">
      <TrustStrip />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Curriculum />
        <TestPreparation />
        <Olympiad />
        <Achievements />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
