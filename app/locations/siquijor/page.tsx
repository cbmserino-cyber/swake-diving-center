import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Siquijor Location",
  description: "Location page for Swake Freedivers Siquijor in Tubod, San Juan.",
  alternates: { canonical: "/locations/siquijor" },
};

export default function SiquijorLocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Tubod, San Juan, Siquijor"
        description="Meeting point depends on the season and water conditions, usually either our HQ or Dumanhog."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Core location details</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>{site.location.area}</p>
              <p>{site.location.province}</p>
              <p>{site.location.note}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Suggested content blocks</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>Meeting point and arrival notes</li>
              <li>Why Tubod and San Juan are relevant for beginners and training</li>
              <li>Conditions-based site selection</li>
              <li>Nearby site mentions such as Dumanhog when relevant to guided packages</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
