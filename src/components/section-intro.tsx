type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "default"
}: SectionIntroProps) {
  const isLight = tone === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={"mb-3 text-sm font-semibold uppercase tracking-[0.16em] " + (isLight ? "text-parchment/62" : "text-terracotta")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={"font-serif text-4xl leading-tight md:text-5xl " + (isLight ? "text-white" : "text-charcoal")}>
        {title}
      </h2>
      {body ? (
        <p className={"mt-5 text-base leading-8 md:text-lg " + (isLight ? "text-parchment/78" : "text-charcoal/72")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
