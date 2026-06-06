import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.company.url),
  title: {
    default: `${siteConfig.company.name} | Décision analytique, données et logiciels`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description:
    "CAMELEYON Dynamics accompagne les organisations en recherche opérationnelle, analyse de données, gestion de projet et développement de logiciels.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.company.name} | Décision analytique, données et logiciels`,
    description:
      "Consultation en décision analytique, analyse de données, gestion de projet, optimisation et développement de logiciels.",
    url: siteConfig.company.url,
    siteName: siteConfig.company.name,
    locale: "fr_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
