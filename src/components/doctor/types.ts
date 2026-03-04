export interface DoctorCore {
  slug: string;
  clinicName: string;
  fullName: string;
  specialization: string;
  tagline: string;
  experienceYears: number;
  rating: number;
  photoSrc: string;
  chips: { label: string; color: "cyan" | "mint" | "gray" }[];
  ctas: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  trustBadges: { label: string; short?: string }[];
}

export interface DirectionData {
  id: string;
  shortTitle: string;
  subtitle?: string;
  title: string;
  description: string;
  badges?: { label: string }[];
  indications: string[];
  whatYouGet: string[];
  steps: { title: string; text: string }[];
  safety: string[];
  faq: { q: string; a: string }[];
  cta: { primaryLabel: string; primaryHref: string };
  priceBlock?: { from?: string; note?: string };
  priceItems?: { code?: string; name: string; price: string }[];
  priceBlockIntro?: string;
  priceBlockOutro?: string;
  imageDesktop?: string;
  imageMobile?: string;
  detailsImage?: string;
}

export interface PageDataBundle {
  doctor: DoctorCore;
  directions: DirectionData[];
  cases: Array<{ id: string; directionId: string; title: string; tag?: string }>;
  reviews: Array<{ id: string; directionId?: string; name: string; rating: number; text: string }>;
  faq: Array<{ id: string; q: string; a: string }>;
  priceCta: { label: string; href: string };
  reviewsSource?: { url: string; label: string };
  reviewsSources?: { url: string; label: string }[];
  directionPageBasePath?: string;
}
