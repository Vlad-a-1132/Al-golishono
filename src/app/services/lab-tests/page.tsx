"use client";

import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function LabTestsPage() {
  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <span className="text-gray-900">Лабораторные анализы</span>
          </nav>
        </div>
      </section>

      {/* Top row of quick links (as in example) */}
      <section className="pb-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Подготовка к сдаче анализов' },
              { title: 'Как получить результаты' },
              { title: 'Цены' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl p-4 text-white font-medium shadow-md"
                   style={{ background: idx % 2 === 0 ? '#2C83A7' : '#B07AA0' }}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-2">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#FF8A26] rounded-[20px] overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Калькулятор анализов</h2>
                  <p className="opacity-90 mb-4">Быстрый поиск анализов и цен</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">Расчет стоимости анализов</h3>
                    <p className="text-sm md:text-base opacity-95 mb-4 leading-relaxed">
                      Узнайте актуальные цены на любые анализы в клинике «Альтамед-с» Голицино. Калькулятор позволяет рассчитать общую стоимость нескольких анализов, создать индивидуальный список исследований и спланировать бюджет на диагностику.
                    </p>
                    <ul className="space-y-2 text-sm md:text-base opacity-95">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Актуальные цены на все анализы
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Расчет общей стоимости комплекса анализов
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Сохранение списка выбранных анализов
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/services/lab-tests/calculator" className="inline-flex items-center bg-white text-[#FF8A26] font-semibold rounded-full px-5 py-2 self-start">
                  Подробнее
                  <span className="ml-2">›</span>
                </Link>
              </div>
              <div className="relative min-h-[290px] md:min-h-[450px]">
                <img 
                  src="/images/yslugi/task_01k98699pvfvftj8ny4thaha6p_1762285458_img_0 (1).webp" 
                  alt="Калькулятор анализов" 
                  className="w-full h-full object-contain object-right"
                  style={{ minHeight: '290px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Описание возможностей калькулятора анализов */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Калькулятор анализов в Голицино — удобный инструмент для поиска и расчета стоимости
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Быстрый поиск анализов
                </h3>
                <p className="text-gray-700 mb-4">
                  Калькулятор анализов позволяет быстро найти нужный анализ по названию, категории или коду. 
                  Вы можете искать среди сотен видов лабораторных исследований, включая анализы крови, мочи, 
                  кала, гормональные исследования, онкомаркёры и многие другие.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Поиск по названию анализа
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Фильтрация по категориям
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Поиск по коду исследования
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Расчет стоимости анализов
                </h3>
                <p className="text-gray-700 mb-4">
                  Узнайте актуальные цены на любые анализы в клинике «Альтамед-с» Голицино. 
                  Калькулятор позволяет рассчитать общую стоимость нескольких анализов, 
                  создать индивидуальный список исследований и спланировать бюджет на диагностику.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Актуальные цены на все анализы
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Расчет общей стоимости комплекса анализов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сохранение списка выбранных анализов
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Чем полезен калькулятор анализов в Голицино?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Экономия времени</h4>
                  <p className="text-sm text-gray-600">
                    Не нужно звонить в клинику или искать информацию в разных источниках. 
                    Все данные об анализах и ценах доступны в одном месте 24/7.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Планирование бюджета</h4>
                  <p className="text-sm text-gray-600">
                    Заранее узнайте стоимость необходимых анализов и спланируйте расходы на диагностику. 
                    Это особенно важно при комплексном обследовании.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Удобство и доступность</h4>
                  <p className="text-sm text-gray-600">
                    Используйте калькулятор анализов в любое время с любого устройства. 
                    Сохраняйте списки анализов и возвращайтесь к ним позже.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Как использовать калькулятор анализов?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Поиск анализов</h4>
                    <p className="text-gray-600 text-sm">
                      Введите название анализа в поисковую строку или выберите категорию из списка. 
                      Калькулятор покажет все доступные анализы с ценами.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Добавление в список</h4>
                    <p className="text-gray-600 text-sm">
                      Выберите нужные анализы и добавьте их в свой список. Калькулятор автоматически 
                      рассчитает общую стоимость всех выбранных исследований.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Запись на сдачу</h4>
                    <p className="text-gray-600 text-sm">
                      После формирования списка анализов вы можете записаться на сдачу в клинику «Альтамед-с» 
                      в Голицино через онлайн-форму или по телефону.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="/services/lab-tests/calculator"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors shadow-lg"
              >
                Открыть калькулятор анализов
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Категории анализов (4 карточки) */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Онкология */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="text-gray-900 font-semibold mb-3">Онкология</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Гистология</li>
                <li>Онкомаркёры</li>
                <li>Цитология</li>
              </ul>
            </div>
            {/* Исследования крови */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="text-gray-900 font-semibold mb-3">Исследования крови</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Клинические исследования</li>
                <li>Биохимия</li>
                <li>Иммунология</li>
                <li>Гормоны</li>
              </ul>
            </div>
            {/* Исследования мочи */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="text-gray-900 font-semibold mb-3">Исследования мочи</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Биохимический анализ мочи</li>
                <li>Общий анализ мочи</li>
                <li>Гормоны</li>
              </ul>
            </div>
            {/* Аллергии */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="text-gray-900 font-semibold mb-3">Аллергии</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Аллергокомпоненты</li>
                <li>Индивидуальные аллергены</li>
                <li>Аллергия на лекарства</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Виды лабораторных анализов и исследований */}
      <section className="py-10 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Виды лабораторных анализов и исследований</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-gray-800 text-sm">
                <span>Общие исследования крови</span>
                <span>Гематологические исследования</span>
                <span>Биохимические исследования крови</span>
                <span>Аллергологические исследования</span>
                <span>Онкомаркёры</span>
                <span>Исследования кала</span>
                <span>Общеклинические исследования кала</span>
                <span>Аутоиммунные заболевания</span>
                <span>Панели аллергенов</span>
                <span>Исследование спермы</span>
                <span>Гистологические исследования</span>
                <span>Генетический анализ</span>
                <span>Гормональные исследования крови</span>
                <span>Исследования крови на инфекции</span>
                <span>Исследования мочи</span>
                <span>Цитологические исследования</span>
                <span>Иммунологические исследования крови</span>
                <span>Исследования инфекционных заболеваний</span>
              </div>
            </div>
            <div className="relative">
              <img src="/images/yslugi/analiz women.webp" alt="Виды лабораторных анализов" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
