import {
  fetchPriceServices,
  type PriceFetchSource,
  type PriceServiceDisplay,
} from "@/lib/price-api";
import { normalizeServiceCode } from "@/lib/normalize-service-code";
import type { PagePriceService } from "@/lib/page-price-service";

export type { PagePriceService } from "@/lib/page-price-service";

type FallbackRow = {
  code: string;
  name: string;
  price: number;
};

export async function loadPagePriceServices(options: {
  codes: string[];
  fallbacks?: FallbackRow[];
}): Promise<{
  services: PagePriceService[];
  source: PriceFetchSource;
  ok: boolean;
}> {
  const result = await fetchPriceServices();
  const byCode = new Map<string, PriceServiceDisplay>();

  for (const row of result.data) {
    const key = normalizeServiceCode(row.serviceCode);
    if (key && !byCode.has(key)) byCode.set(key, row);
  }

  const fallbacksByCode = new Map(
    (options.fallbacks ?? []).map((f) => [normalizeServiceCode(f.code), f])
  );

  const services: PagePriceService[] = options.codes.map((code) => {
    const key = normalizeServiceCode(code);
    const fromApi = byCode.get(key);
    const fb = fallbacksByCode.get(key);

    return {
      code: fromApi?.serviceCode ?? fb?.code ?? code,
      name: fromApi?.serviceName ?? fb?.name ?? "",
      price:
        fromApi?.actualPrice != null
          ? fromApi.actualPrice
          : (fb?.price ?? null),
      serviceId: fromApi?.serviceId,
    };
  });

  return { services, source: result.source, ok: result.ok };
}
