import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amar Bakery Surabaya",
    short_name: "Amar Bakery",
    description: "Roti harian, brownie, pie, oatmeal cookies, Royal series. Terima pesanan, bisa via Gosend.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#A16207",
    lang: "id",
    icons: [{ src: "/images/logo.jpg", sizes: "192x192 512x512", type: "image/jpeg" }],
  };
}
