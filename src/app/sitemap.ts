import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { alternateLanguages, locales, pageHref, pages } from "@/i18n/routes";

const absoluteUrl = (path: string) => new URL(path, siteConfig.company.url).href;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const languages = Object.fromEntries(
      Object.entries(alternateLanguages(page)).map(([locale, path]) => [locale, absoluteUrl(path)]),
    );
    return locales.map((locale) => ({
      url: absoluteUrl(pageHref(locale, page)),
      alternates: { languages },
      changeFrequency: "weekly",
      priority: page === "home" ? 1 : 0.8,
    }));
  });
}
