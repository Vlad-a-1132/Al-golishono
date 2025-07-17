"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function MicroscopePage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // State for price categories
  const [activePriceCategory, setActivePriceCategory] = useState(0);

  // Price categories data for microscope treatment
  const priceCategories = [
    {
      title: "Консультации",
      services: [
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный", price: "2 000 руб." }
      ]
    },
    {
      title: "Услуги",
      services: [
        { name: "Лечение одного корневого канала первое посещение (механическая, медикаментозная, ультразвуковая обработка корневого канала, временное пломбирование корневого канала, временная пломба)", price: "5 300 руб." },
        { name: "Лечение двух корневых каналов первое посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, временное пломбирование корневых каналов, временная пломба)", price: "7 600 руб." },
        { name: "Лечение трёх корневых каналов в одно посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, пломбирование каналов (3-D обтурация), временная пломба)", price: "17 200 руб." },
        { name: "Лечение одного корневого канала в одно посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, пломбирование канала (3-D обтурация), временная пломба)", price: "8 400 руб." },
        { name: "Лечение четырех и более корневых каналов в одно посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, пломбирование каналов (3-D обтурация), временная пломба)", price: "21 600 руб." },
        { name: "Лечение одного корневого канала второе посещение (медикаментозная, ультразвуковая обработка корневых каналов, пломбирование канала (3-D обтурация), временная пломба)", price: "5 500 руб." },
        { name: "Лечение двух корневых каналов в одно посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, пломбирование каналов (3-D обтурация), временная пломба)", price: "12 800 руб." },
        { name: "Прочие лечебные манипуляции с использованием микроскопа ( до 60 мин.)", price: "6 000 руб." },
        { name: "Лечение трёх корневых каналов первое посещение (механическая, медикаментозная, ультразвуковая обработка корневых каналов, временное пломбирование корневых каналов, временная пломба)", price: "9 900 руб." },
        { name: "Лечение двух корневых каналов второе посещение (медикаментозная, ультразвуковая обработка корневых каналов, пломбирование каналов (3-D обтурация), временная пломба)", price: "8 000 руб." }
      ]
    }
  ];

  // Functions to scroll doctors slider
  const scrollDoctorsLeft = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollDoctorsRight = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Блок 1: Заголовок и картинка */}
      <section className="py-8 bg-gradient-to-br from-[#4A9B8E] to-[#25685C] relative">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: '83rem' }}>
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Лечение зубов под микроскопом</h1>
            <p className="text-base md:text-lg font-medium">
              Лечение зубов под микроскопом — современный стоматологический метод, который позволяет врачу детально рассмотреть поверхность каждого зуба или его внутренние структуры, что важно при эндодонтической терапии.
            </p>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
            <Image
              src="/images/dentisrty/микроскоп.jpg"
              alt="Лечение зубов под микроскопом"
              width={320}
              height={180}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Блок 2: Показания */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Показания</h2>
            <p className="mb-3">В числе показаний к лечению с использованием микроскопа могут быть:</p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><Link href="#" className="text-emerald-600 hover:underline">терапия кариеса</Link>, трещины на эмали;</li>
              <li>прямое художественное восстановление (эстетика зуба);</li>
              <li>лечение каналов;</li>
              <li>препарирование зубных единиц перед <Link href="#" className="text-emerald-600 hover:underline">протезированием</Link>.</li>
            </ul>
            <p className="mt-4">В стоматологии данный метод помогает не только при лечении, но и во время диагностики. Противопоказаний к использованию оптического прибора нет.</p>
          </div>
        </div>
      </section>

      {/* Блок 3: Противопоказания */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">В каких случаях не проводится (противопоказания)?</h2>
            <p className="mb-3">Лист противопоказаний к терапии включает:</p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>сильные аллергические реакции на местные анестетики или материалы, используемые в процедуре;</li>
              <li>тяжёлые формы болезней сердца и сосудов, при которых любое хирургическое вмешательство не рекомендуется без консультации кардиолога;</li>
              <li>острые инфекционные процессы в полости рта, требующие предварительного лечения;</li>
              <li>первый триместр беременности.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Блок 4: Процедура оказания услуги */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Процедура оказания услуги</h2>
            <ol className="list-decimal pl-6 space-y-4 text-base">
              <li><strong>Консультация и осмотр пациента.</strong> На первом этапе происходит тщательное изучение истории болезни пациента, обсуждение его жалоб и ожиданий. Проводится визуальное обследование полости рта для детального выявления всех патологий.</li>
              <li><strong>Диагностическая и подготовительная работа.</strong> На втором этапе проводится применение цифровой радиовизиографии или КТ. Микродиагностика под увеличением позволяет обнаружить мельчайшие повреждения и скрытые проблемы (например, начальные стадии кариеса).</li>
              <li><strong>Лечение под увеличением.</strong> На третьем этапе пациент ложится, а над ним канал зуба пациент не сидит, а располагается в кресле в положении лежа, доктор — за его спиной либо сбоку. После установки микроскопа на расстоянии 15-20 см от лица) стоматолог настраивает фокус и обзорный участок для своего помощника. Весь объём работы врач выполняет, смотря в лицо микроскопа. Процесс фиксируется камерой, встроенной в оборудование. Изображения с аппарата передаётся на монитор ассистента, который обязательно контролирует ход терапии и передаёт врачу необходимые инструменты и материалы. Иногда стоматологическое лечение может быть проведено без использования оптики, в некоторых случаях без данного оборудования качественно выполнить процедуру на качественно более высоком уровне, комфорта для пациента и самого врача. Конечная стоимость в этом случае увеличивается, при этом sama процедура проходит на качественно более высоком уровне, комфорта для пациента и самого врача.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Блок 5: Нужна ли подготовка? */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Нужна ли подготовка?</h2>
            <p className="mb-3">Подготовка к лечению кариеса или каналов зуба под микроскопом включает следующие пункты:</p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>соблюдение гигиены полости рта;</li>
              <li>воздержание от приема пищи в течение 3 часов перед началом манипуляций;</li>
              <li>при необходимости — предварительная консультация с анестезиологом.</li>
            </ul>
            <p className="mt-4">Врачебная подготовка предполагает подробное объяснение процесса с демонстрацией на экране микроскопа и выбор подходящей местной или седативной анестезии.</p>
          </div>
        </div>
      </section>

      {/* Блок 6: Рекомендации после лечения (реабилитация) */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Рекомендации после лечения (реабилитация)</h2>
            <p className="mb-3">После завершения процедуры врач даст некоторые рекомендации на период восстановления:</p>
            <div className="mb-4">
              <p className="font-medium mb-2">Первые часы</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Избегать горячей, холодной и твердой пищи в первые 24 часа.</li>
                <li>Не употреблять алкогольные напитки.</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2">В течение недели</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Избегать физических нагрузок и стрессовых ситуаций.</li>
                <li>Отказаться от посещения бань и саун.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 7: Мнение эксперта */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Мнение эксперта</h2>
            <p className="mb-4">Лечение зубных заболеваний с использованием операционного микроскопа представляет собой не просто приоритетный, но эволюционный шаг в стоматологии. Это инвестиция в здоровье пациента и профессиональный вызов для врачей.</p>
            <p className="mb-4">Сравнение с традиционными методами выявляет явные преимущества методики: мельчайшие повреждения корня зуба становятся отчетливо видимы, что позволяет избежать повторных вмешательств из-за неполного удаления инфекции или неправильной обработки каналов. Это напрямую влияет на долгосрочный успех лечения и сохранение зубов — ценность, которую сложно оценить только в денежном эквиваленте.</p>
          </div>
        </div>
      </section>

      {/* Блок 8: Преимущества лечения зубов под микроскопом */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Преимущества лечения зубов под микроскопом</h2>
            <ol className="list-decimal pl-6 space-y-4 text-base">
              <li><strong>Максимальная точность и бережное обращение.</strong> Благодаря усиленному визуальному восприятию, специалисты способны выявлять самые мелкие повреждения и проводить микрохирургические операции. Это делает минимальной вероятность ошибки и способствует максимально быстрой послеоперационной реабилитации врача и за счет точечной обработки только вредностной зоны.</li>
              <li><strong>Увеличение срока службы зубов.</strong> Применение микроскопа в пломбированных корневых каналах гарантирует исключительную точность. Это ведет к долгосрочным результатам соседства стерильности и правильное функциональное способности каналов. Качественное закрытие каналов продлевает службу плановостей.</li>
              <li><strong>Идеальное качество лечения с применением.</strong> Лечение зубов с использованием микроскопа позволяет проводить качественную работу, что особенно важно для достижения высоких эстетических результатов при восстановлении передних зубов. Речь идет о полном совпадении оттенков и структуры пломбированных материалов с окружающими тканями.</li>
              <li><strong>Мягкое воздействие на организм.</strong> Микроскопическая техника обеспечивает малоинвазивность лечения. Это существенно снижает болевые ощущения пациента во время и после вмешательства. Кроме того, практически полностью исключается риск развития серьезных осложнений вроде периостита или периодонтитов.</li>
              <li><strong>Улучшенные условия для врача.</strong> Микроскопическое оборудование предоставляет специалистам не только высокий уровень технического оснащения и значительно повышает уровень контроля над всеми этапами лечения. Это способствует более уверенной работе стоматолога, снижению усталости глаз и повышению общего профессионального комфорта.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact form section */}
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

      {/* Doctors section */}
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
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                      src="/images/doctors/prikule-elena-yurevna Альтамед-с Одинцово.png" 
                      alt="Прикуле Елена Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={210} 
                      height={120}
                      className="w-full h-full"
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
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50.webp" 
                      alt="Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
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
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Крошкин-Александр-Дмитриевич-Стоматолог-Альтамед-с-Одинцово-записаться-на-примем-8-_495_-255-44-50.webp" 
                      alt="Крошкин Александр Дмитриевич Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
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
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцов-Роман-Владимирович Альтамед-с Одинцово.webp" 
                      alt="Рубцов Роман Владимирович Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
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
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцова-Ольга-Юрьевна_-Стоматолог-хирург-—-Медицинский-центр-Альтамед-С.webp" 
                      alt="Рубцова Ольга Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
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
            <button 
              onClick={scrollDoctorsLeft} 
              className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollDoctorsRight} 
              className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Индикаторы слайдера для мобильных */}
            <div className="md:hidden flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Кнопка "Все врачи" */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center text-sm md:text-base hover:bg-gray-200">
              Все врачи
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center md:text-left mx-4 md:mx-0">
            Цены на лечение зубов под микроскопом в Одинцово
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden mx-4 md:mx-0">
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Левая навигационная панель */}
              <div className="w-full md:w-1/3 bg-slate-700">
                <div className="p-6">
                  <div className="space-y-2">
                    {priceCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePriceCategory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                          activePriceCategory === index
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{category.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activePriceCategory === index ? 'rotate-90' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Правая панель с ценами */}
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {priceCategories[activePriceCategory].title}
                  </h3>
                  <div className="h-1 bg-emerald-500 w-16 rounded"></div>
                </div>

                <div className="space-y-4">
                  {priceCategories[activePriceCategory].services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base leading-tight">
                          {service.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                        <span className="font-semibold text-emerald-600 text-sm md:text-base whitespace-nowrap">
                          {service.price}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
                    Записаться на консультацию
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4 mx-4 md:mx-0">
            С полным прайс-листом можно ознакомиться в регистратуре или{' '}
            <Link href="/prices" className="text-emerald-600 hover:text-emerald-700 underline">
              задать вопрос по телефону
            </Link>{' '}
            +8 (495) 255-44-50
          </p>

          <p className="text-xs text-gray-500 mt-2 mx-4 md:mx-0">
            * Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре или в контакт-центре по телефону +8 (495) 255-44-50.
          </p>

          <p className="text-xs text-gray-500 mt-2 mx-4 md:mx-0">
            Размещенный прайс не является офертой. Медицинские услуги оказываются на основании договора.
          </p>
        </div>
      </section>
    </div>
  );
} 