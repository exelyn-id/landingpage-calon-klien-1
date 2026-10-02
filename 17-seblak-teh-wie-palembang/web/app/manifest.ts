import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seblak Teh Wie 2 Palembang",
    short_name: "Seblak Teh Wie 2",
    description: "Seblak Teh Wie 2 di Jln. Dokter Cipto No.2, Palembang. Seblak prasmanan racik sendiri, Baso Aci 20K, Tahu Kocek 15K & Mie Ayam Bandung. Buka tiap hari. Order via WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#D92B1F",
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
