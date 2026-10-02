export const business = {
  name: "KopiKita",
  fullName: "Kedai KopiKita",
  category: "Coffee Shop / Kedai Kopi",
  address: "Jln Salak Turi km 1, Kepitu, Sleman, Yogyakarta",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jln%20Salak%20Turi%20km%201%2C%20Kepitu%2C%20Sleman%2C%20Yogyakarta",
  hours: "11.00-23.00",
  hoursNote: "Tutup setiap hari Kamis",
  igHandle: "@k.kopikita",
  igUrl: "https://www.instagram.com/k.kopikita/",
  followers: "3,9rb pengikut Instagram",
  ctaLabel: "Chat WhatsApp",
  navCtaLabel: "Chat WA",
  servicesTitle: "Menu KopiKita",
  servicesSubtitle: "Dari espresso sampai makanan berat. Harga dan menu lengkap? Tanya via WhatsApp.",
  finalHeading: "Rencana Nongkrong di Sleman? Sapa Kami via WhatsApp.",
  finalSub: "Tanya menu, jam buka, atau sekadar say hi. Dine-in, take away, GoFood, dan GrabFood tersedia.",
  footerDesc: "Kedai kopi rumahan yang cozy di Sleman. Dine-in & take away, tersedia di GoFood dan GrabFood.",
};

export const hero = {
  eyebrow: "Kedai KopiKita - Sleman, Yogyakarta",
  titleA: "Kedai Kopi Cozy",
  titleAccent: "untuk Nongkrong di Sleman",
  sub: "Espresso based, manual brew V60/aeropress, main course, snack, dan dessert. Dine-in & take away, juga tersedia di GoFood dan GrabFood.",
  bullets: [
    "11.00-23.00",
    "Tutup hari Kamis",
    "GoFood & GrabFood",
  ],
  primaryCta: "Chat WhatsApp",
  secondaryCta: "Lihat Menu",
};

export const highlights = [
  { icon: "coffee", title: "Kopi & Non-Kopi", desc: "Espresso based dan manual brew V60/aeropress." },
  { icon: "users", title: "Kedai Rumahan", desc: "Suasana cozy ala rumahan untuk nongkrong." },
  { icon: "bag", title: "Dine-In & Take Away", desc: "Makan di tempat atau bungkus, bebas pilih." },
  { icon: "truck", title: "GoFood & GrabFood", desc: "Bisa dipesan online sampai rumah." },
];

export const programs = [
  {
    icon: "coffee",
    title: "Espresso Based",
    description: "Kopi susu, latte, dan varian espresso lainnya.",
    badge: "Favorit",
    waMessage: "Halo KopiKita, saya mau tanya menu Espresso Based.",
  },
  {
    icon: "cup",
    title: "Manual Brew",
    description: "Seduhan V60 dan aeropress untuk penikmat kopi.",
    badge: "V60/Aeropress",
    waMessage: "Halo KopiKita, saya mau tanya menu Manual Brew.",
  },
  {
    icon: "feast",
    title: "Main Course",
    description: "Makanan berat untuk makan siang dan malam.",
    badge: "Tanya via WA",
    waMessage: "Halo KopiKita, saya mau tanya menu Main Course.",
  },
  {
    icon: "cookie",
    title: "Snacking",
    description: "Camilan pendamping kopi dan nongkrong.",
    badge: "Tanya via WA",
    waMessage: "Halo KopiKita, saya mau tanya menu Snacking.",
  },
  {
    icon: "cake",
    title: "Sweetest Things",
    description: "Dessert manis penutup yang pas.",
    badge: "Dessert",
    waMessage: "Halo KopiKita, saya mau tanya menu Sweetest Things.",
  },
];

export const classFormats = [
  {
    id: "pilih",
    title: "Pilih Menu",
    subtitle: "Langkah 1 dari 3",
    badge: "Langkah 1",
    popular: true,
    levels: "Lihat daftar menu di bawah",
    capacity: "Kopi & makanan",
    description: "Lihat menu kopi dan makanan yang tersedia.",
    features: [
      "Lihat daftar menu di halaman ini",
      "Tentukan dine-in atau take away",
      "Atau buka GoFood/GrabFood",
    ],
    ctaText: "Tanya Menu via WA",
    waMessage: "Halo Kedai KopiKita, saya mau tanya menu yang tersedia. ",
  },
  {
    id: "chat",
    title: "Chat WhatsApp",
    subtitle: "Langkah 2 dari 3",
    badge: "Langkah 2",
    popular: false,
    levels: "0878-3419-8643",
    capacity: "Respon jam operasional",
    description: "Chat untuk tanya menu, stok, atau info kedai.",
    features: [
      "Chat ke 0878-3419-8643",
      "Tanyakan menu dan harga",
      "Tanya info jam buka",
    ],
    ctaText: "Chat WhatsApp",
    waMessage: "Halo Kedai KopiKita, saya lihat info dari Instagram @k.kopikita dan ingin tanya-tanya dulu.",
  },
  {
    id: "ambil",
    title: "Datang / Pesan Online",
    subtitle: "Langkah 3 dari 3",
    badge: "Langkah 3",
    popular: false,
    levels: "Salak Turi, Sleman",
    capacity: "11.00-23.00",
    description: "Mampir langsung atau pesan via ojek online.",
    features: [
      "Datang ke Salak Turi, Sleman",
      "Atau order GoFood/GrabFood",
      "Catat: tutup setiap Kamis",
    ],
    ctaText: "Lihat Rute via WA",
    waMessage: "Halo Kedai KopiKita, saya mau tanya rute ke kedai. ",
  },
];

export const benefits = [
  { title: "Kedai Rumahan yang Cozy", description: "Suasana santai ala rumahan, enak untuk nongkrong lama." },
  { title: "Dine-In & Take Away", description: "Bebas makan di tempat atau bungkus untuk dibawa pulang." },
  { title: "Ada di GoFood & GrabFood", description: "Menu bisa dipesan online tanpa harus datang." },
  { title: "Menu Lengkap", description: "Ada kopi, manual brew, makanan berat, snack, sampai dessert." },
];

export const testimonials: { src: string; alt: string }[] = [];

export const about = {
  title: "Kedai Rumahan untuk Pecinta Kopi",
  description: "Kedai KopiKita adalah coffee shop rumahan di Sleman dengan brewing hours yang panjang dan menu yang lengkap.",
  points: [
    "Espresso based dan manual brew",
    "Ada main course, snack, dan dessert",
    "Dine-in & take away",
    "Tersedia di GoFood dan GrabFood",
  ],
  galleryNote: "Foto suasana kedai asli menyusul dari pemilik usaha. Sementara ini, cek postingan di Instagram @k.kopikita.",
};

export const faqs = [
  { question: "Di mana lokasi KopiKita?", answer: "Kami di Jln Salak Turi km 1, Kepitu, Sleman, Yogyakarta. Klik tombol Buka Google Maps di bagian Lokasi untuk rute." },
  { question: "Jam berapa buka?", answer: "Buka pukul 11.00-23.00 setiap hari, kecuali hari Kamis tutup." },
  { question: "Bagaimana cara order?", answer: "Bisa datang langsung, chat WhatsApp ke 0878-3419-8643, atau order via GoFood dan GrabFood." },
  { question: "Apakah tersedia di ojek online?", answer: "Ya, kami tersedia di GoFood dan GrabFood untuk dine-in maupun take away." },
  { question: "Berapa harga menunya?", answer: "Untuk daftar harga terbaru, tanyakan langsung via WhatsApp." },
  { question: "Apakah cocok untuk nongkrong?", answer: "Ya. Kedai kami bernuansa rumahan yang cozy, cocok untuk nongkrong santai. Untuk info lebih lanjut, chat WhatsApp kami." },
];
