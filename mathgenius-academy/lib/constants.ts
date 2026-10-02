export const programs = [
  {
    title: "Les Akademik SD–SMA",
    label: "ALL SUBJECTS",
    description:
      "Les semua mata pelajaran dengan pilihan Kurikulum Nasional maupun Internasional.",
  },
  {
    title: "Kurikulum Internasional",
    label: "CAMBRIDGE / IB",
    description:
      "Pendampingan belajar untuk siswa dengan kebutuhan kurikulum Cambridge atau International Baccalaureate.",
  },
  {
    title: "Persiapan Tes",
    label: "TEST PREPARATION",
    items: ["SNBT", "SAT", "GMAT", "TPA", "TKA"],
  },
  {
    title: "Olimpiade",
    label: "OLYMPIAD",
    description: "Bimbingan belajar untuk kebutuhan persiapan Olimpiade.",
  },
];

export const curricula = [
  {
    title: "Kurikulum Nasional",
    description: "Pendampingan khusus untuk kurikulum sekolah nasional Indonesia.",
  },
  {
    title: "Cambridge International",
    description: "Bimbingan untuk kurikulum global Cambridge.",
  },
  {
    title: "International Baccalaureate",
    description: "Program persiapan dan pendampingan kurikulum IB.",
  },
];

export const tests = [
  { title: "SNBT", description: "Persiapan seleksi masuk perguruan tinggi negeri." },
  { title: "SAT", description: "Persiapan ujian masuk universitas di luar negeri." },
  { title: "GMAT", description: "Persiapan tes untuk program pascasarjana bisnis." },
  { title: "TPA", description: "Persiapan Tes Potensi Akademik." },
  { title: "TKA", description: "Persiapan Tes Kemampuan Akademik." },
];

export const achievements = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/images/achievements/achievement-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Dokumentasi prestasi siswa MathGenius Academy ${index + 1}`,
}));

export const testimonials = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/images/testimonials/testimonial-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Testimonial WhatsApp MathGenius Academy ${index + 1}`,
}));

export const faqs = [
  {
    question: "MathGenius Academy menyediakan les untuk jenjang apa?",
    answer: "MathGenius Academy menyediakan les untuk siswa SD hingga SMA.",
  },
  {
    question: "Apakah tersedia semua mata pelajaran?",
    answer: "Ya. MathGenius Academy menyediakan les untuk semua mata pelajaran.",
  },
  {
    question: "Apakah tersedia kurikulum internasional?",
    answer: "Ya. Tersedia pendampingan untuk Kurikulum Nasional maupun kurikulum internasional Cambridge dan IB.",
  },
  {
    question: "Apakah ada persiapan SNBT?",
    answer: "Ya. MathGenius Academy menyediakan les persiapan SNBT.",
  },
  {
    question: "Apakah tersedia persiapan SAT, GMAT, dan TPA?",
    answer: "Ya. Tersedia program persiapan SAT, GMAT, dan TPA.",
  },
  {
    question: "Apakah tersedia les Olimpiade?",
    answer: "Ya. MathGenius Academy menyediakan les persiapan Olimpiade.",
  },
  {
    question: "Apakah tersedia persiapan TKA?",
    answer: "Ya. Tersedia les persiapan TKA.",
  },
  {
    question: "Bagaimana cara mengetahui program yang sesuai?",
    answer: "Hubungi MathGenius Academy melalui WhatsApp untuk berkonsultasi mengenai kebutuhan belajar.",
  },
];
