"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const gynecologyServices = [
  { code: "B01.001.001", name: "Прием (осмотр, консультация) врача-акушера-гинеколога", price: 2530 },
  { code: "B01.001.001.01", name: "Прием (осмотр, консультация, взрослые, дети) врача-акушера-гинеколога к.м.н", price: 2750 },
  { code: "B01.001.004", name: "Прием (осмотр, консультация) врача-акушера-гинеколога беременной", price: 2420 },
  { code: "B04.001.001", name: "Диспансерный прием (осмотр, консультация) врача-акушера-гинеколога", price: 1820 },
  { code: "A02.01.005.001", name: "Проведение йодной пробы постановка Шиллер-теста", price: 360 },
  { code: "A03.20.001", name: "Кольпоскопия расширенная", price: 2420 },
  { code: "A11.20.005.01", name: "Получение влагалищного мазка (без приема врача)", price: 850 },
  { code: "A11.20.014", name: "Введение внутриматочной спирали (без учета стоимости спирали)", price: 9680 },
  { code: "A11.20.015", name: "Удаление внутриматочной спирали", price: 3030 },
  { code: "A16.20.059.001", name: "Удаление новообразования влагалища (Удаление остроконечных кондилом 1 ед)", price: 470 },
  { code: "A16.20.059.001.01", name: "Удаление новообразования влагалища (Удаление остроконечных папиллом до 3 ед)", price: 2270 },
  { code: "A11.20.005", name: "Получение влагалищного мазка", price: 430 },
  { code: "A11.20.002", name: "Получение цервикального мазка", price: 430 },
  { code: "A11.20.005", name: "Получение влагалищного мазка (онкоцитология)", price: 430 },
  { code: "A11.20.024", name: "Введение лекарственных препаратов интравагинально", price: 1210 },
  { code: "A11.20.025", name: "Получение соскоба с шейки матки", price: 470 },
  { code: "A11.20.039", name: "Получение соскоба с вульвы", price: 470 },
  { code: "A11.20.041", name: "Введение акушерского разгружающего поддерживающего кольца (пессария)", price: 1210 },
  { code: "A11.20.042", name: "Извлечение акушерского разгружающего поддерживающего кольца (пессария)", price: 1820 },
  { code: "A01.20.001", name: "Сбор акушерско-гинекологического анамнеза и жалоб", price: 1070 },
  { code: "A11.20.004.010", name: "Влагалищная биопсия аспирационная эндометрия (без стоимости гистологического исследования)", price: 1820 },
  { code: "A11.20.004.011", name: "Влагалищная биопсия образований влагалища, вульвы, половых губ (без стоимости гистологического исследования)", price: 2420 },
  { code: "A11.20.009", name: "Зондирование матки", price: 970 },
  { code: "A11.20.038", name: "Зондирование влагалища", price: 970 },
  { code: "A14.20.001", name: "Спринцевание влагалища", price: 1210 },
  { code: "A14.20.001.001", name: "Спринцевание влагалища Обработка вульвы (с учетом стоимости лекарственных препаратов)", price: 480 },
  { code: "A14.20.001.002", name: "Спринцевание влагалища Санация влагалища (с учетом стоимости лекарственных препаратов)", price: 970 },
  { code: "A11.20.013.001", name: "Тампонирование лечебное влагалища Введение лекарственных препаратов во влагалище (с учетом стоимости лекарственных средств)", price: 970 },
  { code: "A11.20.013.002", name: "Тампонирование лечебное влагалища Обработка шейки матки и влагалища (с учетом стоимости лекарственных средств)", price: 850 },
  { code: "A16.01.011.010", name: "Вскрытие фурункула (карбункула) влагалища", price: 2060 },
  { code: "A16.20.005.001", name: "Расширение шеечного канала", price: 1330 },
  { code: "A16.20.020", name: "Дренирование абсцесса женских половых органов", price: 2060 },
  { code: "A16.20.036", name: "Хирургическое лечение заболеваний шейки матки с использованием различных энергий", price: 7990 },
  { code: "A16.20.059", name: "Удаление инородного тела из влагалища", price: 3030 },
  { code: "A16.20.059.001", name: "Удаление новообразования влагалища", price: 5320 },
  { code: "A16.20.069", name: "Удаление новообразования малой половой губы", price: 1330 },
  { code: "A16.20.084", name: "Удаление полипа женских половых органов", price: 660 },
  { code: "A16.30.069", name: "Снятие послеоперационных швов (с промежности)", price: 1330 },
  { code: "A25.20.001", name: "Назначение лекарственных препаратов при заболеваниях женских половых органов (простое)", price: 2530 },
  { code: "A25.20.001.001", name: "Назначение лекарственных препаратов при заболеваниях женских половых органов (сложное)", price: 4260 },
  { code: "B03.001.005", name: "Комплексная услуга по медикаментозному прерыванию беременности", price: 14520 },
  { code: "A22.20.006", name: "Абляция при новообразованиях женских половых органов (кисты, эрозии)", price: 5320 },
  { code: "A22.20.006.001", name: "Абляция при новообразованиях женских половых органов (папиллом, кондилом до 1 см)", price: 5060 },
  { code: "A22.20.006.002", name: "Абляция при новообразованиях женских половых органов (папиллом, кондилом более 1 см)", price: 2000 },
  { code: "A16.20.036.010", name: "Хирургическое лечение заболеваний шейки матки с использованием различных энергий Лечение эрозии шейки матки методом радиоволновой хирургии (с учетом стоимости расходных материалов и лекарственных средств)", price: 4240 },
  { code: "A16.20.097.012", name: "Электроэксцизия новообразования шейки матки деструкция наботовой кисты шейки матки до 3 шт", price: 3630 },
  { code: "A11.20.012", name: "Микроспринцевание (ирригация) влагалища", price: 610 },
  { code: "A11.20.004.001", name: "Влагалищная биопсия радиоволновая (без стоимости гистол иссл.)", price: 6050 },
  { code: "A11.20.011.001", name: "Биопсия шейки матки радиоволновая", price: 6660 },
  { code: "A11.20.011.002", name: "Биопсия шейки матки радиоволновая конусовидная", price: 8470 },
  { code: "A11.20.037", name: "Биопсия вульвы радиоволновая", price: 3030 },
  { code: "A16.20.059.001.002", name: "Удаление новообразования влагалища (Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища 1 ед)", price: 1210 },
  { code: "A16.20.059.001.002.0", name: "Удаление новообразования влагалища (Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища от 2 до 5 ед)", price: 1940 },
  { code: "A16.20.059.001.002.01", name: "Удаление новообразования влагалища (Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища от 6 до 10 ед)", price: 3030 },
  { code: "A16.20.059.001.002.03", name: "Удаление новообразования влагалища (Радиоволновое удаление остроконечных кондилом, папиллом, полипов влагалища от 10 ед)", price: 4240 },
];

const reasonsToVisit = [
  "Профилактический осмотр, планирование беременности",
  "Боли, нарушения цикла, выделения",
  "Кольпоскопия, мазки, онкоцитология",
  "ВМС, пессарий, медикаментозное прерывание беременности",
  "Эрозия шейки матки, кондиломы, папилломы, радиоволновая хирургия",
  "Биопсия, гистология, лечение заболеваний шейки матки",
];

const faqItems = [
  { q: "Когда обращаться к гинекологу?", a: "К гинекологу обращаются для профилактического осмотра, при нарушении цикла, болях, выделениях, планировании беременности, для подбора контрацепции, установки или удаления ВМС, при эрозии шейки матки, кондиломах, папилломах, для кольпоскопии и онкоцитологии, а также при любых симптомах со стороны женских половых органов." },
  { q: "Какие услуги оказывает гинеколог в Альтамед Голицино?", a: "В «Альтамед Голицино» проводятся приём и консультация врача-акушера-гинеколога, кольпоскопия, мазки, введение и удаление ВМС, радиоволновая хирургия (биопсия, удаление кондилом и папиллом, лечение эрозии шейки матки), гинекологические манипуляции (санация, спринцевание, пессарий, медикаментозное прерывание беременности и др.) по прейскуранту." },
  { q: "Что такое радиоволновая хирургия в гинекологии?", a: "Радиоволновая хирургия используется для биопсии шейки матки и вульвы, удаления кондилом, папиллом и полипов влагалища, лечения эрозии шейки матки. Стоимость зависит от объёма вмешательства. Уточняйте при записи." },
];

export default function GinekologGolitsinoPage() {
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
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Гинеколог Голицино</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Гинеколог в Голицино — приём и лечение в «Альтамед Голицино»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Приём врача-акушера-гинеколога, кольпоскопия, гинекологические манипуляции, радиоволновая хирургия в Голицино
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <img src="/images/images allergoly/ginokologia.webp" alt="Гинеколог Голицино" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3">
                <div className="text-black font-medium text-sm">Гинеколог в Голицино</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Консультация <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <img src="/images/images allergoly/ginokologia.webp" alt="Гинеколог Голицино" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Гинеколог в Голицино</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём врача-акушера-гинеколога, кольпоскопия, радиоволновая хирургия в Альтамед Голицино</p>
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
            {["Опытные врачи-акушеры-гинекологи", "Кольпоскопия и гинекологические манипуляции", "Радиоволновая хирургия (эрозия, кондиломы, папилломы)", "Удобная запись и приём в Голицино"].map((text, i) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Гинекология в Голицино</h2>
          <p className="text-gray-600 mb-6">
            Гинеколог (врач-акушер-гинеколог) занимается диагностикой и лечением заболеваний женской репродуктивной системы: приём и консультация, кольпоскопия, мазки и онкоцитология, введение и удаление ВМС, радиоволновая хирургия (биопсия, удаление кондилом и папиллом, лечение эрозии шейки матки), пессарии, медикаментозное прерывание беременности, санация влагалища и другие гинекологические манипуляции.
          </p>
          <p className="text-gray-600">В «Альтамед Голицино» вы можете записаться к гинекологу и пройти обследование в Голицино.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Услуги гинеколога в Голицино</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Приём врача-акушера-гинеколога, гинекологические манипуляции и радиоволновая хирургия в Альтамед Голицино</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Услуги врача-акушера-гинеколога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {gynecologyServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация гинеколога</h2>
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
