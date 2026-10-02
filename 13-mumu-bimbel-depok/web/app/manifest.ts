import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mumu Bimbel - Bimbel / Les Private",
    short_name: "Mumu",
    description: "Mumu Bimbel adalah les private ke rumah untuk calistung, matematika SD–SMP–SMA, dan lancar baca di Sawangan Depok dan Jakarta Selatan. Tutor berpengalaman, buka 12.30–22.00.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1D4ED8",
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
