export default function SwakeWebsite() {
  const reviews = [
    {
      quote:
        "I did my first freedive with Swake instructors and it was an amazing experience. They are very professional and easy to dive with.",
      author: "Romain Torres",
    },
    {
      quote:
        "Swake Freedivers is great, especially for first-timers. My coach was patient and guided me well.",
      author: "Joshua Waban",
    },
    {
      quote:
        "Had a great time diving with them. Very accommodating and patient.",
      author: "Allaine",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HEADER */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">
            <img
              src="/Swake-05.png"
              alt="Swake Logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-xl font-semibold">Swake Diving Center</p>
              <p className="text-xs uppercase tracking-widest text-[#37A8E0]">
                Siquijor
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-widest text-[#37A8E0]">
          Safe • Guided • Local
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-tight">
          Learn freediving in Siquijor.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-700">
          Safe, guided sessions for beginners and experienced divers.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#F75F23] px-6 py-3 text-sm font-medium text-white"
          >
            Book Intro Session
          </a>

          <a
            href="https://wa.me/639066293634"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm"
          >
            Message Us
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">What divers say</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-2xl border border-neutral-200 p-6">
              <p className="text-neutral-700">“{review.quote}”</p>
              <p className="mt-3 text-sm text-[#37A8E0]">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Ready to dive?</h2>

        <div className="mt-6 flex gap-4">
          <a
            href="https://wa.me/639066293634"
            className="rounded-full bg-[#F75F23] px-6 py-3 text-white"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/swakefreedivers_siquijor/"
            className="rounded-full border border-neutral-300 px-6 py-3"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-8 flex justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Swake Diving Center</p>
          <p className="text-[#37A8E0]">Siquijor, Philippines</p>
        </div>
      </footer>

    </div>
  );
}
