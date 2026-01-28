"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const gastroenterologyServices = [
  { code: "B01.004.001", name: "Прием (осмотр, консультация) врача гастроэнтеролога", price: 2640 },
  { code: "B01.004.001.001", name: "Прием (осмотр, консультация) детского врача гастроэнтеролога", price: 2660 },
  { code: "B01.004.001.001.01", name: "Прием (осмотр, консультация) врача-гастроэнтеролога 60 мин", price: 4600 },
  { code: "B04.004.001", name: "Диспансерный прием (осмотр, консультация) врача-гастроэнтеролога", price: 1820 },
];

const reasonsToVisit = [
  "Боли в животе, изжога, тошнота",
  "Нарушение стула (запор, диарея)",
  "Вздутие живота, метеоризм",
  "Ощущение тяжести после еды",
  "Отрыжка, неприятный привкус во рту",
  "Снижение аппетита, потеря веса",
  "Подозрение на заболевание желудка, кишечника, печени",
  "Плановое наблюдение при хронических заболеваниях ЖКТ",
];

const faqItems = [
  { q: "Когда обращаться к гастроэнтерологу?", a: "К гастроэнтерологу обращаются при болях в животе, изжоге, тошноте, нарушении стула, вздутии, тяжести после еды, отрыжке, снижении аппетита, а также для планового наблюдения при хронических заболеваниях желудочно-кишечного тракта, печени и поджелудочной железы." },
  { q: "Чем занимается гастроэнтеролог?", a: "Гастроэнтеролог диагностирует и лечит заболевания пищевода, желудка, кишечника, печени, желчевыводящих путей и поджелудочной железы. На приёме врач собирает жалобы, проводит осмотр, при необходимости назначает анализы и инструментальные исследования (УЗИ, ФГДС и др.)." },
  { q: "Есть ли детский гастроэнтеролог?", a: "В «Альтамед Голицино» предусмотрен приём детского врача гастроэнтеролога — отдельная услуга с кодом B01.004.001.001. Записаться можно через форму на сайте или по телефону." },
];

export default function GastroenterologGolitsinoPage() {
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Гастроэнтеролог Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Гастроэнтеролог в Голицино — приём и консультация в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний желудочно-кишечного тракта у взрослых и детей в Голицино
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/gas.webp" alt="Гастроэнтеролог Голицино" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Гастроэнтеролог в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/gas.webp" alt="Гастроэнтеролог Голицино" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Гастроэнтеролог в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-гастроэнтеролога, детского гастроэнтеролога, диспансерный приём в Альтамед Голицино</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">Консультация</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Почему Альтамед Голицино */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицино»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Опытные врачи-гастроэнтерологи, современная диагностика ЖКТ",
              "Индивидуальный подход и план лечения заболеваний желудка и кишечника",
              "Приём взрослых и детей, в том числе расширенная консультация 60 мин",
              "Удобная запись и комфортный приём в Голицино",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Гастроэнтерология в Голицино</h2>
          <p className="text-gray-600 mb-6">
            Гастроэнтеролог занимается диагностикой и лечением заболеваний пищевода, желудка, кишечника, печени, желчевыводящих путей и поджелудочной железы. В «Альтамед Голицино» вы можете записаться на приём врача-гастроэнтеролога, детского гастроэнтеролога, а также на расширенную консультацию 60 минут и диспансерный приём.
          </p>
          <p className="text-gray-600">
            Мы оказываем помощь при жалобах на боли в животе, изжогу, тошноту, нарушение стула, вздутие и другие симптомы заболеваний ЖКТ.
          </p>
        </div>
      </section>

      {/* Услуги гастроэнтеролога */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги гастроэнтеролога в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-гастроэнтеролога для взрослых и детей в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-гастроэнтеролога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {gastroenterologyServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация гастроэнтеролога</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
