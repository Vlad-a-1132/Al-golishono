import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import OtorinolaringologGolitsinoClient from "./OtorinolaringologGolitsinoClient";
import {
  LOR_SERVICE_CODES,
  LOR_SERVICE_FALLBACKS,
} from "./lor-price-config";

export const revalidate = 300;

export default async function OtorinolaringologGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...LOR_SERVICE_CODES],
    fallbacks: LOR_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.028.001"
  );

  return (
    <OtorinolaringologGolitsinoClient
      services={services}
      priceFrom={primary?.price ?? null}
    />
  );
}
