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
        description="Use this page to explain who Swake is, what makes the approach different, and why guests are diving with local instructors in waters you know well."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">What to say here</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Swake Freedivers Siquijor is the customer-facing brand for {site.legalName}. The strongest brand message is local guidance, calmer pacing, and a teaching style that makes first-timers feel comfortable while still keeping standards clear.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Suggested content blocks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>Origin story and why the business is rooted in Siquijor.</li>
              <li>Instructor philosophy: local, safety-first, not rushed.</li>
              <li>Who the sessions are for: first-timers, returning divers, and progressing students.</li>
              <li>How conditions and local knowledge shape site selection.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
