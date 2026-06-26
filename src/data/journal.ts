export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  imageId: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "first-time-in-xian-what-to-know",
    title: "First Time in Xi'an: What Actually Helps",
    excerpt:
      "A calm primer on ticketing, pickup, payments, walking, and the small details that make a first Xi'an stay easier.",
    category: "Travel essentials",
    readingTime: "4 min read",
    imageId: "journal-editorial-cover",
    body: [
      "Xi'an is a strong first stop because the essential experiences are clear, but the details still matter: tickets, hotel pickup, payment, crowds, and language can all shape the day.",
      "The best first trip is not the busiest one. A well-paced plan gives you time to understand what you are seeing and leaves enough margin for weather, queues, and meals.",
      "Trueast will expand this story with practical notes once routes, seasonal advice, and guest questions develop further."
    ]
  },
  {
    slug: "terracotta-warriors-how-to-visit",
    title: "Terracotta Warriors: How to Visit Without Rushing",
    excerpt:
      "Why ticketing, timing, and interpretation matter at one of China's busiest heritage sites.",
    category: "Terracotta Warriors",
    readingTime: "5 min read",
    imageId: "terracotta-detail",
    body: [
      "The Terracotta Warriors is not a place to sprint through. The site carries scale, detail, and archaeological context that are easy to miss when the day is reduced to transport and photos.",
      "Advance passport-based booking, a clear pickup plan, and crowd-aware timing remove much of the stress before you arrive at the museum.",
      "This placeholder article will later become a practical guide for first-time visitors comparing private, small-group, and self-guided options."
    ]
  },
  {
    slug: "two-days-in-xian-pace",
    title: "How to Think About Two Days in Xi'an",
    excerpt:
      "A two-day visit works best as a storyline: empire, excavation, city rhythm, and a quieter evening sense of place.",
    category: "Itinerary thinking",
    readingTime: "4 min read",
    imageId: "ancient-city-wall-dusk",
    body: [
      "Two days in Xi'an should not become a race to collect stops. The city makes more sense when the Terracotta Warriors, old city textures, local food, and evening atmosphere are connected.",
      "A good route balances essential history with the living city. It also leaves enough flexibility for public holidays, heat, and different walking speeds.",
      "This editorial template is ready for deeper route writing once Trueast finalizes seasonal product notes."
    ]
  }
];

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
