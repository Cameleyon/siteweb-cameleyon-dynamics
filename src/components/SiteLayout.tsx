import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Locale } from "@/i18n/routes";

export function SiteLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
