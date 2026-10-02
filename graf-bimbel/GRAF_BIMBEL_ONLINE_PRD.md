# PRD --- Landing Page GRAF BIMBEL ONLINE

**Produk:** GRAF BIMBEL ONLINE\
**Format:** Single-page landing page\
**Target:** Indonesia\
**Primary CTA:** WhatsApp --- 081215933943\
**Status:** Production blueprint for AI coding agent

------------------------------------------------------------------------

## 1. Ringkasan

GRAF BIMBEL ONLINE adalah layanan bimbingan belajar online untuk **SD,
SMP, SMA, Olimpiade, dan SNBT**, dengan **Kurikulum
Nasional--Internasional** dan sistem **1 guru 1 siswa**.

Landing page bertujuan mengubah pengunjung menjadi calon siswa/orang tua
yang menghubungi GRAF melalui WhatsApp.

Fokus utama: - menjelaskan layanan dan program; - menonjolkan
pembelajaran 1 guru 1 siswa; - menjelaskan cakupan kurikulum
Nasional--Internasional; - membangun trust melalui **10 screenshot
testimonial WhatsApp**; - membuat CTA WhatsApp sangat mudah ditemukan.

**Jangan mengarang informasi bisnis yang belum diberikan.**

------------------------------------------------------------------------

## 2. Data Bisnis yang Valid

Gunakan fakta berikut: - Nama: **GRAF BIMBEL ONLINE** - Jenjang/program:
**SD, SMP, SMA, Olimpiade, SNBT** - Kurikulum:
**Nasional--Internasional** - Sistem: **1 guru 1 siswa** - WhatsApp:
**081215933943** - Nomor internasional: **6281215933943**

Belum tersedia dan **jangan dibuat-buat**: - harga; - jumlah
tutor/siswa; - tahun berdiri; - pengalaman tutor; - nama/universitas
tutor; - alamat; - jam operasional; - durasi/jumlah sesi; - platform
video conference; - metode pembayaran; - garansi; - tingkat
kelulusan/kenaikan nilai; - partner; - rating/review count; - jenis
Olimpiade; - detail kurikulum internasional tertentu.

------------------------------------------------------------------------

## 3. Target Audience

### Primary

Orang tua/wali siswa di Indonesia yang mencari bimbingan belajar online
untuk anak SD--SMA.

### Secondary

Siswa SMP/SMA dan calon peserta Olimpiade/SNBT.

Landing page harus menjawab: - GRAF itu apa? - Untuk jenjang apa? - Apa
saja programnya? - Apa keunggulan 1 guru 1 siswa? - Apa maksud kurikulum
Nasional--Internasional? - Apakah tersedia Olimpiade dan SNBT? -
Bagaimana cara konsultasi?

------------------------------------------------------------------------

## 4. Positioning & Tone

Karakter visual dan copy: **Academic + Bold + Energetic + Modern +
Friendly + Professional**

Karena logo sangat kuat dengan matematika, gunakan mathematical visual
language tetapi jangan membuat halaman hanya terasa seperti bimbel
matematika.

Hindari: - corporate biru; - pastel berlebihan; - gaya
kekanak-kanakan; - neon; - generic SaaS; - template pendidikan yang
tidak memiliki identitas.

Copy harus dalam Bahasa Indonesia, natural, singkat, dan
conversion-focused.

------------------------------------------------------------------------

## 5. Visual Identity

Logo yang diberikan memiliki: - orange/yellow background; - typography
hitam; - `GRAF` besar dan bold; - `BIMBEL` pada rounded yellow block; -
doodle matematika/geometri.

Gunakan palette yang selaras:

``` css
--color-primary: #FF9F00;
--color-primary-dark: #E87900;
--color-primary-light: #FFD83D;
--color-yellow: #FFE900;
--color-yellow-soft: #FFF7B8;
--color-black: #0A0A0A;
--color-dark: #171717;
--color-white: #FFFFFF;
--color-cream: #FFFDF3;
--color-text: #161616;
--color-muted: #66615A;
--color-border: #E8D99A;
```

Nilai tersebut adalah titik awal visual; boleh disesuaikan sedikit untuk
contrast/accessibility tanpa mengubah identitas orange/yellow/black.

Typography: - **Plus Jakarta Sans** preferred; - Inter sebagai
fallback; - headline bold/extra-bold; - body sangat readable.

Gunakan: - rounded yellow blocks; - bold black typography; - thick/soft
borders; - mathematical grids; - curves; - organic shapes; - geometric
lines.

Jangan membuat seluruh halaman orange.

------------------------------------------------------------------------

## 6. Page Architecture

Urutan:

1.  Navbar
2.  Hero
3.  Program/Jenjang
4.  1 Guru 1 Siswa
5.  Kurikulum Nasional--Internasional
6.  Learning Experience
7.  Olimpiade & SNBT
8.  Testimonials --- 10 screenshots
9.  FAQ
10. Final CTA
11. Footer
12. Mobile sticky WhatsApp CTA

Alurnya harus: **attention → understanding → differentiation → trust →
objection handling → WhatsApp.**

------------------------------------------------------------------------

## 7. Navbar

Desktop: - logo kiri; - Beranda; - Program; - Keunggulan; - Testimoni; -
FAQ; - CTA `Konsultasi via WhatsApp`.

Mobile: - logo; - hamburger; - animated mobile drawer.

Sticky navbar: - awal transparan/semi-transparent; - setelah scroll
menjadi cream/white; - subtle border/shadow; - smooth transition.

Anchor IDs:

``` text
#beranda
#program
#keunggulan
#cara-belajar
#testimoni
#faq
```

Gunakan `scroll-margin-top` agar sticky navbar tidak menutupi section.

------------------------------------------------------------------------

## 8. Hero

### Recommended copy

Eyebrow: \> GRAF BIMBEL ONLINE

Headline: \> Belajar Lebih Fokus. Berkembang Lebih Terarah.

Subheadline: \> Bimbingan belajar online untuk SD, SMP, SMA, Olimpiade,
hingga SNBT dengan sistem 1 guru 1 siswa dan kurikulum
Nasional--Internasional.

Primary CTA: \> Konsultasi via WhatsApp

Secondary: \> Lihat Program

Microcopy: \> SD • SMP • SMA • Olimpiade • SNBT

Jangan membuat klaim seperti: - pasti juara; - pasti lolos SNBT; - pasti
masuk PTN; - peningkatan nilai tertentu.

### Hero visual

**Tanpa 3D, Three.js, WebGL, atau footage.**

Buat visual dengan SVG/CSS/React: - coordinate grid; - parabola; -
triangle; - circle; - graph; - equations; - mathematical symbols; -
floating cards; - yellow/orange shapes.

Decorative equations dapat berupa `x² + y²`, `f(x)`, `π`, `Σ`, `√`,
`sin θ`, dll.

### Hero motion

-   text stagger entrance;
-   graph line draw;
-   equations fade/slide;
-   cards float;
-   symbols drift;
-   graph points pulse;
-   subtle yellow-shape movement.

Gunakan Motion for React.

------------------------------------------------------------------------

## 9. Program / Jenjang

Heading: \> Pilih Program Sesuai Kebutuhan Belajar

Buat 5 cards:

### SD

> Pendampingan belajar untuk membantu siswa memahami materi dan
> membangun fondasi belajar.

### SMP

> Pembelajaran yang lebih terarah untuk memahami materi dan menghadapi
> kebutuhan akademik.

### SMA

> Pendampingan belajar untuk berbagai kebutuhan akademik di tingkat SMA.

### Olimpiade

> Program belajar untuk siswa yang ingin mempersiapkan kebutuhan belajar
> terkait Olimpiade.

### SNBT

> Pendampingan belajar untuk kebutuhan persiapan materi SNBT.

Jangan mengarang detail jenis Olimpiade, mata pelajaran, metode seleksi,
skor, atau universitas.

------------------------------------------------------------------------

## 10. Core USP --- 1 Guru 1 Siswa

Ini adalah salah satu section utama.

Heading: \> 1 Guru. 1 Siswa. Lebih Fokus.

Copy: \> Dengan sistem 1 guru 1 siswa, proses belajar dapat berlangsung
secara lebih personal dan interaktif sesuai kebutuhan siswa.

Visual: - teacher card; - connecting line; - student card; - focus
indicator; - small mathematical decorations.

Animation: 1. teacher card enters; 2. connection line draws; 3. student
card enters; 4. focus indicator pulses; 5. decorations move subtly.

Jangan membuat diagram literal/wireframe sebagai UI final.

------------------------------------------------------------------------

## 11. Kurikulum Nasional--Internasional

Heading: \> Kurikulum Nasional--Internasional

Copy: \> Layanan pembelajaran GRAF mencakup kebutuhan belajar dengan
pendekatan kurikulum Nasional--Internasional.

Karena detail belum diberikan, **jangan menyebut Cambridge, IB, Pearson,
AP, negara tertentu, atau sertifikasi tertentu.**

Visual: - dua academic cards; - `NASIONAL`; - `INTERNASIONAL`; -
connecting animated line; - documents/grid/geometric elements.

------------------------------------------------------------------------

## 12. Learning Experience

Buat visual code-generated yang menunjukkan konsep belajar, bukan
screenshot produk nyata.

Elemen: - tutor card; - student card; - subject card; - lesson note; -
progress line; - schedule-like block; - mathematical whiteboard.

Semua dibuat menggunakan HTML/CSS/SVG/React.

Animation: - line drawing; - progress animation; - floating cards; -
staggered entrance.

Jangan menyatakan platform tertentu atau fitur aplikasi yang belum
diketahui.

------------------------------------------------------------------------

## 13. Olimpiade & SNBT

Heading: \> Untuk Tantangan Akademik yang Lebih Spesifik

Dua feature cards:

### Olimpiade

> Pendampingan belajar untuk kebutuhan persiapan Olimpiade.

### SNBT

> Pendampingan belajar untuk kebutuhan persiapan SNBT.

Visual: - target; - graph; - equations; - geometric patterns; -
stars/medal-like abstract shapes.

Jangan membuat klaim hasil atau kelulusan.

CTA: \> Konsultasikan Kebutuhan Belajar

------------------------------------------------------------------------

## 14. Testimonials --- WAJIB 10 Screenshot

Landing page **HARUS** memiliki slideshow/carousel untuk **10 screenshot
testimonial WhatsApp**.

User akan memasukkan gambar tersebut langsung ke AI agent.

Expected asset structure:

``` text
/public/images/testimonials/
  testimonial-01.webp
  testimonial-02.webp
  testimonial-03.webp
  testimonial-04.webp
  testimonial-05.webp
  testimonial-06.webp
  testimonial-07.webp
  testimonial-08.webp
  testimonial-09.webp
  testimonial-10.webp
```

Jika nama file aktual berbeda, sesuaikan.

Heading: \> Pengalaman Mereka Bersama GRAF

Subheadline: \> Lihat beberapa testimonial yang dibagikan oleh pelanggan
GRAF.

**Jangan membuat testimonial, quote, rating, atau review count fiktif.**

### Carousel requirements

Desktop: - large active slide; - optional next/previous peek; -
prev/next; - dots.

Mobile: - satu slide; - swipe; - dots; - optional arrows.

Features: - autoplay 5--6 detik; - pause on hover; - pause on focus; -
pause on interaction; - keyboard navigation; - touch swipe; - loop; -
accessible controls.

### Image handling

Screenshot dapat memiliki aspect ratio berbeda.

Jangan crop informasi penting.

Gunakan:

``` css
object-fit: contain;
```

### Lightbox

Klik screenshot: - buka modal; - image lebih besar; - close button; -
Escape; - click outside; - focus management.

------------------------------------------------------------------------

## 15. FAQ

Gunakan accordion accessible.

Minimum:

### Untuk jenjang apa GRAF tersedia?

> GRAF BIMBEL ONLINE menyediakan layanan untuk SD, SMP, SMA, Olimpiade,
> dan SNBT.

### Apakah pembelajarannya online?

> Ya, GRAF BIMBEL ONLINE merupakan layanan bimbingan belajar online.

### Bagaimana sistem belajarnya?

> GRAF menggunakan sistem 1 guru 1 siswa agar pembelajaran dapat
> berlangsung lebih personal dan fokus.

### Kurikulum apa yang digunakan?

> GRAF menyediakan pembelajaran dengan kurikulum
> Nasional--Internasional.

### Apakah tersedia Olimpiade?

> Ya, GRAF menyediakan program untuk kebutuhan belajar Olimpiade.

### Apakah tersedia SNBT?

> Ya, GRAF menyediakan program untuk kebutuhan belajar SNBT.

### Bagaimana cara mendapatkan informasi?

> Hubungi GRAF melalui WhatsApp untuk berkonsultasi mengenai kebutuhan
> belajar.

Jangan menambahkan harga, durasi, jadwal, platform, pembayaran, garansi,
atau informasi lain yang belum diberikan.

------------------------------------------------------------------------

## 16. WhatsApp Integration

Nomor:

``` text
081215933943
```

International:

``` text
6281215933943
```

Default message: \> Halo GRAF, saya ingin mengetahui informasi mengenai
bimbingan belajar online. Saya ingin berkonsultasi mengenai program yang
sesuai.

Implementasikan satu helper:

``` ts
export function getWhatsAppUrl(message?: string) {
  const phone = "6281215933943";
  const defaultMessage =
    "Halo GRAF, saya ingin mengetahui informasi mengenai bimbingan belajar online. Saya ingin berkonsultasi mengenai program yang sesuai.";

  const finalMessage = message ?? defaultMessage;

  return (
    `https://api.whatsapp.com/send/?phone=${phone}` +
    `&text=${encodeURIComponent(finalMessage)}` +
    `&type=phone_number&app_absent=0`
  );
}
```

Semua CTA WhatsApp harus menggunakan helper tersebut. Jangan duplicate
nomor di banyak component.

------------------------------------------------------------------------

## 17. Mobile Sticky CTA

Mobile bottom CTA: \> 💬 Konsultasi via WhatsApp

Requirements: - fixed bottom; - safe-area aware; - tidak menutupi
konten; - accessible; - subtle entrance; - menuju WhatsApp.

Tambahkan bottom padding agar konten terakhir tidak tertutup.

------------------------------------------------------------------------

## 18. Final CTA

Gunakan background orange/yellow dengan black typography.

Heading: \> Siap Belajar Lebih Fokus?

Subheadline: \> Konsultasikan kebutuhan belajar dan temukan program GRAF
yang sesuai.

CTA: \> Konsultasi via WhatsApp

Microcopy: \> SD • SMP • SMA • Olimpiade • SNBT

Dekorasi: - equations; - graph; - geometric shapes; - mathematical
lines; - circles.

Semua melalui SVG/CSS.

------------------------------------------------------------------------

## 19. Footer

Isi:

**GRAF BIMBEL ONLINE**

> SD • SMP • SMA • Olimpiade • SNBT

> Kurikulum Nasional--Internasional • 1 Guru 1 Siswa

CTA: \> Hubungi via WhatsApp

Navigation: - Beranda - Program - Keunggulan - Testimoni - FAQ

Jangan menambahkan alamat/email/social media yang belum diberikan.

Copyright: \> © \[current year\] GRAF BIMBEL ONLINE. All rights
reserved.

------------------------------------------------------------------------

## 20. Animation System

Animation harus terasa premium tetapi performant.

### Forbidden

-   Three.js;
-   WebGL;
-   3D model;
-   3D rendering;
-   video footage;
-   external animated 3D assets.

### Allowed

-   SVG;
-   CSS keyframes;
-   React;
-   Motion for React;
-   Intersection Observer.

### Entrance

``` text
opacity 0 → 1
translateY 20–30px → 0
```

Gunakan stagger pada children.

### Infinite

-   floating symbols;
-   graph points;
-   orbit lines;
-   decorative dots.

Durasi sekitar 4--8 detik.

### Hover

Card: - translateY(-3px); - subtle shadow.

Button: - slight scale; - icon movement.

### Reduced motion

Implement:

``` css
@media (prefers-reduced-motion: reduce)
```

Disable/reduce: - looping animation; - parallax; - excessive
transition; - automatic visual movement.

Carousel tetap dapat digunakan manual.

------------------------------------------------------------------------

## 21. Code-Generated Visual Library

Buat reusable components:

``` text
MathGrid
CoordinateGraph
Parabola
TriangleDiagram
CircleDiagram
MathEquation
FloatingMathSymbol
GeometricShape
OrbitLine
EquationCard
HeroMathCanvas
LearningIllustration
```

Contoh:

``` tsx
<MathGrid opacity={0.15} />
<CoordinateGraph />
<MathEquation equation="f(x)" />
```

Visual harus benar secara bentuk dan tidak terlihat rusak.

Mathematical visuals bersifat decorative, bukan materi pembelajaran
utama.

------------------------------------------------------------------------

## 22. Recommended Tech Stack

### Framework

**Next.js + TypeScript**, App Router.

### Styling

**Tailwind CSS** + CSS variables.

### Animation

**Motion for React**.

### Icons

**Lucide React**.

### Carousel

**Embla Carousel** atau implementasi React ringan jika dependency tidak
diperlukan.

### Images

Next.js `Image`.

### Backend

Tidak ada. Static/frontend-only.

Gunakan Server Components secara default dan Client Components hanya
untuk interactive elements.

------------------------------------------------------------------------

## 23. Project Structure

``` text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Programs.tsx
│   │   ├── OneOnOne.tsx
│   │   ├── Curriculum.tsx
│   │   ├── LearningExperience.tsx
│   │   ├── OlympiadSNBT.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── BenefitCard.tsx
│   │   └── Accordion.tsx
│   └── illustrations/
│       ├── HeroMathCanvas.tsx
│       ├── MathGrid.tsx
│       ├── CoordinateGraph.tsx
│       ├── GeometricShapes.tsx
│       ├── EquationCard.tsx
│       └── LearningIllustration.tsx
├── lib/
│   ├── whatsapp.ts
│   └── constants.ts
├── public/
│   └── images/
│       ├── logo/
│       │   └── graf-logo.png
│       └── testimonials/
│           ├── testimonial-01.webp
│           ├── testimonial-02.webp
│           ├── testimonial-03.webp
│           ├── testimonial-04.webp
│           ├── testimonial-05.webp
│           ├── testimonial-06.webp
│           ├── testimonial-07.webp
│           ├── testimonial-08.webp
│           ├── testimonial-09.webp
│           └── testimonial-10.webp
├── package.json
├── tsconfig.json
└── next.config.ts
```

------------------------------------------------------------------------

## 24. Component Contracts

``` ts
type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
};

type ProgramCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Testimonial = {
  src: string;
  alt: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};
```

Content berulang harus data-driven menggunakan arrays.

------------------------------------------------------------------------

## 25. Responsive Requirements

### 360--767px

-   one-column;
-   mobile navbar;
-   hero stacked;
-   program cards one-column;
-   testimonial one slide;
-   sticky WhatsApp;
-   reduce decorative density.

### 768--1023px

-   two-column grids bila sesuai;
-   hero dapat dua kolom;
-   moderate decoration.

### 1024px+

-   max-width sekitar 1180--1280px;
-   hero two-column;
-   richer mathematical visual;
-   program grid;
-   testimonial carousel.

Large desktop tidak boleh membuat text line terlalu panjang.

------------------------------------------------------------------------

## 26. Accessibility

Wajib: - semantic HTML; - satu H1; - correct heading hierarchy; - alt
text; - visible focus; - keyboard navigation; - accessible carousel
controls; - accessible FAQ; - accessible lightbox; - ARIA labels bila
diperlukan; - Escape untuk modal; - `prefers-reduced-motion`.

Pastikan contrast black/orange/yellow memenuhi accessibility.

------------------------------------------------------------------------

## 27. SEO

Title: \> GRAF Bimbel Online --- SD, SMP, SMA, Olimpiade & SNBT

Meta description: \> GRAF Bimbel Online menyediakan bimbingan belajar
online untuk SD, SMP, SMA, Olimpiade, dan SNBT dengan sistem 1 guru 1
siswa dan kurikulum Nasional--Internasional.

Siapkan: - Open Graph title; - Open Graph description; - branded OG
image.

Jangan membuat structured data berisi rating, review count, address,
opening hours, atau price yang tidak tersedia.

------------------------------------------------------------------------

## 28. Performance

Wajib: - tidak ada video hero; - tidak ada 3D/WebGL; - tidak ada heavy
particle engine; - optimized SVG; - optimized testimonial images; - lazy
loading; - minimal client JS; - Server Components by default; -
interactive parts sebagai Client Components.

Gunakan WebP/AVIF jika pipeline mendukung.

------------------------------------------------------------------------

## 29. Security & Privacy

Tidak perlu: - database; - authentication; - login; - backend; - form
pengumpulan data; - API key; - analytics pihak ketiga.

Jangan meminta data sensitif dari visitor.

------------------------------------------------------------------------

## 30. Deployment

Recommended: **Vercel + Next.js**

Commands:

``` bash
npm install
npm run dev
npm run build
npm run start
```

Production build tidak boleh menghasilkan TypeScript/build error.

------------------------------------------------------------------------

## 31. Definition of Done

### Brand

-   [ ] Logo benar.
-   [ ] Orange/yellow/black identity konsisten.
-   [ ] Academic + energetic.
-   [ ] Modern + friendly.

### Content

-   [ ] SD.
-   [ ] SMP.
-   [ ] SMA.
-   [ ] Olimpiade.
-   [ ] SNBT.
-   [ ] Kurikulum Nasional--Internasional.
-   [ ] 1 guru 1 siswa.
-   [ ] Online.
-   [ ] WhatsApp.

### CTA

-   [ ] Semua CTA menuju 6281215933943.
-   [ ] Prefilled message bekerja.
-   [ ] Navbar CTA.
-   [ ] Hero CTA.
-   [ ] Section CTA.
-   [ ] Final CTA.
-   [ ] Mobile sticky CTA.

### Testimonials

-   [ ] Tepat 10 testimonial slots.
-   [ ] Prev/next.
-   [ ] Dots.
-   [ ] Autoplay.
-   [ ] Pause interaction.
-   [ ] Swipe.
-   [ ] Keyboard.
-   [ ] Lightbox.
-   [ ] No fake testimonials.
-   [ ] No important cropping.

### Animation

-   [ ] Animated hero.
-   [ ] SVG math visuals.
-   [ ] Scroll reveal.
-   [ ] Micro-interactions.
-   [ ] Code-generated visual.
-   [ ] No 3D.
-   [ ] No Three.js.
-   [ ] No WebGL.
-   [ ] No footage.
-   [ ] Reduced motion.

### Responsive

-   [ ] 360px.
-   [ ] 390px.
-   [ ] 430px.
-   [ ] tablet.
-   [ ] desktop.
-   [ ] large desktop.

### Accessibility

-   [ ] Semantic HTML.
-   [ ] Heading hierarchy.
-   [ ] Alt text.
-   [ ] Keyboard navigation.
-   [ ] Focus state.
-   [ ] Carousel accessible.
-   [ ] FAQ accessible.
-   [ ] Lightbox accessible.
-   [ ] Reduced motion.

------------------------------------------------------------------------

## 32. QA Checklist

### Visual

-   [ ] No horizontal overflow.
-   [ ] No broken images.
-   [ ] No text clipping.
-   [ ] No CTA outside viewport.
-   [ ] Logo correct.
-   [ ] Colors consistent.
-   [ ] Typography consistent.
-   [ ] Animation smooth.
-   [ ] Testimonials fully visible.

### Functional

-   [ ] Navbar anchors work.
-   [ ] Mobile menu works.
-   [ ] FAQ works.
-   [ ] Carousel works.
-   [ ] Swipe works.
-   [ ] Lightbox works.
-   [ ] WhatsApp works.
-   [ ] Prefilled message correct.

### Content

Search source for accidental:

``` text
Lorem ipsum
John Doe
Example
Your Company
Rp
XX
[Insert]
TODO
```

Remove accidental placeholders before production.

------------------------------------------------------------------------

## 33. Implementation Priority

### P0

1.  Responsive layout.
2.  Navbar.
3.  Hero.
4.  Programs.
5.  1 Guru 1 Siswa.
6.  Curriculum.
7.  Olimpiade/SNBT.
8.  10-image testimonial carousel.
9.  FAQ.
10. Final CTA.
11. WhatsApp.
12. Footer.
13. Mobile sticky CTA.

### P1

1.  Hero mathematical animation.
2.  Learning Experience illustration.
3.  Scroll reveal.
4.  Testimonial lightbox.
5.  Mobile menu animation.
6.  SVG visual system.

### P2

1.  Advanced SVG choreography.
2.  Micro-interaction polish.
3.  Performance refinement.

Usability, CTA, responsive behavior, accessibility, dan testimonial
functionality lebih penting daripada animation.

------------------------------------------------------------------------

# 34. Final Instruction to AI Coding Agent

Bangun landing page **GRAF BIMBEL ONLINE** berdasarkan PRD ini sebagai
website production-quality, bukan generic education template.

Karakter akhir: **Modern + Bold + Academic + Energetic + Friendly +
Professional.**

Prioritas: 1. Jangan mengarang informasi bisnis. 2. Jangan membuat
testimonial fiktif. 3. Siapkan tepat 10 testimonial screenshot. 4. User
akan memberikan 10 screenshot secara terpisah. 5. Gunakan logo yang
diberikan sebagai visual reference. 6. Orange/yellow/black adalah
identitas utama. 7. Jangan gunakan 3D. 8. Jangan gunakan Three.js. 9.
Jangan gunakan WebGL. 10. Jangan gunakan footage. 11. Semua visual
tambahan harus dapat dibuat melalui code. 12. Gunakan SVG/CSS/React
untuk mathematical visuals. 13. Gunakan Next.js + TypeScript + Tailwind
CSS. 14. Gunakan Motion for React. 15. Mobile experience harus sangat
baik. 16. WhatsApp harus menjadi conversion path utama. 17. Jangan
menampilkan harga. 18. Jangan menambahkan klaim yang tidak diberikan.
19. Jangan membuat fitur backend. 20. Hasil akhir harus terasa sengaja
dirancang khusus untuk GRAF BIMBEL ONLINE.
