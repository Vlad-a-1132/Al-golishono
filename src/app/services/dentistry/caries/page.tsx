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

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Лечение кариеса в клинике «Альтамед Голицыно»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Современное и безболезненное лечение кариеса всех стадий в Альтамед Голицыно
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp" 
                alt="Лечение кариеса" 
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
              <h2 className="text-3xl font-bold text-gray-900">Лечение кариеса в Альтамед Голицыно: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицыно» предлагает комплексное лечение кариеса всех стадий в Альтамед Голицыно — от
                поверхностного кариеса до глубокого поражения с использованием современных материалов и
                безболезненных методик. Мы применяем передовые технологии, качественные композитные пломбы
                и учитываем индивидуальные особенности каждого пациента, чтобы сохранить здоровье зубов
                и вернуть красивую улыбку.
              </p>
              <p>
                Врач-стоматолог-терапевт составляет персональный план лечения, учитывая стадию кариеса,
                состояние зуба и пожелания пациента. У нас можно вылечить кариес на любой стадии — от
                начального поражения эмали до глубокого кариеса, требующего установки лечебной прокладки
                для защиты пульпы.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость лечения кариеса в Альтамед Голицыно
                фиксируется заранее, а пациенты получают подробную смету с поэтапным планом лечения.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицыно»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный протокол лечения с учётом стадии кариеса, состояния зуба и эстетики улыбки.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненное лечение с современной местной анестезией и комфортными условиями.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Качественные материалы мировых производителей: Filtek Ultimate, Filtek Z550, Vitremer и другие.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольный график визитов после лечения, рекомендации по уходу и профилактике рецидивов.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества лечения кариеса в «Альтамед Голицыно»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные стоматологи-терапевты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-терапевты с опытом более 10 лет выполняют лечение кариеса всех стадий
                и работают с современными материалами для долговечного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные материалы</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем композитные пломбы Filtek Ultimate, Filtek Z550, Vitremer — официальные
                поставки и гарантия производителя на материалы.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безболезненное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Современная местная анестезия, атравматичные методики и индивидуальные планы обезболивания
                минимизируют дискомфорт во время лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед лечением — пациент знает стоимость лечения кариеса до начала процедуры.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфорт и забота</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Уютная атмосфера клиники, внимательное отношение персонала и подробные рекомендации по уходу
                за зубами после лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от диагностики до контрольных осмотров и рекомендаций
                по профилактике.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Преимущества лечения в «Альтамед Голицыно»</h3>
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
            Методы лечения кариеса в Альтамед Голицыно
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
            Как проходит лечение кариеса в клинике «Альтамед Голицыно»
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
              Профилактика кариеса в Альтамед Голицыно
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
                  Регулярная профессиональная гигиена полости рта в клинике «Альтамед Голицыно» позволяет удалить зубной налет и камни, которые невозможно убрать в домашних условиях.
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

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Лечение кариеса в Альтамед Голицыно: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицыно» — клиника, где лечение кариеса в Голицыно проводится по международным
              протоколам. Мы принимаем пациентов из Голицыно и всего Одинцовского городского округа, поэтому
              запрос «лечение кариеса Альтамед Голицыно область» полностью закрывает наши услуги.
            </p>
            <p>
              Прайс ниже отвечает на популярные поисковые запросы Wordstat: «лечение кариеса в одинцове цены»,
              «лечение кариеса Альтамед Голицыно отзывы», «Альтамед Голицыно лечение кариеса цена». Мы регулярно обновляем
              данные, чтобы стоимость лечения кариеса Альтамед Голицыно оставалась прозрачной и понятной.
            </p>
            <p>
              Наши пациенты отмечают, что «лечение кариеса Альтамед Голицыно отзывы» в точности описывают результат:
              аккуратная работа стоматологов-терапевтов и детальное сопровождение. Если вы ищете стоматологию,
              где «стоматология лечение кариеса Альтамед Голицыно» — это не просто слоган, а комплексная услуга, записывайтесь
              на консультацию стоматолога-терапевта или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Цены на лечение кариеса в Альтамед Голицыно
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость лечения кариеса в клинике «Альтамед Голицыно» формируется индивидуально в зависимости от стадии
            кариеса и выбранного материала, но мы фиксируем цены в договоре, чтобы пациент точно понимал итоговую сумму.
          </p>
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

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о лечении кариеса в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Голицыно</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Запрос «лечение кариеса Альтамед Голицыно отзывы» подтверждается историями пациентов: они отмечают
                безболезненность процедуры, внимательное отношение и понятный план лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пломбы служат долгие годы без осложнений, а качество материалов соответствует ожиданиям
                по запросу «лечение кариеса в одинцове цены отзывы».
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После лечения кариеса в Голицыно пациенты отмечают отсутствие дискомфорта; врачи на связи
                и дают подробные инструкции по уходу за пломбами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о лечении кариеса в Альтамед Голицыно
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько стоит лечение кариеса в Альтамед Голицыно в клинике «Альтамед Голицыно»?
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
                Стоимость зависит от стадии кариеса и выбранного материала. Поверхностный кариес — от 3 500 ₽,
                средний кариес — от 4 500 ₽, глубокий кариес — от 5 500 ₽. Окончательный план лечения формируется
                после обследования и фиксируется в договоре.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Больно ли лечить кариес?
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
                Нет, лечение кариеса проводится под местной анестезией, поэтому процедура полностью безболезненна.
                Современные анестетики обеспечивают комфорт на протяжении всего лечения.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени занимает лечение кариеса?
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
                Лечение поверхностного и среднего кариеса занимает 30-40 минут, глубокий кариес — до 1 часа.
                В большинстве случаев лечение проводится за одно посещение.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Есть ли гарантия на пломбы?
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
                Мы предоставляем гарантию на работу врача и используемые материалы. При соблюдении рекомендаций
                по уходу пломбы служат долгие годы без осложнений.
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
                Лечение кариеса в Альтамед Голицыно — начните с бесплатного плана лечения
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицыно», чтобы узнать стоимость лечения кариеса, подобрать
                подходящий материал для пломбы и получить индивидуальный план с учётом ваших пожеланий.
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
                name: "Клиника «Альтамед Голицыно» — лечение кариеса в Альтамед Голицыно",
                url: "https://altamed-golitsino.ru/services/dentistry/caries",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "287"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Голицыно",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Лечение кариеса",
                areaServed: "Голицыно и Голицыно",
                description:
                  "Лечение кариеса в Альтамед Голицыно: поверхностный, средний и глубокий кариес, качественные пломбы, безболезненное лечение, современные материалы и доступные цены.",
                sameAs: [
                  "https://altamed-golitsino.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
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

