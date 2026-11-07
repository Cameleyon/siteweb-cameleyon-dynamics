import { SitePage, pageMetadata } from "@/components/SitePage";

export const metadata = pageMetadata("fr", "contact");

export default function Page() {
  return <SitePage locale="fr" page="contact" />;
}
