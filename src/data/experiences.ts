export type Experience = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  subtitle: string;
  summary: string;
  eyebrow: string;
  imageId: string;
  tags: string[];
  href: string;
  primaryCta: string;
  secondaryCta: string;
  bestFor: string[];
  notIdealFor: string[];
  keyFacts: { label: string; value: string }[];
  included: string[];
  notIncluded: string[];
  faqs: { question: string; answer: string }[];
};

export const experiences: Experience[] = [
  {
    slug: "terracotta-warriors-carefree-tour",
    title: "Terracotta Warriors Carefree Tour",
    seoTitle: "Terracotta Warriors Tour from Xi'an | Small Group or Private | Trueast",
    metaDescription:
      "Carefree Terracotta Warriors tours from Xi'an with hotel pickup, passport-based ticketing handled, English-speaking guide, and no shopping stops. Small group or private.",
    subtitle: "Small Group or Private, with Pickup and Ticketing Handled",
    summary:
      "See Xi'an's essential site with clear logistics, thoughtful pacing, and an English-speaking guide who helps you understand more - not just get through it.",
    eyebrow: "4-6 hours / optional full day",
    imageId: "terracotta-warriors-product-hero",
    tags: [
      "4-6 hours / optional full day",
      "Small group or private",
      "Hotel pickup available",
      "Ticketing handled",
      "English-speaking guide",
      "No shopping stops"
    ],
    href: "/experiences/terracotta-warriors-carefree-tour",
    primaryCta: "Check Availability",
    secondaryCta: "Ask About a Private Option",
    bestFor: [
      "First-time visitors to Xi'an",
      "Travellers short on time",
      "Couples, families, and small groups who want smooth logistics",
      "Visitors who value clear English interpretation and no detours"
    ],
    notIdealFor: [
      "Travellers looking for the cheapest large-group bus tour",
      "Visitors who prefer to manage all ticketing and transport by themselves",
      "Guests who want a rushed multi-stop sightseeing marathon"
    ],
    keyFacts: [
      { label: "Format", value: "Small group or private" },
      { label: "Timing", value: "4-6 hours, with optional full day" },
      { label: "Pickup", value: "Hotel pickup available in central Xi'an" },
      { label: "Tickets", value: "Passport-based advance booking handled" }
    ],
    included: [
      "English-speaking guide",
      "Pre-trip confirmation and timing advice",
      "Terracotta Warriors ticketing support after booking",
      "Central Xi'an hotel pickup where available",
      "A route paced around crowds and comfort"
    ],
    notIncluded: [
      "Meals unless confirmed in the final plan",
      "Personal expenses",
      "Hotel rooms or flights",
      "Passport details during initial enquiry"
    ],
    faqs: [
      {
        question: "Do I need to book Terracotta Warriors tickets myself?",
        answer:
          "No. After booking, we handle the passport-based ticketing process and confirm what details are required."
      },
      {
        question: "Can this be private?",
        answer:
          "Yes. Private departures are available for couples, families, and small groups who prefer more control over pace."
      },
      {
        question: "Will there be shopping stops?",
        answer:
          "No. This tour is designed without factory visits, forced shopping, or commission-based detours."
      }
    ]
  },
  {
    slug: "understand-xian-in-two-days",
    title: "Understand Xi'an in Two Days",
    seoTitle: "Two Days in Xi'an | Cultural Small Group or Private Tour | Trueast",
    metaDescription:
      "Understand Xi'an in two days through a thoughtfully paced cultural tour with Terracotta Warriors, city stories, night experiences, and clear local guidance.",
    subtitle: "A small-group or private storyline through empire, city life, and cultural memory",
    summary:
      "Two carefully paced days to connect the Terracotta Warriors, Chang'an's night atmosphere, and the Silk Road city story - so Xi'an feels understood, not just visited.",
    eyebrow: "Two-day cultural route",
    imageId: "night-in-changan",
    tags: [
      "Two carefully paced days",
      "Small group or private",
      "Terracotta Warriors included",
      "City stories and night atmosphere",
      "English-speaking guide",
      "No shopping stops"
    ],
    href: "/experiences/understand-xian-in-two-days",
    primaryCta: "Plan My Two Days in Xi'an",
    secondaryCta: "Ask for Dates & Options",
    bestFor: [
      "First-time visitors who want Xi'an to feel clear, not fragmented",
      "Travellers with two days who dislike rushed city checklists",
      "Couples, families, and friends who value pacing and interpretation",
      "Guests who want a mix of essential sites, city life, and evening atmosphere"
    ],
    notIdealFor: [
      "Travellers trying to visit every possible attraction in two days",
      "Guests who prefer a self-guided trip without local support",
      "Visitors looking for the cheapest large-bus itinerary"
    ],
    keyFacts: [
      { label: "Format", value: "Small group or private" },
      { label: "Pace", value: "Two days, designed around context and comfort" },
      { label: "Storyline", value: "Empire, excavation, city life, and Silk Road memory" },
      { label: "Support", value: "Pickup, ticketing guidance, and clear local communication" }
    ],
    included: [
      "English-speaking guide across the planned route",
      "Pre-trip consultation on pacing and route priorities",
      "Ticketing support for passport-based sites after booking",
      "Pickup planning for central Xi'an hotels",
      "Optional upgrade planning where suitable"
    ],
    notIncluded: [
      "Hotel accommodation unless arranged as an upgrade",
      "Flights or intercity train tickets",
      "Meals and performances unless confirmed",
      "Passport details during initial enquiry"
    ],
    faqs: [
      {
        question: "Is this a fixed checklist tour?",
        answer:
          "No. The route is built as a clear two-day storyline, with room to pace the day around weather, crowds, and your group."
      },
      {
        question: "Can we add a night performance or food stop?",
        answer:
          "Usually yes. We can discuss night performance, local food, or photography-friendly pacing as optional upgrades."
      },
      {
        question: "Do you still handle passport-based ticketing?",
        answer:
          "Yes. For sites that require advance real-name booking, we explain and handle the process after booking."
      }
    ]
  }
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
