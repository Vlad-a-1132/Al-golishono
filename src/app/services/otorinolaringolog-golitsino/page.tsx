"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const lorServices = [
  { code: "B01.028.001", name: "Прием (осмотр, консультация) врача-оториноларинголога", price: 2530 },
  { code: "B04.028.002", name: "Диспансерный прием (осмотр, консультация) врача-оториноларинголога", price: 2200 },
  { code: "A11.08.005", name: "Внутриносовые блокады", price: 1320 },
  { code: "A11.08.006", name: "Глоточные блокады с введением лекарственных препаратов", price: 1090 },
  { code: "A11.08.007", name: "Заушные блокады с лекарственными препаратами", price: 970 },
  { code: "A11.08.010.001", name: "Получение мазков со слизистой оболочки носо-ротоглотки", price: 430 },
  { code: "A11.08.010.002", name: "Получение мазков со слизистой оболочки ротоглотки", price: 430 },
  { code: "A11.08.019.001", name: "Эндоларингеальное введение лекарственных препаратов", price: 1570 },
  { code: "A11.08.020", name: "Анемизация слизистой носа", price: 870 },
  { code: "A11.08.021", name: "Промывание околоносовых пазух и носоглотки", price: 1860 },
  { code: "A11.08.021.001", name: "Промывание околоносовых пазух и носа методом вакуумного перемещения", price: 2000 },
  { code: "A11.08.021.002", name: "Промывание околоносовых пазух и носа методом вакуумного перемещения Кукушка", price: 2000 },
  { code: "A11.08.022", name: "Катетеризация придаточных пазух носа", price: 1330 },
  { code: "A11.08.022.001", name: "Катетеризация придаточных пазух носа (Ямик-катетером)", price: 1860 },
  { code: "A11.08.023", name: "Инстилляция лекарственных препаратов при заболевании верхних дыхательных путей", price: 660 },
  { code: "A14.08.006", name: "Введение лекарственных препаратов интраназально", price: 360 },
  { code: "A14.25.001", name: "Уход за наружным слуховым проходом (туалет)", price: 600 },
  { code: "A15.08.001", name: "Наложение пращевидной повязки на нос при переломах и после операций", price: 480 },
  { code: "A16.08.006", name: "Механическая остановка кровотечения (передняя и задняя тампонада носа)", price: 3330 },
  { code: "A16.08.006.001", name: "Передняя тампонада носа", price: 2660 },
  { code: "A16.08.007", name: "Удаление инородного тела глотки или гортани (простое)", price: 3020 },
  { code: "A16.08.007.01", name: "Удаление инородного тела глотки или гортани (сложное)", price: 3330 },
  { code: "A16.08.011", name: "Удаление инородного тела носа", price: 2420 },
  { code: "A16.08.012", name: "Вскрытие паратонзиллярного абсцесса", price: 3390 },
  { code: "A16.08.016", name: "Промывание лакун миндалин", price: 1330 },
  { code: "A16.08.018", name: "Вскрытие фурункула носа", price: 2420 },
  { code: "A16.08.023.001", name: "Промывание верхнечелюстной пазухи носа с одной стороны", price: 1090 },
  { code: "A16.25.001", name: "Дренирование фурункула наружного уха", price: 4240 },
  { code: "A16.25.002.001", name: "Кюретаж наружного уха. Удаление серной пробки инструментальное (с одной стороны)", price: 850 },
  { code: "A16.25.003", name: "Первичная хирургическая обработка раны наружного уха", price: 1330 },
  { code: "A16.25.007", name: "Удаление ушной серы, промывание (сложное)", price: 1330 },
  { code: "A16.25.008", name: "Удаление инородного тела из слухового отверстия", price: 2530 },
  { code: "A16.25.012", name: "Продувание слуховой трубы", price: 940 },
  { code: "A16.25.036", name: "Катетеризация слуховой трубы", price: 970 },
  { code: "A16.25.036.001", name: "Катетеризация слуховой трубы с введением лекарственных препаратов", price: 2180 },
  { code: "A21.25.002", name: "Массаж барабанных перепонок", price: 800 },
  { code: "A24.08.003.001", name: "Туширование слизистой носоглотки, обработка лекарственным препаратом слизистой глотки", price: 480 },
  { code: "A03.08.006", name: "Синусоскопия (Синускан)", price: 2000 },
  { code: "A03.25.003", name: "Исследование органов слуха с помощью камертона", price: 1330 },
  { code: "A03.25.004", name: "Определение проходимости евстахиевой трубы", price: 470 },
  { code: "A11.25.002", name: "Введение лекарственных препаратов в наружный слуховой проход", price: 360 },
  { code: "A11.25.003", name: "Промывание среднего уха (аттик иглой)", price: 2000 },
  { code: "A11.25.004", name: "Введение лекарственных средств в барабанную полость (транстимпанально)", price: 660 },
  { code: "A11.25.005", name: "Получение отделяемого из наружного слухового прохода", price: 470 },
  { code: "A12.25.001", name: "Тональная аудиометрия", price: 1820 },
  { code: "A14.08.004.001", name: "Отсасывание слизи из носа (туалет носа)", price: 660 },
];

const reasonsToVisit = [
  "Боль или заложенность в ухе, снижение слуха",
  "Боль в горле, першение, осиплость",
  "Заложенность носа, насморк, нарушение обоняния",
  "Головная боль в области лба, переносицы",
  "Увеличение лимфоузлов на шее",
  "Храп, нарушение носового дыхания",
  "Инородное тело в ухе, носу или горле",
  "Кровотечение из носа или уха",
];

const faqItems = [
  { q: "Когда обращаться к ЛОРу?", a: "К оториноларингологу обращаются при болях в ухе, горле или носу, заложенности, снижении слуха, осиплости, храпе, кровотечении из носа или уха, при попадании инородного тела, а также для плановых осмотров и после перенесённых ОРВИ." },
  { q: "Какие процедуры проводит ЛОР?", a: "ЛОР проводит приём и консультации, диспансерный приём, внутриносовые и глоточные блокады, промывание пазух (в том числе «Кукушка»), катетеризацию пазух, промывание лакун миндалин, удаление серных пробок, продувание и катетеризацию слуховой трубы, тональную аудиометрию и другие манипуляции по прейскуранту." },
  { q: "Есть ли синусоскопия и аудиометрия?", a: "В «Альтамед Голицино» выполняются синусоскопия (Синускан), исследование слуха камертоном, определение проходимости евстахиевой трубы и тональная аудиометрия. Запись — через форму на сайте или по телефону." },
];

export default function OtorinolaringologGolitsinoPage() {
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">ЛОР Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              ЛОР (оториноларинголог) в Голицино — приём и лечение в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний уха, горла и носа в Голицино
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/otolaryngologia.webp" alt="ЛОР Голицино" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">ЛОР в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/otolaryngologia.webp" alt="ЛОР Голицино" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">ЛОР в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-оториноларинголога, промывание пазух, процедуры при заболеваниях уха, горла и носа в Альтамед Голицино</p>
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
            {["Опытные врачи-оториноларингологи", "Современная диагностика ЛОР-органов (синусоскопия, аудиометрия)", "Широкий спектр процедур: блокады, промывания, манипуляции", "Удобная запись и приём в Голицино"].map((text, i) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Отоларингология в Голицино</h2>
          <p className="text-gray-600 mb-6">
            Оториноларинголог (ЛОР) занимается заболеваниями уха, горла и носа: консультации, диспансерный приём, внутриносовые и глоточные блокады, промывание пазух («Кукушка»), промывание лакун миндалин, удаление серных пробок, продувание и катетеризацию слуховой трубы, тональную аудиометрию и другие процедуры.
          </p>
          <p className="text-gray-600">В «Альтамед Голицино» вы можете записаться на приём к ЛОРу и пройти необходимые процедуры в Голицино.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги ЛОР (оториноларинголога) в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-оториноларинголога и процедуры при заболеваниях уха, горла и носа в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-оториноларинголога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {lorServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация ЛОРа</h2>
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
