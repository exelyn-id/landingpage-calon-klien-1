import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JS Store Preloved Thrift",
    short_name: "JS Store",
    description: "Fred Perry, casual luxury, dan vintage sejak 2022. Drop harian, gratis ongkir Jabodetabek.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#27272A",
    lang: "id",
    icons: [{ src: "/images/logo.jpg", sizes: "192x192 512x512", type: "image/jpeg" }],
  };
}
