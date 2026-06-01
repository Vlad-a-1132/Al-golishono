import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import TerapevtGolitsinoClient from "./TerapevtGolitsinoClient";
import {
  TERAPEVT_SERVICE_CODES,
  TERAPEVT_SERVICE_FALLBACKS,
} from "./terapevt-price-config";

export const revalidate = 300;

export default async function TerapevtGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...TERAPEVT_SERVICE_CODES],
    fallbacks: TERAPEVT_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.047.001"
  );

  return (
    <TerapevtGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
