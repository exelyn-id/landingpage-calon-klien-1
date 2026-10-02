import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blade House Barbershop Jakarta",
    short_name: "Blade House",
    description: "Blade House Barbershop di Kebayoran Baru, Jakarta Selatan. Cut, fade & beard trim. Buka Senin-Minggu 11.00-22.00. Walk in & reservasi via WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#262626",
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
