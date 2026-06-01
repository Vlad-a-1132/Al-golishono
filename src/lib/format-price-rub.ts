export function formatPriceRub(price: number | null | undefined): string {
  if (price == null || Number.isNaN(price)) return "—";
  return `${price.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })} ₽`;
}
