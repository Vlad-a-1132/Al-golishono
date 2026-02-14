'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function SurdologyPage() {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Услуги сурдологии, организованные по категориям
  const surdologyServices = [
    {
      category: 'Консультации врачей',
      services: [
        { name: 'Прием (осмотр, консультация) врача-оториноларинголога первичный', price: '3300' },
        { name: 'Прием (осмотр, консультация) врача-оториноларинголога повторный', price: '3100' },
        { name: 'Прием (осмотр, консультация) врача сурдолога-оториноларинголога первичный', price: '4000' },
        { name: 'Прием (осмотр, консультация) врача сурдолога-оториноларинголога повторный', price: '3300' },
        { name: 'Диспансерный прием (осмотр, консультация) врача сурдолога-ориноларинголога', price: '3700' },
        { name: 'Профилактический прием (осмотр, консультация) врача сурдолога-оториноларинголога', price: '3700' },
        { name: 'Диспансерный прием (осмотр, консультация) врача-оториноларинголога', price: '3000' },
        { name: 'Профилактический прием (осмотр, консультация) врача-оториноларинголога', price: '3000' }
      ]
    },
    {
      category: 'Инъекции и блокады',
      services: [
        { name: 'Инъекционное введение лекарственных препаратов в челестно-лицевую область', price: '1700' },
        { name: 'Внутриносовые блокады', price: '1700' },
        { name: 'Глоточные блокады с введением лекарственных препаратов', price: '2300' },
        { name: 'Заушные блокады с лекарственными препаратами', price: '2700' },
        { name: 'Эндоларингеальное введение лекарственных препаратов', price: '1900' },
        { name: 'Анемизация слизистой носа', price: '800' },
        { name: 'Инстилляция лекарственных препаратов при заболевании верхних дыхательных путей', price: '1700' },
        { name: 'Аппликация лекарственного препарата на слизистую оболочку полости рта', price: '1800' },
        { name: 'Введение лекарственных препаратов в наружный слуховой проход', price: '900' },
        { name: 'Введение лекарственных средств в барабанную полость', price: '2300' }
      ]
    },
    {
      category: 'Биопсии и пункции',
      services: [
        { name: 'Биопсия слизистой оболочки гортани', price: '3000' },
        { name: 'Биопсия слизистой оболочки полости носа', price: '3000' },
        { name: 'Биопсия слизистой оболочки носоглотки', price: '2300' },
        { name: 'Пункция околоносовых пазух', price: '3900' },
        { name: 'Биопсия слизистой гортани', price: '3000' },
        { name: 'Биопсия слизистой полости рта', price: '2200' },
        { name: 'Биопсия языка', price: '2200' },
        { name: 'Биопсия миндалины, зева и аденоидов', price: '2500' },
        { name: 'Пункция кисты полости рта', price: '2300' },
        { name: 'Пункция синусов', price: '2300' }
      ]
    },
    {
      category: 'Промывания и процедуры',
      services: [
        { name: 'Промывка околоносовых пазух и носоглотки', price: '2200' },
        { name: 'Промывка околоносовых пазух и носа методом вакуумного перемещения', price: '2300' },
        { name: 'Катетеризация придаточных пазух носа', price: '2300' },
        { name: 'Промывание лакун миндалин', price: '1900' },
        { name: 'Промывание верхнечелюстной пазухи', price: '2300' },
        { name: 'Промывание среднего уха', price: '3400' },
        { name: 'Продувание слуховой трубы', price: '1300' },
        { name: 'Катетеризация слуховой трубы', price: '950' },
        { name: 'Катетеризация слуховой трубы с введением лекарственных препаратов', price: '2500' }
      ]
    },
    {
      category: 'Хирургические операции',
      services: [
        { name: 'Механическая остановка кровотечения (передняя и задняя тампонада носа)', price: '3900' },
        { name: 'Передняя тампонада носа', price: '3000' },
        { name: 'Задняя тампонада носа', price: '3900' },
        { name: 'Удаление инородного тела глотки или гортани', price: '2900' },
        { name: 'Удаление полипов носовых ходов', price: '5400' },
        { name: 'Подслизистая вазотомия нижних носовых раковин', price: '3000' },
        { name: 'Удаление инородного тела носа', price: '2900' },
        { name: 'Вскрытие паратонзиллярного абсцесса', price: '4200' },
        { name: 'Репозиция костей носа', price: '4400' },
        { name: 'Вскрытие фурункула носа', price: '4600' },
        { name: 'Удаление новообразования глотки', price: '5400' },
        { name: 'Удаление новообразования глотки Эндоларингеальное', price: '3000' },
        { name: 'Иссечение синехий и атрезий носа', price: '3000' },
        { name: 'Дренирование фурункула наружного уха', price: '4700' },
        { name: 'Кюретаж наружного уха', price: '3200' },
        { name: 'Первичная хирургическая обработка раны наружного уха', price: '3700' },
        { name: 'Наложения швов на ушную раковину и наружный слуховой проход', price: '3700' },
        { name: 'Сшивание наружного уха', price: '4600' },
        { name: 'Миринготомия', price: '4600' },
        { name: 'Первичная хирургическая обработка раны уха', price: '3900' },
        { name: 'Иссечение тканей наружного уха', price: '3700' },
        { name: 'Удаление доброкачественного новообразования наружного слухового прохода', price: '4700' }
      ]
    },
    {
      category: 'Диагностические процедуры',
      services: [
        { name: 'Сбор анамнеза и жалоб при патологии органа слуха', price: '1700' },
        { name: 'Визуальное исследование при патологии органа слуха', price: '1600' },
        { name: 'Пальпация при патологии органа слуха', price: '750' },
        { name: 'Перкуссия при патологии органа слуха', price: '750' },
        { name: 'Сбор анамнеза и жалоб при патологии органа обоняния', price: '1700' },
        { name: 'Визуальное исследование при патологии органа обоняния', price: '1600' },
        { name: 'Пальпация при патологии органа обоняния', price: '750' },
        { name: 'Перкуссия при патологии органа обоняния', price: '750' },
        { name: 'Сбор анамнеза и жалоб при патологии полости рта', price: '1700' },
        { name: 'Визуальное исследование при патологии полости рта', price: '1600' },
        { name: 'Пальпация органов полости рта', price: '750' },
        { name: 'Перкуссия при патологии полости рта', price: '750' },
        { name: 'Осмотр органа слуха (отоскопия)', price: '1700' },
        { name: 'Видеоотоскопия', price: '2300' },
        { name: 'Осмотр барабанной перепонки с использованием микроскопа', price: '800' },
        { name: 'Сбор анамнеза и жалоб при заболеваниях верхних дыхательных путей', price: '1700' },
        { name: 'Визуальное исследование верхних дыхательных путей', price: '1600' },
        { name: 'Пальпация при заболеваниях верхних дыхательных путей', price: '700' },
        { name: 'Перкуссия при заболеваниях верхних дыхательных путей', price: '700' }
      ]
    },
    {
      category: 'Эндоскопические исследования',
      services: [
        { name: 'Осмотр верхних дыхательных путей с использованием дополнительных источников света, шпателя и зеркал', price: '1900' },
        { name: 'Исследование дыхательной и обонятельной функции (ольфактометрия)', price: '2300' },
        { name: 'Стоматофарингоскопия', price: '1700' },
        { name: 'Ларингоскопия', price: '1900' },
        { name: 'Видеоларингоскопия', price: '2300' },
        { name: 'Ларингоскопия с использованием стробоскопа', price: '4600' },
        { name: 'Фарингоскопия', price: '1700' },
        { name: 'Эпифарингоскопия', price: '1900' },
        { name: 'Эпифарингоскопия видеоэндоскопическая', price: '2300' },
        { name: 'Риноскопия', price: '1700' },
        { name: 'Эндоскопическая эндоназальная ревизия полости носа, носоглотки', price: '2300' },
        { name: 'Видеориноскопия', price: '2300' },
        { name: 'Задняя риноскопия', price: '1700' },
        { name: 'Фиброларингоскопия', price: '2300' },
        { name: 'Микроларингоскопия', price: '2300' },
        { name: 'Синусоскопия', price: '2300' },
        { name: 'Эпифаринголарингоскопия', price: '3000' },
        { name: 'Отоэндоскопия', price: '1700' }
      ]
    },
    {
      category: 'Аудиологические исследования',
      services: [
        { name: 'Вестибулометрия', price: '2300' },
        { name: 'Проведение калорической пробы', price: '3900' },
        { name: 'Исследование органов слуха с помощью камертона', price: '1700' },
        { name: 'Определение проходимости евстахиевой трубы', price: '1700' },
        { name: 'Исследование вызванной отоакустической эмиссии', price: '3000' },
        { name: 'Исследование слуха у новорожденного с помощью отоакустической эмиссии', price: '3000' },
        { name: 'Импедансометрия', price: '2300' },
        { name: 'Исследование функций слуховой трубы', price: '2300' },
        { name: 'Тимпанометрия', price: '2000' },
        { name: 'Исследование барофункции уха и придаточных пазух носа', price: '2500' },
        { name: 'Тональная аудиометрия', price: '2000' }
      ]
    },
    {
      category: 'УЗИ и дополнительные исследования',
      services: [
        { name: 'Ультразвуковое исследование околоносовых пазух', price: '1300' },
        { name: 'Ультразвуковое исследование гортани', price: '2000' },
        { name: 'Ультразвуковая дезинтеграция нижних носовых раковин', price: '2400' }
      ]
    },
    {
      category: 'Дополнительные процедуры',
      services: [
        { name: 'Получение материала из верхних дыхательных путей', price: '1700' },
        { name: 'Получение мазков со слизистой оболочки носоглотки', price: '1700' },
        { name: 'Получение мазков со слизистой оболочки ротоглотки', price: '1700' },
        { name: 'Сбор паразитов или микроорганизмов из уха', price: '3000' },
        { name: 'Получение отделяемого из наружного слухового прохода', price: '1900' },
        { name: 'Взятие крови из мочки уха', price: '1700' },
        { name: 'Удаление ушной серы', price: '1700' },
        { name: 'Удаление инородного тела из слухового отверстия', price: '2900' },
        { name: 'Рефлексотерапия при заболеваниях органа слуха', price: '3000' },
        { name: 'Массаж барабанных перепонок', price: '2400' }
      ]
    }
  ];

  // Заболевания по алфавиту
  const surdologyConditions = [
    { letter: 'Б', conditions: ['Болезнь Меньера'] },
    { letter: 'Г', conditions: ['Глухонемота'] },
    { letter: 'К', conditions: ['Киста головного мозга', 'Кондуктивная тугоухость', 'Кохлеарный неврит'] },
    { letter: 'Л', conditions: ['Лабиринтит'] },
    { letter: 'Н', conditions: ['Нейросенсорная тугоухость', 'Несиндромальная тугоухость'] },
    { letter: 'О', conditions: ['Оторея', 'Отосклероз', 'Ототоксическая потеря слуха'] },
    { letter: 'Т', conditions: ['Тугоухость (глухота)'] }
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
            <span className="text-gray-900">Сурдология</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Сурдология в клинике «<span className="italic">Альтамед Голицыно</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Диагностика и лечение заболеваний органов слуха в Голицыно
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            {/* Мобильная версия */}
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src="/images/images allergoly/sydrolog.webp"
                    alt="Диагностика и лечение слуха"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Диагностика и лечение слуха</div>
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
                <img
                  src="/images/images allergoly/sydrolog.webp"
                  alt="Сурдология в Голицыно"
                  className="w-full h-full object-cover"
                />
                {/* Белый градиентный слой */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Сурдология в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Профессиональная диагностика и лечение заболеваний органов слуха</p>
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

      {/* Почему Альтамед Голицыно*/}
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
        {/* Services Section */}
        <section className="py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Услуги сурдологии
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр диагностических и лечебных процедур для здоровья органов слуха
              </p>
            </div>

            <div className="space-y-8">
              {surdologyServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                                {service.name}
                              </h4>
                              <div className="text-emerald-600 font-semibold text-lg">
                                {service.price} ₽
                              </div>
                            </div>
                        <Link 
                          href="https://reg.altamed-golitsino.ru/" 
                          target="_blank"
                          rel="noopener noreferrer"
                              className="ml-3 bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0"
                            >
                              Записаться
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
                Наши врачи обладают необходимым уровнем квалификации. Специалисты могут оказывать квалифицированную помощь при большом количестве патологий. Все врачи прошли необходимое профессиональное обучение по специальности и являются высококвалифицированными. Применение на практике современных технологий и знаний дают возможность оказывать качественную медицинскую помощь нашим пациентам при следующих патологиях:
              </p>
            </div>

            {/* Alphabetical list of conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Б</div>
                <div className="space-y-1 text-sm">
                  <div>Болезнь Меньера</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Г</div>
                <div className="space-y-1 text-sm">
                  <div>Глухонемота</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">К</div>
                <div className="space-y-1 text-sm">
                  <div>Киста головного мозга</div>
                  <div>Кондуктивная тугоухость</div>
                  <div>Кохлеарный неврит</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Л</div>
                <div className="space-y-1 text-sm">
                  <div>Лабиринтит</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">Н</div>
                <div className="space-y-1 text-sm">
                  <div>Нейросенсорная тугоухость</div>
                  <div>Несиндромальная тугоухость</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600 mb-4">О</div>
                <div className="space-y-1 text-sm">
                  <div>Оторея</div>
                  <div>Отосклероз</div>
                  <div>Ототоксическая потеря слуха</div>
                </div>
                
                <div className="text-2xl font-bold text-emerald-600 mb-4 mt-6">Т</div>
                <div className="space-y-1 text-sm">
                  <div>Тугоухость (глухота)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons to consult section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Поводы обращения к врачу-сурдологу
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8 text-center">
              <p>
                Взрослому человеку следует записаться на прием к сурдологу в «Альтамед Голицыно» при различных проблемах. Все эти симптомы нельзя игнорировать, так как они не только вызывают дискомфорт, но и в целом снижают уровень качества жизни.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">снижение остроты слуха;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">головные боли и головокружения;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">после лечения с применением антибиотиков-аминогликозидов, которые обладают ототоксическим действием;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">при шуме или звоне в ушах, некомфортном восприятии громких звуков;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">если при отсутствии жалоб на снижении слуха со стороны пациента его окружающие замечают нарастающую тугоухость;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">утрата разборчивости речи;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">после перенесенного отита внутреннего (среднего) уха;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">после перенесенной черепно-мозговой травмы;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">при снижении остроты слуха на одно или оба уха;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">появление шумов в ушах;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">при диагностированном увеличении носоглоточных миндалин;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">при ощущении боли в ушах, дискомфорте в слуховых проходах;</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">при плохом восприятии речи окружающих;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Консультация хорошего врача-сурдолога в Голицыно
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Сурдология — это наука о нарушениях восприятия и проведения звука в органе слуха человека. 
                  Около 60% людей имеют проблемы со слухом, и сертифицированные врачи с опытом работы могут решить как симптомы, так и причины в специально оборудованных аудиологических кабинетах. 
                  В клинике «Альтамед Голицыно» ведут прием опытные сурдологи, которые занимаются диагностикой и лечением заболеваний органов слуха.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Снижение слуха значительно влияет на социальную адаптацию, а полная потеря слуха приводит к инвалидности. 
                  Сурдологи также занимаются социальной реабилитацией и адаптацией глухих пациентов. 
                  Если потеря слуха частичная, она компенсируется специальными техническими устройствами — слуховыми аппаратами. 
                  В компетенцию сурдолога входит назначение и непосредственный подбор оптимального слухового аппарата для конкретного пациента.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#appointment"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
                  >
                    Записаться на прием
                  </Link>
                  <Link 
                    href="tel:+74952554450"
                    className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
                  >
                    Позвонить
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/images allergoly/sydrolog.webp" 
                  alt="Сурдология" 
                  className="w-full h-auto rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-lg text-gray-600">
                Ответы на популярные вопросы о сурдологии
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('appointment')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Как проходит прием сурдолога в Москве</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['appointment'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['appointment'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Прием сурдолога включает комплексное обследование органов слуха и постановку точного диагноза.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Сбор анамнеза и анализ жалоб пациента</li>
                      <li>• Визуальный осмотр наружного уха и барабанной перепонки</li>
                      <li>• Аудиометрические исследования</li>
                      <li>• Тимпанометрия и импедансометрия</li>
                      <li>• Консультация по результатам обследования</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded('diagnostics')}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-colors duration-300 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold">Диагностика в сурдологии</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems['diagnostics'] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems['diagnostics'] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 mb-4">
                      Современная диагностика в сурдологии включает комплексное обследование с использованием высокотехнологичного оборудования.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Тональная аудиометрия</li>
                      <li>• Речевая аудиометрия</li>
                      <li>• Тимпанометрия</li>
                      <li>• Исследование отоакустической эмиссии</li>
                      <li>• Вестибулометрия</li>
                      <li>• УЗИ околоносовых пазух</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Записаться на прием */}
      <AppointmentForm />
    </div>
  );
}
