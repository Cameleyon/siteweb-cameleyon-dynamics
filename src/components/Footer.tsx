import Link from "next/link";
import { siteConfig } from "@/data/site";
import { siteCopy } from "@/i18n/messages";
import { pageHref, pages, type Locale } from "@/i18n/routes";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const t = siteCopy(locale);

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold">{t("quickLinks")}</p>
          <div className="mt-3 grid gap-2">
            {pages.map((page) => (
              <Link key={page} href={pageHref(locale, page)} className="text-sm text-slate-300 hover:text-white">
                {t(page)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400">
        © {year} {siteConfig.company.name}. {t("copyright")}
      </div>
    </footer>
  );
}
