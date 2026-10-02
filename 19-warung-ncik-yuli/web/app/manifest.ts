import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Warung Ncik Yuli Bandung",
    short_name: "Ncik Yuli",
    description: "Warung Ncik Yuli di Gegerkalong, Bandung. Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian. Chat WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C2410C",
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
