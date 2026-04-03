import Image from "next/image";
import Link from "next/link";
import type { ServiceSummary } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          {service.priceLabel}
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
          {service.shortTitle}
        </h3>

        <p className="mt-4 text-sm leading-6 text-slate-300">
          {service.summary}
        </p>

        <Link
          href={service.href}
          className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
        >
          {service.ctaLabel}
        </Link>
      </div>
    </article>
  );
}
