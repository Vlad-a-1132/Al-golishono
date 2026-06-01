/** Услуги эндокринологии из прейскуранта (А/A, В/B в БД). */
export const ENDOCRINOLOGY_SERVICE_CODES = [
  "B01.058.001",
  "B01.058.001.01",
  "B01.058.003",
  "B04.058.003",
  "B04.058.002",
  "A02.01.001.001",
] as const;

export const ENDOCRINOLOGY_SERVICE_FALLBACKS = [
  { code: "B01.058.001", name: "Прием (осмотр, консультация) врача-эндокринолога", price: 3190 },
  { code: "B01.058.001.01", name: "Прием (осмотр, консультация) врача-эндокринолога", price: 3740 },
  { code: "B01.058.003", name: "Прием (осмотр, консультация) врача - детского эндокринолога", price: 3190 },
  {
    code: "B04.058.003",
    name: "Диспансерный прием (осмотр, консультация) врача-детского эндокринолога",
    price: 1820,
  },
  {
    code: "B04.058.002",
    name: "Профилактический прием (осмотр, консультация) врача-детского эндокринолога",
    price: 2200,
  },
  { code: "A02.01.001.001", name: "Биоимпедансная спектроскопия (БИС)", price: 2200 },
];

export {
  BOOKING_SIDEBAR_IMAGE,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  REG_URL,
} from "@/lib/clinic-contact";

export const HERO_IMAGE = "/images/yslugi/endokrinjlog.webp";
