import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  imageId: string;
};

export function buildMetadata({ title, description, path, imageId }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.shortName,
      type: "website"
    },
    other: {
      "trueast:image-placeholder": imageId
    }
  };
}
