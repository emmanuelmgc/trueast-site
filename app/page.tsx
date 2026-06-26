import { CTASection } from "@/components/cta-section";
import { ExperienceCard } from "@/components/experience-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { JsonLd } from "@/components/json-ld";
import { LinkButton } from "@/components/link-button";
import { SectionIntro } from "@/components/section-intro";
import { TrustStrip } from "@/components/trust-strip";
import { experiences } from "@/data/experiences";
import { homeFaqs } from "@/data/faqs";
import { ctaConfig, siteConfig } from "@/data/site";
import { howItWorksSteps, trustPoints, whyTrueastPoints } from "@/data/trust";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Xi'an, Your First Door to the East",
  description:
    "Trueast curates small-group and private Xi'an cultural tours for first-time visitors, with hotel pickup, ticketing handled, English-speaking guides, and no shopping stops.",
  path: "/",
  imageId: "homepage-hero"
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.shortName,
          url: siteConfig.url,
          description: siteConfig.description
        }}
      />
      <Hero
        title="Xi'an, Your First Door to the East"
        subtitle="Curated small-group and private tours for first-time visitors who want clarity, comfort, and cultural depth - not rushed sightseeing."
        imageId="homepage-hero"
        trustLine={trustPoints.join(" | ")}
        primaryCta={{ label: ctaConfig.secondaryLabel, href: "#experiences" }}
        secondaryCta={{ label: ctaConfig.primaryLabel, href: ctaConfig.contactHref }}
      />
      <TrustStrip points={trustPoints} />

      <section className="section-shell grid gap-10 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-24">
        <div>
          <SectionIntro
            eyebrow="Why start here"
            title="Why start in Xi'an"
            body="Xi'an is where many journeys into China begin: an ancient capital, a Silk Road gateway, and one of the clearest places to start understanding the country's civilisations."
          />
          <p className="mt-6 text-sm leading-7 text-charcoal/68">
            Not sightseeing, but arrival. In practice, that means a first city made easier through clear pickup, English interpretation, passport-based ticketing support, and pacing that leaves room to understand what you are seeing.
          </p>
        </div>
        <ImagePlaceholder imageId="why-xian-first-door" variant="map" />
      </section>

      <section id="experiences" className="bg-parchment-deep/45 py-16 md:py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Core experiences"
            title="Two clear ways to begin"
            body="Start with the essential Terracotta Warriors day, or choose a two-day storyline through empire, city life, and cultural memory."
          />
          <div className="mt-10 grid gap-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <SectionIntro
          eyebrow="Why Trueast"
          title="Thoughtful travel, handled locally"
          body="A quiet beginning to your China journey should still be practical. These are the service promises behind the tone."
        />
        <div className="mt-10">
          <FeatureGrid features={whyTrueastPoints} />
        </div>
      </section>

      <section className="bg-indigo py-16 text-white md:py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="How it works"
            tone="light"
            title="Simple before you arrive"
            body="One journey. One beginning. One East. Xi'an. The next step is deliberately plain: share your dates, and we confirm what matters."
          />
          <div className="mt-10 text-charcoal">
            <HowItWorks steps={howItWorksSteps} />
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 md:grid-cols-[0.82fr_1.18fr] md:py-24">
        <SectionIntro
          eyebrow="Guest concerns"
          title="Questions first-time visitors ask"
          body="Ticketing, passports, pickup, language, and shopping stops should be clear before you choose a tour."
        />
        <FAQAccordion faqs={homeFaqs} />
      </section>

      <section className="bg-parchment-deep/45 py-16 md:py-24">
        <div className="section-shell grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div>
            <SectionIntro
              eyebrow="Before you arrive"
              title="Travel essentials, explained calmly"
              body="Visa-free transit, payments, what to bring, weather, and how ticketing works - written for first-time China visitors, not as an encyclopedia."
            />
            <div className="mt-8">
              <LinkButton href="/travel-essentials" variant="dark">
                Read Travel Essentials
              </LinkButton>
            </div>
          </div>
          <ImagePlaceholder imageId="hotel-pickup-logistics" />
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <div className="rounded-sm fine-border bg-parchment/76 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
            Guest reviews coming soon
          </p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal">What guests value most</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/72">
            What our experience is designed to deliver: on time, clear, knowledgeable, and smoothly handled.
          </p>
        </div>
      </section>

      <CTASection
        dark
        title="Let's make your Xi'an days simple and meaningful"
        body="Tell us your date, group size, and what kind of pace feels right. We reply within 12 hours."
      />
    </>
  );
}

