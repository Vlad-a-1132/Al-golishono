"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

export default function FamilyPsychologyPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const familyPsychologyServices = [
    {
      name: "Консультация семейного психолога",
      price: 4000,
      description: "Совместная консультация для пары или семьи по семейным вопросам и отношениям"
    },
    {
      name: "Индивидуальная работа по семейной проблематике",
      price: 3500,
      description: "Индивидуальная работа над проблемами, влияющими на семейные отношения"
    }
  ];

  const reasonsForConsultation = [
    "Постоянные конфликты и недопонимание в отношениях",
    "Кризисы в семейной жизни (после свадьбы, рождения ребенка)",
    "Семейное насилие и токсичные отношения",
    "Проблемы в сексуальных отношениях",
    "Разногласия в воспитании детей",
    "Проблемы с родственниками и границами",
    "Подготовка к браку",
    "Измена и ревность",
    "Развод и расставание",
    "Семейный бюджет и финансовые конфликты",
    "Распределение ролей и обязанностей в семье",
    "Эмоциональная холодность в отношениях",
    "Потеря близости и взаимопонимания"
  ];

  const treatmentMethods = [
    "Системная семейная терапия",
    "Работа с диадой - парная терапия",
    "Мультисемейные группы",
    "Структурная семейная терапия",
    "Нарративная семейная терапия",
    "Терапия, ориентированная на эмоции"
  ];

  const faqItems = [
    {
      question: "Кто должен приходить на семейную консультацию?",
      answer: "Идеально, когда на консультации присутствуют все члены семьи, чье участие необходимо для решения проблемы. Обычно это супруги для парной терапии или вся ядерная семья для семейной терапии. Иногда возможна индивидуальная работа, если партнер не готов или не хочет участвовать."
    },
    {
      question: "Сколько длится семейная терапия?",
      answer: "Краткосрочная работа может занимать 5-10 сессий для решения конкретных конфликтов. Глубокая семейная терапия может длиться 6-12 месяцев или дольше, в зависимости от сложности проблем."
    },
    {
      question: "Что если один из партнеров не хочет идти к психологу?",
      answer: "Начать можно с индивидуальной работы. Часто один партнер, начав меняться, мотивирует другого присоединиться. Психолог может дать рекомендации, как мягко пригласить партнера на консультацию."
    },
    {
      question: "Поможет ли семейная терапия спасти брак?",
      answer: "Семейная терапия помогает улучшить понимание между партнерами, научиться конструктивно решать конфликты и восстановить близость. Иногда это спасает отношения, иногда помогает благополучно расстаться. Итог зависит от желания обоих партнеров работать над отношениями."
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Семейная психология</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Семейная психология в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Помощь в налаживании гармоничных семейных отношений
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-purple-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/yslugi/famili.webp"
                    alt="Семейная психология"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Семейная психология</div>
                <Link 
                  href="/appointments" 
                  className="bg-purple-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-purple-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-purple-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src="/images/yslugi/famili.webp"
                  alt="Семейная психология в Одинцово"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Семейная психология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Восстановление близости и гармонии в семейных отношениях</p>
                <Link 
                  href="/appointments" 
                  className="bg-purple-500 text-white rounded-full px-8 py-3 font-medium hover:bg-purple-600 transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Специалисты по семейной терапии с многолетним опытом
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
                Проверенные методики системной семейной терапии
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
                Комфортная обстановка для семейных консультаций
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
                Работа с парами, семьями и детско-родительскими отношениями
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Что мы лечим */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Когда стоит обратиться к семейному психологу
          </h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Семейная психология помогает парам и семьям справиться с кризисами, улучшить коммуникацию, восстановить близость и выстроить здоровые границы. Любые семейные проблемы, которые создают напряжение и мешают отношениям, могут быть решены с помощью профессиональной поддержки.
            </p>
            <p className="text-gray-600">
              Наши специалисты используют системный подход, рассматривая семью как единую систему, где изменения одного члена влияют на всю семью. Мы помогаем понять паттерны взаимодействия и найти новые способы общения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsForConsultation.map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Методы лечения */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Методы семейной терапии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentMethods.map((method, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Услуги семейного психолога в Одинцово
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг семейной психологии
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Услуги семейной психологии</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {familyPsychologyServices.map((service, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                            {service.name}
                          </h4>
                          <div className="text-emerald-600 font-semibold text-lg">
                            {service.price.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                        <Link 
                          href="/appointments"
                          className="ml-3 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0"
                        >
                          Записаться
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-500 transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

