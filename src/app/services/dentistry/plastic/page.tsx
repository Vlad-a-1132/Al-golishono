'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function PlasticPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Пластическая хирургия (мягкие ткани)",
      services: [
        { code: "", name: "Пластика уздечек", price: 0, isSubtitle: true },
        { code: "", name: "Пластика уздечки верхней губы, 1 ед.", price: 5330 },
        { code: "", name: "Пластика уздечки нижней губы, 1 ед.", price: 5330 },
        { code: "", name: "Пластика уздечки языка, 1 ед.", price: 5330 },
        { code: "", name: "Вестибулопластика и коррекция преддверия рта", price: 0, isSubtitle: true },
        { code: "", name: "Вестибулопластика, 1 ед.", price: 15090 },
        { code: "", name: "Пластика десны (гингивопластика)", price: 0, isSubtitle: true },
        { code: "", name: "Увеличение зоны прикрепленной кератинизированной десны", price: 15980 },
        { code: "", name: "Пластика мягких тканей в области имплантанта", price: 9640 },
        { code: "", name: "Забор соединительнотканного трансплантанта", price: 7620 },
        { code: "", name: "Гингивопластика. Устранение рецессии десны, 1 зуб", price: 15090 },
        { code: "", name: "Гингивопластика. Хирургическое удлинение коронковой части зуба, 1 ед.", price: 9010 },
        { code: "", name: "Лоскутные операции и лечение пародонта", price: 0, isSubtitle: true },
        { code: "", name: "Лоскутная операция в полости рта, 4-6 зубов", price: 6350 },
        { code: "", name: "Гингивэктомия, 1 зуб", price: 1280 },
        { code: "", name: "Гингивотомия, 1 ед.", price: 6850 }
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
            <span className="text-gray-900">Пластическая хирургия</span>
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
                Пластическая хирургия в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Пластика уздечек, вестибулопластика и гингивопластика в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/fdfs.webp" 
                alt="Пластическая хирургия" 
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
              <h2 className="text-3xl font-bold text-gray-900">Пластическая хирургия в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает услуги пластической хирургии в Одинцово — пластику уздечек,
                вестибулопластику, гингивопластику и другие операции на мягких тканях полости рта. Мы применяем
                современные методики, качественные материалы и обеспечиваем эстетичный результат.
              </p>
              <p>
                Врач-стоматолог-хирург проводит пластические операции для улучшения эстетики улыбки и функциональности
                полости рта. У нас можно выполнить пластику уздечек языка, губ, вестибулопластику, гингивопластику
                и другие операции.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость пластической хирургии в Одинцово
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
                  Эстетичные результаты пластических операций с минимальным травматизмом.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных хирургов, специализирующихся на пластике мягких тканей полости рта.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Современные методики пластики уздечек, вестибулопластики и гингивопластики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Подробные рекомендации по уходу после пластических операций.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества пластической хирургии в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные хирурги</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-хирурги с опытом более 15 лет выполняют пластические операции на мягких тканях
                полости рта с отличными эстетическими результатами.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эстетичные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пластические операции направлены на улучшение эстетики улыбки и функциональности полости рта
                с минимальным травматизмом.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные методики</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем передовые методики пластики уздечек, вестибулопластики и гингивопластики по международным
                протоколам.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед операцией — пациент знает стоимость пластической хирургии до начала процедуры.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Быстрое заживление</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Правильная техника операций и рекомендации по уходу обеспечивают быстрое заживление без осложнений.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров после операции.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Пластическая хирургия в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где пластическая хирургия в Одинцове проводится по международным
              протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают эстетичные результаты и быстрое заживление. Если вы ищете стоматологию,
              где «пластическая хирургия одинцово» — это не просто слоган, а качественная услуга, записывайтесь
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
            Цены на пластическую хирургию в Одинцово
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость пластической хирургии в клинике «Альтамед-С» формируется в зависимости от вида операции,
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
                Записаться на прием
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о пластической хирургии в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эстетичные результаты пластических операций, быстрое заживление
                и внимательное отношение врачей.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пластические операции проходят без осложнений, заживление происходит быстро, что соответствует
                ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После пластических операций в Одинцове пациенты отмечают минимальный дискомфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о пластической хирургии в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что такое пластика уздечки?
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
                Пластика уздечки — это хирургическая операция по коррекции уздечки языка, верхней или нижней губы
                для улучшения функциональности и эстетики полости рта.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что такое вестибулопластика?
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
                Вестибулопластика — это операция по углублению преддверия полости рта для улучшения фиксации
                протезов и профилактики рецессии десны.
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
                Пластическая хирургия в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость пластических операций,
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
                name: "Клиника «Альтамед-С» — пластическая хирургия в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/plastic",
                image: "https://altamed-c.ru/images/dentisrty/fdfs.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "185"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Пластическая хирургия",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Пластическая хирургия в Одинцово: пластика уздечек, вестибулопластика, гингивопластика и другие операции на мягких тканях полости рта.",
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

