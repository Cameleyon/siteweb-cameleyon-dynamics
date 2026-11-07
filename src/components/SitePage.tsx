import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { HomePage } from "@/components/pages/HomePage";
import { SolutionsPage } from "@/components/pages/SolutionsPage";
import { siteConfig } from "@/data/site";
import { siteCopy } from "@/i18n/messages";
import { alternateLanguages, pageHref, type Locale, type Page } from "@/i18n/routes";

const components = { home: HomePage, solutions: SolutionsPage, about: AboutPage, contact: ContactPage };
const openGraphLocales: Record<Locale, string> = { fr: "fr_CA", en: "en_US", es: "es_ES" };
const descriptions = { home: "homeMeta", solutions: "solutionsMeta", about: "aboutMeta", contact: "contactMeta" } as const;

export function pageMetadata(locale: Locale, page: Page): Metadata {
  const t = siteCopy(locale);
  const company = siteConfig.company;
  const title = page === "home" ? `${company.name} | ${t("homeTitle")}` : `${t(page)} | ${company.name}`;
  const description = t(descriptions[page]);
  const canonical = pageHref(locale, page);

  return {
    metadataBase: new URL(company.url),
    title,
    description,
    alternates: { canonical, languages: alternateLanguages(page) },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      locale: openGraphLocales[locale],
      alternateLocale: Object.values(openGraphLocales).filter((value) => value !== openGraphLocales[locale]),
      type: "website",
    },
  };
}

export function SitePage({ locale, page }: { locale: Locale; page: Page }) {
  const Component = components[page];
  return <Component locale={locale} />;
}
