'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export default function PeriodonticsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг пародонтологии из fullServicesData с подкатегориями
  const fullServicesData = [
    {
      subtitle: "Приемы врача-стоматолога-пародонтолога",
      services: [
        { code: "", name: "Консультация пародонтолога", price: 800 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный", price: 2000 },
        { code: "", name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога повторный", price: 1500 }
      ]
    },
    {
      subtitle: "Профессиональная гигиена при заболеваниях пародонта",
      services: [
        { code: "", name: "Профессиональная гигиена при заболеваниях пародонта", price: 6000 },
        { code: "", name: "Компьютерная диагностика состояния пародонта", price: 1600 },
        { code: "", name: "Вектор терапия от", price: 700 }
      ]
    },
    {
      subtitle: "Кюретаж пародонтальных карманов",
      services: [
        { code: "", name: "Закрытый кюретаж пародонтальных карманов за зуб", price: 1500 },
        { code: "", name: "Открытый кюретаж пародонтальных карманов за зуб", price: 3000 },
        { code: "", name: "Кюретаж десен от", price: 900 }
      ]
    },
    {
      subtitle: "Хирургические операции",
      services: [
        { code: "", name: "Шинирование зубов за зуб", price: 2000 },
        { code: "А16.07.019", name: "Временное шинирование при заболеваниях пародонта/ без стоимости материала/, 1зуб", price: 1820 },
        { code: "", name: "Лоскутные операции от", price: 4500 },
        { code: "А16.07.040", name: "Лоскутная операция в полости рта, 4-6 зубов", price: 6040 },
        { code: "", name: "Закрытие рецессии десны от", price: 10000 }
      ]
    },
    {
      subtitle: "Лечение заболеваний пародонта",
      services: [
        { code: "", name: "Лечение гингивита", price: 4000 },
        { code: "", name: "Лечение пародонтита от", price: 8000 },
        { code: "А11.07.010", name: "Введение лекарственных препаратов в пародонтальный карман, 1 карман", price: 870 }
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
            <span className="text-gray-900">Пародонтология</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Пародонтология в Одинцово — лечение десен в «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Лечение заболеваний десен в Одинцово. Гингивит, пародонтит, пародонтоз. Профессиональное лечение и профилактика заболеваний пародонта в клинике «Альтамед-с».
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/Periodontology.webp"
                  alt="Пародонтология"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Лечение десен в Одинцово</div>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/yslugi/Periodontology.webp"
                alt="Пародонтология"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Пародонтология в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Лечение и профилактика заболеваний десен</p>
                <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое пародонтология в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Заболевания пародонта</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гингивит — воспаление десен
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Пародонтит — воспаление тканей вокруг зуба
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Пародонтоз — дистрофическое заболевание
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Рецессия десны — оголение корней зубов
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Методы лечения в «Альтамед-с»</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена и удаление зубного камня
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Кюретаж пародонтальных карманов
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Хирургические операции (лоскутные операции)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Шинирование подвижных зубов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Услуги пародонтологии в Одинцово
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
              <Link href="https://online.altamed-c.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-block">
                Записаться на консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Симптомы заболеваний пародонта в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🩸", title: "Кровоточивость десен", desc: "Особенно при чистке зубов" },
                { icon: "😣", title: "Болезненность десен", desc: "Дискомфорт при жевании" },
                { icon: "🦷", title: "Подвижность зубов", desc: "Расшатывание зубов" },
                { icon: "😰", title: "Отек и покраснение", desc: "Воспаление десен" },
                { icon: "🤢", title: "Неприятный запах", desc: "Стойкий запах изо рта" },
                { icon: "🦷", title: "Оголение корней", desc: "Рецессия десны" },
                { icon: "😬", title: "Зубной камень", desc: "Образование отложений" },
                { icon: "💔", title: "Карманы между зубами", desc: "Углубления в деснах" },
                { icon: "😣", title: "Боль при надавливании", desc: "Дискомфорт при прикосновении" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему важно лечить пародонтит в Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Предотвратить потерю зубов",
                  text: "Запущенный пародонтит приводит к расшатыванию и выпадению зубов. Своевременное лечение в стоматологии Одинцово позволяет сохранить зубы и восстановить здоровье десен.",
                  icon: "🦷"
                },
                {
                  title: "Улучшить общее здоровье",
                  text: "Заболевания пародонта связаны с риском сердечно-сосудистых заболеваний, диабета. Лечение в «Альтамед-с» Одинцово положительно влияет на весь организм.",
                  icon: "❤️"
                },
                {
                  title: "Восстановить эстетику",
                  text: "Здоровые десны — важная часть красивой улыбки. Лечение пародонтита в Одинцово восстанавливает естественный вид десен и зубов.",
                  icon: "✨"
                },
                {
                  title: "Избавиться от дискомфорта",
                  text: "Воспаление десен вызывает боль, кровоточивость, неприятный запах. Профессиональное лечение в клинике Одинцово устраняет все эти симптомы.",
                  icon: "😊"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость пародонтологии */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Стоимость лечения заболеваний пародонта в стоматологии Одинцово
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Цены на пародонтологическое лечение в клинике «Альтамед-с» Одинцово зависят от стадии заболевания и выбранного метода лечения. Пародонтология в Одинцово включает лечение гингивита, пародонтита, профессиональную гигиену и хирургические методы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Консервативное лечение в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Консервативное лечение заболеваний пародонта в стоматологии Одинцово включает профессиональную гигиену, кюретаж пародонтальных карманов и медикаментозную терапию. Эти методы эффективны на ранних стадиях заболеваний.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Профессиональная гигиена от 6000₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Закрытый кюретаж от 1500₽ за зуб
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лечение пародонтита от 8000₽
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Хирургическое лечение в Одинцово</h3>
                  <p className="text-gray-600 mb-3">
                    Хирургические методы в пародонтологии Одинцово применяются при запущенных формах заболеваний. Открытый кюретаж, лоскутные операции и закрытие рецессий позволяют восстановить здоровье десен.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Открытый кюретаж от 3000₽ за зуб
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Лоскутная операция от 4500₽
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Закрытие рецессии от 10000₽
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Точную стоимость пародонтологического лечения в стоматологии Одинцово можно узнать после консультации и диагностики. Мы предлагаем комплексные программы лечения с учетом стадии заболевания. Запишитесь на прием в «Альтамед-с» Одинцово для получения детальной информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Заболевания пародонта подробно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Заболевания пародонта в стоматологии Одинцово
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Гингивит в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Гингивит — это начальная стадия заболевания пародонта, проявляющаяся воспалением десен. Лечение гингивита в стоматологии Одинцово включает профессиональную гигиену, удаление зубного налета и камня. В клинике «Альтамед-с» Одинцово лечение гингивита проводится на ранних стадиях, что предотвращает развитие пародонтита.
                </p>
                <p className="text-gray-700">
                  Симптомы гингивита: кровоточивость десен, покраснение, отечность. При своевременном лечении в стоматологии Одинцово гингивит полностью излечим. Регулярная профессиональная гигиена в клинике Одинцово помогает предотвратить развитие заболевания.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Пародонтит в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Пародонтит — это воспаление тканей пародонта с образованием пародонтальных карманов и разрушением костной ткани. Лечение пародонтита в стоматологии Одинцово требует комплексного подхода: профессиональная гигиена, кюретаж карманов, медикаментозная терапия.
                </p>
                <p className="text-gray-700">
                  При запущенных формах пародонтита в клинике «Альтамед-с» Одинцово применяются хирургические методы: открытый кюретаж, лоскутные операции. Лечение пародонтита в стоматологии Одинцово направлено на остановку разрушения тканей и сохранение зубов.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Пародонтоз в Одинцово</h3>
                <p className="text-gray-700 mb-4">
                  Пародонтоз — это дистрофическое заболевание пародонта, характеризующееся убылью костной ткани без воспаления. Лечение пародонтоза в стоматологии Одинцово включает комплекс мер: профессиональную гигиену, физиотерапию, медикаментозное лечение.
                </p>
                <p className="text-gray-700">
                  В клинике «Альтамед-с» Одинцово лечение пародонтоза направлено на замедление процесса разрушения тканей. Регулярные поддерживающие курсы лечения в стоматологии Одинцово помогают сохранить зубы и замедлить прогрессирование заболевания.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Профилактика заболеваний пародонта */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Профилактика заболеваний пародонта в стоматологии Одинцово
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Домашний уход</h3>
                <p className="text-gray-700 mb-4">
                  Правильный домашний уход в пародонтологии Одинцово — это основа профилактики заболеваний десен. Регулярная чистка зубов, использование зубной нити и ирригатора помогают удалять налет и предотвращать воспаление десен.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Чистка зубов дважды в день правильной техникой
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Использование зубной нити для межзубных промежутков
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Применение ирригатора для массажа десен
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Профессиональная профилактика</h3>
                <p className="text-gray-700 mb-4">
                  Регулярная профессиональная гигиена в пародонтологии Одинцово необходима для удаления зубного камня и налета, которые невозможно удалить в домашних условиях. В клинике «Альтамед-с» Одинцово мы рекомендуем профессиональную чистку каждые 6 месяцев.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Профессиональная гигиена раз в 6 месяцев
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Вектор-терапия для лечения пародонтита
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярные осмотры пародонтолога в Одинцово
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-green-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Профилактика заболеваний пародонта в клинике «Альтамед-с» Одинцово — это комплекс мер, направленных на сохранение здоровья десен. Регулярная профессиональная гигиена в стоматологии Одинцово в сочетании с правильным домашним уходом позволяет предотвратить развитие гингивита и пародонтита. Специалисты пародонтологии Одинцово обучают пациентов правильным техникам ухода и подбирают индивидуальные программы профилактики.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

