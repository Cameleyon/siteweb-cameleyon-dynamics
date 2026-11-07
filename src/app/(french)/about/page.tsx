import { SitePage, pageMetadata } from "@/components/SitePage";

export const metadata = pageMetadata("fr", "about");

export default function Page() {
  return <SitePage locale="fr" page="about" />;
}
