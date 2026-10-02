import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mr Klin Laundry Siantar",
    short_name: "Mr Klin",
    description: "Mr Klin Laundry di Jl Sutomo No.29, Pematangsiantar. Paket bulanan 30-75 kg mulai Rp174rb, sepatu & dry clean. Antar-jemput gratis. Order via WA.",
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
