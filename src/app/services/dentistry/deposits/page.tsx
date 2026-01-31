'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function DepositsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг удаления зубных отложений
  const fullServicesData = [
    {
      subtitle: "Удаление зубных отложений (по видам)",
      services: [
        { code: "", name: "Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба, 1 зуб (Удаление зубного камня)", price: 290 },
        { code: "", name: "Удаление наддесневых зубных отложений методом Air Flow, 1 зуб (Снятие пигментного и мягкого налета)", price: 390 },
        { code: "", name: "Air Flow - Удаление зубных отложений методом Air Flow на аппарате \"PROPHYLAXIS MASTER\", 1 зуб (Аналогично предыдущему, но на более современном или конкретном аппарате)", price: 530 }
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
            <span className="text-gray-900">Удаление зубных отложений</span>
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
                Удаление зубных отложений в клинике «Альтамед Голицино»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Ультразвуковое удаление зубного камня и снятие налета методом Air Flow в Альтамед Голицино
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5h4ze2ek2vjpgzt0wnmcvh_1764343713_img_0.webp" 
                alt="Удаление зубных отложений" 
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
              <h2 className="text-3xl font-bold text-gray-900">Удаление зубных отложений в Альтамед Голицино: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицино» предлагает услуги удаления зубных отложений в Альтамед Голицино — ультразвуковое
                удаление наддесневых и поддесневых отложений, удаление налета методом Air Flow и на аппарате
                PROPHYLAXIS MASTER. Мы применяем современные технологии, качественное оборудование и обеспечиваем
                эффективное удаление зубного камня и налета.
              </p>
              <p>
                Врач-стоматолог-гигиенист проводит удаление зубных отложений с использованием ультразвука
                и Air Flow для полной очистки зубов. У нас можно удалить зубной камень, наддесневые и поддесневые
                отложения, пигментный и мягкий налет.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость удаления зубных отложений в Альтамед Голицино
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
                  Эффективное удаление зубного камня и налета с использованием современных технологий.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненную процедуру с использованием ультразвука и Air Flow.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных гигиенистов, специализирующихся на удалении зубных отложений.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Рекомендации по уходу за зубами для предотвращения образования отложений.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества удаления отложений в «Альтамед Голицино»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные гигиенисты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-гигиенисты с опытом более 10 лет проводят удаление зубных отложений и работают
                с современным оборудованием для качественного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные технологии</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем ультразвук для удаления камня, Air Flow для снятия налета и аппарат PROPHYLAXIS MASTER
                для эффективной очистки.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безболезненная процедура</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Современные методики и качественное оборудование обеспечивают комфорт во время процедуры
                без дискомфорта и боли.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное удаление</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Полное удаление зубного камня, наддесневых и поддесневых отложений, пигментного и мягкого налета
                за одно посещение.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед процедурой — пациент знает стоимость удаления отложений до начала чистки.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до рекомендаций по уходу
                и профилактике образования отложений.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Методы удаления зубных отложений
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ультразвук</h3>
                <p className="text-gray-600">
                  Ультразвуковое удаление наддесневых и поддесневых зубных отложений. Эффективное снятие зубного камня без повреждения эмали.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Air Flow</h3>
                <p className="text-gray-600">
                  Удаление наддесневых зубных отложений методом Air Flow. Снятие пигментного и мягкого налета воздушно-абразивной обработкой.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">PROPHYLAXIS MASTER</h3>
                <p className="text-gray-600">
                  Удаление зубных отложений методом Air Flow на современном аппарате PROPHYLAXIS MASTER для более эффективной очистки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги удаления зубных отложений в Альтамед Голицино
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
                Записаться на процедуру
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Удаление зубных отложений в Альтамед Голицино: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицино» — клиника, где удаление зубных отложений в Альтамед Голицино проводится
              по международным протоколам. Мы принимаем пациентов из Альтамед Голицино и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают эффективность процедуры и качество очистки. Если вы ищете стоматологию,
              где «удаление зубных отложений голицино» — это не просто слоган, а качественная услуга, записывайтесь
              на процедуру или ознакомьтесь с другими направлениями на{" "}
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
            Отзывы пациентов об удалении зубных отложений в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицино</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность удаления отложений, безболезненность процедуры
                и отличный результат после чистки.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После удаления отложений зубы становятся чище, исчезает камень и налет, улучшается
                состояние десен.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная процедура</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После удаления отложений в Альтамед Голицино пациенты отмечают отсутствие дискомфорта; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы об удалении зубных отложений в Альтамед Голицино
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Как часто нужно удалять зубные отложения?
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
                Рекомендуется удалять зубные отложения каждые 6 месяцев. При быстром образовании камня
                или наличии заболеваний десен врач может рекомендовать более частые визиты.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Больно ли удалять зубной камень?
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
                Нет, удаление зубного камня безболезненно. При повышенной чувствительности врач может
                использовать местную анестезию для комфорта пациента.
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
                Удаление зубных отложений в Альтамед Голицино — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на процедуру в клинику «Альтамед Голицино», чтобы удалить зубной камень и налет,
                получить индивидуальные рекомендации по уходу за зубами.
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
                name: "Клиника «Альтамед Голицино» — удаление зубных отложений в Альтамед Голицино",
                url: "https://altamed-golitsino.ru/services/dentistry/deposits",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb5h4ze2ek2vjpgzt0wnmcvh_1764343713_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "234"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицино",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Удаление зубных отложений",
                areaServed: "Альтамед Голицино и Голицино",
                description:
                  "Удаление зубных отложений в Альтамед Голицино: ультразвуковое удаление камня, Air Flow для снятия налета, эффективная очистка зубов.",
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

