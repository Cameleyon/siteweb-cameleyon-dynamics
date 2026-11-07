"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/data/site";
import { siteCopy } from "@/i18n/messages";
import { pageHref, pages, type Locale } from "@/i18n/routes";

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = siteCopy(locale);
  const currentPage = pages.find((page) => pathname === pageHref(locale, page));

  const links = pages.map((page) => {
    const active = page === currentPage;
    return (
      <Link
        key={page}
        href={pageHref(locale, page)}
        aria-current={active ? "page" : undefined}
        className={`whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium transition sm:px-3 lg:px-0 ${active
          ? "bg-indigo-50 text-indigo-700 lg:bg-transparent"
          : "text-slate-600 hover:bg-slate-100 hover:text-indigo-700 lg:hover:bg-transparent"
        }`}
      >
        {t(page)}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex w-full items-center gap-3 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
        <Link href={pageHref(locale, "home")} className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
            <Image
              src={siteConfig.company.logoPath}
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block">{siteConfig.company.name}</span>
            <span className="block text-xs font-medium text-slate-500">{t("brandSubtitle")}</span>
          </span>
        </Link>
        <nav aria-label={t("navLabel")} className="ml-auto hidden items-center gap-6 lg:flex">
          {links}
        </nav>
        <LanguageSwitcher locale={locale} page={currentPage ?? "home"} label={t("language")} />
      </div>
      <nav aria-label={t("navLabel")} className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 sm:px-6 lg:hidden">
        {links}
      </nav>
    </header>
  );
}
