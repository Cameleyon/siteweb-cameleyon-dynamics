import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/data/site";

export default function Home() {
  const featuredServices = siteConfig.services;

  return (
    <>
      <Hero
        eyebrow="CAMELEYON Dynamics"
        title="Des décisions plus claires, des opérations mieux structurées."
        description="Nous aidons les organisations à transformer leurs données, leurs processus et leurs idées en solutions concrètes: consultation analytique, optimisation opérationnelle et produits SaaS évolutifs."
        primaryCta={{ label: "Découvrir nos solutions", href: "/solutions" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Notre mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Accompagner la transformation des opérations par la donnée et la technologie.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>{siteConfig.company.description}</p>
            <p>
              CAMELEYON Dynamics combine recherche opérationnelle, analyse de données, gestion de projet et
              développement de logiciels pour bâtir des outils utiles, simples et adaptés aux réalités des organisations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Expertises</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Services principaux</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Des interventions ciblées pour comprendre, mesurer, optimiser et automatiser les opérations.
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Produits SaaS</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Solutions disponibles et à venir</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Un écosystème de produits pensés pour connecter les opérations, les données et les équipes.
              </p>
            </div>
            <Link href="/solutions" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900">
              Voir tous les détails
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Approche claire", "Des diagnostics compréhensibles, des priorités bien structurées et des livrables utiles."],
              ["Solutions évolutives", "Une architecture pensée pour accueillir paiement, portail client, authentification et intégrations."],
              ["Impact mesurable", "Des indicateurs, modèles et tableaux de bord orientés vers les décisions concrètes."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
