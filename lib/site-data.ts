export type ContactLink = {
  label: string;
  href: string;
};

export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  priceLabel: string;
  ctaLabel: string;
  href: string;
};

export type CourseCard = {
  title: string;
  duration: string;
  price: string;
  summary: string;
  requirements: string[];
  highlights: string[];
  note?: string;
};

export const site = {
  name: "Swake Freedivers Siquijor",
  legalName: "Swake Diving Center",
  baseUrl: "https://swakefreedivers.com",
  tagline: "Local, safety-first freediving in Siquijor",
  description:
    "Intro to freediving, line training, guided fundives, and Molchanovs certification courses in Siquijor.",
  location: {
    area: "Brgy. Tubod, San Juan, Siquijor",
    province: "Siquijor, Philippines",
    note: "Dive where the locals dive.",
  },
  contact: {
    phone: "+63 906 629 3634",
    whatsapp: "https://wa.me/639066293634",
    instagram: "https://www.facebook.com/SwakeFreediversSiquijor/",
    facebook: "https://www.facebook.com/SwakeFD",
    email: "swakefreediver@gmail.com",
  },
  trustPoints: [
    "Local instructors and local site knowledge",
    "Safety-first teaching and guiding",
    "Small-group, first-timer-friendly sessions",
    "Conditions-based planning for better comfort in the water",
  ],
  contactLinks: [
    {
      label: "Book on WhatsApp",
      href: "https://wa.me/639066293634",
    },
    {
      label: "Message on Instagram",
      href: "https://www.instagram.com/swakefreedivers_siquijor/",
    },
    {
      label: "Open Facebook",
      href: "https://www.facebook.com/SwakeFreediversSiquijor",
    },
  ] satisfies ContactLink[],
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
  },
];

export const introDetails = {
  title: "Introduction to Freediving in Siquijor",
  schedule: "8:00 AM – 12:00 NN | Weekdays and weekends",
  price: "₱2,500",
  duration: "1-day experience",
  summary:
    "Designed for first-timers who want a calm, guided introduction to freediving before committing to a full certification path.",
  inclusions: [
    "Freediving essentials: basic theory and safety principles (about 1 hour)",
    "Dry training and breathing practice for relaxation and breath-up techniques (about 30 minutes)",
    "Open-water line training with instructor supervision (about 1–2 hours)",
    "A short fun-dive / tryout segment before committing to a full package",
    "Fins and mask rental",
    "Photos and videos",
  ],
  exclusions: [
    "Environmental or cottage fee",
    "Transportation",
  ],
  audience: [
    "First-timers",
    "Guests who want a low-pressure trial session",
    "Travelers curious about freediving in Siquijor",
  ],
};

export const fundiveDetails = {
  title: "Siquijor Fundive with Guide",
  schedule: "8:00 AM – 12:00 NN or 1:00 PM – 5:00 PM | Weekdays and weekends",
  price: "₱1,500 per pax",
  minRequirement: "Minimum requirement: completed an intro class",
  summary:
    "A guided fundive for guests who already have a basic freediving foundation and want a relaxed local dive adventure.",
  inclusions: [
    "Up to 2 dive sites (about 1 hour each)",
    "Photos and videos of your dives",
    "Guiding by certified Molchanovs / AIDA-trained instructors",
  ],
  exclusions: [
    "Environmental fees, if applicable",
    "Gear rental, if needed",
    "Site-to-site transportation",
  ],
  transportAddOns: [
    "₱700 for solo freedivers by motorbike",
    "₱2,500 for groups by easyride cab",
  ],
};

export const lineTrainingDetails = {
  title: "Line Training Package",
  schedule: "9:00 AM – 12:00 NN | Weekdays and weekends",
  rates: [
    "₱1,500 – up to 15 meters",
    "₱2,500 – up to 30 meters",
  ],
  minRequirement:
    "Minimum requirement: at least an intro or discovery class in freediving",
  summary:
    "A structured session for divers working on comfort, technique, equalization, and depth progression with direct feedback.",
  inclusions: [
    "Pre-dive planning and discussion",
    "Guided stretching and warm-up",
    "Safety and rescue protocol review",
    "Open-water session with about 2–3 hours of supervised line dives",
    "Post-dive feedback and debrief",
  ],
  exclusions: [
    "Environmental or cottage fee",
    "Gear rental",
  ],
};

export const courseCards: CourseCard[] = [
  {
    title: "Molchanovs Wave 1",
    duration: "2–3 days",
    price: "Contact us for schedule and rate",
    summary:
      "A beginner course with a strong focus on safety, foundational technique, equalization, and skill development.",
    requirements: [
      "Pool: 1 minute 30 seconds static",
      "Pool: 30m DYNB",
      "Pool: 200m swim",
      "Open water: 12–20m CWTB and FIM",
      "Open water: 6–10m CWTB buddying and rescue",
    ],
    highlights: [
      "Beginner-friendly structured progression",
      "Buddying and rescue foundations",
      "Breathing, relaxation, and equalization work",
    ],
  },
  {
    title: "Molchanovs Wave 2",
    duration: "3–4 days",
    price: "Contact us for schedule and rate",
    summary:
      "An advanced course focused on better technique, deeper comfort, freefall, and stronger pool and open-water performance.",
    requirements: [
      "Pool: 2 minutes 30 seconds static",
      "Pool: 50m DYNB",
      "Pool: 35m DNF",
      "Open-water: 24–30m CWTB and FIM",
      "Open-water: 15m CNF",
      "Open-water: 10–15m buddying and rescue",
    ],
    highlights: [
      "Freefall and deeper open-water technique",
      "Refined Frenzel, training theory, and improved relaxation",
      "Advanced safety, rescue, and depth adaptation",
    ],
    note:
      "Final delivery, pricing for local and international students, and schedule should be confirmed directly.",
  },
];

export const faqs = [
  {
    question: "Do I need experience for the intro session?",
    answer:
      "No. The intro session is built for first-timers and includes theory, breathing practice, and supervised open-water time.",
  },
  {
    question: "Can I join a fundive without an intro class?",
    answer:
      "No. The stated minimum requirement for the fundive is completion of an intro class or equivalent freediving foundation.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring swimwear, a towel, water, sun protection, and any personal gear you prefer to use. Gear rental is not included for line training and fundive unless arranged separately.",
  },
  {
    question: "Are environmental and transportation fees included?",
    answer:
      "No. Environmental or cottage fees and transportation are separate from the listed package prices unless specifically stated.",
  },
  {
    question: "How long is an intro class?",
    answer:
      "Sessions typically last 3-4 hours, including theory, breathing exercises, and in-water session.",
  },
  {
    question: "Where do you usually dive?",
    answer:
      "Swake is based in Tubod, San Juan, and plans sessions according to conditions. Maite, Cangmunag, Dumanhog and other sites may be used depending on the package and the day’s conditions.",
  },
];
