import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import GinekologGolitsinoClient from "./GinekologGolitsinoClient";
import {
  GYNECO_SERVICE_CODES,
  GYNECO_SERVICE_FALLBACKS,
} from "./ginekolog-price-config";

export const revalidate = 300;

export default async function GinekologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...GYNECO_SERVICE_CODES],
    fallbacks: GYNECO_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.001.001"
  );

  const priceFrom = primary?.price ?? null;

  return (
    <GinekologGolitsinoClient services={services} priceFrom={priceFrom} />
  );
}
