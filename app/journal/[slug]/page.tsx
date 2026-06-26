import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { journalPosts, getJournalPost } from "@/data/journal";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);

  return buildMetadata({
    title: post?.title ?? "Xi'an Journal",
    description: post?.excerpt ?? "Trueast Xi'an cultural travel story.",
    path: post ? "/journal/" + post.slug : "/journal",
    imageId: post?.imageId ?? "journal-editorial-cover"
  });
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Hero
        compact
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        imageId={post.imageId}
        primaryCta={{ label: "Plan My Trip", href: "/contact" }}
        secondaryCta={{ label: "Back to Journal", href: "/journal" }}
      />
      <Breadcrumbs items={[{ label: "Journal", href: "/journal" }, { label: post.title }]} />
      <article className="section-shell grid gap-10 py-14 md:grid-cols-[0.72fr_1.28fr] md:py-20">
        <aside>
          <ImagePlaceholder imageId={post.imageId} aspectRatio="3 / 2" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
            Placeholder article / {post.readingTime}
          </p>
        </aside>
        <div className="max-w-3xl">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-lg leading-9 text-charcoal/76">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <CTASection dark title="Use the practical route now" body="Journal content will grow, but the enquiry path is ready. Share your dates and receive a clear next step within 12 hours." />
    </>
  );
}
