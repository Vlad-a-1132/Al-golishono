"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NerveRemovalPage() {
  const [activePriceCategory, setActivePriceCategory] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { name: "Лечение", href: "/services/dentistry/treatment" },
    { name: "Наши врачи", href: "/doctors" },
    { name: "Цены", href: "/prices" },
    { name: "Заболевания", href: "/services/dentistry/diseases" }
  ];

  // Price categories data
  const priceCategories = [
    {
      title: "Консультации",
      services: [
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный", price: "2 000 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога повторный", price: "1 500 руб." }
      ]
    },
    {
      title: "Диагностика",
      services: [
        { name: "Дентальный рентгеновский снимок зуба", price: "1 300 руб." },
        { name: "Панорамный рентгеновский снимок зубов", price: "2 200 руб." },
        { name: "Панорамный снимок на аппарате \"Galileos\" (печать на бумаге, без описания)", price: "2 200 руб." }
      ]
    },
    {
      title: "Услуги",
      services: [
        { name: "Анестезия (аппликационная, инъекционная (инфильтрационная, интралигаментарная), проводниковая)", price: "от 550 руб." },
        { name: "Изоляция полости рта OptraGate / постановка коффердама", price: "610 руб." },
        { name: "Закрытие несформированного апекса корневого канала с использованием материала на основе МТА", price: "3 500 руб." }
      ]
    }
  ];

  // Function to scroll doctors slider left
  const scrollDoctorsLeft = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  // Function to scroll doctors slider right
  const scrollDoctorsRight = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги и цены</Link>
            <span className="mx-2">/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-500">Лечение зубов</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Удаление нерва зуба</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Удаление нерва зуба
            </h1>
            
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                Задать вопрос
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                Записаться на прием
              </button>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex gap-4 mb-8 ml-0 md:ml-4 lg:ml-8 overflow-x-auto">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`px-6 py-3 rounded-full border whitespace-nowrap transition-colors ${
                  index === 0 
                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50' 
                    : 'border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content block with description */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Кариес может сильно повреждать эмалевый слой зуба и достигать глубоких слоев. Чтобы сохранить собственный зуб, может потребоваться удаление нерва. Эта операция может проводиться и по другим показаниям. Существуют разные техники хирургического вмешательства, которые зависят от клинических особенностей. Рассмотрим, как проходит хирургическое лечение, где в Москве проводится эта процедура и какова цена удаления нервов зубов.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/lrljewhtciqqhbs61hxm5oax0x1cwmwd.jpg"
                    alt="Удаление нерва зуба"
                    width={320}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что такое удаление нерва зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mx-4 md:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Что такое удаление нерва зуба
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Нерв, артерии и вены – это главный компартмент пульпы, которая локализуется в толще зуба и отвечает за его трофику. Она обеспечивает физиологическое протекание биохимических реакций.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Удаление нерва зуба (депульпирование) проводится в тех случаях, когда реальных шансов спасти пульпу не остается. Вместе с тем, ее экстракция позволит спасти зубную единицу, которую можно будет пломбировать или накрыть коронкой.
            </p>
          </div>
        </div>
      </section>

      {/* Показания и противопоказания к удалению нерва зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Показания и противопоказания к удалению нерва зуба
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Основными поводами для хирургического лечения считаются следующие:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">тяжелый кариозный процесс, вовлекающий мягкие эндодонтальные ткани;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">воспалительное поражение пульпы;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">формирование кистозных полостей и гранулематозных разрастаний вследствие хронического процесса;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">воспалительная болезнь околозубных мягкотканных структур (периодонтит);</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">травматизация зуба с вовлечением пульпы;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">дефекты оказания стоматологической помощи;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">необходимость <Link href="/services/dentistry/single-crown" className="text-emerald-600 hover:text-emerald-700 underline">установки одиночной коронки</Link> или <Link href="/services/dentistry/bridge" className="text-emerald-600 hover:text-emerald-700 underline">ортопедического «моста»</Link>.</span>
                  </li>
                </ul>

                <p className="text-gray-700">
                  Удаление зубного нерва не осуществляется на фоне декомпенсированных соматических процессов, в остром периоде инфекционного процесса любой локализации и при нарушенной свертываемости крови.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-full max-w-80 h-64 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/kari12es.jpg"
                    alt="Показания к удалению нерва"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок записи на прием */}
      <section className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="relative overflow-hidden rounded-[30px]" style={{
            background: 'linear-gradient(135deg, #4A9B8E 0%, #3A8D7F 25%, #2E7A6D 50%, #25685C 75%, #1A5247 100%)',
            backgroundImage: `url('/images/dentisrty/фон.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
            {/* Абстрактные декоративные элементы */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
              {/* Левая часть с формой */}
              <div className="w-full lg:w-3/4 p-6 lg:p-8 z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Записаться на прием
                </h2>
                <p className="text-white/90 mb-6 text-sm lg:text-base">
                  поля, отмеченные * необходимы к заполнению
                </p>
                
                <form className="mb-4 max-w-2xl">
                  {/* Desktop layout - horizontal */}
                  <div className="hidden lg:flex gap-4 mb-4 items-end">
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Имя"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ____"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14 flex-shrink-0"
                    >
                      Заказать звонок
                    </button>
                  </div>
                  {/* Mobile layout - vertical */}
                  <div className="lg:hidden space-y-4 mb-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Имя"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ____"
                        className="w-full p-4 rounded-full border-0 bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none h-14"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg h-14"
                    >
                      Заказать звонок
                    </button>
                  </div>
                  
                  <p className="text-white/80 text-xs italic mb-2">
                    Нажимая на кнопку, вы даете согласие на{' '}
                    <span className="underline cursor-pointer hover:text-white">
                      обработку своих персональных данных
                    </span>
                  </p>
                </form>

                <div className="text-white/85 text-sm space-y-1">
                  <p>
                    Запись через сайт является предварительной. Наш сотрудник свяжется с Вами для подтверждения записи к специалисту.
                  </p>
                  <p>
                    Мы гарантируем неразглашение персональных данных и отсутствие рекламных рассылок по указанному вами телефону. Ваши данные необходимы для обеспечения обратной связи и организации записи к специалисту клиники.
                  </p>
                </div>
              </div>
              
              {/* Изображение врача внизу справа */}
              <div className="hidden lg:block absolute bottom-0 right-0 lg:right-8 z-10">
                {/* Белый округлый фон для врача */}
                <div className="absolute bottom-0 right-0">
                  <div 
                    className="w-80 h-96 bg-white/20 backdrop-blur-sm rounded-t-[140px] rounded-b-[40px]"
                    style={{
                      clipPath: 'ellipse(160px 200px at 50% 60%)'
                    }}
                  ></div>
                </div>
                
                {/* Изображение врача */}
                <div className="relative z-10">
                  <Image
                    src="/images/dentisrty/врач ф.png"
                    alt="Врач стоматолог"
                    width={350}
                    height={420}
                    className="object-contain max-h-[400px] lg:max-h-[420px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этапы удаления нерва зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-full max-w-80 h-64 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/nerv-zub.jpg"
                    alt="Этапы удаления нерва зуба"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Этапы удаления нерва зуба
                </h2>
                
                <p className="text-gray-700 mb-4">
                  До операции пациент проходит объективный осмотр врача и визуализирующее обследование. Первым делом требуется <Link href="/services/dentistry/x-ray" className="text-emerald-600 hover:text-emerald-700 underline">сделать рентген</Link>. На рентгенограмме стоматолог может оценить запущенность патологического процесса и степень вовлечения окружающих структур.
                </p>

                <p className="text-gray-700 mb-4">
                  Удаление эндодонтального нерва может проводиться одним из 2 способов – витальным и девитальным. Каждый из них также классифицируется на 2 варианта:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>ампутация</strong>, когда удаляется сосудисто-нервный пучок только на точечном отрезке;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>экстирпация</strong>, когда полностью удаляется вся пульпа.</span>
                  </li>
                </ul>

                <p className="text-gray-700 mb-4">
                  Основными этапами витального удаления нерва являются:
                </p>

                <div className="space-y-4 text-gray-700">
                  <div>
                    <span className="font-bold text-emerald-600">1.</span> проведение местного обезболивания, направленного на временное блокирование нервного импульса;
                  </div>
                  
                  <div>
                    <span className="font-bold text-emerald-600">2.</span> экстракция сосудисто-нервного пучка на начальном этапе или на всем протяжении (определяется клинической ситуацией);
                  </div>
                  
                  <div>
                    <span className="font-bold text-emerald-600">3.</span> установка лечебной повязки и временной пломбы;
                  </div>
                  
                  <div>
                    <span className="font-bold text-emerald-600">4.</span> контрольное посещение стоматолога через 1-2 недели для проведения постоянного пломбирования, которое возможно при отсутствии воспалительных изменений.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Реабилитация и восстановление после удаления нерва зуба */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mx-4 md:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Реабилитация и восстановление после удаления нерва зуба
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Удаление зубного нервного узла сопровождается травмированием тканей. Поэтому в течение 2-3 суток могут сохраняться болевые ощущения в оперированной области и отечность десны. Для их купирования стоматолог рекомендует нестероидные противовоспалительные препараты, которые принимаются по мере необходимости. Заживление обычно происходит в течение 1-1,5 недель.
            </p>

            <p className="text-gray-700 leading-relaxed">
              После удаления тканей, расположенных внутри зуба, рекомендуется орошать ротовую полость растворами с обеззараживающими свойствами, следовать правилам <Link href="/services/dentistry/hygiene" className="text-emerald-600 hover:text-emerald-700 underline">гигиены</Link> и посетить стоматолога в назначенный день.
            </p>
          </div>
        </div>
      </section>

      {/* Возможные осложнения */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Возможные осложнения
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Учет показаний и противопоказаний, строгое соблюдение техники операции позволяют провести экстракцию зубного нерва гладко. Если не придерживаться этих требований, то возможно развитие осложнений. В их числе могут быть:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">некачественная установка постоянной пломбы, когда она не заполняет полностью корневой канал, в результате чего болит зуб;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">отламывание концевых частей инструмента в труднодоступных местах канала (может случиться при экстракции нерва зуба мудрости);</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">повреждение стенок зубного корня (одного канала или нескольких).</span>
                  </li>
                </ul>

                <p className="text-gray-700">
                  Записаться на прием к стоматологу, чтобы пройти диагностику и наметить пути решения проблемы, можно по телефону <Link href="tel:+74952411549" className="text-emerald-600 hover:text-emerald-700 underline">+7 495 241 15 49</Link> или с помощью формы обратной связи.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-full max-w-80 h-64 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/острая зубная боль.jpg"
                    alt="Возможные осложнения"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества консультации стоматолога в «Альтамед-с» */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Преимущества консультации стоматолога в «Альтамед-с»
                </h2>
                
                <div className="space-y-4 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Широкий спектр услуг.</strong><br />
                    Стоматологические отделения для взрослых и детей открыты на базе крупнейших медицинских центров «Альтамед-с», представлена пародонтология, больше возможностей, чем в других стоматологических клиниках. В день визита можно посетить не только стоматолога, но и врачей любых медицинских специальностей (более 30 направлений), пройти компьютерную диагностику и необходимые лабораторные обследования.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Современное оборудование и материалы.</strong><br />
                    Отделения располагают современным лечебным и диагностическим оборудованием, есть возможность выполнять лечение под микроскопом, с использованием премедикации и под внутривенной седацией (во сне).
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-400 rounded-[30px] opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-400 rounded-[20px] opacity-60"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-300 rounded-full opacity-70"></div>
                  
                  {/* Main image container */}
                  <div className="relative z-10 w-80 h-64 md:w-96 md:h-80 rounded-[30px] overflow-hidden bg-white">
                    <Image
                      src="/images/dentisrty/advantage1.png"
                      alt="Стоматологический кабинет Альтамед-с"
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors slider section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши врачи стоматологи
          </h2>
          
          {/* Контейнер с врачами - единый слайдер для всех устройств */}
          <div className="relative mx-auto">
            {/* Горизонтальный слайдер для всех устройств */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 pb-6 md:pb-10 w-full overflow-x-auto scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={doctorsSliderRef}
              >
                {/* Врач 1 - Прикуле Елена Юрьевна */}
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden min-w-[260px] md:min-w-[290px] flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                      src="/images/doctors/prikule-elena-yurevna Альтамед-с Одинцово.png" 
                      alt="Прикуле Елена Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={210} 
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Прикуле Елена Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 2 - Ярулова Вероника Юрьевна */}
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden min-w-[260px] md:min-w-[290px] flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50.webp" 
                      alt="Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Ярулова Вероника Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 3 - Крошкин Александр Дмитриевич */}
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden min-w-[260px] md:min-w-[290px] flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Крошкин-Александр-Дмитриевич-Стоматолог-Альтамед-с-Одинцово-записаться-на-примем-8-_495_-255-44-50.webp" 
                      alt="Крошкин Александр Дмитриевич Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Крошкин Александр Дмитриевич</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2006 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Специальность — Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 4 - Рубцов Роман Владимирович */}
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden min-w-[260px] md:min-w-[290px] flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцов-Роман-Владимирович Альтамед-с Одинцово.webp" 
                      alt="Рубцов Роман Владимирович Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцов Роман Владимирович</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2000 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>

                {/* Врач 5 - Рубцова Ольга Юрьевна */}
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden min-w-[260px] md:min-w-[290px] flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцова-Ольга-Юрьевна_-Стоматолог-хирург-—-Медицинский-центр-Альтамед-С.webp" 
                      alt="Рубцова Ольга Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцова Ольга Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2001 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-хирург, стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Навигационные кнопки для слайдера */}
            <div className="hidden md:flex justify-center mt-6 gap-4">
              <button
                onClick={scrollDoctorsLeft}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-gray-600 hover:text-emerald-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollDoctorsRight}
                className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-gray-600 hover:text-emerald-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Price section */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            Цены на удаление нерва зуба
          </h2>
          
          {/* Price categories tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {priceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActivePriceCategory(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activePriceCategory === index
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Price list */}
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {priceCategories[activePriceCategory].title}
              </h3>
              
              <div className="space-y-4">
                {priceCategories[activePriceCategory].services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 flex-1">{service.name}</span>
                    <span className="text-emerald-600 font-medium ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
              Записаться на прием
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 