import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WetPaws JKT - Pet Grooming, Dogpark & Pethotel",
    short_name: "WetPaws",
    description: "WetPaws JKT melayani grooming anjing dan kucing, dogpark, pethotel, dan home service di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00. Reservasi via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#E8590C",
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
