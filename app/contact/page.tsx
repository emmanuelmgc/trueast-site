import { Mail, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryForm } from "@/components/enquiry-form";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { SectionIntro } from "@/components/section-intro";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Trueast",
  description:
    "Enquire about Trueast Xi'an small-group or private tours. Contact by email, WhatsApp, or WeChat. Replies within 12 hours.",
  path: "/contact",
  imageId: "hotel-pickup-logistics"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Trueast",
          url: siteConfig.url + "/contact",
          description: "Enquire about Trueast Xi'an cultural tours.",
          mainEntity: {
            "@type": "TravelAgency",
            name: siteConfig.shortName,
            email: siteConfig.email
          }
        }}
      />
      <Hero
        compact
        eyebrow="Contact / Enquire"
        title="Plan your Xi'an days with a clear next step"
        subtitle="Share your travel dates, group size, and what kind of pace feels right. We reply within 12 hours. Passport details are not collected at initial enquiry."
        imageId="hotel-pickup-logistics"
        primaryCta={{ label: "Send Enquiry", href: "#enquiry" }}
        secondaryCta={{ label: "View FAQ", href: "/faq" }}
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section id="enquiry" className="section-shell grid gap-10 py-14 md:grid-cols-[0.78fr_1.22fr] md:py-20">
        <div>
          <SectionIntro
            eyebrow="Replies within 12 hours"
            title="Tell us the basics"
            body="Name, email, WhatsApp, dates, traveller count, interested experience, and an optional note are enough for the first step. Passport numbers belong only after booking, if needed for ticketing."
          />
          <div className="mt-8 grid gap-4 text-sm text-charcoal/74">
            <a href={"mailto:" + siteConfig.email} className="flex items-center gap-3 rounded-sm fine-border bg-parchment/70 p-4 transition hover:border-terracotta/45">
              <Mail className="size-5 text-terracotta" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a href={siteConfig.whatsappUrl} className="flex items-center gap-3 rounded-sm fine-border bg-parchment/70 p-4 transition hover:border-terracotta/45">
              <MessageCircle className="size-5 text-terracotta" aria-hidden="true" />
              WhatsApp: {siteConfig.whatsapp}
            </a>
            <div className="rounded-sm fine-border bg-parchment/70 p-4">
              WeChat as secondary: {siteConfig.wechat}
            </div>
          </div>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
