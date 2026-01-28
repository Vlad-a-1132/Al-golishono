'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function XrayPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг рентгенографии из fullServicesData
  const services = [
    { code: "", name: "Прицельный снимок зуба", price: 500 },
    { code: "", name: "Ортопантомограмма", price: 1500 },
    { code: "А06.07.012", name: "Радиовизиография, 1 ед.", price: 400 },
    { code: "А06.07.012.500", name: "Радиовизиография. Снимок на визиографе с распечаткой на принтере и выдачей на руки, 1 ед.", price: 510 },
    { code: "", name: "Компьютерная томография (КТ) одной челюсти", price: 3000 },
    { code: "A06.07.013.001", name: "КТ одной челюсти", price: 3500 },
    { code: "", name: "Компьютерная томография (КТ) двух челюстей", price: 5000 },
    { code: "A06.07.013.002", name: "КТ двух челюстей", price: 4400 },
    { code: "A06.07.013.003", name: "КТ двух челюстей для детей до 12 лет", price: 3400 },
    { code: "A06.07.013.004", name: "КТ двух челюстей и ВНЧС", price: 4600 },
    { code: "A06.07.013.005", name: "КТ двух-трех рядом стоящих зубов", price: 1900 },
    { code: "A06.07.013.006", name: "ОПТГ", price: 1600 },
    { code: "А06.07.001", name: "Панорамная рентгенография челюсти, 1 ед.", price: 720 },
    { code: "А06.07.001.500", name: "Панорамная рентгенография челюсти. Панорамный снимок с распечаткой и выдачей на руки, 1 ед.", price: 780 },
    { code: "А06.07.001.501", name: "Панорамная рентгенография челюсти. Панорамный снимок с диском, 1 ед.", price: 880 },
    { code: "А06.07.006", name: "Телерентгенография челюстей, 1  ед.", price: 5050 },
    { code: "A06.07.013.007", name: "ТРГ черепа в одной проекции", price: 1600 },
    { code: "A06.07.013.008", name: "КТ двух сегментов (I и IV или II и III)", price: 3400 },
    { code: "A06.07.013.009", name: "КТ одного сегмента", price: 3000 },
    { code: "A06.07.013.010", name: "КТ ВНЧС в одном положении (один сустав)", price: 1000 },
    { code: "A06.07.013.011", name: "КТ ВНЧС двух суставов в двух положениях", price: 6000 },
    { code: "А06.07.013.500", name: "Компьютерная томография челюстно-лицевой области. Цифровая диагностическая 3D-модель (без слепков), 1ед.", price: 5050 },
    { code: "А06.07.013.501", name: "Компьютерная томография челюстно-лицевой области. Виртуальный SetUp (перемещение зубов на цифровой модели - без слепков), 1 ед.", price: 26570 }
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
            <span className="text-gray-900">Рентгенография</span>
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
                Рентгенография в клинике «Альтамед Голицино»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Цифровая рентгенография зубов и челюстей для точной диагностики в Альтамед Голицино
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/Rentgenografiya.webp" 
                alt="Рентгенография" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Виды рентгенографии в стоматологии Альтамед Голицино
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Прицельный снимок (радиовизиография)</h3>
                <p className="text-gray-600 mb-4">
                  Самый распространенный вид рентгенографии в стоматологии Альтамед Голицино. Позволяет получить изображение одного или нескольких рядом стоящих зубов. Используется для диагностики кариеса, оценки состояния корневых каналов, контроля качества лечения. В клинике «Альтамед Голицино» Альтамед Голицино мы используем современные цифровые визиографы с минимальной лучевой нагрузкой.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ортопантомограмма (ОПТГ, панорамный снимок)</h3>
                <p className="text-gray-600 mb-4">
                  Обзорный снимок всех зубов верхней и нижней челюсти. Необходим для общего осмотра, планирования лечения, выявления скрытых патологий, ретинированных зубов. Панорамный снимок в Альтамед Голицино выполняется за несколько секунд и дает полную картину состояния зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Компьютерная томография (КТ)</h3>
                <p className="text-gray-600 mb-4">
                  Трехмерная диагностика, позволяющая получить объемное изображение зубов и челюстей. Незаменима для планирования имплантации, ортодонтического лечения, диагностики сложных случаев. КТ в стоматологии Альтамед Голицино — это точность и уверенность в лечении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Прайс-лист рентгенографии в Альтамед Голицино
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {services.map((service, serviceIndex) => (
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
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Преимущества цифровой рентгенографии в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "Мгновенный результат", desc: "Снимок готов сразу" },
                { icon: "🛡️", title: "Минимальная лучевая нагрузка", desc: "Безопасно для здоровья" },
                { icon: "📊", title: "Высокое качество", desc: "Четкие изображения" },
                { icon: "💾", title: "Электронное хранение", desc: "Все снимки в базе" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость и виды рентгенографии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость рентгенографии в стоматологии Альтамед Голицино
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Рентгенография в клинике «Альтамед Голицино» Альтамед Голицино включает различные виды исследований: от прицельных снимков до панорамной рентгенографии и КТ. Цены зависят от вида исследования и объема работы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Базовые рентген-исследования в Альтамед Голицино</h3>
                  <p className="text-gray-600 mb-3">
                    Базовые виды рентгенографии в стоматологии Альтамед Голицино включают прицельные снимки отдельных зубов и панорамную рентгенографию всех зубов. Эти исследования необходимы для первичной диагностики и планирования лечения.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Прицельный снимок зуба от 500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ортопантомограмма от 1500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Панорамный снимок от 720₽
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Компьютерная томография в Альтамед Голицино</h3>
                  <p className="text-gray-600 mb-3">
                    КТ в стоматологии Альтамед Голицино — это наиболее информативный метод диагностики, дающий трехмерное изображение. Используется для сложных случаев: имплантация, ортодонтия, хирургия.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одной челюсти от 3500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей от 4400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ТРГ черепа от 1600₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость рентгенографии в стоматологии Альтамед Голицино можно узнать после консультации. Мы предлагаем комплексные программы диагностики по доступным ценам. Запишитесь на прием в «Альтамед Голицино» Альтамед Голицино для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Рентгенография в Альтамед Голицино: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицино» предлагает услуги рентгенографии в Альтамед Голицино — прицельные снимки, панорамную
                рентгенографию и компьютерную томографию для точной диагностики. Мы применяем современное цифровое
                оборудование с минимальной лучевой нагрузкой и обеспечиваем высокое качество изображений.
              </p>
              <p>
                Врач-стоматолог проводит рентген-диагностику для выявления скрытых патологий, планирования лечения
                и контроля его результатов. У нас можно пройти прицельный снимок зуба, ортопантомограмму, телерентгенографию
                и другие виды рентгенографии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость рентгенографии в Альтамед Голицино
                фиксируется заранее, а пациенты получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицино»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровую рентгенографию с минимальной лучевой нагрузкой для безопасной диагностики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Высокое качество изображений для точной диагностики и планирования лечения.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных рентгенологов, специализирующихся на стоматологической диагностике.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Электронное хранение снимков для удобства и доступности результатов.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Важность рентген-диагностики */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Важность рентген-диагностики в современной стоматологии Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Точная диагностика скрытых патологий</h3>
                <p className="text-gray-700 mb-4">
                  Рентгенография в стоматологии Альтамед Голицино позволяет выявить патологии, которые невозможно увидеть при визуальном осмотре: кариес между зубами, патологии корневых каналов, кисты, гранулемы. В клинике «Альтамед Голицино» Альтамед Голицино рентген-диагностика является обязательной частью комплексного обследования.
                </p>
                <p className="text-gray-700">
                  Современное цифровое оборудование в стоматологии Альтамед Голицино обеспечивает высокое качество изображений и минимальную лучевую нагрузку, что делает диагностику безопасной для пациентов всех возрастов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Планирование и контроль лечения</h3>
                <p className="text-gray-700 mb-4">
                  Рентген-снимки в клинике «Альтамед Голицино» Альтамед Голицино необходимы не только для диагностики, но и для планирования лечения и контроля его результатов. Врачи используют снимки для оценки качества пломбирования каналов, установки имплантов, результатов ортодонтического лечения.
                </p>
                <p className="text-gray-700">
                  Регулярная рентген-диагностика в стоматологии Альтамед Голицино позволяет контролировать состояние зубов и своевременно выявлять проблемы, что обеспечивает долгосрочный успех лечения.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-teal-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Рентгенография в клинике «Альтамед Голицино» Альтамед Голицино — это незаменимый инструмент современной стоматологии. Без рентген-диагностики невозможно провести качественное лечение: врач видит только поверхность зубов, а рентген показывает внутреннюю структуру и скрытые патологии. Опытные рентгенологи стоматологии Альтамед Голицино проводят все виды исследований с высокой точностью, обеспечивая врачам полную информацию для принятия правильных решений.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о рентгенографии в Альтамед Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицино</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество снимков, быстроту получения результатов
                и минимальную лучевую нагрузку при рентгенографии.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Точная диагностика</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После рентгенографии врачи получают полную информацию о состоянии зубов, что соответствует
                ожиданиям пациентов и обеспечивает качественное лечение.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная процедура</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После рентгенографии в Альтамед Голицино пациенты отмечают отсутствие дискомфорта; врачи дают
                подробные объяснения результатов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о рентгенографии в Альтамед Голицино
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Безопасна ли рентгенография для здоровья?
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
                Да, современная цифровая рентгенография безопасна для здоровья. Лучевая нагрузка минимальна
                и соответствует международным стандартам безопасности. Рентгенография в стоматологии необходима
                для точной диагностики и планирования лечения.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Как часто можно делать рентгенографию?
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
                Частота рентгенографии определяется врачом в зависимости от клинической ситуации.
                При необходимости рентгенография может проводиться несколько раз в год для контроля
                лечения и диагностики.
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
                Рентгенография в Альтамед Голицино — получите точную диагностику
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на рентгенографию в клинику «Альтамед Голицино», чтобы получить качественные снимки
                для точной диагностики и планирования лечения.
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
                name: "Клиника «Альтамед Голицино» — рентгенография в Альтамед Голицино",
                url: "https://altamed-golitsino.ru/services/dentistry/xray",
                image: "https://altamed-golitsino.ru/images/dentisrty/Rentgenografiya.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "320"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицино",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Рентгенография",
                areaServed: "Альтамед Голицино и Одинцовский городской округ",
                description:
                  "Рентгенография в Альтамед Голицино: прицельные снимки, панорамная рентгенография, компьютерная томография для точной диагностики в стоматологии.",
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

