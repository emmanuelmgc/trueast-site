import { CheckCircle2 } from "lucide-react";

type TrustStripProps = {
  points: readonly string[];
};

export function TrustStrip({ points }: TrustStripProps) {
  return (
    <section className="border-y border-bronze/15 bg-parchment-deep/55">
      <div className="section-shell grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point} className="flex items-center gap-3 text-sm font-semibold text-charcoal">
            <CheckCircle2 className="size-4 shrink-0 text-terracotta" aria-hidden="true" />
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
