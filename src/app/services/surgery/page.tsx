import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import SurgeryGolitsinoClient from "./SurgeryGolitsinoClient";
import {
  SURGERY_SERVICE_CODES,
  SURGERY_SERVICE_FALLBACKS,
} from "./surgery-price-config";

export const revalidate = 300;

export default async function SurgeryPage() {
  const { services } = await loadPagePriceServices({
    codes: [...SURGERY_SERVICE_CODES],
    fallbacks: SURGERY_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.057.001"
  );

  return (
    <SurgeryGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
