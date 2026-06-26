export const siteConfig = {
  name: "Trueast - Xi'an, Your First Door to the East",
  shortName: "Trueast",
  brandLine: "Xi'an, curated for first-time arrivals.",
  description:
    "Curated small-group and private cultural tours in Xi'an with hotel pickup, passport-based ticketing handled, English-speaking guides, and no shopping stops.",
  url: "https://www.trueasttravel.com",
  email: "hello@trueasttravel.com",
  whatsapp: "+86 000 0000 0000",
  whatsappUrl: "https://wa.me/8600000000000",
  wechat: "TrueastTravel"
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Why Trueast", href: "/why-trueast" },
  { label: "Why Xi'an", href: "/why-xian" },
  { label: "Travel Essentials", href: "/travel-essentials" },
  { label: "Journal", href: "/journal" }
] as const;

export const ctaConfig = {
  primaryLabel: "Plan My Xi'an Trip",
  secondaryLabel: "Explore Experiences",
  contactHref: "/contact",
  experiencesHref: "/experiences"
} as const;
