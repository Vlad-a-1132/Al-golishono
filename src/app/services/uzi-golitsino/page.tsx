"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function UziGolitsinoPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const ultrasoundServices = [
    {
      category: 'Дуплексное сканирование и допплерография',
      services: [
        { name: "Дуплексное сканирование БЦА с цветным доплеровским картированием кровотока", price: 3390 },
        { name: "Дуплексное сканирование экстракраниальных отделов БЦА", price: 3390 },
        { name: "Ультразвуковая допплерография сосудов (артерий и вен) верхних конечностей", price: 4240 },
        { name: "Дуплексное сканирование вен верхних конечностей", price: 3510 },
        { name: "Дуплексное сканирование вен нижних конечностей", price: 3510 },
        { name: "Дуплексное сканирование артерий нижних конечностей", price: 3510 },
        { name: "Дуплексное сканирование брюшного отдела аорты, подвздошных и общих бедренных артерий", price: 3390 },
        { name: "Дуплексное сканирование транскраниальное артерий и вен", price: 2790 },
        { name: "Дуплексное сканирование сосудов гепатобиллиарной зоны", price: 3390 },
        { name: "Дуплексное сканирование нижней полой и почечных вен", price: 1820 },
        { name: "Дуплексное сканирование нижней полой вены и вен портальной системы", price: 3390 },
        { name: "Дуплексное сканирование артерий почек + брюшной отдел аорты", price: 2180 },
        { name: "Ультразвуковая допплерография артерий верхних конечностей", price: 3510 },
        { name: "Ультразвуковая допплерография артерий нижних конечностей", price: 3510 },
        { name: "УЗДГ брахиоцефальных артерий с функциональными пробами, интракраниальным сегментом позвоночной артерии V4", price: 3870 }
      ]
    },
    {
      category: 'Эхокардиография',
      services: [
        { name: "Эхокардиография", price: 3750 }
      ]
    },
    {
      category: 'Комплексные УЗИ для детей',
      services: [
        { name: "Комплекс для малышей с 1 месяца (нейросонография + УЗИ гепатобиллиарной зоны + УЗИ тазобедренных суставов + УЗИ почек + УЗИ селезенки)", price: 8700 },
        { name: "Нейросонография", price: 2180 }
      ]
    },
    {
      category: 'УЗИ органов брюшной полости',
      services: [
        { name: "Ультразвуковое исследование гепатобиллиарной зоны (печень, желч. пузырь, внутри/внепеченочные протоки, поджелудочная железа)", price: 3390 },
        { name: "Ультразвуковое исследование гепатобиллиарной зоны с функциональными пробами", price: 3390 },
        { name: "Ультразвуковое исследование желчного пузыря и протоков", price: 1210 },
        { name: "Ультразвуковое исследование желчного пузыря с определением его сократимости", price: 2120 },
        { name: "Ультразвуковое исследование печени", price: 1090 },
        { name: "Ультразвуковое исследование поджелудочной железы", price: 970 },
        { name: "Ультразвуковое исследование селезенки", price: 1000 },
        { name: "Ультразвуковое исследование забрюшинного пространства", price: 1330 },
        { name: "Ультразвуковое определение жидкости в брюшной полости", price: 730 }
      ]
    },
    {
      category: 'УЗИ органов малого таза',
      services: [
        { name: "Ультразвуковое исследование органов малого таза (комплексное)", price: 3190 },
        { name: "Ультразвуковое исследование матки и придатков трансабдоминальное", price: 2060 },
        { name: "Ультразвуковое исследование матки и придатков трансвагиальное", price: 2060 },
        { name: "Ультразвуковое исследование матки и придатков трансректальное", price: 1730 },
        { name: "Ультразвуковое исследование предстательной железы", price: 1600 },
        { name: "Ультразвуковое исследование предстательной железы трансректальное", price: 1940 },
        { name: "Ультразвуковое исследование мочевого пузыря", price: 1210 },
        { name: "Ультразвуковое исследование мочевого пузыря с определением остаточной мочи", price: 1090 },
        { name: "Ультразвуковое исследование мочевыводящих путей", price: 1940 }
      ]
    },
    {
      category: 'УЗИ почек и надпочечников',
      services: [
        { name: "Ультразвуковое исследование почек", price: 1730 },
        { name: "Ультразвуковое исследование почек и надпочечников", price: 1820 },
        { name: "Ультразвуковое исследование надпочечников", price: 1210 }
      ]
    },
    {
      category: 'УЗИ желез',
      services: [
        { name: "Ультразвуковое исследование молочных желез", price: 2060 },
        { name: "Ультразвуковое исследование молочных желез с допплеровским исследованием", price: 3060 },
        { name: "Ультразвуковое исследование щитовидной железы и паращитовидных желез", price: 2060 },
        { name: "Ультразвуковое исследование паращитовидных желез", price: 970 },
        { name: "Ультразвуковое исследование слюнных желез", price: 1820 }
      ]
    },
    {
      category: 'Эластография',
      services: [
        { name: "Эластография молочных желез", price: 1210 },
        { name: "Эластография щитовидной железы", price: 1450 },
        { name: "Эластография почек", price: 1450 },
        { name: "Эластография матки и придатков", price: 1210 },
        { name: "Эластография кожи", price: 1210 },
        { name: "Эластография поджелудочной железы", price: 1210 },
        { name: "Эластография мягких тканей", price: 1210 },
        { name: "Эластография печени/методом сдвиговой волны с качественным и количественным определением степени жесткости", price: 2900 }
      ]
    },
    {
      category: 'УЗИ суставов и мягких тканей',
      services: [
        { name: "Ультразвуковое исследование сустава", price: 2060 },
        { name: "Ультразвуковое исследование тазобедренных суставов", price: 1690 },
        { name: "Ультразвуковое исследование мягких тканей (одна анатомическая зона)", price: 1600 },
        { name: "Ультразвуковое исследование лимфатических узлов (одна анатомическая зона)", price: 1600 },
        { name: "Ультразвуковое исследование плевральной полости", price: 1210 },
        { name: "Ультразвуковое исследование головного мозга", price: 2790 },
        { name: "Ультразвуковое исследование органов мошонки", price: 1460 },
        { name: "Ультразвуковое исследование вилочковой железы", price: 1330 }
      ]
    },
    {
      category: 'УЗИ при беременности',
      services: [
        { name: "Определение беременности", price: 2060 },
        { name: "Ультразвуковое исследование плода", price: 3030 },
        { name: "Дуплексное сканирование сердца и сосудов плода", price: 3990 },
        { name: "Ультразвуковое исследование фолликулогенеза", price: 1870 },
        { name: "Ультразвуковая допплерография маточно-плацентарного кровотока", price: 3590 }
      ]
    },
    {
      category: 'УЗИ шеи и сосудов',
      services: [
        { name: "УЗИ сосудов шеи", price: 3390 }
      ]
    }
  ];

  const indications = [
    "Заболевания органов брюшной полости и почек",
    "Болезни органов малого таза",
    "Патологии щитовидной и молочных желез",
    "Заболевания сосудов и сердца",
    "Проблемы с суставами и мягкими тканями",
    "Исследование беременных",
    "Контроль развития плода",
    "Заболевания предстательной железы",
    "Эхокардиография",
    "Допплеровское исследование сосудов",
    "Патологии лимфатических узлов",
    "Онкологические скрининги"
  ];

  const advantages = [
    "Полная безопасность - нет излучения",
    "Отсутствие побочных эффектов",
    "Безболезненность процедуры",
    "Высокая информативность",
    "Немедленные результаты",
    "Возможность многократных исследований"
  ];

  const faqItems = [
    {
      question: "Как подготовиться к УЗИ в Голицыно?",
      answer: "Подготовка зависит от типа исследования. Для УЗИ брюшной полости в клинике «Альтамед Голицыно» требуется голод 6-8 часов и за 3 дня исключить продукты, вызывающие газообразование. Для УЗИ органов малого таза нужен наполненный мочевой пузырь. Для УЗИ щитовидной железы и УЗИ суставов подготовка не требуется. Подробную инструкцию по подготовке к конкретному УЗИ вы получите при записи в Голицыно."
    },
    {
      question: "Сколько длится процедура УЗИ в Голицыно?",
      answer: "Обычно УЗИ в клинике «Альтамед Голицыно» занимает 15-30 минут в зависимости от области исследования и сложности случая. Комплексные исследования могут длиться до 45 минут. Результаты с описанием выдаются сразу после процедуры на руки пациенту."
    },
    {
      question: "Безопасно ли УЗИ при беременности в Голицыно?",
      answer: "Да, ультразвуковое исследование абсолютно безопасно для беременных и плода. В клинике «Альтамед Голицыно» проводятся все необходимые УЗИ-скрининги: определение беременности, исследование плода, допплерография сосудов плода и маточно-плацентарного кровотока. ВОЗ рекомендует плановые УЗИ на определенных сроках беременности для контроля развития ребенка."
    },
    {
      question: "С какого возраста можно делать УЗИ детям в Голицыно?",
      answer: "УЗИ в клинике «Альтамед Голицыно» можно делать детям с самого рождения. Это один из самых безопасных методов диагностики, часто используемый для обследования грудничков. В Голицыно мы проводим нейросонографию (УЗИ головного мозга), УЗИ тазобедренных суставов, УЗИ внутренних органов. Опытные врачи создают комфортную атмосферу для проведения исследования."
    },
    {
      question: "Сколько стоит сделать УЗИ в Голицыно?",
      answer: "Стоимость УЗИ в клинике «Альтамед Голицыно» зависит от типа исследования. Цены начинаются от 480 рублей (например, отдельные позиции по мочевыводящим путям). УЗИ комплексов и дуплексные исследования стоят дороже. Например, УЗИ органов малого таза — от 1600 рублей, комплексное УЗИ малого таза — 3190 рублей, УЗДГ сосудов шеи — 3390 рублей, эхокардиография — 3750 рублей. Полный прейскурант — на этой странице. Уточнить стоимость конкретного УЗИ можно при записи или по телефону клиники в Голицыно."
    },
    {
      question: "Где можно сделать УЗИ в Голицыно платно?",
      answer: "Медицинский центр «Альтамед Голицыно» в Голицыно предлагает широкий спектр ультразвуковых исследований на современном оборудовании экспертного класса. Клиника работает ежедневно, записаться на УЗИ можно по телефону или через форму записи на сайте. При необходимости возможно проведение УЗИ в день обращения. Врачи-диагносты высшей категории обеспечивают высокое качество исследований."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">УЗИ Голицыно</span>
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
              УЗИ в клинике «<span className="italic">Альтамед Голицыно</span>» в Голицыно
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современная ультразвуковая диагностика на оборудовании экспертного класса в Голицыно
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#2C83A7] relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/services/yzi%20new.png"
                    alt="УЗИ в Голицыно"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Ультразвуковая диагностика</div>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#2C83A7] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#267399] transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#2C83A7] relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/services/yzi%20new.png"
                  alt="УЗИ в Голицыно"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">УЗИ в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современная безопасная диагностика</p>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#2C83A7] text-white rounded-full px-8 py-3 font-medium hover:bg-[#267399] transition-colors"
                >
                  Записаться на УЗИ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Услуги УЗИ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги ультразвуковой диагностики
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр УЗИ-исследований в клинике «Альтамед Голицыно» в Голицыно
            </p>
          </div>

          <div className="space-y-8">
            {ultrasoundServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#2C83A7] to-[#3C93B7] px-6 py-4">
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
                            <div className="text-[#2C83A7] font-semibold text-lg">
                              {service.price} ₽
                            </div>
                          </div>
                          <Link 
                            href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer"
                            className="ml-3 bg-[#2C83A7] text-white px-3 py-1 rounded-md text-sm hover:bg-[#267399] transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
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
              href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#2C83A7] text-white rounded-full px-8 py-3 font-medium hover:bg-[#267399] transition-colors"
            >
              Записаться на УЗИ
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">УЗИ в Голицыно: современная безопасная диагностика</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Ультразвуковое исследование (УЗИ)</strong> — это безопасный, безболезненный и высокоинформативный метод диагностики, использующий ультразвуковые волны для визуализации внутренних органов и тканей. В медицинском центре «Альтамед Голицыно» в Голицыно УЗИ выполняется на современном оборудовании экспертного класса, что обеспечивает высочайшую точность диагностики и качественные изображения.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Основные преимущества УЗИ в Голицыно — полная безопасность (нет ионизирующего излучения), безболезненность процедуры, немедленное получение результатов, возможность многократного исследования, высокая информативность. В клинике «Альтамед Голицыно» проводятся все виды ультразвуковой диагностики: УЗИ органов брюшной полости, УЗИ малого таза, УЗИ сосудов шеи и конечностей, УЗИ сердца (эхокардиография), УЗИ щитовидной железы, УЗИ молочных желез, УЗИ при беременности, УЗИ детям.
            </p>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#2C83A7]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Преимущества УЗИ в клинике «Альтамед Голицыно» в Голицыно:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Оборудование экспертного класса — современные ультразвуковые сканеры с высокой разрешающей способностью</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Врачи-диагносты высшей категории с большим опытом работы</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Широкий спектр исследований — более 80 видов УЗИ-диагностики</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрая выдача результатов — описание и снимки на руки сразу после процедуры</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Удобное расположение в центре Голицыно</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Показания к УЗИ в Голицыно</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#2C83A7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные УЗИ */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Популярные УЗИ-исследования в Голицыно</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            В медицинском центре «Альтамед Голицыно» в Голицыно наиболее часто выполняются следующие виды ультразвуковой диагностики:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ сосудов шеи в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ сосудов шеи (дуплексное сканирование брахиоцефальных артерий) — исследование сосудов, питающих головной мозг. Проводится при головных болях, головокружениях, для оценки риска инсульта. В клинике «Альтамед Голицыно» выполняется с функциональными пробами и интракраниальным сегментом.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                3390 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ вен нижних конечностей в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ вен нижних конечностей — дуплексное сканирование для диагностики варикозной болезни, тромбозов глубоких вен. Позволяет оценить состояние вен, клапанов, наличие тромбов, скорость кровотока. Незаменимо для профилактики и лечения заболеваний вен.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                3510 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ малого таза в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ органов малого таза у женщин (матки и придатков) и мужчин (предстательной железы) — трансабдоминальное, трансвагинальное или трансректальное. Используется для диагностики гинекологических и урологических заболеваний, оценки состояния органов.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 1600 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ сердца (эхокардиография) в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Эхокардиография — УЗИ сердца для оценки его структуры и функции, диагностики пороков, ишемической болезни, кардиомиопатий. Позволяет визуализировать камеры сердца, клапаны, скорость кровотока, состояние миокарда.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                3750 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ брюшной полости в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ гепатобиллиарной зоны — комплексное исследование печени, желчного пузыря, протоков, поджелудочной железы. Используется для диагностики гепатитов, холециститов, панкреатитов, желчнокаменной болезни. Может проводиться с функциональными пробами.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                3390 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ молочных желез в Голицыно</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ молочных желез — безопасный метод диагностики заболеваний груди, особенно эффективен у женщин моложе 40 лет. Позволяет выявить кисты, фиброаденомы, мастопатию, провести скрининг рака молочной железы. Может дополняться эластографией.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                2060 ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УЗИ детям */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">УЗИ детям в Голицыно</h2>
          <div className="bg-white rounded-[20px] p-8 shadow-lg border-l-4 border-[#2C83A7]">
            <p className="text-gray-700 mb-4 leading-relaxed">
              В медицинском центре «Альтамед Голицыно» в Голицыно УЗИ детям проводится с особой заботой и вниманием. Ультразвуковая диагностика абсолютно безопасна для детей любого возраста, включая новорожденных, и может проводиться многократно без вреда для здоровья.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Специальный комплекс для малышей с 1 месяца</strong> включает: нейросонографию (УЗИ головного мозга через открытый родничок), УЗИ гепатобиллиарной зоны, УЗИ тазобедренных суставов для раннего выявления дисплазии, УЗИ почек, УЗИ селезенки. Этот комплекс позволяет провести полное обследование малыша на раннем этапе развития и своевременно выявить возможные патологии.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Врачи клиники «Альтамед Голицыно» имеют большой опыт работы с детьми, создают комфортную и спокойную атмосферу, используют специальные протоколы исследования. УЗИ детям в Голицыно — это безопасный, быстрый и информативный метод диагностики.
            </p>
          </div>
        </div>
      </section>

      {/* Подготовка к УЗИ */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Подготовка к УЗИ в Голицыно</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ брюшной полости</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Голод 6-8 часов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>За 3 дня исключить газообразующие продукты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Прием ферментов по назначению врача</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ органов малого таза</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Наполненный мочевой пузырь</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Выпить 1-1.5 литра воды за час до исследования</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Трансвагинальное — без подготовки</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ почек и мочевого пузыря</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Наполненный мочевой пузырь</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Выпить воду за час до исследования</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ щитовидной железы</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Без подготовки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Не требуется голод</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы об УЗИ в Голицыно</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#2C83A7] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
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
