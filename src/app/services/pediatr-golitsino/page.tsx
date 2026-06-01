import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import PediatrGolitsinoClient from "./PediatrGolitsinoClient";
import {
  PEDIATR_SERVICE_CODES,
  PEDIATR_SERVICE_FALLBACKS,
} from "./pediatr-price-config";

export const revalidate = 300;

export default async function PediatrGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...PEDIATR_SERVICE_CODES],
    fallbacks: PEDIATR_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.031.001"
  );

  return (
    <PediatrGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
