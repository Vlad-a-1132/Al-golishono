'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function ProsthodonticsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг ортопедической стоматологии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога-ортопеда",
      services: [
        { code: "В01.066.001", name: "Прием (осмотр, консультация) врача-стоматолога-ортопеда первичный, 1 ед.", price: 430 },
        { code: "В01.066.002", name: "Прием (осмотр, консультация) врача-стоматолога-ортопеда повторный, 1 ед.", price: 300 },
        { code: "В01.066.001.500", name: "Прием (осмотр, консультация) врача-стоматолога-ортопеда первичный с использованием артикулятора, 1 ед.", price: 2000 },
        { code: "В01.066.002.500", name: " Прием (осмотр, консультация) врача-стоматолога-ортопеда повторный с использованием артикулятора, 1 ед.", price: 1330 }
      ]
    },
    {
      subtitle: "Специальные лечебно-диагностические услуги",
      services: [
        { code: "А02.07.010", name: "Исследование на диагностических моделях челюстей, 1челюсть", price: 2660 },
        { code: "А02.07.010.001", name: "Снятие оттиска с одной челюсти, 1челюсть", price: 1510 },
        { code: "А02.07.010.500", name: "Исследование на диагностических моделях челюстей. Слепок альгинатный простой, 1челюсть", price: 1210 },
        { code: "А02.07.010.501", name: "Исследование на диагностических моделях челюстей.  Слепок силиконовый двухслойный, 1челюсть", price: 2060 },
        { code: "А02.07.010", name: "Исследование на диагностических моделях челюстей, 1 шт.", price: 2900 },
        { code: "А02.07.010.502", name: "Исследование на диагностических моделях челюстей. Восковое моделирование, 1 шт.", price: 1210 }
      ]
    },
    {
      subtitle: "Протезирование зубов - Коронки",
      services: [
        { code: "", name: "Металлокерамическая коронка", price: 10000 },
        { code: "А16.07.004.505", name: "Восстановление зуба коронкой металлокерамической NI-CR, 1 единица", price: 9420 },
        { code: "А16.07.004.506", name: "Восстановление зуба коронкой металлокомпозитной, 1 единица", price: 7610 },
        { code: "А16.07.004.507", name: "Восстановление зуба коронкой металлокерамической с фрезерованием поверхности, 1 единица", price: 9900 },
        { code: "А16.07.004.508", name: "Восстановление зуба коронкой металлокерамической на CO-CR сплаве, 1 единица", price: 13170 },
        { code: "", name: "Цельнокерамическая коронка", price: 18000 },
        { code: "А16.07.003.505", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max, 1 ед.", price: 25000 },
        { code: "", name: "Коронка на основе диоксида циркония", price: 25000 },
        { code: "А16.07.033.500", name: " Восстановление зуба коронкой с использованием  культевой вкладки из Диоксида Циркония, 1 единица", price: 23670 },
        { code: "А16.07.003.504", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка из Диоксида Циркония, 1 единица", price: 23670 },
        { code: "А16.07.004.513", name: "Восстановление зуба коронкой.Коронка из диоксида циркония, CAD-CAM технология, 1 ед.", price: 28500 },
        { code: "А16.07.004.514", name: "Восстановление зуба коронкой.Коронка из прозрачного циркония \"Prettau\", CAD-CAM технология, 1 ед.", price: 29590 },
        { code: "А16.07.004.502", name: "Восстановление зуба коронкой пластмассовой, 1 единица", price: 1930 },
        { code: "А16.07.004.503", name: "Восстановление зуба коронкой литой, 1 единица", price: 5920 },
        { code: "А16.07.004.504", name: "Восстановление зуба коронкой литой фрезерованной, 1 единица", price: 6520 },
        { code: "А16.07.053.500", name: "Снятие несъемной ортопедической конструкции. Снятие коронки пластмассовой или штампованной металлической, 1 единица", price: 1030 },
        { code: "А16.07.053.501", name: "Снятие несъемной ортопедической конструкции. Снятие цельнолитой, металлокомпозитной, металлокерамической коронки, 1 ед.", price: 1640 },
        { code: "А16.07.049.500", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия,  на фосфат-цемент, 1 единица", price: 970 },
        { code: "А16.07.049.501", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия,  на стекло-цемент, 1 единица", price: 1640 },
        { code: "А16.07.049.502", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия,  на композитный материал, 1 единица", price: 1510 },
        { code: "А16.07.049.503", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия, изготовленного в других клиниках на композитный цемент Resinomer, 1 единица", price: 1510 }
      ]
    },
    {
      subtitle: "Виниры",
      services: [
        { code: "", name: "Керамический винир", price: 20000 },
        { code: "А16.07.003.505", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max, 1 ед.", price: 25000 },
        { code: "А16.07.003.506", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max (выполненное мастер техником), 1 ед.", price: 41780 },
        { code: "А16.07.003.507", name: "Восстановление зуба вкладками, виниром, полукоронкой. Винир на рефракторе, 1 ед.", price: 48780 },
        { code: "", name: "Композитный винир", price: 8000 }
      ]
    },
    {
      subtitle: "Мостовидные протезы",
      services: [
        { code: "", name: "Металлокерамический мост от", price: 30000 },
        { code: "А16.07.006.505", name: "Протезирование зуба с использованием имплантата.Металлокерамическая  коронка из кобальт-хром, 1 ед.", price: 42150 },
        { code: "", name: "Цельнокерамический мост от", price: 50000 }
      ]
    },
    {
      subtitle: "Съемные протезы",
      services: [
        { code: "", name: "Частичный съемный протез", price: 25000 },
        { code: "", name: "Полный съемный протез", price: 35000 },
        { code: "", name: "Бюгельный протез", price: 45000 },
        { code: "А16.07.036.501", name: "Протезирование съемными бюгельными протезами. Бюгель с кламерной системой крепления+литье, 1челюсть", price: 53010 },
        { code: "А16.07.036.502", name: "Протезирование съемными бюгельными протезами. Бюгель с микрозамками Bredent + литье,замки, 1челюсть", price: 65090 },
        { code: "А16.07.036.503", name: "Протезирование съемными бюгельными протезами. Бюгель с  элементами микрозамковой и кламмерной систем крепления + литье, 1челюсть", price: 68710 },
        { code: "А16.07.023.500", name: "Протезирование зубов полными съемными пластиночными протезами. Пластиночный протез с замковой системой крепления, 1челюсть", price: 31280 },
        { code: "А16.07.036.504", name: "Протезирование съемными бюгельными протезами. Швенкригель односторонний, 1челюсть", price: 46980 },
        { code: "А16.07.036.505", name: "Протезирование съемными бюгельными протезами. Швенкригель двухсторонний, 1челюсть", price: 68710 },
        { code: "А16.07.034.500", name: "Восстановление целостности зубного ряда съемными мостовидными протезами. Иммедиант протез, 1 ед.", price: 10140 },
        { code: "А23.07.002.033", name: "Изготовление частичного съемного протеза, 1 ед.", price: 21000 },
        { code: "", name: "Перебазировка съемного протеза", price: 5000 },
        { code: "А23.07.002.034", name: "Перебазировка съемного протеза лабораторным методом, 1челюсть", price: 5550 },
        { code: "А23.07.002.506.01", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Перебазировка в полости рта, 1челюсть", price: 3750 },
        { code: "", name: "Починка съемного протеза", price: 3000 },
        { code: "А23.07.002.505.02", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Ремонт протеза срочный (2-3 часа), 1челюсть", price: 5550 },
        { code: "А23.07.002.506", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Ремонт протеза плановый (2-е суток), 1челюсть", price: 4710 },
        { code: "А23.07.002.035", name: "Приварка кламмера, 1 ед.", price: 2660 },
        { code: "А23.07.002.036", name: "Приварка зуба, 1 ед.", price: 2660 },
        { code: "А23.07.002.502", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Замена элементов микрозамковых креплений фирмы Bredent, 1 ед.", price: 3750 },
        { code: "А23.07.002.503", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Коррекция протеза, 1 ед.", price: 1160 },
        { code: "А23.07.002.505.01", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Бесцветная пластмасса                   или материал, 1челюсть", price: 3750 },
        { code: "А23.07.002.507", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Армирование базиса стальным литым каркасом, 1 ед.", price: 5200 },
        { code: "А23.07.002.506.02", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Небный бюгель с изготовлением, 1 ед.", price: 5680 },
        { code: "А23.07.002.030", name: "Изготовление коронки пластмассовой, 1 посещение", price: 3810 },
        { code: "А23.07.002.504", name: "Услуги по изготовлению ортопедической конструкции стоматологической. Изготовление индивидуальной ложки, 1челюсть", price: 3750 }
      ]
    },
    {
      subtitle: "Вкладки",
      services: [
        { code: "", name: "Керамическая вкладка", price: 12000 },
        { code: "А16.07.003.505", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка керамическая, коронка, винир e-max, 1 ед.", price: 25000 },
        { code: "А16.07.003.500", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка,литая 1 единица", price: 5920 },
        { code: "А16.07.003.501", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка разборная,литая 1 единица", price: 8340 },
        { code: "А16.07.003.502", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка с аттачменом, литая,1 единица", price: 10750 },
        { code: "А16.07.004.515", name: "Восстановление зуба коронкой. Восстановление коронковой части молочного зуба металло-композитной коронкой, 1ед.", price: 6890 },
        { code: "", name: "Композитная вкладка", price: 7000 }
      ]
    },
    {
      subtitle: "Протезирование на имплантатах",
      services: [
        { code: "", name: "Коронка на имплантате от", price: 25000 },
        { code: "А16.07.006.502", name: "Протезирование зуба с использованием имплантата. Временная коронка на имплантате, 1 ед.", price: 8000 },
        { code: "А16.07.006.503", name: "Протезирование зуба с использованием имплантата. Коронка из диоксида циркония на имплантате (винтовая фиксация), 1 ед.", price: 38500 },
        { code: "А16.07.006.504", name: "Протезирование зуба с использованием имплантата. Коронка из диоксида циркония на имплантате (цементная фиксация),позиционирующий абатмент 1 ед.", price: 45000 },
        { code: "А16.07.006.505", name: "Протезирование зуба с использованием имплантата.Металлокерамическая  коронка из кобальт-хром, 1 ед.", price: 42150 },
        { code: "", name: "Мостовидный протез на имплантатах от", price: 70000 }
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
            <span className="text-gray-900">Ортопедическая стоматология</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Ортопедическая стоматология в Одинцово — протезирование зубов в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Профессиональное протезирование зубов в Одинцово. Коронки, виниры, мосты, съемные протезы. Восстановление красивой улыбки и жевательной функции в клинике «Альтамед-с».
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/yslugi/Orthopedic dentistry.webp"
                alt="Ортопедическая стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Протезирование зубов в Одинцово</div>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/yslugi/Orthopedic dentistry.webp"
                alt="Ортопедическая стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Ортопедическая стоматология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Восстановление зубов коронками, винирами, протезами</p>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое ортопедическая стоматология в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Виды протезирования</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Несъемное протезирование (коронки, виниры, мосты)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Съемное протезирование (бюгельные, акриловые протезы)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Протезирование на имплантах
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Микропротезирование (вкладки, виниры)
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества в «Альтамед-с»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Современные материалы и технологии CAD/CAM
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Опытные ортопеды с многолетним стажем
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Высокая эстетика и функциональность
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гарантия на все виды протезов
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
            Услуги ортопедической стоматологии в Одинцово
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
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
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
              Современные технологии протезирования в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "CAD/CAM технологии",
                  text: "В клинике «Альтамед-с» Одинцово используются современные CAD/CAM системы для точного изготовления коронок, виниров и вкладок. Это обеспечивает идеальную посадку и высокую эстетику протезов.",
                  icon: "💻"
                },
                {
                  title: "Диоксид циркония",
                  text: "Протезы из диоксида циркония обладают высокой прочностью, биосовместимостью и естественной эстетикой. В стоматологии Одинцово мы используем только проверенные материалы.",
                  icon: "💎"
                },
                {
                  title: "Керамика E-max",
                  text: "Керамика E-max идеально подходит для виниров и коронок на передние зубы. Высокая эстетика и долговечность делают эти протезы популярными в Одинцово.",
                  icon: "✨"
                },
                {
                  title: "Бюгельное протезирование",
                  text: "Современные бюгельные протезы в «Альтамед-с» Одинцово изготавливаются с использованием микрозамков и кламмеров, обеспечивая комфорт и надежную фиксацию.",
                  icon: "🔧"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
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
              Этапы протезирования в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Консультация", desc: "Осмотр, планирование, выбор метода протезирования" },
                { step: "2", title: "Подготовка", desc: "Подготовка зубов, снятие слепков" },
                { step: "3", title: "Изготовление", desc: "Изготовление протеза в лаборатории" },
                { step: "4", title: "Установка", desc: "Примерка и фиксация готового протеза" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость протезирования */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость протезирования зубов в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на протезирование в клинике «Альтамед-с» Одинцово зависят от типа протеза, используемых материалов и объема работы. Мы предлагаем различные варианты протезирования: от доступных металлокерамических коронок до премиальных протезов из диоксида циркония.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Несъемное протезирование в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Коронки и мосты в стоматологии Одинцово — это надежный способ восстановления зубов. Цены зависят от материала: металлокерамика — доступный вариант, диоксид циркония — премиум-решение с максимальной эстетикой.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Металлокерамическая коронка от 9420₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Коронка из диоксида циркония от 28500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Виниры e-max от 25000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Съемное протезирование в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Съемные протезы в клинике «Альтамед-с» Одинцово используются при отсутствии большого количества зубов. Бюгельные протезы с микрозамками обеспечивают комфорт и надежную фиксацию.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Бюгельный протез от 53010₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Полный съемный протез от 31280₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Частичный съемный протез от 21000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость протезирования в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы протезирования. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Виды протезов подробно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Виды протезов в ортопедической стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Коронки в стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Коронки в клинике «Альтамед-с» Одинцово используются для восстановления сильно разрушенных зубов. Металлокерамические коронки сочетают прочность и доступную цену. Коронки из диоксида циркония в стоматологии Одинцово обеспечивают максимальную эстетику и долговечность, идеально подходят для передних зубов.
                </p>
                <p className="text-gray-700">
                  В клинике Одинцово мы используем CAD/CAM технологии для изготовления коронок, что обеспечивает идеальную посадку и высокое качество. Все коронки в стоматологии Одинцово изготавливаются индивидуально с учетом особенностей прикуса пациента.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Виниры в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Виниры в стоматологии Одинцово — это тонкие керамические пластинки, которые устанавливаются на переднюю поверхность зубов для улучшения их внешнего вида. В клинике «Альтамед-с» Одинцово мы используем виниры e-max, которые имеют высокую прочность и естественную прозрачность.
                </p>
                <p className="text-gray-700">
                  Виниры в Одинцово идеально подходят для исправления цвета, формы зубов, закрытия промежутков между зубами. Процедура установки виниров в стоматологии Одинцово требует минимального препарирования зубов и обеспечивает долгосрочный результат.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Мостовидные протезы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Мостовидные протезы в стоматологии Одинцово используются для восстановления одного или нескольких отсутствующих зубов. Мост крепится на соседние зубы или импланты. В клинике «Альтамед-с» Одинцово мы изготавливаем мосты из различных материалов.
                </p>
                <p className="text-gray-700">
                  Современные мостовидные протезы в Одинцово неотличимы от естественных зубов и обеспечивают полноценную жевательную функцию. Протезирование мостами в стоматологии Одинцово — это надежный способ восстановления утраченных зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Съемные протезы в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Съемные протезы в клинике «Альтамед-с» Одинцово применяются при отсутствии большого количества зубов или полной адентии. Бюгельные протезы с кламмерами или микрозамками обеспечивают надежную фиксацию и комфорт при ношении.
                </p>
                <p className="text-gray-700">
                  Современные съемные протезы в стоматологии Одинцово изготавливаются из гипоаллергенных материалов и не вызывают дискомфорта. Протезирование в клинике Одинцово включает подгонку протеза и обучение пациента правильному уходу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Уход за протезами */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Уход за протезами в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Уход за несъемными протезами</h3>
                <p className="text-gray-700 mb-4">
                  Несъемные протезы (коронки, виниры, мосты) в стоматологии Одинцово требуют такого же ухода, как и естественные зубы. Регулярная чистка дважды в день, использование зубной нити и ирригатора помогут сохранить протезы в идеальном состоянии.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярная чистка мягкой щеткой и пастой
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование зубной нити для очистки межзубных промежутков
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная чистка в клинике Одинцово раз в полгода
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Уход за съемными протезами</h3>
                <p className="text-gray-700 mb-4">
                  Съемные протезы в стоматологии Одинцово требуют особого ухода: ежедневная чистка специальными средствами, хранение в чистом состоянии. Врачи клиники «Альтамед-с» Одинцово дают подробные инструкции по уходу.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Чистка после каждого приема пищи
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование специальных таблеток для очистки
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярная перебазировка в клинике Одинцово
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-amber-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Правильный уход за протезами в клинике «Альтамед-с» Одинцово обеспечивает их долговечность и комфорт при использовании. Специалисты стоматологии Одинцово обучают пациентов правильным техникам ухода и проводят регулярные контрольные осмотры для своевременной коррекции протезов. При правильном уходе протезы в стоматологии Одинцово прослужат многие годы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

