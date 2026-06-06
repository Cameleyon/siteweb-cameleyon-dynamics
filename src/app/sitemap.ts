import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = ["", "/solutions", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.company.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
