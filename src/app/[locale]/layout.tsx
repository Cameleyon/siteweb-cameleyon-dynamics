import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { isTranslatedLocale, translatedLocales } from "@/i18n/routes";
import "../globals.css";

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export default async function TranslatedLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();

  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
