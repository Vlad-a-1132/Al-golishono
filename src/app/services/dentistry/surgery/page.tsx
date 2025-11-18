'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function SurgeryDentistryPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг хирургической стоматологии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога-хирурга",
      services: [
        { code: "В01.067.001", name: "Прием (осмотр, консультация) врача-стоматолога-хирурга первичный, 1 ед.", price: 1500 },
        { code: "В01.067.002", name: "Прием (осмотр, консультация) врача-стоматолога-хирурга повторный, 1 ед.", price: 350 }
      ]
    },
    {
      subtitle: "Удаление зубов",
      services: [
        { code: "", name: "Простое удаление", price: 3000 },
        { code: "А16.07.001", name: "Удаление зуба, 1ед.", price: 2060 },
        { code: "", name: "Сложное удаление", price: 5000 },
        { code: "А16.07.001.003", name: "Удаление зуба сложное с разъединением корней, 1 ед.", price: 4830 },
        { code: "", name: "Удаление ретинированного зуба", price: 8000 },
        { code: "А16.07.024", name: "Операция удаления ретинированного, дистопированного или сверхкомплектного зуба, 1 ед.", price: 9900 },
        { code: "А16.07.001.500", name: "Удаление зуба  с разъединением корней, 1 ед.", price: 7970 },
        { code: "", name: "Удаление зуба мудрости простое", price: 4000 },
        { code: "", name: "Удаление зуба мудрости сложное", price: 6000 },
        { code: "", name: "Удаление зуба мудрости ретинированного", price: 10000 },
        { code: "А16.07.001.501", name: "Удаление временного зуба с физиологической подвижностью, 1 ед.", price: 1200 },
        { code: "", name: "Иссечение капюшона", price: 2500 }
      ]
    },
    {
      subtitle: "Прочие операции и услуги",
      services: [
        { code: "А16.01.004", name: "Хирургическая обработка раны или инфицированной ткани, 1 ед.", price: 1670 },
        { code: "А16.07.014", name: "Вскрытие и дренирование абсцесса полости рта, 1 ед.", price: 2540 },
        { code: "А16.07.026", name: "Гингивэктомия, 1 зуб", price: 1210 },
        { code: "", name: "Цистэктомия", price: 6000 },
        { code: "А16.07.016.500", name: "Цистотомия или цистэктомия. Удаление ретенционной кисты слизистой полости рта, 1 ед.", price: 7490 },
        { code: "А16.07.097", name: "Наложение шва на слизистую оболочку рта, 1 ед.", price: 720 },
        { code: "А16.07.097.000.03", name: "Наложение швов  до 2см., 1ед.", price: 790 },
        { code: "А16.07.097.000.04", name: "Наложение швов  до 5см, 1ед.", price: 1330 },
        { code: "А16.07.30.069.000.01", name: "Снятие послеоперационных швов, 1ед.", price: 610 },
        { code: "", name: "Резекция верхушки корня", price: 7000 },
        { code: "А16.07.007.500", name: "Резекция верхушки корня с ретроградным пломбированием с использованием МТА, 1 зуб", price: 15940 },
        { code: "А16.07.013", name: "Кюретаж лунки удаленного зуба, 1 ед.", price: 970 },
        { code: "А15.07.002.000.02", name: "Перевязка после хирургического вмешательства, 1ед.", price: 300 },
        { code: "А16,07.014.000.02", name: "Первичная хирургическая обработка раны, 1ед.", price: 610 },
        { code: "А16.07.095.000.01", name: "Остановка луночного кровотечения, 1 зуб", price: 480 },
        { code: "А16.07.095.000.02", name: "Остановка луночного кровотечения с использованием гемостатических материалов, 1 зуб", price: 1160 },
        { code: "А16.07.014.000.03", name: "Дренирование гнойной раны, 1 ед.", price: 480 },
        { code: "", name: "Лечение альвеолита", price: 2000 },
        { code: "А16.07.013.000.01", name: "Лечение альвеолита/ одно посещение/", price: 970 },
        { code: "А11.007.010.000.03", name: "Введение препарата \"Альвостаз\"Alvogyl\"NEOKONES\", 1ед.", price: 300 }
      ]
    },
    {
      subtitle: "Имплантация зубов",
      services: [
        { code: "", name: "Установка имплантата", price: 35000 },
        { code: "A16.07.054.000.02", name: "Внутрикостная дентальная имплантация (винтового) импланта системы Implantium Dentium/ без ст-ти матеиала/", price: 35020 },
        { code: "A16.07.054.000.04", name: "Внутрикостная дентальная имплантация временного импланта", price: 18110 },
        { code: "A16.07.054.000.12", name: "Установка формирователя десны Dentium", price: 6040 },
        { code: "", name: "Костная пластика от", price: 20000 },
        { code: "A16.07.041.000.20", name: "Операция направленной регенерации кости (НРК) (без стоимости остеоиндуктивного материала)1ед.", price: 36230 },
        { code: "", name: "Синус-лифтинг от", price: 30000 },
        { code: "A16.07.055.000.01", name: "Синус-лифтинг (костная пластика, остеопластика) открытый (без стоимости остеоиндуктивного материала)", price: 50720 },
        { code: "A16.07.055.000.02", name: "Синус-лифтинг (костная пластика, остеопластика) закрытый (без стоимости остеоиндуктивного материала)", price: 28980 },
        { code: "A16.07.055.000.03", name: "Операция имплантации барьерной мембраны (без стоимости мембраны)", price: 6040 },
        { code: "A16.07.055.000.04", name: "Забор аутотрансплантанта кости из внутриротовых участков", price: 14490 },
        { code: "A16.07.041.000.20", name: "Операция направленной регенерации кости (НРК) (без стоимости остеоиндуктивного материала)1ед.", price: 36230 },
        { code: "A16.07.041.000.21", name: "Операция реконструкции костного гребня 2-х сторонними блоками (3D пластика)", price: 48060 },
        { code: "A16.07.041.000.22", name: "Расщепление альвеолярного гребня", price: 18110 },
        { code: "A16.07.040.000.20", name: "Забор соединительнотканного трансплантанта", price: 7250 },
        { code: "A16.07.040.000.21", name: "Пластика мягких тканей в области имплантанта", price: 9180 },
        { code: "A16.07.040.000.22", name: "Увеличение зоны прикрепленной кератинизированной десны", price: 15210 },
        { code: "A16.07.054.000.11", name: "Удаление неинтегрированного импланта", price: 3620 },
        { code: "A16.07.054.000.10", name: "Удаление интегрированного импланта", price: 8450 },
        { code: "A23.07.002.000.40", name: "Изготовление индивидуального шаблона", price: 9660 },
        { code: "A16.07.041.000.23", name: "Подготовка альвеолярного гребня к имплантации", price: 8450 },
        { code: "A16.07.041.000.24", name: "Пластика альвеолярного гребня 1ед.", price: 24150 }
      ]
    },
    {
      subtitle: "Челюстно-лицевая хирургия",
      services: [
        { code: "", name: "Пластика уздечки губы/языка", price: 4000 },
        { code: "А16.07.042", name: "Пластика уздечки верхней губы, 1 ед.", price: 5070 },
        { code: "А16.07.043", name: "Пластика уздечки нижней губы, 1ед.", price: 5070 },
        { code: "А16.07.044", name: "Пластика уздечки языка, 1 ед.", price: 5070 },
        { code: "А16.07.045", name: "Вестибулопластика, 1 ед.", price: 14370 },
        { code: "А16.07.096", name: "Пластика перфорации верхнечелюстной пазухи, 1 ед.", price: 14370 },
        { code: "А16.07.017", name: "Пластика альвеолярного отростка нижней челюсти, 1ед.", price: 4350 },
        { code: "А16.07.017.002", name: "Коррекция объема и формы альвеолярного отростка, 1 ед.", price: 7250 },
        { code: "А16.07.089.500", name: "Гингивопластика. Устранение рецессии десны, 1 зуб", price: 14370 },
        { code: "А16.07.089 .501", name: "Гингивопластика. Хирургическое удлинение коронковой части зуба, 1 ед.", price: 8580 },
        { code: "А16.07.090", name: "Гингивотомия, 1 ед.", price: 6520 },
        { code: "А16.07.040", name: "Лоскутная операция в полости рта, 4-6 зубов", price: 6040 },
        { code: "А16.30.032", name: "Иссечение новообразования мягких тканей, 1 ед.", price: 3020 }
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
            <span className="text-gray-900">Хирургическая стоматология</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Хирургическая стоматология в Одинцово — удаление зубов, имплантация в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Профессиональное удаление зубов, имплантация, хирургические операции в стоматологии Одинцово. Опытные хирурги-стоматологи, современное оборудование, безболезненные операции.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Surgical dentistry.webp"
                alt="Хирургическая стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Хирургическая стоматология в Одинцово</div>
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
                src="/images/services/Surgical dentistry.webp"
                alt="Хирургическая стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Хирургическая стоматология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Удаление зубов, имплантация, хирургические операции</p>
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
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Услуги хирургической стоматологии в Одинцово
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
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Особенности хирургической стоматологии в «Альтамед-с» Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Безболезненное удаление зубов",
                  text: "Современная анестезия позволяет полностью исключить болевые ощущения во время удаления зубов. В клинике «Альтамед-с» Одинцово мы используем только качественные препараты для местной анестезии, что обеспечивает комфорт пациента.",
                  icon: "💉"
                },
                {
                  title: "Имплантация с гарантией",
                  text: "Профессиональная установка имплантов от ведущих производителей. В стоматологии Одинцово мы гарантируем успешную остеоинтеграцию и долгосрочный результат имплантации.",
                  icon: "💎"
                },
                {
                  title: "Миниинвазивные операции",
                  text: "Современные техники позволяют выполнять операции с минимальным травмированием тканей. Быстрое заживление и минимальный дискомфорт после операций в стоматологии Одинцово.",
                  icon: "🔬"
                },
                {
                  title: "Опытные хирурги",
                  text: "Наши врачи-хирурги имеют многолетний опыт выполнения сложных операций. В «Альтамед-с» Одинцово работают специалисты, прошедшие обучение по современным методикам.",
                  icon: "👨‍⚕️"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость хирургических услуг */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость хирургических услуг в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на хирургические услуги в клинике «Альтамед-с» Одинцово зависят от сложности операции, используемых материалов и объема работы. Хирургическая стоматология в Одинцово включает удаление зубов, имплантацию, костную пластику и другие процедуры.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Удаление зубов в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Удаление зубов в стоматологии Одинцово проводится с использованием современной анестезии и инструментов. Простое удаление обходится дешевле, чем сложное с разъединением корней или удаление ретинированных зубов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Простое удаление от 2060₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Сложное удаление от 4830₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Удаление ретинированного зуба от 9900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Имплантация в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Дентальная имплантация в клинике «Альтамед-с» Одинцово — это современный метод восстановления зубов. Цена включает установку импланта, при необходимости — костную пластику и синус-лифтинг.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Установка импланта от 35020₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Костная пластика от 36230₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Синус-лифтинг от 28980₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость хирургических услуг в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Когда нужна хирургическая стоматология */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда необходима помощь хирурга-стоматолога в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Необходимо удаление зуба", desc: "Когда зуб нельзя сохранить или он мешает лечению" },
                { icon: "💎", title: "Восстановление зубов имплантами", desc: "Современная альтернатива съемным протезам" },
                { icon: "🦴", title: "Недостаток костной ткани", desc: "Костная пластика перед имплантацией" },
                { icon: "😬", title: "Ретинированные зубы мудрости", desc: "Удаление непрорезавшихся зубов, вызывающих проблемы" },
                { icon: "⚕️", title: "Кисты и новообразования", desc: "Хирургическое удаление кист и гранулем" },
                { icon: "🔧", title: "Пластика мягких тканей", desc: "Коррекция уздечек, вестибулопластика" },
                { icon: "🦷", title: "Резекция верхушки корня", desc: "Сохранение зуба при патологиях верхушки корня" },
                { icon: "💉", title: "Синус-лифтинг", desc: "Увеличение объема кости в области верхнечелюстных пазух" },
                { icon: "🏥", title: "Челюстно-лицевая хирургия", desc: "Сложные операции на челюстях и мягких тканях" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Хирургическая стоматология в клинике «Альтамед-с» Одинцово — это комплекс современных хирургических методов лечения заболеваний зубов и полости рта. Опытные хирурги-стоматологи в Одинцово выполняют операции любой сложности с использованием передовых технологий и качественной анестезии. Все процедуры в стоматологии Одинцово проводятся в стерильных условиях с соблюдением всех стандартов безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Подробное описание хирургических процедур */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Подробное описание хирургических процедур в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Удаление зубов в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Удаление зубов в клинике «Альтамед-с» Одинцово проводится с использованием современной местной анестезии, что обеспечивает полное отсутствие болевых ощущений. Простое удаление применяется для зубов с полным прорезыванием и простым строением корней. Сложное удаление требуется при ретинированных зубах, зубах с разъединенными корнями или при наличии осложнений.
                </p>
                <p className="text-gray-700">
                  После удаления зуба в стоматологии Одинцово врач проводит кюретаж лунки, накладывает швы при необходимости и дает рекомендации по уходу. Правильное удаление в клинике Одинцово предотвращает развитие осложнений и обеспечивает быстрое заживление.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Дентальная имплантация в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Имплантация зубов в стоматологии Одинцово — это современный метод восстановления утраченных зубов. В клинике «Альтамед-с» Одинцово мы используем импланты премиум-класса, которые полностью имитируют натуральные зубы. Процедура включает вживление титанового импланта в костную ткань челюсти.
                </p>
                <p className="text-gray-700">
                  Перед имплантацией в стоматологии Одинцово обязательно проводится КТ для оценки костной ткани. При недостатке кости выполняется костная пластика или синус-лифтинг. Имплантация в клинике Одинцово позволяет восстановить как один зуб, так и весь зубной ряд с пожизненной гарантией.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Костная пластика и синус-лифтинг в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Костная пластика в стоматологии Одинцово необходима при недостатке костной ткани для установки импланта. В клинике «Альтамед-с» Одинцово мы используем современные методы направленной регенерации кости с применением остеопластических материалов.
                </p>
                <p className="text-gray-700">
                  Синус-лифтинг в Одинцово применяется при имплантации на верхней челюсти, когда требуется увеличить объем кости в области верхнечелюстных пазух. Процедура может быть открытой или закрытой, в зависимости от клинической ситуации. Опытные хирурги стоматологии Одинцово проводят костную пластику с высокой точностью и минимальной травматичностью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Реабилитация после операций */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Реабилитация после хирургических вмешательств в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После удаления зуба</h3>
                <p className="text-gray-700 mb-4">
                  После удаления зуба в клинике «Альтамед-с» Одинцово важно соблюдать рекомендации врача для быстрого заживления и предотвращения осложнений. Врачи стоматологии Одинцово дают подробные инструкции по уходу за полостью рта после операции.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Не принимать пищу в течение 2-3 часов после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полоскание антисептиками по назначению врача
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исключить физические нагрузки в первые дни
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После имплантации</h3>
                <p className="text-gray-700 mb-4">
                  Реабилитация после имплантации в стоматологии Одинцово включает несколько этапов: период остеоинтеграции, установка формирователя десны и последующее протезирование. В клинике «Альтамед-с» Одинцово мы обеспечиваем полное сопровождение на всех этапах.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Соблюдение щадящей диеты после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярные контрольные осмотры в клинике Одинцово
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Остеоинтеграция занимает 3-6 месяцев
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Реабилитация после хирургических вмешательств в клинике «Альтамед-с» Одинцово проходит под контролем опытных специалистов. Врачи стоматологии Одинцово дают подробные рекомендации и проводят контрольные осмотры для мониторинга процесса заживления. Правильная реабилитация обеспечивает успешный результат операции и долгосрочное здоровье полости рта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

