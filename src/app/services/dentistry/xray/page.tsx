'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function XrayPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг рентгенографии из fullServicesData
  const services = [
    { code: "", name: "Прицельный снимок зуба", price: 500 },
    { code: "", name: "Ортопантомограмма", price: 1500 },
    { code: "А06.07.012", name: "Радиовизиография, 1 ед.", price: 400 },
    { code: "А06.07.012.500", name: "Радиовизиография. Снимок на визиографе с распечаткой на принтере и выдачей на руки, 1 ед.", price: 510 },
    { code: "", name: "Компьютерная томография (КТ) одной челюсти", price: 3000 },
    { code: "A06.07.013.001", name: "КТ одной челюсти", price: 3500 },
    { code: "", name: "Компьютерная томография (КТ) двух челюстей", price: 5000 },
    { code: "A06.07.013.002", name: "КТ двух челюстей", price: 4400 },
    { code: "A06.07.013.003", name: "КТ двух челюстей для детей до 12 лет", price: 3400 },
    { code: "A06.07.013.004", name: "КТ двух челюстей и ВНЧС", price: 4600 },
    { code: "A06.07.013.005", name: "КТ двух-трех рядом стоящих зубов", price: 1900 },
    { code: "A06.07.013.006", name: "ОПТГ", price: 1600 },
    { code: "А06.07.001", name: "Панорамная рентгенография челюсти, 1 ед.", price: 720 },
    { code: "А06.07.001.500", name: "Панорамная рентгенография челюсти. Панорамный снимок с распечаткой и выдачей на руки, 1 ед.", price: 780 },
    { code: "А06.07.001.501", name: "Панорамная рентгенография челюсти. Панорамный снимок с диском, 1 ед.", price: 880 },
    { code: "А06.07.006", name: "Телерентгенография челюстей, 1  ед.", price: 5050 },
    { code: "A06.07.013.007", name: "ТРГ черепа в одной проекции", price: 1600 },
    { code: "A06.07.013.008", name: "КТ двух сегментов (I и IV или II и III)", price: 3400 },
    { code: "A06.07.013.009", name: "КТ одного сегмента", price: 3000 },
    { code: "A06.07.013.010", name: "КТ ВНЧС в одном положении (один сустав)", price: 1000 },
    { code: "A06.07.013.011", name: "КТ ВНЧС двух суставов в двух положениях", price: 6000 },
    { code: "А06.07.013.500", name: "Компьютерная томография челюстно-лицевой области. Цифровая диагностическая 3D-модель (без слепков), 1ед.", price: 5050 },
    { code: "А06.07.013.501", name: "Компьютерная томография челюстно-лицевой области. Виртуальный SetUp (перемещение зубов на цифровой модели - без слепков), 1 ед.", price: 26570 }
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
            <span className="text-gray-900">Рентгенография</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Рентгенография в стоматологии Одинцово — «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Цифровая рентгенография зубов и челюстей в Одинцово. Прицельные снимки, панорамные снимки, КТ — современная диагностика для качественного лечения.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/Rentgenografiya.webp"
                  alt="Рентгенография"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Рентгенография в Одинцово</div>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на рентген
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/yslugi/Rentgenografiya.webp"
                alt="Рентгенография"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Рентгенография в стоматологии Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современная цифровая рентген-диагностика</p>
                <Link href="/appointments" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на рентген
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Виды рентгенографии в стоматологии Одинцово
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Прицельный снимок (радиовизиография)</h3>
                <p className="text-gray-600 mb-4">
                  Самый распространенный вид рентгенографии в стоматологии Одинцово. Позволяет получить изображение одного или нескольких рядом стоящих зубов. Используется для диагностики кариеса, оценки состояния корневых каналов, контроля качества лечения. В клинике «Альтамед-с» Одинцово мы используем современные цифровые визиографы с минимальной лучевой нагрузкой.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ортопантомограмма (ОПТГ, панорамный снимок)</h3>
                <p className="text-gray-600 mb-4">
                  Обзорный снимок всех зубов верхней и нижней челюсти. Необходим для общего осмотра, планирования лечения, выявления скрытых патологий, ретинированных зубов. Панорамный снимок в Одинцово выполняется за несколько секунд и дает полную картину состояния зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Компьютерная томография (КТ)</h3>
                <p className="text-gray-600 mb-4">
                  Трехмерная диагностика, позволяющая получить объемное изображение зубов и челюстей. Незаменима для планирования имплантации, ортодонтического лечения, диагностики сложных случаев. КТ в стоматологии Одинцово — это точность и уверенность в лечении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Прайс-лист рентгенографии в Одинцово
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
              Преимущества цифровой рентгенографии в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "Мгновенный результат", desc: "Снимок готов сразу" },
                { icon: "🛡️", title: "Минимальная лучевая нагрузка", desc: "Безопасно для здоровья" },
                { icon: "📊", title: "Высокое качество", desc: "Четкие изображения" },
                { icon: "💾", title: "Электронное хранение", desc: "Все снимки в базе" }
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость и виды рентгенографии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость рентгенографии в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Рентгенография в клинике «Альтамед-с» Одинцово включает различные виды исследований: от прицельных снимков до панорамной рентгенографии и КТ. Цены зависят от вида исследования и объема работы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Базовые рентген-исследования в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Базовые виды рентгенографии в стоматологии Одинцово включают прицельные снимки отдельных зубов и панорамную рентгенографию всех зубов. Эти исследования необходимы для первичной диагностики и планирования лечения.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Прицельный снимок зуба от 500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ортопантомограмма от 1500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Панорамный снимок от 720₽
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Компьютерная томография в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    КТ в стоматологии Одинцово — это наиболее информативный метод диагностики, дающий трехмерное изображение. Используется для сложных случаев: имплантация, ортодонтия, хирургия.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ одной челюсти от 3500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      КТ двух челюстей от 4400₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ТРГ черепа от 1600₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость рентгенографии в стоматологии Одинцово можно узнать после консультации. Мы предлагаем комплексные программы диагностики по доступным ценам. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Важность рентген-диагностики */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Важность рентген-диагностики в современной стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Точная диагностика скрытых патологий</h3>
                <p className="text-gray-700 mb-4">
                  Рентгенография в стоматологии Одинцово позволяет выявить патологии, которые невозможно увидеть при визуальном осмотре: кариес между зубами, патологии корневых каналов, кисты, гранулемы. В клинике «Альтамед-с» Одинцово рентген-диагностика является обязательной частью комплексного обследования.
                </p>
                <p className="text-gray-700">
                  Современное цифровое оборудование в стоматологии Одинцово обеспечивает высокое качество изображений и минимальную лучевую нагрузку, что делает диагностику безопасной для пациентов всех возрастов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Планирование и контроль лечения</h3>
                <p className="text-gray-700 mb-4">
                  Рентген-снимки в клинике «Альтамед-с» Одинцово необходимы не только для диагностики, но и для планирования лечения и контроля его результатов. Врачи используют снимки для оценки качества пломбирования каналов, установки имплантов, результатов ортодонтического лечения.
                </p>
                <p className="text-gray-700">
                  Регулярная рентген-диагностика в стоматологии Одинцово позволяет контролировать состояние зубов и своевременно выявлять проблемы, что обеспечивает долгосрочный успех лечения.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-teal-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Рентгенография в клинике «Альтамед-с» Одинцово — это незаменимый инструмент современной стоматологии. Без рентген-диагностики невозможно провести качественное лечение: врач видит только поверхность зубов, а рентген показывает внутреннюю структуру и скрытые патологии. Опытные рентгенологи стоматологии Одинцово проводят все виды исследований с высокой точностью, обеспечивая врачам полную информацию для принятия правильных решений.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

