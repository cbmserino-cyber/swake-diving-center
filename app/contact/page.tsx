import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Message Swake Freedivers Siquijor through WhatsApp, Instagram, Facebook, or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Booking and contact details"
        description="Message us via WhatsApp, Instagram, or Facebook to book a session or ask about availability."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Direct channels</h2>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <a href={site.contact.whatsapp} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:bg-slate-900">
                WhatsApp: {site.contact.phone}
              </a>
              <a href={site.contact.instagram} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:bg-slate-900">
                Instagram
              </a>
              <a href={site.contact.facebook} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:bg-slate-900">
                Facebook
              </a>
              <a href={`mailto:${site.contact.email}`} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:bg-slate-900">
                {site.contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Location and notes</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>{site.location.area}</p>
              <p>{site.location.province}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
