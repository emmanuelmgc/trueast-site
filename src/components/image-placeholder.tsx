import Image from "next/image";
import { getImagePrompt } from "@/data/imagePrompts";

type ImagePlaceholderProps = {
  imageId: string;
  aspectRatio?: string;
  variant?: "image" | "map";
  className?: string;
};

export function ImagePlaceholder({
  imageId,
  aspectRatio = "4 / 3",
  variant = "image",
  className = ""
}: ImagePlaceholderProps) {
  const image = getImagePrompt(imageId);

  if (image?.src) {
    return (
      <div
        className={"relative overflow-hidden rounded-sm fine-border bg-warm-grey/25 " + className}
        style={{ aspectRatio }}
      >
        <Image
          src={image.src}
          alt={image.altText}
          fill
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const texture = variant === "map" ? "map-texture text-charcoal" : "image-texture text-white";

  return (
    <div
      role="img"
      aria-label={image?.altText ?? "Trueast editorial image placeholder"}
      className={
        "relative overflow-hidden rounded-sm fine-border " + texture + " " + className
      }
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgb(255_255_255/0.22),transparent_16rem)]" />
      <div className="absolute inset-x-5 bottom-5 max-w-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
          Image direction
        </p>
        <p className="mt-2 text-sm leading-6 opacity-90">
          {image?.usage ?? "Editorial travel photography placeholder"}
        </p>
        <p className="mt-3 text-xs opacity-65">
          Suggested ratio: {image?.recommendedAspectRatio ?? aspectRatio}
        </p>
      </div>
    </div>
  );
}
