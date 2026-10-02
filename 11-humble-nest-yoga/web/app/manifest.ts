import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Humble Nest Yoga - Home Yoga Studio",
    short_name: "Humble Nest",
    description: "Humble Nest Yoga adalah home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan. Tersedia kelas grup ramah pemula, private, prenatal, kids, senior, dan workshop. Daftar kelas via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#7A6547",
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
