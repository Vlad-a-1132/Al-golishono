"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from '@/components/AppointmentForm';

export default function UrologyPage() {
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Данные услуг урологии
  const urologyServices = [
    {
      category: "Консультации уролога",
      services: [
        { name: "Прием (осмотр, консультация) врача-уролога первичный", price: "3 400 руб." },
        { name: "Прием (осмотр, консультация) врача-уролога к.м.н. первичный", price: "3 800 руб." },
        { name: "Прием (осмотр, консультация) врача-уролога повторный", price: "2 500 руб." },
        { name: "Прием (осмотр, консультация) врача-уролога к.м.н. повторный", price: "2 600 руб." },
        { name: "Прием (осмотр, консультация) врача - детского уролога-андролога первичный", price: "3 400 руб." },
        { name: "Прием (осмотр, консультация) врача - детского уролога-андролога повторный", price: "2 300 руб." },
      ]
    },
    {
      category: "Ультразвуковые исследования",
      services: [
        { name: "Ультразвуковое исследование предстательной железы", price: "1 900 руб." },
        { name: "Ультразвуковое исследование предстательной железы Трансректальное", price: "2 400 руб." },
        { name: "Ультразвуковое исследование надпочечников", price: "1 900 руб." },
        { name: "Ультразвуковое исследование почек", price: "1 900 руб." },
        { name: "Ультразвуковое исследование мочевого пузыря с определением остаточной мочи", price: "1 700 руб." },
        { name: "Ультразвуковое исследование органов мошонки", price: "2 300 руб." },
        { name: "Ультразвуковое исследование сосудов полового члена без стоимости препарата", price: "7 000 руб." },
      ]
    },
    {
      category: "Биопсии",
      services: [
        { name: "Биопсия (мультифокальная) предстательной железы трансректальная пункционная под контролем ультразвукового исследования", price: "15 600 руб." },
        { name: "Биопсия мочевого пузыря", price: "12 000 руб." },
        { name: "Биопсия мочевого пузыря трансуретральная", price: "12 000 руб." },
      ]
    },
    {
      category: "Лабораторные исследования",
      services: [
        { name: "Получение уретрального отделяемого", price: "600 руб." },
        { name: "Получение соскоба из уретры", price: "600 руб." },
        { name: "Микроскопическое исследование спермы", price: "3 400 руб." },
        { name: "Спермограмма", price: "3 400 руб." },
      ]
    },
    {
      category: "Манипуляции и уход",
      services: [
        { name: "Катетеризация мочевого пузыря", price: "3 000 руб." },
        { name: "Инстилляция мочевого пузыря", price: "3 000 руб." },
        { name: "Инстилляция уретры", price: "2 400 руб." },
        { name: "Микроклизмирование уретры", price: "2 400 руб." },
        { name: "Уход за мочевым катетером", price: "3 000 руб." },
        { name: "Уход за цистостомой и уростомой", price: "3 000 руб." },
        { name: "Замена цистостомического дренажа", price: "3 000 руб." },
        { name: "Сбор секрета простаты", price: "1 600 руб." },
        { name: "Массаж простаты", price: "1 800 руб." },
        { name: "Инъекция в половой член", price: "1 700 руб." },
      ]
    },
    {
      category: "Функциональная диагностика",
      services: [
        { name: "Измерение скорости потока мочи (урофлоуметрия)", price: "2 000 руб." },
        { name: "Трансректальное пальцевое исследование", price: "900 руб." },
        { name: "Визуальное исследование при патологии мужских половых органов", price: "500 руб." },
        { name: "Пальпация при патологии мужских половых органов", price: "800 руб." },
        { name: "Визуальное исследование при патологии почек и мочевыделительной системы", price: "500 руб." },
        { name: "Пальпация при патологии почек и мочевыделительной системы", price: "800 руб." },
      ]
    },
    {
      category: "Хирургические манипуляции",
      services: [
        { name: "Удаление атеромы генитально-паховой области", price: "23 900 руб." },
        { name: "Удаление доброкачественных новообразований кожи", price: "3 100 руб." },
        { name: "Обрезание крайней плоти", price: "45 900 руб." },
        { name: "Иссечение оболочек яичка", price: "45 900 руб." },
        { name: "Пластика оболочек яичка", price: "45 900 руб." },
        { name: "Разрез мошонки и влагалищной оболочки", price: "21 700 руб." },
        { name: "Иссечение кисты придатка яичка", price: "39 500 руб." },
        { name: "Удаление доброкачественных новообразований полового члена", price: "23 900 руб." },
        { name: "Пластика уздечки крайней плоти", price: "21 200 руб." },
        { name: "Перевязка и пересечение яичковой вены субингвинальное", price: "74 400 руб." },
        { name: "Рассечение внутренних спаек", price: "6 100 руб." },
        { name: "Вправление парафимоза", price: "4 800 руб." },
      ]
    },
    {
      category: "Физиотерапия",
      services: [
        { name: "Ректальное воздействие магнитными полями при заболеваниях мужских половых органов", price: "2 300 руб." },
        { name: "Воздействие переменным магнитным полем (ПеМП)", price: "1 300 руб." },
        { name: "Воздействие высокоинтенсивным импульсным магнитным полем", price: "2 300 руб." },
        { name: "Воздействие магнитными полями", price: "2 000 руб." },
        { name: "Термовоздействие", price: "2 300 руб." },
        { name: "Низкоинтенсивное лазерное облучение кожи", price: "2 400 руб." },
        { name: "Ректальное воздействие низкоинтенсивным лазерным излучением при заболеваниях мужских половых органов", price: "2 500 руб." },
        { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях желез внутренней секреции", price: "2 400 руб." },
        { name: "Воздействие ультразвуковом при заболеваниях желез внутренней секреции", price: "5 000 руб." },
        { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях почек и мочевыделительного тракта", price: "2 400 руб." },
        { name: "Воздействие низкоинтенсивным лазерным излучением при заболеваниях мочевыделительного тракта", price: "2 400 руб." },
        { name: "Вибрационное воздействие", price: "2 500 руб." },
        { name: "Ударно-волновая терапия уро-генитальной области", price: "4 100 руб." },
        { name: "Ректальная гипертермия при заболеваниях мужских половых органов", price: "2 300 руб." },
      ]
    },
    {
      category: "Рентгенологические исследования",
      services: [
        { name: "Обзорная урография (рентгенография мочевыделительной системы)", price: "3 400 руб." },
        { name: "Уретрография восходящая", price: "5 100 руб." },
        { name: "Цистография", price: "5 100 руб." },
        { name: "Внутривенная урография", price: "7 900 руб." },
      ]
    },
    {
      category: "Лечебно-диагностические назначения",
      services: [
        { name: "Назначение лекарственных препаратов при заболеваниях желез внутренней секреции", price: "4 800 руб." },
        { name: "Назначение лекарственных препаратов при заболеваниях мужских половых органов", price: "6 200 руб." },
        { name: "Назначение лекарственных препаратов при заболеваниях почек и мочевыделительного тракта", price: "3 000 руб." },
        { name: "Назначение лекарственных препаратов при неуточненных заболеваниях", price: "4 800 руб." },
        { name: "Назначение лечебно-оздоровительного режима при заболеваниях мужских половых органов", price: "4 800 руб." },
        { name: "Назначение диетической терапии при заболеваниях мужских половых органов", price: "3 000 руб." },
        { name: "Назначение лечебно-оздоровительного режима при заболеваниях почек и мочевыделительного тракта", price: "4 800 руб." },
        { name: "Назначение лечебно-оздоровительного режима при неуточненных заболеваниях", price: "3 000 руб." },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Урология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Урология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение урологических заболеваний у мужчин и женщин в Одинцово
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/yslugi/yrolog.webp"
                    alt="Урология"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Урология</div>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src="/images/yslugi/yrolog.webp"
                  alt="Урология"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Урология</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы диагностики и лечения</p>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Почему Альтамед-С*/}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>

          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Уролог в Одинцово - услуги диагностики и лечения урологических заболеваний
          </h2>
          
          <div className="space-y-12" itemScope itemType="https://schema.org/ItemList">
            {urologyServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-200">
                  <h3 className="text-xl font-semibold text-emerald-800">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <article
                        key={serviceIndex}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        itemScope
                        itemType="https://schema.org/MedicalProcedure"
                      >
                        <h4 className="font-medium text-gray-900 mb-2 text-sm leading-relaxed" itemProp="name">
                          {service.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-600 font-semibold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <span itemProp="price">{service.price}</span>
                            <span itemProp="priceCurrency" content="RUB" className="sr-only">RUB</span>
                          </span>
                          <Link 
                            href="https://online.altamed-c.ru/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                          >
                            Записаться
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we treat section */}
      <section className="py-16 bg-white" aria-labelledby="what-we-treat-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Что мы лечим
          </h2>
          
          <div className="space-y-6 text-gray-700 mb-8">
            <p>
              В штат «Альтамед-С» входят врачи с большим опытом работы, которые внимательно относятся к каждому своему пациенту. Высокая квалификация сотрудников и самое современное диагностическое оборудование позволяют точно выявлять причину проблемы и успешно проводить лечение. Пациентам гарантируется полная конфиденциальность как при обследовании, так и при лечении.
            </p>
          </div>

          {/* Alphabetical list of conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
              <div className="space-y-1 text-sm">
                <div>Аденома простаты</div>
                <div>Азооспермия</div>
                <div>Амилоидоз почек</div>
                <div>Ангиолипома</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
              <div className="space-y-1 text-sm">
                <div>Баланопостит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
              <div className="space-y-1 text-sm">
                <div>Варикоцеле</div>
                <div>Везикулит</div>
                <div>Воспаление почек (нефрит)</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
              <div className="space-y-1 text-sm">
                <div>Гематурия</div>
                <div>Гидронефроз</div>
                <div>Гидроцеле</div>
                <div>Гипоактивный мочевой пузырь</div>
                <div>Гипогонадизм</div>
                <div>Гломерулонефрит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Д</div>
              <div className="space-y-1 text-sm">
                <div>Дивертикул мочевого пузыря</div>
                <div>Дисплазия мочевого пузыря</div>
                <div>Диссинергия детрузора и сфинктера</div>
                <div>Доброкачественная гиперплазия предстательной железы</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">З</div>
              <div className="space-y-1 text-sm">
                <div>Заболевания передающиеся половым путем (ЗППП)</div>
                <div>Задержка мочи</div>
                <div>Задержка полового развития</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">И</div>
              <div className="space-y-1 text-sm">
                <div>Импотенция и бесплодие</div>
                <div>Интерстициальный нефрит</div>
                <div>Искривление полового члена</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">К</div>
              <div className="space-y-1 text-sm">
                <div>Камни в мочевом пузыре</div>
                <div>Камни в мочеточнике</div>
                <div>Камни в почках</div>
                <div>Киста почки</div>
                <div>Киста придатков яичка (сперматоцеле)</div>
                <div>Киста семенного канатика</div>
                <div>Киста урахуса</div>
                <div>Кондиломы</div>
                <div>Короткая уздечка</div>
                <div>Короткая уздечка полового члена</div>
                <div>Крипторхизм</div>
                <div>Куперит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
              <div className="space-y-1 text-sm">
                <div>Лейкоплакия мочевого пузыря</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
              <div className="space-y-1 text-sm">
                <div>Микоплазмоз</div>
                <div>Молочница у мужчин</div>
                <div>Мочевой синдром</div>
                <div>Мочекаменная болезнь</div>
                <div>Мужское бесплодие</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
              <div className="space-y-1 text-sm">
                <div>Недержание мочи</div>
                <div>Нейрогенный (автономный) мочевой пузырь</div>
                <div>Нефроптоз (опущение почки)</div>
                <div>Нефросклероз</div>
                <div>Ночной энурез</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
              <div className="space-y-1 text-sm">
                <div>Опухоль мочевого пузыря</div>
                <div>Опухоль мочеточника</div>
                <div>Опухоль яичка</div>
                <div>Опущение почки</div>
                <div>Орхит</div>
                <div>Орхоэпидидимит</div>
                <div>Острая задержка мочи</div>
                <div>Острый гломерулонефрит</div>
                <div>Острый пиелонефрит</div>
                <div>Острый простатит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
              <div className="space-y-1 text-sm">
                <div>Папилломо-вирусная инфекция</div>
                <div>Паранефрит</div>
                <div>Парафимоз</div>
                <div>Песок в почках</div>
                <div>Пиелит</div>
                <div>Пиелонефрит</div>
                <div>Пиелоэктазия</div>
                <div>Повреждение почки</div>
                <div>Подковообразная почка</div>
                <div>Поликистоз почек</div>
                <div>Полип уретры</div>
                <div>Посткоитальный цистит</div>
                <div>Почечная колика</div>
                <div>Почечная недостаточность</div>
                <div>Преждевременная эякуляция</div>
                <div>Простатит</div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
              <div className="space-y-1 text-sm">
                <div>Рак мочевого пузыря</div>
                <div>Рак полового члена</div>
                <div>Рак почки</div>
                <div>Рак предстательной железы</div>
                <div>Рак уретры</div>
                <div>Рак яичка</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
              <div className="space-y-1 text-sm">
                <div>Свищ мочевого пузыря</div>
                <div>Синдром хронической тазовой боли</div>
                <div>Склероз шейки мочевого пузыря</div>
                <div>Стриктура уретры</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
              <div className="space-y-1 text-sm">
                <div>Травма мочевого пузыря</div>
                <div>Травмы полового члена</div>
                <div>Трихомониаз</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
              <div className="space-y-1 text-sm">
                <div>Уремия</div>
                <div>Уретероцеле</div>
                <div>Уретрит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
              <div className="space-y-1 text-sm">
                <div>Фимоз</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Х</div>
              <div className="space-y-1 text-sm">
                <div>Хламидиоз</div>
                <div>Хронический пиелонефрит</div>
                <div>Хронический простатит</div>
                <div>Хронический цистит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ц</div>
              <div className="space-y-1 text-sm">
                <div>Цистит</div>
                <div>Цистит (у женщин)</div>
                <div>Цистит у мужчин</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
              <div className="space-y-1 text-sm">
                <div>Энурез</div>
                <div>Эпидидимит</div>
                <div>Эректильная дисфункция</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Консультация хорошего врача-уролога в Одинцово
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Уролог - это врач, специализирующийся на диагностировании и лечении различных заболеваний органов мужской мочеполовой системы и женской мочевой системы. 
                В клинике «Альтамед-с» в Одинцово консультируют высококвалифицированные урологи с многолетним стажем работы и глубокими знаниями в области урологических заболеваний. 
                Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности. 
                Для получения качественной урологической помощи в Одинцово и Московской области рекомендуем обратиться именно в «Альтамед-с».
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Визит к врачу откладывать нельзя: чем раньше начать борьбу с недугом, тем быстрее и легче можно справиться с проблемой. 
                В «Альтамед-с» работают врачи высокой квалификации, которые проведут тщательную и безболезненную диагностику и подберут наиболее эффективную схему лечения. 
                Обнаружение у себя одного или сразу нескольких приведенных ниже симптомов свидетельствует о необходимости посещения уролога.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                По всем вопросам, связанным с заболеваниями и патологиями мужской половой системы, вы можете также получить консультацию у урологов-андрологов «Альтамед-с».
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/yslugi/yrolog.webp" 
                alt="Урология" 
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="py-16 bg-white" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Поводы обращения к врачу-урологу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">проблемы с мочеиспусканием;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">жжение и зуд;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение внешнего вида половых органов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение запаха, цвета и объема мочи;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">боли или ощущение дискомфорта (внизу живота, в пояснице, в области промежности, в паху и половых органах);</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">травма мочеполовых органов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">наличие выделений из уретры;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">какие-либо видимые изменения семени (у мужчин).</span>
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}

