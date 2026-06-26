import Image from "next/image";
import { getImagePrompt } from "@/data/imagePrompts";
import { LinkButton } from "@/components/link-button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageId: string;
  trustLine?: string;
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageId,
  trustLine,
  compact = false
}: HeroProps) {
  const image = getImagePrompt(imageId);

  return (
    <section className="relative overflow-hidden bg-indigo text-white">
      {image?.src ? (
        <Image
          src={image.src}
          alt=""
          fill
          priority={imageId === "homepage-hero"}
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 image-texture" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo/96 via-indigo/78 to-indigo/24" />
      <div className="absolute inset-0 bg-charcoal/10" />
      <div
        className={
          "section-shell relative z-10 flex items-end " +
          (compact ? "min-h-[430px] py-20" : "min-h-[calc(82vh-5rem)] py-20 md:py-24")
        }
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-parchment/72">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-serif text-5xl leading-[1.02] tracking-normal text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/88 md:text-xl">
            {subtitle}
          </p>
          {trustLine ? (
            <p className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.12em] text-parchment/70">
              {trustLine}
            </p>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <LinkButton href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </LinkButton>
              ) : null}
              {secondaryCta ? (
                <LinkButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
