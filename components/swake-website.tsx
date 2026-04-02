"use client";

import Image from "next/image";
import { useState, type SVGProps } from "react";
import { Star, MessageCircle, Waves, Shield, Clock, MapPin, Camera } from "lucide-react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-2.74-3.81 4 4 0 0 1 2.74 3.81z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function MessengerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.1 2 11.1c0 2.9 1.5 5.5 3.9 7.3V22l3.3-1.8c.9.3 1.9.5 2.8.5 5.5 0 10-4.1 10-9.1S17.5 2 12 2zm1 12.5-2.6-2.8-5 2.8 5.6-6 2.6 2.8 5-2.8-5.6 6z" />
    </svg>
  );
}

export default function SwakeWebsite() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const reviews = [
    {
      quote: "I've done my first free dive with Swake instructors and it was amazing! They are really nice and professional. I highly recommend this diving center!",
      author: "Romain Torres",
      rating: 5,
    },
    {
      quote: "Swake free diving is the best, especially for a first timer like me. My coach, Jetter, was incredibly patient and really good at guiding beginners. The reef is beautiful vibrant, clear, and absolutely breathtaking underwater. Such an unforgettable experience.",
      author: "Joshua Waban",
      rating: 5,
    },
    {
      quote: "Had so much fun diving with them, they are very accommodating and patient.",
      author: "Allaine Alejo",
      rating: 5,
    },
    {
      quote: "Habe hier eine Freediving Introduction gemacht und würde es jedem empfehlen! Zu jeder Zeit habe ich mich wohl und sicher gefühlt. Jeder ist hier nett und offen, man unterstützt hier locals die ihre Leidenschaft im Freediving gefunden haben. Vielen Dank 🤗",
      author: "Franzi K",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Intro to Freediving",
      price: "From ₱2,500",
      description: "For first-timers and beginners. Learn the basics of breathing, equalization, and your first open water dives — guided step by step.",
      cta: "Book Intro",
      icon: Waves,
      popular: true,
    },
    {
      title: "Fundive with Guide",
      price: "₱1,500 / person",
      description: "Relaxed guided sessions for certified or experienced divers, with site selection based on conditions and optional photo coverage.",
      cta: "Book Fundive",
      icon: Camera,
    },
    {
      title: "Freediving Courses",
      price: "Wave 1 & Wave 2",
      description: "Structured Molchanovs certification focused on building proper foundations — breathing, equalization, safety protocols, and progressive depth development.",
      cta: "View Courses",
      icon: Shield,
    },
    {
      title: "Line Training",
      price: "• ₱1,500 – Up to 15 meters • ₱2,500 – Up to 30 meters",
      description: "Personalized training for certified or returning divers — refine technique, improve depth, and work on specific skills with feedback.",
      cta: "Book Training",
      icon: Clock,
    },
  ];

  const faqs = [
    { q: "Do I need diving experience?", a: "No. Our intro sessions are designed for first-timers and beginners." },
    { q: "Is it safe?", a: "Safety is central to how we teach and guide every session. Our instructors are certified and experienced." },
    { q: "What should I bring?", a: "Swimwear, towel, water, sunscreen, and a relaxed mindset. We&apos;ll provide all the necessary equipment." },
    { q: "How long is an intro class?", a: "Sessions typically last 3-4 hours, including theory, breathing exercises, and in-water session." },
  ];

  const gallery = [
    { src: "/gallery/intro-1.JPG", label: "Intro session", category: "Training" },
    { src: "/gallery/intro-1.png", label: "Beginner coaching", category: "Training" },
    { src: "/gallery/line-training-1.png", label: "Line training", category: "Training" },
    { src: "/gallery/line-training-2.JPG", label: "Depth practice", category: "Training" },
    { src: "/gallery/fundive-1.JPG", label: "Dumanhog reef", category: "Fundives" },
    { src: "/gallery/fundive-2.png", label: "Tulapos marine life", category: "Fundives" },
    { src: "/gallery/fundive-3.png", label: "Tubod sanctuary", category: "Fundives" },
    { src: "/gallery/fundive-4.png", label: "Tulapos beauty", category: "Fundives" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/50 text-slate-900">
      {/* Enhanced background with animated elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(55,168,224,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(247,95,35,0.06),transparent_50%)]" />
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-[#37A8E0]/5 to-[#F75F23]/5 blur-3xl animate-pulse" />
      </div>

      {/* Header with scroll effect */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#37A8E0] to-[#F75F23] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <Image
                src="/Swake-05.png"
                alt="Swake Logo"
                width={44}
                height={44}
                className="relative h-11 w-11 object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Swake Freedivers Siquijor
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#37A8E0]">
                Operated by Swake Diving Center
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {["Services", "Why Swake", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-slate-600 transition-colors hover:text-[#37A8E0] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#37A8E0] after:to-[#F75F23] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[#37A8E0] to-[#F75F23] px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:scale-105 md:block"
          >
            Book Now
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#37A8E0]/30 bg-[#37A8E0]/10 px-4 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#37A8E0] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1f8fca]">
                    Safe • Guided • Local
                  </span>
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Learn freediving in{" "}
                  <span className="bg-gradient-to-r from-[#37A8E0] to-[#F75F23] bg-clip-text text-transparent">
                    Siquijor
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-slate-600 max-w-xl">
                  Safe, guided sessions for beginners and experienced divers — calm, simple, and at your own pace.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#F75F23] to-[#ff8a5c] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Book Intro Session
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/639066293634"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message Us
                  </a>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    { label: "First-time", value: "Introduction class" },
                    { label: "Guided Adventure", value: "Fundives" },
                    { label: "Wave 1 & 2", value: "Courses" },
                    { label: "Personalized", value: "Line Training" },
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-5 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-[#37A8E0]/30 hover:shadow-md"
                    >
                      <p className="text-lg font-bold tracking-tight text-slate-900">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Right Side */}
              <div className="relative">
                <div className="relative">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur transition-all hover:shadow-md">
                      <Waves className="h-8 w-8 text-[#37A8E0] mb-3" />
                      <p className="font-semibold">Calm, unhurried learning</p>
                      <p className="mt-2 text-sm text-slate-600">
                        Focus on comfort, technique, and safe progress
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur transition-all hover:shadow-md">
                      <MapPin className="h-8 w-8 text-[#F75F23] mb-3" />
                      <p className="font-semibold">Siquijor, Philippines</p>
                      <p className="mt-2 text-sm text-slate-600">
                        Local instructors, personalized and conditions-based planning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-8 shadow-sm lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#37A8E0]">
                  Testimonials
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  What divers say
                </h2>
              </div>
              <p className="max-w-xl text-slate-600">
                Real feedback from first-timers, returning students, and visiting divers from around the world.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F75F23] text-[#F75F23]" />
                    ))}
                  </div>
                  
                  <p className="min-h-[112px] text-sm leading-relaxed text-slate-700">
                    “{review.quote}”
                  </p>
                  
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="mt-4 text-sm font-semibold text-slate-900">
                      — {review.author}
                    </p>  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#37A8E0]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              What we offer
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Clear options for first-timers, returning divers, and those who want to train further.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-[#37A8E0] to-[#F75F23] px-3 py-1 text-xs font-semibold text-white shadow-md">
                      Popular
                    </div>
                  )}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                    <Icon className="h-10 w-10 text-[#37A8E0] mb-4" />
                  </div>        
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {service.price}
                  </p>
                  
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#37A8E0] transition-all group-hover:gap-3"
                    >
                      {service.cta}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Swake + Gallery */}
        <section id="why-swake" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50/90 to-white p-6 shadow-sm lg:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                  <Shield className="h-7 w-7 text-[#37A8E0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#37A8E0]">
                    Why Swake
                  </p>
                  <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                    A calm, safety-first approach
                  </h2>
                </div>
              </div>
        
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-600">
                We keep sessions personal, paced, and conditions-aware, with a strong focus on
                technique, comfort, and safety in the water.
              </p>
        
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#37A8E0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
        
            <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#37A8E0]">
                Gallery
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
              </h3>
        
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {gallery.map((item) => (
                  <div
                    key={item.src}
                    onClick={() => setSelectedImage(item.src)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={500}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72 lg:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            
              <p className="mt-4 text-center text-xs text-slate-500">
                Tap or click a photo to enlarge
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#37A8E0]">
                FAQ
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                New to freediving?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                No experience needed. We guide you step by step, with a strong focus on safety, comfort, and proper technique.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white/80 p-6 transition-all hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#37A8E0] transition-colors">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#37A8E0]/10 via-white to-[#F75F23]/10 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#37A8E0]">
                  Book with us
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  Ready to dive?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Whether it&apos;s your first time or you&apos;re coming back to train, we keep things safe, clear, and simple.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/639066293634"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#F75F23] to-[#ff8a5c] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://www.messenger.com/t/115348667850263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#0084FF] hover:text-[#0084FF] hover:bg-white hover:shadow-md"
                  >
                    <MessengerIcon className="h-5 w-5 text-[#0084FF]" />
                    Messenger
                  </a>
                  <a
                    href="https://www.instagram.com/swakefreedivers_siquijor/"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md"
                  >
                    <InstagramIcon className="h-5 w-5" />
                    Instagram
                  </a>
                </div>
              </div>
              
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">Contact Details</h3>
                <div className="mt-6 space-y-5 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#37A8E0]" />
                    <span>Brgy. Tubod, San Juan 6227, Siquijor, Philippines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <InstagramIcon className="mt-0.5 h-4 w-4 text-[#37A8E0]" />
                    <a
                      href="https://www.instagram.com/swakefreedivers_siquijor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#37A8E0]"
                    >
                      @swakefreedivers_siquijor
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <FacebookIcon className="mt-0.5 h-4 w-4 text-[#1877F2]" />
                    <a
                      href="https://www.facebook.com/SwakeFreediversSiquijor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#1877F2]"
                    >
                      Swake Freedivers Siquijor
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-4 w-4 text-[#37A8E0]" />
                    <span>+63 906 629 3634</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-[#37A8E0]" />
                    <span>By schedule and weather conditions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded gallery"
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
            />
      
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Swake Freedivers Siquijor. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#services" className="transition-colors hover:text-[#37A8E0]">
              Services
            </a>
            <a href="#faq" className="transition-colors hover:text-[#37A8E0]">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-[#37A8E0]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
