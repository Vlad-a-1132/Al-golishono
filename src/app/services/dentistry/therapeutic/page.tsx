'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function TherapeuticDentistryPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг терапевтической стоматологии из fullServicesData
  const fullServicesData = [
    {
      subtitle: "Консультация, осмотр, составление плана лечения",
      services: [
        { code: "", name: "Консультация, осмотр, составление плана лечения", price: 500 }
      ]
    },
    {
      subtitle: "Анестезия",
      services: [
        { code: "В01.003.004.004.01", name: "Анестезия инфильтрационная", price: 800 },
        { code: "В01.003.004.002", name: "Анестезия проводниковая", price: 800 },
        { code: "В01.003.004.004.01", name: "Аппликационная анестезия /стоматология/, 1 ед.", price: 280 },
        { code: "В01.003.004.500", name: "Инфильтрационная анестезия апмульная, 1 ед.", price: 510 },
        { code: "В01.003.004.501", name: "Инфильтрационная анестезия карпульная, 1 ед.", price: 720 },
        { code: "В01.003.004.501.01", name: "Инфильтрационная анестезия карпульная одноразовым шприцем, 1 ед.", price: 830 }
      ]
    },
    {
      subtitle: "Лечение кариеса",
      services: [
        { code: "", name: "Поверхностный кариес", price: 3500 },
        { code: "", name: "Средний кариес", price: 4500 },
        { code: "", name: "Глубокий кариес", price: 5500 },
        { code: "А16.07.002.500", name: "Восстановление зуба пломбой химического отвердения Compolite plus, 1зуб", price: 1070 },
        { code: "А16.07.002.501", name: "Восстановление зуба пломбой светоотверждаемой Vitremer, 1зуб", price: 2170 },
        { code: "А16.07.002.502", name: "Восстановление зуба пломбой светоотверждаемой Filtec Uitimate, 1зуб", price: 4110 },
        { code: "А16.07.002.503", name: "Восстановление зуба пломбой. Эстетическая реставрация зуба /фронт/ - (исправление формы, цвета, кариозные поражения), 1зуб", price: 7970 },
        { code: "А16.07.002.504", name: "Восстановление зуба пломбой светоотверждаемой Filtec Z-250,1зуб", price: 2170 },
        { code: "А16.07.002.505", name: "Восстановление зуба пломбой светоотверждаемой Filtec Z-550, 1зуб", price: 2300 },
        { code: "А16.07.002.506", name: "Восстановление зуба пломбой. Восстановление коронки зуба при помощи композита 1/3 зуба Filtek Ultimate, 1/3 зуба", price: 4710 },
        { code: "А16.07.002.507", name: "Восстановление зуба пломбой. Восстановление коронки зуба при помощи композита 2/3 зуба Filtek Ultimate, 2/3 зуба", price: 5310 },
        { code: "А16.07.002.508", name: "Восстановление зуба пломбой. Восстановление коронки зуба при помощи композита 1/3 зуба Filtek Z550, 1/3 зуба", price: 2900 }
      ]
    },
    {
      subtitle: "Лечение пульпита",
      services: [
        { code: "", name: "Одноканальный зуб", price: 7000 },
        { code: "", name: "Двухканальный зуб", price: 9000 },
        { code: "", name: "Трехканальный зуб", price: 11000 },
        { code: "А16.07.030.500", name: "Инструментальная и медикаментозная обработка корневого канала. Обработка и расширение корневого канала (химическое), 1 канал", price: 470 },
        { code: "А11.07.027.500", name: "Наложение девитализирующей пасты. Наложение мышьяковой пасты, 1 ед.", price: 1070 },
        { code: "А16.07.030.001", name: "Инструментальная и медикаментозная обработка хорошо проходимого канала, 1 канал", price: 1210 },
        { code: "А16.07.030.002", name: "Инструментальная и медикаментозная обработка плохо проходимого канала, 1 канал", price: 1450 },
        { code: "А16.07.030.501", name: "Инструментальная и медикаментозная обработка корневого канала эндодонтическим наконечником, 1-канальный зуб", price: 2300 },
        { code: "А16.07.030.501.01", name: "Инструментальная и медикаментозная обработка корневого канала эндодонтическим наконечником, 2-канальный зуб", price: 3510 },
        { code: "А16.07.030.501.02", name: "Инструментальная и медикаментозная обработка корневого канала эндодонтическим наконечником, 3-канальный зуб", price: 4470 },
        { code: "А16.07.008.500", name: "Пломбирование корневого канала зуба, форфенан + гуттаперча, 1 канал", price: 2000 },
        { code: "А16.07.008.501", name: "Пломбирование корневого канала зуба, гуттаперча + АН plus, 1 канал", price: 2420 },
        { code: "А16.07.030.502.01", name: "Временное пломбирование лекарственным препаратом корневого канала, каласепт, 1 канал", price: 720 },
        { code: "А16.07.008.502.02", name: "Пломбирование корневого канала зуба пастой PRO ROOT MTA, 1 канал", price: 3850 },
        { code: "А16.07.008.503.01", name: "Пломбирование корневого канала зуба (гуттакор) 1-канальный зуб", price: 3140 },
        { code: "А16.07.008.503.02", name: "Пломбирование корневого канала зуба  (гуттакор) 2-канальный зуб", price: 5070 },
        { code: "А16.07.008.503.03", name: "Пломбирование корневого канала зуба  (гуттакор) 3-канальный зуб", price: 6160 }
      ]
    },
    {
      subtitle: "Лечение периодонтита",
      services: [
        { code: "", name: "Одноканальный зуб", price: 8000 },
        { code: "", name: "Двухканальный зуб", price: 10000 },
        { code: "", name: "Трехканальный зуб", price: 12000 },
        { code: "А16.07.082.002", name: "Распломбировка корневого канала ранее леченного фосфат-цементом/ резорцин-формальдегидным методом, 1 канал", price: 2170 },
        { code: "А16.07.082.500", name: "Распломбировка корневого канала ранее леченного пастой эндометазоновой, 1 канал", price: 1200 },
        { code: "А16.07.082.501", name: "Распломбировка корневого канала ранее леченного пастой резоцин-формалиновой, 1 канал", price: 2170 },
        { code: "А16.07.082.502", name: "Распломбировка корневого канала ранее леченного пастой цинк-эвгеноловой, 1 канал", price: 1200 }
      ]
    },
    {
      subtitle: "Реставрация зуба",
      services: [
        { code: "", name: "Фронтальный зуб", price: 6000 },
        { code: "", name: "Жевательный зуб", price: 7000 },
        { code: "А16.07.091.000.02", name: "Снятие старой пломбы без анестезии, 1зуб", price: 370 },
        { code: "А16.07.002.509", name: "Восстановление зуба пломбой временной химической, 1зуб", price: 670 },
        { code: "А16.07.002.510", name: "Восстановление зуба пломбой временной световой, 1 зуб", price: 930 },
        { code: "А16.07.002.000.25", name: "Восстановление зуба матрицей, 1зуб", price: 530 }
      ]
    },
    {
      subtitle: "Лечение некариозных поражений",
      services: [
        { code: "", name: "Лечение некариозных поражений", price: 4000 }
      ]
    },
    {
      subtitle: "Профессиональная гигиена",
      services: [
        { code: "", name: "Комплексная чистка зубов", price: 5000 },
        { code: "", name: "Ультразвуковая чистка", price: 3000 },
        { code: "", name: "Air Flow", price: 3000 },
        { code: "А22.07.002", name: "Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба, 1 зуб", price: 270 },
        { code: "А16.07.020.500", name: "Удаление наддесневых зубных отложений методом Air Flow, 1 зуб", price: 370 },
        { code: "А16.07.020.500.01", name: "Удаление наддесневых зубных отложений методом Air Flow на аппарате\" PROPHYLAXIS MASTER\", 1 зуб", price: 500 },
        { code: "А16.07.020.501", name: "Профессиональная гигиена /AIR FLOW, ультразвук, полировка паста-щетка/", price: 6000 }
      ]
    },
    {
      subtitle: "Фторирование",
      services: [
        { code: "", name: "Фторирование зубов", price: 1500 },
        { code: "А11.07.012", name: "Глубокое фторирование эмали зуба, 1 зуб", price: 590 },
        { code: "А11.07.012.001", name: "Покрытие зубов фторсодержащим препаратом Флюокаль гель, 1 зуб", price: 150 },
        { code: "А11.07.012.500", name: "Глубокое фторирование эмали зуба фторосодержащим покрытием, 1процедура", price: 1670 }
      ]
    },
    {
      subtitle: "Отбеливание зубов",
      services: [
        { code: "", name: "Кабинетное отбеливание", price: 15000 },
        { code: "", name: "Домашнее отбеливание", price: 10000 }
      ]
    },
    {
      subtitle: "Приемы врача-стоматолога, терапевта, зубного врача",
      services: [
        { code: "В01.065.007", name: "Прием (осмотр, консультация) врача-стоматолога первичный, 1 ед.", price: 350 },
        { code: "В01.065.008", name: "Прием (осмотр, консультация) врача-стоматолога повторный, 1 ед.", price: 270 },
        { code: "В01.065.001", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта первичный, 1 ед.", price: 350 },
        { code: "В01.065.002", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта повторный, 1 ед.", price: 270 },
        { code: "В01.065.007.500", name: "Прием (осмотр, консультация) врача-стоматолога первичный с оформлением справки о санации полости рта, 1 ед.", price: 610 }
      ]
    },
    {
      subtitle: "Прокладки лечебные",
      services: [
        { code: "А16.07.002.000.26", name: "Наложение прокладки лечебной Химической, 1 зуб", price: 550 },
        { code: "А16.07.002.000.27", name: "Наложение прокладки лечебной Световой, 1зуб", price: 900 }
      ]
    },
    {
      subtitle: "Прокладки изолирующие",
      services: [
        { code: "А16.07.002.000.28", name: "Наложение прокладки изолирующей Химической, 1 зуб", price: 550 },
        { code: "А16.07.002.000.29", name: "Наложение прокладки изолирующей Световой, 1 зуб", price: 800 }
      ]
    },
    {
      subtitle: "Лечение осложнений кариеса (эндодонтическое лечение корневых каналов)",
      services: [
        { code: "А16.07.093.500", name: "Фиксация внутриканального штифта/ вкладки, парапульпарный,1 шт.", price: 2300 },
        { code: "А16.07.093.501", name: "Фиксация внутриканального штифта/ вкладки, стекловолоконный штифт \"Maillefer\" с фиксацией, 1 шт.", price: 2420 },
        { code: "А16.07.093.502", name: "Фиксация внутриканального штифта/ вкладки, стекловолоконный штифт \"3М\" с фиксацией, 1 шт.", price: 2900 },
        { code: "А16.07.093.503", name: "Фиксация внутриканального штифта/ вкладки, кварцевоволоконный штифт \"VDW\" с фиксацией, 1 шт.", price: 3380 },
        { code: "А16.07.094.500", name: "Удаление внутриканального штифта/ вкладки, удаление инородного тела из  канала, 1 ед.", price: 930 },
        { code: "А16.07.031", name: "Восстановление зуба пломбировочными материалами с использованием анкерных штифтов, 1 шт.", price: 2170 },
        { code: "А16.07.031.500", name: "Восстановление зуба пломбировочными материалами с использованием анкерных штифтов с фиксацией на Relay X, 1 шт.", price: 2420 },
        { code: "А16.07.094.501", name: "Удаление внутриканального штифта/ вкладки, извлечение парапульпапрного или анкерного штифта из канала, 1 шт.", price: 1330 },
        { code: "А16.07.094.502", name: "Удаление внутриканального штифта/ вкладки, извлечение стекловолоконного штифта из канала, 1 шт.", price: 1450 }
      ]
    },
    {
      subtitle: "Профилактика заболеваний полости рта",
      services: [
        { code: "А16.07.057.504", name: "Запечатывание фиссуры зуба герметиком, 1 зуб", price: 2170 },
        { code: "А02.07.010", name: "Исследование на диагностических моделях челюстей, 1 шт.", price: 2900 }
      ]
    }
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
            <span className="text-gray-900">Терапевтическая стоматология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Терапевтическая стоматология в Альтамед Голицино — лечение зубов без боли в «<span className="italic">Альтамед Голицино</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современное лечение кариеса, пульпита и периодонтита в клинике «Альтамед Голицино» Альтамед Голицино. Качественная стоматологическая помощь по доступным ценам.
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Dental restoration.webp"
                alt="Реставрация зубов"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Реставрация зубов в Альтамед Голицино</div>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
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
                src="/images/services/Dental restoration.webp"
                alt="Реставрация зубов"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Реставрация зубов в Альтамед Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Эстетическая реставрация зубов с применением современных композитных материалов</p>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Что такое терапевтическая стоматология */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое терапевтическая стоматология в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Основные направления</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Лечение кариеса всех стадий
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Эндодонтическое лечение (пульпит, периодонтит)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Реставрация зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена полости рта
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества лечения в «Альтамед Голицино»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Современное оборудование для диагностики и лечения
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Опытные врачи с многолетним стажем
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Безболезненное лечение с качественной анестезией
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гарантия на все виды работ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги терапевтической стоматологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги терапевтической стоматологии в Альтамед Голицино
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

      {/* Этапы лечения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Этапы лечения в терапевтической стоматологии Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Диагностика", desc: "Осмотр, рентген, определение стадии заболевания" },
                { step: "2", title: "Планирование", desc: "Составление плана лечения с учетом всех факторов" },
                { step: "3", title: "Лечение", desc: "Профессиональное лечение с применением современных методик" },
                { step: "4", title: "Профилактика", desc: "Рекомендации по уходу и дальнейшему наблюдению" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Почему важно лечить вовремя */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важно лечить зубы своевременно в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Предотвращение осложнений",
                  text: "Своевременное лечение кариеса предотвращает развитие пульпита и периодонтита, которые требуют более сложного и дорогостоящего лечения. Раннее обращение к стоматологу в Альтамед Голицино позволяет решить проблему быстро и без осложнений.",
                  icon: "🦷"
                },
                {
                  title: "Сохранение зубов",
                  text: "Лечение на ранней стадии позволяет сохранить собственные зубы и избежать необходимости их удаления, протезирования или имплантации. В клинике «Альтамед Голицино» Альтамед Голицино мы делаем всё возможное для сохранения ваших зубов.",
                  icon: "💎"
                },
                {
                  title: "Экономия средств",
                  text: "Лечение кариеса обходится значительно дешевле, чем устранение осложнений. Регулярные профилактические осмотры в стоматологии Альтамед Голицино помогают выявить проблемы на ранней стадии и сэкономить деньги.",
                  icon: "💰"
                },
                {
                  title: "Здоровье организма",
                  text: "Больные зубы влияют на работу желудочно-кишечного тракта, могут стать источником хронических инфекций и негативно влиять на иммунную систему. Лечение зубов в Альтамед Голицино — это забота о здоровье всего организма.",
                  icon: "❤️"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Современные методы лечения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Современные методы лечения в терапевтической стоматологии Альтамед Голицино
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Лечение кариеса без сверления",
                  desc: "В клинике «Альтамед Голицино» Альтамед Голицино применяются современные методики лечения начального кариеса с использованием инфильтрации и реминерализации, что позволяет избежать препарирования зуба.",
                  benefits: ["Минимальное вмешательство", "Сохранение большего объема тканей", "Безболезненность процедуры"]
                },
                {
                  title: "Микроскоп в эндодонтии",
                  desc: "Использование стоматологического микроскопа при лечении корневых каналов позволяет врачам стоматологии Альтамед Голицино видеть мельчайшие детали и обеспечить максимально качественное лечение.",
                  benefits: ["Точность лечения", "Высокое качество обработки каналов", "Долгосрочный результат"]
                },
                {
                  title: "Современные пломбировочные материалы",
                  desc: "Применение композитных материалов последнего поколения обеспечивает не только функциональность, но и эстетику. Пломбы неотличимы от естественных зубов.",
                  benefits: ["Высокая эстетика", "Долговечность", "Биосовместимость"]
                },
                {
                  title: "Лазерная стоматология",
                  desc: "Использование лазера в терапевтической стоматологии Альтамед Голицино позволяет проводить лечение более щадящим способом, уменьшая болезненные ощущения и сокращая период восстановления.",
                  benefits: ["Безболезненность", "Быстрое заживление", "Минимальная травматичность"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Когда обращаться к терапевту-стоматологу */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда обращаться к терапевту-стоматологу в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "😣", title: "Зубная боль", desc: "Любая боль или дискомфорт в зубах требуют немедленного обращения" },
                { icon: "🦷", title: "Чувствительность зубов", desc: "Реакция на холодное, горячее, кислое или сладкое" },
                { icon: "🌑", title: "Потемнение эмали", desc: "Появление темных пятен или кариозных полостей" },
                { icon: "😬", title: "Сколы и трещины", desc: "Механические повреждения зубов" },
                { icon: "💔", title: "Кровоточивость десен", desc: "Особенно во время чистки зубов или приема пищи" },
                { icon: "🤢", title: "Неприятный запах", desc: "Стойкий запах изо рта может указывать на проблемы" },
                { icon: "🦷", title: "Шатающиеся пломбы", desc: "Необходимо заменить старую пломбу" },
                { icon: "😰", title: "Отек десен", desc: "Припухлость и воспаление мягких тканей" },
                { icon: "📅", title: "Профилактический осмотр", desc: "Рекомендуется дважды в год для предупреждения проблем" }
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

      {/* Преимущества клиники */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему выбирают терапевтическую стоматологию «Альтамед Голицино» в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏥",
                  title: "Современное оборудование",
                  desc: "Используем новейшее диагностическое и лечебное оборудование для максимально точного и эффективного лечения зубов в Альтамед Голицино."
                },
                {
                  icon: "👨‍⚕️",
                  title: "Опытные врачи",
                  desc: "Наши стоматологи-терапевты имеют многолетний опыт работы и регулярно повышают квалификацию, что гарантирует высокое качество лечения."
                },
                {
                  icon: "💉",
                  title: "Безболезненное лечение",
                  desc: "Применяем современные методы обезболивания, что делает лечение комфортным даже для пациентов с дентофобией."
                },
                {
                  icon: "💰",
                  title: "Доступные цены",
                  desc: "Прозрачное ценообразование и оптимальное соотношение цены и качества. Лечение зубов в Альтамед Голицино стало доступнее."
                },
                {
                  icon: "🎯",
                  title: "Индивидуальный подход",
                  desc: "Для каждого пациента составляется персональный план лечения с учетом особенностей организма и финансовых возможностей."
                },
                {
                  icon: "✅",
                  title: "Гарантия качества",
                  desc: "Предоставляем гарантию на все виды терапевтического лечения. Вы можете быть уверены в долговечности результата."
                },
                {
                  icon: "⏰",
                  title: "Удобный график",
                  desc: "Работаем в удобное для вас время, включая выходные дни. Записаться на прием к стоматологу в Альтамед Голицино можно онлайн."
                },
                {
                  icon: "📍",
                  title: "Удобное расположение",
                  desc: "Клиника «Альтамед Голицино» находится в центре Альтамед Голицино с удобной парковкой и доступностью общественного транспорта."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость лечения и цены */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость терапевтического лечения в стоматологии Альтамед Голицино
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на терапевтическое лечение в клинике «Альтамед Голицино» Альтамед Голицино формируются с учетом сложности процедуры, используемых материалов и объема работы. Мы предлагаем прозрачное ценообразование без скрытых доплат.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечение кариеса в Альтамед Голицино</h3>
                  <p className="text-gray-600 mb-3">
                    Стоимость лечения кариеса в стоматологии Альтамед Голицино зависит от стадии заболевания. Лечение поверхностного кариеса обойдется дешевле, чем лечение глубокого поражения. Цена также зависит от выбранного пломбировочного материала.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Поверхностный кариес от 3500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Глубокий кариес от 5500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Эстетическая реставрация от 7970₽
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечение пульпита в Альтамед Голицино</h3>
                  <p className="text-gray-600 mb-3">
                    Лечение пульпита требует эндодонтического лечения корневых каналов. Цена зависит от количества каналов и используемых материалов. В нашей стоматологии Альтамед Голицино мы используем современные методики.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Одноканальный зуб от 7000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Двухканальный зуб от 9000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Трехканальный зуб от 11000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость лечения в стоматологии Альтамед Голицино можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и скидки при комплексном лечении. Запишитесь на прием в «Альтамед Голицино» Альтамед Голицино для получения детальной информации о ценах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Детальное описание услуг */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Подробное описание услуг терапевтической стоматологии в Альтамед Голицино
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечение кариеса в Альтамед Голицино</h3>
                <p className="text-gray-700 mb-4">
                  Кариес — это самое распространенное заболевание зубов. В клинике «Альтамед Голицино» Альтамед Голицино лечение кариеса проводится с использованием современных материалов и технологий. Процесс включает в себя удаление пораженных тканей, обработку полости специальными растворами и установку пломбы, которая восстанавливает форму и функцию зуба.
                </p>
                <p className="text-gray-700">
                  Наши стоматологи в Альтамед Голицино используют композитные материалы светового отверждения, которые позволяют создавать пломбы, неотличимые от естественных зубов. Лечение проводится под местной анестезией, что обеспечивает полное отсутствие болевых ощущений.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечение пульпита в стоматологии Альтамед Голицино</h3>
                <p className="text-gray-700 mb-4">
                  Пульпит — воспаление сосудисто-нервного пучка зуба, требующее эндодонтического лечения. В нашей стоматологии Альтамед Голицино лечение пульпита проводится с использованием эндодонтических инструментов и специальных материалов для пломбирования каналов.
                </p>
                <p className="text-gray-700">
                  Процедура включает очистку и обработку корневых каналов, их дезинфекцию и герметичное пломбирование. Лечение пульпита в Альтамед Голицино позволяет сохранить зуб и избежать его удаления. Мы используем современные методы обтурации каналов, обеспечивающие долгосрочный результат.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профессиональная гигиена в Альтамед Голицино</h3>
                <p className="text-gray-700 mb-4">
                  Регулярная профессиональная чистка зубов в стоматологии Альтамед Голицино необходима для поддержания здоровья полости рта. В клинике «Альтамед Голицино» Альтамед Голицино мы используем современные методы: ультразвуковую чистку и технологию Air Flow для удаления налета и зубного камня.
                </p>
                <p className="text-gray-700">
                  Профессиональная гигиена в Альтамед Голицино включает не только удаление отложений, но и полировку поверхности зубов, фторирование для укрепления эмали. Регулярные процедуры помогают предотвратить развитие кариеса и заболеваний десен.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Реставрация зубов в Альтамед Голицино</h3>
                <p className="text-gray-700 mb-4">
                  Эстетическая реставрация зубов в стоматологии Альтамед Голицино позволяет восстановить не только функцию, но и внешний вид зуба. Наши врачи используют композитные материалы, которые идеально подбираются под цвет естественных зубов.
                </p>
                <p className="text-gray-700">
                  Реставрация в клинике «Альтамед Голицино» Альтамед Голицино применяется при сколах, трещинах, изменении цвета зубов. Современные материалы обеспечивают не только эстетику, но и прочность восстановленного зуба на долгие годы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Профилактика и уход */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Профилактика кариеса и заболеваний зубов в Альтамед Голицино
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Гигиена полости рта в домашних условиях</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Чистка зубов дважды в день правильной техникой минимум 2-3 минуты</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Использование фторсодержащих паст, рекомендованных стоматологом в Альтамед Голицино</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Применение зубной нити и ирригатора для очистки межзубных промежутков</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ограничение потребления сладких и кислых продуктов</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профессиональная профилактика в Альтамед Голицино</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Профессиональная чистка зубов в клинике «Альтамед Голицино» Альтамед Голицино раз в 6 месяцев</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Фторирование и реминерализация эмали для укрепления зубов</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Герметизация фиссур для защиты жевательных зубов от кариеса</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Регулярные профилактические осмотры в стоматологии Альтамед Голицино</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-emerald-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Правильная профилактика заболеваний зубов в Альтамед Голицино позволяет избежать необходимости сложного и дорогостоящего лечения. Специалисты клиники «Альтамед Голицино» Альтамед Голицино разработают индивидуальную программу профилактики, учитывающую особенности вашего организма и образ жизни. Регулярное наблюдение у стоматолога в Альтамед Голицино — залог здоровья ваших зубов на долгие годы.
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
              Часто задаваемые вопросы о терапевтической стоматологии в Альтамед Голицино
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Как часто нужно посещать стоматолога-терапевта в Альтамед Голицино?",
                  a: "Рекомендуется посещать стоматолога дважды в год для профилактического осмотра и профессиональной чистки. Это позволяет выявить проблемы на ранней стадии и предотвратить развитие серьезных заболеваний. В клинике «Альтамед Голицино» Альтамед Голицино мы предлагаем комплексные программы профилактики."
                },
                {
                  q: "Больно ли лечить кариес с анестезией?",
                  a: "Современная местная анестезия полностью исключает болевые ощущения во время лечения кариеса. Пациент чувствует только легкое давление от инструментов. В нашей стоматологии Альтамед Голицино мы используем только качественные обезболивающие препараты."
                },
                {
                  q: "Сколько прослужит пломба после лечения кариеса?",
                  a: "Срок службы пломбы зависит от материала и качества лечения. Современные композитные пломбы при правильном уходе могут прослужить 10-15 лет и более. В клинике «Альтамед Голицино» Альтамед Голицино мы предоставляем гарантию на все виды пломбирования."
                },
                {
                  q: "Можно ли вылечить пульпит без удаления нерва?",
                  a: "На ранней стадии пульпита возможно сохранение нерва с помощью биологического метода лечения. Однако при глубоком поражении требуется эндодонтическое лечение с удалением пульпы. В нашей стоматологии Альтамед Голицино врач проведет диагностику и выберет оптимальный метод."
                },
                {
                  q: "Что делать при острой зубной боли в Альтамед Голицино?",
                  a: "При острой боли нужно как можно скорее обратиться к стоматологу. До визита можно принять обезболивающее (ибупрофен, парацетамол). Клиника «Альтамед Голицино» Альтамед Голицино принимает пациентов с острой болью в день обращения."
                },
                {
                  q: "Отбеливание зубов вредит эмали?",
                  a: "Современные методы отбеливания безопасны для эмали при правильном выполнении процедуры. В нашей стоматологии Альтамед Голицино мы используем только проверенные методики и препараты, предварительно оценивая состояние эмали пациента."
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

      {/* Форма записи */}
      <AppointmentForm />
    </div>
  );
}

