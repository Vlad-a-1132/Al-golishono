import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import OftalmologGolitsinoClient from "./OftalmologGolitsinoClient";
import {
  OFTALMOLOG_SERVICE_CODES,
  OFTALMOLOG_SERVICE_FALLBACKS,
} from "./oftalmolog-price-config";

export const revalidate = 300;

export default async function OftalmologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...OFTALMOLOG_SERVICE_CODES],
    fallbacks: OFTALMOLOG_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.029.001"
  );

  return (
    <OftalmologGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
