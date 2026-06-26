import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionIntro } from "@/components/section-intro";
import { buildMetadata } from "@/lib/metadata";

const reasons = [
  {
    title: "Ancient capital, clear entry point",
    body: "Xi'an gives first-time visitors a readable introduction to empire, archaeology, city walls, and living urban rhythm."
  },
  {
    title: "Silk Road gateway",
    body: "The city helps connect China to wider routes, trade, belief, food, and memory without requiring a long multi-city trip."
  },
  {
    title: "Strong first-arrival logistics",
    body: "With the right local support, pickup, ticketing, language, and pacing can be made simple enough for a first China stop."
  }
];

export const metadata = buildMetadata({
  title: "Why Xi'an",
  description:
    "Why start a first China journey in Xi'an: ancient capital, Silk Road gateway, Terracotta Warriors, city rhythm, and clear first-arrival logistics.",
  path: "/why-xian",
  imageId: "why-xian-first-door"
});

export default function WhyXianPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Why Xi'an"
        title="A clear first door into China"
        subtitle="Xi'an is not only a heritage stop. It is one of the most legible places to begin understanding Chinese civilisation, with the right pacing and interpretation."
        imageId="why-xian-first-door"
        primaryCta={{ label: "Explore Experiences", href: "/experiences" }}
        secondaryCta={{ label: "Plan My Trip", href: "/contact" }}
      />
      <Breadcrumbs items={[{ label: "Why Xi'an" }]} />
      <section className="section-shell grid gap-10 py-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20">
        <div>
          <SectionIntro
            eyebrow="First door to the east"
            title="Not sightseeing, but arrival"
            body="That phrase becomes useful only when it is paired with practical support: English interpretation, hotel pickup, passport-based ticketing, and a route that lets the city make sense."
          />
        </div>
        <ImagePlaceholder imageId="ancient-city-wall-dusk" aspectRatio="3 / 2" />
      </section>
      <section className="bg-parchment-deep/45 py-14 md:py-20">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-sm fine-border bg-parchment/76 p-6">
              <h2 className="font-serif text-3xl text-charcoal">{reason.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/72">{reason.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell grid gap-10 py-14 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
        <ImagePlaceholder imageId="morning-market-rhythm" />
        <div>
          <SectionIntro
            eyebrow="City rhythm"
            title="Xi'an is a city, not just a site"
            body="The Terracotta Warriors may be the headline, but the old city, food rhythms, evening atmosphere, and Silk Road memory make the visit feel connected."
          />
        </div>
      </section>
      <CTASection dark title="Start in Xi'an with the details handled" body="Choose a focused essential day or a two-day storyline built for first-time arrivals." secondaryLabel="View Experiences" secondaryHref="/experiences" />
    </>
  );
}
