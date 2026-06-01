import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import CardiologyClient from "./CardiologyClient";
import {
  CARDIOLOGY_SERVICE_CODES,
  CARDIOLOGY_SERVICE_FALLBACKS,
} from "./cardiology-price-config";

export const revalidate = 300;

export default async function CardiologyPage() {
  const { services } = await loadPagePriceServices({
    codes: [...CARDIOLOGY_SERVICE_CODES],
    fallbacks: CARDIOLOGY_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.015.001"
  );

  return (
    <CardiologyClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
