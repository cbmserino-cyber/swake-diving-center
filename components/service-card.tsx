import Link from "next/link";
import type { ServiceSummary } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{service.priceLabel}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{service.shortTitle}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{service.summary}</p>
      <Link
        href={service.href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        {service.ctaLabel}
      </Link>
    </article>
  );
}
