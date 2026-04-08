import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { DetailList } from "@/components/detail-list";
import { Gallery } from "@/components/gallery";
import { PageHero } from "@/components/page-hero";
import { fundiveDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Siquijor Fundive with Guide",
  description:
    "Guided fundive sessions in Siquijor with local support and up to two dive sites.",
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

      {fundiveDetails.gallery.length > 0 && (
        <Gallery images={fundiveDetails.gallery} />
      )}

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            <DetailList title="What’s included" items={fundiveDetails.inclusions} />
            <DetailList title="Not included" items={fundiveDetails.exclusions} />
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Transport add-ons (Optional)
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {fundiveDetails.transportAddOns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm leading-6 text-slate-300">
              <p>Each session is planned based on actual conditions on the day.</p>
              <p className="mt-3">Typical factors we consider:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Current → site exposure matched to experience level</li>
                <li>Visibility → clearer sites for intro and photo dives</li>
                <li>Monsoon → sheltered coastlines when required</li>
                <li>Tide → affects entry, line setup, and flow</li>
                <li>Site traffic → avoiding crowding and reef pressure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
