"use client";

import { faqs } from "@/lib/constants";
import { Accordion } from "../ui/Accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-muted">Informasi tambahan yang mungkin ingin Anda ketahui.</p>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
