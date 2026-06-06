"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="relative size-11 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
            <Image
              src={siteConfig.company.logoPath}
              alt={`Logo ${siteConfig.company.name}`}
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block">{siteConfig.company.name}</span>
            <span className="block text-xs font-medium text-slate-500">Solutions & consultation</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-indigo-700"
                  : "text-slate-600 hover:text-indigo-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800 md:inline-flex"
        >
          Nous contacter
        </Link>
      </nav>
      <div className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ${
              isActive(item.href)
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-indigo-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
