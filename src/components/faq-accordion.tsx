import type { FAQ } from "@/data/faqs";

type FAQAccordionProps = {
  faqs: readonly FAQ[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-bronze/18 rounded-sm fine-border bg-parchment/72">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5 md:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-charcoal">
            {faq.question}
            <span className="text-2xl font-light text-terracotta transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/72">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
