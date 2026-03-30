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
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">Swake Diving Center</p>
            <p className="text-sm text-neutral-600">Siquijor</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#why-swake">Why Swake</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Safe • Guided • Local
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight">
          Learn freediving in Siquijor.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-700">
          Safe, guided sessions for beginners and experienced divers — calm,
          simple, and at your own pace.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white"
          >
            Book Intro Session
          </a>
          <a
            href="https://wa.me/639066293634"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium"
          >
            Message Us
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <p className="text-sm text-neutral-500">Intro</p>
          <p className="mt-2 text-lg font-medium">First-time friendly</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6">
          <p className="text-sm text-neutral-500">Fundives</p>
          <p className="mt-2 text-lg font-medium">Guided sessions</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6">
          <p className="text-sm text-neutral-500">Courses</p>
          <p className="mt-2 text-lg font-medium">Wave progression</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="rounded-3xl bg-neutral-100 p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Real sessions
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Raw clips, guided dives, and first-time progress in the water.
          </h2>
        </div>
        <div className="grid gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Approach
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Calm, unhurried learning
            </h3>
            <p className="mt-3 text-neutral-700">
              We focus on comfort, proper technique, and safe progress — not
              rushed depth goals.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Location
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Siquijor, Philippines
            </h3>
            <p className="mt-3 text-neutral-700">
              Guided sessions with local instructors and access planned around
              conditions and site flow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Reviews
        </p>
        <h2 className="mt-2 text-3xl font-semibold">What divers say</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Real feedback from first-timers, returning students, and visiting
          divers.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-2xl border border-neutral-200 p-6">
              <p className="text-neutral-700">“{review.quote}”</p>
              <p className="mt-4 text-sm font-medium text-neutral-900">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Services
        </p>
        <h2 className="mt-2 text-3xl font-semibold">What we offer</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Clear options for first-timers, returning divers, and those who want
          to train further.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <p className="text-sm text-neutral-500">{service.price}</p>
              <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-neutral-700">{service.description}</p>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="why-swake" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Why Swake
        </p>
        <h2 className="mt-2 text-3xl font-semibold">A calm, safety-first approach</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Safety-first approach",
            "Small, guided sessions",
            "Local instructors",
            "Calm and unhurried learning",
            "Real experience, not rushed dives",
            "Conditions-based site planning",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-neutral-100 p-5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Real sessions
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Raw clips and real progress</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Use this section for short video clips or stills from actual intro
          sessions, training dives, and guided fundives.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {gallery.map((item) => (
            <div key={item} className="rounded-2xl border border-dashed border-neutral-300 p-6 text-sm text-neutral-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Booking flow
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Simple process</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["1", "Message us or book your slot"],
            ["2", "Choose your schedule"],
            ["3", "Show up and dive"],
          ].map(([num, text]) => (
            <div key={num} className="rounded-2xl border border-neutral-200 p-6">
              <p className="text-2xl font-semibold">{num}</p>
              <p className="mt-2 text-neutral-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold">New to freediving?</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          No experience needed. We guide you step by step, with a strong focus
          on safety, comfort, and proper technique.
        </p>
        <div className="mt-8 grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="mt-3 text-neutral-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Book with us
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Ready to dive?</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Whether it’s your first time or you’re coming back to train, we keep
          things safe, clear, and simple.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/639066293634"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white"
          >
            Message Us on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/swakefreedivers_siquijor/"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium"
          >
            Visit Instagram
          </a>
        </div>

        <div className="mt-10 grid gap-3 text-neutral-700">
          <p>Location: Siquijor, Philippines</p>
          <p>Instagram: @swakefreedivers_siquijor</p>
          <p>WhatsApp: +63 906 629 3634</p>
          <p>Hours: By schedule and weather conditions</p>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Swake Diving Center. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-neutral-600">
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
