import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { DetailList } from "@/components/detail-list";
import { PageHero } from "@/components/page-hero";
import { lineTrainingDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Line Training",
  description: "Line training sessions in Siquijor for progressing divers working on comfort, technique, and depth.",
  alternates: { canonical: "/services/line-training" },
};

export default function LineTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Technique and progression"
        title={lineTrainingDetails.title}
        description={lineTrainingDetails.summary}
        kicker={`${lineTrainingDetails.schedule} · ${lineTrainingDetails.minRequirement}`}
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Rates</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {lineTrainingDetails.rates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            <DetailList title="What’s included" items={lineTrainingDetails.inclusions} />
            <DetailList title="Not included" items={lineTrainingDetails.exclusions} />
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
