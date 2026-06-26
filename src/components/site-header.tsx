"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ctaConfig, navigation } from "@/data/site";
import { LinkButton } from "@/components/link-button";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bronze/15 bg-parchment/92 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex flex-col rounded-sm">
          <span className="font-serif text-2xl leading-none tracking-normal text-charcoal">
            Trueast
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
            Xi&apos;an, curated
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-medium text-charcoal/78 transition hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href={ctaConfig.contactHref} variant="primary">
            Plan My Trip
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex size-11 items-center justify-center rounded-sm border border-bronze/25 text-charcoal md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-bronze/15 bg-parchment md:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-sm px-2 py-3 text-base font-medium text-charcoal transition hover:bg-parchment-deep/70"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaConfig.contactHref}
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 rounded-sm bg-terracotta px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
            >
              {ctaConfig.primaryLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
