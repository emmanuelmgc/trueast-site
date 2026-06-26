import { LinkButton } from "@/components/link-button";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel = "Plan My Xi'an Trip",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  dark = false
}: CTASectionProps) {
  return (
    <section className={dark ? "bg-indigo text-white" : "bg-parchment-deep/55 text-charcoal"}>
      <div className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className={"mb-3 text-sm font-semibold uppercase tracking-[0.16em] " + (dark ? "text-parchment/60" : "text-terracotta")}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
          {body ? (
            <p className={"mt-5 text-base leading-8 md:text-lg " + (dark ? "text-parchment/78" : "text-charcoal/72")}>
              {body}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={primaryHref} variant={dark ? "primary" : "dark"}>
              {primaryLabel}
            </LinkButton>
            {secondaryLabel && secondaryHref ? (
              <LinkButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
