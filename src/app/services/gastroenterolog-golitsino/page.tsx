import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import GastroenterologGolitsinoClient from "./GastroenterologGolitsinoClient";
import {
  GASTRO_SERVICE_CODES,
  GASTRO_SERVICE_FALLBACKS,
} from "./gastro-price-config";

export const revalidate = 300;

export default async function GastroenterologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...GASTRO_SERVICE_CODES],
    fallbacks: GASTRO_SERVICE_FALLBACKS,
  });

  const prices = services
    .map((s) => s.price)
    .filter((p): p is number => p != null && !Number.isNaN(p));

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.004.001"
  );

  const priceFrom =
    primary?.price ?? (prices.length > 0 ? Math.min(...prices) : null);

  return (
    <GastroenterologGolitsinoClient
      services={services}
      priceFrom={priceFrom}
    />
  );
}
