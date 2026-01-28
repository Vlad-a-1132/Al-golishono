"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const dermatologyServices = [
  { code: "B01.008.001", name: "Прием (осмотр, консультация) врача-дерматовенеролога", price: 2530 },
  { code: "B04.008.002", name: "Профилактический прием (осмотр, консультация) врача-дерматовенеролога", price: 2200 },
  { code: "A01.01.001", name: "Сбор анамнеза и жалоб в дерматологии", price: 400 },
  { code: "A01.01.002", name: "Визуальное исследование в дерматологии", price: 400 },
  { code: "A01.01.003", name: "Пальпация в дерматологии", price: 400 },
  { code: "A01.01.005", name: "Определение дермографизма", price: 400 },
  { code: "A02.01.002", name: "Аускультация в дерматологии", price: 400 },
  { code: "A02.01.003", name: "Определение сальности кожи", price: 400 },
  { code: "A02.01.005", name: "Проведение йодной пробы", price: 400 },
  { code: "A02.01.006", name: "Люминесцентная диагностика (осмотр под лампой Вуда)", price: 800 },
  { code: "A03.01.001", name: "Осмотр кожи под увеличением (дерматоскопия)", price: 400 },
  { code: "A11.01.002.001", name: "Подкожное введение лекарственных препаратов, обогащенная тромбоцитами плазма, 1 зона", price: 5450 },
  { code: "A11.01.002.002", name: "Подкожное введение лекарственных препаратов/ обогащенная тромбоцитами плазма/ дополнительная зона", price: 3030 },
  { code: "A03.01.002", name: "Осмотр кожи через стекло при надавливании (витропрессия)", price: 400 },
  { code: "A14.01.009", name: "Удаление камодонов кожи", price: 2190 },
  { code: "A14.01.010", name: "Удаление милиумов кожи", price: 2190 },
  { code: "A16.01.015", name: "Удаление телеангиоэктазий", price: 4510 },
  { code: "A16.01.017.001", name: "Удаление доброкачественных новообразований кожи методом электрокоагуляции (Фотек)", price: 1540 },
  { code: "A16.01.020", name: "Удаление контагиозных моллюсков кожи", price: 2270 },
  { code: "A16.01.017.01", name: "Удаление бородавок препаратом Мардил Цинк 1 ед.", price: 3250 },
  { code: "A25.01.001", name: "Назначение лекарственных препаратов при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи", price: 2270 },
  { code: "A15.01.001.002", name: "Наложение повязки при нарушении целостности кожных покровов с фунгицидной мазью", price: 400 },
  { code: "A24.01.002", name: "Наложение компресса на кожу", price: 260 },
  { code: "A15.01.001.004", name: "Наложение повязки при нарушении целостности кожных покровов (окклюзионной)", price: 330 },
  { code: "A25.01.001.003", name: "Назначение лекарственных препаратов при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи для лечения чесотки, паразитарных дерматозов (1 процедура)", price: 1330 },
  { code: "A25.01.001.004", name: "Назначение лекарственных препаратов при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи для лечения педикулеза (1 процедура)", price: 730 },
  { code: "A25.01.001.005", name: "Назначение лекарственных препаратов при заболеваниях кожи, подкожно-жировой клетчатки, придатков кожи (лечебных мазей (примочек))", price: 300 },
];

const reasonsToVisit = [
  "Высыпания, пятна, изменения кожи",
  "Зуд, шелушение, сухость кожи",
  "Новообразования (родинки, папилломы, бородавки)",
  "Угревая сыпь, комедоны, милиумы",
  "Подозрение на грибок, чесотку, педикулез",
  "Обследование под лампой Вуда, дерматоскопия",
];

const faqItems = [
  { q: "Когда обращаться к дерматологу?", a: "К дерматологу обращаются при появлении высыпаний, пятен, зуда, шелушения, новообразований на коже, угревой сыпи, при подозрении на грибковые заболевания, чесотку, педикулез, а также для профилактического осмотра родинок и других образований." },
  { q: "Какие услуги оказывает дерматолог?", a: "В «Альтамед Голицино» проводятся приём и консультация врача-дерматовенеролога, дерматоскопия, осмотр под лампой Вуда, удаление комедонов, милиумов, телеангиоэктазий, доброкачественных новообразований (электрокоагуляция Фотек), контагиозных моллюсков, бородавок, назначение лечения при заболеваниях кожи, наложение повязок и другие процедуры по прейскуранту." },
  { q: "Что такое плазмолифтинг в дерматологии?", a: "Подкожное введение обогащённой тромбоцитами плазмы (A11.01.002.001, A11.01.002.002) — процедура для улучшения состояния кожи. Стоимость зависит от количества зон. Уточняйте при записи." },
];

export default function DermatologGolitsinoPage() {
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Дерматолог Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Дерматолог в Голицино — приём и лечение в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение кожных заболеваний, дерматоскопия, удаление новообразований в Голицино
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/Dermat1ology.webp" alt="Дерматолог Голицино" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Дерматолог в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/Dermat1ology.webp" alt="Дерматолог Голицино" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Дерматолог в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-дерматовенеролога, дерматоскопия, удаление новообразований в Альтамед Голицино</p>
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
            {["Опытные врачи-дерматовенерологи", "Дерматоскопия и осмотр под лампой Вуда", "Удаление новообразований (электрокоагуляция Фотек и др.)", "Удобная запись и приём в Голицино"].map((text, i) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Дерматология в Голицино</h2>
          <p className="text-gray-600 mb-6">
            Дерматолог (дерматовенеролог) занимается диагностикой и лечением заболеваний кожи, ногтей и волос: приём и консультация, дерматоскопия, осмотр под лампой Вуда, удаление комедонов, милиумов, телеангиоэктазий, доброкачественных новообразований, бородавок, контагиозных моллюсков, назначение лечения при акне, чесотке, педикулезе и других состояниях.
          </p>
          <p className="text-gray-600">В «Альтамед Голицино» вы можете записаться к дерматологу и пройти обследование кожи в Голицино.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги дерматолога в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-дерматовенеролога и процедуры при заболеваниях кожи в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-дерматовенеролога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {dermatologyServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация дерматолога</h2>
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
