import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ctaConfig } from "@/data/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-bronze/20 bg-parchment/96 px-4 py-3 shadow-quiet backdrop-blur md:hidden">
      <Link
        href={ctaConfig.contactHref}
        className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-sm bg-terracotta px-4 text-sm font-semibold uppercase tracking-[0.08em] text-white"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        {ctaConfig.primaryLabel}
      </Link>
    </div>
  );
}
