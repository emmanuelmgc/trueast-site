import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { ExperienceCard } from "@/components/experience-card";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { SectionIntro } from "@/components/section-intro";
import { experiences } from "@/data/experiences";
import { whyTrueastPoints } from "@/data/trust";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Xi'an Experiences",
  description:
    "Explore Trueast small-group and private Xi'an cultural tours, including Terracotta Warriors and a two-day Xi'an itinerary with clear logistics and no shopping stops.",
  path: "/experiences",
  imageId: "guide-interpretation"
});

export default function ExperiencesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Experiences"
        title="Xi'an cultural tours, handled clearly"
        subtitle="Choose a focused Terracotta Warriors day or a two-day storyline through empire, city life, and cultural memory. Both are designed for first-time visitors who want clear English support and no shopping detours."
        imageId="guide-interpretation"
        primaryCta={{ label: "Plan My Trip", href: "/contact" }}
        secondaryCta={{ label: "Compare Experiences", href: "#compare" }}
      />
      <Breadcrumbs items={[{ label: "Experiences" }]} />
      <section id="compare" className="section-shell py-12 md:py-18">
        <SectionIntro
          eyebrow="MVP experiences"
          title="Two routes with a clear first step"
          body="No long menu of confusing packages. These two routes cover the most common first Xi'an needs."
        />
        <div className="mt-10 grid gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </section>
      <section className="bg-parchment-deep/45 py-14 md:py-20">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Shared promise"
            title="What stays consistent"
            body="Whether you choose a single essential site or two connected days, the service standard is calm, clear, and locally handled."
          />
          <div className="mt-10">
            <FeatureGrid features={whyTrueastPoints} />
          </div>
        </div>
      </section>
      <CTASection
        dark
        title="Not sure which experience fits your dates?"
        body="Share your arrival date, departure date, and group size. We will suggest the simplest route within 12 hours."
      />
    </>
  );
}
