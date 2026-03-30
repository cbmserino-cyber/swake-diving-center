export function SwakeWebsite() {
  const reviews = [
    {
      quote:
        "I did my first freedive with Swake instructors and it was an amazing experience. They are very professional and easy to dive with.",
      author: "Romain Torres",
    },
    {
      quote:
        "Swake Freedivers is great, especially for first-timers. My coach was patient and guided me well. The reef was clear, vibrant, and beautiful underwater.",
      author: "Joshua Waban",
    },
    {
      quote:
        "Had a great time diving with them. Very accommodating and patient throughout the session.",
      author: "Allaine",
    },
  ];

  const services = [
    {
      title: "Intro to Freediving",
      price: "From ₱2,500",
      description:
        "For first-timers and beginners. Learn the basics of breathing, equalization, and your first open water dives — guided step by step.",
      cta: "Book Intro",
    },
    {
      title: "Fundive with Guide",
      price: "₱1,500 / person",
      description:
        "Relaxed guided sessions for certified or experienced divers, with site selection based on conditions and optional photo coverage.",
      cta: "Book Fundive",
    },
    {
      title: "Freediving Courses",
      price: "Wave 1 & Wave 2",
      description:
        "Structured Molchanovs training for those looking to progress safely, properly, and at a steady pace.",
      cta: "View Courses",
    },
  ];

  const faqs = [
    {
      q: "Do I need experience?",
      a: "No. Our intro sessions are designed for first-timers and beginners.",
    },
    {
      q: "Is it safe?",
      a: "Safety is central to how we teach and guide every session.",
    },
    {
      q: "What should I bring?",
      a: "Swimwear, towel, water, and a relaxed mindset. We will guide you through the rest.",
    },
  ];

  const gallery = [
    "Raw intro and training sessions",
    "Beginner-friendly coaching flow",
    "Guided open water dives",
    "Quiet progress underwater",
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <header className="sticky top-0 z-50 border-b border-[#37A8E0]/20 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/Swake-05.png" alt="Swake Logo" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-wide">Swake Diving Center</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#37A8E0]">Siquijor</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#why-swake" className="transition hover:text-white">Why Swake</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,168,224,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(247,95,35,0.18),transparent_32%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit rounded-full border border-[#37A8E0]/30 bg-[#37A8E0]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#8ED8FF]">
                Safe • Guided • Local
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Learn freediving in Siquijor.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Safe, guided sessions for beginners and experienced divers — calm, simple, and at your own pace.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#F75F23] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#F75F23]/20 transition hover:-translate-y-0.5"
                >
                  Book Intro Session
                </a>
                <a
                  href="https://wa.me/639066293634"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Message Us
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">Intro</p>
                  <p className="mt-1 text-sm text-slate-400">First-time friendly</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">Fundives</p>
                  <p className="mt-1 text-sm text-slate-400">Guided sessions</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">Courses</p>
                  <p className="mt-1 text-sm text-slate-400">Wave progression</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex justify-center lg:hidden">
                <img src="/Swake-05.png" alt="Swake Logo" className="h-24 w-24 object-contain" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/30 sm:col-span-2">
                  <div className="flex aspect-[16/10] items-end rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,#0b0b0b,#112331_48%,#1b0c06)] p-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-[#8ED8FF]">Real sessions</p>
                      <p className="mt-2 max-w-sm text-xl font-medium">
                        Raw clips, guided dives, and first-time progress in the water.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Approach</p>
                  <p className="mt-2 text-lg font-medium">Calm, unhurried learning</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    We focus on comfort, proper technique, and safe progress — not rushed depth goals.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-medium">Siquijor, Philippines</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Guided sessions with local instructors and access planned around conditions and site flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Reviews</p>
                <h2 className="mt-2 text-3xl font-semibold">What divers say</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                Real feedback from first-timers, returning students, and visiting divers.
              </p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <div key={index} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                  <p className="text-base leading-7 text-slate-200">“{review.quote}”</p>
                  <p className="mt-3 text-sm text-slate-400">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Services</p>
            <h2 className="mt-2 text-3xl font-semibold">What we offer</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Clear options for first-timers, returning divers, and those who want to train further.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-[#37A8E0]/40 hover:bg-white/[0.07]">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{service.price}</p>
                <h3 className="mt-3 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                <a href="#contact" className="mt-6 inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition group-hover:border-[#37A8E0]/40 group-hover:bg-[#37A8E0]/10">
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="why-swake" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Why Swake</p>
              <h2 className="mt-2 text-3xl font-semibold">A calm, safety-first approach</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Safety-first approach",
                  "Small, guided sessions",
                  "Local instructors",
                  "Calm and unhurried learning",
                  "Real experience, not rushed dives",
                  "Conditions-based site planning",
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Real sessions</p>
              <h3 className="mt-2 text-2xl font-semibold">Raw clips and real progress</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Use this section for short video clips or stills from actual intro sessions, training dives, and guided fundives.
              </p>
              <div className="mt-6 space-y-3">
                {gallery.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Booking flow</p>
              <h2 className="mt-2 text-3xl font-semibold">Simple process</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["1", "Message us or book your slot"],
                ["2", "Choose your schedule"],
                ["3", "Show up and dive"],
              ].map(([num, text]) => (
                <div key={num} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#37A8E0] text-sm font-semibold text-black">
                    {num}
                  </div>
                  <p className="mt-4 text-lg font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">FAQ</p>
              <h2 className="mt-2 text-3xl font-semibold">New to freediving?</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                No experience needed. We guide you step by step, with a strong focus on safety, comfort, and proper technique.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-medium">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-[#37A8E0]/20 bg-gradient-to-br from-[#37A8E0]/10 via-black to-[#F75F23]/10 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8ED8FF]">Book with us</p>
                <h2 className="mt-2 text-3xl font-semibold">Ready to dive?</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                  Whether it’s your first time or you’re coming back to train, we keep things safe, clear, and simple.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/639066293634"
                    className="rounded-2xl bg-[#F75F23] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#F75F23]/20 transition hover:-translate-y-0.5"
                  >
                    Message Us on WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/swakefreedivers_siquijor/"
                    className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Visit Instagram
                  </a>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Contact details</p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                  <p><span className="text-slate-400">Location:</span> Siquijor, Philippines</p>
                  <p><span className="text-slate-400">Instagram:</span> @swakefreedivers_siquijor</p>
                  <p><span className="text-slate-400">WhatsApp:</span> +63 906 629 3634</p>
                  <p><span className="text-slate-400">Hours:</span> By schedule and weather conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Swake Diving Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
