import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import EndocrinologyGolitsinoClient from "./EndocrinologyGolitsinoClient";
import {
  ENDOCRINOLOGY_SERVICE_CODES,
  ENDOCRINOLOGY_SERVICE_FALLBACKS,
} from "./endocrinology-price-config";

export const revalidate = 300;

export default async function EndocrinologyPage() {
  const { services } = await loadPagePriceServices({
    codes: [...ENDOCRINOLOGY_SERVICE_CODES],
    fallbacks: ENDOCRINOLOGY_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.058.001"
  );

  return (
    <EndocrinologyGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
