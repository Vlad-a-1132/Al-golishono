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
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога детского первичный сзаполнением документации и составление плана лечения, 1 ед.", price: 1680 },
        { code: "", name: "Профилактический прием (осмотр, консультация) врача-стоматолога детского с оформлением справки в ДДУ, школу и т.п., 1 ед.", price: 790 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога детского первичный. Консультация по подготовке трудно-контактного ребенка к лечению, 1 ед.", price: 2420 }
      ]
    },
    {
      subtitle: "Лечение неосложненного кариеса",
      services: [
        { code: "", name: "Наложение временной пломбы, 1 ед.", price: 580 },
        { code: "", name: "Восстановление молочного зуба пломбой светового отверждения /менее 1/3 временного зуба/ 1 ед.", price: 3360 },
        { code: "", name: "Восстановление молочного зуба пломбой светового отверждения, /от 1/3 до 1/2 временного зуба/1 ед.", price: 3990 },
        { code: "", name: "Восстановление пломбой светового отверждения  более 1/2зуба/ед.", price: 4940 },
        { code: "", name: "Восстановление зуба пломбой, эстетическая реставрация, 1 ед.", price: 7250 }
      ]
    },
    {
      subtitle: "Лечение осложнений кариеса",
      services: [
        { code: "", name: "Наложение девитализирующей пасты, 1 ед.", price: 1680 },
        { code: "", name: "Инструментальная и медикаментозная обработка корневого канала, 1 посещение", price: 580 },
        { code: "", name: "Пломбирование корневого канала зуба, 1 ед.", price: 1370 },
        { code: "", name: "Пульпотомия /АМПУТАЦИЯ КОРОНКОВОЙ ПУЛЬПЫ", price: 1680 },
        { code: "", name: "Восстановление зуба пломбой. Восстановление коронковой части молочного зуба с использованием композитного материала при лечении осложненного кариеса, 1 ед.", price: 4310 },
        { code: "", name: "Восстановление зуба пломбой. Восстановление молочного зуба металлической коронкой, 1 ед.", price: 4520 }
      ]
    },
    {
      subtitle: "Профилактика заболеваний полости рта",
      services: [
        { code: "", name: "Местное применение реминерализующих препаратов в области всех зубов", price: 2630 },
        { code: "", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в молочном прикусе (мягкие светлые отложения), 1 ед.", price: 2730 },
        { code: "", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в сменном прикусе (мягкие светлые отложения), 1 ед.", price: 3470 },
        { code: "", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в молочном прикусе (плотные темные отложения), 1 ед.", price: 4830 },
        { code: "", name: "Профессиональная гигиена полости рта и зубов. Профессиональная чистка зубов в сменном прикусе (плотные темные отложения), 1 ед.", price: 6200 },
        { code: "", name: "Глубокое фторирование эмали зуба. Применение эмалевого ликвида, 1 ед.", price: 370 },
        { code: "", name: "Запечатывание фиссуры зуба герметиком. Герметизация фиссур, 1 ед.", price: 2420 },
        { code: "", name: "Профессиональная гигиена полости рта и зубов, 1 зуб", price: 270 },
        { code: "", name: "Глубокое фторирование эмали зуба. Покрытие всех зубов фторлаком, 1 ед.", price: 2000 },
        { code: "", name: "Глубокое фторирование эмали зуба. Покрытие всех зубов фторгелем, 1 ед.", price: 1050 },
        { code: "", name: "Запечатывание фиссуры зуба герметиком. Герметизация фиссур неинвазивная, 1 ед.", price: 1680 },
        { code: "", name: "Гигиена полости рта и зубов, 1 ед.", price: 480 }
      ]
    },
    {
      subtitle: "Удаление зубов, прочие операции и услуги",
      services: [
        { code: "", name: "Удаление временного зуба с физиологической подвижностью, 1 ед.", price: 1370 },
        { code: "", name: "Удаление временного зуба, 1 ед.", price: 2730 },
        { code: "", name: "Удаление временного зуба сложное, 1 ед.", price: 3570 }
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

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Детская стоматология в клинике «Альтамед Голицыно»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Лечение молочных и постоянных зубов у детей с безболезненным подходом в Альтамед Голицыно
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp" 
                alt="Детская стоматология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Особенности детской стоматологии в Альтамед Голицыно
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
            Услуги детской стоматологии в Альтамед Голицыно
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

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важно лечить молочные зубы в Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Сохранить место для постоянных зубов",
                  text: "Молочные зубы удерживают место для постоянных. Преждевременное удаление может привести к нарушению прикуса. В клинике «Альтамед Голицыно» Альтамед Голицыно мы стараемся сохранить молочные зубы до естественной смены.",
                  icon: "🦷"
                },
                {
                  title: "Предотвратить осложнения",
                  text: "Кариес молочных зубов может перерасти в пульпит и периодонтит, что негативно влияет на зачатки постоянных зубов. Своевременное лечение в стоматологии Альтамед Голицыно защищает постоянные зубы.",
                  icon: "🛡️"
                },
                {
                  title: "Заложить основы здоровья",
                  text: "Раннее обучение гигиене и регулярные визиты к детскому стоматологу в Альтамед Голицыно формируют правильные привычки ухода за зубами на всю жизнь.",
                  icon: "⭐"
                },
                {
                  title: "Избежать страха перед лечением",
                  text: "Доброжелательный подход и адаптация ребенка в «Альтамед Голицыно» Альтамед Голицыно помогают избежать развития дентофобии и делают лечение комфортным для маленьких пациентов.",
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
              Когда нужно посетить детского стоматолога в Альтамед Голицыно
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
              Стоимость детской стоматологии в Альтамед Голицыно
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на детскую стоматологию в клинике «Альтамед Голицыно» Альтамед Голицыно учитывают особенности работы с детьми. Мы используем щадящие методы лечения и специальные материалы для молочных зубов. Детская стоматология в Альтамед Голицыно включает лечение кариеса, пульпита, профилактику и удаление молочных зубов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Лечение кариеса у детей в Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Лечение кариеса молочных зубов в стоматологии Альтамед Голицыно важно для сохранения места для постоянных зубов. Мы используем специальные материалы и щадящие методы лечения, чтобы сделать процедуру комфортной для ребенка.
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Профилактика в детской стоматологии Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Профилактические процедуры в стоматологии Альтамед Голицыно помогают сохранить здоровье молочных зубов и предотвратить развитие кариеса. Герметизация фиссур и фторирование укрепляют эмаль и защищают зубы.
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
                Точную стоимость детской стоматологии в Альтамед Голицыно можно узнать после консультации. Мы создаем комфортную атмосферу для детей и используем специальные методы работы с маленькими пациентами. Запишитесь на прием в «Альтамед Голицыно» Альтамед Голицыно для получения детальной информации.
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
              Особенности детской стоматологии в Альтамед Голицыно
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Психологический подход в детской стоматологии Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Работа с детьми в клинике «Альтамед Голицыно» Альтамед Голицыно требует особого подхода. Наши детские стоматологи используют методы адаптации и психологической подготовки маленьких пациентов. В стоматологии Альтамед Голицыно мы создаем дружелюбную атмосферу, чтобы ребенок чувствовал себя комфортно.
                </p>
                <p className="text-gray-700">
                  Первый визит в детскую стоматологию Альтамед Голицыно обычно проходит без лечения — это знакомство с врачом и клиникой. Такой подход помогает сформировать позитивное отношение к стоматологии и избежать страха перед лечением в будущем.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Лечение молочных зубов в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Альтамед Голицыно требуют особого внимания, так как они влияют на формирование прикуса и развитие челюстей. Лечение кариеса молочных зубов в клинике «Альтамед Голицыно» Альтамед Голицыно позволяет сохранить зубы до их естественной смены.
                </p>
                <p className="text-gray-700">
                  В стоматологии Альтамед Голицыно мы используем специальные материалы для молочных зубов, которые учитывают их особенности. Лечение пульпита в детской стоматологии Альтамед Голицыно проводится щадящими методами с сохранением зуба.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профилактика в детской стоматологии Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Профилактика в детской стоматологии Альтамед Голицыно — это основа здоровых зубов в будущем. Герметизация фиссур в клинике «Альтамед Голицыно» Альтамед Голицыно защищает жевательные зубы от кариеса. Фторирование укрепляет эмаль и снижает риск развития кариеса.
                </p>
                <p className="text-gray-700">
                  Регулярные профилактические осмотры в стоматологии Альтамед Голицыно рекомендуются каждые 3-4 месяца. Профессиональная гигиена для детей в клинике Альтамед Голицыно проводится мягкими методами с учетом особенностей детских зубов.
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
              Почему важна детская стоматология в Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Сохранение молочных зубов</h3>
                <p className="text-gray-700 mb-4">
                  Молочные зубы в детской стоматологии Альтамед Голицыно играют важную роль: они сохраняют место для постоянных зубов, участвуют в формировании речи и жевании. Ранняя потеря молочных зубов в стоматологии Альтамед Голицыно может привести к нарушению прикуса.
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
                  Регулярные визиты в детскую стоматологию Альтамед Голицыно помогают выявить проблемы на ранней стадии. Профилактические процедуры в клинике «Альтамед Голицыно» Альтамед Голицыно значительно снижают риск развития кариеса и других заболеваний.
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
                Детская стоматология в клинике «Альтамед Голицыно» Альтамед Голицыно — это забота о здоровье зубов вашего ребенка с раннего возраста. Регулярные визиты в стоматологию Альтамед Голицыно, правильная гигиена и своевременное лечение молочных зубов формируют основу для здоровых постоянных зубов. Опытные детские стоматологи в Альтамед Голицыно создают комфортную атмосферу и помогают детям полюбить походы к врачу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Детский стоматолог в Альтамед Голицыно: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицыно» предлагает услуги детской стоматологии в Альтамед Голицыно — лечение молочных и постоянных
                зубов, профилактику кариеса, безболезненные методы лечения. Мы применяем современные технологии,
                качественные материалы и обеспечиваем комфортную атмосферу для детей.
              </p>
              <p>
                Врач-стоматолог детский проводит лечение кариеса, пульпита, удаление зубов, профессиональную гигиену
                и профилактические процедуры для детей. У нас можно пройти лечение молочных зубов, герметизацию фиссур,
                фторирование и другие процедуры детской стоматологии.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость детской стоматологии в Альтамед Голицыно
                фиксируется заранее, а родители получают подробную информацию о процедурах.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицыно»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Безболезненное лечение с использованием современных методов обезболивания.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Комфортную атмосферу для детей и индивидуальный подход к каждому ребенку.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Опытных детских стоматологов, специализирующихся на лечении детей.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Профилактику кариеса с помощью герметизации фиссур и фторирования.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о детской стоматологии в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицыно</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Родители отмечают безболезненное лечение, комфортную атмосферу
                и внимательное отношение детских стоматологов к детям.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После лечения молочных зубов дети чувствуют себя комфортно, что соответствует
                ожиданиям родителей и обеспечивает здоровье постоянных зубов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная атмосфера</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После визита в детскую стоматологию в Голицыно дети не боятся врачей; стоматологи дают
                подробные рекомендации по уходу за зубами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о детской стоматологии в Альтамед Голицыно
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  С какого возраста нужно водить ребенка к стоматологу?
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
                Первый визит к детскому стоматологу рекомендуется в возрасте 1 года, когда прорезались первые зубы.
                Регулярные осмотры каждые 3-4 месяца помогают выявить проблемы на ранней стадии и приучить ребенка
                к визитам к стоматологу.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Нужно ли лечить молочные зубы?
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
                Да, молочные зубы обязательно нужно лечить. Они сохраняют место для постоянных зубов, участвуют
                в формировании речи и жевании. Преждевременная потеря молочных зубов может привести к нарушению прикуса.
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
                Детский стоматолог в Альтамед Голицыно — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицыно», чтобы узнать стоимость детской стоматологии,
                подобрать подходящие процедуры и получить индивидуальный план лечения для вашего ребенка.
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
                name: "Клиника «Альтамед Голицыно» — детская стоматология в Альтамед Голицыно",
                url: "https://altamed-golitsino.ru/services/dentistry/pediatric-dentistry",
                image: "https://altamed-golitsino.ru/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "320"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицыно",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Детская стоматология",
                areaServed: "Альтамед Голицыно и Голицыно",
                description:
                  "Детская стоматология в Альтамед Голицыно: лечение молочных и постоянных зубов, профилактика кариеса, безболезненные методы. Опытные детские стоматологи в клинике «Альтамед Голицыно».",
                sameAs: [
                  "https://altamed-golitsino.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

