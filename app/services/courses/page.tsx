import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { PageHero } from "@/components/page-hero";
import { courseCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Molchanovs Courses",
  description: "Molchanovs Wave 1 and Wave 2 course information for Swake Freedivers Siquijor.",
  alternates: { canonical: "/services/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Molchanovs Wave 1 and Wave 2"
        description="Structured Molchanovs certification focused on building proper foundations — breathing, equalization, safety protocols, and progressive depth development."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {courseCards.map((course) => (
            <article key={course.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{course.duration}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">{course.title}</h2>
              <p className="mt-2 text-sm font-semibold text-slate-400">{course.price}</p>
              <p className="mt-5 text-sm leading-7 text-slate-300">{course.summary}</p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">Requirements</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {course.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">Highlights</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {course.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {course.note ? (
                <p className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
                  {course.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
