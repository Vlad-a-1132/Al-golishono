/** Ключевые услуги гинекологии из прейскуранта (В/B в БД). */
export const GYNECO_SERVICE_CODES = [
  "B01.001.001",
  "B01.001.001.01",
  "B01.001.004",
  "B04.001.001",
  "B01.070.009",
] as const;

export const GYNECO_SERVICE_FALLBACKS = [
  {
    code: "B01.001.001",
    name: "Прием (осмотр, консультация) врача-акушера-гинеколога",
    price: 2530,
  },
  {
    code: "B01.001.001.01",
    name: "Прием(осмотр,консультация,взрослые,дети)врача-акушера-гинеколога к.м.н",
    price: 2750,
  },
  {
    code: "B01.001.004",
    name: "Прием (осмотр, консультация) врача-акушера-гинеколога беременной",
    price: 2420,
  },
  {
    code: "B04.001.001",
    name: "Диспансерный прием (осмотр, консультация) врача-акушера-гинеколога",
    price: 1820,
  },
  {
    code: "B01.070.009",
    name: "Прием (осмотр, консультация) врача психолога",
    price: 2530,
  },
];

export {
  BOOKING_SIDEBAR_IMAGE,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  REG_URL,
} from "@/lib/clinic-contact";

export const HERO_IMAGE = "/images/images allergoly/ginokologia.webp";
