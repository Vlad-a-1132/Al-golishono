'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function GeneralDiagnosticsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг общих лечебно-диагностических услуг из fullServicesData
  const services = [
    { code: "А16.07.092", name: "Трепанация зуба, искусственной коронки, 1 ед.", price: 720 },
    { code: "А16.07.082.501.01", name: "Сошлифовывание твердых тканей зуба. Раскрытие полости зуба, 1ед.", price: 510 },
    { code: "А16.07.025.001", name: "Избирательное полирование зуба, 1 зуб", price: 140 },
    { code: "А16.07.025", name: "Избирательное пришлифовывание твердых тканей зуба, 1 ед.", price: 400 },
    { code: "А11.07.010", name: "Введение лекарственных препаратов в пародонтальный карман, 1 карман", price: 870 },
    { code: "А15.07.003.500", name: "Наложение лечебной повязки при заболеваниях слизистой оболочки полости рта и пародонта в области одной челюсти,лечебная повязка септо-пак, 2-3 зуба", price: 430 },
    { code: "А11.07.022.01", name: "Аппликация лекарственного препарата на слизистую оболочку полости рта   /ACEPTA/, 1 посещение", price: 930 },
    { code: "А25.07.001", name: "Назначение лекарственных препаратов при заболеваниях полости рта и зубов, 1ед.", price: 230 },
    { code: "А15.07.003", name: "Наложение лечебной повязки при заболеваниях слизистой оболочки полости рта и пародонта в области одной челюсти/ФАРМАДОНТ/, одна челюсть", price: 440 },
    { code: "А15.07.003.501", name: "Наложение лечебной повязки при заболеваниях слизистой оболочки полости рта и пародонта в области одной челюсти, Лечебная повязка IODO-GLYCOL PASTE, 2-3 зуба", price: 430 },
    { code: "А16.07.019", name: "Временное шинирование при заболеваниях пародонта/ без стоимости материала/, 1зуб", price: 1820 },
    { code: "А05.07.001", name: "Электроодонтометрия зуба, 1зуб", price: 160 },
    { code: "А11.07.011.500", name: "Инъекционное введение лекарственных препаратов в челюстно-лицевую область, инъекция Линкомицина, 1доза", price: 400 },
    { code: "А11.07.011.501", name: "Инъекционное введение лекарственных препаратов в челюстно-лицевую область, инъекция Дексаметазона, 1доза", price: 400 },
    { code: "А11.02.002.001", name: "Внутримышечное введение лекарственных препаратов /без стоимости материала/, 1доза", price: 90 },
    { code: "А16.07.091.000.02", name: "Снятие старой пломбы без анестезии, 1зуб", price: 370 },
    { code: "А16.07.082.000.04", name: "Препарирование зуба, 1зуб", price: 370 },
    { code: "А15.07.002.001", name: "Наложение повязки при операциях в полости рта/Коффердам", price: 750 },
    { code: "А15.07.002.002", name: "Наложение повязки при операциях в полости рта/ОптраГейт", price: 600 }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-600">Стоматология</Link>
            <span>/</span>
            <span className="text-gray-900">Общие лечебно-диагностические услуги</span>
          </nav>
        </div>
      </section>

      {/* Main section */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Общие лечебно-диагностические услуги стоматологии в Одинцово — «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Комплекс диагностических и лечебных процедур в стоматологии Одинцово. Профессиональная помощь при заболеваниях полости рта и зубов.
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/sadasd.webp"
                alt="Общие лечебно-диагностические услуги"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Диагностика и лечение в Одинцово</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/services/sadasd.webp"
                alt="Общие лечебно-диагностические услуги"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Общие лечебно-диагностические услуги в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Комплексная диагностика и лечение заболеваний полости рта</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Что входит в услуги */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что входит в общие лечебно-диагностические услуги стоматологии в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Диагностические процедуры</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Электроодонтометрия — определение жизнеспособности пульпы
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Избирательное пришлифовывание — коррекция окклюзии
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Трепанация зуба — вскрытие полости для доступа к каналам
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Препарирование зуба — подготовка к лечению или протезированию
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечебные процедуры</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Введение лекарственных препаратов в пародонтальные карманы
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Наложение лечебных повязок при заболеваниях слизистой
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Временное шинирование подвижных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Инъекционное и внутримышечное введение препаратов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Прайс-лист общих лечебно-диагностических услуг в Одинцово
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
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться на консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Важность диагностики */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Важность качественной диагностики в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Точная диагностика — залог успешного лечения",
                  text: "Правильно проведенная диагностика позволяет выявить проблему на ранней стадии и выбрать оптимальный метод лечения. В клинике «Альтамед-с» Одинцово мы используем современные методы диагностики для точной оценки состояния зубов и полости рта.",
                  icon: "🔍"
                },
                {
                  title: "Предотвращение осложнений",
                  text: "Своевременная диагностика и лечение помогают избежать развития серьезных осложнений. Регулярные осмотры в стоматологии Одинцово позволяют выявить проблемы до того, как они потребуют сложного и дорогостоящего лечения.",
                  icon: "🛡️"
                },
                {
                  title: "Индивидуальный план лечения",
                  text: "На основе результатов диагностики врач составляет индивидуальный план лечения, учитывающий особенности вашего организма и финансовые возможности. В «Альтамед-с» Одинцово мы всегда находим оптимальное решение.",
                  icon: "📋"
                },
                {
                  title: "Контроль эффективности",
                  text: "Диагностические процедуры помогают контролировать эффективность лечения на всех этапах. Это позволяет своевременно корректировать план лечения и достигать наилучших результатов.",
                  icon: "✅"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Современные методы */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Современные методы лечения в стоматологии Одинцово
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Изоляция рабочего поля",
                  desc: "Использование коффердама и OptraGate обеспечивает сухое рабочее поле, защиту от попадания слюны и максимальную точность работы. В клинике «Альтамед-с» Одинцово мы используем современные методы изоляции для качественного лечения.",
                  benefits: ["Защита от инфицирования", "Комфорт для пациента", "Высокое качество работы"]
                },
                {
                  title: "Терапия пародонтальных заболеваний",
                  desc: "Введение лекарственных препаратов непосредственно в пародонтальные карманы позволяет эффективно бороться с воспалительными процессами. Наши врачи в Одинцово применяют только проверенные препараты.",
                  benefits: ["Локальное воздействие", "Высокая эффективность", "Минимальные побочные эффекты"]
                },
                {
                  title: "Шинирование подвижных зубов",
                  desc: "Временное шинирование помогает стабилизировать подвижные зубы при заболеваниях пародонта, предотвращая их дальнейшее расшатывание и потерю.",
                  benefits: ["Стабилизация зубов", "Предотвращение выпадения", "Восстановление функции"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества клиники */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему выбирают «Альтамед-с» для лечения в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏥", title: "Опытные специалисты", desc: "Врачи с многолетним опытом работы" },
                { icon: "🔬", title: "Современные методики", desc: "Применение новейших технологий" },
                { icon: "💊", title: "Качественные материалы", desc: "Только проверенные препараты и материалы" },
                { icon: "💰", title: "Доступные цены", desc: "Прозрачное ценообразование" },
                { icon: "⏰", title: "Удобный график", desc: "Работаем в удобное для вас время" },
                { icon: "🎯", title: "Индивидуальный подход", desc: "Персональный план лечения для каждого" },
                { icon: "✅", title: "Гарантия качества", desc: "Гарантия на все виды работ" },
                { icon: "📍", title: "Центр Одинцово", desc: "Удобное расположение с парковкой" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость диагностических услуг */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость лечебно-диагностических услуг в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на диагностические услуги в клинике «Альтамед-с» Одинцово формируются с учетом сложности процедуры и используемых материалов. Диагностические процедуры являются важной частью комплексного лечения и помогают точно определить состояние зубов и десен.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Диагностические процедуры в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    В стоматологии Одинцово мы проводим полный комплекс диагностических процедур для точной оценки состояния полости рта. Электроодонтометрия, первичная хирургическая обработка ран и другие процедуры помогают составить правильный план лечения.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Электроодонтометрия от 280₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Введение препаратов от 230₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Хирургическая обработка ран от 610₽
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечебные процедуры в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Лечебно-диагностические услуги в клинике «Альтамед-с» Одинцово включают не только диагностику, но и первичное лечение. Процедуры проводятся квалифицированными специалистами с использованием современных материалов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Наложение лечебных повязок от 430₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Аппликация препаратов от 930₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Временное шинирование от 1820₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость диагностических услуг в стоматологии Одинцово можно узнать после консультации. Мы предлагаем комплексные программы диагностики и лечения по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Детальное описание диагностических процедур */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Подробное описание диагностических процедур в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Электроодонтометрия в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Электроодонтометрия — это современный метод диагностики состояния пульпы зуба, применяемый в стоматологии Одинцово. Процедура позволяет определить жизнеспособность нерва и выявить воспалительные процессы на ранней стадии. В клинике «Альтамед-с» Одинцово электроодонтометрия проводится с использованием современных приборов.
                </p>
                <p className="text-gray-700">
                  Метод безопасен и безболезненен, позволяет врачу точно оценить необходимость лечения корневых каналов. Электроодонтометрия в Одинцово является важной частью комплексной диагностики перед эндодонтическим лечением.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Первичная хирургическая обработка в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Первичная хирургическая обработка ран в стоматологии Одинцово необходима при механических травмах, послеоперационных осложнениях и воспалительных процессах. Процедура включает очистку раны, удаление некротизированных тканей и наложение лечебных повязок.
                </p>
                <p className="text-gray-700">
                  В клинике «Альтамед-с» Одинцово первичная хирургическая обработка проводится с использованием современных антисептических средств и материалов. Правильно выполненная обработка предотвращает развитие инфекции и ускоряет заживление.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечебные процедуры в стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Лечебно-диагностические услуги в клинике «Альтамед-с» Одинцово включают широкий спектр процедур: введение лекарственных препаратов в пародонтальные карманы, наложение лечебных повязок, аппликацию препаратов на слизистую оболочку.
                </p>
                <p className="text-gray-700">
                  Все процедуры выполняются квалифицированными специалистами с использованием сертифицированных препаратов. Лечебные процедуры в Одинцово направлены на устранение воспалительных процессов, заживление ран и профилактику осложнений.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Временное шинирование в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Временное шинирование зубов в стоматологии Одинцово применяется при заболеваниях пародонта для стабилизации подвижных зубов. Процедура позволяет предотвратить дальнейшее расшатывание и сохранить зубы до проведения основного лечения.
                </p>
                <p className="text-gray-700">
                  В клинике «Альтамед-с» Одинцово временное шинирование выполняется с использованием современных материалов и методик. Процедура комфортна для пациента и позволяет сохранить функцию зубного ряда во время лечения пародонтита.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Важность регулярной диагностики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Важность регулярной диагностики в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Раннее выявление проблем</h3>
                <p className="text-gray-700 mb-4">
                  Регулярные диагностические процедуры в стоматологии Одинцово позволяют выявить заболевания на ранней стадии, когда лечение проще и эффективнее. В клинике «Альтамед-с» Одинцово мы рекомендуем проходить диагностику не реже двух раз в год.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Выявление кариеса на стадии белого пятна
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ранняя диагностика заболеваний пародонта
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обнаружение скрытых воспалительных процессов
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Контроль качества лечения</h3>
                <p className="text-gray-700 mb-4">
                  Диагностические процедуры в стоматологии Одинцово необходимы не только для выявления проблем, но и для контроля эффективности лечения. Регулярная диагностика позволяет оценить результаты терапии и при необходимости скорректировать план лечения.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оценка эффективности лечения пародонтита
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Контроль заживления после хирургических вмешательств
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Мониторинг состояния ранее пролеченных зубов
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Регулярная диагностика в клинике «Альтамед-с» Одинцово — это инвестиция в здоровье ваших зубов. Комплексные диагностические программы позволяют выявить проблемы на ранней стадии и провести своевременное лечение, что экономит время и деньги. Опытные врачи стоматологии Одинцово используют современные методы диагностики для точной оценки состояния полости рта и составления эффективного плана лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Что такое электроодонтометрия?",
                  a: "Электроодонтометрия — это метод диагностики, позволяющий определить жизнеспособность пульпы зуба. Процедура проводится с помощью специального аппарата, который измеряет электрическое сопротивление тканей. В клинике «Альтамед-с» Одинцово эта процедура помогает точно определить необходимость эндодонтического лечения."
                },
                {
                  q: "Зачем нужна изоляция рабочего поля?",
                  a: "Изоляция рабочего поля с помощью коффердама или OptraGate необходима для защиты рабочей области от слюны и бактерий. Это обеспечивает более качественное лечение, продлевает срок службы пломб и снижает риск инфицирования."
                },
                {
                  q: "Что такое временное шинирование?",
                  a: "Временное шинирование — это процедура, при которой подвижные зубы связываются специальными материалами для их стабилизации. Это применяется при заболеваниях пародонта для предотвращения дальнейшего расшатывания и потери зубов."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 text-left">{faq.q}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordion === idx && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

