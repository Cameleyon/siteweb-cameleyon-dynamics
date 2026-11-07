import { CTASection } from "@/components/CTASection";
import { siteContent } from "@/i18n/content";
import { siteCopy } from "@/i18n/messages";
import type { Locale } from "@/i18n/routes";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = siteCopy(locale);
  const content = siteContent(locale);
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">{t("about")}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("aboutTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{content.about.story}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">{t("ourIdentity")}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              {content.about.whoWeAre.title}
            </h2>
          </div>
          <div className="mt-8 max-w-4xl">
            <div className="space-y-5 text-base leading-7 text-slate-600">
              {content.about.whoWeAre.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-slate-600">
              {content.about.whoWeAre.commitments.map((commitment) => (
                <li key={commitment} className="flex gap-3">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-indigo-600" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
            {content.about.whoWeAre.conclusion ? (
              <p className="mt-6 rounded-lg border border-indigo-100 bg-indigo-50 p-5 text-sm font-medium leading-6 text-indigo-950">
                {content.about.whoWeAre.conclusion}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">{t("vision")}</h2>
            <p className="mt-4 leading-7 text-slate-600">{content.about.vision}</p>
          </article>
          <article className="rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">{t("mission")}</h2>
            <ul className="mt-4 grid gap-3">
              {content.about.mission.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-slate-600">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-indigo-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">{t("values")}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{t("valuesTitle")}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.about.values.map((value) => (
              <div key={value} className="rounded-lg bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
                <span className="text-base font-semibold text-indigo-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
