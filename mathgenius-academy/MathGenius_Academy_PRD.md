# PRD --- Landing Page MathGenius Academy

> **Dokumen ini ditujukan langsung untuk AI Coding Agent.** Bangun
> website production-quality berdasarkan spesifikasi di bawah ini.
> Jangan mengarang informasi bisnis yang tidak diberikan.

------------------------------------------------------------------------

# 1. Project Overview

## 1.1 Nama Bisnis

**MathGenius Academy**

## 1.2 Jenis Website

Single-page conversion-focused landing page untuk layanan bimbingan
belajar.

## 1.3 Tujuan Utama

Landing page harus:

1.  Membuat orang tua/siswa memahami cakupan layanan MathGenius Academy
    dalam beberapa detik.
2.  Menjelaskan bahwa MathGenius melayani:
    -   semua mata pelajaran;
    -   SD--SMA;
    -   Kurikulum Nasional;
    -   Kurikulum Internasional Cambridge;
    -   Kurikulum International Baccalaureate (IB);
    -   persiapan SNBT;
    -   persiapan SAT;
    -   persiapan GMAT;
    -   persiapan TPA;
    -   Olimpiade;
    -   TKA.
3.  Membangun trust melalui:
    -   **20 screenshot testimonial WhatsApp**;
    -   **20 foto siswa dengan medali/penghargaan**.
4.  Mengarahkan pengunjung ke WhatsApp sebagai CTA utama.
5.  Mengarahkan pengunjung ke Instagram untuk melihat lebih banyak
    testimoni dan dokumentasi keberhasilan.
6.  Memberikan pengalaman yang sangat baik pada mobile maupun desktop.
7.  Memiliki visual yang terasa premium, akademik, modern, dan konsisten
    dengan logo MathGenius Academy.

------------------------------------------------------------------------

# 2. Informasi Bisnis yang Boleh Digunakan

Gunakan hanya informasi berikut sebagai fakta bisnis utama.

### Layanan akademik

-   Les semua mata pelajaran.
-   Kurikulum Nasional.
-   Kurikulum Internasional Cambridge.
-   Kurikulum International Baccalaureate (IB).
-   Jenjang SD--SMA.
-   Persiapan SNBT.
-   Persiapan SAT.
-   Persiapan GMAT.
-   Persiapan TPA.
-   Les Olimpiade.
-   Persiapan TKA.

### Kontak

**WhatsApp:** `+6289523609475`

**Instagram:** `https://www.instagram.com/bimbel.mathgenius/`

Instagram digunakan sebagai secondary CTA untuk melihat lebih banyak
dokumentasi.

------------------------------------------------------------------------

# 3. Informasi yang TIDAK BOLEH DIADA-ADAKAN

Jangan membuat informasi berikut jika tidak diberikan:

-   harga;
-   diskon;
-   jumlah tutor;
-   jumlah siswa;
-   jumlah cabang;
-   lokasi kantor;
-   alamat;
-   jam operasional;
-   tahun berdiri;
-   jumlah tahun pengalaman;
-   jumlah alumni;
-   jumlah siswa yang lulus;
-   persentase kelulusan;
-   skor rata-rata;
-   universitas tempat alumni diterima;
-   nama tutor;
-   gelar tutor;
-   universitas asal tutor;
-   jumlah medali;
-   jumlah penghargaan;
-   jumlah pengguna;
-   rating;
-   review count;
-   garansi;
-   metode pembayaran;
-   jadwal;
-   durasi sesi;
-   platform belajar;
-   sistem belajar online/offline;
-   kelas privat/kelompok;
-   jumlah pertemuan;
-   klaim "pasti lolos";
-   klaim "pasti juara";
-   klaim "pasti naik nilai";
-   klaim "terbaik";
-   klaim "nomor 1";
-   klaim "paling murah".

Jika suatu informasi tidak tersedia, arahkan pengunjung untuk
**konsultasi melalui WhatsApp**.

------------------------------------------------------------------------

# 4. Brand Direction

Logo MathGenius Academy memiliki tiga identitas visual utama:

1.  **Navy / dark blue**
2.  **Bright blue**
3.  **Yellow / gold**

Logo juga menggunakan elemen:

-   graduation cap;
-   light bulb;
-   brain;
-   mathematical symbols;
-   spark/star;
-   academic typography.

Visual website harus memperluas bahasa visual tersebut, bukan membuat
identitas baru yang bertentangan.

## 4.1 Brand Personality

Gunakan karakter:

-   Intelligent
-   Academic
-   Premium
-   Modern
-   Trustworthy
-   Energetic
-   Achievement-oriented
-   Friendly
-   Clean

Hindari tampilan:

-   terlalu kekanak-kanakan;
-   terlalu korporat;
-   terlalu ramai;
-   terlalu banyak warna;
-   neon;
-   gaming;
-   generic SaaS;
-   template sekolah yang kuno.

------------------------------------------------------------------------

# 5. Color System

Gunakan logo sebagai visual reference utama.

Gunakan CSS variables sehingga palette mudah diubah.

``` css
:root {
  --navy-950: #071B3A;
  --navy-900: #0B2550;
  --navy-800: #123A72;

  --blue-700: #0878D1;
  --blue-600: #1689E5;
  --blue-500: #2B9AF0;
  --blue-100: #EAF6FF;

  --yellow-500: #FFC400;
  --yellow-400: #FFD32A;
  --yellow-100: #FFF7C7;

  --white: #FFFFFF;
  --off-white: #F7FAFD;

  --text: #101828;
  --muted: #667085;

  --border: #DDE7F2;
}
```

### Important

Warna di atas adalah **starting design tokens**, bukan klaim bahwa itu
adalah kode warna resmi logo.

AI Agent harus mengambil logo sebagai referensi visual dan melakukan
fine-tuning agar website terlihat serasi.

### Penggunaan warna

Navy: - navbar; - footer; - major headings; - dark sections; -
trust/authority elements.

Blue: - CTA secondary; - links; - accent; - academic graphics.

Yellow: - primary CTA; - highlights; - achievement accents; - decorative
elements; - emphasis.

White/off-white: - primary content background.

Jangan menggunakan yellow sebagai background untuk seluruh halaman.

------------------------------------------------------------------------

# 6. Typography

Recommended:

``` text
Primary: Plus Jakarta Sans
Fallback: Inter
System fallback: Arial, sans-serif
```

Typography hierarchy:

``` text
H1: 56–72px desktop / 38–46px mobile
H2: 40–52px desktop / 30–36px mobile
H3: 24–30px desktop / 21–24px mobile
Body: 16–18px
Small: 13–14px
Button: 15–16px, 600–700 weight
```

Gunakan line-height yang lega.

Headline harus bold, tetapi jangan membuat seluruh paragraph bold.

------------------------------------------------------------------------

# 7. Target Audience

## Primary

Orang tua siswa SD--SMA yang:

-   mencari pendampingan akademik;
-   membutuhkan bantuan mata pelajaran sekolah;
-   menggunakan kurikulum Nasional;
-   menggunakan kurikulum Cambridge;
-   menggunakan IB;
-   ingin mempersiapkan anak untuk ujian atau kompetisi.

## Secondary

Siswa SMP/SMA yang:

-   mempersiapkan SNBT;
-   mempersiapkan SAT;
-   mempersiapkan GMAT;
-   mempersiapkan TPA;
-   mengikuti Olimpiade;
-   mempersiapkan TKA.

## Conversion mindset

Landing page harus memudahkan visitor berpindah dari:

**"Saya baru menemukan MathGenius"**

menjadi:

**"Saya memahami programnya"**

→

**"Saya melihat bukti/testimoni"**

→

**"Saya ingin bertanya apakah programnya cocok untuk saya/anak saya"**

→

**WhatsApp**

------------------------------------------------------------------------

# 8. Information Architecture

Urutan section:

``` text
1. Announcement / Trust Strip
2. Navbar
3. Hero
4. Program Overview
5. Kurikulum Nasional & Internasional
6. Exam Preparation
7. Olimpiade & TKA
8. Why MathGenius / Learning Experience
9. Achievement Gallery — 20 Students
10. Testimonials — 20 WhatsApp Screenshots
11. Instagram Proof / More Stories
12. FAQ
13. Final CTA
14. Footer
15. Mobile Sticky WhatsApp CTA
```

------------------------------------------------------------------------

# 9. Navbar

## Desktop

Navbar fixed/sticky.

Layout:

``` text
[Logo]       Program   Kurikulum   Persiapan Tes   Prestasi   Testimoni   [WhatsApp]
```

Gunakan logo horizontal jika tersedia.

Jika hanya tersedia logo portrait/vertical, buat container logo dengan
proporsi yang tetap dan tidak memaksa gambar menjadi gepeng.

CTA:

> Konsultasi via WhatsApp

## Mobile

Jangan mempertahankan navbar desktop.

Gunakan:

``` text
[Logo]                         [☰]
```

Menu menjadi fullscreen/sheet.

Menu:

-   Program
-   Kurikulum
-   Persiapan Tes
-   Prestasi
-   Testimoni
-   Instagram
-   WhatsApp

Menu harus dapat ditutup dengan: - tombol close; - Escape; - click
outside jika sesuai implementasi.

------------------------------------------------------------------------

# 10. Hero Section

Hero adalah bagian paling penting.

## Objective

Dalam 3--5 detik pengunjung harus mengetahui:

-   nama MathGenius Academy;
-   layanan bimbel;
-   jenjang SD--SMA;
-   kurikulum Nasional/Cambridge/IB;
-   tersedia persiapan berbagai tes;
-   CTA WhatsApp.

## Recommended Copy

Eyebrow:

> MATHGENIUS ACADEMY

Headline:

> Bimbingan Belajar untuk Setiap Target Akademik

Alternative headline jika desain membutuhkan:

> Belajar Lebih Terarah. Raih Target Akademikmu.

Subheadline:

> Les semua mata pelajaran untuk SD--SMA dengan Kurikulum Nasional,
> Cambridge, atau IB, serta persiapan SNBT, SAT, GMAT, TPA, Olimpiade,
> dan TKA.

Primary CTA:

> Konsultasi via WhatsApp

Secondary CTA:

> Lihat Program

Small trust line:

> SD • SMP • SMA • Nasional • Cambridge • IB

Jangan menggunakan klaim hasil yang tidak diberikan.

------------------------------------------------------------------------

# 11. Hero Visual

Jangan menggunakan stock photo generik sebagai visual utama.

Bangun visual yang terinspirasi langsung dari logo:

-   light bulb;
-   brain;
-   graduation cap;
-   mathematical symbols;
-   academic cards;
-   achievement stars;
-   geometric lines.

## Code-generated visual

Gunakan:

-   SVG;
-   CSS;
-   React;
-   Motion for React.

Tidak wajib menggunakan gambar tambahan.

### Visual composition desktop

Hero desktop:

``` text
LEFT
headline
description
CTA

RIGHT
large academic illustration
```

Visual kanan dapat berupa:

-   abstract lightbulb/brain;
-   mathematical equations;
-   floating achievement cards;
-   graduation cap;
-   glowing yellow accent.

### Mobile

Jangan memaksakan visual kanan menjadi sangat kecil.

Gunakan urutan:

``` text
eyebrow
headline
description
CTA
compact academic visual
```

Visual dibuat lebih pendek agar CTA tetap berada di atas fold.

------------------------------------------------------------------------

# 12. Hero Animation

Gunakan animasi halus.

## Entrance

1.  eyebrow fade-up;
2.  H1 fade-up;
3.  paragraph fade-up;
4.  CTA fade-up;
5.  illustration draw-in.

## Continuous

-   small mathematical symbols floating;
-   subtle glow pada yellow accent;
-   tiny stars pulsing;
-   line drawing;
-   brain/lightbulb highlight.

Durasi 4--8 detik untuk infinite animations.

Jangan menggunakan animasi yang mengganggu pembacaan.

------------------------------------------------------------------------

# 13. Program Overview

Heading:

> Program Belajar untuk Berbagai Kebutuhan

Subheading:

> Dari pelajaran sekolah hingga persiapan ujian dan kompetisi, pilih
> kebutuhan belajar yang sesuai.

Buat 4 kategori utama.

## Card 1 --- Les Akademik SD--SMA

Label:

> SD --- SMA

Copy:

> Les semua mata pelajaran dengan pilihan Kurikulum Nasional maupun
> Internasional.

Badge:

> ALL SUBJECTS

## Card 2 --- Kurikulum Internasional

Label:

> CAMBRIDGE / IB

Copy:

> Pendampingan belajar untuk siswa dengan kebutuhan kurikulum Cambridge
> atau International Baccalaureate.

## Card 3 --- Persiapan Tes

Label:

> TEST PREPARATION

Items:

-   SNBT
-   SAT
-   GMAT
-   TPA
-   TKA

## Card 4 --- Olimpiade

Label:

> OLYMPIAD

Copy:

> Bimbingan belajar untuk kebutuhan persiapan Olimpiade.

Jangan menentukan bidang Olimpiade karena belum diberikan.

------------------------------------------------------------------------

# 14. Program Cards Interaction

Desktop:

-   4 cards horizontal/2×2 sesuai viewport;
-   hover elevation;
-   icon animation;
-   yellow accent line.

Mobile:

-   cards menjadi vertical stack;
-   setiap card memiliki tap-friendly area;
-   jangan menggunakan hover-only interaction.

Animation:

``` text
card enters → icon scales slightly → accent line expands
```

------------------------------------------------------------------------

# 15. Kurikulum Section

Section harus terasa premium dan akademik.

Heading:

> Satu Tempat, Berbagai Kurikulum

Subheading:

> Pendampingan belajar disesuaikan dengan kebutuhan siswa dan kurikulum
> yang digunakan.

Buat tiga visual panels:

### Nasional

> Kurikulum Nasional

### Cambridge

> Cambridge International

### IB

> International Baccalaureate

Jangan menambahkan subprogram seperti IGCSE, A-Level, PYP, MYP, atau DP
kecuali MathGenius sendiri mengonfirmasi layanan tersebut.

## Visual

Gunakan:

-   document cards;
-   academic grid;
-   mathematical formula;
-   school-style icons;
-   blue/yellow accents.

------------------------------------------------------------------------

# 16. Curriculum Comparison Visual

Desktop:

Tiga kolom.

``` text
┌────────────┐ ┌────────────┐ ┌────────────┐
│ NASIONAL   │ │ CAMBRIDGE  │ │ IB         │
│            │ │            │ │            │
│ icon       │ │ icon       │ │ icon       │
│ description│ │ description│ │ description│
└────────────┘ └────────────┘ └────────────┘
```

Mobile:

Jangan mengecilkan tiga kolom menjadi tiny cards.

Gunakan:

``` text
[Accordion/Card Nasional]
[Accordion/Card Cambridge]
[Accordion/Card IB]
```

atau single-column cards.

------------------------------------------------------------------------

# 17. Exam Preparation Section

Heading:

> Persiapkan Diri untuk Berbagai Tes

Subheading:

> Pendampingan belajar untuk kebutuhan tes akademik dan seleksi yang
> lebih spesifik.

Buat 5 cards:

### SNBT

> Persiapan SNBT.

### SAT

> Persiapan SAT.

### GMAT

> Persiapan GMAT.

### TPA

> Persiapan TPA.

### TKA

> Persiapan TKA.

Jangan mengarang: - skor target; - jumlah soal; - jumlah sesi; -
jadwal; - tryout; - materi spesifik; - strategi ujian; - guarantee.

CTA:

> Konsultasikan Program

------------------------------------------------------------------------

# 18. Olimpiade Section

Gunakan visual yang lebih achievement-oriented.

Heading:

> Tumbuhkan Potensi Kompetitif

Copy:

> Program bimbingan untuk siswa yang mempersiapkan diri mengikuti
> Olimpiade.

Visual: - medal; - trophy; - star; - mathematical symbols; - achievement
path.

Gunakan foto prestasi asli pada section berikutnya sebagai bukti visual.

------------------------------------------------------------------------

# 19. Achievement Gallery --- 20 Foto

Ini adalah salah satu **trust section utama**.

User memiliki **20 foto siswa yang mendapatkan medali/penghargaan
setelah mengikuti bimbingan di MathGenius Academy**.

## Heading

> Dokumentasi Prestasi Siswa

Subheading:

> Lihat dokumentasi siswa-siswa MathGenius Academy yang meraih medali
> dan penghargaan setelah mengikuti bimbingan.

Gunakan wording yang tidak melebih-lebihkan hubungan sebab-akibat di
luar informasi yang diberikan.

## IMPORTANT

**Jangan membuat caption nama siswa, jenis lomba, peringkat, tahun, atau
jumlah medali jika data tersebut tidak tertulis pada foto atau tidak
diberikan oleh user.**

------------------------------------------------------------------------

# 20. Achievement Gallery Desktop

Desktop jangan hanya menampilkan satu foto besar.

Gunakan premium masonry/grid:

``` text
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ Photo 1│ │ Photo 2│ │ Photo 3│ │ Photo 4│
├────────┼────────┼────────┼────────┤
│ Photo 5│ │ Photo 6│ │ Photo 7│ │ Photo 8│
...
```

Recommended:

-   4-column grid pada wide desktop;
-   3-column pada tablet;
-   2-column pada mobile.

Namun untuk foto portrait dengan aspect ratio berbeda, gunakan CSS grid
yang tidak memotong wajah/medali.

Default:

``` css
object-fit: cover;
```

Jika crop berisiko menghilangkan informasi penting:

``` css
object-fit: contain;
```

AI Agent harus memilih berdasarkan actual image dimensions setelah asset
diberikan.

------------------------------------------------------------------------

# 21. Achievement Lightbox

Setiap foto dapat diklik.

Lightbox:

-   full-screen overlay;
-   image contain;
-   prev;
-   next;
-   close;
-   keyboard arrows;
-   Escape;
-   touch swipe.

Counter:

> 01 / 20

Tidak perlu menampilkan caption jika tidak ada data.

------------------------------------------------------------------------

# 22. Achievement Carousel Mobile

Pada mobile, gunakan carousel horizontal yang lebih immersive.

Recommended:

``` text
[ large photo ]
      03 / 20
● ○ ○ ○ ○
```

Swipe left/right.

Tambahkan tombol prev/next jika tidak mengganggu.

Jangan membuat 20 foto ditampilkan sekaligus sebagai tiny thumbnails.

------------------------------------------------------------------------

# 23. Testimonials --- 20 WhatsApp Screenshots

User memiliki **20 screenshot WhatsApp testimonials**.

Ini wajib menjadi section utama.

## Heading

> Cerita dari Siswa & Orang Tua

Subheading:

> Lihat pengalaman yang dibagikan melalui percakapan WhatsApp bersama
> MathGenius Academy.

Jangan menulis testimonial baru.

Jangan melakukan paraphrase testimonial seolah-olah itu kutipan resmi.

Gunakan screenshot asli sebagai source of truth.

------------------------------------------------------------------------

# 24. Testimonial Carousel Desktop

Desktop:

-   active screenshot besar;
-   2 screenshot sebagian terlihat di kiri/kanan jika aspect ratio
    memungkinkan;
-   prev/next;
-   dots;
-   counter.

Example:

``` text
        ┌───────────────────┐
        │                   │
        │  WhatsApp Image   │
        │                   │
        └───────────────────┘

             07 / 20

        ←                 →
```

Autoplay: - 5--6 detik; - pause on hover; - pause on focus; - pause on
interaction.

------------------------------------------------------------------------

# 25. Testimonial Carousel Mobile

Mobile harus benar-benar berbeda dari desktop.

Gunakan:

-   1 screenshot per slide;
-   width hampir memenuhi viewport;
-   rounded corners;
-   swipe;
-   dots;
-   counter;
-   prev/next optional.

Jangan menampilkan 3 screenshot sekaligus di mobile.

------------------------------------------------------------------------

# 26. Testimonial Lightbox

Klik screenshot:

-   open full-screen;
-   `object-fit: contain`;
-   black/navy overlay;
-   close button;
-   next/prev;
-   Escape;
-   keyboard;
-   swipe.

Counter:

> 12 / 20

------------------------------------------------------------------------

# 27. Privacy Consideration for Screenshots

Screenshot WhatsApp dapat mengandung nama, nomor, profile photo, atau
informasi personal.

Jangan melakukan OCR lalu menyalin isi screenshot ke halaman.

Gunakan gambar asli sebagai asset.

Jika ada data sensitif yang terlihat, jangan memperbesar/mereplikasi
data tersebut di text layer.

------------------------------------------------------------------------

# 28. "More Proof on Instagram" Section

Karena MathGenius memiliki lebih banyak testimoni dan bukti keberhasilan
di Instagram, buat section khusus.

Heading:

> Masih Banyak Cerita Lainnya di Instagram

Copy:

> Ini baru sebagian dokumentasi yang ditampilkan di website. Kunjungi
> Instagram MathGenius Academy untuk melihat lebih banyak testimoni,
> aktivitas belajar, dan dokumentasi siswa.

CTA:

> Lihat Instagram MathGenius

URL:

`https://www.instagram.com/bimbel.mathgenius/`

Secondary CTA:

> Konsultasi via WhatsApp

Visual:

-   Instagram-style cards;
-   photo collage;
-   small decorative grid;
-   social icon.

**Jangan mengambil otomatis feed Instagram melalui API.**

Gunakan visual statis/code-generated.

Jika tidak ada asset Instagram tambahan, gunakan collage dari
achievement/testimonial assets yang sudah diberikan, tanpa mengklaim
bahwa gambar tersebut adalah feed live Instagram.

------------------------------------------------------------------------

# 29. Trust Architecture

Landing page harus memiliki beberapa trust moments.

Urutan:

``` text
Hero
↓
Program
↓
Curriculum
↓
Test Preparation
↓
Achievement Photos
↓
WhatsApp Testimonials
↓
Instagram
↓
FAQ
↓
WhatsApp
```

Alasan:

Pengunjung melihat apa yang dijual → memahami cakupan → melihat bukti →
baru diarahkan lebih kuat ke CTA.

------------------------------------------------------------------------

# 30. FAQ

Gunakan accordion accessible.

FAQ hanya boleh membahas hal yang diketahui.

### FAQ 1

**MathGenius Academy menyediakan les untuk jenjang apa?**

Jawaban: \> MathGenius Academy menyediakan les untuk siswa SD hingga
SMA.

### FAQ 2

**Apakah tersedia semua mata pelajaran?**

Jawaban: \> Ya. MathGenius Academy menyediakan les untuk semua mata
pelajaran.

### FAQ 3

**Apakah tersedia kurikulum internasional?**

Jawaban: \> Ya. Tersedia pendampingan untuk Kurikulum Nasional maupun
kurikulum internasional Cambridge dan IB.

### FAQ 4

**Apakah ada persiapan SNBT?**

Jawaban: \> Ya. MathGenius Academy menyediakan les persiapan SNBT.

### FAQ 5

**Apakah tersedia persiapan SAT, GMAT, dan TPA?**

Jawaban: \> Ya. Tersedia program persiapan SAT, GMAT, dan TPA.

### FAQ 6

**Apakah tersedia les Olimpiade?**

Jawaban: \> Ya. MathGenius Academy menyediakan les persiapan Olimpiade.

### FAQ 7

**Apakah tersedia persiapan TKA?**

Jawaban: \> Ya. Tersedia les persiapan TKA.

### FAQ 8

**Bagaimana cara mengetahui program yang sesuai?**

Jawaban: \> Hubungi MathGenius Academy melalui WhatsApp untuk
berkonsultasi mengenai kebutuhan belajar.

Jangan menambahkan FAQ tentang harga, lokasi, durasi, jadwal, metode
pembelajaran, atau platform jika belum ada datanya.

------------------------------------------------------------------------

# 31. WhatsApp CTA

Nomor:

``` text
+6289523609475
```

Gunakan URL:

``` text
https://wa.me/6289523609475
```

Default prefilled message:

``` text
Halo MathGenius Academy, saya ingin berkonsultasi mengenai program bimbingan belajar.
```

Helper:

``` ts
export function getWhatsAppUrl(message?: string) {
  const phone = "6289523609475";

  const defaultMessage =
    "Halo MathGenius Academy, saya ingin berkonsultasi mengenai program bimbingan belajar.";

  const finalMessage = message ?? defaultMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
}
```

Semua CTA WhatsApp harus menggunakan helper yang sama.

------------------------------------------------------------------------

# 32. Contextual WhatsApp Messages

Jika CTA berasal dari section tertentu, boleh menggunakan message
berbeda.

Program:

``` text
Halo MathGenius Academy, saya ingin mengetahui program les SD-SMA dan pilihan kurikulumnya.
```

Kurikulum:

``` text
Halo MathGenius Academy, saya ingin berkonsultasi mengenai les Kurikulum Nasional/Cambridge/IB.
```

Tes:

``` text
Halo MathGenius Academy, saya ingin mengetahui program persiapan SNBT/SAT/GMAT/TPA/TKA.
```

Olimpiade:

``` text
Halo MathGenius Academy, saya ingin berkonsultasi mengenai les persiapan Olimpiade.
```

Semua tetap menuju nomor yang sama.

------------------------------------------------------------------------

# 33. Mobile Sticky CTA

Pada mobile, tampilkan fixed bottom CTA.

``` text
┌─────────────────────────────────┐
│  💬 Konsultasi via WhatsApp     │
└─────────────────────────────────┘
```

Requirements:

-   fixed;
-   safe-area aware;
-   high contrast;
-   accessible;
-   tidak menutupi konten;
-   muncul setelah user mulai scroll;
-   subtle slide-up animation.

Desktop tidak perlu fixed bottom CTA karena navbar/section CTA sudah
cukup.

------------------------------------------------------------------------

# 34. Final CTA

Background:

Navy.

Accent:

Yellow.

Heading:

> Siap Menentukan Target Belajar?

Subheadline:

> Konsultasikan kebutuhan belajar siswa bersama MathGenius Academy.

CTA:

> Konsultasi via WhatsApp

Secondary:

> Lihat Instagram

Decorative visual:

-   yellow stars;
-   mathematical equations;
-   graduation cap outline;
-   lightbulb line art;
-   curved blue lines.

------------------------------------------------------------------------

# 35. Footer

Footer dark navy.

Content:

**MathGenius Academy**

> Bimbingan belajar untuk SD--SMA, berbagai kurikulum, persiapan tes,
> Olimpiade, dan TKA.

Links:

-   Program
-   Kurikulum
-   Persiapan Tes
-   Prestasi
-   Testimoni
-   FAQ
-   Instagram
-   WhatsApp

Contact:

> WhatsApp: +6289523609475

Social:

Instagram → `https://www.instagram.com/bimbel.mathgenius/`

Do not add: - address; - email; - operating hours; - other social
media; - fake copyright company information.

Copyright:

``` text
© [CURRENT YEAR] MathGenius Academy. All rights reserved.
```

------------------------------------------------------------------------

# 36. Desktop Design Specification

Desktop breakpoint:

``` text
≥ 1024px
```

Recommended max width:

``` css
max-width: 1200px;
```

Large desktop:

``` text
1440px+
```

Do not stretch content across entire viewport.

## Desktop Hero

Use 55/45 or 50/50 split.

Left: - headline; - paragraph; - CTA.

Right: - large code-generated academic visual.

## Desktop Programs

4 cards in grid.

## Desktop Curriculum

3 columns.

## Desktop Tests

5 cards can use: - 5-column on very wide screens; - 3+2 grid on standard
desktop.

## Desktop Achievement

4-column grid.

## Desktop Testimonials

large carousel.

------------------------------------------------------------------------

# 37. Mobile Design Specification

Breakpoint:

``` text
< 768px
```

Mobile is **not simply a scaled-down desktop**.

Recompose sections.

## Mobile Hero

Order:

``` text
Logo/eyebrow
Headline
Description
CTA
Academic visual
```

## Mobile Program

One card per row.

## Mobile Curriculum

One card per row.

## Mobile Test

Horizontal or vertical cards.

Preferred: vertical stacked cards because information is short.

## Mobile Achievement

Carousel.

## Mobile Testimonials

One screenshot per slide.

## Mobile CTA

Sticky bottom WhatsApp.

## Mobile Navigation

Fullscreen/sheet menu.

------------------------------------------------------------------------

# 38. Tablet

Breakpoint:

``` text
768px–1023px
```

Use hybrid layout.

-   2-column hero;
-   2-column cards;
-   2--3 column gallery;
-   standard navbar if width allows;
-   avoid overcrowding.

------------------------------------------------------------------------

# 39. Animation System

Use **Motion for React**.

No need for 3D.

Prioritize elegant 2D motion.

## Allowed

-   SVG line drawing;
-   opacity;
-   translate;
-   scale;
-   rotation of decorative symbols;
-   gradient movement;
-   subtle glow;
-   card hover;
-   scroll reveal;
-   carousel transitions.

## Avoid

-   excessive bouncing;
-   huge parallax;
-   aggressive zoom;
-   full-page transitions;
-   animation that blocks content.

------------------------------------------------------------------------

# 40. Code-Generated Academic Visual Components

Create reusable components:

``` text
AcademicGrid
MathSymbols
LightbulbIllustration
BrainIllustration
GraduationCapIllustration
EquationDecorations
AchievementStars
AcademicOrbit
CoordinateGraph
TestPreparationIllustration
```

Example:

``` tsx
<AcademicGrid />
<MathSymbols />
<AchievementStars />
```

All decorative visuals should be SVG/CSS where possible.

------------------------------------------------------------------------

# 41. Accessibility / Reduced Motion

Implement:

``` css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Carousel must remain usable without animation.

------------------------------------------------------------------------

# 42. Image Asset Architecture

User will provide 40 images:

``` text
20 achievement/student photos
20 WhatsApp testimonial screenshots
```

Recommended:

``` text
/public/images/
├── logo/
│   └── mathgenius-logo.jpg
├── achievements/
│   ├── achievement-01.webp
│   ├── achievement-02.webp
│   ├── achievement-03.webp
│   ├── achievement-04.webp
│   ├── achievement-05.webp
│   ├── achievement-06.webp
│   ├── achievement-07.webp
│   ├── achievement-08.webp
│   ├── achievement-09.webp
│   ├── achievement-10.webp
│   ├── achievement-11.webp
│   ├── achievement-12.webp
│   ├── achievement-13.webp
│   ├── achievement-14.webp
│   ├── achievement-15.webp
│   ├── achievement-16.webp
│   ├── achievement-17.webp
│   ├── achievement-18.webp
│   ├── achievement-19.webp
│   └── achievement-20.webp
└── testimonials/
    ├── testimonial-01.webp
    ├── testimonial-02.webp
    ├── testimonial-03.webp
    ├── testimonial-04.webp
    ├── testimonial-05.webp
    ├── testimonial-06.webp
    ├── testimonial-07.webp
    ├── testimonial-08.webp
    ├── testimonial-09.webp
    ├── testimonial-10.webp
    ├── testimonial-11.webp
    ├── testimonial-12.webp
    ├── testimonial-13.webp
    ├── testimonial-14.webp
    ├── testimonial-15.webp
    ├── testimonial-16.webp
    ├── testimonial-17.webp
    ├── testimonial-18.webp
    ├── testimonial-19.webp
    └── testimonial-20.webp
```

AI Agent harus tetap fleksibel jika nama file aktual berbeda.

------------------------------------------------------------------------

# 43. Image Optimization

Untuk foto:

-   prefer WebP/AVIF;
-   use Next/Image;
-   specify width/height;
-   prevent layout shift;
-   lazy-load below fold;
-   hero asset can use priority.

Testimonial screenshots:

``` text
object-fit: contain;
```

Achievement photos:

-   use `cover` hanya jika crop aman;
-   otherwise `contain`.

------------------------------------------------------------------------

# 44. Recommended Tech Stack

## Framework

**Next.js + TypeScript + App Router**

## Styling

**Tailwind CSS**

Gunakan CSS variables untuk brand tokens.

## Animation

**Motion for React**

## Icons

**Lucide React**

## Carousel

**Embla Carousel**

## Image

**next/image**

## Backend

Tidak diperlukan.

## Database

Tidak diperlukan.

## Authentication

Tidak diperlukan.

------------------------------------------------------------------------

# 45. Project Structure

``` text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── MobileStickyCTA.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Programs.tsx
│   │   ├── Curriculum.tsx
│   │   ├── TestPreparation.tsx
│   │   ├── Olympiad.tsx
│   │   ├── Achievements.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramCTA.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── InstagramButton.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── CurriculumCard.tsx
│   │   ├── TestCard.tsx
│   │   ├── Accordion.tsx
│   │   ├── ImageLightbox.tsx
│   │   └── CarouselControls.tsx
│   │
│   └── illustrations/
│       ├── AcademicGrid.tsx
│       ├── MathSymbols.tsx
│       ├── LightbulbIllustration.tsx
│       ├── BrainIllustration.tsx
│       ├── GraduationCapIllustration.tsx
│       ├── AchievementStars.tsx
│       └── AcademicOrbit.tsx
│
├── lib/
│   ├── constants.ts
│   └── whatsapp.ts
│
├── public/
│   └── images/
│       ├── logo/
│       ├── achievements/
│       └── testimonials/
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

------------------------------------------------------------------------

# 46. Data-Driven Content

Do not hard-code repeated cards directly in JSX.

Use arrays.

Example:

``` ts
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
      "Pendampingan belajar untuk siswa dengan kebutuhan kurikulum Cambridge atau IB.",
  },
  {
    title: "Persiapan Tes",
    label: "TEST PREPARATION",
    items: ["SNBT", "SAT", "GMAT", "TPA", "TKA"],
  },
  {
    title: "Olimpiade",
    label: "OLYMPIAD",
    description:
      "Bimbingan belajar untuk kebutuhan persiapan Olimpiade.",
  },
];
```

------------------------------------------------------------------------

# 47. Testimonial Data

``` ts
export const testimonials = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,
    src: `/images/testimonials/testimonial-${String(index + 1).padStart(2, "0")}.webp`,
    alt: `Testimonial WhatsApp MathGenius Academy ${index + 1}`,
  })
);
```

Jangan generate quote dari image.

------------------------------------------------------------------------

# 48. Achievement Data

``` ts
export const achievements = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,
    src: `/images/achievements/achievement-${String(index + 1).padStart(2, "0")}.webp`,
    alt: `Dokumentasi prestasi siswa MathGenius Academy ${index + 1}`,
  })
);
```

Jika actual filenames berbeda, update source path tetapi pertahankan 20
item.

------------------------------------------------------------------------

# 49. SEO

## Title

``` text
MathGenius Academy | Bimbel SD-SMA, Cambridge, IB & Persiapan Tes
```

## Meta Description

``` text
MathGenius Academy menyediakan les semua mata pelajaran SD-SMA untuk Kurikulum Nasional, Cambridge, dan IB, serta persiapan SNBT, SAT, GMAT, TPA, Olimpiade, dan TKA.
```

Jangan menambahkan klaim hasil ke meta description.

## Open Graph

Title:

``` text
MathGenius Academy — Bimbingan Belajar untuk Berbagai Target Akademik
```

Description:

``` text
Les SD-SMA, Kurikulum Nasional/Cambridge/IB, persiapan SNBT, SAT, GMAT, TPA, Olimpiade, dan TKA.
```

OG image menggunakan branded visual.

------------------------------------------------------------------------

# 50. Structured Data

Boleh menggunakan `EducationalOrganization` jika implementasi schema
sesuai dan hanya mengisi data yang benar-benar diketahui.

Jangan membuat:

-   fake address;
-   fake aggregateRating;
-   fake reviewCount;
-   fake price;
-   fake opening hours.

------------------------------------------------------------------------

# 51. Performance Requirements

Target:

-   Lighthouse Performance tinggi;
-   no layout shift;
-   fast first paint;
-   optimized images;
-   minimal JS;
-   no unnecessary third-party scripts.

Rules:

1.  Server Components by default.
2.  Client Components hanya untuk:
    -   carousel;
    -   lightbox;
    -   mobile menu;
    -   animation-heavy components;
    -   interactive FAQ.
3.  Lazy-load below-fold images.
4.  Do not load all 40 images at full resolution simultaneously.
5.  Use responsive image sizes.

------------------------------------------------------------------------

# 52. Accessibility

Must-have:

-   semantic HTML;
-   exactly one H1;
-   logical H2/H3 hierarchy;
-   keyboard navigation;
-   visible focus;
-   accessible buttons;
-   aria-label for icon-only buttons;
-   carousel keyboard support;
-   lightbox keyboard support;
-   Escape closes modal;
-   focus trap in modal if implemented;
-   alt text;
-   sufficient contrast;
-   reduced motion.

------------------------------------------------------------------------

# 53. Responsive QA Matrix

AI Agent wajib menguji minimal:

### Mobile

``` text
360 × 800
375 × 812
390 × 844
412 × 915
430 × 932
```

### Tablet

``` text
768 × 1024
820 × 1180
1024 × 1366
```

### Desktop

``` text
1280 × 720
1366 × 768
1440 × 900
1536 × 864
1920 × 1080
```

------------------------------------------------------------------------

# 54. Mobile-Specific QA

Periksa:

-   tidak ada horizontal scroll;
-   navbar tidak overflow;
-   logo tidak terlalu besar;
-   headline tidak terlalu panjang;
-   CTA mudah ditekan;
-   sticky WhatsApp tidak menutupi konten;
-   20 achievement images bisa di-swipe;
-   20 testimonial images bisa di-swipe;
-   lightbox tidak keluar viewport;
-   FAQ mudah dibuka;
-   Instagram CTA mudah ditekan.

------------------------------------------------------------------------

# 55. Desktop-Specific QA

Periksa:

-   hero tidak terlalu tinggi;
-   content max-width konsisten;
-   visual tidak terlihat kosong;
-   typography tidak terlalu besar;
-   cards memiliki alignment;
-   achievement gallery rapi;
-   testimonial screenshot tidak blur;
-   CTA terlihat jelas;
-   navbar tidak menutupi section anchor.

------------------------------------------------------------------------

# 56. UX Rules

## Rule 1

Jangan membuat visitor harus scroll jauh sebelum mengetahui CTA.

## Rule 2

WhatsApp CTA harus muncul berkali-kali tetapi tidak terasa spammy.

## Rule 3

Achievement dan testimonial adalah bukti, bukan dekorasi.

## Rule 4

Jangan mengarang angka.

## Rule 5

Jangan membuat rating palsu.

## Rule 6

Jangan menggunakan testimonial palsu.

## Rule 7

Jangan mengubah screenshot menjadi quote.

## Rule 8

Instagram harus menjadi secondary proof channel.

## Rule 9

Mobile harus dirancang sebagai experience tersendiri.

------------------------------------------------------------------------

# 57. Recommended CTA Distribution

CTA utama:

### Navbar

> WhatsApp

### Hero

> Konsultasi via WhatsApp

### Program

> Tanya Program

### Curriculum

> Konsultasi Kurikulum

### Test Preparation

> Tanya Persiapan Tes

### Olympiad

> Konsultasi Olimpiade

### Achievement

> Lihat Selengkapnya di Instagram

### Testimonials

> Konsultasi via WhatsApp

### Instagram

> Lihat Instagram MathGenius

### Final

> Konsultasi via WhatsApp

------------------------------------------------------------------------

# 58. Animation Priority

P0: - hero entrance; - navbar transition; - card reveal; - carousel; -
lightbox; - mobile menu.

P1: - mathematical SVG animations; - achievement reveal; - CTA
micro-interactions.

P2: - decorative infinite animations.

Jika animation menyebabkan performance turun, **hapus P2 terlebih
dahulu**, bukan mengorbankan usability.

------------------------------------------------------------------------

# 59. No 3D Requirement

Website tidak membutuhkan Three.js atau WebGL.

Semua visual tambahan harus dapat dibuat dari:

-   CSS;
-   SVG;
-   React;
-   Motion for React.

Tujuannya agar AI Agent dapat mengimplementasikan visual secara langsung
tanpa external 3D asset pipeline.

------------------------------------------------------------------------

# 60. Recommended Hero Illustration

Buat visual yang terinspirasi logo:

``` text
                  ✦
           ┌─────────────┐
           │ GRADUATION  │
           │     CAP     │
           └─────────────┘
                 ╱
        ┌─────────────────┐
        │  LIGHT BULB     │
        │                  │
        │  +  −  ×  =     │
        │        🧠        │
        └─────────────────┘
          ✦          ✦
```

Implementasi bukan literal ASCII.

Gunakan SVG yang clean.

------------------------------------------------------------------------

# 61. Visual Language

Gunakan:

-   rounded 20--28px cards;
-   subtle border;
-   soft shadow;
-   navy backgrounds;
-   yellow highlights;
-   blue gradients;
-   academic diagrams;
-   thin grid lines;
-   mathematical notation.

Contoh background:

``` css
background:
  radial-gradient(
    circle at 20% 20%,
    rgba(22, 137, 229, 0.08),
    transparent 30%
  ),
  radial-gradient(
    circle at 80% 70%,
    rgba(255, 196, 0, 0.10),
    transparent 30%
  );
```

Jangan terlalu banyak gradient.

------------------------------------------------------------------------

# 62. Component Behavior

## Navbar

Scroll: - transparent/overlay → solid white; - subtle shadow; -
transition 200--300ms.

## Cards

Desktop: - hover transform -4px; - shadow increase.

Mobile: - no hover-dependent functionality.

## Buttons

Primary: - yellow background; - navy text; - bold; - arrow/icon.

Secondary: - white/transparent; - navy/blue border.

WhatsApp: - use recognizable WhatsApp icon; - maintain brand palette
around it; - don't turn entire page green.

------------------------------------------------------------------------

# 63. Error States

Jika asset testimonial atau achievement belum dimasukkan saat
development:

Jangan crash page.

Use development fallback:

``` text
Asset belum tersedia
```

Namun fallback ini **tidak boleh tampil di production**.

Final production harus memiliki 20 testimonial assets dan 20 achievement
assets.

------------------------------------------------------------------------

# 64. Asset Validation

On development:

``` ts
const EXPECTED_TESTIMONIALS = 20;
const EXPECTED_ACHIEVEMENTS = 20;
```

Optional development warning jika jumlah asset tidak sesuai.

Production UI tetap harus bersih.

------------------------------------------------------------------------

# 65. Instagram Link Behavior

Instagram CTA:

``` html
<a
  href="https://www.instagram.com/bimbel.mathgenius/"
  target="_blank"
  rel="noopener noreferrer"
>
```

Gunakan external-link icon.

Jangan embed Instagram feed.

------------------------------------------------------------------------

# 66. WhatsApp Link Behavior

WhatsApp CTA:

``` html
<a
  href="https://wa.me/6289523609475?text=..."
  target="_blank"
  rel="noopener noreferrer"
>
```

Gunakan contextual prefilled message.

------------------------------------------------------------------------

# 67. Security

Tidak ada API secret.

Tidak ada client-side secret.

Tidak ada authentication.

Tidak ada database.

Tidak ada form backend.

External links harus menggunakan:

``` text
rel="noopener noreferrer"
```

------------------------------------------------------------------------

# 68. Content Integrity

AI Agent harus melakukan final search pada source code untuk:

``` text
Lorem ipsum
John Doe
Example
Test User
123456
Rp
$99
99%
#1
Terbaik
Pasti
Guaranteed
```

Kata-kata tersebut hanya boleh muncul jika memang bagian dari copy yang
sengaja digunakan dan factual.

------------------------------------------------------------------------

# 69. Definition of Done

## Brand

-   [ ] Logo MathGenius Academy digunakan dengan proporsi benar.
-   [ ] Navy/blue/yellow palette konsisten.
-   [ ] Visual terasa akademik.
-   [ ] Visual terasa premium.
-   [ ] Tidak generic.

## Content

-   [ ] SD.
-   [ ] SMP.
-   [ ] SMA.
-   [ ] Semua mata pelajaran.
-   [ ] Kurikulum Nasional.
-   [ ] Cambridge.
-   [ ] IB.
-   [ ] SNBT.
-   [ ] SAT.
-   [ ] GMAT.
-   [ ] TPA.
-   [ ] Olimpiade.
-   [ ] TKA.

## Proof

-   [ ] Tepat 20 achievement images.
-   [ ] Tepat 20 WhatsApp testimonials.
-   [ ] Achievement gallery.
-   [ ] Achievement lightbox.
-   [ ] Testimonial carousel.
-   [ ] Testimonial lightbox.
-   [ ] Instagram CTA.
-   [ ] Tidak ada testimonial palsu.

## Conversion

-   [ ] WhatsApp CTA di navbar.
-   [ ] WhatsApp CTA hero.
-   [ ] Contextual CTA.
-   [ ] Final CTA.
-   [ ] Mobile sticky CTA.
-   [ ] Semua CTA menuju nomor yang benar.
-   [ ] Prefilled message benar.

## Responsive

-   [ ] 360px.
-   [ ] 375px.
-   [ ] 390px.
-   [ ] 412px.
-   [ ] 430px.
-   [ ] 768px.
-   [ ] 1024px.
-   [ ] 1280px.
-   [ ] 1440px.
-   [ ] 1920px.

## Accessibility

-   [ ] Semantic HTML.
-   [ ] H1 tunggal.
-   [ ] Heading hierarchy.
-   [ ] Keyboard navigation.
-   [ ] Focus states.
-   [ ] Carousel accessible.
-   [ ] Lightbox accessible.
-   [ ] FAQ accessible.
-   [ ] Reduced motion.

## Performance

-   [ ] Images optimized.
-   [ ] No unnecessary dependencies.
-   [ ] No WebGL.
-   [ ] No Three.js.
-   [ ] No heavy animation library selain Motion.
-   [ ] Lazy loading.
-   [ ] No layout shift.

------------------------------------------------------------------------

# 70. Final QA Checklist

Before finalizing:

### Visual

-   [ ] Logo tidak stretched.
-   [ ] Navy/blue/yellow match logo.
-   [ ] Semua section memiliki visual hierarchy.
-   [ ] Tidak ada blank space aneh.
-   [ ] Tidak ada overlapping text.
-   [ ] Tidak ada horizontal scroll.
-   [ ] Tidak ada broken image.

### Functional

-   [ ] Navbar anchor bekerja.
-   [ ] Mobile menu bekerja.
-   [ ] FAQ bekerja.
-   [ ] Achievement carousel bekerja.
-   [ ] Achievement lightbox bekerja.
-   [ ] Testimonial carousel bekerja.
-   [ ] Testimonial lightbox bekerja.
-   [ ] Swipe bekerja.
-   [ ] Keyboard navigation bekerja.
-   [ ] Instagram link bekerja.
-   [ ] WhatsApp link bekerja.

### Content

-   [ ] Tidak ada informasi bisnis yang diada-adakan.
-   [ ] Tidak ada harga palsu.
-   [ ] Tidak ada rating palsu.
-   [ ] Tidak ada statistik palsu.
-   [ ] Tidak ada testimonial buatan.
-   [ ] Tidak ada klaim kelulusan/juara yang tidak diberikan.
-   [ ] Semua 20 screenshot testimonial tersedia.
-   [ ] Semua 20 foto achievement tersedia.

------------------------------------------------------------------------

# 71. Implementation Priority

## P0 --- Mandatory

1.  Navbar.
2.  Hero.
3.  Programs.
4.  Curriculum.
5.  Test preparation.
6.  Olympiad.
7.  Achievement gallery.
8.  20-image achievement lightbox.
9.  20-image testimonial carousel.
10. Testimonial lightbox.
11. Instagram section.
12. FAQ.
13. Final CTA.
14. Footer.
15. WhatsApp integration.
16. Mobile sticky CTA.
17. Responsive layouts.

## P1 --- Important

1.  Hero SVG illustration.
2.  Mathematical decorative system.
3.  Scroll reveal.
4.  Premium card animations.
5.  Mobile-specific carousel presentation.
6.  Desktop-specific gallery presentation.

## P2 --- Polish

1.  Advanced SVG choreography.
2.  Subtle infinite decorative motion.
3.  Additional micro-interactions.

**Never sacrifice performance, accessibility, or conversion clarity for
decorative animation.**

------------------------------------------------------------------------

# 72. Final Instruction to AI Coding Agent

Build **MathGenius Academy** as a polished, production-quality landing
page rather than a generic education template.

The final website should feel like:

> **Premium academic institution × modern education brand ×
> achievement-focused learning**

Core visual identity:

> **Navy + Bright Blue + Yellow + White**

Core proof:

> **20 achievement photos + 20 WhatsApp testimonials + Instagram for
> additional documentation**

Core conversion:

> **WhatsApp +6289523609475**

Secondary discovery:

> **Instagram @bimbel.mathgenius**

The website must be:

-   highly responsive;
-   mobile-first in implementation but separately composed for mobile
    and desktop;
-   visually consistent with the supplied logo;
-   fast;
-   accessible;
-   SEO-ready;
-   conversion-focused;
-   animation-rich but not excessive;
-   code-generated for decorative illustrations;
-   free of 3D/WebGL dependencies;
-   free of invented business claims.

**Do not invent missing information.**

**Do not create fake testimonials.**

**Do not create fake statistics.**

**Do not create fake prices.**

**Do not create fake tutor credentials.**

**Do not create fake addresses.**

Use the real images supplied by the user as the primary proof assets.

The 20 achievement photos and 20 WhatsApp screenshots are not decorative
filler. They are major trust assets and must receive prominent, polished
presentation.

The Instagram section must clearly communicate that the website only
displays a portion of the available documentation and that visitors can
continue to Instagram for more.

Final conversion goal:

**Visitor → Understand Program → See Proof → Trust → WhatsApp
Consultation**
