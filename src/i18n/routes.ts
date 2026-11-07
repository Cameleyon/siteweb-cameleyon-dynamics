export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const translatedLocales = ["en", "es"] as const;
export const pages = ["home", "solutions", "about", "contact"] as const;
export type Page = (typeof pages)[number];

export const languageNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export function isTranslatedLocale(locale: string): locale is (typeof translatedLocales)[number] {
  return translatedLocales.some((candidate) => candidate === locale);
}

export function pageSegments(page: Page): string[] {
  return page === "home" ? [] : [page];
}

export function pageFromSegments(segments: string[] = []): Page | undefined {
  if (segments.length === 0) return "home";
  return pages.find((page) => page !== "home" && segments.length === 1 && page === segments[0]);
}

export function pageHref(locale: Locale, page: Page) {
  const prefix = locale === "fr" ? "" : `/${locale}`;
  const path = page === "home" ? "" : `/${page}`;
  return `${prefix}${path}` || "/";
}

export function alternateLanguages(page: Page) {
  return {
    fr: pageHref("fr", page),
    en: pageHref("en", page),
    es: pageHref("es", page),
    "x-default": pageHref("fr", page),
  };
}
