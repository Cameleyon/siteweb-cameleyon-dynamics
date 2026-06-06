import Link from "next/link";
import { siteConfig } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Prêt à structurer vos opérations avec plus de clarté?",
  description = "Discutons de vos données, de vos processus et des solutions numériques qui peuvent soutenir votre croissance.",
  primaryLabel = "Prendre rendez-vous",
  primaryHref = siteConfig.company.appointmentUrl,
  secondaryLabel = "Voir les solutions",
  secondaryHref = "/solutions",
}: CTASectionProps) {
  return (
    <section id="prendre-rendez-vous" className="bg-indigo-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-base leading-7 text-indigo-100">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {primaryHref.startsWith("http") ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              {primaryLabel}
            </Link>
          )}
          <Link
            href={secondaryHref}
            className="rounded-md border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
