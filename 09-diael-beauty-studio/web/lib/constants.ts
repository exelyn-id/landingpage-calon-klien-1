import React from "react";

export const programs = [
  {
    title: "Nail Art",
    description: "Nail art cantik dengan banyak pilihan desain. Mulai Rp25rb.",
    badge: "Mulai Rp25rb",
  },
  {
    title: "Threading Brow",
    description: "Rapikan dan bentuk alis dengan teknik threading. Rp65rb.",
    badge: "Rp65rb",
  },
  {
    title: "Eyelash",
    description: "Extension bulu mata untuk tampilan yang memukau. Rp135rb.",
    badge: "Rp135rb",
  },
  {
    title: "Korean Lash Lift",
    description: "Lentikkan bulu mata asli ala Korea yang tahan lama. Rp165rb.",
    badge: "Rp165rb",
  },
];

export const classFormats = [
  {
    id: "pilih-treatment",
    title: "Pilih Treatment",
    subtitle: "Langkah 1",
    badge: "Langkah 1",
    popular: false,
    levels: "Mulai Rp25rb",
    capacity: "Lash, brow & nail",
    description: "Pilih treatment: nail art, threading brow, eyelash, atau Korean lash lift.",
    features: [
      "Lihat referensi di Instagram @diael.studio",
      "Sesuaikan dengan budget, mulai Rp25rb",
      "Siapkan jadwal kunjunganmu",
      "Pilih lokasi terdekat darimu",
    ],
    ctaText: "Lihat Layanan",
  },
  {
    id: "booking-wa",
    title: "Booking via WA",
    subtitle: "Langkah 2",
    badge: "Paling Mudah",
    popular: true,
    levels: "WA + DM Aktif",
    capacity: "Walk-in juga bisa",
    description: "Chat WA dengan menyebutkan treatment dan jadwal. Bisa juga walk-in langsung ke studio.",
    features: [
      "Sebutkan treatment pilihanmu",
      "Sertakan jadwal kedatangan",
      "Pilih lokasi Dharmawangsa / Royal Plaza",
      "Tunggu konfirmasi slot dari admin",
    ],
    ctaText: "Booking Sekarang",
  },
  {
    id: "datang-studio",
    title: "Datang ke Studio",
    subtitle: "Langkah 3",
    badge: "2 Lokasi SBY",
    popular: false,
    levels: "11.00-20.00",
    capacity: "Dharmawangsa / Royal Plaza",
    description: "Datang ke lokasi pilihanmu dan nikmati treatmentnya.",
    features: [
      "Datang sesuai jadwal booking",
      "Atau walk-in langsung",
      "Nikmati treatment dengan nyaman",
      "Jadwalkan perawatan rutinmu",
    ],
    ctaText: "Chat WA Admin",
  },
];

export const benefits = [
  {
    title: "Treatment Mulai Rp25rb",
    description: "Nail art mulai Rp25rb, threading brow Rp65rb, eyelash Rp135rb, Korean lash lift Rp165rb.",
  },
  {
    title: "Dipercaya 46,3 Ribu Followers",
    description: "Akun @diael.studio diikuti puluhan ribu pecinta beauty treatment.",
  },
  {
    title: "Dua Lokasi di Surabaya",
    description: "Jl. Dharmawangsa No.71 dan Royal Plaza Lt I, pilih yang terdekat.",
  },
  {
    title: "Walk-in dan Booking",
    description: "Bisa datang langsung atau booking dulu via WA/DM agar tidak antre.",
  },
];

export const testimonials: { src: string; alt: string }[] = [];

export const faqs = [
  {
    question: "Di mana lokasi Diael Beauty Studio?",
    answer: "Ada dua lokasi di Surabaya: Jl. Dharmawangsa No.71 dan Royal Plaza Lt I. Klik tombol Buka Google Maps di halaman ini untuk navigasi.",
  },
  {
    question: "Jam berapa buka?",
    answer: "Buka pukul 11.00-20.00. Bisa walk-in atau booking dulu via WA/DM.",
  },
  {
    question: "Bagaimana cara booking?",
    answer: "Pilih treatment, chat WA dengan menyebutkan treatment dan jadwal yang diinginkan, lalu datang ke lokasi pilihanmu.",
  },
  {
    question: "Berapa harga treatmentnya?",
    answer: "Nail art mulai Rp25rb, threading brow Rp65rb, eyelash Rp135rb, dan Korean lash lift Rp165rb. Tanyakan promo yang sedang berjalan via WA.",
  },
  {
    question: "Apakah bisa walk-in tanpa booking?",
    answer: "Bisa. Diael menerima walk-in dan booking, tapi booking dulu lebih aman agar tidak antre.",
  },
  {
    question: "Layanan apa saja yang tersedia?",
    answer: "Nail art, eyelash, lash lift, brow, dan threading. Chat WA untuk konsultasi treatment yang cocok untukmu.",
  },
];
