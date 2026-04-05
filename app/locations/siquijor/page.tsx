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
        title="Sawang Point, Brgy. Tubod, San Juan, Siquijor"
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">HQ location</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>{site.location.area}</p>
              <p>{site.location.province}</p>
              <p>{site.location.note}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Notes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>
                Our meeting point is in Sawang, Brgy. Tubod, San Juan during Amihan, and in Dumanhog, Siquijor during Habagat. Both locations are accessible and close to most accommodations.
              </li>
              <li>
                Once your session is confirmed, we’ll send the exact location pin, recommended arrival time, and what to bring.
              </li>
              <li>
                If your session includes transport to dive sites, this will be coordinated in advance.
              </li>
              <li>
                Sawang and Dumanhog are commonly used for beginner sessions due to easier access and generally manageable conditions.
              </li>
              <li>
                Dive sites are selected daily based on current, visibility, weather, and overall safety.
              </li>
              <li>
                Other areas may be used for deeper or training-focused sessions when conditions allow.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
