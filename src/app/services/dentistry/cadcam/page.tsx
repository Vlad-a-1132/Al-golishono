'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function CADCAMPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "CAD/CAM-технологии",
      services: [
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max, 1 ед.", price: 26250 },
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max (выполненное мастер техником), 1 ед.", price: 43870 },
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Винир на рефракторе, 1 ед.", price: 51220 },
        { code: "", name: "Восстановление зуба коронкой.Коронка из диоксида циркония, CAD-CAM технология, 1 ед.", price: 29930 },
        { code: "", name: "Восстановление зуба коронкой.Коронка из прозрачного циркония \"Prettau\", CAD-CAM технология, 1 ед.", price: 31070 }
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
            <span className="text-gray-900">CAD/CAM-технологии</span>
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
                CAD/CAM-технологии в клинике «Альтамед Голицино»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Керамические вкладки, виниры e-max и коронки из диоксида циркония в Альтамед Голицино
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/cad.webp" 
                alt="CAD/CAM-технологии" 
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
              <h2 className="text-3xl font-bold text-gray-900">CAD/CAM-технологии в Альтамед Голицино: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицино» предлагает услуги CAD/CAM-технологий в Альтамед Голицино — изготовление коронок,
                виниров и вкладок с использованием компьютерного моделирования и фрезерования. Мы применяем
                современные материалы, передовое оборудование и обеспечиваем высочайшую точность и эстетику
                ортопедических конструкций.
              </p>
              <p>
                Врач-стоматолог-ортопед использует CAD/CAM-технологии для создания индивидуальных реставраций
                с идеальным прилеганием и эстетикой. У нас можно изготовить коронки из диоксида циркония,
                керамики e-max, виниры и вкладки с использованием современных технологий.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость CAD/CAM-конструкций в Альтамед Голицино
                фиксируется заранее, а пациенты получают подробную информацию о процедуре.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицино»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Высочайшую точность изготовления конструкций с использованием CAD/CAM-технологий.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Современные материалы: диоксид циркония, керамика e-max, прозрачный цирконий Prettau.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Идеальное прилегание и эстетику реставраций благодаря компьютерному моделированию.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Быстрое изготовление конструкций с использованием современных технологий.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества CAD/CAM-технологий в «Альтамед Голицино»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Высочайшая точность</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                CAD/CAM-технологии обеспечивают идеальное прилегание конструкций и точность изготовления,
                недостижимую при традиционных методах.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные материалы</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем диоксид циркония, керамику e-max, прозрачный цирконий Prettau для создания
                прочных и эстетичных реставраций.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Быстрое изготовление</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Компьютерное моделирование и фрезерование позволяют изготавливать конструкции быстрее,
                чем при традиционных методах.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эстетичные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Реставрации изготавливаются с учетом индивидуальных особенностей пациента для естественного
                внешнего вида.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед изготовлением — пациент знает стоимость CAD/CAM-конструкций до начала лечения.
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое CAD/CAM-технологии в стоматологии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Точность и качество</h3>
                <p className="text-gray-600">
                  CAD/CAM-технологии позволяют создавать ортопедические конструкции с высочайшей точностью. Компьютерное моделирование и фрезерование обеспечивают идеальное прилегание и эстетику.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Современные материалы</h3>
                <p className="text-gray-600">
                  Использование керамики e-max, диоксида циркония и прозрачного циркония Prettau для создания прочных и эстетичных реставраций.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги CAD/CAM-технологий в Альтамед Голицино
          </h2>
          
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
                Записаться на прием
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            CAD/CAM-технологии в Альтамед Голицино: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицино» — клиника, где CAD/CAM-технологии в Альтамед Голицино применяются по международным
              протоколам. Мы принимаем пациентов из Альтамед Голицино и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают точность и качество конструкций. Если вы ищете стоматологию,
              где «CAD/CAM голицино» — это не просто слоган, а качественная услуга, записывайтесь
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о CAD/CAM-технологиях в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицино</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают точность и качество CAD/CAM-конструкций, идеальное прилегание
                и эстетичный внешний вид.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Конструкции служат долгие годы без проблем, обеспечивая функциональность и эстетику,
                что соответствует ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После установки CAD/CAM-конструкций в Альтамед Голицино пациенты отмечают комфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о CAD/CAM-технологиях в Альтамед Голицино
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что такое CAD/CAM-технологии?
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
                CAD/CAM — это технологии компьютерного проектирования (CAD) и компьютерного производства (CAM)
                для изготовления стоматологических конструкций с высочайшей точностью и эстетикой.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие материалы используются в CAD/CAM?
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
                Мы используем диоксид циркония, керамику e-max, прозрачный цирконий Prettau и другие современные
                материалы для создания прочных и эстетичных реставраций.
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
                CAD/CAM-технологии в Альтамед Голицино — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицино», чтобы узнать стоимость CAD/CAM-конструкций,
                подобрать подходящий материал и получить индивидуальный план лечения.
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
                name: "Клиника «Альтамед Голицино» — CAD/CAM-технологии в Альтамед Голицино",
                url: "https://altamed-golitsino.ru/services/dentistry/cadcam",
                image: "https://altamed-golitsino.ru/images/dentisrty/cad.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "198"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицино",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "CAD/CAM-технологии",
                areaServed: "Альтамед Голицино и Голицино",
                description:
                  "CAD/CAM-технологии в Альтамед Голицино: изготовление коронок, виниров и вкладок с использованием компьютерного моделирования и фрезерования, диоксид циркония и керамика e-max.",
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

