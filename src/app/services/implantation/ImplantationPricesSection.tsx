import { loadPagePriceServices } from "@/lib/load-page-price-services";
import { formatPriceRub } from "@/lib/format-price-rub";
import {
  IMPLANTATION_SERVICE_CODES,
  IMPLANTATION_SERVICE_FALLBACKS,
} from "./implantation-price-config";

export default async function ImplantationPricesSection() {
  const { services } = await loadPagePriceServices({
    codes: [...IMPLANTATION_SERVICE_CODES],
    fallbacks: IMPLANTATION_SERVICE_FALLBACKS,
  });

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="grid grid-cols-[1fr_auto] bg-slate-100 px-4 py-3 text-sm font-semibold text-gray-800">
        <span>Услуга</span>
        <span>Цена</span>
      </div>
      {services.map((service, index) => (
        <div
          key={`row-${service.code}`}
          className={`grid grid-cols-[1fr_auto] gap-4 border-t border-gray-100 px-4 py-3 text-sm ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50/80"
          }`}
        >
          <div>
            <span className="mb-0.5 block font-mono text-xs text-gray-500">
              {service.code}
            </span>
            <span className="text-gray-800">{service.name}</span>
          </div>
          <span className="whitespace-nowrap font-semibold text-gray-900">
            {formatPriceRub(service.price)}
          </span>
        </div>
      ))}
    </div>
  );
}
