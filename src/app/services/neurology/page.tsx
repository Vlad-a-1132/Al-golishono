'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function NeurologyPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги невролога по прайсу (код, название, цена)
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

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <span className="text-gray-900">Неврология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Неврология в клинике «<span className="italic">Альтамед Голицыно</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний нервной системы у взрослых и детей в Голицыно
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/images allergoly/nevrolog.webp"
                    alt="Диагностика заболеваний нервной системы"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика заболеваний нервной системы</div>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопная версия */}
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src="/images/images allergoly/nevrolog.webp"
                  alt="Неврология в Голицыно"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Неврология в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний нервной системы</p>
                <Link 
                  href="https://online.altamed-c.ru/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Прайс услуг невролога — сразу после баннера */}
      <section className="py-12 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Услуги невролога в Голицыно
            </h2>
            <p className="text-gray-600">Приём врача-невролога, школы для больных (рассеянный склероз, эпилепсия, Паркинсон), реабилитация после инсульта и ЧМТ, блокады, ортопедические стельки ФормТотикс. Клиника Альтамед Голицыно.</p>
          </div>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Прайс услуг врача-невролога</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {neurologyServicesList.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString("ru-RU")} ₽</div>
                    </div>
                    <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 flex-shrink-0 text-center whitespace-nowrap">
                      Записаться
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему Альтамед Голицыно */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицыно»?</h2>
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium text-left pt-2">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium text-left pt-2">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium text-left pt-2">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="flex items-start gap-4"><div className="w-16 h-16 flex-shrink-0 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium text-left pt-2">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="1" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span></div><p className="text-gray-700 font-medium">Лечение в соответствии с мировыми клиническими рекомендациями</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="2" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span></div><p className="text-gray-700 font-medium">Комплексная оценка заболевания и прогноза лечения</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="3" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span></div><p className="text-gray-700 font-medium">Современное диагностическое оборудование и собственная диагностическая лаборатория</p></div>
            <div className="text-center"><div className="w-16 h-16 mx-auto mb-4 relative"><img src="/images/yslugi/star 1.webp" alt="4" className="w-full h-full object-contain" /><span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span></div><p className="text-gray-700 font-medium">Высокий уровень сервиса и взвешенная ценовая политика</p></div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Information Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация невролога в Голицыно - профессиональная диагностика заболеваний нервной системы
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Невролог в Голицыно - это медицинский специалист, который занимается диагностикой, лечением и профилактикой заболеваний нервной системы, позвоночника и сосудов. 
                  В клинике «Альтамед Голицыно» в Голицыно консультируют высококвалифицированные неврологи с многолетним стажем работы и глубокими знаниями в области неврологических заболеваний. 
                  Среди наших специалистов работают врачи высшей категории, кандидаты и доктора медицинских наук, активно участвующие в научно-исследовательской деятельности. 
                  Для получения качественной неврологической помощи в Голицыно и Московской области рекомендуем обратиться именно в «Альтамед Голицыно».
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Консультация невролога в Голицыно требуется при появлении головных болей, головокружений, нарушений координации, проблем с памятью, болей в спине или других симптомов неврологических заболеваний. 
                  Неврологические заболевания требуют профессионального подхода, поэтому самостоятельная диагностика крайне нежелательна. 
                  Наиболее эффективным решением станет обращение к опытному неврологу в «Альтамед Голицыно» в Голицыно. 
                  Наши специалисты проведут комплексное обследование, включая неврологический осмотр, инструментальные исследования, установят точный диагноз, разработают индивидуальную схему терапии и дадут рекомендации по профилактике неврологических заболеваний.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/nevrolog.webp" 
                  alt="Неврология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What we treat section */}
        <section className="py-16 bg-white" aria-labelledby="what-we-treat-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Что мы лечим
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                Обширные научные знания и большой практический опыт неврологов «Альтамед Голицыно» в Голицыно в сочетании с новейшим лечебно-диагностическим оборудованием обеспечивают эффективную медицинскую помощь пациентам при заболеваниях нервной системы, позвоночника и сосудов. А также последствия перенесенных инсультов, травм, операций на мозге и позвоночнике.
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
                <div className="space-y-1 text-sm">
                  <div>Аденома гипофиза</div>
                  <div>Амнезия</div>
                  <div>Аневризма сосудов головного мозга</div>
                  <div>Артериальная гипотензия</div>
                  <div>Артериовенозная мальформация</div>
                  <div>Атеросклероз сосудов головного мозга</div>
                  <div>Афазия</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Бессонница</div>
                  <div>Болезнь Альцгеймера</div>
                  <div>Болезнь Паркинсона</div>
                  <div>Брахицефалия</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
                <div className="space-y-1 text-sm">
                  <div>Вегетососудистая дистония</div>
                  <div>Вертебробазилярная недостаточность</div>
                  <div>Вертеброгенные болевые синдромы</div>
                  <div>Вирус Эпштейна-Барра</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Г</div>
                <div className="space-y-1 text-sm">
                  <div>Гемианопсия</div>
                  <div>Гидроцефалия</div>
                  <div>Глазная мигрень</div>
                  <div>Грыжа Шморля</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Д</div>
                <div className="space-y-1 text-sm">
                  <div>Деменция</div>
                  <div>Дизартрия</div>
                  <div>Дорсопатия</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">З</div>
                <div className="space-y-1 text-sm">
                  <div>Заболевания головного мозга, связанные с нарушением кровоснабжения, опухолями, инфекционными процессами</div>
                  <div>Задержка психического развития</div>
                  <div>Задержка психомоторного развития (ЗПМР)</div>
                  <div>Задержка развития речи (ЗРР)</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">И</div>
                <div className="space-y-1 text-sm">
                  <div>Инсульт</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">К</div>
                <div className="space-y-1 text-sm">
                  <div>Киста головного мозга</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
                <div className="space-y-1 text-sm">
                  <div>Ларингеальная дистония</div>
                  <div>Лицевая невралгия</div>
                  <div>Лунатизм</div>
                  <div>Люмбаго</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
                <div className="space-y-1 text-sm">
                  <div>Межпозвоночная грыжа</div>
                  <div>Межреберная невралгия</div>
                  <div>Менингит</div>
                  <div>Миастения</div>
                  <div>Мигрень</div>
                  <div>Миозит</div>
                  <div>Миозит мышц спины</div>
                  <div>Миофасциальный синдром</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Н</div>
                <div className="space-y-1 text-sm">
                  <div>Нарколепсия</div>
                  <div>Нарушение циркадианного ритма</div>
                  <div>Невралгия</div>
                  <div>Невралгия затылочного нерва</div>
                  <div>Невралгия тройничного нерва</div>
                  <div>Неврастения</div>
                  <div>Неврит: причины, симптомы, лечение</div>
                  <div>Неврозы</div>
                  <div>Невротические реакции</div>
                  <div>Нейрохирургические и неврологические функциональные расстройства</div>
                  <div>Нейроциркуляторная дистония</div>
                  <div>Нервный тик</div>
                  <div>Нестабильность позвоночника</div>
                  <div>Ночной энурез</div>
                  <div>Ночные кошмары</div>
                </div>
              </div>
            </div>
            
            {/* Additional columns for remaining letters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Column 5 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
                <div className="space-y-1 text-sm">
                  <div>Обмороки</div>
                  <div>Общее нарушение и недоразвитие речи (ОНР)</div>
                  <div>Остеохондроз</div>
                  <div>Остеохондроз грудного отдела</div>
                  <div>Остеохондроз поясничный</div>
                  <div>Остеохондроз шейного отдела позвоночника</div>
                </div>
              </div>

              {/* Column 6 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">П</div>
                <div className="space-y-1 text-sm">
                  <div>Парасомния</div>
                  <div>Патологические нарушения функций сердечно-сосудистой системы в постинфарктном и постинсультном периоде</div>
                  <div>Перенесенные травмы головы</div>
                  <div>Повреждение нерва</div>
                  <div>Полинейропатия</div>
                  <div>Полиомиелит</div>
                  <div>Последствия травматических повреждений позвоночника и спинного мозга</div>
                  <div>Прозопалгия</div>
                  <div>Протрузии межпозвоночных дисков</div>
                  <div>Психосоматические расстройства/заболевания</div>
                </div>
              </div>

              {/* Column 7 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
                <div className="space-y-1 text-sm">
                  <div>Радикулит</div>
                  <div>Рассеянный склероз</div>
                  <div>Расстройства речи, учебных навыков</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
                <div className="space-y-1 text-sm">
                  <div>Синдром Туретта</div>
                  <div>Синдром хронической тазовой боли</div>
                  <div>Синдром хронической усталости</div>
                  <div>Сосудисто-мозговая недостаточность</div>
                  <div>Спастическая дисфония</div>
                  <div>Спондилолистез</div>
                  <div>Спондилёз</div>
                  <div>Стеноз позвоночного канала</div>
                  <div>Стеноз сонных артерий</div>
                </div>
              </div>

              {/* Column 8 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">У</div>
                <div className="space-y-1 text-sm">
                  <div>Умственная отсталость</div>
                  <div>Утрата речи в результате инсульта, черепно-мозговой травмы, хирургического вмешательства</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
                <div className="space-y-1 text-sm">
                  <div>Фебрильные судороги</div>
                  <div>Фибромиалгия</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Х</div>
                <div className="space-y-1 text-sm">
                  <div>Хроническая бессонница</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
                <div className="space-y-1 text-sm">
                  <div>Энурез</div>
                  <div>Энцефалопатия</div>
                  <div>Эпилепсия</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons to consult neurologist section */}
        <section className="py-16 bg-gray-50" aria-labelledby="reasons-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Поводы обращения к врачу-неврологу
            </h2>
            
            <div className="space-y-4 text-gray-700 mb-6">
              <p>
                Показанием для срочной консультации невролога может стать любой из следующих симптомов:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">боль в различных частях тела (головные боли, неприятные ощущения в области шеи, спины, поясницы, в руках и ногах);</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">слабость, снижение или повышение тонуса в отдельных мышцах;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">приступы потери сознания или другие периодически повторяющиеся расстройства, обмороки;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">стрессы;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">нарушение координации, памяти, внимания, сна.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">снижение чувствительности в любой области тела;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">шаткая походка, нарушение координации движений, внезапные непроизвольные движения (судороги, нервный тик);</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">расстройство памяти;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">невралгии, невриты, невропатии;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">неясность зрения, нарушения слуха, вкуса, обоняния;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">головокружение, шум в ушах;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">нарушение сна;</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">искривление позвоночника;</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why consultation is important section */}
        <section className="py-16 bg-white" aria-labelledby="why-important-heading">
          <div className="max-w-6xl mx-auto px-8">
            <h2 id="why-important-heading" className="text-2xl font-bold text-gray-800 mb-8">
              Почему важна консультация невролога?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Нервная система регулирует работу всех органов и тканей, отвечает за связь между различными структурами организма, а также обеспечивает высшую нервную деятельность человека. Она представлена сложной системой нервных клеток и их отростков, которые формируют единую сеть с центрами в спинном и головном мозге. Сбой на любом участке работы может стать причиной нарушений чувствительности или двигательных функций, сбоев в работе внутренних органов, проблем с мышлением, памятью или речью.
              </p>
              
              <p>
                Симптомы многих неврологических расстройств похожи между собой, а иногда напоминают признаки других заболеваний. Только опытный специалист поможет разобраться в тонкостях клинической картины, поставить правильный диагноз и назначить лечение. Чем раньше человек обратится за помощью, тем больше шансов купировать неприятную симптоматику и остановить патологический процесс.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
