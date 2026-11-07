import type { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import "../globals.css";

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="fr">{children}</SiteLayout>;
}
