import Image from "next/image";

export function SwakeWebsite() {
  const reviews = [
    {
      quote:
        "I've done my first free dive with Swake instructors and it was amazing! They are really nice and professional. I highly recommend this diving center!",
      author: "Romain Torres",
    },
    {
      quote:
        "Swake free diving is the best, especially for a first timer like me. My coach, Jetter, was incredibly patient and really good at guiding beginners. The reef is beautiful vibrant, clear, and absolutely breathtaking underwater. Such an unforgettable experience.",
      author: "Joshua Waban",
    },
    {
      quote:
        "Had so much fun diving with them, they are very accommodating and patient.",
      author: "Allaine Alejo",
    },
    {
      quote:
        "Habe hier eine Freediving Introduction gemacht und würde es jedem empfehlen! Zu jeder Zeit habe ich mich wohl und sicher gefühlt. Jeder ist hier nett und offen, man unterstützt hier locals die ihre Leidenschaft im Freediving gefunden haben. Vielen Dank 🤗",
      author: "Franzi K",
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
        "Structured Molchanovs certification for those looking to progress safely, properly, and at a steady pace.",
      cta: "View Courses",
    },
     {
      title: "Line Training",
      price: "Wave 1 & Wave 2",
      description:
        "Personalized  training for those looking to progress safely, properly, and at a steady pace.",
      cta: "Book Training",
    },
  ];

  const faqs = [
    {
      q: "Do I need diving experience?",
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
  {
    src: "/gallery/intro-1.JPG",
    label: "Raw intro and training sessions",
  },
  {
    src: "/gallery/intro-1.png",
    label: "Raw intro and training sessions",
  },
  {
    src: "/gallery/line-training-1.png",
    label: "Beginner-friendly coaching flow",
  },
  {
    src: "/gallery/line-training-2.JPG",
    label: "Beginner-friendly coaching flow",
  },
  {
    src: "/gallery/fundive-1.JPG",
    label: "Guided open water dives at Dumanhog",
  },
  {
    src: "/gallery/fundive-2.png",
    label: "Guided open water dives at Tulapos",
  },
  {
    src: "/gallery/fundive-3.png",
    label: "Guided open water dives at Tubod",
  },
  {
    src: "/gallery/fundive-4.png",
    label: "Guided open water dives at Tulapos",
  },
];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,168,224,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(247,95,35,0.10),transparent_24%),linear-gradient(to_bottom,#ffffff,#f8fbfd_38%,#ffffff)]" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#37A8E0]/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/Swake-05.png"
              alt="Swake Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Swake Diving Center
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#37A8E0]">
                Siquijor
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#services" className="transition hover:text-neutral-900">
              Services
            </a>
            <a href="#why-swake" className="transition hover:text-neutral-900">
              Why Swake
            </a>
            <a href="#faq" className="transition hover:text-neutral-900">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-neutral-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="mb-5 inline-flex w-fit rounded-full border border-[#37A8E0]/20 bg-[#37A8E0]/8 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#1f8fca]">
                Safe • Guided • Local
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Learn freediving in Siquijor.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                Safe, guided sessions for beginners and experienced divers —
                calm, simple, and at your own pace.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#F75F23] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(247,95,35,0.22)] transition hover:-translate-y-0.5"
                >
                  Book Intro Session
                </a>
                <a
                  href="https://wa.me/639066293634"
                  className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur transition hover:border-neutral-300 hover:bg-white"
                >
                  Message Us
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight">Intro</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    First-time friendly
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight">
                    Fundives
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Guided sessions
                  </p>
                </div>
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight">
                    Courses
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Molchanovs Wave 1 & 2
                  </p>
                    </div>
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold tracking-tight">
                    Line Training
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Structured progression
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 flex justify-center lg:hidden">
                <div className="rounded-[2rem] border border-neutral-200 bg-white/70 p-5 shadow-lg backdrop-blur">
                  <Image
                    src="/Swake-05.png"
                    alt="Swake Logo"
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-neutral-200 bg-white/75 p-6 shadow-xl shadow-sky-100/50 backdrop-blur sm:col-span-2">
                  <div className="flex aspect-[16/10] items-end rounded-[1.5rem] border border-neutral-200 bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(235,247,252,0.95)_52%,rgba(255,242,236,0.95))] p-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-[#37A8E0]">
                        Real sessions
                      </p>
                      <p className="mt-2 max-w-sm text-xl font-medium tracking-tight">
                        Raw clips, guided dives, and first-time progress in the
                        water.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Approach
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-tight">
                    Calm, unhurried learning
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    We focus on comfort, proper technique, and safe progress —
                    not rushed depth goals.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-tight">
                    Siquijor, Philippines
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    Guided sessions with local instructors and access planned
                    around conditions and site flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-neutral-200 bg-white/75 p-8 shadow-sm backdrop-blur lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Reviews
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  What divers say
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-600">
                Real feedback from first-timers, returning students, and
                visiting divers.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50/90 p-6"
                >
                  <p className="text-base leading-7 text-neutral-800">
                    “{review.quote}”
                  </p>
                  <p className="mt-3 text-sm text-neutral-500">
                    — {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              What we offer
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Clear options for first-timers, returning divers, and those who
              want to train further.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-neutral-200 bg-white/80 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#37A8E0]/40 hover:shadow-lg"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  {service.price}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition group-hover:border-[#37A8E0]/40 group-hover:bg-[#37A8E0]/5"
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="why-swake" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,249,252,0.92))] p-8 shadow-sm backdrop-blur lg:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Why Swake
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                A calm, safety-first approach
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Safety-first approach",
                  "Small, guided sessions",
                  "Local instructors",
                  "Calm and unhurried learning",
                  "Real experience, not rushed dives",
                  "Conditions-based site planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-neutral-200 bg-white/75 p-5 text-sm text-neutral-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white/75 p-8 shadow-sm backdrop-blur lg:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Real sessions
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Raw clips and real progress
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Use this section for short video clips or stills from actual
                intro sessions, training dives, and guided fundives.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {gallery.map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-2xl border border-neutral-200"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                    
                    <div className="p-3 text-sm text-neutral-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-neutral-200 bg-white/75 p-8 shadow-sm backdrop-blur lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Booking flow
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Simple process
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["1", "Message us or book your slot"],
                ["2", "Choose your schedule"],
                ["3", "Show up and dive"],
              ].map(([num, text]) => (
                <div
                  key={num}
                  className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50/90 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#37A8E0] text-sm font-semibold text-white">
                    {num}
                  </div>
                  <p className="mt-4 text-lg font-medium tracking-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                FAQ
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                New to freediving?
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                No experience needed. We guide you step by step, with a strong
                focus on safety, comfort, and proper technique.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-[1.5rem] border border-neutral-200 bg-white/75 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-medium tracking-tight">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-[#37A8E0]/20 bg-[linear-gradient(135deg,rgba(55,168,224,0.10),rgba(255,255,255,0.94),rgba(247,95,35,0.10))] p-8 shadow-sm backdrop-blur lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#37A8E0]">
                  Book with us
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Ready to dive?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
                  Whether it’s your first time or you’re coming back to train,
                  we keep things safe, clear, and simple.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/639066293634"
                    className="rounded-2xl bg-[#F75F23] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(247,95,35,0.22)] transition hover:-translate-y-0.5"
                  >
                    Message Us on WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/swakefreedivers_siquijor/"
                    className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-white"
                  >
                    Visit Instagram
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-white/80 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Contact details
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-700">
                  <p>
                    <span className="text-neutral-500">Location:</span> Siquijor,
                    Philippines
                  </p>
                  <p>
                    <span className="text-neutral-500">Instagram:</span>{" "}
                    @swakefreedivers_siquijor
                  </p>
                  <p>
                    <span className="text-neutral-500">WhatsApp:</span> +63 906
                    629 3634
                  </p>
                  <p>
                    <span className="text-neutral-500">Hours:</span> By schedule
                    and weather conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Swake Diving Center. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-neutral-900">
              Services
            </a>
            <a href="#faq" className="hover:text-neutral-900">
              FAQ
            </a>
            <a href="#contact" className="hover:text-neutral-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
