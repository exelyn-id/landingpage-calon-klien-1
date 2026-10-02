import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zeyn Dental Care - Klinik Gigi",
    short_name: "Zeyn",
    description: "Zeyn Dental Care adalah klinik dokter gigi dengan 2 cabang: Sukmajaya Depok dan Kranggan Bekasi. Layanan scaling, bleaching, cabut gigi, gigi anak, dan lainnya. Buka 10.00–20.00 (Senin tutup). Reservasi via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0284C7",
    lang: "id",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "192x192 512x512",
        type: "image/jpeg",
      },
    ],
  };
}
