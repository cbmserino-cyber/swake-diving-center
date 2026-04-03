import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { DetailList } from "@/components/detail-list";
import { PageHero } from "@/components/page-hero";
import { fundiveDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Siquijor Fundive with Guide",
  description: "Guided fundive sessions in Siquijor with local support and up to two dive sites.",
  alternates: { canonical: "/services/fundive-with-guide" },
};

export default function FundiveWithGuidePage() {
  return (
    <>
      <PageHero
        eyebrow={fundiveDetails.price}
        title={fundiveDetails.title}
        description={fundiveDetails.summary}
        kicker={`${fundiveDetails.schedule} · ${fundiveDetails.minRequirement}`}
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            <DetailList title="What’s included" items={fundiveDetails.inclusions} />
            <DetailList title="Not included" items={fundiveDetails.exclusions} />
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Transport add-ons</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {fundiveDetails.transportAddOns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm leading-6 text-slate-300">
              Each session is planned based on actual conditions on the day.

              Typical factors we consider:
              
              Current strength → calmer sites for beginners, more exposed areas for experienced divers
              Visibility → clearer sites prioritized for intro sessions and photo-focused dives
              Moonsoon → protected coastlines when needed for safety and comfort
              Tide timing → affects entry points, line setup, and overall dive flow
              Site traffic → avoiding crowded areas to prevent localized reef pressure
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
