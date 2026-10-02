import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dimsum Sembilan Ayam",
    short_name: "Dimsum 9 Ayam",
    description: "Hakau, bakpao telur asin best seller, siomay. Halal, buka tiap hari 07.00-22.00 di Pasir Kaliki.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B91C1C",
    lang: "id",
    icons: [{ src: "/images/logo.jpg", sizes: "192x192 512x512", type: "image/jpeg" }],
  };
}
