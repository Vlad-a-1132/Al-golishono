"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppointmentForm from '@/components/AppointmentForm';

export default function UrologyPage() {
  // State for accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Услуги уролога (прайс Альтамед Голицыно)
  const urologyServicesList = [
    { code: "B01.053.001", name: "Прием (осмотр, консультация) врача-уролога", price: 2530 },
    { code: "B01.053.003", name: "Прием (осмотр, консультация) врача-детского уролога-андролога", price: 2420 },
    { code: "B04.053.001", name: "Диспансерный прием (осмотр, консультация) врача-уролога", price: 1820 },
    { code: "B04.053.003", name: "Диспансерный прием (осмотр, консультация) врача-детского уролога-андролога", price: 1820 },
    { code: "A11.28.006", name: "Получение уретрального отделяемого", price: 470 },
    { code: "A04.22.002", name: "Ультразвуковое исследование надпочечников", price: 1730 },
    { code: "A11.28.007", name: "Катетеризация мочевого пузыря", price: 2790 },
    { code: "A11.28.008", name: "Инстилляция мочевого пузыря", price: 2790 },
    { code: "A16.01.017", name: "Удаление доброкачественных новообразований кожи", price: 3060 },
    { code: "A25.22.001", name: "Назначение лекарственных препаратов при заболеваниях желез внутренней секреции", price: 5060 },
    { code: "A17.21.003", name: "Ректальное воздействие магнитными полями при заболеваниях мужских половых органов", price: 2130 },
    { code: "A17.30.019", name: "Воздействие переменным магнитным полем (ПеМП)", price: 1070 },
    { code: "A17.30.029", name: "Воздействие высокоинтенсивным импульсным магнитным полем", price: 2130 },
    { code: "A17.30.031", name: "Воздействие магнитными полями", price: 2130 },
    { code: "A22.30.006", name: "Вибрационное воздействие", price: 2400 },
    { code: "A24.21.001", name: "Ректальная гипертермия при заболеваниях мужских половых органов", price: 2130 },
    { code: "A25.21.001", name: "Назначение лекарственных препаратов при заболеваниях мужских половых органов", price: 6520 },
    { code: "A25.28.001", name: "Назначение лекарственных препаратов при заболеваниях почек и мочевыделительного тракта", price: 3190 },
    { code: "A11.21.004", name: "Сбор секрета простаты", price: 1600 },
    { code: "A21.21.001", name: "Массаж простаты", price: 1670 },
    { code: "A25.21.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях мужских половых органов", price: 5060 },
    { code: "A25.21.002", name: "Назначение диетического питания при заболеваниях мужских половых органов", price: 3190 },
    { code: "A25.28.003", name: "Назначение лечебно-оздоровительного режима при заболеваниях почек и мочевыделительного тракта", price: 5060 },
    { code: "A25.30.001", name: "Назначение лекарственных препаратов при неуточненных заболеваниях", price: 5060 },
    { code: "A25.30.003", name: "Назначение лечебно-оздоровительного режима при неуточненных заболеваниях", price: 3190 },
    { code: "A01.19.004", name: "Трансректальное пальцевое исследование", price: 870 },
    { code: "A01.21.002", name: "Визуальное исследование при патологии мужских половых органов", price: 400 },
    { code: "A01.21.003", name: "Пальпация при патологии мужских половых органов", price: 740 },
    { code: "A01.28.002", name: "Визуальное исследование при патологии почек и мочевыделительной системы", price: 400 },
    { code: "A01.28.003", name: "Пальпация при патологии почек и мочевыделительной системы", price: 740 },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Уролог Голицыно</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Уролог в Голицыно — приём в «Альтамед Голицыно»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Приём врача-уролога и детского уролога-андролога, диагностика и лечение в Голицыно
            </p>
          </header>

          {/* Static Banner */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/yslugi/yrolog.webp"
                    alt="Урология"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Уролог в Голицыно</div>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" 
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
                  src="/images/yslugi/yrolog.webp"
                  alt="Урология"
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Уролог в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём уролога, детского уролога-андролога, УЗИ, манипуляции и физиотерапия в Альтамед Голицыно</p>
                <Link 
                  href="https://reg.altamed-golitsino.ru/" 
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

      {/* Почему Альтамед Голицыно */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему «Альтамед Голицыно»?
          </h2>
          {/* Мобильная версия - вертикальный список */}
          <div className="md:hidden space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium text-left pt-2">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>

          {/* Десктопная версия - 4 колонки */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 1"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">
                Лечение в соответствии с мировыми клиническими рекомендациями
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 2"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <p className="text-gray-700 font-medium">
                Комплексная оценка заболевания и прогноза лечения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 3"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <p className="text-gray-700 font-medium">
                Современное диагностическое оборудование и собственная диагностическая лаборатория
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img
                  src="/images/yslugi/star 1.webp"
                  alt="Звезда 4"
                  className="w-full h-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">4</span>
              </div>
              <p className="text-gray-700 font-medium">
                Высокий уровень сервиса и взвешенная ценовая политика
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Услуги уролога в Голицыно
          </h2>

          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; уточняйте стоимость при записи.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Уролог</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {urologyServicesList.map((service, index) => (
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

      {/* What we treat section */}
      <section className="py-16 bg-white" aria-labelledby="what-we-treat-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="what-we-treat-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Что мы лечим
          </h2>
          
          <div className="space-y-6 text-gray-700 mb-8">
            <p>
              В «Альтамед Голицыно» в Голицыно принимают врачи-урологи и детские урологи-андрологи. Проводятся приём, диспансерный приём, УЗИ надпочечников, катетеризация и инстилляция мочевого пузыря, сбор секрета простаты, массаж простаты, физиотерапия и другие услуги по прейскуранту. Стоимость уточняйте при записи.
            </p>
          </div>

          {/* Alphabetical list of conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">А</div>
              <div className="space-y-1 text-sm">
                <div>Аденома простаты</div>
                <div>Азооспермия</div>
                <div>Амилоидоз почек</div>
                <div>Ангиолипома</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Б</div>
              <div className="space-y-1 text-sm">
                <div>Баланопостит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">В</div>
              <div className="space-y-1 text-sm">
                <div>Варикоцеле</div>
                <div>Везикулит</div>
                <div>Воспаление почек (нефрит)</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
              <div className="space-y-1 text-sm">
                <div>Гематурия</div>
                <div>Гидронефроз</div>
                <div>Гидроцеле</div>
                <div>Гипоактивный мочевой пузырь</div>
                <div>Гипогонадизм</div>
                <div>Гломерулонефрит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Д</div>
              <div className="space-y-1 text-sm">
                <div>Дивертикул мочевого пузыря</div>
                <div>Дисплазия мочевого пузыря</div>
                <div>Диссинергия детрузора и сфинктера</div>
                <div>Доброкачественная гиперплазия предстательной железы</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">З</div>
              <div className="space-y-1 text-sm">
                <div>Заболевания передающиеся половым путем (ЗППП)</div>
                <div>Задержка мочи</div>
                <div>Задержка полового развития</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">И</div>
              <div className="space-y-1 text-sm">
                <div>Импотенция и бесплодие</div>
                <div>Интерстициальный нефрит</div>
                <div>Искривление полового члена</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">К</div>
              <div className="space-y-1 text-sm">
                <div>Камни в мочевом пузыре</div>
                <div>Камни в мочеточнике</div>
                <div>Камни в почках</div>
                <div>Киста почки</div>
                <div>Киста придатков яичка (сперматоцеле)</div>
                <div>Киста семенного канатика</div>
                <div>Киста урахуса</div>
                <div>Кондиломы</div>
                <div>Короткая уздечка</div>
                <div>Короткая уздечка полового члена</div>
                <div>Крипторхизм</div>
                <div>Куперит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
              <div className="space-y-1 text-sm">
                <div>Лейкоплакия мочевого пузыря</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">М</div>
              <div className="space-y-1 text-sm">
                <div>Микоплазмоз</div>
                <div>Молочница у мужчин</div>
                <div>Мочевой синдром</div>
                <div>Мочекаменная болезнь</div>
                <div>Мужское бесплодие</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Н</div>
              <div className="space-y-1 text-sm">
                <div>Недержание мочи</div>
                <div>Нейрогенный (автономный) мочевой пузырь</div>
                <div>Нефроптоз (опущение почки)</div>
                <div>Нефросклероз</div>
                <div>Ночной энурез</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
              <div className="space-y-1 text-sm">
                <div>Опухоль мочевого пузыря</div>
                <div>Опухоль мочеточника</div>
                <div>Опухоль яичка</div>
                <div>Опущение почки</div>
                <div>Орхит</div>
                <div>Орхоэпидидимит</div>
                <div>Острая задержка мочи</div>
                <div>Острый гломерулонефрит</div>
                <div>Острый пиелонефрит</div>
                <div>Острый простатит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">П</div>
              <div className="space-y-1 text-sm">
                <div>Папилломо-вирусная инфекция</div>
                <div>Паранефрит</div>
                <div>Парафимоз</div>
                <div>Песок в почках</div>
                <div>Пиелит</div>
                <div>Пиелонефрит</div>
                <div>Пиелоэктазия</div>
                <div>Повреждение почки</div>
                <div>Подковообразная почка</div>
                <div>Поликистоз почек</div>
                <div>Полип уретры</div>
                <div>Посткоитальный цистит</div>
                <div>Почечная колика</div>
                <div>Почечная недостаточность</div>
                <div>Преждевременная эякуляция</div>
                <div>Простатит</div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600 mb-4">Р</div>
              <div className="space-y-1 text-sm">
                <div>Рак мочевого пузыря</div>
                <div>Рак полового члена</div>
                <div>Рак почки</div>
                <div>Рак предстательной железы</div>
                <div>Рак уретры</div>
                <div>Рак яичка</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">С</div>
              <div className="space-y-1 text-sm">
                <div>Свищ мочевого пузыря</div>
                <div>Синдром хронической тазовой боли</div>
                <div>Склероз шейки мочевого пузыря</div>
                <div>Стриктура уретры</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
              <div className="space-y-1 text-sm">
                <div>Травма мочевого пузыря</div>
                <div>Травмы полового члена</div>
                <div>Трихомониаз</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">У</div>
              <div className="space-y-1 text-sm">
                <div>Уремия</div>
                <div>Уретероцеле</div>
                <div>Уретрит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ф</div>
              <div className="space-y-1 text-sm">
                <div>Фимоз</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Х</div>
              <div className="space-y-1 text-sm">
                <div>Хламидиоз</div>
                <div>Хронический пиелонефрит</div>
                <div>Хронический простатит</div>
                <div>Хронический цистит</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Ц</div>
              <div className="space-y-1 text-sm">
                <div>Цистит</div>
                <div>Цистит (у женщин)</div>
                <div>Цистит у мужчин</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Э</div>
              <div className="space-y-1 text-sm">
                <div>Энурез</div>
                <div>Эпидидимит</div>
                <div>Эректильная дисфункция</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            </div>
            <div className="relative">
              <img 
                src="/images/yslugi/yrolog.webp" 
                alt="Урология" 
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="py-16 bg-white" aria-labelledby="reasons-heading">
        <div className="max-w-6xl mx-auto px-8">
          <h2 id="reasons-heading" className="text-2xl font-bold text-gray-800 mb-8">
            Поводы обращения к врачу-урологу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">проблемы с мочеиспусканием;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">жжение и зуд;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение внешнего вида половых органов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">изменение запаха, цвета и объема мочи;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">боли или ощущение дискомфорта (внизу живота, в пояснице, в области промежности, в паху и половых органах);</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">травма мочеполовых органов;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">наличие выделений из уретры;</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700">какие-либо видимые изменения семени (у мужчин).</span>
            </div>
          </div>
        </div>
      </section>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}

