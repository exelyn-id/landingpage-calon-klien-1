import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SurabayaKue - Kue Tradisional Bakery",
    short_name: "SurabayaKue",
    description: "Snack box, nasi box, kue tampah, hantaran, dan tumpeng 100% halal di Merr, Surabaya. Order via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B45309",
    lang: "id",
    icons: [{ src: "/images/logo.jpg", sizes: "192x192 512x512", type: "image/jpeg" }],
  };
}
