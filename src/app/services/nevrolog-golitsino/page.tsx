"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const neurologyServicesList = [
  { code: "B01.023.001", name: "Прием (осмотр, консультация) врача-невролога", price: 2530 },
  { code: "B04.023.002", name: "Диспансерный прием (осмотр, консультация) врача-невролога", price: 1820 },
  { code: "B04.023.003", name: "Школа для больных с рассеянным склерозом", price: 4110 },
  { code: "B04.023.004", name: "Школа для больных с эпилепсией", price: 3390 },
  { code: "B04.023.005", name: "Школа для больных с гиперкинезами", price: 3390 },
  { code: "B04.023.006", name: "Школа для больных с болезнью Паркинсона", price: 5450 },
  { code: "B04.040.001", name: "Школа для больных с заболеваниями суставов и позвоночника (Услуга по обучению больных с заболеваниями суставов и позвоночника)", price: 4840 },
  { code: "B05.023.001", name: "Услуги по медицинской реабилитации пациента, перенесшего острое нарушение мозгового кровообращения", price: 2540 },
  { code: "B05.023.002", name: "Услуги по медицинской реабилитации пациента с заболеваниями нервной системы", price: 2540 },
  { code: "B05.023.002.001", name: "Услуги по медицинской реабилитации пациента с заболеваниями центральной нервной системы", price: 2540 },
  { code: "B05.023.002.002", name: "Услуги по медицинской реабилитации пациента с заболеваниями переферической нервной системы", price: 2540 },
  { code: "B05.024.002", name: "Услуги по медицинской реабилитации пациента, перенесшего нейрохирургическую операцию", price: 4110 },
  { code: "B05.024.003", name: "Услуги по медицинской реабилитации пациента, перенесшего черепно-мозговую травму", price: 3390 },
  { code: "A25.23.001", name: "Назначение лекарственных препаратов при заболеваниях центральной нервной системы и головного мозга", price: 660 },
  { code: "A25.23.002", name: "Назначение диетического питания при заболеваниях центральной нервной системы и головного мозга", price: 190 },
  { code: "A25.23.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях центральной нервной системы и головного мозга", price: 190 },
  { code: "A25.24.001", name: "Назначение лекарственных препаратов при заболеваниях периферической нервной системы", price: 660 },
  { code: "A25.24.002", name: "Назначение диетического питания при заболеваниях периферической нервной системы", price: 120 },
  { code: "A25.03.001", name: "Назначение лекарственных препаратов при заболеваниях костной системы", price: 360 },
  { code: "A25.04.001", name: "Назначение лекарственных препаратов при заболеваниях суставов", price: 360 },
  { code: "A25.24.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях периферической нервной системы", price: 120 },
  { code: "A11.24.001", name: "Введение лекарственных препаратов в область периферического нерва", price: 2060 },
  { code: "A11.24.001.001", name: "Введение лекарственных препаратов в область периферического нерва блокада грушевидной мышцы", price: 1820 },
  { code: "A11.24.001.002", name: "Введение лекарственных препаратов в область периферического нерва блокада карпального канала", price: 1820 },
  { code: "A11.24.001.003", name: "Введение лекарственных препаратов в область периферического нерва блокада кубитального канала", price: 1820 },
  { code: "A11.24.001.004", name: "Введение лекарственных препаратов в область периферического нерва блокада лучевого нерва в области аркады Фрозе", price: 1820 },
  { code: "A11.24.001.005", name: "Введение лекарственных препаратов в область периферического нерва блокада малоберцового нерва в области головки малоберцовой кости", price: 1820 },
  { code: "A11.24.001.006", name: "Введение лекарственных препаратов в область периферического нерва блокада паравертебральная", price: 1820 },
  { code: "A11.24.001.007", name: "Введение лекарственных препаратов в область периферического нерва блокада пресакральная", price: 1820 },
  { code: "A11.24.001.008", name: "Введение лекарственных препаратов в область периферического нерва блокада триггерных точек с траумелем (без лекарства), 4 точки", price: 610 },
  { code: "A23.30.001.001", name: "Пособие по подбору ортопедических стелек Изготовление индивидуальной ортопедической стельки ФормТотикс", price: 10290 },
  { code: "A23.30.001.003", name: "Пособие по подбору ортопедических стелек Изготовление индивидуальной ортопедической стельки ФормТотикс детские", price: 9680 },
];

const reasonsToVisit = [
  "Головные боли, мигрень, головокружение",
  "Боли в спине, шее, онемение конечностей",
  "Нарушения сна, памяти, координации",
  "Рассеянный склероз, эпилепсия, болезнь Паркинсона",
  "Реабилитация после инсульта и черепно-мозговой травмы",
  "Блокады при невралгиях, стельки ФормТотикс",
];

const faqItems = [
  { q: "Когда обращаться к неврологу?", a: "К неврологу обращаются при головных болях, головокружении, болях в спине и шее, онемении конечностей, нарушениях сна и памяти, при рассеянном склерозе, эпилепсии, болезни Паркинсона, а также для реабилитации после инсульта и черепно-мозговой травмы." },
  { q: "Какие услуги оказывает невролог в Альтамед Голицыно?", a: "В «Альтамед Голицыно» проводятся приём и диспансерный приём врача-невролога, школы для больных (рассеянный склероз, эпилепсия, Паркинсон, суставы и позвоночник), реабилитация после инсульта и ЧМТ, блокады периферических нервов, ортопедические стельки ФормТотикс по прейскуранту." },
  { q: "Что такое школы для больных и ФормТотикс?", a: "Школы для больных — групповые занятия по ведению заболевания (рассеянный склероз, эпилепсия, Паркинсон и др.). ФормТотикс — индивидуальные ортопедические стельки. Стоимость уточняйте при записи." },
];

export default function NevrologGolitsinoPage() {
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Невролог Голицыно</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Невролог в Голицыно — приём и лечение нервной системы в «Альтамед Голицыно»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний нервной системы у взрослых и детей в Голицыно
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/nevrolog.webp" alt="Невролог Голицыно" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Невролог в Голицыно</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/nevrolog.webp" alt="Невролог Голицыно" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Невролог в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-невролога, школы для больных, реабилитация после инсульта и ЧМТ в Альтамед Голицыно</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">Консультация</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицыно»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Опытные врачи-неврологи", "Школы для больных (рассеянный склероз, эпилепсия, Паркинсон)", "Реабилитация после инсульта и ЧМТ, блокады", "Ортопедические стельки ФормТотикс в Голицыно"].map((text, i) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Неврология в Голицыно</h2>
          <p className="text-gray-600 mb-6">
            Невролог занимается диагностикой и лечением заболеваний нервной системы, позвоночника и сосудов: приём и консультация, диспансерный приём, школы для больных (рассеянный склероз, эпилепсия, гиперкинезы, болезнь Паркинсона, суставы и позвоночник), реабилитация после инсульта и черепно-мозговой травмы, блокады периферических нервов, ортопедические стельки ФормТотикс.
          </p>
          <p className="text-gray-600">В «Альтамед Голицыно» вы можете записаться к неврологу и пройти обследование в Голицыно.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги невролога в Голицыно</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-невролога, школы для больных, реабилитация, блокады, ортопедические стельки ФормТотикс в Альтамед Голицыно</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-невролога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {neurologyServicesList.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация невролога</h2>
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
