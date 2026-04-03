export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  priceLabel: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
};

const contact = {
  phone: "+63 906 629 3634",
  email: "swakefreediver@gmail.com",
  whatsapp: "https://wa.me/63906293634",
  instagram: "https://www.instagram.com/swakefreedivers_siquijor",
  facebook: "https://www.facebook.com/SwakeFreediversSiquijor",
};

export const site = {
  name: "Swake Freedivers Siquijor",
  description:
    "Local, safety-first freediving sessions in Siquijor for first-timers and experienced divers.",
  legalName: "Swake Dive Center",
  baseUrl: "https://www.swakefreedivers.com", // replace only if your real deployed canonical URL is different
  contact,
  contactLinks: [
    { label: "WhatsApp", href: contact.whatsapp },
    { label: "Instagram", href: contact.instagram },
    { label: "Facebook", href: contact.facebook },
    { label: "Email", href: `mailto:${contact.email}` },
  ],
  location: {
    area: "Tubod, San Juan, Siquijor",
    province: "Siquijor, Philippines",
    note: "Meeting point and exact dive site depend on conditions for the day.",
  },
};

export const faqs = [
  {
    question: "Do I need experience to join?",
    answer:
      "No. Intro sessions are designed for first-timers, while training and guided dives are for divers with prior experience.",
  },
  {
    question: "How do you choose dive sites?",
    answer:
      "Sites are selected based on conditions, safety, visibility, currents, and the diver's level.",
  },
  {
    question: "How do I book?",
    answer:
      "Send a message through WhatsApp, Instagram, Facebook, or email to confirm availability and session details.",
  },
];

export const introDetails = {
  audience: [
    "First-timers who want a structured first experience",
    "Travelers looking for a calm, safety-first introduction",
    "Ocean swimmers or snorkelers curious about freediving",
  ],
};

export const fundiveDetails = {
  transportAddOns: [
    "Solo motorbike add-on: ₱700",
    "Group easyride cab add-on: ₱2,500",
    "Environmental fees are separate when applicable",
  ],
};

export const lineTrainingDetails = {
  rates: [
    "Single session: ₱1,500",
    "Package options available depending on goals and schedule",
  ],
};

export const services: ServiceSummary[] = [
  {
    slug: "intro-to-freediving",
    title: "Introduction to Freediving",
    shortTitle: "Intro to Freediving",
    summary:
      "A one-day first-timer experience covering essential theory, breathing practice, and a supervised open-water session.",
    priceLabel: "₱2,500",
    ctaLabel: "View Intro",
    href: "/services/intro-to-freediving",
    image: "/gallery/intro-1.JPG",
    imageAlt: "Intro to freediving session in Siquijor",
  },
  {
    slug: "fundive-with-guide",
    title: "Siquijor Fundive with Guide",
    shortTitle: "Fundive with Guide",
    summary:
      "Guided fundives for guests who already completed an intro class and want to explore up to two sites with local guide.",
    priceLabel: "₱1,500 / pax",
    ctaLabel: "View Fundive",
    href: "/services/fundive-with-guide",
    image: "/gallery/fundive-1.JPG",
    imageAlt: "Guided fundive in Siquijor",
  },
  {
    slug: "line-training",
    title: "Line Training Package",
    shortTitle: "Line Training",
    summary:
      "Technique-focused training with pre-dive planning, supervised line dives, and post-dive feedback for progressing divers.",
    priceLabel: "₱1,500–₱2,500",
    ctaLabel: "View Training",
    href: "/services/line-training",
    image: "/gallery/line-training-1.png",
    imageAlt: "Freediving line training session",
  },
  {
    slug: "courses",
    title: "Molchanovs Certification Courses",
    shortTitle: "Courses",
    summary:
      "Structured Wave 1 and Wave 2 training for divers building a safer foundation, better technique, and more depth comfort.",
    priceLabel: "Wave 1 & Wave 2",
    ctaLabel: "View Courses",
    href: "/services/courses",
    image: "/gallery/intro-1.png",
    imageAlt: "Freediving course session in Siquijor",
  },
];
