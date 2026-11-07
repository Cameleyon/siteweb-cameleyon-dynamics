import { notFound } from "next/navigation";
import { SitePage, pageMetadata } from "@/components/SitePage";
import { isTranslatedLocale, pageFromSegments, pageSegments, pages } from "@/i18n/routes";

type Props = { params: Promise<{ locale: string; segments?: string[] }> };

export function generateStaticParams() {
  return pages.map((page) => ({ segments: pageSegments(page) }));
}

async function resolvePage(params: Props["params"]) {
  const { locale, segments } = await params;
  const page = pageFromSegments(segments);
  if (!isTranslatedLocale(locale) || !page) notFound();
  return { locale, page };
}

export async function generateMetadata({ params }: Props) {
  const { locale, page } = await resolvePage(params);
  return pageMetadata(locale, page);
}

export default async function TranslatedPage({ params }: Props) {
  return <SitePage {...(await resolvePage(params))} />;
}
