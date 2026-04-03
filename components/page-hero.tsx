import { site } from "@/lib/site-data";

export function CtaStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Ready to book?</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Tell people what session you want, then send them directly to the booking channel.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
          Use this section as the final conversion point on service pages. Most guests will contact you through WhatsApp, Instagram, or Facebook Messenger.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {site.contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
