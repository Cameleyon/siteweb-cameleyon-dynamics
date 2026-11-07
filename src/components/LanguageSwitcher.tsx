"use client";

import Link from "next/link";
import { useRef } from "react";
import { languageNames, locales, pageHref, type Locale, type Page } from "@/i18n/routes";

export function LanguageSwitcher({ locale, page, label }: { locale: Locale; page: Page; label: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);

  function close() {
    if (details.current) details.current.open = false;
  }

  return (
    <details
      ref={details}
      className="group relative ml-auto shrink-0 lg:ml-0"
      onKeyDown={(event) => {
        if (event.key === "Escape" && details.current?.open) {
          close();
          summary.current?.focus();
        }
      }}
    >
      <summary
        ref={summary}
        aria-label={`${label}: ${languageNames[locale]}`}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18" />
        </svg>
        {locale.toUpperCase()}
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3 group-open:rotate-180">
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>
      <ul className="absolute right-0 top-full z-10 mt-2 min-w-36 rounded-md border border-slate-200 bg-white p-1 shadow-lg">
        {locales.map((option) => (
          <li key={option}>
            <Link
              href={pageHref(option, page)}
              lang={option}
              hrefLang={option}
              aria-current={option === locale ? "true" : undefined}
              onClick={() => {
                close();
                if (option === locale) summary.current?.focus();
              }}
              className={`block rounded px-3 py-2 text-sm ${option === locale ? "bg-indigo-50 font-semibold text-indigo-700" : "text-slate-700 hover:bg-slate-100"}`}
            >
              {languageNames[option]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
