import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Overlay Crop",
    short_name: "Overlay Crop",
    description: "Overlay and crop multiple images to the same frame and dimensions.",
    start_url: "/en/editor/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [],
  };
}
