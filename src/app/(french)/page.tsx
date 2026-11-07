import { SitePage, pageMetadata } from "@/components/SitePage";

export const metadata = pageMetadata("fr", "home");

export default function Page() {
  return <SitePage locale="fr" page="home" />;
}
