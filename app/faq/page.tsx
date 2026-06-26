import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { SectionIntro } from "@/components/section-intro";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Xi'an Tour FAQ",
  description:
    "FAQ for Trueast Xi'an tours: passport ticketing, hotel pickup, no shopping stops, private tours, walking, public holidays, WhatsApp, refunds, and first-time visitor support.",
  path: "/faq",
  imageId: "journal-editorial-cover"
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />
      <Hero
        compact
        eyebrow="FAQ"
        title="Clear answers before you book"
        subtitle="Short answers to the questions that matter most: tickets, passport details, pickup, walking, private options, holidays, WhatsApp, and no shopping stops."
        imageId="journal-editorial-cover"
        primaryCta={{ label: "Plan My Trip", href: "/contact" }}
        secondaryCta={{ label: "View Experiences", href: "/experiences" }}
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="section-shell grid gap-10 py-14 md:grid-cols-[0.82fr_1.18fr] md:py-20">
        <SectionIntro
          eyebrow="Practical clarity"
          title="The short version first"
          body="Each answer starts with the reassurance, then gives the operational detail."
        />
        <FAQAccordion faqs={faqs} />
      </section>
      <CTASection dark title="Have a date-specific question?" body="Send your travel dates, group size, and preferred contact method. We reply within 12 hours." />
    </>
  );
}
