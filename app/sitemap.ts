import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riseup.com";

  // List of static paths in the application. Add new paths here to automatically index them.
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "countries", changeFrequency: "weekly", priority: 0.8 },
    { path: "community", changeFrequency: "daily", priority: 0.8 },
    { path: "resources", changeFrequency: "weekly", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: `${siteUrl}${route.path ? `/${route.path}` : ""}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
