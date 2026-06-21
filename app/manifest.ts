import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Riseup.com — Your Bridge to Opportunity",
    short_name: "Riseup.com",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9ff",
    theme_color: "#6d28d9",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
