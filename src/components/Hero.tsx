import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.35),transparent_36%),linear-gradient(135deg,rgba(30,41,59,0.98),rgba(15,23,42,1))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="rounded-md bg-indigo-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="rounded-md border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="mx-auto flex self-center lg:mx-0 lg:translate-x-12">
          <div className="relative size-72 overflow-hidden rounded-full bg-white shadow-2xl ring-1 ring-white/30 sm:size-80 lg:size-96">
            <Image
              src={siteConfig.company.heroIconPath}
              alt={`Symbole caméléon ${siteConfig.company.name}`}
              fill
              sizes="(min-width: 1024px) 384px, 80vw"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
