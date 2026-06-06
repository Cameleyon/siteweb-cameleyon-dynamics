import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Services de consultation et produits SaaS de CAMELEYON Dynamics: recherche opérationnelle, données, Power BI, gestion de projet et optimisation.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Services et produits</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Des solutions pour mieux piloter les opérations et les données.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            CAMELEYON Dynamics intervient autant dans la consultation que dans la création de produits SaaS pour aider
            les organisations à gagner en clarté, en efficacité et en capacité de décision.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Domaines d&apos;expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Services par domaine</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Chaque domaine peut être mobilisé séparément ou combiné dans une approche complète de transformation.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Approche détaillée</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Comment nous intervenons
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Voici les domaines pour lesquels nous avons déjà une approche plus structurée. Les autres expertises
              pourront être détaillées au fur et à mesure de l&apos;évolution du site.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {siteConfig.serviceDetails.map((service) => (
              <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                    <p className="mt-2 text-base font-semibold text-indigo-700">{service.subtitle}</p>
                    <p className="mt-5 text-sm leading-6 text-slate-600">{service.intro}</p>
                  </div>

                  <div className="grid gap-4">
                    {service.sections.map((section) => (
                      <div key={section.title} className="rounded-lg bg-slate-50 p-5">
                        <h4 className="font-semibold text-slate-950">{section.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{section.body}</p>
                        {section.bullets ? (
                          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                            {section.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-600" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                    <p className="rounded-lg border border-indigo-100 bg-indigo-50 p-5 text-sm font-medium leading-6 text-indigo-950">
                      {service.conclusion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Nos produits</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Produits SaaS</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Les liens, statuts et descriptions sont centralisés dans le fichier de configuration du site.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vous voulez évaluer une solution ou cadrer un besoin?"
        description="Planifions une discussion pour identifier les priorités, les données disponibles et le meilleur chemin de mise en oeuvre."
      />
    </>
  );
}
