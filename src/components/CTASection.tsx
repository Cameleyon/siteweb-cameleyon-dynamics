import Link from "next/link";
import { siteConfig } from "@/data/site";
import { siteCopy } from "@/i18n/messages";
import { pageHref, type Locale } from "@/i18n/routes";

type CTASectionProps = {
  locale: Locale;
  title?: string;
  description?: string;
};

export function CTASection({ locale, title, description }: CTASectionProps) {
  const t = siteCopy(locale);

  return (
    <section id="prendre-rendez-vous" className="bg-indigo-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">{title ?? t("ctaTitle")}</h2>
          <p className="mt-3 text-base leading-7 text-indigo-100">{description ?? t("ctaDescription")}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.company.appointmentUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            {t("bookMeeting")}
          </a>
          <Link
            href={pageHref(locale, "solutions")}
            className="rounded-md border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {t("seeSolutions")}
          </Link>
        </div>
      </div>
    </section>
  );
}
