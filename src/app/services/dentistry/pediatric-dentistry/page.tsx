'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function PediatricDentistryPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг детской стоматологии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога детского",
      services: [
        { code: "", name: "Консультация детского стоматолога", price: 800 },
        { code: "В01.064.003.500", name: "Прием (осмотр, консультация) врача-стоматолога детского первичный сзаполнением документации и составление плана лечения, 1 ед.", price: 1600 },
        { code: "В04.064.002.500", name: "Профилактический прием (осмотр, консультация) врача-стоматолога детского с оформлением справки в ДДУ, школу и т.п., 1 ед.", price: 750 },
        { code: "В01.064.003.501", name: "Прием (осмотр, консультация) врача-стоматолога детского первичный. Консультация по подготовке трудно-контактного ребенка к лечению, 1 ед.", price: 2300 }
      ]
    },
    {
      subtitle: "Лечение кариеса молочного зуба",
      services: [
        { code: "", name: "Лечение кариеса молочного зуба", price: 3000 },
        { code: "А16.07.002.009", name: "Наложение временной пломбы, 1 ед.", price: 550 },
        { code: "А16.07.002.512", name: "Восстановление молочного зуба пломбой светового отверждения /менее 1/3 временного зуба/ 1 ед.", price: 3200 },
        { code: "А16.07.002.513", name: "Восстановление молочного зуба пломбой светового отверждения, /от 1/3 до 1/2 временного зуба/1 ед.", price: 3800 },
        { code: "А1607.002.514", name: "Восстановление пломбой светового отверждения  более 1/2зуба/ед.", price: 4700 },
        { code: "А16.07.002.515", name: "Восстановление зуба пломбой, эстетическая реставрация, 1 ед.", price: 6900 }
      ]
    },
    {
      subtitle: "Лечение пульпита молочного зуба",
      services: [
        { code: "", name: "Лечение пульпита молочного зуба", price: 5000 },
        { code: "А11.07.027", name: "Наложение девитализирующей пасты, 1 ед.", price: 1600 },
        { code: "А16.07.030", name: "Инструментальная и медикаментозная обработка корневого канала, 1 посещение", price: 550 },
        { code: "А16.07.008", name: "Пломбирование корневого канала зуба, 1 ед.", price: 1300 },
        { code: "А16.07.009", name: "Пульпотомия /АМПУТАЦИЯ КОРОНКОВОЙ ПУЛЬПЫ", price: 1600 },
        { code: "А16.07.002.516", name: "Восстановление зуба пломбой. Восстановление коронковой части молочного зуба с использованием композитного материала при лечении осложненного кариеса, 1 ед.", price: 4100 },
        { code: "А16.07.002.517", name: "Восстановление зуба пломбой. Восстановление молочного зуба металлической коронкой, 1 ед.", price: 4300 }
      ]
    },
    {
      subtitle: "Профилактика заболеваний полости рта",
      services: [
        { code: "", name: "Герметизация фиссур", price: 1500 },
        { code: "А16.07.057.508", name: "Запечатывание фиссуры зуба герметиком. Герметизация фиссур, 1 ед.", price: 2300 },
        { code: "А16.07.057.507", name: "Запечатывание фиссуры зуба герметиком. Герметизация фиссур неинвазивная, 1 ед.", price: 1600 },
        { code: "", name: "Фторирование молочных зубов", price: 1000 },
        { code: "А11.07.012.501", name: "Глубокое фторирование эмали зуба. Покрытие всех зубов фторлаком, 1 ед.", price: 1900 },
        { code: "А11.07.012.502", name: "Глубокое фторирование эмали зуба. Покрытие всех зубов фторгелем, 1 ед.", price: 1000 },
        { code: "А11.07.012.503", name: "Глубокое фторирование эмали зуба. Применение эмалевого ликвида, 1 ед.", price: 350 },
        { code: "А11.07.024.501", name: "Местное применение реминерализующих препаратов в области всех зубов", price: 2500 },
        { code: "", name: "Серебрение зубов", price: 800 },
        { code: "", name: "Профессиональная гигиена для детей", price: 2500 },
        { code: "А16.07.051.500", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в молочном прикусе (мягкие светлые отложения), 1 ед.", price: 2600 },
        { code: "А16.07.051.501", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в сменном прикусе (мягкие светлые отложения), 1 ед.", price: 3300 },
        { code: "А16.07.051.502", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в молочном прикусе (плотные темные отложения), 1 ед.", price: 4600 },
        { code: "А16.07.051.503", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в сменном прикусе (плотные темные отложения), 1 ед.", price: 5900 },
        { code: "А14.07.003", name: "Гигиена полости рта и зубов, 1 ед.", price: 450 }
      ]
    },
    {
      subtitle: "Удаление молочных зубов",
      services: [
        { code: "", name: "Удаление молочного зуба", price: 2000 },
        { code: "А16.07.001.501", name: "Удаление временного зуба с физиологической подвижностью, 1 ед.", price: 1300 },
        { code: "А16.07.001.001", name: "Удаление временного зуба, 1 ед.", price: 2600 },
        { code: "А16.07.001.502", name: "Удаление временного зуба сложное, 1 ед.", price: 3400 }
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
            <span className="text-gray-900">Детская стоматология</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Детская стоматология в Одинцово — лечение зубов у детей в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Лечение молочных и постоянных зубов у детей в Одинцово. Безболезненное лечение, адаптация, профилактика. Доброжелательный подход к маленьким пациентам в клинике «Альтамед-с».
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Pediatric dentistry.webp"
                alt="Детская стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Детская стоматология в Одинцово</div>
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
                src="/images/services/Pediatric dentistry.webp"
                alt="Детская стоматология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Детская стоматология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Лечение и профилактика для здоровых зубов у детей</p>
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
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Особенности детской стоматологии в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Наши преимущества</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Адаптация ребенка к стоматологическому лечению
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Безболезненное лечение с современной анестезией
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Доброжелательный и терпеливый персонал
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Игровая форма лечения для детей
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Услуги для детей</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Лечение кариеса молочных и постоянных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профилактика (герметизация, фторирование)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена для детей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Удаление молочных зубов при необходимости
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
            Услуги детской стоматологии в Одинцово
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
              Почему важно лечить молочные зубы в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Сохранить место для постоянных зубов",
                  text: "Молочные зубы удерживают место для постоянных. Преждевременное удаление может привести к нарушению прикуса. В клинике «Альтамед-с» Одинцово мы стараемся сохранить молочные зубы до естественной смены.",
                  icon: "🦷"
                },
                {
                  title: "Предотвратить осложнения",
                  text: "Кариес молочных зубов может перерасти в пульпит и периодонтит, что негативно влияет на зачатки постоянных зубов. Своевременное лечение в стоматологии Одинцово защищает постоянные зубы.",
                  icon: "🛡️"
                },
                {
                  title: "Заложить основы здоровья",
                  text: "Раннее обучение гигиене и регулярные визиты к детскому стоматологу в Одинцово формируют правильные привычки ухода за зубами на всю жизнь.",
                  icon: "⭐"
                },
                {
                  title: "Избежать страха перед лечением",
                  text: "Доброжелательный подход и адаптация ребенка в «Альтамед-с» Одинцово помогают избежать развития дентофобии и делают лечение комфортным для маленьких пациентов.",
                  icon: "😊"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
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
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда нужно посетить детского стоматолога в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🦷", title: "Первое посещение", desc: "В возрасте 1-2 лет для знакомства" },
                { icon: "😬", title: "Темные пятна на зубах", desc: "Признаки кариеса требуют лечения" },
                { icon: "😣", title: "Жалобы на боль", desc: "Любая боль в зубах или деснах" },
                { icon: "🦷", title: "Травмы зубов", desc: "После ушибов и падений" },
                { icon: "📅", title: "Профилактика", desc: "Каждые 3-6 месяцев для осмотра" },
                { icon: "😰", title: "Плохие привычки", desc: "Сосание пальца, пустышки" },
                { icon: "🦷", title: "Смена зубов", desc: "Контроль процесса смены молочных на постоянные" },
                { icon: "😬", title: "Неровные зубы", desc: "Для консультации ортодонта" },
                { icon: "🦷", title: "Перед школой", desc: "Профилактический осмотр и лечение" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
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

      {/* Стоимость детской стоматологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость детской стоматологии в Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на детскую стоматологию в клинике «Альтамед-с» Одинцово учитывают особенности работы с детьми. Мы используем щадящие методы лечения и специальные материалы для молочных зубов. Детская стоматология в Одинцово включает лечение кариеса, пульпита, профилактику и удаление молочных зубов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечение кариеса у детей в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Лечение кариеса молочных зубов в стоматологии Одинцово важно для сохранения места для постоянных зубов. Мы используем специальные материалы и щадящие методы лечения, чтобы сделать процедуру комфортной для ребенка.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лечение кариеса молочного зуба от 3000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Восстановление менее 1/3 зуба от 3200₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Эстетическая реставрация от 6900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Профилактика в детской стоматологии Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Профилактические процедуры в стоматологии Одинцово помогают сохранить здоровье молочных зубов и предотвратить развитие кариеса. Герметизация фиссур и фторирование укрепляют эмаль и защищают зубы.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Герметизация фиссур от 1500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Фторирование от 1000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Профессиональная гигиена от 2500₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость детской стоматологии в Одинцово можно узнать после консультации. Мы создаем комфортную атмосферу для детей и используем специальные методы работы с маленькими пациентами. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности детской стоматологии */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Особенности детской стоматологии в Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Психологический подход в детской стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Работа с детьми в клинике «Альтамед-с» Одинцово требует особого подхода. Наши детские стоматологи используют методы адаптации и психологической подготовки маленьких пациентов. В стоматологии Одинцово мы создаем дружелюбную атмосферу, чтобы ребенок чувствовал себя комфортно.
                </p>
                <p className="text-gray-700">
                  Первый визит в детскую стоматологию Одинцово обычно проходит без лечения — это знакомство с врачом и клиникой. Такой подход помогает сформировать позитивное отношение к стоматологии и избежать страха перед лечением в будущем.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечение молочных зубов в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Одинцово требуют особого внимания, так как они влияют на формирование прикуса и развитие челюстей. Лечение кариеса молочных зубов в клинике «Альтамед-с» Одинцово позволяет сохранить зубы до их естественной смены.
                </p>
                <p className="text-gray-700">
                  В стоматологии Одинцово мы используем специальные материалы для молочных зубов, которые учитывают их особенности. Лечение пульпита в детской стоматологии Одинцово проводится щадящими методами с сохранением зуба.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профилактика в детской стоматологии Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Профилактика в детской стоматологии Одинцово — это основа здоровых зубов в будущем. Герметизация фиссур в клинике «Альтамед-с» Одинцово защищает жевательные зубы от кариеса. Фторирование укрепляет эмаль и снижает риск развития кариеса.
                </p>
                <p className="text-gray-700">
                  Регулярные профилактические осмотры в стоматологии Одинцово рекомендуются каждые 3-4 месяца. Профессиональная гигиена для детей в клинике Одинцово проводится мягкими методами с учетом особенностей детских зубов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Важность детской стоматологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важна детская стоматология в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Сохранение молочных зубов</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Одинцово играют важную роль: они сохраняют место для постоянных зубов, участвуют в формировании речи и жевании. Ранняя потеря молочных зубов в стоматологии Одинцово может привести к нарушению прикуса.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Предотвращение смещения соседних зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сохранение правильного прикуса
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Формирование здоровых привычек гигиены
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профилактика заболеваний</h3>
                <p className="text-gray-700 mb-4">
                  Регулярные визиты в детскую стоматологию Одинцово помогают выявить проблемы на ранней стадии. Профилактические процедуры в клинике «Альтамед-с» Одинцово значительно снижают риск развития кариеса и других заболеваний.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Раннее выявление кариеса
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Предотвращение осложнений
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обучение правильной гигиене полости рта
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-cyan-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Детская стоматология в клинике «Альтамед-с» Одинцово — это забота о здоровье зубов вашего ребенка с раннего возраста. Регулярные визиты в стоматологию Одинцово, правильная гигиена и своевременное лечение молочных зубов формируют основу для здоровых постоянных зубов. Опытные детские стоматологи в Одинцово создают комфортную атмосферу и помогают детям полюбить походы к врачу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

