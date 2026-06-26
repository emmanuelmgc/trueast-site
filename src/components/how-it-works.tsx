type Step = {
  title: string;
  body: string;
};

export function HowItWorks({ steps }: { steps: readonly Step[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-sm fine-border bg-parchment/72 p-6">
          <span className="font-serif text-4xl text-terracotta">{index + 1}</span>
          <h3 className="mt-5 text-lg font-semibold text-charcoal">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
