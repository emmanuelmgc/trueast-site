import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionIntro } from "@/components/section-intro";
import { journalPosts } from "@/data/journal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Xi'an Journal",
  description:
    "Trueast journal templates for Xi'an cultural travel stories, travel essentials, Terracotta Warriors planning, and two-day itinerary thinking.",
  path: "/journal",
  imageId: "journal-editorial-cover"
});

export default function JournalPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Journal"
        title="Stories for a clearer Xi'an arrival"
        subtitle="A lightweight editorial template for practical cultural travel notes. Three placeholder stories are ready for future expansion."
        imageId="journal-editorial-cover"
        primaryCta={{ label: "Plan My Trip", href: "/contact" }}
        secondaryCta={{ label: "Travel Essentials", href: "/travel-essentials" }}
      />
      <Breadcrumbs items={[{ label: "Journal" }]} />
      <section className="section-shell py-14 md:py-20">
        <SectionIntro
          eyebrow="Editorial template"
          title="Practical stories, not destination noise"
          body="These placeholders set the content shape for future SEO and guest education without pretending to be finished editorial coverage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {journalPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-sm fine-border bg-parchment/76 shadow-quiet">
              <ImagePlaceholder imageId={post.imageId} aspectRatio="3 / 2" className="rounded-none border-0" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                  {post.category} / {post.readingTime}
                </p>
                <h2 className="mt-4 font-serif text-2xl leading-tight text-charcoal">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-charcoal/72">{post.excerpt}</p>
                <Link href={"/journal/" + post.slug} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold uppercase tracking-[0.08em] text-terracotta">
                  Read template <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection dark title="Need answers before the articles are expanded?" body="The enquiry route is already live. Send your travel dates and we will reply within 12 hours." />
    </>
  );
}
