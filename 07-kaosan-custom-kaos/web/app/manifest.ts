import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kaosan Brand dan Custom Kaos",
    short_name: "Kaosan",
    description: "Kaosan, brand lokal dan custom kaos DTF free desain mulai Rp65rb. Bahan Cotton Combed 24s, 30s dan jersey. Buka setiap hari, order via WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#EA580C",
    lang: "id",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
