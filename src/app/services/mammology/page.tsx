import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import MammologyClient from "./MammologyClient";
import {
  MAMMOLOGY_SERVICE_CODES,
  MAMMOLOGY_SERVICE_FALLBACKS,
} from "./mammology-price-config";

export const revalidate = 300;

export default async function MammologyPage() {
  const { services } = await loadPagePriceServices({
    codes: [...MAMMOLOGY_SERVICE_CODES],
    fallbacks: MAMMOLOGY_SERVICE_FALLBACKS,
  });

  const primary = services.find(
    (s) => normalizeServiceCode(s.code) === "B01.027.001"
  );

  return (
    <MammologyClient services={services} priceFrom={primary?.price ?? null} />
  );
}
