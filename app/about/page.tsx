import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Swake Freedivers Siquijor and its local, safety-first approach to freediving.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A local, safety-first approach to freediving in Siquijor"
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Swake Freedivers Siquijor, the customer-facing brand for {site.legalName}, is a Siquijor-based freediving center built around local knowledge, safety, and thoughtful guidance. From first-time intro sessions to line training, certification courses, and guided dives, we keep each session clear, personal, and conditions-based. Our local identity is central to what we do: it shapes how we guide, where we dive, and how we share the island with others.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Suggested content blocks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>Swake Freedivers was built around the idea of keeping dives fun, safe, and grounded in the conditions of the island. Being locals here means we are not just visiting the sites — we work in them daily, understand how they change, and adapt accordingly.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
