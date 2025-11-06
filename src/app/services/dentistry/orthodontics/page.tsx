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
        { code: "", name: "Консультация ортодонта", price: 1000 },
        { code: "В01.063.001", name: "Прием (осмотр, консультация) врача-ортодонта первичный, 1 ед.", price: 1820 },
        { code: "В01.063.002", name: "Прием (осмотр, консультация) врача-ортодонта повторный, 1 ед.", price: 1820 },
        { code: "", name: "Диагностика и составление плана лечения", price: 5000 },
        { code: "В01.063.001.500", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом моделей, 1 ед.", price: 3510 },
        { code: "В01.063.002.500", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом моделей, 1 ед.", price: 3510 },
        { code: "В01.063.001.501", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом ТРГ, 1 ед.", price: 4960 },
        { code: "В01.063.002.501", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом ТРГ, 1 ед.", price: 4960 },
        { code: "В01.063.001.502", name: "Прием (осмотр, консультация) врача-ортодонта первичный с анализом ОПТГ, 1 ед.", price: 800 },
        { code: "В01.063.002.502", name: "Прием (осмотр, консультация) врача-ортодонта повторный с анализом ОПТГ, 1 ед.", price: 670 }
      ]
    },
    {
      subtitle: "Специальные лечебно-диагностические услуги",
      services: [
        { code: "А23.07.002.027", name: "Изготовление контрольной модели, 1ед", price: 1070 },
        { code: "А02.07.010.002", name: "Снятие оттиска с одной челюсти, 1 челюсть", price: 2170 },
        { code: "А02.07.006", name: "Определение прикуса, 1 ед", price: 1450 },
        { code: "А02.07.010.503", name: "Исследование на диагностических моделях челюстей. Снятие слепка с одной челюсти силиконовым материалом", price: 2170 },
        { code: "А02.07.014", name: "Гнатодинамометрия, 1 ед.", price: 40810 },
        { code: "A16.07.028.500", name: "Ортодонтическая коррекция. Аппроксимальная сепарация в пределах одного зуба, 1 зуб", price: 370 },
        { code: "А23.07.002.052", name: "Изготовление контрольной модели с оформлением цоколя, 1 челюсть", price: 2900 }
      ]
    },
    {
      subtitle: "Брекет-системы",
      services: [
        { code: "", name: "Металлическая брекет-система от", price: 40000 },
        { code: "А16.07.048.500", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты металлические, 1 челюсть", price: 60860 },
        { code: "", name: "Керамическая брекет-система от", price: 60000 },
        { code: "А16.07.048.501", name: "Ортодонтическая коррекция с применением брекет-систем. Вестибулярные брекеты комбинированные, 1 челюсть", price: 75470 },
        { code: "", name: "Сапфировая брекет-система от", price: 80000 },
        { code: "А16.07.048.502", name: "Ортодонтическая коррекция с применением брекет-систем вестибулярные брекеты сапфировые, 1 челюсть", price: 85730 },
        { code: "", name: "Лингвальная брекет-система от", price: 150000 },
        { code: "", name: "Коррекция брекет-системы", price: 3000 },
        { code: "", name: "Снятие брекет-системы", price: 5000 },
        { code: "А23.07.001.502", name: "Услуги по обслуживанию ортодонических аппаратов. Смена ортодонтической дуги (включая снятие и наложение лигатур), 1 ед.", price: 5800 }
      ]
    },
    {
      subtitle: "Элайнеры и съемные аппараты",
      services: [
        { code: "", name: "Установка элайнеров от", price: 100000 },
        { code: "А16.07.047.502", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами простого случая, 2 челюсти", price: 276030 },
        { code: "А16.07.047.503", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами сложного случая, 2 челюсти", price: 352590 },
        { code: "А16.07.047.504", name: "Ортодонтическая коррекция съемными ортодонтическим аппаратом. Лечение элайнером сложного случая, 1 челюсть", price: 218560 },
        { code: "А16.07.047.505", name: "Ортодонтическая коррекция съемным ортодонтическим аппаратом. Лечение элайнерами  простого случая, 1 челюсть", price: 175330 },
        { code: "", name: "Установка ретейнера", price: 4000 },
        { code: "А16.07.046.500", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Фиксация лингвального ретейнера на фронтальные зубы, 1 ед.", price: 10630 },
        { code: "", name: "Изготовление каппы", price: 3000 }
      ]
    },
    {
      subtitle: "Несъемные аппараты",
      services: [
        { code: "А16.07.046.501", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Фиксация ретейнера к одному зубу, 1 ед.", price: 2170 },
        { code: "А16.07.046.502", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Установка аппарата Forsus, 1 ед.", price: 3380 },
        { code: "А16.07.046.503", name: "Ортодонтическая коррекция несъемным ортодонтическим аппаратом. Активация аппарата Forsus, 1 ед.", price: 1690 }
      ]
    },
    {
      subtitle: "Услуги по обслуживанию ортодонтических аппаратов",
      services: [
        { code: "А23.07.001.500", name: "Услуги по обслуживанию ортодонических аппаратов. Наклеивание одного брекета (кнопки), 1 ед.", price: 1930 },
        { code: "А23.07.003.500", name: "Припасовка и наложение ортодонтического аппарата. Припасовка и фиксация одного ортодонтического кольца, 1 ед.", price: 1580 },
        { code: "А23.07.001.501", name: "Услуги по обслуживанию ортодонических аппаратов. Установка сепарационного кольца, 1 ед.", price: 160 },
        { code: "А23.07.003.501", name: "Припасовка и наложение ортодонтического аппарата. Припасовка и фиксация одной ортодонтической дуги, 1 ед.", price: 1330 },
        { code: "А23.07.001.502", name: "Услуги по обслуживанию ортодонических аппаратов. Смена ортодонтической дуги (включая снятие и наложение лигатур), 1 ед.", price: 5800 },
        { code: "А23.07.001.503", name: "Услуги по обслуживанию ортодонических аппаратов. Изготовление простого изгиба на дуге, 1 ед.", price: 480 },
        { code: "А23.07.001.504", name: "Услуги по обслуживанию ортодонических аппаратов. Изготовление сложного изгиба на дуге (петли), 1 ед.", price: 610 },
        { code: "А23.07.001.514.01", name: "Услуги по обслуживанию ортодонических аппаратов. Наблюдение за ходом лечения, 1 посещение/мес.", price: 9420 },
        { code: "А23.07.001.514.02", name: "Услуги по обслуживанию ортодонических аппаратов. Наблюдение за ходом лечения, 1 посещение в 2 нед.", price: 5070 }
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

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Ортодонтия в Одинцово — исправление прикуса в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Исправление прикуса и выравнивание зубов в Одинцово. Брекеты, элайнеры, ретейнеры. Профессиональная ортодонтическая помощь для красивой улыбки в клинике «Альтамед-с».
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Orthodontist.webp"
                alt="Ортодонтия"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Исправление прикуса в Одинцово</div>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/services/Orthodontist.webp"
                alt="Ортодонтия"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Ортодонтия в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Исправление прикуса брекетами и элайнерами</p>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Методы исправления прикуса в стоматологии Одинцово
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
            Услуги ортодонтии в Одинцово
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
              <Link href="/appointments" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
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
              Когда нужна ортодонтическая помощь в Одинцово
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
              Преимущества ортодонтического лечения в «Альтамед-с» Одинцово
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
              Стоимость ортодонтического лечения в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на ортодонтическое лечение в клинике «Альтамед-с» Одинцово зависят от выбранной системы (брекеты или элайнеры), сложности случая и длительности лечения. Ортодонтия в Одинцово позволяет исправить прикус в любом возрасте.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Брекет-системы в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Брекеты в стоматологии Одинцово — это классический метод исправления прикуса. Цены зависят от материала: металлические — наиболее доступные, сапфировые — максимально эстетичные, лингвальные — полностью скрытые.
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Элайнеры в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Элайнеры в клинике «Альтамед-с» Одинцово — это современная альтернатива брекетам. Прозрачные каппы практически незаметны и обеспечивают комфортное ношение. Цена зависит от сложности случая.
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
                Точную стоимость ортодонтического лечения в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
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
              Виды ортодонтического лечения в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Брекет-системы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Брекет-системы в клинике «Альтамед-с» Одинцово — это наиболее эффективный метод исправления прикуса. Металлические брекеты — классический вариант с высокой надежностью. Керамические и сапфировые брекеты в стоматологии Одинцово обеспечивают эстетику, сливаясь с цветом зубов. Лингвальные брекеты устанавливаются с внутренней стороны зубов и полностью незаметны.
                </p>
                <p className="text-gray-700">
                  Лечение на брекетах в стоматологии Одинцово занимает от 1 до 2 лет в зависимости от сложности случая. Регулярные визиты к ортодонту в клинике Одинцово необходимы для активации аппарата и контроля процесса лечения.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Элайнеры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Элайнеры в стоматологии Одинцово — это прозрачные каппы, которые изготавливаются индивидуально для каждого пациента. В клинике «Альтамед-с» Одинцово мы используем элайнеры для исправления легких и средних нарушений прикуса. Каппы сменяются каждые 1-2 недели, постепенно перемещая зубы в правильное положение.
                </p>
                <p className="text-gray-700">
                  Преимущества элайнеров в Одинцово: полная незаметность, удобство ношения, возможность снятия для гигиены и приема пищи. Лечение элайнерами в стоматологии Одинцово особенно популярно среди взрослых пациентов, ценящих эстетику.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ретейнеры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  После завершения ортодонтического лечения в стоматологии Одинцово необходимо закрепить результат с помощью ретейнеров. В клинике «Альтамед-с» Одинцово мы устанавливаем как несъемные лингвальные ретейнеры, так и съемные каппы для ночного ношения.
                </p>
                <p className="text-gray-700">
                  Ретенционный период в стоматологии Одинцово может длиться столько же, сколько и само лечение. Ношение ретейнеров в клинике Одинцово предотвращает возврат зубов в исходное положение и закрепляет достигнутый результат.
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
              В каком возрасте лучше начинать ортодонтическое лечение в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Детская ортодонтия в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Первая консультация ортодонта в клинике «Альтамед-с» Одинцово рекомендуется в возрасте 6-7 лет, когда начинается смена молочных зубов на постоянные. Раннее ортодонтическое лечение в стоматологии Одинцово может предотвратить развитие серьезных нарушений прикуса и сократить длительность лечения в будущем.
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ортодонтия для взрослых в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Ортодонтическое лечение в стоматологии Одинцово возможно в любом возрасте. Взрослые пациенты в клинике «Альтамед-с» Одинцово часто выбирают элайнеры или лингвальные брекеты из-за эстетических соображений. Лечение во взрослом возрасте может занять больше времени, но результаты не менее эффективны.
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
                Ортодонтическое лечение в клинике «Альтамед-с» Одинцово эффективно в любом возрасте. Специалисты стоматологии Одинцово подбирают оптимальный метод лечения с учетом индивидуальных особенностей пациента и его пожеланий. Раннее начало лечения позволяет сократить его длительность и избежать осложнений. Однако никогда не поздно начать исправление прикуса в стоматологии Одинцово для улучшения здоровья и эстетики улыбки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

