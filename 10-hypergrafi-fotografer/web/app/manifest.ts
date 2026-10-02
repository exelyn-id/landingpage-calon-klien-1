import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hypergrafi Fotografer Freelance",
    short_name: "Hypergrafi",
    description: "Hypergrafi, fotografer freelance Bandung untuk engagement, prewedding, wisuda dan yearbook, family, maternity, hingga gathering. Booking by appointment via WA/DM.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#27272A",
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
