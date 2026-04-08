import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about intro classes, fundives, line training, and logistics for Swake Freedivers Siquijor.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions before people book"
      />

      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="space-y-5">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>

  
  );
}
