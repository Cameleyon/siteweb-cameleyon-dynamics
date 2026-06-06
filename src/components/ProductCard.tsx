import Link from "next/link";
import type { Product } from "@/data/site";

const statusStyles: Record<Product["status"], string> = {
  Disponible: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "En développement": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  "Bientôt disponible": "bg-slate-100 text-slate-700 ring-slate-200",
};

export function ProductCard({ product }: { product: Product }) {
  const isAvailable = product.status === "Disponible";

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-950">{product.name}</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[product.status]}`}>
          {product.status}
        </span>
      </div>
      {product.description ? (
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
      ) : (
        <div className="flex-1" />
      )}
      {isAvailable ? (
        <Link
          href={product.href}
          className="mt-6 inline-flex w-fit rounded-md border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
        >
          {product.cta}
        </Link>
      ) : (
        <span
          className="mt-6 inline-flex w-fit cursor-not-allowed rounded-md border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400"
          aria-disabled="true"
        >
          {product.cta}
        </span>
      )}
    </article>
  );
}
