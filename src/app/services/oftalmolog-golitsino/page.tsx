"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const ophthalmologyServices = [
  { code: "B01.029.001", name: "Прием (осмотр, консультация) врача-офтальмолога", price: 2530 },
  { code: "B01.029.002.01", name: "Прием (осмотр, консультация) врача-офтальмолога повторный (после проведенного лечения)", price: 1820 },
  { code: "B01.029.001.001", name: "Прием (осмотр, консультация) врача-офтальмолога первичный с расширением зрачка", price: 2640 },
  { code: "A02.26.003", name: "Офтальмоскопия", price: 840 },
  { code: "A02.26.015", name: "Офтальмотонометрия", price: 760 },
  { code: "A02.26.009", name: "Исследование цветоощущения", price: 730 },
  { code: "A02.26.014", name: "Скиаскопия", price: 730 },
  { code: "A02.26.020", name: "Тест Ширмера", price: 560 },
  { code: "A11.26.011", name: "Пара- и ретробульбарные инъекции", price: 630 },
  { code: "A02.26.023", name: "Исследование аккомодации", price: 240 },
  { code: "A03.26.001", name: "Биомикроскопия глаза", price: 480 },
  { code: "A03.26.015", name: "Тонография глаз", price: 1100 },
  { code: "A11.26.016", name: "Субконъюнктивальная инъекция", price: 630 },
  { code: "A12.26.016", name: "Авторефрактометрия с узким зрачком", price: 360 },
  { code: "A12.26.004", name: "Тонометрия глаза через 2 часа (по Маклакову)", price: 730 },
  { code: "A16.26.057", name: "Удаление инородного тела из переднего сегмента глаза", price: 2420 },
  { code: "A23.26.002.001", name: "Подбор контактной коррекции зрения", price: 1600 },
  { code: "A21.26.001", name: "Массаж век медицинский", price: 1100 },
  { code: "A23.26.001", name: "Подбор очковой коррекции зрения (простых очков для близи и дали/1 пара)", price: 550 },
  { code: "A23.26.001.002", name: "Подбор очковой коррекции зрения (сложных для близи и дали/2 пары)", price: 840 },
  { code: "A23.26.002.003", name: "Подбор контактной коррекции зрения+обучение (после диагностики без стоимости кл)", price: 1540 },
  { code: "A02.26.010", name: "Измерение угла косоглазия", price: 240 },
  { code: "A25.26.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях органа зрения", price: 360 },
  { code: "A03.26.021", name: "Определение времени разрыва слезной пленки", price: 480 },
  { code: "A03.26.007", name: "Определение ретинальной остроты зрения", price: 240 },
  { code: "A05.26.007", name: "Оптическая биометрия глаза", price: 480 },
  { code: "A11.26.009", name: "Получение мазка содержимого конъюнктивальной полости и слезоотводящих путей", price: 360 },
  { code: "A21.26.019", name: "Промывание конъюнктивной полости", price: 850 },
  { code: "A16.26.034", name: "Удаление инородного тела конъюнктивы", price: 1210 },
  { code: "A16.26.051", name: "Удаление инородного тела роговицы", price: 1820 },
  { code: "A02.26.013", name: "Определение рефракции с помощью набора пробных линз", price: 730 },
  { code: "A03.26.003", name: "Биомикроофтальмоскопия, осмотр глазного дна с высокодиоптрийными линзами под мидриазом", price: 840 },
];

const reasonsToVisit = [
  "Снижение остроты зрения, blur",
  "Боль, резь, покраснение глаз",
  "Слезотечение, сухость глаз",
  "Подбор очков или контактных линз",
  "Профилактический осмотр",
  "Инородное тело в глазу",
  "У детей — косоглазие, близорукость, дальнозоркость",
];

const faqItems = [
  { q: "Когда обращаться к офтальмологу?", a: "К офтальмологу обращаются при снижении зрения, болях и рези в глазах, слезотечении, сухости, покраснении, для подбора очков или контактных линз, при попадании инородного тела, а также для профилактического осмотра и наблюдения при глаукоме, катаракте, диабетической ретинопатии." },
  { q: "Какие услуги оказывает офтальмолог?", a: "В «Альтамед Голицино» проводятся приём и консультация офтальмолога (в том числе с расширением зрачка), офтальмоскопия, тонометрия, авторефрактометрия, подбор очковой и контактной коррекции, биомикроскопия, удаление инородных тел, промывание конъюнктивальной полости и другие процедуры по прейскуранту." },
  { q: "Есть ли подбор очков и линз?", a: "Да. Выполняется подбор очковой коррекции (простых и сложных очков для близи и дали), подбор контактной коррекции и подбор контактной коррекции с обучением. Запись — через форму на сайте или по телефону." },
];

export default function OftalmologGolitsinoPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-full bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  Главная
                </Link>
              </li>
              <li><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Услуги</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Офтальмолог Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Офтальмолог в Голицино — приём и диагностика в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Проверка зрения, подбор очков и контактных линз, диагностика и лечение заболеваний глаз в Голицино
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/oftalmologia.webp" alt="Офтальмолог Голицино" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Офтальмолог в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/oftalmologia.webp" alt="Офтальмолог Голицино" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Офтальмолог в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-офтальмолога, проверка зрения, подбор очков и контактных линз в Альтамед Голицино</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">Консультация</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицино»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Опытные врачи-офтальмологи", "Проверка зрения и подбор очков/линз", "Современная диагностика глаз (офтальмоскопия, тонометрия и др.)", "Удобная запись и приём в Голицино"].map((text, i) => (
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

      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Офтальмология в Голицино</h2>
          <p className="text-gray-600 mb-6">
            Офтальмолог занимается диагностикой и лечением заболеваний глаз: приём и консультация (в том числе с расширением зрачка), офтальмоскопия, тонометрия, авторефрактометрия, подбор очковой и контактной коррекции, биомикроскопия, удаление инородных тел и другие процедуры.
          </p>
          <p className="text-gray-600">В «Альтамед Голицино» вы можете записаться к офтальмологу и пройти диагностику зрения в Голицино.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги офтальмолога в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-офтальмолога, диагностика и подбор коррекции в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-офтальмолога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {ophthalmologyServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString("ru-RU")} ₽</div>
                    </div>
                    <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0 text-center whitespace-nowrap">
                      Записаться
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация офтальмолога</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsToVisit.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1 flex-shrink-0" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button onClick={() => setExpanded(expanded === index ? null : index)} className="flex items-center justify-between w-full text-left py-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <span className={`text-2xl text-emerald-600 transition-transform ${expanded === index ? "rotate-45" : ""}`}>+</span>
                </button>
                {expanded === index && <div className="pb-4"><p className="text-gray-600">{item.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
