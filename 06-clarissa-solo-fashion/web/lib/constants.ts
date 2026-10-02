import React from "react";

export const programs = [
  {
    title: "Outfit Mingguan",
    description: "Koleksi outfit wanita kekinian dengan model baru setiap minggu. Harga: tanya via WA.",
    badge: "Update Mingguan",
  },
  {
    title: "Leather Jacket",
    description: "Jaket kulit stylish untuk tampilan berani dan percaya diri. Harga: tanya via WA.",
    badge: "Favorit",
  },
  {
    title: "Sweatpants & Daily Wear",
    description: "Celana dan atasan santai yang nyaman untuk aktivitas harian. Harga: tanya via WA.",
    badge: "Nyaman Harian",
  },
  {
    title: "Hijab",
    description: "Pilihan hijab untuk melengkapi gayamu. Harga: tanya via WA.",
    badge: "Pelengkap Gaya",
  },
  {
    title: "Tas",
    description: "Tas pilihan untuk melengkapi penampilan. Harga: tanya via WA.",
    badge: "Pelengkap Gaya",
  },
];

export const classFormats = [
  {
    id: "pilih-model",
    title: "Pilih Model",
    subtitle: "Langkah 1",
    badge: "Langkah 1",
    popular: false,
    levels: "IG & Katalog",
    capacity: "Screenshot favoritmu",
    description: "Lihat koleksi terbaru di @clarissasolo.id atau katalog @clarissa.catalog, lalu screenshot model yang kamu suka.",
    features: [
      "Cek Reels try-on harian sebagai referensi",
      "Screenshot model, warna, dan ukuran incaranmu",
      "Catat yang ingin ditanyakan soal bahan atau stok",
      "Siapkan chat ke WA admin",
    ],
    ctaText: "Lihat Layanan",
  },
  {
    id: "chat-wa",
    title: "Chat WA Admin",
    subtitle: "Langkah 2",
    badge: "Paling Mudah",
    popular: true,
    levels: "WA 0857-1961-1812",
    capacity: "Tanya stok & ukuran",
    description: "Klik tombol WhatsApp dan kirim screenshot model. Tanyakan ukuran, warna, harga, dan ketersediaan.",
    features: [
      "Kirim screenshot model yang kamu suka",
      "Tanyakan ukuran, warna, dan harga",
      "Pastikan stok masih tersedia",
      "Tanpa harus DM Instagram",
    ],
    ctaText: "Chat Sekarang",
  },
  {
    id: "datang-store",
    title: "Datang ke Store",
    subtitle: "Langkah 3",
    badge: "Buka Tiap Hari",
    popular: false,
    levels: "Solo - 08.00-21.00",
    capacity: "Coba langsung di store",
    description: "Datang ke store di Solo yang buka setiap hari 08.00-21.00 untuk coba dan beli langsung.",
    features: [
      "Coba bahan dan ukuran langsung",
      "Buka pagi sampai malam setiap hari",
      "Bayar di tempat dengan aman",
      "Tanya opsi kirim via WA bila jauh",
    ],
    ctaText: "Chat WA Admin",
  },
];

export const benefits = [
  {
    title: "New Arrival Setiap Minggu",
    description: "Koleksi outfit wanita kekinian selalu diperbarui tiap minggu, diumumkan lewat Reels try-on harian.",
  },
  {
    title: "Dipercaya 7.800+ Followers",
    description: "Akun @clarissasolo.id dikenal sebagai fashion store favorit di Solo.",
  },
  {
    title: "Buka Setiap Hari 08.00-21.00",
    description: "Bisa mampir pagi sampai malam tanpa khawatir tutup.",
  },
  {
    title: "Katalog Jelas Sebelum Chat",
    description: "Cek @clarissa.catalog dulu, baru tanya-tanya via WA tanpa harus DM.",
  },
];

export const testimonials: { src: string; alt: string }[] = [];

export const faqs = [
  {
    question: "Di mana lokasi CLARISSA?",
    answer: "CLARISSA ada di Solo, Jawa Tengah. Untuk alamat lengkap dan panduan arah, chat WA admin atau cek link Maps di bio Instagram @clarissasolo.id.",
  },
  {
    question: "Jam berapa CLARISSA buka?",
    answer: "Buka setiap hari pukul 08.00-21.00, pagi sampai malam.",
  },
  {
    question: "Bagaimana cara order?",
    answer: "Pilih model dari Instagram atau katalog @clarissa.catalog, screenshot model yang disuka, kirim ke WA admin 0857-1961-1812 untuk cek ukuran dan ketersediaan, lalu datang ke store.",
  },
  {
    question: "Apakah bisa beli secara online?",
    answer: "Untuk pemesanan online dan pengiriman, langsung tanyakan ke WA admin ya, admin akan bantu infokan opsinya.",
  },
  {
    question: "Berapa harga koleksinya?",
    answer: "Harga mengikuti model dan koleksi terbaru. Screenshot model yang kamu suka lalu tanyakan harganya via WA admin.",
  },
  {
    question: "Di mana bisa lihat katalog lengkapnya?",
    answer: "Katalog ada di @clarissa.catalog, plus Reels try-on harian di @clarissasolo.id sebagai referensi gayamu.",
  },
];
