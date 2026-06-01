/** Услуги онколога (раздел прейскуранта) на странице маммологии. */
export const MAMMOLOGY_SERVICE_CODES = [
  "B01.027.001",
  "B04.027.001",
  "B04.009.001",
] as const;

export const MAMMOLOGY_SERVICE_FALLBACKS = [
  {
    code: "B01.027.001",
    name: "Прием /осмотр ,консультация/ врача- онколога",
    price: 2530,
  },
  {
    code: "B04.027.001",
    name: "Диспансерный прием (осмотр, консультация) врача-онколога",
    price: 1820,
  },
  {
    code: "B04.009.001",
    name: "Диспансерный прием (осмотр, консультация) врача-детского онколога",
    price: 1820,
  },
];

export {
  BOOKING_SIDEBAR_IMAGE,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  REG_URL,
} from "@/lib/clinic-contact";

export const HERO_IMAGE = "/images/images allergoly/mamalogy.webp";
