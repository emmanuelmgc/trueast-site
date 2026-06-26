import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/data/experiences";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="grid overflow-hidden rounded-sm fine-border bg-parchment/82 shadow-quiet transition hover:-translate-y-1 hover:border-terracotta/45 md:grid-cols-[0.95fr_1.05fr]">
      <ImagePlaceholder imageId={experience.imageId} aspectRatio="4 / 3" className="h-full rounded-none border-0" />
      <div className="flex flex-col p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
          {experience.eyebrow}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal">
          {experience.title}
        </h3>
        <p className="mt-3 text-sm font-semibold text-terracotta">
          {experience.subtitle}
        </p>
        <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/72">
          {experience.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-sm border border-bronze/20 px-3 py-1 text-xs text-charcoal/68">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={experience.href}
          className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold uppercase tracking-[0.08em] text-terracotta"
        >
          View experience <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
