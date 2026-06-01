import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import UrologGolitsinoClient from "./UrologGolitsinoClient";
import {
  UROLOG_SERVICE_CODES,
  UROLOG_SERVICE_FALLBACKS,
} from "./urolog-price-config";

export const revalidate = 300;

export default async function UrologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...UROLOG_SERVICE_CODES],
    fallbacks: UROLOG_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.053.001"
  );

  return (
    <UrologGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
