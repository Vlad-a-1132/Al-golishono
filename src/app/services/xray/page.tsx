"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function XRayPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const xrayServices = [
    {
      category: 'Голова и шея',
      services: [
        { name: "Рентгенография турецкого седла", price: 2000 },
        { name: "Рентгенография скуловой кости", price: 2900 },
        { name: "Рентгенография всего черепа, в одной или более проекциях", price: 2900 },
        { name: "Рентгенография первого и второго шейного позвонка", price: 2600 },
        { name: "Рентгенография шейного отдела позвоночника", price: 2600 },
        { name: "Рентгенография шейно-дорсального отдела позвоночника", price: 2600 },
        { name: "Рентгенография костей лицевого скелета", price: 2900 },
        { name: "Рентгенография черепа в прямой проекции", price: 2000 },
        { name: "Рентгенография носоглотки", price: 2400 },
        { name: "Рентгенография глазницы", price: 2100 },
        { name: "Рентгенография гортани и трахеи", price: 2000 },
        { name: "Рентгенография придаточных пазух носа", price: 2100 }
      ]
    },
    {
      category: 'Позвоночник',
      services: [
        { name: "Рентгенография грудного отдела позвоночника", price: 2900 },
        { name: "Рентгенография грудного и поясничного отдела позвоночника", price: 2900 },
        { name: "Рентгенография поясничного отдела позвоночника", price: 2900 },
        { name: "Рентгенография поясничного и крестцового отдела позвоночника", price: 3200 },
        { name: "Рентгенография крестца и копчика", price: 2900 },
        { name: "Рентгенография крестца", price: 2900 },
        { name: "Рентгенография копчика", price: 2600 },
        { name: "Рентгенография позвоночника, специальные исследования и проекции", price: 2900 },
        { name: "Рентгенография позвоночника с функциональными пробами", price: 3500 },
        { name: "Рентгенография позвоночника, вертикальная", price: 2900 }
      ]
    },
    {
      category: 'Верхние конечности',
      services: [
        { name: "Рентгенография верхней конечности", price: 2600 },
        { name: "Рентгенография ключицы", price: 2000 },
        { name: "Рентгенография лопатки", price: 2000 },
        { name: "Рентгенография головки плечевой кости", price: 2400 },
        { name: "Рентгенография плечевой кости", price: 2600 },
        { name: "Рентгенография локтевой кости и лучевой кости", price: 2600 },
        { name: "Рентгенография запястья", price: 2500 },
        { name: "Рентгенография пясти", price: 2500 },
        { name: "Рентгенография кисти", price: 2500 },
        { name: "Рентгенография фаланг пальцев кисти", price: 2400 },
        { name: "Рентгенография пальцев фаланговых костей кисти", price: 2400 },
        { name: "Рентгенография І пальца кисти", price: 2100 },
        { name: "Рентгенография локтевого сустава", price: 2900 },
        { name: "Рентгенография лучезапястного сустава", price: 2900 },
        { name: "Рентгенография плечевого сустава", price: 2000 },
        { name: "Рентгенография акромиально-ключичного сочленения", price: 2000 }
      ]
    },
    {
      category: 'Нижние конечности и таз',
      services: [
        { name: "Рентгенография нижней конечности", price: 2600 },
        { name: "Рентгенография таза", price: 2500 },
        { name: "Рентгенография бедренной кости", price: 2900 },
        { name: "Рентгенография большой берцовой и малой берцовой костей", price: 2900 },
        { name: "Рентгенография лодыжки", price: 2900 },
        { name: "Рентгенография предплюсны", price: 2100 },
        { name: "Рентгенография пяточной кости", price: 2000 },
        { name: "Рентгенография плюсны и фаланг пальцев стопы", price: 2700 },
        { name: "Рентгенография стопы в одной проекции", price: 2000 },
        { name: "Рентгенография стопы в двух проекциях", price: 3100 },
        { name: "Рентгенография стопы с функциональной нагрузкой", price: 3900 },
        { name: "Рентгенография фаланг пальцев ноги", price: 2600 },
        { name: "Рентгенография І пальца стопы в одной проекции", price: 2600 },
        { name: "Рентгенография коленного сустава", price: 2900 },
        { name: "Рентгенография тазобедренного сустава", price: 2400 },
        { name: "Рентгенография голеностопного сустава", price: 2900 }
      ]
    },
    {
      category: 'Грудная клетка и брюшная полость',
      services: [
        { name: "Рентгенография ребра(ер)", price: 2500 },
        { name: "Рентгенография грудины", price: 2600 },
        { name: "Рентгенография легких", price: 2500 },
        { name: "Прицельная рентгенография органов грудной клетки", price: 2800 },
        { name: "Обзорный снимок брюшной полости и органов малого таза", price: 2500 },
        { name: "Обзорная рентгенография органов брюшной полости", price: 2500 }
      ]
    },
    {
      category: 'Дополнительные услуги',
      services: [
        { name: "Описание и интерпретация рентгенографических изображений", price: 1900 },
        { name: "Запись на диск для пациента", price: 600 },
        { name: "Распечатка снимка на пленке 20*25", price: 500 },
        { name: "Распечатка снимка на пленке 35*43", price: 700 }
      ]
    }
  ];

  const indications = [
    "Травмы костей и суставов",
    "Пневмония и другие заболевания легких",
    "Заболевания позвоночника",
    "Патологии зубов",
    "Инородные тела",
    "Контроль заживления переломов",
    "Оценка состояния органов грудной клетки"
  ];

  const advantages = [
    "Быстрота выполнения",
    "Высокая доступность",
    "Информативность",
    "Низкая стоимость",
    "Широкие показания"
  ];

  const faqItems = [
    {
      question: "Как часто можно делать рентген в Одинцово?",
      answer: "Частота рентгеновских исследований в клинике «Альтамед-С» определяется врачом индивидуально, в зависимости от показаний. Современная цифровая аппаратура использует минимальные дозы облучения, безопасные для здоровья. Лучевая нагрузка на цифровых рентген-аппаратах в 2-3 раза ниже, чем на пленочных."
    },
    {
      question: "Вреден ли рентген для детей в Одинцово?",
      answer: "При соблюдении всех мер защиты рентген полностью безопасен для детей. В медицинском центре «Альтамед-С» используется современное оборудование с минимальной дозой облучения. Для детей применяются специальные протоколы с еще меньшими дозами излучения. Исследование назначается только по строгим медицинским показаниям."
    },
    {
      question: "Нужна ли подготовка к рентгену в Одинцово?",
      answer: "Большинство рентгеновских исследований в клинике «Альтамед-С» не требуют специальной подготовки. Рентген легких, костей, суставов, позвоночника, зубов проводится без подготовки. Исключение составляют рентген желудка и кишечника, которые требуют диеты и очищения кишечника. Подробную информацию о подготовке вы получите при записи на исследование."
    },
    {
      question: "Сколько стоит сделать рентген в Одинцово?",
      answer: "Стоимость рентгенографии в клинике «Альтамед-С» зависит от типа исследования. Цены начинаются от 2000 рублей за рентген отдельных костей и суставов. Рентген легких стоит от 2500 рублей, рентген позвоночника — от 2900 рублей. Уточнить точную стоимость конкретного исследования вы можете при записи или по телефону клиники."
    },
    {
      question: "Где можно сделать рентген в Одинцово платно?",
      answer: "Медицинский центр «Альтамед-С» в Одинцово предлагает платные рентгенологические исследования на современном цифровом оборудовании. Клиника находится в центре Одинцово, работает ежедневно. Записаться на рентген можно по телефону или через форму записи на сайте. При необходимости возможно проведение рентгена в день обращения."
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Услуги</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Рентген</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main section */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Рентген в клинике «<span className="italic">Альтамед-с</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современная цифровая рентгенография в Одинцово: диагностика заболеваний и травм
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#4A5568] relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/services/Screenshot_1830.png"
                    alt="Рентген в Одинцово"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Рентгенография в Одинцово</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#4A5568] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#3d4454] transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#4A5568] relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/services/Screenshot_1830.png"
                  alt="Рентген в Одинцово"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Рентген в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Цифровая рентгенография на современном оборудовании</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#4A5568] text-white rounded-full px-8 py-3 font-medium hover:bg-[#3d4454] transition-colors"
                >
                  Записаться на рентген
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Услуги рентгена */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги рентгенографии
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр рентгенологических исследований в клинике «Альтамед-С» в Одинцово
            </p>
          </div>

          <div className="space-y-8">
            {xrayServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1 pr-2">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                              {service.name}
                            </h4>
                            <div className="text-[#4A5568] font-semibold text-lg">
                              {service.price} ₽
                            </div>
                          </div>
                          <Link 
                            href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer"
                            className="ml-3 bg-[#4A5568] text-white px-3 py-1 rounded-md text-sm hover:bg-[#3d4454] transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
                          >
                            Записаться
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#4A5568] text-white rounded-full px-8 py-3 font-medium hover:bg-[#3d4454] transition-colors"
            >
              Записаться на рентген
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Рентген в Одинцово: современная цифровая диагностика</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Рентгенография</strong> — один из самых востребованных и надежных методов лучевой диагностики. В медицинском центре «Альтамед-С» в Одинцово рентгенологические исследования проводятся на современном цифровом оборудовании экспертного класса, которое обеспечивает высокое качество изображений при минимальной лучевой нагрузке.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Цифровая рентгенография в Одинцово используется для диагностики широкого спектра заболеваний: травм костей и суставов, заболеваний легких, патологий позвоночника, стоматологических проблем. Преимущества цифрового рентгена в клинике «Альтамед-С» — высокая четкость изображений, возможность увеличения и обработки снимков, а также максимально низкая доза облучения.
            </p>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Преимущества цифрового рентгена в Одинцово:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4A5568] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Минимальная лучевая нагрузка — в 2-3 раза меньше, чем на пленочных аппаратах</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4A5568] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрота получения результатов — снимки готовы через несколько минут</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4A5568] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Высокое качество изображения — возможность цифровой обработки и увеличения</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4A5568] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Удобство хранения — результаты записываются на диск или распечатываются</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#4A5568] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Доступные цены — демократичная стоимость рентгенографии в Одинцово</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Показания к рентгенографии в Одинцово</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные исследования */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Популярные рентгенологические исследования в Одинцово</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            В медицинском центре «Альтамед-С» в Одинцово наиболее часто выполняются следующие виды рентгенографии:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген легких в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентгенография легких — обязательное исследование при подозрении на пневмонию, туберкулез, новообразования. В клинике «Альтамед-С» рентген легких проводится на цифровом оборудовании с минимальной лучевой нагрузкой.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2500 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген пазух носа в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентген придаточных пазух носа используется для диагностики гайморита, фронтита и других синуситов. Быстрое и информативное исследование, которое позволяет определить наличие воспалительного процесса и характер патологии.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2100 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген позвоночника в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентгенография позвоночника применяется для диагностики остеохондроза, сколиоза, травм, межпозвонковых грыж. В клинике «Альтамед-С» проводятся рентген всех отделов позвоночника, в том числе с функциональными пробами.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2900 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген коленного сустава в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентгенография коленного сустава необходима при травмах, артритах, артрозах. Исследование позволяет выявить переломы, вывихи, изменения суставной щели, остеофиты и другие патологические изменения.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2900 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген тазобедренных суставов в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентгенография тазобедренного сустава используется для диагностики дисплазии у детей, коксартроза, асептического некроза головки бедренной кости, травм. Особенно важен для детей раннего возраста.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2400 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Рентген стопы в Одинцово</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Рентгенография стопы в одной или двух проекциях применяется при подозрении на плоскостопие, травмы, артрозы мелких суставов. По показаниям выполняется рентген стопы с функциональной нагрузкой.
              </p>
              <div className="text-[#4A5568] font-semibold text-lg">
                От 2000 ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Рентген детям */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Рентген детям в Одинцово</h2>
          <div className="bg-white rounded-[20px] p-8 shadow-lg border-l-4 border-[#4A5568]">
            <p className="text-gray-700 mb-4 leading-relaxed">
              В медицинском центре «Альтамед-С» в Одинцово рентгенологические исследования для детей проводятся с особым вниманием к безопасности. Современное цифровое оборудование позволяет использовать минимальные дозы излучения, безопасные для детского организма.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Для детей применяются специальные протоколы исследования с еще меньшей лучевой нагрузкой. Все рентген-исследования детям назначаются строго по медицинским показаниям, после осмотра врачом. Исследования проводятся опытными специалистами, которые умеют работать с детьми и создают комфортную атмосферу.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Чаще всего детям в Одинцово назначаются: рентген грудной клетки при пневмонии, рентген пазух носа при подозрении на гайморит, рентген тазобедренных суставов для диагностики дисплазии, рентген костей и суставов при травмах.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы о рентгене в Одинцово</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#4A5568] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
