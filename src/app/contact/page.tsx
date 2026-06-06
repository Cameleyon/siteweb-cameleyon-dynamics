import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez CAMELEYON Dynamics pour une consultation, un produit SaaS, une intégration de données ou un rendez-vous.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Parlons de vos opérations, de vos données ou de votre prochain produit SaaS.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Le formulaire est prêt pour une future connexion à une API route Next.js, Resend, SendGrid ou un autre
            service d&apos;envoi d&apos;email.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Coordonnées</h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <a className="font-medium text-indigo-700 hover:text-indigo-900" href={`mailto:${siteConfig.company.email}`}>
                  {siteConfig.company.email}
                </a>
                <a className="font-medium text-indigo-700 hover:text-indigo-900" href={siteConfig.company.linkedInUrl}>
                  LinkedIn placeholder
                </a>
              </div>
            </div>
            <div id="prendre-rendez-vous" className="rounded-lg border border-indigo-100 bg-indigo-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">Prendre rendez-vous</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Réservez directement un créneau dans le calendrier de CAMELEYON Dynamics pour discuter de vos besoins.
              </p>
              <a
                href={siteConfig.company.appointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
              >
                Ouvrir le calendrier
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
