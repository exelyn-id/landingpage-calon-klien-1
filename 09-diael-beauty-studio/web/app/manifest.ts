import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Diael Beauty Studio",
    short_name: "Diael",
    description: "Diael Beauty Studio di Surabaya: nail art, threading brow, eyelash, Korean lash lift mulai Rp25rb. Walk-in dan booking di Dharmawangsa dan Royal Plaza. Buka 11.00-20.00.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#EC4899",
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
