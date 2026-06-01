/** Услуги кардиологии из прейскуранта (А/A, В/B в БД). */
export const CARDIOLOGY_SERVICE_CODES = [
  "B01.015.001",
  "A05.10.006",
  "A05.10.004",
  "A02.12.002",
  "A09.05.193.001",
  "A12.10.001",
] as const;

export const CARDIOLOGY_SERVICE_FALLBACKS = [
  {
    code: "B01.015.001",
    name: "Прием (осмотр, консультация) врача-кардиолога",
    price: 2750,
  },
  {
    code: "A05.10.006",
    name: "Регистрация электрокардиограммы",
    price: 1160,
  },
  {
    code: "A05.10.004",
    name: "Расшифровка, описание и интерпретация электрокардиографических данных",
    price: 1090,
  },
  {
    code: "A02.12.002",
    name: "Измерение артериального давления на периферических артериях",
    price: 240,
  },
  {
    code: "A09.05.193.001",
    name: "Экспресс-исследование уровня тропонинов I, T в крови",
    price: 1800,
  },
  {
    code: "A12.10.001",
    name: "Электрокардиография с физической нагрузкой (Тредмил-тест)",
    price: 2420,
  },
];

export {
  BOOKING_SIDEBAR_IMAGE,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  REG_URL,
} from "@/lib/clinic-contact";

export const HERO_IMAGE = "/images/images allergoly/kardiolog.webp";
