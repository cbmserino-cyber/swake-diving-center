import { site } from "@/lib/site-data";

const contactStyles: Record<string, string> = {
  WhatsApp:
    "border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20",
  Instagram:
    "border-[#E4405F]/40 bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F]/20",
  Facebook:
    "border-[#1877F2]/40 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20",
  Email:
    "border-[#3AA0C8]/40 bg-[#3AA0C8]/10 text-[#3AA0C8] hover:bg-[#3AA0C8]/20",
};

export function CtaStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
      <div className="rounded-[2rem] border border-[#3AA0C8]/20 bg-[#050505] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
          Book with Swake
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Choose your session and message us directly.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
          From intro sessions and line training to certification courses and guided
          fundives, we’ll help you find the right setup based on your level,
          goals, and the day’s conditions in Siquijor.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {site.contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${contactStyles[link.label]}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
