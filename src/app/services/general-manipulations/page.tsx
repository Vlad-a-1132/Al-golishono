"use client";

import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function GeneralManipulationsPage() {
  const benefits = [
    {
      title: "Точное воздействие на очаг боли.",
      text: "Лечебные блокады выполняются под контролем и позволяют быстро снять болевой синдром.",
    },
    {
      title: "Безопасность и контроль.",
      text: "Манипуляции проводятся опытными врачами с соблюдением протоколов.",
    },
    {
      title: "Широкий спектр процедур.",
      text: "От инфузионной терапии до различных видов лечебных блокад и экспресс-диагностики.",
    },
    {
      title: "Комфорт для пациента.",
      text: "Процедуры выполняются в условиях медицинского центра с возможностью наблюдения.",
    },
  ];

  const indications = [
    "Острые и хронические боли в спине и суставах",
    "Мигрень и головные боли напряжения",
    "Мышечно-тонический синдром",
    "Острые состояния, требующие инфузионной терапии",
    "Подозрение на аритмию (Холтер)",
    "Контроль артериального давления (СМАД)",
    "Обследование на Helicobacter Pylori",
    "Контроль уровня глюкозы и кетонов крови",
  ];

  const results = [
    "Быстрое обезболивание при блокадах",
    "Снятие мышечного спазма",
    "Коррекция острых состояний инфузией",
    "Объективные данные по ритму сердца и АД",
    "Выявление Helicobacter Pylori",
    "Быстрая оценка глюкозы и кетонов",
    "Основа для дальнейшего лечения",
  ];

  const manipulationServices = [
    {
      category: "Манипуляции общего назначения",
      services: [
        { code: "A02.12.002", name: "Суточное мониторирование артериального давления", price: 3410 },
        { code: "A02.12.002.001", name: "Суточное мониторирование артериального давления /установка/", price: 240 },
        { code: "A05.10.008", name: "Холтеровское мониторирование сердечного ритма суточное", price: 3410 },
        { code: "A05.10.008.001", name: "Холтеровское мониторирование сердечного ритма суточное /установка/", price: 240 },
        { code: "A07.16.006", name: "13С-уреазный дыхательный тест на Helicobacter Pylori", price: 2000 },
        { code: "A11.12.003.01", name: "Внутривенное введение лекарственных препаратов (Интенсивная инфузионная терапия при острых состояниях)", price: 1820 },
        { code: "A11.24.001.001", name: "Введение лекарственных препаратов в область периферического нерва (Лечебная блокада)", price: 2400 },
        { code: "A11.24.001.002", name: "Введение лекарственных препаратов в область периферического нерва (Блокада перикраниальных мышц)", price: 2000 },
        { code: "A11.24.001.003", name: "Введение лекарственных препаратов в область периферического нерва (Блокада грушевидной мышцы)", price: 4800 },
        { code: "A11.24.001.004", name: "Введение лекарственных препаратов в область периферического нерва (Блокада паравертебральной мышцы)", price: 3990 },
        { code: "A11.24.001.005", name: "Введение лекарственных препаратов в область периферического нерва (Периартикулярная блокада)", price: 2660 },
        { code: "A11.24.001.006", name: "Введение лекарственных препаратов в область периферического нерва (Блокада фасеточных суставов)", price: 2270 },
        { code: "A11.24.001.007", name: "Введение лекарственных препаратов в область периферического нерва (Блокада отдельных мышц)", price: 1860 },
        { code: "A09.05.023", name: "Экспресс-диагностика уровня глюкозы/кетонов крови", price: 430 },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Title without banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Манипуляции общего назначения в Голицыно — лечебные блокады и диагностика в медицинском центре Альтамед Голицыно
          </h1>
        </div>
      </section>

      {/* Green info block */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-emerald-500 rounded-[20px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-8 text-white">
                <p className="mb-4">
                  Манипуляции общего назначения — это лечебные и диагностические процедуры, которые проводятся в медицинском центре Альтамед Голицыно: лечебные блокады (перикраниальные, паравертебральные, грушевидной мышцы, фасеточных суставов и др.), интенсивная инфузионная терапия при острых состояниях, суточное мониторирование артериального давления и холтеровское мониторирование ЭКГ, 13С-уреазный дыхательный тест на Helicobacter Pylori, экспресс-диагностика уровня глюкозы и кетонов крови.
                </p>
                <p className="mb-4">
                  Лечебные блокады позволяют быстро снять болевой синдром и мышечный спазм, воздействуя непосредственно на очаг. Инфузионная терапия применяется при острых состояниях по назначению врача. Мониторирование АД и Холтер дают объективную картину работы сердца и уровня давления в течение суток.
                </p>
                <p>
                  Все манипуляции выполняются опытными специалистами с соблюдением стандартов. Записаться на процедуры в Альтамед Голицыно можно через форму на сайте или по телефону.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[240px] md:h-auto">
                <Image
                  src="/images/yslugi/fizio.webp"
                  alt="Манипуляции общего назначения в Альтамед Голицыно"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Преимущества манипуляций общего назначения в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((b, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold mb-1">{b.title}</div>
                  <div className="text-gray-700 text-sm md:text-base">{b.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <div className="font-semibold mb-1">{benefits[3].title}</div>
                <div className="text-gray-700 text-sm md:text-base">{benefits[3].text}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indications and results */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Показания к манипуляциям общего назначения</h3>
              <div className="bg-gray-50 rounded-[20px] p-6">
                <ul className="space-y-3 text-gray-800">
                  {indications.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block w-3 h-3 rounded-full border-2 border-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  Назначение на лечебные блокады, инфузию или диагностические манипуляции даёт врач после осмотра. В Альтамед Голицыно процедуры проводятся по показаниям и с учётом противопоказаний.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Результаты</h3>
              <div className="bg-gray-50 rounded-[20px] p-6">
                <ul className="space-y-3 text-gray-800">
                  {results.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block w-3 h-3 rounded-full border-2 border-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  Лечебные блокады дают быстрый обезболивающий и миорелаксирующий эффект. Мониторирование и тесты предоставляют объективные данные для постановки диагноза и коррекции лечения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Как проводятся манипуляции в Альтамед Голицыно
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              Лечебные блокады выполняются врачом: в зону периферического нерва или мышцы вводится лекарственный препарат (местный анестетик, при необходимости — глюкокортикоид). Это снимает боль и спазм. Вид блокады (перикраниальная, паравертебральная, грушевидной мышцы, фасеточных суставов, периартикулярная и др.) подбирается по клинической картине.
            </p>
            <p className="text-base md:text-lg">
              Инфузионная терапия проводится при острых состояниях по назначению врача; длительность и состав капельницы определяются индивидуально. Суточное мониторирование АД и Холтер предполагают установку прибора на 24 часа с последующей расшифровкой. 13С-уреазный тест и экспресс-диагностика глюкозы/кетонов выполняются в день обращения.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl font-bold mb-4">Подготовка к процедурам в Альтамед Голицыно</h3>
          <div className="text-gray-800 space-y-4">
            <p>
              Для лечебных блокад специальная подготовка обычно не требуется; при необходимости врач предупредит об ограничениях (например, приём антикоагулянтов). Для суточного мониторирования АД и Холтера в день установки не рекомендуется душ (прибор нельзя мочить). Для 13С-уреазного теста на Helicobacter Pylori нужна голодная пауза и отмена некоторых препаратов — точные инструкции даст администратор при записи.
            </p>
            <p>
              Экспресс-диагностика глюкозы/кетонов может проводиться натощак или по указанию врача. Все детали уточняйте при записи в клинику Альтамед Голицыно.
            </p>
          </div>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Виды манипуляций в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Лечебные блокады</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Лечебная блокада</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Блокада перикраниальных мышц</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Блокада грушевидной мышцы</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Блокада паравертебральной мышцы</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Периартикулярная блокада</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Блокада фасеточных суставов</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Блокада отдельных мышц</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Диагностика и инфузии</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Интенсивная инфузионная терапия при острых состояниях</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Суточное мониторирование АД</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Холтеровское мониторирование ЭКГ</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>13С-уреазный дыхательный тест на Helicobacter Pylori</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Экспресс-диагностика уровня глюкозы/кетонов крови</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Цены на манипуляции общего назначения
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Стоимость указана за одну процедуру/исследование и носит информационный характер. Актуальные цены уточняйте у администратора клиники Альтамед Голицыно.
          </p>
          <div className="space-y-6">
            {manipulationServices.map((block, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-emerald-50 px-4 md:px-6 py-3 border-b border-emerald-100">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-900">
                    {block.category}
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {block.services.map((service) => (
                      <div
                        key={service.code}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-100 rounded-xl px-4 py-3 bg-gray-50"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                          <div className="text-sm md:text-base font-medium text-gray-900">
                            {service.name}
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4 text-emerald-700 font-semibold text-base">
                          {service.price.toLocaleString("ru-RU")} ₽
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs md:text-sm text-gray-500">
            Информация о ценах не является публичной офертой. Подробности уточняйте при записи на приём.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Почему выбирают манипуляции общего назначения в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные врачи</h3>
              <p className="text-gray-700">Блокады и инфузии выполняют специалисты с опытом работы</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Широкий спектр</h3>
              <p className="text-gray-700">От лечебных блокад до мониторирования и экспресс-тестов</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Удобная запись</h3>
              <p className="text-gray-700">Записаться на процедуры можно онлайн или по телефону</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
