"use client";

import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function FunctionalDiagnosticsPage() {
  const benefits = [
    {
      title: "Безопасность методов.",
      text: "Исследования неинвазивны и не несут лучевой нагрузки (кроме отдельных видов).",
    },
    {
      title: "Безболезненность.",
      text: "Процедуры комфортны для пациента и не требуют анестезии.",
    },
    {
      title: "Высокая информативность.",
      text: "Позволяют оценить функцию органов в покое и при нагрузке.",
    },
    {
      title: "Контроль эффективности лечения.",
      text: "Повторные исследования дают объективную динамику состояния.",
    },
  ];

  const indications = [
    "Жалобы на боли в сердце",
    "Перебои в работе сердца",
    "Одышка при физической нагрузке",
    "Головокружения и обмороки",
    "Повышенное артериальное давление",
    "Нарушения ритма",
    "Подготовка к операции",
    "Контроль эффективности лечения",
    "Профилактические осмотры",
    "Нарушения дыхания",
  ];

  const results = [
    "Выявление нарушений ритма и проводимости",
    "Оценка структуры и функции сердца",
    "Диагностика ишемии и других патологий",
    "Оценка функции внешнего дыхания",
    "Мониторинг состояния плода при беременности",
    "Ранняя диагностика заболеваний",
    "Объективный контроль динамики лечения",
  ];

  const fdServices = [
    {
      category: "Функциональная диагностика",
      services: [
        { code: "A05.10.006", name: "Электрокардиография (ЭКГ)", price: 550 },
        { code: "A05.10.004", name: "Эхокардиография (ЭхоКГ)", price: 2200 },
        { code: "A02.12.002", name: "Спирометрия", price: 880 },
        { code: "A12.10.001", name: "Суточное мониторирование ЭКГ (Холтер)", price: 2200 },
        { code: "A12.09.001.004", name: "Суточное мониторирование АД", price: 1650 },
        { code: "A09.05.193.001", name: "Кардиотокография (КТГ) плода", price: 1100 },
        { code: "A12.09.001.004.001", name: "Расшифровка ЭКГ", price: 440 },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Title without banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Функциональная диагностика в Голицино — исследования в медицинском центре Альтамед Голицино
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
                  Функциональная диагностика — комплекс методов исследования, направленных на оценку функционального состояния органов и систем организма в покое и при нагрузке. В медицинском центре Альтамед Голицино исследования проводятся опытными специалистами на современном оборудовании.
                </p>
                <p className="mb-4">
                  К методам функциональной диагностики относятся ЭКГ, эхокардиография, холтеровское мониторирование, спирометрия, КТГ и другие. Они позволяют выявить нарушения на ранних стадиях, оценить резервные возможности организма и проконтролировать эффективность лечения.
                </p>
                <p>
                  Исследования безопасны, безболезненны и высокоинформативны. Записаться на функциональную диагностику в Альтамед Голицино можно через форму на сайте или по телефону.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[240px] md:h-auto">
                <Image
                  src="/images/services/Screenshot_1832.png"
                  alt="Функциональная диагностика в Альтамед Голицино"
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
            Преимущества функциональной диагностики в Альтамед Голицино
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
              <h3 className="text-2xl font-bold mb-4">Показания к функциональной диагностике</h3>
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
                  Функциональная диагностика в Альтамед Голицино назначается терапевтом, кардиологом, пульмонологом или другим специалистом при наличии жалоб или в рамках профилактического обследования.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Что дают исследования</h3>
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
                  Результаты исследований позволяют врачу поставить или уточнить диагноз, подобрать лечение и контролировать его эффективность. В Альтамед Голицино расшифровку проводит специалист.
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
            Как проводятся исследования в Альтамед Голицино
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              ЭКГ — запись электрической активности сердца в течение нескольких минут. Эхокардиография — ультразвуковое исследование сердца и сосудов. Холтеровское мониторирование — суточная запись ЭКГ для выявления аритмий. Спирометрия оценивает функцию внешнего дыхания. КТГ применяется для мониторинга состояния плода во время беременности.
            </p>
            <p className="text-base md:text-lg">
              Большинство методов не требуют специальной подготовки. Перед ЭКГ рекомендуется избегать физических нагрузок. Подробные инструкции вы получите при записи на исследование в медицинском центре Альтамед Голицино.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl font-bold mb-4">Подготовка к исследованиям в Альтамед Голицино</h3>
          <div className="text-gray-800 space-y-4">
            <p>
              Для ЭКГ и ЭхоКГ специальная подготовка не требуется. Перед ЭКГ желательно не переедать и не курить за 1–2 часа. Для холтеровского мониторирования в день исследования не рекомендуется принимать душ (устройство нельзя мочить). При записи на спирометрию или другие виды исследований администратор клиники Альтамед Голицино сообщит индивидуальные рекомендации.
            </p>
            <p>
              Исследования проводятся в комфортных условиях. Длительность ЭКГ — 2–3 минуты, ЭхоКГ — около 20–30 минут. После процедур можно сразу вернуться к обычной деятельности.
            </p>
          </div>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Виды исследований в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Кардиология</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>ЭКГ — электрокардиография</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>ЭхоКГ — эхокардиография (УЗИ сердца)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Холтеровское мониторирование ЭКГ</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Суточное мониторирование АД</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Другие направления</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Спирометрия — оценка функции дыхания</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>КТГ — кардиотокография плода</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Расшифровка ЭКГ и заключения</span>
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
            Цены на функциональную диагностику
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Стоимость указана за одно исследование и носит информационный характер. Актуальные цены уточняйте у администратора клиники Альтамед Голицино.
          </p>
          <div className="space-y-6">
            {fdServices.map((block, idx) => (
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
            Почему выбирают функциональную диагностику в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Современное оборудование</h3>
              <p className="text-gray-700">Используем аппараты экспертного класса для точной диагностики</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные специалисты</h3>
              <p className="text-gray-700">Врачи функциональной диагностики с многолетним стажем</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Удобная запись</h3>
              <p className="text-gray-700">Записаться на исследование можно онлайн или по телефону</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
