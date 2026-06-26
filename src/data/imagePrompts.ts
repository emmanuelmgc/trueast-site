import type { StaticImageData } from "next/image";
import ancientCityWallDusk from "@/assets/trueast/ancient-city-wall-dusk.webp";
import guideInterpretation from "@/assets/trueast/guide-interpretation.webp";
import handmadeTerracottaMemory from "@/assets/trueast/handmade-terracotta-memory.webp";
import homepageHero from "@/assets/trueast/homepage-hero.webp";
import hotelPickupLogistics from "@/assets/trueast/hotel-pickup-logistics.webp";
import journalEditorialCover from "@/assets/trueast/journal-editorial-cover.webp";
import morningMarketRhythm from "@/assets/trueast/morning-market-rhythm.webp";
import nightInChangan from "@/assets/trueast/night-in-changan.webp";
import teaStillness from "@/assets/trueast/tea-stillness.webp";
import terracottaDetail from "@/assets/trueast/terracotta-detail.webp";
import terracottaWarriorsProductHero from "@/assets/trueast/terracotta-warriors-product-hero.webp";
import whyXianFirstDoor from "@/assets/trueast/why-xian-first-door.webp";

export type ImagePrompt = {
  id: string;
  page: string;
  usage: string;
  recommendedAspectRatio: string;
  altText: string;
  imageGenerationPrompt: string;
  negativePrompt: string;
  src?: StaticImageData;
};

export const globalImageStyle =
  "editorial travel photography, quiet luxury, museum-grade clarity, cinematic but restrained, natural light, low saturation, warm parchment and terracotta undertones, calm composition, realistic, high detail, premium cultural travel brand, no overprocessing";

export const globalNegativePrompt =
  "cheap travel agency look, exaggerated HDR, bright red and gold tourist cliche, fake Chinese symbols, random dragons, lantern overload, cosplay feeling, smiling stock-photo tourists staring at camera, tour bus group photo, guide waving flag, souvenir shopping stop, government propaganda style, text, watermark, logo, distorted faces, inaccurate architecture";

export const imagePrompts: ImagePrompt[] = [
  {
    id: "homepage-hero",
    page: "Home",
    usage: "Home hero",
    recommendedAspectRatio: "16:9 or 3:2",
    altText: "Xi'an ancient city wall at blue hour with a calm premium travel atmosphere",
    imageGenerationPrompt:
      "A refined editorial travel photograph of Xi'an ancient city wall at blue hour, quiet warm lights beginning to glow, subtle traces of modern city in the distance, calm atmosphere, no crowds, no exaggerated lanterns, premium cultural travel mood, warm terracotta and deep indigo tones, museum-grade clarity, cinematic but restrained, natural perspective, realistic photography, high detail, sophisticated composition for a luxury cultural travel website",
    negativePrompt:
      "over-saturated HDR, tourist crowds, red-and-gold cliche, dragons, fake symbols, text, logo, watermark, tour bus, shopping group, people posing at camera, government propaganda style",
    src: homepageHero
  },
  {
    id: "why-xian-first-door",
    page: "Home / Why Xi'an",
    usage: "Why Xi'an section",
    recommendedAspectRatio: "4:3",
    altText: "Layered city wall texture and Silk Road-inspired lines suggesting Xi'an as a gateway",
    imageGenerationPrompt:
      "A quiet editorial image suggesting Xi'an as a gateway to Chinese civilisation, layered visual composition with ancient city wall texture, subtle Silk Road map lines, parchment background, terracotta and aged bronze tones, refined museum exhibition aesthetic, minimal and elegant, no literal tourist map clutter, no text, no labels, premium cultural travel design, realistic material textures",
    negativePrompt:
      "busy infographic, cartoon map, bright colors, cheap icons, fake calligraphy, red gold decorations, text, watermark, logo",
    src: whyXianFirstDoor
  },
  {
    id: "terracotta-warriors-product-hero",
    page: "Terracotta Warriors Carefree Tour",
    usage: "Terracotta Warriors tour hero",
    recommendedAspectRatio: "3:2",
    altText: "Terracotta soldier clay details in calm museum light",
    imageGenerationPrompt:
      "A realistic editorial photograph inspired by the Terracotta Warriors museum, close view of terracotta soldier details, clay texture, calm museum light, shallow depth of field, no crowds in foreground, respectful cultural atmosphere, quiet luxury travel photography, warm earth tones, high detail, restrained composition, not dramatic, not staged",
    negativePrompt:
      "fake statues, inaccurate armor, fantasy warriors, tourists taking selfies, crowded tour group, harsh flash, overprocessed HDR, text, watermark, logo",
    src: terracottaWarriorsProductHero
  },
  {
    id: "terracotta-detail",
    page: "Terracotta Warriors Carefree Tour",
    usage: "Product detail module",
    recommendedAspectRatio: "4:3",
    altText: "Close-up of ancient clay texture inspired by the Terracotta Army",
    imageGenerationPrompt:
      "Close-up editorial photograph of ancient clay texture and sculpted facial details inspired by the Terracotta Army, soft museum lighting, earthy terracotta tones, stillness, human hand and history, minimal background, premium cultural travel brand mood, realistic, high detail, calm and respectful",
    negativePrompt:
      "fantasy, cinematic battle scene, fake museum, glossy plastic texture, dramatic smoke, text, watermark, logo",
    src: terracottaDetail
  },
  {
    id: "guide-interpretation",
    page: "Why Trueast / Product trust",
    usage: "Guide interpretation section",
    recommendedAspectRatio: "4:3",
    altText: "A local guide calmly interpreting heritage context for a small private group",
    imageGenerationPrompt:
      "A small private cultural tour moment in Xi'an, an English-speaking local guide calmly explaining history to two or three adult travellers inside a museum-like heritage setting, side profile composition, natural gestures, no one looking directly at camera, refined and documentary style, calm lighting, premium cultural travel, authentic and respectful, no flags, no microphones",
    negativePrompt:
      "large tour group, guide waving flag, headset crowd, cheesy smiling stock photo, staged corporate photo, shopping stop, bus, text, watermark, logo, distorted hands or faces",
    src: guideInterpretation
  },
  {
    id: "hotel-pickup-logistics",
    page: "Trust / Contact",
    usage: "Hotel pickup and smooth logistics",
    recommendedAspectRatio: "4:3",
    altText: "Discreet hotel pickup scene in Xi'an with calm early morning service",
    imageGenerationPrompt:
      "A refined travel logistics scene outside a tasteful city hotel in Xi'an, private vehicle waiting discreetly, a local host greeting travellers calmly, early morning soft light, understated premium service, no luxury exaggeration, no brand logos, quiet and reliable atmosphere, editorial travel photography",
    negativePrompt:
      "limousine cliche, crowded bus, airport chaos, fake luxury, visible hotel brands, text, watermark, logo, over-smiling stock people",
    src: hotelPickupLogistics
  },
  {
    id: "night-in-changan",
    page: "Understand Xi'an in Two Days",
    usage: "Two-day tour night experience module",
    recommendedAspectRatio: "16:9",
    altText: "Xi'an at night with warm architectural lights and a calm indigo sky",
    imageGenerationPrompt:
      "Xi'an at night with warm architectural lights, Bell Tower or ancient city atmosphere suggested without tourist chaos, deep indigo sky, soft golden glow, calm evening mood, refined cultural travel photography, cinematic but restrained, low saturation, premium editorial composition, sense of memory and arrival",
    negativePrompt:
      "festival overload, neon chaos, over-saturated red lanterns, crowds, cosplay, fantasy palace, text, watermark, logo",
    src: nightInChangan
  },
  {
    id: "morning-market-rhythm",
    page: "Home / Two-day tour",
    usage: "Rhythm of the city module",
    recommendedAspectRatio: "4:3",
    altText: "Calm Xi'an morning market with soft light and local breakfast preparation",
    imageGenerationPrompt:
      "A calm morning market scene in Xi'an, steam rising from local breakfast stalls, hands preparing food, soft morning light, documentary editorial style, authentic city life, warm tones, no exoticizing, no messy clutter, no staged smiling tourists, quiet cultural travel mood",
    negativePrompt:
      "dirty street, exaggerated food close-up, shock value, tourist posing, fake market, text, watermark, logo",
    src: morningMarketRhythm
  },
  {
    id: "ancient-city-wall-dusk",
    page: "Understand Xi'an in Two Days",
    usage: "City wall dusk module",
    recommendedAspectRatio: "3:2",
    altText: "Peaceful view along Xi'an ancient city wall at dusk",
    imageGenerationPrompt:
      "A peaceful view along Xi'an ancient city wall at dusk, gentle wind, spacious walkway, subtle silhouettes of a few travellers or cyclists from behind, warm terracotta stone and deepening blue sky, calm premium travel photography, sense of rhythm and space, no crowding",
    negativePrompt:
      "crowded cycling group, bright HDR, cheesy couple pose, lantern overload, text, watermark, logo",
    src: ancientCityWallDusk
  },
  {
    id: "tea-stillness",
    page: "Rhythm of the City",
    usage: "Tea and stillness module",
    recommendedAspectRatio: "4:3",
    altText: "Quiet tea cup still life in warm daylight",
    imageGenerationPrompt:
      "A quiet tea moment in Xi'an, ceramic tea cup on wooden table, soft daylight, subtle Chinese interior details without cliche, warm grey and parchment tones, calm pause between travel experiences, refined editorial still life, premium cultural travel mood",
    negativePrompt:
      "red gold decor, fake oriental props, dragons, over-styled luxury, text, watermark, logo",
    src: teaStillness
  },
  {
    id: "handmade-terracotta-memory",
    page: "Terracotta Warriors Carefree Tour",
    usage: "Optional terracotta craft experience",
    recommendedAspectRatio: "4:3",
    altText: "Hands shaping clay in a calm artisan workshop near Xi'an",
    imageGenerationPrompt:
      "Close-up of hands shaping clay in a calm artisan workshop near Xi'an, earthy terracotta texture, natural window light, authentic craft process, no tourist performance, quiet documentary style, premium cultural experience, warm and tactile",
    negativePrompt:
      "children craft class, messy souvenir shop, fake costume, bright plastic tools, text, watermark, logo",
    src: handmadeTerracottaMemory
  },
  {
    id: "journal-editorial-cover",
    page: "Journal",
    usage: "Journal template cover",
    recommendedAspectRatio: "3:2",
    altText: "Minimal editorial composition for Xi'an cultural travel stories",
    imageGenerationPrompt:
      "Minimal editorial travel composition for Xi'an cultural stories, parchment paper, subtle terracotta texture, aged bronze line, faint architectural shadow, refined museum publication style, calm and elegant, no readable text, no logo",
    negativePrompt:
      "busy collage, bright poster, fake calligraphy, stock icons, red gold cliche, text, watermark, logo",
    src: journalEditorialCover
  }
];

export function getImagePrompt(id: string) {
  return imagePrompts.find((image) => image.id === id);
}
