'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function CariesTreatmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг лечения кариеса
  const fullServicesData = [
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
        { code: "А16.07.002.508", name: "Восстановление зуба пломбой. Восстановление коронки зуба при помощи композита 1/3 зуба Filtek Z550, 1/3 зуба", price: 2900 },
        { code: "А16.07.002.509", name: "Восстановление зуба пломбой временной химической, 1зуб", price: 670 },
        { code: "А16.07.002.510", name: "Восстановление зуба пломбой временной световой, 1 зуб", price: 930 },
        { code: "А16.07.002.000.25", name: "Восстановление зуба матрицей, 1зуб", price: 530 },
        { code: "А16.07.091.000.02", name: "Снятие старой пломбы без анестезии, 1зуб", price: 370 }
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
      subtitle: "Приемы врача-стоматолога, терапевта",
      services: [
        { code: "В01.065.007", name: "Прием (осмотр, консультация) врача-стоматолога первичный, 1 ед.", price: 350 },
        { code: "В01.065.008", name: "Прием (осмотр, консультация) врача-стоматолога повторный, 1 ед.", price: 270 },
        { code: "В01.065.001", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта первичный, 1 ед.", price: 350 },
        { code: "В01.065.002", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта повторный, 1 ед.", price: 270 },
        { code: "В01.065.007.500", name: "Прием (осмотр, консультация) врача-стоматолога первичный с оформлением справки о санации полости рта, 1 ед.", price: 610 }
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
            <span className="text-gray-900">Лечение кариеса</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Лечение кариеса в Одинцово — качественная стоматологическая помощь в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современное лечение кариеса всех стадий в клинике «Альтамед-с» Одинцово. Безболезненное лечение, качественные материалы, доступные цены.
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Treatment of caries.webp"
                alt="Лечение кариеса"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-transparent"></div>
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Лечение кариеса в Одинцово</div>
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
                src="/images/services/Treatment of caries.webp"
                alt="Лечение кариеса"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Лечение кариеса в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современное и безболезненное лечение кариеса всех стадий</p>
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

      {/* Что такое кариес */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое кариес и почему важно его лечить
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Стадии кариеса</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Поверхностный кариес — начальная стадия
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Средний кариес — поражение дентина
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Глубокий кариес — близко к пульпе
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Осложнения — пульпит, периодонтит
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества лечения в «Альтамед-с»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Безболезненное лечение с современной анестезией
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Качественные материалы мировых производителей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Опытные врачи-стоматологи
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Доступные цены на лечение
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Методы лечения */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Методы лечения кариеса в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Поверхностный кариес</h3>
              <p className="text-gray-600 mb-4">
                Лечение начальной стадии кариеса с минимальным вмешательством. Используется метод инфильтрации или пломбирование композитными материалами.
              </p>
              <p className="text-emerald-600 font-semibold">От 3500₽</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Средний кариес</h3>
              <p className="text-gray-600 mb-4">
                Лечение кариеса с поражением дентина. Удаление пораженных тканей, установка изолирующей прокладки и пломбирование.
              </p>
              <p className="text-emerald-600 font-semibold">От 4500₽</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Глубокий кариес</h3>
              <p className="text-gray-600 mb-4">
                Лечение глубокого кариеса с установкой лечебной прокладки для защиты пульпы. Требует особой аккуратности.
              </p>
              <p className="text-emerald-600 font-semibold">От 5500₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс лечения */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Как проходит лечение кариеса в клинике «Альтамед-с»
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Диагностика</h3>
                  <p className="text-gray-600">
                    Врач проводит осмотр полости рта, определяет стадию кариеса. При необходимости делается рентгеновский снимок для оценки глубины поражения.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Анестезия</h3>
                  <p className="text-gray-600">
                    При необходимости проводится местная анестезия для полного комфорта пациента. Современные анестетики обеспечивают безболезненное лечение.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Удаление пораженных тканей</h3>
                  <p className="text-gray-600">
                    Врач аккуратно удаляет пораженные кариесом ткани зуба, сохраняя здоровые участки. Используются современные бормашины и ручные инструменты.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Пломбирование</h3>
                  <p className="text-gray-600">
                    После подготовки полости устанавливается изолирующая или лечебная прокладка (при глубоком кариесе), затем зуб пломбируется современными композитными материалами.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Финишная обработка</h3>
                  <p className="text-gray-600">
                    Пломба шлифуется и полируется для восстановления естественной формы зуба и обеспечения гладкой поверхности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Важность профилактики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Профилактика кариеса в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Регулярная гигиена</h3>
                <p className="text-gray-600 mb-4">
                  Правильная чистка зубов дважды в день, использование зубной нити и ополаскивателей помогает предотвратить развитие кариеса.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Профессиональная чистка</h3>
                <p className="text-gray-600 mb-4">
                  Регулярная профессиональная гигиена полости рта в клинике «Альтамед-с» позволяет удалить зубной налет и камни, которые невозможно убрать в домашних условиях.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Фторирование</h3>
                <p className="text-gray-600 mb-4">
                  Процедура фторирования укрепляет эмаль зубов и делает их более устойчивыми к кариесу. Рекомендуется проводить 2-3 раза в год.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Регулярные осмотры</h3>
                <p className="text-gray-600 mb-4">
                  Посещение стоматолога каждые 6 месяцев позволяет выявить кариес на ранней стадии и провести лечение с минимальными затратами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги лечения кариеса в Одинцово
          </h2>
          <div className="space-y-6">
            {fullServicesData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === categoryIndex ? null : categoryIndex)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold text-left flex justify-between items-center hover:from-emerald-700 hover:to-blue-700 transition-colors"
                >
                  <span>{category.subtitle}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openAccordion === categoryIndex ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === categoryIndex && (
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex justify-between items-start py-3 border-b border-gray-200 last:border-b-0">
                          <div className="flex-1">
                            <p className="text-gray-800 font-medium">{service.name}</p>
                            {service.code && (
                              <p className="text-sm text-gray-500 mt-1">Код: {service.code}</p>
                            )}
                          </div>
                          <div className="ml-4 text-right">
                            <p className="text-emerald-600 font-semibold">{service.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}

