'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function ProstheticsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const fullServicesData = [
    {
      subtitle: "Снятие коронок",
      services: [
        { code: "", name: "Снятие несъемной ортопедической конструкции. Снятие коронки пластмассовой или штампованной металлической, 1 единица", price: 1090 },
        { code: "", name: "Снятие несъемной ортопедической конструкции. Снятие цельнолитой, металлокомпозитной, металлокерамической коронки, 1 ед.", price: 1730 }
      ]
    },
    {
      subtitle: "Восстановление зуба коронками",
      services: [
        { code: "", name: "Восстановление зуба коронкой пластмассовой, 1 единица", price: 2030 },
        { code: "", name: "Восстановление зуба коронкой литой, 1 единица", price: 6220 },
        { code: "", name: "Восстановление зуба коронкой литой фрезерованной, 1 единица", price: 6850 },
        { code: "", name: "Восстановление зуба коронкой металлокерамической NI-CR, 1 единица", price: 9900 },
        { code: "", name: "Восстановление зуба коронкой металлокомпозитной, 1 единица", price: 8000 },
        { code: "", name: "Восстановление зуба коронкой металлокерамической с фрезерованием поверхности, 1 единица", price: 10400 },
        { code: "", name: "Восстановление зуба коронкой металлокерамической на CO-CR сплаве, 1 единица", price: 13830 },
        { code: "", name: "Восстановление зуба коронкой с использованием культевой вкладки из Диоксида Циркония, 1 единица", price: 24860 },
        { code: "", name: "Восстановление зуба коронкой. Восстановление коронковой части молочного зуба металло-композитной коронкой, 1ед.", price: 7240 }
      ]
    },
    {
      subtitle: "Восстановление зуба вкладками",
      services: [
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка,литая 1 единица", price: 6220 },
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка разборная,литая 1 единица", price: 8760 },
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Вкладка с аттачменом, литая,1 единица", price: 11290 },
        { code: "", name: "Восстановление зуба вкладками, виниром, полукоронкой. Культевая вкладка из Диоксида Циркония, 1 единица", price: 24860 }
      ]
    },
    {
      subtitle: "Повторная фиксация",
      services: [
        { code: "", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия, на фосфат-цемент, 1 единица", price: 1020 },
        { code: "", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия, на стекло-цемент, 1 единица", price: 1730 },
        { code: "", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия, на композитный материал, 1 единица", price: 1590 },
        { code: "", name: "Повторная фиксация на постоянный цемент несъемных ортопедических конструкций. Фиксация изделия, изготовленного в других клиниках на композитный цемент Resinomer, 1 единица", price: 1590 }
      ]
    },
    {
      subtitle: "Протезирование съемными бюгельными протезами",
      services: [
        { code: "", name: "Протезирование съемными бюгельными протезами. Бюгель с кламерной системой крепления+литье, 1челюсть", price: 55670 },
        { code: "", name: "Протезирование съемными бюгельными протезами. Бюгель с микрозамками Bredent + литье,замки, 1челюсть", price: 68350 },
        { code: "", name: "Протезирование съемными бюгельными протезами. Бюгель с элементами микрозамковой и кламмерной систем крепления + литье, 1челюсть", price: 72150 },
        { code: "", name: "Протезирование съемными бюгельными протезами. Швенкригель односторонний, 1челюсть", price: 49330 },
        { code: "", name: "Протезирование съемными бюгельными протезами. Швенкригель двухсторонний, 1челюсть", price: 72150 },
        { code: "", name: "Бюгельный протез (Квадротти) Акри-Фри", price: 63000 }
      ]
    },
    {
      subtitle: "Протезирование полными съемными протезами",
      services: [
        { code: "", name: "Протезирование зубов полными съемными пластиночными протезами. Пластиночный протез с замковой системой крепления, 1челюсть", price: 32850 }
      ]
    },
    {
      subtitle: "Восстановление целостности зубного ряда",
      services: [
        { code: "", name: "Восстановление целостности зубного ряда съемными мостовидными протезами. Иммедиант протез, 1 ед.", price: 10650 }
      ]
    },
    {
      subtitle: "Протезирование на имплантатах",
      services: [
        { code: "", name: "Протезирование зуба с использованием имплантата. Коронка из диоксида циркония на имплантате (винтовая фиксация), 1 ед.", price: 45000 },
        { code: "", name: "Протезирование зуба с использованием имплантата. Коронка из диоксида циркония на имплантате (цементная фиксация),позиционирующий абатмент 1 ед.", price: 45000 },
        { code: "", name: "Протезирование зуба с использованием имплантата.Металлокерамическая коронка из кобальт-хром, 1 ед.", price: 34650 },
        { code: "", name: "Протезирование зуба с использованием имплантата.Металлокерамическая коронка из кобальт-хром (промежуточная), 1 ед.", price: 24150 },
        { code: "", name: "Протезирование зуба с использованием имплантата. Временная коронка на имплантате, 1 ед.", price: 8400 },
        { code: "", name: "Восстановление зубного ряда протезом All-on-4 временного +постоянного ношения с использованием армированной нити (включает слепки+мультиюниты)", price: 210000 },
        { code: "", name: "Протезирование зуба с использованием импланта: установка металлопластмасового протеза (фрезерованная балка) на 4-х имплантах", price: 336000 },
        { code: "", name: "Протезирование зуба с использованием импланта: установка металлопластмасового протеза (литая балка) на 4-х имплантах", price: 168000 },
        { code: "", name: "Протезирование зуба с использованием импланта: установка съемного балочного протеза с 4 замками на импланты", price: 196350 },
        { code: "", name: "Протезирование зуба с использованием импланта: установка съемного балочного протеза с 2 замками и импланты", price: 175350 },
        { code: "", name: "Протезирование зуба с использование импланта: установка съемного протеза на импланты с 4 шаровидными абатментами", price: 94500 },
        { code: "", name: "Протезирование зуба с использованием импланта: установка съемного протеза на импланты с 2 шаровидными абатментами", price: 73500 },
        { code: "", name: "Протезирование зуба с использованием импланта: коронка временная пластмасовая CAD/CAM на имплант", price: 10500 }
      ]
    },
    {
      subtitle: "Абатменты",
      services: [
        { code: "", name: "Протезирование зуба с использованием импланта: абатмент временный", price: 6300 },
        { code: "", name: "Протезирование зуба с использованием импланта: абатмент из диоксида циркония по технологии CAD/CAM", price: 18900 },
        { code: "", name: "Протезирование зуба с использованием импланта: абатмент титановый фрезерованный по технологии CAD/CAM", price: 15750 },
        { code: "", name: "Протезирование зуба с использованием импланта: абатмент шаровидный на имплант", price: 8930 },
        { code: "", name: "Протезирование зуба с использованием импланта: multi-unit", price: 10500 },
        { code: "", name: "Протезирование зуба с использованием импланта: слепочный трансфер и аналог", price: 6300 }
      ]
    },
    {
      subtitle: "Хирургические операции",
      services: [
        { code: "", name: "Операция закрытый синуслифтинг (без учёта костного материала)", price: 73500 },
        { code: "", name: "Операция направленная костная регенерация в области одного зуба.(без учёта костного материала)", price: 52500 },
        { code: "", name: "Операция открытый синуслифтинг (1 сегмент)", price: 26250 },
        { code: "", name: "Костная пластика простая (1 сегмент)", price: 73500 },
        { code: "", name: "Костная пластика сложная (1 сегмент)", price: 94500 },
        { code: "", name: "Пластика мягких тканей простая (1 сегмент)", price: 47250 },
        { code: "", name: "Пластика мягких тканей сложная (1 сегмент)", price: 68250 }
      ]
    },
    {
      subtitle: "Ортопедические конструкции",
      services: [
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической: армирование протеза", price: 19950 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической: замена матрицы в бюгельном протезе в ортопедии", price: 4730 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической: изготовление каппы при бруксизме", price: 6830 },
        { code: "", name: "Услуги по изготовлению ортопедической конструкции стоматологической: замена окклюзивного винта", price: 2630 }
      ]
    },
    {
      subtitle: "Исследования на диагностических моделях",
      services: [
        { code: "", name: "Исследования на диагностических моделях челюстей: хирургический шаблон для имплантации", price: 5250 },
        { code: "", name: "Исследования на диагностических моделях челюстей: навигационный шаблон для имплантации", price: 12600 }
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
            <span className="text-gray-900">Протезирование зубов</span>
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
                Протезирование зубов в клинике «Альтамед-с»
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                Коронки на имплантатах, металлокерамика и протез All-on-4 в Одинцово
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp" 
                alt="Протезирование зубов" 
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
              <h2 className="text-3xl font-bold text-gray-900">Протезирование зубов в Одинцово: почему выбирают нас</h2>
              <p>
                Клиника «Альтамед-С» предлагает полный комплекс протезирования зубов в Одинцово — от коронок
                и мостов до съемных протезов и протезирования на имплантах. Мы применяем современные материалы,
                передовые технологии и учитываем индивидуальные особенности каждого пациента, чтобы обеспечить
                функциональность и эстетику протезов.
              </p>
              <p>
                Врач-стоматолог-ортопед составляет персональный план протезирования, учитывая состояние зубов,
                прикус и пожелания пациента. У нас можно установить коронки из диоксида циркония, металлокерамики,
                съемные протезы и протезы на имплантах.
              </p>
              <p>
                Прозрачные цены позволяют планировать бюджет — стоимость протезирования зубов в Одинцово
                фиксируется заранее, а пациенты получают подробную смету с поэтапным планом лечения.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Что вы получаете, выбирая «Альтамед-С»
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персонализированный план протезирования с учётом состояния зубов, прикуса и эстетики.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Современные материалы: диоксид циркония, металлокерамика, съемные протезы.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Протезирование на имплантах для долговечного и эстетичного результата.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Контрольные визиты после протезирования и рекомендации по уходу за протезами.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества протезирования в «Альтамед-С»</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Опытные ортопеды</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Врачи-стоматологи-ортопеды с опытом более 15 лет выполняют протезирование зубов и работают
                с современными материалами для долговечного результата.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Современные материалы</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Используем диоксид циркония, металлокерамику, съемные протезы и протезы на имплантах
                от ведущих производителей.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эстетичные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Протезы изготавливаются с учетом индивидуальных особенностей пациента для естественного
                внешнего вида и комфорта.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Прайс фиксируется перед протезированием — пациент знает стоимость протезов до начала лечения.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Долговечные протезы</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Качественные материалы и правильная техника изготовления обеспечивают долгий срок службы протезов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантийное сопровождение</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Мы сопровождаем пациента на всех этапах — от консультации до контрольных осмотров и рекомендаций
                по уходу за протезами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Протезирование зубов в Одинцово: цены и отзывы пациентов
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-6">
            <p>
              Стоматология «Альтамед-С» — клиника, где протезирование зубов в Одинцове проводится по международным
              протоколам. Мы принимаем пациентов из Одинцово и всего Одинцовского городского округа.
            </p>
            <p>
              Наши пациенты отмечают качество протезов и комфорт при ношении. Если вы ищете стоматологию,
              где «протезирование зубов одинцово» — это не просто слоган, а качественная услуга, записывайтесь
              на консультацию стоматолога-ортопеда или ознакомьтесь с другими направлениями на{" "}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Цены на протезирование зубов в Одинцово
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            Стоимость протезирования зубов в клинике «Альтамед-С» формируется в зависимости от вида протеза
            и материала, но мы фиксируем цены в договоре, чтобы пациент точно понимал итоговую сумму.
          </p>
          
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
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться на протезирование
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Отзывы пациентов о протезировании зубов в Одинцово
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реальные отзывы из Одинцово</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Пациенты отмечают качество протезов, комфорт при ношении и эстетичный внешний вид
                после протезирования.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стабильные результаты</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Протезы служат долгие годы без проблем, обеспечивая функциональность и эстетику,
                что соответствует ожиданиям пациентов.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комфортное протезирование</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                После протезирования в Одинцове пациенты отмечают комфорт при ношении протезов; врачи дают
                подробные инструкции по уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Частые вопросы о протезировании зубов в Одинцово
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Какие виды протезов вы предлагаете?
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
                Мы предлагаем коронки из диоксида циркония и металлокерамики, мосты, съемные протезы
                и протезы на имплантах. Вид протеза выбирается индивидуально в зависимости от состояния
                зубов и пожеланий пациента.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Сколько времени занимает протезирование?
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
                Сроки протезирования зависят от вида протеза. Коронки и мосты изготавливаются за 1-2 недели,
                съемные протезы — за 2-3 недели. Протезирование на имплантах может занять больше времени
                в зависимости от этапов лечения.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-[20px] shadow-md border border-gray-100">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                  Есть ли гарантия на протезы?
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
                Да, мы предоставляем гарантию на работу врача и используемые материалы. При соблюдении рекомендаций
                по уходу протезы служат долгие годы без проблем.
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
                Протезирование зубов в Одинцово — начните с консультации
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь на консультацию в клинику «Альтамед-С», чтобы узнать стоимость протезирования,
                подобрать подходящий вид протеза и получить индивидуальный план лечения.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
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
                name: "Клиника «Альтамед-С» — протезирование зубов в Одинцово",
                url: "https://altamed-c.ru/services/dentistry/prosthetics",
                image: "https://altamed-c.ru/images/dentisrty/task_01kb5fptcdfe9vny2vy0fadwrt_1764342213_img_0.webp",
                medicalSpecialty: "Dental",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "312"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽₽",
                serviceType: "Протезирование зубов",
                areaServed: "Одинцово и Одинцовский городской округ",
                description:
                  "Протезирование зубов в Одинцово: коронки, мосты, съемные протезы, протезирование на имплантах, диоксид циркония и металлокерамика.",
                sameAs: [
                  "https://altamed-c.ru",
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

