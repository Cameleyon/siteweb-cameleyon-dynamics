import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
import { contactCopy, siteCopy } from "@/i18n/messages";
import type { Locale } from "@/i18n/routes";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = siteCopy(locale);
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">{t("contact")}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("contactTitle")}
          </h1>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <ContactForm copy={contactCopy(locale)} />
          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{t("contactDetails")}</h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <a className="font-medium text-indigo-700 hover:text-indigo-900" href={`mailto:${siteConfig.company.email}`}>
                  {siteConfig.company.email}
                </a>
                <a className="font-medium text-indigo-700 hover:text-indigo-900" href={siteConfig.company.linkedInUrl}>
                  LinkedIn
                </a>
              </div>
            </div>
            <div id="prendre-rendez-vous" className="rounded-lg border border-indigo-100 bg-indigo-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">{t("bookMeeting")}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {t("bookDescription")}
              </p>
              <a
                href={siteConfig.company.appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
              >
                {t("calendar")}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
