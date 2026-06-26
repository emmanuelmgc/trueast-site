import { ExperienceDetail } from "@/components/experience-detail";
import { getExperience } from "@/data/experiences";
import { buildMetadata } from "@/lib/metadata";

const experience = getExperience("understand-xian-in-two-days");

export const metadata = buildMetadata({
  title: experience?.seoTitle ?? "Two Days in Xi'an",
  description: experience?.metaDescription ?? "A thoughtfully paced two-day cultural Xi'an tour.",
  path: "/experiences/understand-xian-in-two-days",
  imageId: "night-in-changan"
});

export default function UnderstandXianPage() {
  if (!experience) {
    return null;
  }

  return <ExperienceDetail experience={experience} />;
}
