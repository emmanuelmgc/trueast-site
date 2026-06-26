import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/data/experiences";
import { experiences } from "@/data/experiences";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { JsonLd } from "@/components/json-ld";
import { SectionIntro } from "@/components/section-intro";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-7 text-charcoal/72">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceDetail({ experience }: { experience: Experience }) {
  const crossSell = experiences.find((item) => item.slug !== experience.slug);
  const isTerracotta = experience.slug === "terracotta-warriors-carefree-tour";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: experience.title,
          description: experience.metaDescription,
          touristType: "First-time visitors to Xi'an",
          provider: {
            "@type": "TravelAgency",
            name: "Trueast"
          },
          itinerary: experience.tags
        }}
      />
      <Hero
        compact
        eyebrow={experience.eyebrow}
        title={experience.title}
        subtitle={experience.subtitle + ". " + experience.summary}
        imageId={experience.imageId}
        primaryCta={{ label: experience.primaryCta, href: "/contact" }}
        secondaryCta={{ label: experience.secondaryCta, href: "/contact" }}
      />
      <Breadcrumbs
        items={[
          { label: "Experiences", href: "/experiences" },
          { label: experience.title }
        ]}
      />

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.tags.map((tag) => (
            <div key={tag} className="rounded-sm fine-border bg-parchment/72 p-4 text-sm font-semibold text-charcoal">
              {tag}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-parchment-deep/45 py-14 md:py-18">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Key facts"
            title="Clear before you commit"
            body="The point is not to overwhelm you with options. It is to make the day feel handled before it begins."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {experience.keyFacts.map((fact) => (
              <div key={fact.label} className="rounded-sm fine-border bg-parchment/78 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                  {fact.label}
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-charcoal">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-serif text-3xl text-charcoal">Best for</h2>
          <div className="mt-6 rounded-sm fine-border bg-parchment/72 p-6">
            <BulletList items={experience.bestFor} />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-charcoal">Not ideal for</h2>
          <div className="mt-6 rounded-sm fine-border bg-parchment/72 p-6">
            <BulletList items={experience.notIdealFor} />
          </div>
        </div>
      </section>

      {isTerracotta ? <TerracottaSections experience={experience} /> : <TwoDaySections experience={experience} />}

      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            eyebrow="Questions"
            title="FAQ for this experience"
            body="Short answers first, with the operational details that usually matter most."
          />
          <FAQAccordion faqs={experience.faqs} />
        </div>
      </section>

      <CTASection
        dark
        eyebrow="Next step"
        title={isTerracotta ? "Check availability before ticket windows narrow" : "Plan two days that feel connected"}
        body="Send your travel dates, group size, and hotel area if known. We will reply within 12 hours with the clearest next step."
        primaryLabel={experience.primaryCta}
        primaryHref="/contact"
        secondaryLabel={experience.secondaryCta}
        secondaryHref="/contact"
      />

      {crossSell ? (
        <section className="section-shell py-14 md:py-20">
          <div className="rounded-sm fine-border bg-parchment/78 p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
              You may also consider
            </p>
            <h2 className="mt-4 font-serif text-3xl text-charcoal">{crossSell.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/72">{crossSell.summary}</p>
            <Link
              href={crossSell.href}
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold uppercase tracking-[0.08em] text-terracotta"
            >
              View this experience <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}

function TerracottaSections({ experience }: { experience: Experience }) {
  return (
    <>
      <section className="section-shell grid gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20 md:items-center">
        <ImagePlaceholder imageId="terracotta-detail" aspectRatio="4 / 3" />
        <div>
          <SectionIntro
            eyebrow="Options"
            title="Half day or extended day"
            body="Choose the focused version if you want the essential site handled smoothly. Add time if you want a slower lunch, city-wall rhythm, or an optional craft memory."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm fine-border bg-parchment/72 p-5">
              <h3 className="font-semibold text-charcoal">Half-day option</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Best when your Xi&apos;an time is short and you want transport, tickets, and interpretation handled clearly.
              </p>
            </div>
            <div className="rounded-sm fine-border bg-parchment/72 p-5">
              <h3 className="font-semibold text-charcoal">Extended day option</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Adds more breathing room for lunch, city context, or a quieter add-on if your schedule allows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InclusionGrid experience={experience} />
      <OperationalNotes />
    </>
  );
}

function TwoDaySections({ experience }: { experience: Experience }) {
  const upgrades = [
    "Private departure",
    "Museum-focused version",
    "Night performance / food add-on",
    "Photography-friendly pacing",
    "Hotel category / transfer upgrade"
  ];

  return (
    <>
      <section className="section-shell grid gap-8 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20 md:items-center">
        <div>
          <SectionIntro
            eyebrow="Not a checklist"
            title="This is not a rush through as many stops as possible"
            body="It is a well-paced two-day experience designed to help first-time visitors build a meaningful understanding of Xi'an."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm fine-border bg-parchment/72 p-5">
              <h3 className="font-semibold text-charcoal">Day 1: Empire, Excavation, and First Impressions</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Start with the Terracotta Warriors and the wider story of empire, archaeology, and first arrival.
              </p>
            </div>
            <div className="rounded-sm fine-border bg-parchment/72 p-5">
              <h3 className="font-semibold text-charcoal">Day 2: Xi&apos;an as City, Not Just Site</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Connect city rhythm, cultural memory, food or evening atmosphere, and the Silk Road gateway story.
              </p>
            </div>
          </div>
        </div>
        <ImagePlaceholder imageId="ancient-city-wall-dusk" aspectRatio="3 / 2" />
      </section>

      <section className="bg-parchment-deep/45 py-14 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Optional upgrades</h2>
            <div className="mt-6 rounded-sm fine-border bg-parchment/75 p-6">
              <BulletList items={upgrades} />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal">Why it is not rushed</h2>
            <p className="mt-6 rounded-sm fine-border bg-parchment/75 p-6 text-sm leading-7 text-charcoal/72">
              The two-day route is built around a storyline, not a photo checklist. We balance the essential site with city texture, rest, and context so Xi&apos;an feels understood, not just visited.
            </p>
          </div>
        </div>
      </section>

      <InclusionGrid experience={experience} />
      <OperationalNotes />
    </>
  );
}

function InclusionGrid({ experience }: { experience: Experience }) {
  return (
    <section className="bg-parchment-deep/45 py-14 md:py-20">
      <div className="section-shell grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-charcoal">What&apos;s included</h2>
          <div className="mt-6 rounded-sm fine-border bg-parchment/75 p-6">
            <BulletList items={experience.included} />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-charcoal">What&apos;s not included</h2>
          <div className="mt-6 rounded-sm fine-border bg-parchment/75 p-6">
            <BulletList items={experience.notIncluded} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OperationalNotes() {
  const notes = [
    {
      title: "Passport & ticketing note",
      body: "Entry tickets for major sites such as the Terracotta Warriors require advance booking with each visitor's passport details. We handle this process after booking. Your information is used only for ticketing and operational confirmation, and will never be used for unrelated marketing."
    },
    {
      title: "Pickup details",
      body: "Central Xi'an hotel pickup is available for the core experiences. Exact pickup time, lobby point, and vehicle details are confirmed before the day."
    },
    {
      title: "No shopping promise",
      body: "This experience is designed without factory visits, forced shopping stops, or commission-based detours. We focus on the site itself, the story behind it, and a smooth day from start to finish."
    },
    {
      title: "Crowds & holiday notice",
      body: "The Terracotta Warriors and key city sites can be busy on weekends, public holidays, and major travel periods. We help reduce friction through timing, pacing, and route choices, but we do not promise an empty site."
    },
    {
      title: "Cancellation policy",
      body: "Cancellation and date-change terms are confirmed before booking. Once passport-based tickets are submitted, some fees may become non-refundable."
    }
  ];

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="grid gap-4 lg:grid-cols-2">
        {notes.map((note) => (
          <article key={note.title} className="rounded-sm fine-border bg-parchment/72 p-6">
            <h2 className="font-serif text-2xl text-charcoal">{note.title}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/72">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
