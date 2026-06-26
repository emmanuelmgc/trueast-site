import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Trueast"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: siteConfig.shortName,
            url: siteConfig.url,
            description: siteConfig.description,
            areaServed: "Xi'an, China",
            email: siteConfig.email,
            sameAs: [siteConfig.whatsappUrl]
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
