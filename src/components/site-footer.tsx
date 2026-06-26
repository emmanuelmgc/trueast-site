import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-indigo text-parchment">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl">Trueast</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-parchment/78">
            {siteConfig.brandLine} Small-group and private cultural tours with clear logistics, thoughtful pacing, and no shopping detours.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-parchment/58">
            Navigate
          </p>
          <div className="mt-4 grid gap-3 text-sm text-parchment/78">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-parchment/58">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-parchment/78">
            <a href={"mailto:" + siteConfig.email} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="size-4" aria-hidden="true" /> {siteConfig.email}
            </a>
            <a href={siteConfig.whatsappUrl} className="inline-flex items-center gap-2 transition hover:text-white">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
            <span>WeChat: {siteConfig.wechat}</span>
            <span>Replies within 12 hours.</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-xs text-parchment/58">
          No shopping stops. Passport details are collected only after booking when required for real-name ticketing.
        </div>
      </div>
    </footer>
  );
}
