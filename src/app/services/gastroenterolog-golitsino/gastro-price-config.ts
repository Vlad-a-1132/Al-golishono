/** Коды услуг гастроэнтеролога в прейскуранте (В/B в БД). */
export const GASTRO_SERVICE_CODES = [
  "B01.004.001",
  "B01.004.001.001",
  "B01.004.001.001.01",
  "B04.004.001",
] as const;

export const GASTRO_SERVICE_FALLBACKS = [
  {
    code: "B01.004.001",
    name: "Прием(осмотр, консультация) врача гастроэнтеролога",
    price: 2640,
  },
  {
    code: "B01.004.001.001",
    name: "Прием(осмотр, консультация )детского врача гастроэнтеролога",
    price: 2660,
  },
  {
    code: "B01.004.001.001.01",
    name: "Прием (осмотр, консультация) врача-гастроэнтеролога 60 мин",
    price: 4600,
  },
  {
    code: "B04.004.001",
    name: "Диспансерный прием (осмотр, консультация) врача-гастроэнтеролога",
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
