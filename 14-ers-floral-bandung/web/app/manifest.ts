import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ers.floral - Florist",
    short_name: "ers.floral",
    description: "ers.floral adalah florist di Bandung dengan buket fresh dan artificial handcrafted: bouquet, money bouquet, basket, dan letter flower. Harga mulai Rp30 ribu. Order H-3 via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C4839B",
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
