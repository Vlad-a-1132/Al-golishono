import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import DermatologGolitsinoClient from "./DermatologGolitsinoClient";
import {
  DERMATO_SERVICE_CODES,
  DERMATO_SERVICE_FALLBACKS,
} from "./dermatolog-price-config";

export const revalidate = 300;

export default async function DermatologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...DERMATO_SERVICE_CODES],
    fallbacks: DERMATO_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.008.001"
  );

  return (
    <DermatologGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
