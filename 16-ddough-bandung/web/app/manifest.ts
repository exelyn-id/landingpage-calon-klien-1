import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D.dough Dough and Coffee Bandung",
    short_name: "D.dough",
    description: "D.dough Dough and Coffee di Jl. Prof. Eyckman No.26, Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread. Buka 09.00-21.00. Order via WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B45309",
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
