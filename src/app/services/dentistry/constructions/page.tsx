'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ConstructionsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Стоматологические конструкции",
      services: [
        { code: "", name: "Изготовление коронки пластмассовой, 1 посещение", price: 4010 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Замена элементов микрозамковых креплений фирмы Bredent, 1 ед.", price: 3940 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Коррекция протеза, 1 ед.", price: 1220 },
        { code: "", name: "Изготовление съемного протеза из термопластического материала, 1 ед.", price: 0 },
        { code: "", name: "Изготовление полного съемного пластинчатого протеза, 1 ед./Стандарт/", price: 25000 },
        { code: "", name: "Изготовление полного съемного пластинчатого протеза, 1 ед./Мастер/", price: 35000 },
        { code: "", name: "Изготовление частичного съемного протеза, 1 ед./Стандарт/", price: 21000 },
        { code: "", name: "Изготовление частичного съемного протеза, 1 ед./Мастер/", price: 31000 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Изготовление индивидуальной ложки, 1челюсть", price: 3940 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Бесцветная пластмасса или материал, 1челюсть", price: 3940 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Ремонт протеза срочный (2-3 часа), 1челюсть", price: 5830 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Ремонт протеза плановый (2-е суток), 1челюсть", price: 4950 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Перебазировка в полости рта, 1челюсть", price: 3940 },
        { code: "", name: "Перебазировка съемного протеза лабораторным методом, 1челюсть", price: 5830 },
        { code: "", name: "Приварка кламмера, 1 ед.", price: 2800 },
        { code: "", name: "Приварка зуба, 1 ед.", price: 2800 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Армирование базиса стальным литым каркасом, 1 ед.", price: 5460 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Небный бюгель с изготовлением, 1 ед.", price: 5970 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической - сдача работы", price: 760 },
        { code: "", name: "Услуги по изготовлению воскового шаблона для определения прикуса", price: 1500 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической - сдача конструкции на временный цемент", price: 460 }
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
            <span className="text-gray-900">Стоматологические конструкции</span>
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
                Стоматологические конструкции в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Изготовление съемных протезов, коронок и ремонт протезов в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp" 
                alt="Стоматологические конструкции" 
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
              <h2 className="text-3xl font-bold text-gray-900">Стоматологические конструкции в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает изготовление стоматологических конструкций в Одинцово — съемных протезов,
                коронок, ремонт и перебазировку протезов. Мы применяем современные материалы, качественные технологии
                и учитываем индивидуальные особенности каждого пациента, чтобы обеспечить функциональность и комфорт протезов.
              </p>
              <p>
                Врач-стоматолог-ортопед изготавливает индивидуальные конструкции с учетом состояния зубов, прикуса
                и пожеланий пациента. У нас можно изготовить съемные протезы, коронки, выполнить ремонт и перебазировку
                существующих протезов.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость стоматологических конструкций в Одинцово
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
                  Индивидуальное изготовление конструкций с учетом особенностей пациента.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Качественные материалы для долговечных и комфортных протезов.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ремонт и перебазировку существующих протезов для продления срока службы.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольные визиты после изготовления и рекомендации по уходу.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества изготовления конструкций в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные ортопеды</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-ортопеды с опытом более 15 лет изготавливают конструкции и работают
                с современными материалами для качественного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Качественные материалы</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем современные материалы для изготовления съемных протезов, коронок и других
                конструкций от ведущих производителей.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Индивидуальный подход</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Конструкции изготавливаются с учетом индивидуальных особенностей пациента для максимального
                комфорта и функциональности.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ремонт и перебазировка</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Выполняем ремонт и перебазировку существующих протезов для продления срока службы
                и восстановления функциональности.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед изготовлением — пациент знает стоимость конструкций до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до установки конструкций и рекомендаций
                по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Стоматологические конструкции в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где изготовление стоматологических конструкций в Одинцове
              проводится по международным протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского
              городского округа.
            </p>
            <p>
              Наши пациенты отмечают качество конструкций и комфорт при использовании. Если вы ищете стоматологию,
              где «стоматологические конструкции одинцово» — это не просто слоган, а качественная услуга, записывайтесь
              на консультацию стоматолога-ортопеда или ознакомьтесь с другими направлениями на{" "}
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
            Цены на стоматологические конструкции в Одинцово
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость изготовления стоматологических конструкций в клинике «Альтамед-С» формируется в зависимости
            от вида конструкции и материала, но мы фиксируем цены в договоре, чтобы пациент точно понимал итоговую сумму.
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
                            {service.price === 0 ? 'По запросу' : `${service.price.toLocaleString('ru-RU')} ₽`}
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
            Отзывы пациентов о стоматологических конструкциях в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество конструкций, комфорт при использовании и долговечность
                после изготовления.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Конструкции служат долгие годы без проблем, обеспечивая функциональность и комфорт,
                что соответствует ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После изготовления конструкций в Одинцове пациенты отмечают комфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологических конструкциях в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие конструкции вы изготавливаете?
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
                Мы изготавливаем съемные протезы, коронки, выполняем ремонт и перебазировку существующих протезов.
                Вид конструкции выбирается индивидуально в зависимости от состояния зубов и пожеланий пациента.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Можно ли отремонтировать существующий протез?
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
                Да, мы выполняем ремонт и перебазировку существующих протезов для продления срока службы
                и восстановления функциональности.
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
                Стоматологические конструкции в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость изготовления конструкций,
                подобрать подходящий вид протеза и получить индивидуальный план лечения.
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
                name: "Клиника «Альтамед-С» — стоматологические конструкции в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/constructions",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "267"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Стоматологические конструкции",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Стоматологические конструкции в Одинцово: изготовление съемных протезов, коронок, ремонт и перебазировка протезов.",
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

