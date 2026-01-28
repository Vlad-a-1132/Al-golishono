'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ConsultationPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг консультации стоматолога
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога, терапевта, зубного врача",
      services: [
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога первичный, 1 ед.", price: 370 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога повторный, 1 ед.", price: 290 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта первичный (составление плана лечения по КТ исследованию) 1ед.", price: 2500 },
        { code: "", name: "Оформление выписки из медицинской карты стоматологического больного", price: 350 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога первичный с оформлением справки о санации полости рта, 1 ед.", price: 650 }
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
            <span className="text-gray-900">Консультация стоматолога</span>
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
                Консультация стоматолога в клинике «Альтамед Голицино»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Первичный и повторный прием врача-стоматолога, стоматолога-терапевта в Альтамед Голицино
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp" 
                alt="Консультация стоматолога" 
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
              <h2 className="text-3xl font-bold text-gray-900">Консультация стоматолога в Альтамед Голицино: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицино» предлагает профессиональную консультацию стоматолога в Альтамед Голицино — от
                первичного осмотра и диагностики до составления комплексного плана лечения. Мы применяем
                современные методы диагностики, включая КТ-исследования, и учитываем индивидуальные
                особенности каждого пациента, чтобы предложить оптимальное решение для здоровья зубов.
              </p>
              <p>
                Врач-стоматолог проводит тщательный осмотр полости рта, определяет состояние зубов и десен,
                выявляет проблемы на ранних стадиях. У нас можно получить консультацию стоматолога-терапевта,
                стоматолога-хирурга, ортопеда, ортодонта и детского стоматолога — все специалисты работают
                в одной клинике для удобства пациентов.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость консультации стоматолога в Альтамед Голицино
                фиксируется заранее, а пациенты получают подробный план лечения с указанием всех этапов и цен.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицино»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Комплексный осмотр полости рта с использованием современного оборудования и методов диагностики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Составление индивидуального плана лечения с учётом состояния зубов, бюджета и пожеланий пациента.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Консультация по КТ-исследованию для точной диагностики и планирования сложных случаев лечения.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Оформление справок о санации полости рта и выписок из медицинской карты для различных целей.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества консультации стоматолога в «Альтамед Голицино»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные стоматологи</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи с опытом более 10 лет проводят консультации и работают с современными
                методами диагностики для точной оценки состояния зубов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современная диагностика</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем КТ-исследования, рентген-диагностику и визуальный осмотр для комплексной оценки
                состояния полости рта.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комплексный подход</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                От первичной консультации до составления плана лечения — все этапы в одной клинике для
                удобства пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед консультацией — пациент знает стоимость приёма стоматолога до визита.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Удобная запись</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Онлайн-запись на консультацию стоматолога в Альтамед Голицино доступна круглосуточно, можно выбрать
                удобное время.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров и рекомендаций
                по профилактике.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Консультация стоматолога в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Первичный прием стоматолога</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Осмотр полости рта и зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Консультация по состоянию зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Составление плана лечения
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оформление справки о санации полости рта
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Специалисты в «Альтамед Голицино»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Стоматолог-терапевт
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Детский стоматолог
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Стоматолог-хирург
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Стоматолог-ортопед и ортодонт
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Стоматолог-имплантолог
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Консультация стоматолога в Альтамед Голицино: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицино» — клиника, где консультация стоматолога в Альтамед Голицино проводится по международным
              протоколам. Мы принимаем пациентов из Альтамед Голицино и всего Одинцовского городского округа, поэтому
              запрос «консультация стоматолога Альтамед Голицино область» полностью закрывает наши услуги.
            </p>
            <p>
              Прайс ниже отвечает на популярные поисковые запросы Wordstat: «консультация стоматолога в одинцове цены»,
              «консультация стоматолога Альтамед Голицино отзывы», «Альтамед Голицино стоматолог цена». Мы регулярно обновляем
              данные, чтобы стоимость консультации стоматолога Альтамед Голицино оставалась прозрачной и понятной.
            </p>
            <p>
              Наши пациенты отмечают, что «консультация стоматолога Альтамед Голицино отзывы» в точности описывают результат:
              внимательное отношение врачей и детальное объяснение плана лечения. Если вы ищете стоматологию,
              где «стоматология Альтамед Голицино» — это не просто слоган, а комплексная услуга, записывайтесь
              на консультацию стоматолога или ознакомьтесь с другими направлениями на{" "}
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
            Цены на консультацию стоматолога в Альтамед Голицино
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость консультации стоматолога в клинике «Альтамед Голицино» формируется в зависимости от типа приёма,
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

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему выбирают стоматолога в «Альтамед Голицино» Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Опытные специалисты",
                  text: "В клинике «Альтамед Голицино» работают квалифицированные стоматологи с большим опытом работы. Стоматолог-терапевт, стоматолог-хирург, детский стоматолог, стоматолог-ортопед и ортодонт в Альтамед Голицино.",
                  icon: "👨‍⚕️"
                },
                {
                  title: "Современное оборудование",
                  text: "Используем передовое стоматологическое оборудование для точной диагностики и качественного лечения. КТ, рентген, современные материалы.",
                  icon: "🔬"
                },
                {
                  title: "Комплексный подход",
                  text: "От консультации стоматолога до полного лечения. Составляем индивидуальный план лечения, учитывая все особенности пациента.",
                  icon: "📋"
                },
                {
                  title: "Удобное расположение",
                  text: "Клиника «Альтамед Голицино» находится в Альтамед Голицино, легко добраться. Записаться к стоматологу можно онлайн или по телефону.",
                  icon: "📍"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как записаться к стоматологу в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Онлайн запись</h3>
                <p className="text-gray-600 text-sm">Заполните форму записи на сайте или позвоните по телефону</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Консультация</h3>
                <p className="text-gray-600 text-sm">Приходите на первичный прием стоматолога в удобное время</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">План лечения</h3>
                <p className="text-gray-600 text-sm">Врач составит индивидуальный план лечения и ответит на все вопросы</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться к стоматологу в Альтамед Голицино
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о консультации стоматолога в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицино</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Запрос «консультация стоматолога Альтамед Голицино отзывы» подтверждается историями пациентов: они отмечают
                внимательное отношение, подробное объяснение плана лечения и комфортную атмосферу.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Профессиональный подход</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи проводят тщательный осмотр и составляют детальный план лечения, что соответствует ожиданиям
                по запросу «консультация стоматолога в одинцове цены отзывы».
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Удобная запись</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После консультации стоматолога в Альтамед Голицино пациенты отмечают удобство онлайн-записи; врачи на связи
                и дают подробные рекомендации по дальнейшему лечению.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о консультации стоматолога в Альтамед Голицино
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько стоит консультация стоматолога в Альтамед Голицино в клинике «Альтамед Голицино»?
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
                Стоимость первичной консультации стоматолога — от 370 ₽, повторной — от 290 ₽. Консультация
                с составлением плана лечения по КТ-исследованию — 2 500 ₽. Окончательная цена формируется
                после осмотра и фиксируется в договоре.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что включает первичная консультация стоматолога?
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
                Первичная консультация включает осмотр полости рта, оценку состояния зубов и десен, выявление
                проблем, консультацию по методам лечения и составление предварительного плана. При необходимости
                врач может назначить дополнительные исследования (КТ, рентген).
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Можно ли записаться к стоматологу онлайн?
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
                Да, запись к стоматологу в Альтамед Голицино доступна онлайн через форму на сайте или по телефону.
                Вы можете выбрать удобное время и специалиста (терапевт, хирург, ортопед, ортодонт, детский стоматолог).
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Нужна ли подготовка к консультации стоматолога?
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
                Специальной подготовки не требуется. Рекомендуется почистить зубы перед визитом и принести
                результаты предыдущих обследований (если есть). Если у вас есть КТ или рентген-снимки,
                возьмите их с собой.
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
                Консультация стоматолога в Альтамед Голицино — начните с бесплатного плана лечения
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицино», чтобы узнать состояние ваших зубов, получить
                индивидуальный план лечения и ответы на все вопросы от опытных стоматологов.
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
                name: "Клиника «Альтамед Голицино» — консультация стоматолога в Альтамед Голицино",
                url: "https://altamed-golitsino.ru/services/dentistry/consultation",
                image: "https://altamed-golitsino.ru/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "265"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицино",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽",
                serviceType: "Консультация стоматолога",
                areaServed: "Альтамед Голицино и Одинцовский городской округ",
                description:
                  "Консультация стоматолога в Альтамед Голицино: первичный и повторный прием, осмотр полости рта, составление плана лечения по КТ, оформление справок и доступные цены.",
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

