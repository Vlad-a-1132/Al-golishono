"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const pediatricsServices = [
  { code: "B01.031.001", name: "Прием (осмотр, консультация) врача-педиатра", price: 2530 },
  { code: "B04.031.001", name: "Диспансерный прием (осмотр, консультация) врача-педиатра", price: 1820 },
  { code: "A13.30.002", name: "Обучение уходу за новорожденным", price: 1210 },
  { code: "A14.30.009", name: "Пеленание новорожденного", price: 1210 },
  { code: "A01.30.024", name: "Составление заключения о физическом развитии", price: 1820 },
  { code: "A25.30.020", name: "Назначение лекарственных препаратов при патологии у новорожденного", price: 600 },
  { code: "B01.031.001.026", name: "Прием (осмотр, консультация) врача-педиатра с оформлением справки по форме: в детское дошкольное учреждение или школу", price: 2200 },
  { code: "B01.031.001.027", name: "Прием (осмотр, консультация) врача-педиатра с оформлением справки по форме: в бассейн по результатам обследования", price: 2200 },
  { code: "B01.031.001.030", name: "Прием (осмотр, консультация) врача-педиатра с оформлением справки по форме: в спортивную секцию при наличии ЭКГ с расшифровкой", price: 2200 },
  { code: "B01.031.001.033", name: "Прием (осмотр, консультация) врача-педиатра с оформлением справки по форме: для представления", price: 2200 },
  { code: "B04.031.002.020", name: "Диспансерный прием (осмотр, консультация) врача-педиатра расшифровка анализов", price: 1820 },
];

const reasonsToVisit = [
  "Повышение температуры тела у ребёнка",
  "Кашель, насморк, боль в горле",
  "Расстройство пищеварения: рвота, диарея, запор",
  "Сыпь на коже неясного происхождения",
  "Боль в животе, головная боль",
  "Вялость, сонливость, отказ от еды",
  "Нарушение сна и поведения",
  "Задержка физического или нервно-психического развития",
  "Плановые профилактические осмотры",
];

const faqItems = [
  { q: "Когда нужно обращаться к педиатру?", a: "К педиатру обращаются при плановых осмотрах по возрасту, при повышении температуры выше 38°C, симптомах простуды, расстройстве пищеварения, сыпи, болях, вялости, нарушении сна и поведения, а также для оформления справок в сад, школу, бассейн, спортивную секцию." },
  { q: "Какие справки оформляет педиатр?", a: "В «Альтамед Голицыно» педиатр оформляет справки в детский сад и школу, в бассейн по результатам обследования, в спортивную секцию (при наличии ЭКГ с расшифровкой), справки для представления и другие документы после осмотра ребёнка." },
  { q: "Помощь новорождённым", a: "Мы оказываем услуги по обучению уходу за новорождённым, пеленанию, составлению заключения о физическом развитии, назначению лекарственных препаратов при патологии у новорождённого." },
];

export default function PediatrGolitsinoPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Педиатр Голицыно</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Педиатр в Голицыно — приём и консультация в «Альтамед Голицыно»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Медицинская помощь детям от рождения до 18 лет в Голицыно: приём педиатра, справки в сад, школу, бассейн, спортивную секцию
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/yslugi/Pediatrician.webp" alt="Педиатр Голицыно" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Педиатр в Голицыно</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/yslugi/Pediatrician.webp" alt="Педиатр Голицыно" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Педиатр в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-педиатра, справки в сад, школу, бассейн, спортивную секцию в Альтамед Голицыно</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">Консультация</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Почему Альтамед Голицыно */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицыно»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Опытные врачи-педиатры с многолетним стажем",
              "Индивидуальный подход к каждому ребёнку с учётом возраста",
              "Современная диагностика и лечение в соответствии с клиническими рекомендациями",
              "Комфортные условия для детей и родителей в Голицыно",
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

      {/* Краткое описание */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Педиатрическая помощь в Голицыно</h2>
          <p className="text-gray-600 mb-6">
            Педиатр — врач, который ведёт ребёнка от рождения до 18 лет: диагностика, лечение и профилактика заболеваний, плановые осмотры, вакцинация, оформление справок в детский сад, школу, бассейн, спортивную секцию.
          </p>
          <p className="text-gray-600">
            В «Альтамед Голицыно» вы можете записать ребёнка на приём к педиатру, пройти диспансерный приём, получить справки и заключения о физическом развитии, а также услуги по уходу за новорождённым.
          </p>
        </div>
      </section>

      {/* Услуги педиатра */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги педиатра в Голицыно</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-педиатра, справки и сопровождение детей в Альтамед Голицыно</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-педиатра</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {pediatricsServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString("ru-RU")} ₽</div>
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

      {/* Когда обратиться */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужно обратиться к педиатру</h2>
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

      {/* FAQ */}
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
