import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/data/site";
import { siteContent } from "@/i18n/content";
import { siteCopy } from "@/i18n/messages";
import { pageHref, type Locale } from "@/i18n/routes";

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteCopy(locale);
  const content = siteContent(locale);
  const featuredServices = content.services;

  return (
    <>
      <Hero
        eyebrow={siteConfig.company.name}
        title={t("heroTitle")}
        description={t("heroDescription")}
        primaryCta={{ label: t("discover"), href: pageHref(locale, "solutions") }}
        secondaryCta={{ label: t("contactUs"), href: pageHref(locale, "contact") }}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">{t("ourMission")}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              {t("missionTitle")}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>{content.companyDescription}</p>
            <p>
              {t("missionDescription")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">{t("expertise")}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{t("mainServices")}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t("mainServicesDescription")}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">{t("applications")}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{t("applicationTitle")}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {t("applicationDescription")}
              </p>
            </div>
            <Link href={pageHref(locale, "solutions")} className="text-sm font-semibold text-indigo-700 hover:text-indigo-900">
              {t("seeDetails")}
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [t("clearApproach"), t("clearApproachDescription")],
              [t("scalableSolutions"), t("scalableSolutionsDescription")],
              [t("measurableImpact"), t("measurableImpactDescription")],
            ].map(([title, description]) => (
              <article key={title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
