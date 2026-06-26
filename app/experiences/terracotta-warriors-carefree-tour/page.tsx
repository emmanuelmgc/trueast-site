import { ExperienceDetail } from "@/components/experience-detail";
import { getExperience } from "@/data/experiences";
import { buildMetadata } from "@/lib/metadata";

const experience = getExperience("terracotta-warriors-carefree-tour");

export const metadata = buildMetadata({
  title: experience?.seoTitle ?? "Terracotta Warriors Tour from Xi'an",
  description: experience?.metaDescription ?? "Terracotta Warriors tour from Xi'an with hotel pickup and ticketing handled.",
  path: "/experiences/terracotta-warriors-carefree-tour",
  imageId: "terracotta-warriors-product-hero"
});

export default function TerracottaWarriorsPage() {
  if (!experience) {
    return null;
  }

  return <ExperienceDetail experience={experience} />;
}
