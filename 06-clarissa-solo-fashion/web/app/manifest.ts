import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CLARISSA Solo Fashion Wanita",
    short_name: "CLARISSA",
    description: "CLARISSA Solo Fashion Wanita, toko fashion wanita kekinian di Solo. New arrival tiap minggu, buka 08.00-21.00 setiap hari. Cek katalog @clarissa.catalog lalu chat WA admin.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C1355E",
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
