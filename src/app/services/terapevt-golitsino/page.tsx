"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

const therapyServices = [
  { code: "B01.047.001", name: "Прием (осмотр, консультация) врача-терапевта", price: 2530 },
  { code: "B01.047.001.023", name: "Прием (осмотр, консультация) врача-терапевта первичный с оформлением справки по форме: для получения путевки в санаторий (форма 070/у)", price: 2200 },
  { code: "B01.047.001.024", name: "Прием (осмотр, консультация) врача-терапевта первичный с оформлением справки по форме: санаторно-курортной карты (форма 072/у)", price: 2530 },
  { code: "B01.047.001.028", name: "Прием (осмотр, консультация) врача-терапевта первичный с оформлением справки по форме: о временной нетрудоспособности студента (форма 095/у)", price: 2530 },
  { code: "B04.047.002", name: "Диспансерный прием (осмотр, консультация) врача-терапевта", price: 2090 },
];

const reasonsForConsultation = [
  "Общая слабость, недомогание, быстрая утомляемость",
  "Кашель, хрипы в легких, боли в горле",
  "Выделения из носа, ушной раковины, кровохарканье",
  "Онемение или покалывание в конечностях",
  "Признаки простуды, гриппа",
  "Затрудненное дыхание, одышка",
  "Боли в желудке, изжога, тошнота, нарушение стула",
  "Высокая температура, лихорадка",
  "Боли за грудиной, в области сердца",
  "Существенные изменения артериального давления",
];

const faqItems = [
  { question: "Какие заболевания лечит врач-терапевт", answer: "Терапевт занимается диагностикой, лечением и профилактикой широкого круга заболеваний внутренних органов: сердечно-сосудистые заболевания, болезни органов дыхания, желудочно-кишечного тракта, эндокринные нарушения, инфекционные заболевания и др." },
  { question: "Диагностика в терапии", answer: "В терапии используются современные методы диагностики: лабораторные анализы, инструментальные исследования, функциональная диагностика, УЗИ, рентгенологические исследования и другие методы." },
  { question: "Методы лечения терапевтических заболеваний", answer: "Лечение включает медикаментозную терапию, физиотерапию, диетотерапию, лечебную физкультуру, санаторно-курортное лечение и другие консервативные методы." },
];

export default function TerapevtGolitsinoPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Главная
                </Link>
              </li>
              <li><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg><Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Услуги</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Терапевт Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Терапевт в Голицино — приём и консультация в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Консультация врача-терапевта в Голицино: диагностика, лечение, оформление справок
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img src="/images/yslugi/terapiay 1.webp" alt="Терапевт Голицино" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Терапевт в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img src="/images/yslugi/terapiay 1.webp" alt="Терапевт Голицино" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Терапевт в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-терапевта, консультации, оформление справок (070/у, 072/у, 095/у) в Альтамед Голицино</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">Консультация</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Почему Альтамед Голицино */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицино»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Следование международным стандартам медицинской помощи",
              "Полная диагностика и индивидуальный подход к лечению",
              "Современное оборудование и собственная диагностическая лаборатория",
              "Качественный сервис и доступные цены на медицинские услуги",
            ].map((text, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <img src="/images/yslugi/star 1.webp" alt="" className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{i + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что мы лечим */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Что мы лечим</h2>
          <p className="text-gray-600 mb-6">
            Терапевт — врач широкого профиля: диагностика, лечение и профилактика заболеваний внутренних органов. Консультация терапевта нужна перед операцией, при беременности, при записи в спортсекции и бассейны, при хронических заболеваниях.
          </p>
          <p className="text-gray-600">
            Запись к терапевту в «Альтамед Голицино» — это приём у опытных специалистов, комплексная диагностика и оформление справок (070/у, 072/у, 095/у и другие) в Голицино.
          </p>
        </div>
      </section>

      {/* Услуги терапевта */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги терапевта в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-терапевта, консультации и оформление справок в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-терапевта</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {therapyServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString('ru-RU')} ₽</div>
                    </div>
                    <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0 text-center">
                      Записаться
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием (форма в баннере) */}
      <section className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="relative overflow-hidden rounded-[30px]" style={{ background: 'linear-gradient(135deg, #4A9B8E 0%, #3A8D7F 25%, #2E7A6D 50%, #25685C 75%, #1A5247 100%)', backgroundImage: "url('/images/dentisrty/фон.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              <div className="w-full lg:w-2/3 p-6 lg:p-8 z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Записаться на приём к терапевту</h2>
                <p className="text-white/90 mb-6 text-sm md:text-base">поля, отмеченные * необходимы к заполнению</p>
                <form className="mb-4 max-w-2xl">
                  <div className="hidden lg:flex gap-4 mb-4 items-end">
                    <div className="flex-1"><label className="block text-white text-sm font-medium mb-2">Имя</label><input type="text" placeholder="Имя" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" /></div>
                    <div className="flex-1"><label className="block text-white text-sm font-medium mb-2">Телефон *</label><input type="tel" placeholder="+7 (___) ____" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14" /></div>
                    <button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 h-14 flex-shrink-0">Заказать звонок</button>
                  </div>
                  <div className="lg:hidden space-y-4 mb-6">
                    <div><label className="block text-white text-sm font-medium mb-2">Имя</label><input type="text" placeholder="Имя" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 h-14" /></div>
                    <div><label className="block text-white text-sm font-medium mb-2">Телефон *</label><input type="tel" placeholder="+7 (___) ____" className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 h-14" /></div>
                    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium h-14">Заказать звонок</button>
                  </div>
                  <p className="text-white/80 text-xs italic mb-2">Нажимая на кнопку, вы даёте согласие на обработку своих персональных данных</p>
                </form>
                <p className="text-white/85 text-sm">Запись через сайт предварительная. Сотрудник свяжется с вами для подтверждения записи к терапевту.</p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/3 z-0">
                <NextImage src="/images/yslugi/NEW DOC2.webp" alt="Врач терапевт Голицино" fill className="object-contain object-right-bottom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Поводы обращения */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Поводы обращения к врачу-терапевту</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsForConsultation.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Выдача справок */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden">
                <img src="/images/yslugi/terapiay 1.webp" alt="Справки терапевта Голицино" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Справки и медицинские документы</h2>
              <p className="text-gray-600 mb-4">
                В «Альтамед Голицино» терапевт оформляет справки для трудоустройства, учёбы, спортивных секций, бассейна, санатория. Мы выдаём справки по формам 070/у (для путевки в санаторий), 072/у (санаторно-курортная карта), 095/у (временная нетрудоспособность студента) и другие — после осмотра и при необходимости обследований.
              </p>
              <p className="text-gray-600">Документы оформляются в соответствии с законодательством РФ, заверяются печатями и штампами клиники.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button onClick={() => toggleExpanded(index)} className="flex items-center justify-between w-full text-left py-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <div className={`w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transition-transform duration-300 ${expandedItems.includes(index) ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  </div>
                </button>
                {expandedItems.includes(index) && <div className="pb-4"><p className="text-gray-600">{item.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
