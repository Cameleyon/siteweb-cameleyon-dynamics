import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold">Liens rapides</p>
          <div className="mt-3 grid gap-2">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400">
        © {year} {siteConfig.company.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
