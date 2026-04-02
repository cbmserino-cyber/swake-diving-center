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
          
          {/* Main About */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm leading-7 text-slate-600">
              Swake Freedivers Siquijor is a local freediving center built around safety, 
              clear guidance, and real conditions in the water. From first-time intro sessions 
              to line training, certification courses, and guided dives, we keep each session 
              personal, paced, and grounded in the environment.
            </p>
      
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Being based in Siquijor shapes how we dive. We work in these sites daily, 
              understand how they change, and plan each session based on conditions — 
              not fixed schedules or rushed programs.
            </p>
          </div>
      
          {/* Identity / Philosophy */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Local, guided, and safety-first
            </h2>
      
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>Small, guided sessions with attention to each diver</li>
              <li>Conditions-based planning for safer and better dives</li>
              <li>Focus on technique, comfort, and long-term progression</li>
              <li>Local knowledge of reefs, currents, and visibility</li>
            </ul>
      
            <p className="mt-6 text-xs text-slate-500">
              Operated by {site.legalName}.
            </p>
          </div>
      
        </div>
      </section>
