export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Mount Teide volcanic landscape — gateway experiences from Santa Cruz cruise port",
  ),
  ogDefault: img(
    "og-default",
    "Santa Cruz de Tenerife harbour and Atlantic waterfront — Santa Cruz Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Santa Cruz Shore Excursions",
  },
  port: img("cruise-port", "Santa Cruz cruise port waterfront — gateway to Tenerife"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Santa Cruz and La Laguna historic streets for cruise visitors"),
  coast: img("coastal", "Tenerife Atlantic coastline and volcanic scenery"),
  coastal: img("coastal", "Tenerife Atlantic coastline and volcanic scenery"),
  walking: img("walking", "Walking Santa Cruz old town and waterfront from the cruise terminal"),
  food: img("food-and-wine", "Canarian food, markets and café culture in Santa Cruz"),
  "food-and-wine": img("food-and-wine", "Canarian food, markets and café culture in Santa Cruz"),
  private: img("private", "Private Tenerife shore excursion from Santa Cruz"),
  photography: img("photography", "Photography viewpoints — Teide, Auditorio and Anaga"),
  wine: img("food-and-wine", "Canarian dining and island flavours"),
  compare: img("compare", "Comparing Santa Cruz shore excursion options"),
  port: img("cruise-port", "Santa Cruz cruise passenger terminal area"),
  highlights: img("historic", "Santa Cruz and Tenerife highlights for cruise visitors"),
  city: img("historic", "Santa Cruz city centre from the cruise port"),
  nature: img("nature", "Mount Teide National Park volcanic landscapes"),
  family: img("family", "Family-friendly Tenerife day ashore from Santa Cruz"),
  "hero-home": img("hero", "Volcanic Tenerife — the gateway from Santa Cruz cruise port"),
  "mount-teide": img("mount-teide", "Mount Teide — Spain’s highest peak from a Santa Cruz cruise day"),
  "las-canadas": img("las-canadas", "Las Cañadas del Teide volcanic caldera"),
  "la-laguna": img("la-laguna", "UNESCO La Laguna colonial streets"),
  "anaga": img("anaga", "Anaga Rural Park laurisilva forest"),
  "anaga-rural-park": img("anaga", "Anaga Rural Park laurisilva forest"),
  "auditorio": img("auditorio", "Auditorio de Tenerife on the Santa Cruz waterfront"),
  "auditorio-de-tenerife": img("auditorio", "Auditorio de Tenerife on the Santa Cruz waterfront"),
  "plaza-espana": img("plaza-espana", "Plaza de España in Santa Cruz de Tenerife"),
  "plaza-de-espana": img("plaza-espana", "Plaza de España in Santa Cruz de Tenerife"),
  "mercado-africa": img("mercado-africa", "Mercado de Nuestra Señora de África in Santa Cruz"),
  "mercado-nuestra-senora-de-africa": img(
    "mercado-africa",
    "Mercado de Nuestra Señora de África in Santa Cruz",
  ),
  "santa-cruz-waterfront": img("santa-cruz-waterfront", "Santa Cruz de Tenerife Atlantic waterfront"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "tenerife-total-experience": "mount-teide",
  "best-of-tenerife": "la-laguna",
  "secrets-of-north-tenerife": "anaga",
  "hiking-montes-de-anaga": "anaga",
  "round-island-trip": "coast",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("nature");

const highlightImageKeys: Record<string, string> = {
  "mount-teide": "nature",
  "la-laguna": "historic",
  "anaga-rural-park": "nature",
  "auditorio-de-tenerife": "coast",
  "plaza-de-espana": "historic",
  "mercado-nuestra-senora-de-africa": "food",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "city-or-teide": "nature",
  "best-shore-excursions": "highlights",
  "first-time-tenerife-day": "historic",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  nature: "nature",
  photography: "photography",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
