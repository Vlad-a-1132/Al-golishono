/**
 * Нормализует российский номер в формат +7XXXXXXXXXX.
 * Возвращает null для мусора (буквы, слишком короткий номер и т.п.).
 */
export function normalizePhone(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  let digits = trimmed.replace(/\D/g, "");
  if (digits.length === 0) return null;

  if (digits.length === 11 && digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  } else if (digits.length === 10) {
    digits = "7" + digits;
  }

  if (digits.length !== 11 || !digits.startsWith("7")) {
    return null;
  }

  return `+${digits}`;
}
