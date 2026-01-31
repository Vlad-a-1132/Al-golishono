'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function BracesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Брекет-системы",
      services: [
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты металлические, 1 челюсть", price: 63910 },
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты комбинированные, 1 челюсть", price: 79250 },
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем вестибулярные брекеты сапфировые, 1 челюсть", price: 90020 }
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
            <span className="text-gray-900">Брекет-системы</span>
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
                Брекет-системы в клинике «Альтамед Голицино»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Металлические, керамические и сапфировые брекеты для исправления прикуса в Альтамед Голицино
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp" 
                alt="Брекет-системы" 
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
              <h2 className="text-3xl font-bold text-gray-900">Брекет-системы в Альтамед Голицино: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицино» предлагает установку брекет-систем в Альтамед Голицино — металлические, керамические,
                сапфировые и лингвальные брекеты для исправления прикуса любой сложности. Мы применяем современные
                технологии, качественные материалы и учитываем индивидуальные особенности каждого пациента, чтобы
                обеспечить эффективное исправление прикуса.
              </p>
              <p>
                Врач-стоматолог-ортодонт составляет персональный план лечения, учитывая особенности прикуса,
                состояние зубов и пожелания пациента. У нас можно установить вестибулярные брекеты (металлические,
                керамические, сапфировые) или лингвальные брекеты для незаметного исправления прикуса.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость брекет-систем в Альтамед Голицино
                фиксируется заранее, а пациенты получают подробную информацию о лечении.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицино»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный план исправления прикуса с учётом особенностей зубов и пожеланий пациента.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Современные брекет-системы: металлические, керамические, сапфировые, лингвальные.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортодонтов, специализирующихся на исправлении прикуса брекетами.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярные визиты для активации брекетов и контрольные осмотры.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества брекет-систем в «Альтамед Голицино»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные ортодонты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-ортодонты с опытом более 15 лет устанавливают брекет-системы и работают
                с современными технологиями для эффективного исправления прикуса.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные брекеты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем металлические, керамические, сапфировые и лингвальные брекеты от ведущих производителей
                для качественного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Брекет-системы позволяют исправить прикус любой сложности с предсказуемым результатом
                и долговечным эффектом.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед установкой — пациент знает стоимость брекет-системы до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Регулярное обслуживание</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Регулярные визиты для активации брекетов, замены дуг и контроля процесса исправления прикуса.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от установки до снятия брекетов и рекомендаций
                по ношению ретейнеров.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Брекет-системы в Альтамед Голицино: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицино» — клиника, где установка брекет-систем в Альтамед Голицино проводится
              по международным протоколам. Мы принимаем пациентов из Альтамед Голицино и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают эффективность исправления прикуса и качество брекет-систем. Если вы ищете стоматологию,
              где «брекеты Альтамед Голицино» — это не просто слоган, а качественная услуга, записывайтесь
              на консультацию ортодонта или ознакомьтесь с другими направлениями на{" "}
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
            Цены на брекет-системы в Альтамед Голицино
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость брекет-систем в клинике «Альтамед Голицино» формируется в зависимости от вида брекетов,
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
            Отзывы пациентов о брекет-системах в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицино</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность исправления прикуса, качество брекет-систем
                и внимательное отношение ортодонтов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Исправление прикуса проходит успешно, зубы выравниваются, что соответствует ожиданиям
                пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После установки брекетов в Альтамед Голицино пациенты отмечают комфорт; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о брекет-системах в Альтамед Голицино
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие брекеты лучше выбрать?
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
                Выбор брекетов зависит от сложности случая, эстетических требований и бюджета. Металлические брекеты
                — наиболее эффективные и доступные, керамические и сапфировые — более эстетичные, лингвальные —
                незаметные. Врач-ортодонт поможет выбрать оптимальный вариант.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени нужно носить брекеты?
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
                Срок ношения брекетов зависит от сложности случая и составляет от 1 до 3 лет. Врач-ортодонт
                определит точный срок после диагностики и составления плана лечения.
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
                Брекет-системы в Альтамед Голицино — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицино», чтобы узнать стоимость брекет-систем,
                подобрать подходящий вид брекетов и получить индивидуальный план исправления прикуса.
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
                name: "Клиника «Альтамед Голицино» — брекет-системы в Альтамед Голицино",
                url: "https://altamed-golitsino.ru/services/dentistry/braces",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "289"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицино",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Брекет-системы",
                areaServed: "Альтамед Голицино и Голицино",
                description:
                  "Брекет-системы в Альтамед Голицино: металлические, керамические, сапфировые, лингвальные брекеты для исправления прикуса любой сложности.",
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

