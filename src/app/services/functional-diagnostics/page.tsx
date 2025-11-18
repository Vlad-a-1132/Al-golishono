"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from '@/components/AppointmentForm';

export default function FunctionalDiagnosticsPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const procedures = [
    {
      title: "ЭКГ (Электрокардиография)",
      description: "Запись электрической активности сердца для выявления нарушений ритма и проводимости"
    },
    {
      title: "ЭХОКГ (Эхокардиография)",
      description: "Ультразвуковое исследование сердца и сосудов"
    },
    {
      title: "Холтеровское мониторирование",
      description: "Суточная запись ЭКГ для выявления аритмий"
    },
    {
      title: "Спирометрия",
      description: "Оценка функции внешнего дыхания"
    },
    {
      title: "КТГ (Кардиотокография)",
      description: "Мониторинг состояния плода во время беременности"
    }
  ];

  const indications = [
    "Жалобы на боли в сердце",
    "Перебои в работе сердца",
    "Одышка при физической нагрузке",
    "Головокружения и обмороки",
    "Повышенное артериальное давление",
    "Нарушения ритма",
    "Подготовка к операции",
    "Контроль эффективности лечения",
    "Профилактические осмотры",
    "Нарушения дыхания"
  ];

  const advantages = [
    "Безопасность методов",
    "Безболезненность",
    "Информативность",
    "Контроль эффективности лечения",
    "Ранняя диагностика"
  ];

  const faqItems = [
    {
      question: "Что такое ЭКГ?",
      answer: "ЭКГ (электрокардиография) - это метод регистрации электрической активности сердца. Это безболезненная процедура, которая длится 2-3 минуты и помогает выявить нарушения ритма, ишемию и другие патологии сердца."
    },
    {
      question: "Как готовиться к функциональной диагностике?",
      answer: "Большинство методов функциональной диагностики не требуют специальной подготовки. Перед ЭКГ рекомендуется избегать физических нагрузок. Подробные инструкции вы получите при записи на исследование."
    },
    {
      question: "Что покажет Холтер?",
      answer: "Холтеровское мониторирование - это суточная запись ЭКГ, которая позволяет зафиксировать нарушения ритма и проводимости, возникающие не постоянно, а эпизодически в течение дня и ночи."
    },
    {
      question: "Когда назначают ЭХОКГ?",
      answer: "Эхокардиографию (УЗИ сердца) назначают для оценки структуры и функции сердца, выявления пороков, заболеваний сердечной мышцы и клапанов, контроля после лечения."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Функциональная диагностика</span>
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
              Функциональная диагностика в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Оценка функционального состояния органов и систем
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#CC5656] relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/services/Screenshot_1832.png"
                    alt="Функциональная диагностика"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Функциональная диагностика</div>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#CC5656] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#b54b4b] transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#CC5656] relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/services/Screenshot_1832.png"
                  alt="Функциональная диагностика в Одинцово"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Функциональная диагностика</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Оценка работы органов и систем</p>
                <Link 
                  href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" 
                  className="bg-[#CC5656] text-white rounded-full px-8 py-3 font-medium hover:bg-[#b54b4b] transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Виды исследований */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Виды исследований
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {procedures.map((procedure, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl font-semibold text-[#CC5656] mb-3">{procedure.title}</h3>
                <p className="text-gray-600">{procedure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему Альтамед-С*/}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед-С»?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 1" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Современное оборудование</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 2" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">Опытные специалисты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 3" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">Широкий спектр исследований</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img src="/images/yslugi/star 1.webp" alt="Звезда 4" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">Быстрое получение результатов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Что такое функциональная диагностика?</h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Функциональная диагностика - это комплекс методов исследования, направленных на оценку функционального состояния органов и систем организма в покое и при нагрузке.
            </p>
            <p className="text-gray-600">
              Методы функциональной диагностики позволяют выявить нарушения на ранних стадиях, оценить резервные возможности организма, проконтролировать эффективность лечения.
            </p>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда назначают функциональную диагностику</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#CC5656] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Преимущества функциональной диагностики</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#CC5656] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#CC5656] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
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

