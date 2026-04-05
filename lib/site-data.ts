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

export type CourseCard = {
  title: string;
  duration: string;
  price: string;
  summary: string;
  requirements: string[];
  highlights: string[];
  note?: string;
};

export type IntroDetails = {
  title: string;
  duration: string;
  schedule: string;
  price: string;
  summary: string;
  audience: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
};

export type FundiveDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  inclusions: string[];
  exclusions: string[];
  transportAddOns: string[];
  notes: string[];
};

export type LineTrainingDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  rates: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
};

const contact = {
  phone: "+63 906 629 3634",
  email: "swakefreediver@gmail.com",
  whatsapp: "https://api.whatsapp.com/send?phone=639066293634",
  instagram: "https://www.instagram.com/direct/t/17842367781054987/",
  facebook: "https://www.messenger.com/t/115348667850263r",
};

export const site = {
  name: "Swake Freedivers Siquijor",
  description:
    "Local, safety-first freediving sessions in Siquijor for first-timers and experienced divers.",
  legalName: "Swake Diving Center",
  baseUrl: "https://swakefreedivers.com",
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
  trustPoints: [
    "Local, safety-first instruction based in Siquijor.",
    "Sessions are planned around actual sea conditions and diver level.",
    "Suitable for first-timers, returning divers, and progressing students.",
    "Progression is kept steady and not rushed.",
  ],
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
      "Guided fundives for guests who already completed an intro class and want to explore up to two sites with local guidance.",
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

export const courseCards: CourseCard[] = [
  {
    title: "Molchanovs Wave 1",
    duration: "2–3 days",
    price: "Contact for current rate",
    summary:
      "Entry-level certification focused on safety, equalization, open-water technique, and a stable foundation.",
    requirements: [
      "Comfortable in the water",
      "Able to swim confidently",
      "Suitable for beginners and early-stage divers",
    ],
    highlights: [
      "Breathing and relaxation basics",
      "Equalization foundations",
      "Static, dynamic, and depth sessions",
      "Safety procedures and buddy work",
    ],
    note:
      "Exact structure depends on conditions, student pace, and certification standards.",
  },
  {
    title: "Molchanovs Wave 2",
    duration: "3 days",
    price: "Contact for current rate",
    summary:
      "Progressive course for divers ready to refine technique, improve efficiency, and build deeper confidence.",
    requirements: [
      "Wave 1 or equivalent certification",
      "Comfort with previous depth training",
      "Good equalization control",
    ],
    highlights: [
      "Advanced technique refinement",
      "Rescue and safety progression",
      "Depth-specific coaching",
      "Structured performance feedback",
    ],
    note:
      "Best suited to divers who already have a solid foundation and want guided progression.",
  },
];

export const introDetails: IntroDetails = {
  title: "Intro to Freediving",
  duration: "Half day",
  schedule: "8AM - 12NN | Weekdays and weekends - prior arrangement",
  price: "₱2,500",
  summary:
    "A first-timer session focused on comfort in the water, basic theory, breathing, safety, and a supervised open-water experience.",
  audience: [
    "First-timers who want a proper introduction",
    "Travelers curious about freediving in Siquijor",
    "Beginners who prefer a calm, safety-first approach",
  ],
  inclusions: [
    "Introductory theory session",
    "Breathing and basic relaxation techniques",
    "Open-water practice",
    "Photos and videos when conditions allow",
  ],
  exclusions: [
    "Environmental or cottage fees",
    "Site-to-site transport",
  ],
  notes: [
    "Session structure depends on sea conditions and student pace.",
    "Message first to confirm schedule and inclusions.",
  ],
};

export const fundiveDetails: FundiveDetails = {
  title: "Siquijor Fundive with Guide",
  price: "₱1,500 per person",
  summary:
    "A guided fundive session for divers with prior intro-level experience who want local support and condition-based site planning.",
  schedule: "8:00 AM–12:00 NN or 1:00 PM–5:00 PM",
  minRequirement: "Intro to Freediving or equivalent experience required",
  inclusions: [
    "Guided session with certified instructor",
    "Up to two dive sites",
    "Around one hour per site",
    "Photos and videos",
  ],
  exclusions: [
    "Environmental fees",
    "Gear rental",
    "Site-to-site transport",
  ],
  transportAddOns: [
    "Solo motorbike transport: +₱700",
    "Group easyride/cab transport: +₱2,500",
  ],
  notes: [
    "Each session is planned based on actual conditions on the day.",
    "Typical session windows are 8:00 AM–12:00 NN or 1:00 PM–5:00 PM.",
    "Site choice depends on current, visibility, monsoon, tide, and traffic.",
  ],
};

export const lineTrainingDetails: LineTrainingDetails = {
  title: "Line Training",
  price: "₱1,500–₱2,500",
  summary:
    "A coached line-training session for divers working on comfort, technique, efficiency, and depth progression.",
  schedule: "9:00 AM – 12:00 NN | Weekdays and weekends - prior arrangement",
  minRequirement: "Previous freediving experience required",
  rates: [
    "Solo or private coaching: contact for current rate",
    "Small group setup: contact for current rate",
  ],
  inclusions: [
    "Pre-session briefing and dive plan",
    "Condition-based site selection",
    "Supervised line dives",
    "Technique feedback after rounds",
  ],
   exclusions: [
    "Environmental or cottage fees",
    "Gear rental",
    "Transport",
  ],
  notes: [
    "Best for divers with previous freediving experience.",
    "Final setup depends on conditions and diver level.",
  ],
};
