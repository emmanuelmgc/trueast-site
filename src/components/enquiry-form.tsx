"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { experiences } from "@/data/experiences";

type Status = "idle" | "submitting" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
};

const fieldClass =
  "focus-ring min-h-12 rounded-sm border border-bronze/25 bg-white/45 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/42";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) {
      nextErrors.name = "Please share your name.";
    }

    if (!email) {
      nextErrors.email = "Please share your email.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const payload = Object.fromEntries(form.entries());
    console.log("Trueast enquiry", payload);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-sm fine-border bg-parchment/78 p-5 md:grid-cols-2 md:p-7">
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Name
        <input name="name" autoComplete="name" className={fieldClass} placeholder="Your name" />
        {errors.name ? <span className="text-xs text-muted-red">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Email
        <input name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
        {errors.email ? <span className="text-xs text-muted-red">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        WhatsApp
        <input name="whatsapp" autoComplete="tel" className={fieldClass} placeholder="Country code + number" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Travel dates
        <input name="travelDates" className={fieldClass} placeholder="Exact or approximate dates" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Number of travellers
        <input name="travellers" inputMode="numeric" className={fieldClass} placeholder="2" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Interested in
        <select name="interest" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select an experience
          </option>
          {experiences.map((experience) => (
            <option key={experience.slug} value={experience.title}>
              {experience.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal md:col-span-2">
        Optional note
        <textarea
          name="note"
          rows={5}
          className={fieldClass + " resize-y"}
          placeholder="Hotel area, arrival time, walking comfort, children or older travellers, and anything you want us to know."
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-terracotta px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-muted-red disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="size-4" aria-hidden="true" />
          {status === "submitting" ? "Sending" : "Send Enquiry"}
        </button>
        <div aria-live="polite" className="mt-4 text-sm leading-7">
          {status === "success" ? (
            <p className="text-charcoal">
              Thank you - we&apos;ll review your travel dates and reply within 12 hours with the clearest next step.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-muted-red">Please check the highlighted fields and try again.</p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
