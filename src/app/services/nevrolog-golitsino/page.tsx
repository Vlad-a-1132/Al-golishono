import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import NevrologGolitsinoClient from "./NevrologGolitsinoClient";
import {
  NEVROLOG_SERVICE_CODES,
  NEVROLOG_SERVICE_FALLBACKS,
} from "./nevrolog-price-config";

export const revalidate = 300;

export default async function NevrologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...NEVROLOG_SERVICE_CODES],
    fallbacks: NEVROLOG_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.023.001"
  );

  return (
    <NevrologGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
