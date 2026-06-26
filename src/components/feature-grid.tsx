import { CheckCircle2 } from "lucide-react";

type Feature = {
  title: string;
  body: string;
};

export function FeatureGrid({ features }: { features: readonly Feature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-sm fine-border bg-parchment/70 p-6">
          <CheckCircle2 className="size-5 text-terracotta" aria-hidden="true" />
          <h3 className="mt-5 text-lg font-semibold text-charcoal">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">{feature.body}</p>
        </div>
      ))}
    </div>
  );
}
