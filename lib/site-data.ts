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
