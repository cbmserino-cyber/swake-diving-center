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
        "Relaxed guided sessions for certified or experienced divers.",
      cta: "Book Fundive",
    },
    {
      title: "Freediving Courses",
      price: "Wave 1 & Wave 2",
      description:
        "Structured training for safe and steady progression.",
      cta: "View Courses",
    },
  ];

  const faqs = [
    {
      q: "Do I need experience?",
      a: "No. Our intro sessions are designed for beginners.",
    },
    {
      q: "Is it safe?",
      a: "Safety is central to how we guide every session.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      
      {/* HEADER */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
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

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-semibold">
          Learn freediving in Siquijor.
        </h1>
        <p className="mt-6 text-neutral-700">
          Safe, guided sessions — calm and simple.
        </p>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">What divers say</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="border p-6 rounded-2xl">
              <p>“{review.quote}”</p>
              <p className="mt-4 text-sm font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Services</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="border p-6 rounded-2xl">
              <p className="text-sm">{service.price}</p>
              <h3 className="mt-2 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">FAQ</h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border p-6 rounded-2xl">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Swake Diving Center
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
