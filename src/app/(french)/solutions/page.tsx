import { SitePage, pageMetadata } from "@/components/SitePage";

export const metadata = pageMetadata("fr", "solutions");

export default function Page() {
  return <SitePage locale="fr" page="solutions" />;
}
