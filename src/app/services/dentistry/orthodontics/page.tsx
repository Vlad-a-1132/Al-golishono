'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function OrthodonticsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг ортодонтии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога-ортодонта",
      services: [
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта первичный, 1 ед.", price: 3000 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта повторный, 1 ед.", price: 1920 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом моделей, 1 ед.", price: 3690 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом моделей, 1 ед.", price: 3690 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом ТРГ, 1 ед.", price: 5210 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом ТРГ, 1 ед.", price: 5210 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом ОПТГ, 1 ед.", price: 840 },
        { code: "", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом ОПТГ, 1 ед.", price: 710 }
      ]
    },
    {
      subtitle: "Специальные лечебно-диагностические услуги",
      services: [
        { code: "", name: "Изготовление контрольной модели, 1ед", price: 1130 },
        { code: "", name: "Снятие оттиска с одной челюсти, 1 челюсть", price: 2280 },
        { code: "", name: "Определение прикуса, 1 ед", price: 1530 },
        { code: "", name: "Исследование на диагностических моделях челюстей. Снятие слепка с одной челюсти силиконовым материалом", price: 2280 },
        { code: "", name: "Гнатодинамометрия, 1 ед.", price: 42860 },
        { code: "", name: "Ортодонтическая коррекция. Аппроксимальная сепарация в пределах одного зуба, 1 зуб", price: 390 },
        { code: "", name: "Изготовление контрольной модели с оформлением цоколя, 1 челюсть", price: 3050 }
      ]
    },
    {
      subtitle: "Брекет-системы",
      services: [
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты металлические, 1 челюсть", price: 63910 },
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты комбинированные, 1 челюсть", price: 79250 },
        { code: "", name: "Ортодонтическая коррекция с применением брекет-систем вестибулярные брекеты сапфировые, 1 челюсть", price: 90020 }
      ]
    },
    {
      subtitle: "Съемные аппараты",
      services: [
        { code: "", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами простого случая, 2 челюсти", price: 289840 },
        { code: "", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами сложного случая, 2 челюсти", price: 370220 },
        { code: "", name: "Ортодонтическая коррекция удерживателем. Фиксация удерживателя пространства после раннего удаления молочного зуба, 1 зуб", price: 6740 },
        { code: "", name: "Ортодонтическая коррекция съемными ортодонтическим аппаратом. Лечение элайнером сложного случая, 1 челюсть", price: 229490 },
        { code: "", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами  простого случая, 1 челюсть", price: 184100 }
      ]
    },
    {
      subtitle: "Несъемные аппараты",
      services: [
        { code: "", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Фиксация лингвального ретейнера на фронтальные зубы, 1 ед.", price: 11170 },
        { code: "", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Фиксация ретейнера к одному зубу, 1 ед.", price: 2280 },
        { code: "", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Установка аппарата Forsus, 1 ед.", price: 3550 },
        { code: "", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Активация аппарата Forsus, 1 ед.", price: 1780 }
      ]
    },
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
            <span className="text-gray-900">Ортодонтия</span>
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
                Ортодонтия в клинике «Альтамед Голицыно»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Исправление прикуса брекетами, элайнерами и ретейнерами в Альтамед Голицыно
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp" 
                alt="Ортодонтия" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Методы исправления прикуса в стоматологии Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Брекет-системы</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Вестибулярные брекеты (металлические, керамические, сапфировые)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Лингвальные брекеты (невидимые)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Самолигирующие брекет-системы
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Элайнеры (каппы)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Прозрачные каппы для выравнивания зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Незаметны при ношении
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Съемные для удобства гигиены
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги ортодонтии в Альтамед Голицыно
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
              Когда нужна ортодонтическая помощь в Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "😬", title: "Неровные зубы", desc: "Скученность или промежутки между зубами" },
                { icon: "🦷", title: "Неправильный прикус", desc: "Глубокий, открытый, перекрестный прикус" },
                { icon: "😣", title: "Выступающие зубы", desc: "Верхние зубы сильно выступают вперед" },
                { icon: "🦷", title: "Проблемы с жеванием", desc: "Трудности при откусывании и пережевывании" },
                { icon: "😰", title: "Щелчки в суставе", desc: "Проблемы с височно-нижнечелюстным суставом" },
                { icon: "💔", title: "Нарушение речи", desc: "Проблемы с произношением из-за прикуса" },
                { icon: "🦷", title: "Стираемость зубов", desc: "Преждевременное стирание эмали" },
                { icon: "😬", title: "Асимметрия лица", desc: "Неравномерное развитие челюстей" },
                { icon: "📅", title: "Профилактика", desc: "Предотвращение проблем в будущем" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Преимущества ортодонтического лечения в «Альтамед Голицыно» Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎯", title: "Индивидуальный план", desc: "Персональный подход для каждого пациента" },
                { icon: "🔬", title: "Современные технологии", desc: "Использование новейших методов лечения" },
                { icon: "💎", title: "Качественные материалы", desc: "Только проверенные брекет-системы" },
                { icon: "✅", title: "Гарантия результата", desc: "Контроль на всех этапах лечения" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость ортодонтического лечения */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость ортодонтического лечения в стоматологии Альтамед Голицыно
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на ортодонтическое лечение в клинике «Альтамед Голицыно» Альтамед Голицыно зависят от выбранной системы (брекеты или элайнеры), сложности случая и длительности лечения. Ортодонтия в Альтамед Голицыно позволяет исправить прикус в любом возрасте.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Брекет-системы в Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Брекеты в стоматологии Альтамед Голицыно — это классический метод исправления прикуса. Цены зависят от материала: металлические — наиболее доступные, сапфировые — максимально эстетичные, лингвальные — полностью скрытые.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Металлические брекеты от 40000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Керамические брекеты от 60000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лингвальные брекеты от 150000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Элайнеры в Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Элайнеры в клинике «Альтамед Голицыно» Альтамед Голицыно — это современная альтернатива брекетам. Прозрачные каппы практически незаметны и обеспечивают комфортное ношение. Цена зависит от сложности случая.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Элайнеры простой случай от 276030₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Элайнеры сложный случай от 352590₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Консультация ортодонта от 1000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость ортодонтического лечения в стоматологии Альтамед Голицыно можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения. Запишитесь на прием в «Альтамед Голицыно» Альтамед Голицыно для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Виды ортодонтического лечения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Виды ортодонтического лечения в стоматологии Альтамед Голицыно
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Брекет-системы в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Брекет-системы в клинике «Альтамед Голицыно» Альтамед Голицыно — это наиболее эффективный метод исправления прикуса. Металлические брекеты — классический вариант с высокой надежностью. Керамические и сапфировые брекеты в стоматологии Альтамед Голицыно обеспечивают эстетику, сливаясь с цветом зубов. Лингвальные брекеты устанавливаются с внутренней стороны зубов и полностью незаметны.
                </p>
                <p className="text-gray-700">
                  Лечение на брекетах в стоматологии Альтамед Голицыно занимает от 1 до 2 лет в зависимости от сложности случая. Регулярные визиты к ортодонту в клинике Альтамед Голицыно необходимы для активации аппарата и контроля процесса лечения.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Элайнеры в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Элайнеры в стоматологии Альтамед Голицыно — это прозрачные каппы, которые изготавливаются индивидуально для каждого пациента. В клинике «Альтамед Голицыно» Альтамед Голицыно мы используем элайнеры для исправления легких и средних нарушений прикуса. Каппы сменяются каждые 1-2 недели, постепенно перемещая зубы в правильное положение.
                </p>
                <p className="text-gray-700">
                  Преимущества элайнеров в Альтамед Голицыно: полная незаметность, удобство ношения, возможность снятия для гигиены и приема пищи. Лечение элайнерами в стоматологии Альтамед Голицыно особенно популярно среди взрослых пациентов, ценящих эстетику.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ретейнеры в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  После завершения ортодонтического лечения в стоматологии Альтамед Голицыно необходимо закрепить результат с помощью ретейнеров. В клинике «Альтамед Голицыно» Альтамед Голицыно мы устанавливаем как несъемные лингвальные ретейнеры, так и съемные каппы для ночного ношения.
                </p>
                <p className="text-gray-700">
                  Ретенционный период в стоматологии Альтамед Голицыно может длиться столько же, сколько и само лечение. Ношение ретейнеров в клинике Альтамед Голицыно предотвращает возврат зубов в исходное положение и закрепляет достигнутый результат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* В каком возрасте начинать лечение */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              В каком возрасте лучше начинать ортодонтическое лечение в Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Детская ортодонтия в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Первая консультация ортодонта в клинике «Альтамед Голицыно» Альтамед Голицыно рекомендуется в возрасте 6-7 лет, когда начинается смена молочных зубов на постоянные. Раннее ортодонтическое лечение в стоматологии Альтамед Голицыно может предотвратить развитие серьезных нарушений прикуса и сократить длительность лечения в будущем.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исправление вредных привычек (сосание пальца, ротовое дыхание)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Коррекция уздечек языка и губ
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование съемных аппаратов для коррекции прикуса
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ортодонтия для взрослых в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Ортодонтическое лечение в стоматологии Альтамед Голицыно возможно в любом возрасте. Взрослые пациенты в клинике «Альтамед Голицыно» Альтамед Голицыно часто выбирают элайнеры или лингвальные брекеты из-за эстетических соображений. Лечение во взрослом возрасте может занять больше времени, но результаты не менее эффективны.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исправление прикуса перед протезированием
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Подготовка к имплантации
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Улучшение эстетики улыбки в любом возрасте
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-pink-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Ортодонтическое лечение в клинике «Альтамед Голицыно» Альтамед Голицыно эффективно в любом возрасте. Специалисты стоматологии Альтамед Голицыно подбирают оптимальный метод лечения с учетом индивидуальных особенностей пациента и его пожеланий. Раннее начало лечения позволяет сократить его длительность и избежать осложнений. Однако никогда не поздно начать исправление прикуса в стоматологии Альтамед Голицыно для улучшения здоровья и эстетики улыбки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Стоматолог-ортодонт в Альтамед Голицыно: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицыно» предлагает услуги ортодонтии в Альтамед Голицыно — исправление прикуса брекетами,
                элайнерами, ретейнерами. Мы применяем современные технологии, качественные аппараты и обеспечиваем
                эффективное исправление прикуса.
              </p>
              <p>
                Врач-стоматолог-ортодонт проводит диагностику, планирование лечения, установку брекет-систем,
                элайнеров и других ортодонтических аппаратов. У нас можно пройти исправление прикуса брекетами,
                элайнерами и другими методами ортодонтии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость ортодонтии в Альтамед Голицыно
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
                  Исправление прикуса с использованием современных брекет-систем и элайнеров.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Диагностику и планирование лечения с использованием КТ и моделей.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных ортодонтов, специализирующихся на исправлении прикуса.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Регулярное обслуживание ортодонтических аппаратов для эффективности лечения.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о стоматологе-ортодонте в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицыно</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают эффективность исправления прикуса, качество брекет-систем
                и внимательное отношение ортодонтов к процессу лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После исправления прикуса пациенты получают красивую улыбку, что соответствует
                ожиданиям и обеспечивает здоровье зубов и десен.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После установки брекетов в Голицыно пациенты отмечают комфорт; ортодонты дают
                подробные инструкции по уходу за аппаратами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологе-ортодонте в Альтамед Голицыно
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  В каком возрасте лучше начинать ортодонтическое лечение?
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
                Первая консультация ортодонта рекомендуется в возрасте 6-7 лет. Раннее лечение может предотвратить
                развитие серьезных нарушений прикуса. Однако ортодонтическое лечение эффективно в любом возрасте.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Что лучше: брекеты или элайнеры?
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
                Выбор между брекетами и элайнерами зависит от сложности случая и пожеланий пациента. Брекеты
                эффективны для сложных случаев, элайнеры — для легких и средних нарушений прикуса. Врач-ортодонт
                подберет оптимальный вариант.
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
                Стоматолог-ортодонт в Альтамед Голицыно — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицыно», чтобы узнать стоимость исправления прикуса,
                подобрать подходящие аппараты и получить индивидуальный план лечения.
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
                name: "Клиника «Альтамед Голицыно» — ортодонтия в Альтамед Голицыно",
                url: "https://altamed-golitsino.ru/services/dentistry/orthodontics",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "300"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицыно",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Ортодонтия",
                areaServed: "Альтамед Голицыно и Голицыно",
                description:
                  "Ортодонтия в Альтамед Голицыно: исправление прикуса брекетами, элайнерами, ретейнерами. Опытные ортодонты, современные методы. Запишитесь на консультацию в клинику «Альтамед Голицыно».",
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

