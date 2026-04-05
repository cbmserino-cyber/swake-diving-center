import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Siquijor Location",
  description: "Location page for Swake Freedivers Siquijor in Tubod, San Juan.",
  alternates: { canonical: `${site.baseUrl}/locations/siquijor` },
};

export default function SiquijorLocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Sawang Point, Brgy. Tubod, San Juan, Siquijor"
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6">
          <div className="rounded-3xl border border-[#3AA0C8]/20 bg-[#050505] p-8">
            <h2 className="text-2xl font-semibold text-white">Notes</h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>
                Our meeting point is in Sawang, Brgy. Tubod, San Juan during Amihan, and in Dumanhog, Siquijor during Habagat.
              </li>
              <li>
                Once your session is confirmed, we’ll send the exact location pin, arrival time, and what to bring.
              </li>
              <li>
                Transport to dive sites is coordinated in advance when included.
              </li>
              <li>
                Sawang and Dumanhog are commonly used for beginner sessions due to accessibility and manageable conditions.
              </li>
              <li>
                Dive sites are selected daily based on current, visibility, weather, and safety.
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
