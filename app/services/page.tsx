import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Services",
  description: "Overview of intro to freediving, fundive with guide, line training, and Molchanovs courses in Siquijor.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Freediving sessions in Siquijor"
        description="Explore intro to freediving, line training, certification courses, and guided fundives with local, safety-first instruction in Siquijor."
      />

      <Gallery images={introDetails.gallery} />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
