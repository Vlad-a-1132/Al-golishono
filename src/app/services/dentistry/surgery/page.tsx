'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function SurgeryDentistryPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг хирургической стоматологии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога-хирурга",
      services: [
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-хирурга первичный, 1 ед.", price: 370 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-хирурга повторный, 1 ед.", price: 290 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-хирурга первичный (составление плана лечения по данным диагностики)", price: 3500 }
      ]
    },
    {
      subtitle: "Удаление зубов, прочие операции и услуги",
      services: [
        { code: "", name: "Удаление зуба, 1ед.", price: 2170 },
        { code: "", name: "Удаление зуба сложное, 1ед.", price: 4830 },
        { code: "", name: "Удаление зуба с разъединением корней, 1 ед.", price: 8370 },
        { code: "", name: "Операция удаления ретинированного, дистопированного или сверхкомплектного зуба, 1 ед.", price: 10400 },
        { code: "", name: "Удаление временного зуба с физиологической подвижностью, 1 ед.", price: 1260 },
        { code: "", name: "Хирургическая обработка раны или инфицированной ткани, 1 ед.", price: 1760 },
        { code: "", name: "Вскрытие и дренирование абсцесса полости рта, 1 ед.", price: 2670 },
        { code: "", name: "Гингивэктомия, 1 зуб", price: 1280 },
        { code: "", name: "Цистотомия или цистэктомия. Удаление ретенционной кисты слизистой полости рта, 1 ед.", price: 7870 },
        { code: "", name: "Наложение шва на слизистую оболочку рта, 1 ед.", price: 760 },
        { code: "", name: "Наложение швов до 2см., 1ед.", price: 830 },
        { code: "", name: "Наложение швов до 5см, 1ед.", price: 1400 },
        { code: "", name: "Снятие послеоперационных швов, 1ед.", price: 650 },
        { code: "", name: "Резекция верхушки корня с ретроградным пломбированием с использованием МТА, 1 зуб", price: 16740 },
        { code: "", name: "Кюретаж лунки удаленного зуба, 1 ед.", price: 1020 },
        { code: "", name: "Перевязка после хирургического вмешательства, 1ед.", price: 320 },
        { code: "", name: "Первичная хирургическая обработка раны, 1ед.", price: 650 },
        { code: "", name: "Остановка луночного кровотечения, 1 зуб", price: 510 },
        { code: "", name: "Остановка луночного кровотечения с использованием гемостатических материалов, 1 зуб", price: 1220 },
        { code: "", name: "Дренирование гнойной раны, 1 ед.", price: 510 },
        { code: "", name: "Лечение альвеолита/ одно посещение/", price: 1020 },
        { code: "", name: "Введение препарата \"Альвостаз\"Alvogyl\"NEOKONES\", 1ед.", price: 320 }
      ]
    },
    {
      subtitle: "Имплантология",
      services: [
        { code: "", name: "Внутрикостная дентальная имплантация (винтового) импланта системы Implantium Dentium/ без ст-ти матеиала/", price: 36780 },
        { code: "", name: "Внутрикостная дентальная имплантация (винтового) импланта системы Osstem", price: 42000 },
        { code: "", name: "Внутрикостная дентальная имплантация временного импланта", price: 19020 },
        { code: "", name: "Внутрикостная дентальная имплантация (винтового) импланта системы Straumann", price: 94500 },
        { code: "", name: "Установка формирователя десны Dentium", price: 6300 },
        { code: "", name: "Внутрикостная дентальная имплантация: установка формирователя десны на имплант Osstem (Корея)", price: 6300 },
        { code: "", name: "Внутрикостная дентальная имплантация: установка инпланта Osstem (Корея)", price: 42000 },
        { code: "", name: "Внутрикостная дентальная имплантация: раскрытие дентального имплантата", price: 3150 },
        { code: "", name: "Внутрикостная дентальная имплантация: извлечение интегрированного имплантата", price: 7140 },
        { code: "", name: "Внутрикостная дентальная имплантация: извлечение дезинтегрированного имплантата", price: 3150 },
        { code: "", name: "Хирургический шаблон (1 имплантат)", price: 6300 },
        { code: "", name: "Синус-лифтинг (костная пластика, остеопластика) открытый (без стоимости остеоиндуктивного материала)", price: 53260 },
        { code: "", name: "Синус-лифтинг (костная пластика, остеопластика) открытый (со стоимостью остеоиндуктивного материала+мембр.)", price: 90000 },
        { code: "", name: "Синус-лифтинг (костная пластика, остеопластика) закрытый (без стоимости остеоиндуктивного материала)", price: 30430 },
        { code: "", name: "Операция имплантации барьерной мембраны (без стоимости мембраны)", price: 6350 },
        { code: "", name: "Забор аутотрансплантанта кости из внутриротовых участков", price: 15220 },
        { code: "", name: "Операция направленной регенерации кости (НРК) (без стоимости остеоиндуктивного материала) 1ед.", price: 38050 },
        { code: "", name: "Операция реконструкции костного гребня 2-х сторонними блоками (3D пластика)", price: 50470 },
        { code: "", name: "Расщепление альвеолярного гребня", price: 19020 },
        { code: "", name: "Забор соединительнотканного трансплантанта", price: 7620 },
        { code: "", name: "Пластика мягких тканей в области имплантанта", price: 9640 },
        { code: "", name: "Увеличение зоны прикрепленной кератинизированной десны", price: 15980 },
        { code: "", name: "Удаление неинтегрированного импланта", price: 3810 },
        { code: "", name: "Удаление интегрированного импланта", price: 8880 },
        { code: "", name: "Изготовление индивидуального шаблона", price: 10150 },
        { code: "", name: "Подготовка альвеолярного гребня к имплантации", price: 8880 },
        { code: "", name: "Пластика альвеолярного гребня 1ед.", price: 25360 },
        { code: "", name: "Операция All-on-4 (включая удаление и формирователи)", price: 200000 }
      ]
    },
    {
      subtitle: "Челюстно-лицевая хирургия",
      services: [
        { code: "", name: "Пластика уздечки верхней губы, 1 ед.", price: 5330 },
        { code: "", name: "Пластика уздечки нижней губы, 1ед.", price: 5330 },
        { code: "", name: "Пластика уздечки языка, 1 ед.", price: 5330 },
        { code: "", name: "Вестибулопластика, 1 ед.", price: 15090 },
        { code: "", name: "Пластика перфорации верхнечелюстной пазухи, 1 ед.", price: 15090 },
        { code: "", name: "Пластика альвеолярного отростка нижней челюсти, 1ед.", price: 4570 },
        { code: "", name: "Коррекция объема и формы альвеолярного отростка, 1 ед.", price: 7620 },
        { code: "", name: "Гингивопластика. Устранение рецессии десны, 1 зуб", price: 15090 },
        { code: "", name: "Гингивопластика. Хирургическое удлинение коронковой части зуба, 1 ед.", price: 9010 },
        { code: "", name: "Гингивотомия, 1 ед.", price: 6850 },
        { code: "", name: "Лоскутная операция в полости рта, 4-6 зубов", price: 6350 },
        { code: "", name: "Иссечение новообразования мягких тканей, 1 ед.", price: 3180 }
      ]
    }
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
            <span className="text-gray-900">Хирургическая стоматология</span>
          </nav>
        </div>
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Хирургическая стоматология в клинике «Альтамед Голицыно»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Удаление зубов, имплантация и хирургические операции в Альтамед Голицыно
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/stom surgeon.webp" 
                alt="Хирургическая стоматология" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Стоматолог-хирург в Альтамед Голицыно: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед Голицыно» предлагает полный комплекс услуг стоматолога-хирурга в Альтамед Голицыно — от
                простого удаления зубов до сложных операций имплантации и челюстно-лицевой хирургии. Мы применяем
                передовые методики, современное оборудование и учитываем индивидуальные особенности каждого пациента,
                чтобы обеспечить безопасное и эффективное лечение.
              </p>
              <p>
                Врач-стоматолог-хирург составляет персональный план лечения, учитывая состояние зубов, костной ткани
                и пожелания пациента. У нас можно выполнить простое и сложное удаление зубов, установить импланты,
                провести костную пластику и синус-лифтинг, выполнить пластику мягких тканей и другие хирургические
                вмешательства.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость услуг стоматолога-хирурга в Альтамед Голицыно
                фиксируется заранее, а пациенты получают подробную смету с поэтапным планом лечения.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед Голицыно»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный протокол хирургического лечения с учётом состояния зубов, костной ткани и эстетики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Подготовку и сопровождение у команды узких специалистов: хирурга, имплантолога и ортопеда.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровое планирование операций, проверка по 3D-модели и пошаговый контроль процесса.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольный график визитов после операции, рекомендации по уходу и профилактике осложнений.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества услуг стоматолога-хирурга в «Альтамед Голицыно»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные хирурги</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-хирурги с опытом более 15 лет выполняют сложные операции и работают в связке
                с имплантологами и ортопедами для длительного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные методики</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем атравматичные методики удаления, одномоментную имплантацию, костную пластику и
                пластику мягких тканей по международным протоколам.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безболезненное лечение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Современная местная анестезия, седация и индивидуальные планы обезболивания минимизируют
                дискомфорт во время и после операции.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед операцией — пациент знает стоимость услуг стоматолога-хирурга до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Подробные рекомендации по уходу после операции, контрольные визиты и поддержка врача на всех этапах
                восстановления.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров и рекомендаций
                по профилактике.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Услуги хирургической стоматологии в Альтамед Голицыно
            </h2>
            
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
              <div className="space-y-8">
                {fullServicesData.map((subcat, subcatIndex) => (
                  <div key={subcatIndex} className="mb-6">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-emerald-500">
                      {subcat.subtitle}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {subcat.services.map((service, serviceIndex) => (
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
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                  Записаться на консультацию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Стоматолог-хирург в Альтамед Голицыно: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед Голицыно» — клиника, где услуги стоматолога-хирурга в Альтамед Голицыно проводятся по международным
              протоколам. Мы принимаем пациентов из Альтамед Голицыно и всего Одинцовского городского округа, поэтому
              запрос «стоматолог хирург Голицыно область» полностью закрывает наши услуги.
            </p>
            <p>
              Наши пациенты отмечают, что «стоматолог хирург Голицыно отзывы» в точности описывают результат:
              аккуратная работа хирургической команды и детальное сопровождение. Если вы ищете стоматологию,
              где «стоматология хирургия Голицыно» — это не просто слоган, а комплексная услуга, записывайтесь
              на консультацию стоматолога-хирурга или ознакомьтесь с другими направлениями на{" "}
              <Link href="/services/dentistry" className="text-emerald-600 hover:text-emerald-700 underline">
                странице стоматологии
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Особенности хирургической стоматологии в «Альтамед Голицыно» Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Безболезненное удаление зубов",
                  text: "Современная анестезия позволяет полностью исключить болевые ощущения во время удаления зубов. В клинике «Альтамед Голицыно» Альтамед Голицыно мы используем только качественные препараты для местной анестезии, что обеспечивает комфорт пациента.",
                  icon: "💉"
                },
                {
                  title: "Имплантация с гарантией",
                  text: "Профессиональная установка имплантов от ведущих производителей. В стоматологии Альтамед Голицыно мы гарантируем успешную остеоинтеграцию и долгосрочный результат имплантации.",
                  icon: "💎"
                },
                {
                  title: "Миниинвазивные операции",
                  text: "Современные техники позволяют выполнять операции с минимальным травмированием тканей. Быстрое заживление и минимальный дискомфорт после операций в стоматологии Альтамед Голицыно.",
                  icon: "🔬"
                },
                {
                  title: "Опытные хирурги",
                  text: "Наши врачи-хирурги имеют многолетний опыт выполнения сложных операций. В «Альтамед Голицыно» Альтамед Голицыно работают специалисты, прошедшие обучение по современным методикам.",
                  icon: "👨‍⚕️"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость хирургических услуг */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость хирургических услуг в стоматологии Альтамед Голицыно
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на хирургические услуги в клинике «Альтамед Голицыно» Альтамед Голицыно зависят от сложности операции, используемых материалов и объема работы. Хирургическая стоматология в Альтамед Голицыно включает удаление зубов, имплантацию, костную пластику и другие процедуры.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Удаление зубов в Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Удаление зубов в стоматологии Альтамед Голицыно проводится с использованием современной анестезии и инструментов. Простое удаление обходится дешевле, чем сложное с разъединением корней или удаление ретинированных зубов.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Простое удаление от 2060₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Сложное удаление от 4830₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Удаление ретинированного зуба от 9900₽
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Имплантация в Альтамед Голицыно</h3>
                  <p className="text-gray-600 mb-3">
                    Дентальная имплантация в клинике «Альтамед Голицыно» Альтамед Голицыно — это современный метод восстановления зубов. Цена включает установку импланта, при необходимости — костную пластику и синус-лифтинг.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Установка импланта от 35020₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Костная пластика от 36230₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Синус-лифтинг от 28980₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость хирургических услуг в стоматологии Альтамед Голицыно можно узнать после консультации и диагностики. Мы предлагаем рассрочку оплаты и комплексные программы лечения по доступным ценам. Запишитесь на прием в «Альтамед Голицыно» Альтамед Голицыно для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Когда нужна хирургическая стоматология */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Когда необходима помощь хирурга-стоматолога в Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🦷", title: "Необходимо удаление зуба", desc: "Когда зуб нельзя сохранить или он мешает лечению" },
                { icon: "💎", title: "Восстановление зубов имплантами", desc: "Современная альтернатива съемным протезам" },
                { icon: "🦴", title: "Недостаток костной ткани", desc: "Костная пластика перед имплантацией" },
                { icon: "😬", title: "Ретинированные зубы мудрости", desc: "Удаление непрорезавшихся зубов, вызывающих проблемы" },
                { icon: "⚕️", title: "Кисты и новообразования", desc: "Хирургическое удаление кист и гранулем" },
                { icon: "🔧", title: "Пластика мягких тканей", desc: "Коррекция уздечек, вестибулопластика" },
                { icon: "🦷", title: "Резекция верхушки корня", desc: "Сохранение зуба при патологиях верхушки корня" },
                { icon: "💉", title: "Синус-лифтинг", desc: "Увеличение объема кости в области верхнечелюстных пазух" },
                { icon: "🏥", title: "Челюстно-лицевая хирургия", desc: "Сложные операции на челюстях и мягких тканях" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Хирургическая стоматология в клинике «Альтамед Голицыно» Альтамед Голицыно — это комплекс современных хирургических методов лечения заболеваний зубов и полости рта. Опытные хирурги-стоматологи в Альтамед Голицыно выполняют операции любой сложности с использованием передовых технологий и качественной анестезии. Все процедуры в стоматологии Альтамед Голицыно проводятся в стерильных условиях с соблюдением всех стандартов безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Подробное описание хирургических процедур */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Подробное описание хирургических процедур в стоматологии Альтамед Голицыно
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Удаление зубов в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Удаление зубов в клинике «Альтамед Голицыно» Альтамед Голицыно проводится с использованием современной местной анестезии, что обеспечивает полное отсутствие болевых ощущений. Простое удаление применяется для зубов с полным прорезыванием и простым строением корней. Сложное удаление требуется при ретинированных зубах, зубах с разъединенными корнями или при наличии осложнений.
                </p>
                <p className="text-gray-700">
                  После удаления зуба в стоматологии Альтамед Голицыно врач проводит кюретаж лунки, накладывает швы при необходимости и дает рекомендации по уходу. Правильное удаление в клинике Альтамед Голицыно предотвращает развитие осложнений и обеспечивает быстрое заживление.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Дентальная имплантация в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Имплантация зубов в стоматологии Альтамед Голицыно — это современный метод восстановления утраченных зубов. В клинике «Альтамед Голицыно» Альтамед Голицыно мы используем импланты премиум-класса, которые полностью имитируют натуральные зубы. Процедура включает вживление титанового импланта в костную ткань челюсти.
                </p>
                <p className="text-gray-700">
                  Перед имплантацией в стоматологии Альтамед Голицыно проводится диагностика для оценки костной ткани. При недостатке кости выполняется костная пластика или синус-лифтинг. Имплантация в клинике Альтамед Голицыно позволяет восстановить как один зуб, так и весь зубной ряд с пожизненной гарантией.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Костная пластика и синус-лифтинг в Альтамед Голицыно</h3>
                <p className="text-gray-700 mb-4">
                  Костная пластика в стоматологии Альтамед Голицыно необходима при недостатке костной ткани для установки импланта. В клинике «Альтамед Голицыно» Альтамед Голицыно мы используем современные методы направленной регенерации кости с применением остеопластических материалов.
                </p>
                <p className="text-gray-700">
                  Синус-лифтинг в Альтамед Голицыно применяется при имплантации на верхней челюсти, когда требуется увеличить объем кости в области верхнечелюстных пазух. Процедура может быть открытой или закрытой, в зависимости от клинической ситуации. Опытные хирурги стоматологии Альтамед Голицыно проводят костную пластику с высокой точностью и минимальной травматичностью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Реабилитация после операций */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Реабилитация после хирургических вмешательств в стоматологии Альтамед Голицыно
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После удаления зуба</h3>
                <p className="text-gray-700 mb-4">
                  После удаления зуба в клинике «Альтамед Голицыно» Альтамед Голицыно важно соблюдать рекомендации врача для быстрого заживления и предотвращения осложнений. Врачи стоматологии Альтамед Голицыно дают подробные инструкции по уходу за полостью рта после операции.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Не принимать пищу в течение 2-3 часов после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полоскание антисептиками по назначению врача
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Исключить физические нагрузки в первые дни
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">После имплантации</h3>
                <p className="text-gray-700 mb-4">
                  Реабилитация после имплантации в стоматологии Альтамед Голицыно включает несколько этапов: период остеоинтеграции, установка формирователя десны и последующее протезирование. В клинике «Альтамед Голицыно» Альтамед Голицыно мы обеспечиваем полное сопровождение на всех этапах.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Соблюдение щадящей диеты после операции
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярные контрольные осмотры в клинике Альтамед Голицыно
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Остеоинтеграция занимает 3-6 месяцев
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-red-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Реабилитация после хирургических вмешательств в клинике «Альтамед Голицыно» Альтамед Голицыно проходит под контролем опытных специалистов. Врачи стоматологии Альтамед Голицыно дают подробные рекомендации и проводят контрольные осмотры для мониторинга процесса заживления. Правильная реабилитация обеспечивает успешный результат операции и долгосрочное здоровье полости рта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о стоматологе-хирурге в Альтамед Голицыно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Альтамед Голицыно</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Запрос «стоматолог хирург Голицыно отзывы» подтверждается историями пациентов: они отмечают
                безболезненность процедур, внимательное отношение и понятный план лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Операции проходят без осложнений, а реабилитация проходит быстро, что соответствует ожиданиям
                по запросу «стоматолог хирург в Альтамед Голицыно цены отзывы».
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортная реабилитация</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После операций в Альтамед Голицыно пациенты отмечают минимальный дискомфорт; врачи на связи 24/7
                и дают подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о стоматологе-хирурге в Альтамед Голицыно
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько стоит удаление зуба в Альтамед Голицыно в клинике «Альтамед Голицыно»?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Стоимость зависит от сложности удаления. Простое удаление — от 2 170 ₽, сложное удаление — от 4 830 ₽,
                удаление ретинированного зуба — от 10 400 ₽. Окончательный план лечения формируется после обследования
                и фиксируется в договоре.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Больно ли удалять зуб?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Нет, удаление зубов проводится под местной анестезией, поэтому процедура полностью безболезненна.
                Современные анестетики обеспечивают комфорт на протяжении всей операции.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени занимает заживление после удаления зуба?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Заживление лунки после простого удаления занимает 7-10 дней, после сложного удаления — до 2-3 недель.
                При соблюдении рекомендаций врача процесс проходит без осложнений.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Выполняете ли вы имплантацию зубов?
                </span>
                <svg
                  className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                Да, наши стоматологи-хирурги проводят дентальную имплантацию, костную пластику и синус-лифтинг.
                Мы используем импланты Straumann, Osstem, Dentium и другие системы мировых производителей.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Стоматолог-хирург в Альтамед Голицыно — начните с бесплатного плана лечения
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед Голицыно», чтобы узнать стоимость услуг стоматолога-хирурга,
                подобрать подходящий метод лечения и получить индивидуальный план с учётом ваших пожеланий.
              </p>
            </div>
            <Link
              href="https://reg.altamed-golitsino.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на приём
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед Голицыно» — стоматолог-хирург в Альтамед Голицыно",
                url: "https://altamed-golitsino.ru/services/dentistry/surgery",
                image: "https://altamed-golitsino.ru/images/dentisrty/stom surgeon.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "298"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Альтамед Голицыно",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Хирургическая стоматология",
                areaServed: "Альтамед Голицыно и Голицыно",
                description:
                  "Стоматолог-хирург в Альтамед Голицыно: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, синус-лифтинг и пластика мягких тканей.",
                sameAs: [
                  "https://altamed-golitsino.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

