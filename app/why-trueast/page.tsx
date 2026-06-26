import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionIntro } from "@/components/section-intro";
import { whyTrueastPoints } from "@/data/trust";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Why Trueast",
  description:
    "Why choose Trueast for Xi'an: clear logistics, thoughtful pacing, local English interpretation, no shopping detours, and first-time visitor support.",
  path: "/why-trueast",
  imageId: "guide-interpretation"
});

export default function WhyTrueastPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Why Trueast"
        title="Thoughtful travel, handled locally"
        subtitle="Trueast is built for travellers who want Xi'an to feel clear, calm, and meaningful from the first message to the final pickup."
        imageId="guide-interpretation"
        primaryCta={{ label: "Plan My Xi'an Trip", href: "/contact" }}
        secondaryCta={{ label: "View Experiences", href: "/experiences" }}
      />
      <Breadcrumbs items={[{ label: "Why Trueast" }]} />
      <section className="section-shell grid gap-10 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
        <div>
          <SectionIntro
            eyebrow="Positioning"
            title="Not cheap OTA. Not a government portal. Not vague luxury."
            body="Trueast is a practical cultural travel brand for first arrivals: quiet in tone, precise in service, and honest about logistics."
          />
          <p className="mt-6 text-sm leading-7 text-charcoal/70">
            Every poetic expression has to land in a service promise: pickup, ticketing support, English interpretation, crowd-aware timing, and no shopping detours.
          </p>
        </div>
        <ImagePlaceholder imageId="hotel-pickup-logistics" />
      </section>
      <section className="bg-parchment-deep/45 py-14 md:py-20">
        <div className="section-shell">
          <FeatureGrid features={whyTrueastPoints} />
        </div>
      </section>
      <section className="section-shell grid gap-8 py-14 md:grid-cols-3 md:py-20">
        {[
          ["Handled", "We reduce uncertainty around pickup, passports, ticketing, and timing."],
          ["Interpreted", "We make the story understandable in English, without turning it into a lecture."],
          ["Well-paced", "We protect the day from rushed sightseeing and unnecessary detours."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-sm fine-border bg-parchment/72 p-6">
            <h2 className="font-serif text-3xl text-charcoal">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/72">{body}</p>
          </article>
        ))}
      </section>
      <CTASection dark title="A quiet beginning still needs clear handling" body="Tell us your dates and what matters most. We reply within 12 hours." />
    </>
  );
}
