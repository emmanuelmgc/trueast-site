import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionIntro } from "@/components/section-intro";
import { buildMetadata } from "@/lib/metadata";

const essentials = [
  {
    title: "Visa-free transit note",
    body: "Rules can depend on nationality, route, airport, and onward ticket. Check your current eligibility before travel, and share your route if you want us to flag obvious timing concerns."
  },
  {
    title: "Payment in China",
    body: "International cards are not accepted everywhere. Prepare a mobile payment option where possible, and keep some backup cash for small purchases."
  },
  {
    title: "Passport-based ticketing",
    body: "Major sites often require real-name booking. We collect passport details only after booking, only when needed for tickets and operational confirmation."
  },
  {
    title: "Hotel pickup",
    body: "Central Xi'an pickup is available for core experiences. We confirm the lobby point, pickup window, and contact method before the day."
  },
  {
    title: "Weather and what to wear",
    body: "Wear comfortable shoes and bring layers. Summers can be hot, winters can be dry and cold, and museum days often include standing and walking."
  },
  {
    title: "Walking and accessibility",
    body: "The Terracotta Warriors and city routes involve moderate walking. Tell us about mobility needs early so we can suggest a realistic pace."
  },
  {
    title: "Public holidays and crowds",
    body: "Weekends and Chinese public holidays can be dense. We adjust timing and routes, but we never promise an empty heritage site."
  },
  {
    title: "Language and communication",
    body: "Your guide supports English interpretation and day-of communication. We also keep pre-trip details clear in writing."
  },
  {
    title: "WhatsApp / Email support",
    body: "You can contact us by WhatsApp or email. We aim to reply within 12 hours with the clearest next step."
  },
  {
    title: "Safety and comfort",
    body: "We plan for reliable pickup, reasonable pacing, hydration breaks, and site rules. Tell us if children or older travellers are joining."
  },
  {
    title: "Privacy note",
    body: "Initial enquiries do not ask for passport numbers. Passport information is requested only after booking if required for real-name ticketing."
  }
];

export const metadata = buildMetadata({
  title: "Xi'an Travel Essentials",
  description:
    "Practical Xi'an travel essentials for first-time China visitors: visa-free transit, payments, passport-based ticketing, hotel pickup, weather, walking, crowds, and support.",
  path: "/travel-essentials",
  imageId: "hotel-pickup-logistics"
});

export default function TravelEssentialsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Travel essentials"
        title="Before you arrive in Xi'an"
        subtitle="A calm, practical guide to the details that usually create anxiety for first-time China visitors: tickets, payment, pickup, walking, language, and crowds."
        imageId="hotel-pickup-logistics"
        primaryCta={{ label: "Plan My Trip", href: "/contact" }}
        secondaryCta={{ label: "Read FAQ", href: "/faq" }}
      />
      <Breadcrumbs items={[{ label: "Travel Essentials" }]} />
      <section className="section-shell py-14 md:py-20">
        <SectionIntro
          eyebrow="Handled-for-you basics"
          title="Specific enough to be useful"
          body="This page is not a destination encyclopedia. It covers the operational details that help a first Xi'an visit feel less uncertain."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {essentials.map((item) => (
            <article key={item.title} className="rounded-sm fine-border bg-parchment/76 p-6">
              <h2 className="font-serif text-2xl text-charcoal">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection dark title="Still unsure about a practical detail?" body="Send your dates, hotel area, and what you are worried about. We reply within 12 hours." />
    </>
  );
}
