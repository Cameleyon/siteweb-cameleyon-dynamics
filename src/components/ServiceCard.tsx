import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  );
}
