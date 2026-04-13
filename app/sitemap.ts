import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/services",
    "/services/intro-to-freediving",
    "/services/fundive-with-guide",
    "/services/line-training",
    "/services/courses",
    "/locations/siquijor",
  ];

  return routes.map((route) => ({
    url: `${site.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services")
        ? 0.9
        : 0.8,
  }));
}
