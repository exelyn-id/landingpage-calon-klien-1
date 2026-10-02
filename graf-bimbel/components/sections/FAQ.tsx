"use client"

import * as React from "react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AccordionItem } from "@/components/ui/Accordion"

const FAQ_ITEMS = [
  {
    question: "Untuk jenjang apa GRAF tersedia?",
    answer: "GRAF BIMBEL ONLINE menyediakan layanan untuk SD, SMP, SMA, Olimpiade, dan SNBT."
  },
  {
    question: "Apakah pembelajarannya online?",
    answer: "Ya, GRAF BIMBEL ONLINE merupakan layanan bimbingan belajar online."
  },
  {
    question: "Bagaimana sistem belajarnya?",
    answer: "GRAF menggunakan sistem 1 guru 1 siswa agar pembelajaran dapat berlangsung lebih personal dan fokus."
  },
  {
    question: "Kurikulum apa yang digunakan?",
    answer: "GRAF menyediakan pembelajaran dengan kurikulum Nasional—Internasional."
  },
  {
    question: "Apakah tersedia Olimpiade?",
    answer: "Ya, GRAF menyediakan program untuk kebutuhan belajar Olimpiade."
  },
  {
    question: "Apakah tersedia SNBT?",
    answer: "Ya, GRAF menyediakan program untuk kebutuhan belajar SNBT."
  },
  {
    question: "Bagaimana cara mendapatkan informasi?",
    answer: "Hubungi GRAF melalui WhatsApp untuk berkonsultasi mengenai kebutuhan belajar."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Pertanyaan Umum" 
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
