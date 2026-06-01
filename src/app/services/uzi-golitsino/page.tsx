import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import UziGolitsinoClient from "./UziGolitsinoClient";
import { UZI_SERVICE_CODES, UZI_SERVICE_FALLBACKS } from "./uzi-price-config";

export const revalidate = 300;

export default async function UziGolitsinoPage() {
  const { services } = await loadPagePriceServices({
    codes: [...UZI_SERVICE_CODES],
    fallbacks: UZI_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "V01.052.001"
  );

  return (
    <UziGolitsinoClient services={services} priceFrom={primary?.price ?? null} />
  );
}

