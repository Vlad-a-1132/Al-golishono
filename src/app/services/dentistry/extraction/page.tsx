'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ExtractionPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Удаление зубов",
      services: [
        { code: "", name: "Простое удаление", price: 0, isSubtitle: true },
        { code: "", name: "Удаление временного зуба с физиологической подвижностью, 1 ед.", price: 1260 },
        { code: "", name: "Удаление зуба, 1 ед.", price: 2170 },
        { code: "", name: "Сложное удаление", price: 0, isSubtitle: true },
        { code: "", name: "Удаление зуба сложное, 1 ед.", price: 4830 },
        { code: "", name: "Удаление зуба с разъединением корней, 1 ед.", price: 8370 },
        { code: "", name: "Операция удаления ретинированного, дистопированного или сверхкомплектного зуба, 1 ед.", price: 10400 },
        { code: "", name: "Сопутствующие процедуры при удалении", price: 0, isSubtitle: true },
        { code: "", name: "Кюретаж лунки удаленного зуба, 1 ед.", price: 1020 },
        { code: "", name: "Остановка луночного кровотечения, 1 зуб", price: 510 },
        { code: "", name: "Остановка луночного кровотечения с использованием гемостатических материалов, 1 зуб", price: 1220 }
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
            <span className="text-gray-900">Удаление зубов</span>
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
                Удаление зубов в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Простое и сложное удаление зубов, удаление ретинированных зубов в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/zeb.webp" 
                alt="Удаление зубов" 
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
              <h2 className="text-3xl font-bold text-gray-900">Удаление зубов в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает удаление зубов в Одинцово — от простого удаления до сложных
                операций по удалению ретинированных и дистопированных зубов. Мы применяем передовые методики,
                современную анестезию и учитываем индивидуальные особенности каждого пациента, чтобы обеспечить
                безопасное и безболезненное удаление.
              </p>
              <p>
                Врач-стоматолог-хирург составляет персональный план лечения, учитывая состояние зуба, корней
                и окружающих тканей. У нас можно выполнить простое удаление зубов с полным прорезыванием,
                сложное удаление с разъединением корней, удаление ретинированных и дистопированных зубов.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость удаления зубов в Одинцово
                фиксируется заранее, а пациенты получают подробную информацию о процедуре.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненное удаление зубов с использованием современной местной анестезии.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Атравматичные методики удаления для быстрого заживления и минимизации осложнений.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных хирургов с большим стажем работы в стоматологической хирургии.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Подробные рекомендации по уходу после удаления и контрольные визиты.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества удаления зубов в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные хирурги</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-хирурги с опытом более 15 лет выполняют простое и сложное удаление зубов
                с минимальным травматизмом.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безболезненное удаление</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Современная местная анестезия обеспечивает полное отсутствие боли во время процедуры удаления зуба.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Атравматичные методики</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем щадящие методики удаления для сохранения костной ткани и быстрого заживления лунки.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед удалением — пациент знает стоимость процедуры до начала операции.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Быстрое заживление</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Правильная техника удаления и рекомендации по уходу обеспечивают быстрое заживление без осложнений.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров после удаления.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Удаление зубов в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где удаление зубов в Одинцове проводится по международным
              протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают безболезненность процедуры и быстрое заживление. Если вы ищете стоматологию,
              где «удаление зубов одинцово» — это не просто слоган, а качественная услуга, записывайтесь
              на консультацию стоматолога-хирурга или ознакомьтесь с другими направлениями на{" "}
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
            Цены на удаление зубов в Одинцово
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость удаления зубов в клинике «Альтамед-С» формируется в зависимости от сложности процедуры,
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
                      service.isSubtitle ? (
                        <div
                          key={serviceIndex}
                          className="col-span-full mt-4 mb-2"
                        >
                          <h5 className="text-base md:text-lg font-semibold text-emerald-700">
                            {service.name}
                          </h5>
                        </div>
                      ) : (
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
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться на удаление
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов об удалении зубов в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают безболезненность процедуры, внимательное отношение хирургов и быстрое заживление
                после удаления.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Удаление проходит без осложнений, лунка заживает быстро, что соответствует ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После удаления в Одинцове пациенты отмечают минимальный дискомфорт; врачи дают подробные
                инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы об удалении зубов в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Больно ли удалять зуб?
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
                Нет, удаление зубов проводится под местной анестезией, поэтому процедура полностью безболезненна.
                Современные анестетики обеспечивают комфорт на протяжении всей операции.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени занимает заживление после удаления зуба?
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
                Заживление лунки после простого удаления занимает 7-10 дней, после сложного удаления — до 2-3 недель.
                При соблюдении рекомендаций врача процесс проходит без осложнений.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что такое сложное удаление зуба?
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
                Сложное удаление требуется при ретинированных зубах, зубах с разъединенными корнями или при наличии
                осложнений. Процедура занимает больше времени и требует особой техники.
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
                Удаление зубов в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость удаления зуба,
                получить индивидуальный план лечения и ответы на все вопросы от опытных стоматологов-хирургов.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
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
                name: "Клиника «Альтамед-С» — удаление зубов в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/extraction",
                image: "https://altamed-c.ru/images/dentisrty/zeb.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "278"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Удаление зубов",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Удаление зубов в Одинцово: простое и сложное удаление, удаление ретинированных зубов, безболезненное лечение и быстрое заживление.",
                sameAs: [
                  "https://altamed-c.ru",
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

