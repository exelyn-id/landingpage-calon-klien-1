import React from "react";

export const programs = [
  {
    title: "Manicure",
    description: "Perawatan dan percantik kuku tangan. Harga: tanya via WA.",
    badge: "Andalan",
  },
  {
    title: "Pedicure + Spa",
    description: "Perawatan kaki lengkap dengan sensasi spa yang menenangkan. Harga: tanya via WA.",
    badge: "Relaksasi",
  },
  {
    title: "Nail Art & Engraving",
    description: "Desain nail art dan engraving sesuai referensimu. Harga: tanya via WA.",
    badge: "Custom Desain",
  },
  {
    title: "Builder & Gel Polish",
    description: "Kuku lebih kuat dan warna tahan lama. Harga: tanya via WA.",
    badge: "Tahan Lama",
  },
  {
    title: "Kids Treatment",
    description: "Treatment aman dan menyenangkan untuk anak. Harga: tanya via WA.",
    badge: "Ramah Anak",
  },
  {
    title: "Home Service",
    description: "Treatment di lokasimu tanpa harus ke studio. Harga: tanya via WA.",
    badge: "Ke Lokasimu",
  },
];

export const classFormats = [
  {
    id: "pilih-treatment",
    title: "Pilih Treatment",
    subtitle: "Langkah 1",
    badge: "Langkah 1",
    popular: false,
    levels: "7+ Jenis Layanan",
    capacity: "Manicure s/d home service",
    description: "Tentukan treatment: manicure, pedicure + spa, nail art, builder, gel polish, kids, atau home service.",
    features: [
      "Lihat referensi di Instagram @cielonailstudio.id",
      "Siapkan foto nail art yang kamu mau",
      "Sesuaikan dengan kebutuhan kukumu",
      "Catat jadwal kosongmu",
    ],
    ctaText: "Lihat Layanan",
  },
  {
    id: "booking-wa",
    title: "Booking via WA",
    subtitle: "Langkah 2",
    badge: "Paling Mudah",
    popular: true,
    levels: "WA 0821-1830-1357",
    capacity: "Sebutkan jadwalmu",
    description: "Chat WA dengan menyebutkan treatment yang diinginkan dan jadwal kedatanganmu.",
    features: [
      "Sebutkan treatment pilihanmu",
      "Sertakan tanggal dan jam kedatangan",
      "Kirim referensi desain bila ada",
      "Tunggu konfirmasi slot dari admin",
    ],
    ctaText: "Booking Sekarang",
  },
  {
    id: "datang-studio",
    title: "Datang ke Studio",
    subtitle: "Langkah 3",
    badge: "Cipete - Jaksel",
    popular: false,
    levels: "10.00-21.00",
    capacity: "Atau home service",
    description: "Datang ke studio di Cipete sesuai jadwal, atau manfaatkan layanan home service.",
    features: [
      "Datang sesuai jadwal booking",
      "Nikmati treatment dengan nyaman",
      "Tanya perawatan kuku setelahnya",
      "Atau pilih home service via WA",
    ],
    ctaText: "Chat WA Admin",
  },
];

export const benefits = [
  {
    title: "Lokasi Strategis di Cipete",
    description: "Studio di Jl. Abdul Majid Raya No.44R, Cipete, Jakarta Selatan, mudah dijangkau.",
  },
  {
    title: "Buka Setiap Hari 10.00-21.00",
    description: "Senin sampai Minggu, mudah menyesuaikan jadwalmu.",
  },
  {
    title: "Dipercaya 4.000+ Followers",
    description: "Akun @cielonailstudio.id diikuti ribuan pecinta nail art.",
  },
  {
    title: "Tersedia Home Service",
    description: "Tidak sempat ke studio? Tanyakan layanan home service via WA.",
  },
];

export const testimonials: { src: string; alt: string }[] = [];

export const faqs = [
  {
    question: "Di mana lokasi Cielo Nail Studio?",
    answer: "Di Jl. Abdul Majid Raya No.44R, Cipete, Jakarta Selatan. Klik tombol Buka Google Maps di halaman ini untuk navigasi.",
  },
  {
    question: "Jam berapa buka?",
    answer: "Buka Senin sampai Minggu pukul 10.00-21.00.",
  },
  {
    question: "Bagaimana cara booking?",
    answer: "Pilih treatment yang diinginkan, chat WA 0821-1830-1357 dengan menyebutkan treatment dan jadwal, lalu datang sesuai jadwal.",
  },
  {
    question: "Apakah tersedia home service?",
    answer: "Ya, tersedia home service. Tanyakan jadwal dan syaratnya langsung via WA ya.",
  },
  {
    question: "Berapa harga treatmentnya?",
    answer: "Harga mengikuti jenis treatment dan desain nail art. Kirim referensimu via WA untuk info harga.",
  },
  {
    question: "Apakah anak-anak bisa treatment?",
    answer: "Bisa, tersedia kids treatment. Konsultasikan dulu via WA untuk info lebih lanjut.",
  },
];
