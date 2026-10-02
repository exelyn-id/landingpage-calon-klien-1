import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cielo Nail Studio",
    short_name: "Cielo",
    description: "Cielo Nail Studio di Cipete, Jakarta Selatan. Manicure, pedicure + spa, nail art, builder, gel polish, kids, hingga home service. Buka 10.00-21.00 setiap hari.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#BE7E8A",
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
