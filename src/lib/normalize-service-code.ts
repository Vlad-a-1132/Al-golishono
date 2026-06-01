/** Нормализация кода услуги: кириллица «А»/«В» → латиница, без пробелов. */
export function normalizeServiceCode(code: string | undefined): string {
  if (!code) return "";
  return code
    .trim()
    .toUpperCase()
    .replace(/\u0410/g, "A")
    .replace(/\u0412/g, "B")
    .replace(/\s+/g, "");
}
