import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { DetailList } from "@/components/detail-list";
import { PageHero } from "@/components/page-hero";
import { introDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Intro to Freediving",
  description: "One-day intro to freediving experience in Siquijor for first-timers.",
  alternates: { canonical: "/services/intro-to-freediving" },
};

export default function IntroToFreedivingPage() {
  return (
    <>
      <PageHero
        eyebrow={introDetails.duration}
        title={introDetails.title}
        description={introDetails.summary}
        kicker={`${introDetails.schedule} · ${introDetails.price}`}
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Ideal for</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {introDetails.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            <DetailList title="What’s included" items={introDetails.inclusions} />
            <DetailList title="Not included" items={introDetails.exclusions} />
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
