import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kedai KopiKita",
    short_name: "KopiKita",
    description: "Espresso, manual brew, makanan, dan dessert. Dine-in & take away, tersedia di GoFood dan GrabFood.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#8B5E34",
    lang: "id",
    icons: [{ src: "/images/logo.jpg", sizes: "192x192 512x512", type: "image/jpeg" }],
  };
}
