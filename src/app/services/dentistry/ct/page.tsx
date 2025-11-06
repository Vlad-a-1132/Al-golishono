'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function CTScanPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг компьютерной томографии из fullServicesData
  const services = [
    { code: "A06.07.013.001", name: "КТ одной челюсти", price: 3500 },
    { code: "A06.07.013.002", name: "КТ двух челюстей", price: 4400 },
    { code: "A06.07.013.003", name: "КТ двух челюстей для детей до 12 лет", price: 3400 },
    { code: "A06.07.013.004", name: "КТ двух челюстей и ВНЧС", price: 4600 },
    { code: "A06.07.013.005", name: "КТ двух-трех рядом стоящих зубов", price: 1900 },
    { code: "A06.07.013.006", name: "ОПТГ", price: 1600 },
    { code: "A06.07.013.007", name: "ТРГ черепа в одной проекции", price: 1600 },
    { code: "A06.07.013.008", name: "КТ двух сегментов (I и IV или II и III)", price: 3400 },
    { code: "A06.07.013.009", name: "КТ одного сегмента", price: 3000 },
    { code: "A06.07.013.010", name: "КТ ВНЧС в одном положении (один сустав)", price: 1000 },
    { code: "A06.07.013.011", name: "КТ ВНЧС двух суставов в двух положениях", price: 6000 }
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
            <span className="text-gray-900">Компьютерная томография</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Компьютерная томография (КТ) в стоматологии Одинцово — «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Трехмерная диагностика зубов и челюстей в Одинцово. Современная КТ-диагностика для точного планирования имплантации, ортодонтии и хирургических операций.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Computed tomography.webp"
                alt="Компьютерная томография челюстно-лицевой области"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">КТ-диагностика в Одинцово</div>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на КТ
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/services/Computed tomography.webp"
                alt="Компьютерная томография челюстно-лицевой области"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Компьютерная томография в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">3D-диагностика для точного планирования лечения</p>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на КТ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое компьютерная томография в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Трехмерная визуализация</h3>
                <p className="text-gray-600 mb-4">
                  Компьютерная томография (КТ) — это современный метод диагностики, который позволяет получить трехмерное изображение зубов и челюстей. В отличие от обычного рентгена, КТ дает возможность увидеть структуры в трех измерениях, что крайне важно для точного планирования лечения.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Трехмерное изображение челюстей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оценка плотности костной ткани
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Определение точного положения структур
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Когда необходима КТ</h3>
                <p className="text-gray-600 mb-4">
                  КТ-диагностика незаменима при планировании имплантации, ортодонтического лечения, хирургических операций. В клинике «Альтамед-с» Одинцово мы используем КТ для максимально точного планирования лечения.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Планирование имплантации
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ортодонтическое лечение
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Хирургические операции
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
            Прайс-лист КТ-диагностики в Одинцово
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {services.map((service, serviceIndex) => (
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
            <div className="mt-8 text-center">
              <Link href="/appointments" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
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
              Преимущества КТ в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Точное планирование имплантации",
                  text: "КТ позволяет точно определить место установки импланта, оценить качество и объем костной ткани, спланировать костную пластику при необходимости. В клинике «Альтамед-с» Одинцово мы используем КТ для 100% успешной имплантации.",
                  icon: "💎"
                },
                {
                  title: "Планирование ортодонтического лечения",
                  text: "Трехмерное изображение помогает ортодонту точно определить положение зубов, планировать их перемещение, предвидеть результаты лечения. В стоматологии Одинцово КТ незаменима для сложных случаев.",
                  icon: "😬"
                },
                {
                  title: "Диагностика сложных случаев",
                  text: "КТ выявляет ретинированные зубы, кисты, новообразования, патологии ВНЧС, которые невозможно диагностировать с помощью обычного рентгена. В «Альтамед-с» Одинцово мы используем КТ для диагностики сложных патологий.",
                  icon: "🔍"
                },
                {
                  title: "Виртуальное планирование",
                  text: "На основе КТ-данных можно создать виртуальную 3D-модель и спланировать лечение виртуально, без необходимости снятия слепков. Это особенно удобно для протезирования и имплантации в Одинцово.",
                  icon: "💻"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как проводится КТ в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Подготовка", desc: "Снимаются металлические предметы" },
                { step: "2", title: "Сканирование", desc: "Быстрое и безболезненное сканирование" },
                { step: "3", title: "Обработка", desc: "Создание 3D-модели" },
                { step: "4", title: "Результат", desc: "Анализ врачом и планирование" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость КТ-диагностики */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость компьютерной томографии в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на КТ-диагностику в клинике «Альтамед-с» Одинцово зависят от объема исследования: одна или две челюсти, необходимость изучения ВНЧС. Мы используем современное оборудование с низкой лучевой нагрузкой.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">КТ одной челюсти в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Компьютерная томография одной челюсти в стоматологии Одинцово позволяет получить детальное трехмерное изображение верхней или нижней челюсти. Необходима для планирования лечения отдельных сегментов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одной челюсти от 3500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одного сегмента от 3000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух-трех зубов от 1900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">КТ двух челюстей в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Полное исследование обеих челюстей в стоматологии Одинцово необходимо для комплексного планирования лечения, имплантации и ортодонтической коррекции. Дает полную картину состояния всего зубочелюстного аппарата.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей от 4400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей для детей от 3400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей и ВНЧС от 4600₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость КТ-диагностики в стоматологии Одинцово можно узнать после консультации. Мы предлагаем комплексные программы диагностики по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества КТ перед обычным рентгеном */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Преимущества КТ перед обычной рентгенографией в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Трехмерное изображение</h3>
                <p className="text-gray-700 mb-4">
                  В отличие от обычного рентгена, который дает плоское двухмерное изображение, КТ в стоматологии Одинцово создает объемную 3D-модель. Это позволяет врачу видеть зубы и челюсти со всех сторон, оценить толщину костной ткани и точно спланировать лечение.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полная картина анатомии челюстей
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Точное измерение костной ткани
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обнаружение скрытых патологий
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Высокая точность диагностики</h3>
                <p className="text-gray-700 mb-4">
                  Компьютерная томография в клинике «Альтамед-с» Одинцово позволяет выявить патологии, которые невозможно увидеть на обычном рентгене: скрытые каналы, дополнительные корни, кисты небольших размеров, особенности строения челюстей.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Выявление ретинированных зубов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Диагностика патологий ВНЧС
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Обнаружение новообразований
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-indigo-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Компьютерная томография в стоматологии Одинцово — это современный золотой стандарт диагностики. В клинике «Альтамед-с» Одинцово мы используем КТ для точного планирования имплантации, ортодонтического лечения и диагностики сложных случаев. Трехмерное изображение позволяет врачам стоматологии Одинцово видеть полную картину и принимать оптимальные решения для достижения наилучших результатов лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Показания для КТ */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Показания для компьютерной томографии в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Планирование имплантации", desc: "Оценка костной ткани, выбор места для импланта, планирование костной пластики" },
                { icon: "😬", title: "Ортодонтическое лечение", desc: "Планирование исправления прикуса, оценка положения зубов и роста челюстей" },
                { icon: "🔍", title: "Ретинированные зубы", desc: "Выявление и оценка положения непрорезавшихся зубов" },
                { icon: "⚕️", title: "Кисты и новообразования", desc: "Диагностика кист, гранулем и других патологических образований" },
                { icon: "🦴", title: "Заболевания ВНЧС", desc: "Диагностика патологий височно-нижнечелюстного сустава" },
                { icon: "🔧", title: "Травмы челюстей", desc: "Оценка переломов и других повреждений после травм" },
                { icon: "💎", title: "Виртуальное протезирование", desc: "Создание 3D-моделей для планирования протезирования" },
                { icon: "📋", title: "Контроль лечения", desc: "Оценка результатов имплантации и других хирургических вмешательств" },
                { icon: "🦷", title: "Сложные эндодонтические случаи", desc: "Диагностика дополнительных каналов и особенностей строения" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-indigo-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Компьютерная томография в клинике «Альтамед-с» Одинцово назначается врачом по строгим медицинским показаниям. Наши специалисты стоматологии Одинцово проводят КТ только когда это действительно необходимо для точной диагностики и качественного планирования лечения. Современное оборудование обеспечивает минимальную лучевую нагрузку при максимальной информативности результатов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс проведения КТ */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Как проводится компьютерная томография в стоматологии Одинцово
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Подготовка к КТ</h3>
                <p className="text-gray-700 mb-4">
                  Специальная подготовка к компьютерной томографии в клинике «Альтамед-с» Одинцово не требуется. Перед процедурой необходимо снять металлические предметы (серьги, пирсинг, съемные протезы, брекеты). Процедура занимает от 20 секунд до нескольких минут в зависимости от объема исследования.
                </p>
                <p className="text-gray-700">
                  В стоматологии Одинцово мы используем современные КТ-аппараты с открытой конструкцией, что делает процедуру комфортной даже для пациентов с клаустрофобией.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Процесс сканирования</h3>
                <p className="text-gray-700 mb-4">
                  Во время КТ в стоматологии Одинцово пациент находится в комфортном положении, аппарат делает серию снимков вокруг головы. Процедура полностью безболезненна и не требует обезболивания. Во время сканирования необходимо сохранять неподвижность для получения качественных снимков.
                </p>
                <p className="text-gray-700">
                  Современное оборудование в клинике «Альтамед-с» Одинцово обеспечивает высокую скорость сканирования, что особенно важно для маленьких детей и пациентов с повышенной тревожностью.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Результаты КТ</h3>
                <p className="text-gray-700 mb-4">
                  После сканирования в стоматологии Одинцово специалисты обрабатывают данные и создают трехмерную модель. Результаты могут быть предоставлены на диске, распечатаны или отправлены на электронную почту. Врач анализирует полученные данные и использует их для планирования лечения.
                </p>
                <p className="text-gray-700">
                  КТ-данные в клинике «Альтамед-с» Одинцово хранятся в электронном виде и могут быть использованы для дальнейшего лечения и консультаций. Трехмерные модели позволяют точно спланировать имплантацию, ортодонтическое лечение и другие процедуры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

