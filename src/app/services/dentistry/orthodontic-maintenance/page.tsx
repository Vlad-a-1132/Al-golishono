'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function OrthodonticMaintenancePage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Услуги по обслуживанию ортодонтических аппаратов",
      services: [
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Наклеивание одного брекета (кнопки), 1 ед.", price: 2030 },
        { code: "", name: "Припасовка и наложение ортодонтического аппарата. Припасовка и фиксация одного ортодонтического кольца, 1 ед.", price: 1660 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка сепарационного кольца, 1 ед.", price: 170 },
        { code: "", name: "Припасовка и наложение ортодонтического аппарата. Припасовка и фиксация одной ортодонтической дуги, 1 ед.", price: 1400 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Смена ортодонтической дуги (включая снятие и наложение лигатур), 1 ед.", price: 6090 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Изготовление простого изгиба на дуге, 1 ед.", price: 510 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Изготовление сложного изгиба на дуге (петли), 1 ед.", price: 650 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка лигатуры на один зуб в вестибулярных брекетах, 1 ед.", price: 300 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Связывание металлической лигатурой двух зубов в вестибулярных брекетах, 1 ед.", price: 420 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка  длинной металлической лигатуры на один зубной ряд в вестибулярных брекетах, 1 ед.", price: 1760 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Фиксация эластичной цепочки на два зуба в вестибулярных брекетах, 1 ед.", price: 420 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Фиксация эластичной цепочки на один зубной ряд в вестибулярных брекетах, 1 ед.", price: 1760 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка пружины вестибулярных брекетов, 1 ед.", price: 980 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Снятие вестибулярного брекета, 1 ед.", price: 840 },
        { code: "", name: "Снятие, постановка коронки, кольца ортодонтических, 1 ед.", price: 840 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Снятие одной лигатуры вестибулярных брекетов, 1 ед.", price: 290 },
        { code: "", name: "Припасовка и наложение ортодонтического аппарата. Наложение эластических тяг, 1 ед.", price: 840 },
        { code: "", name: "Изготовление кольца ортодонтического, 1 ед.", price: 510 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Наблюдение за ходом лечения, 1 посещение/мес.", price: 9900 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Наблюдение за ходом лечения, 1 посещение в 2 нед.", price: 5330 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Ручная гигиеническая обработка брекет-системы ёршиком, 1 ед.", price: 140 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Ручная гигиеническая обработка брекет-системы простая, 1 ед.", price: 340 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Ручная гигиеническая обработка брекет-системы сложная, 1 ед.", price: 760 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Обработка брекет-системы воском, 1 ед.", price: 420 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Фиксация одного брекета (лингвальные брекеты), 1 ед.", price: 3300 },
        { code: "", name: "Припасовка и наложение ортодонтического аппарата. Припасовка и фиксация ортодонтической дуги, 1 ед.", price: 3550 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка лигатуры на один зуб в лингвальных брекетах, 1 ед.", price: 420 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Смена лингвальной дуги (включая снятие и наложение лигатур), 1 ед.", price: 11420 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Связывание металлической лигатурой двух зубов в лингвальных брекетах, 1 ед.", price: 1020 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка  длинной металлической лигатуры на один зубной ряд в лингвальных брекетах, 1 ед.", price: 2920 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Фиксация эластичной цепочки на два зуба в лингвальных брекетах, 1 ед.", price: 510 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Фиксация эластичной цепочки на один зубной ряд в лингвальных брекетах, 1 ед.", price: 2280 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Установка пружины в лингвальных брекетах, 1 ед.", price: 1780 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Снятие лингвального брекета, 1 ед.", price: 1530 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Снятие одной лигатуры лингвального брекета, 1 ед.", price: 420 },
        { code: "", name: "Коррекция съемного ортодонического аппарата, 1 ед.", price: 710 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Перемещение одного зуба на модели, 1 ед.", price: 710 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Перебазировка аппарата, 1 ед.", price: 840 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Починка съемного аппарата (без слепков), 1 ед.", price: 2550 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Добавление винта в аппарат, 1 ед.", price: 2030 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Добавление пружины в аппарат, 1 ед.", price: 840 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Добавление искусственного зуба, 1 ед.", price: 570 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Перекрытие моляров, 1 ед.", price: 2030 },
        { code: "", name: "Услуги по обслуживанию ортодонических аппаратов. Добавление передней накусочной плоскости, 1 ед.", price: 2030 }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-600">Стоматология</Link>
            <span>/</span>
            <Link href="/services/dentistry/orthodontics" className="hover:text-emerald-600">Ортодонтия</Link>
            <span>/</span>
            <span className="text-gray-900">Обслуживание аппаратов</span>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Обслуживание ортодонтических аппаратов в клинике «Альтамед Голицыно»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Ремонт, замена дуг и лигатур, активация брекет-систем в Альтамед Голицыно
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp" 
                alt="Обслуживание ортодонтических аппаратов" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Обслуживание ортодонтических аппаратов в Альтамед Голицыно: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицыно» предлагает услуги по обслуживанию ортодонтических аппаратов в Альтамед Голицыно — ремонт,
                замена дуг и лигатур, активация брекет-систем и другие процедуры для поддержания эффективности лечения.
                Мы применяем современные технологии, качественные материалы и обеспечиваем регулярное обслуживание
                ортодонтических аппаратов.
              </p>
              <p>
                Врач-стоматолог-ортодонт проводит регулярное обслуживание брекет-систем, съемных и несъемных аппаратов
                для обеспечения эффективности лечения. У нас можно выполнить наклеивание брекетов, замену дуг, установку
                лигатур, активацию аппаратов и другие процедуры обслуживания.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость обслуживания ортодонтических аппаратов в Альтамед Голицыно
                фиксируется заранее, а пациенты получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицыно»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярное обслуживание брекет-систем и ортодонтических аппаратов для эффективности лечения.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ремонт и замена элементов аппаратов для продления срока службы и эффективности.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортодонтов, специализирующихся на обслуживании ортодонтических аппаратов.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярные визиты для контроля процесса исправления прикуса и обслуживания аппаратов.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества обслуживания аппаратов в «Альтамед Голицыно»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные ортодонты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-ортодонты с опытом более 15 лет проводят обслуживание ортодонтических аппаратов
                и работают с современными технологиями для эффективного лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Регулярное обслуживание</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Регулярные визиты для активации брекетов, замены дуг, установки лигатур и других процедур
                обслуживания для эффективности лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ремонт аппаратов</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Выполняем ремонт и перебазировку съемных аппаратов, починку брекет-систем для продления
                срока службы и эффективности.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед обслуживанием — пациент знает стоимость процедур до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Регулярное обслуживание обеспечивает эффективность исправления прикуса и предсказуемый результат.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от установки до обслуживания аппаратов и рекомендаций
                по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Обслуживание ортодонтических аппаратов в Альтамед Голицыно: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицыно» — клиника, где обслуживание ортодонтических аппаратов в Альтамед Голицыно проводится
              по международным протоколам. Мы принимаем пациентов из Альтамед Голицыно и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают качество обслуживания и эффективность лечения. Если вы ищете стоматологию,
              где «обслуживание ортодонтических аппаратов Альтамед Голицыно» — это не просто слоган, а качественная услуга, записывайтесь
              на обслуживание или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Цены на обслуживание ортодонтических аппаратов в Альтамед Голицыно
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость обслуживания ортодонтических аппаратов в клинике «Альтамед Голицыно» формируется в зависимости от вида процедуры,
            но мы фиксируем цены в договоре, чтобы пациент точно понимал итоговую сумму.
          </p>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
            <div className="space-y-8">
              {fullServicesData.map((subcat, subcatIndex) => (
                <div key={subcatIndex} className="mb-6">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-emerald-500">
                    {subcat.subtitle}
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {subcat.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex flex-col p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            {service.code && (
                              <div className="text-xs text-gray-500 mb-1">{service.code}</div>
                            )}
                            <span className="text-gray-700 font-medium text-sm leading-tight">
                              {service.name}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-semibold text-emerald-600 text-base whitespace-nowrap">
                            {service.price.toLocaleString('ru-RU')} ₽
                          </span>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться на консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов об обслуживании ортодонтических аппаратов в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицыно</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество обслуживания, эффективность лечения и внимательное отношение
                ортодонтов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Регулярное обслуживание обеспечивает эффективность исправления прикуса, что соответствует
                ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное обслуживание</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После обслуживания аппаратов в Альтамед Голицыно пациенты отмечают комфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы об обслуживании ортодонтических аппаратов в Альтамед Голицыно
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Как часто нужно обслуживать брекет-систему?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Рекомендуется посещать ортодонта каждые 4-6 недель для активации брекетов, замены дуг
                и контроля процесса исправления прикуса. При необходимости врач может назначить более частые визиты.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Можно ли отремонтировать сломанный брекет?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, мы выполняем ремонт и замену сломанных брекетов, замену дуг и лигатур для восстановления
                функциональности брекет-системы.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Обслуживание ортодонтических аппаратов в Альтамед Голицыно — получите качественное обслуживание
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на обслуживание в клинику «Альтамед Голицыно», чтобы получить качественное обслуживание
                ваших ортодонтических аппаратов и обеспечить эффективность лечения.
              </p>
            </div>
            <Link
              href="https://reg.altamed-golitsino.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед Голицыно» — обслуживание ортодонтических аппаратов в Альтамед Голицыно",
                url: "https://altamed-golitsino.ru/services/dentistry/orthodontic-maintenance",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "256"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицыно",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Обслуживание ортодонтических аппаратов",
                areaServed: "Альтамед Голицыно и Голицыно",
                description:
                  "Обслуживание ортодонтических аппаратов в Альтамед Голицыно: ремонт, замена дуг и лигатур, активация брекет-систем и другие процедуры обслуживания.",
                sameAs: [
                  "https://altamed-golitsino.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

