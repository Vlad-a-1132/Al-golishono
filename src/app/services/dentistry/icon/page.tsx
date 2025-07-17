"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function IconPage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // State for price categories
  const [activePriceCategory, setActivePriceCategory] = useState(0);

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

  // Price categories data for ICON treatment
  const priceCategories = [
    {
      title: "Консультации",
      services: [
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога первичный", price: "2 000 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога повторный", price: "1 500 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога, к.м.н. первичный, амбулаторный", price: "3 700 руб." },
        { name: "Прием (осмотр, консультация) врача-стоматолога-терапевта/пародонтолога, к.м.н. повторный, амбулаторный", price: "3 500 руб." }
      ]
    },
    {
      title: "Диагностика",
      services: [
        { name: "Дентальный рентгеновский снимок зуба", price: "1 300 руб." },
        { name: "Повторное трехмерное рентгенологическое исследование челюстно-лицевой области размером: 15х15 см (без записи на CD, без описания), Gallileos, контроль на этапе лечения", price: "2 000 руб." },
        { name: "Панорамный рентгеновский снимок зубов", price: "2 200 руб." }
      ]
    },
    {
      title: "Услуги",
      services: [
        { name: "Анестезия (аппликационная, инъекционная (инфильтрационная, интралигаментарная), проводниковая)", price: "от 550 руб." },
        { name: "Изоляция полости рта OptraGate / постановка коффердама", price: "610 руб." },
        { name: "Лечение кариеса эмали без препарирования «Icon» (1 зуб)", price: "5 000 руб." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Блок 1: Заголовок и картинка */}
      <section className="py-8 bg-gradient-to-br from-[#4A9B8E] to-[#25685C] relative">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: '83rem' }}>
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Лечение кариеса системой ICON</h1>
            <p className="text-base md:text-lg font-medium">
              Традиционные методы лечения кариеса постепенно вытесняются неинвазивными аналогами. Лечение кариеса без сверления ICON – эффективный подход в борьбе с кариозными пятнами без применения бормашины. Эта методика используется на ранних стадиях кариеса и позволяет добиться полного излечения при лечении детского кариеса.
            </p>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
            <Image
              src="/images/dentisrty/icon.jpg"
              alt="Лечение кариеса системой ICON"
              width={320}
              height={180}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Блок 2: Немного фактов и статистики */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Немного фактов и статистики</h2>
            <p className="mb-3">Технология была запатентована в Германии компанией DMG в 2009 г., что открыло новый подход к борьбе с кариесом, не требующий механической обработки и сохраняющей структуру зуба.</p>
            <p className="mb-3">Согласно исследованиям, ICON используется в более чем 60 стран, а особую популярность имеет в Европе и США. В 95% случаев система успешно останавливает развитие болезни на первоначальном этапе срока, а также способствует восстановлению эстетики улыбки.</p>
            <p className="mb-3">Процедура особенно популярна при лечении молочных зубов, так как позволяет избежать травмирования растущих зубов, а также помогает уменьшить страх и тревогу у ребенка.</p>
            <p>Позволяет избежать развития кариеса, особенно в сочетании с профилактикой зубов, использованием фтора и другими процедурами.</p>
          </div>
        </div>
      </section>

      {/* Блок 3: Преимущества методики */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Преимущества методики</h2>
            <p className="mb-3">Основные из них:</p>
            <ul className="list-disc pl-6 space-y-3 text-base">
              <li><strong>отсутствие боли, дискомфорта.</strong> Нет необходимости применения бормашины, а следовательно, отсутствует боль, тревога (страх), использование обезболивающего;</li>
              <li><strong>подходит для детей без обезболивания,</strong> что особенно важно при лечении зубов у детей. Не используется бормашина, нет необходимости колоть анестетик, что минимизирует тревогу и страх у маленьких пациентов;</li>
              <li><strong>безопасен для беременных женщин.</strong> Не используется обезболивающее либо агрессивные химические элементы;</li>
              <li><strong>сохранение структуры зуба.</strong> Влияет на поддержание целостности и прочности зубной единицы;</li>
              <li><strong>эстетика.</strong> Удаляется неяркая пигментация, восстанавливается природный оттенок;</li>
              <li><strong>продолжительность эффекта.</strong> Дает долговременный результат.</li>
            </ul>
            <p className="mt-4">Из недостатков можно выделить лишь ограниченное действие (только на начальной стадии, когда бактерии не проникли глубоко в зубную ткань).</p>
            <p className="mt-3">Лечение кариеса системой ICON дает возможность максимально сохранить здоровую ткань.</p>
          </div>
        </div>
      </section>

      {/* Блок 4: Принцип технологии */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Принцип технологии</h2>
            <p>Суть лечения кариеса методом Icon проста – на пораженный участок наносится специальный кислотный гель, способствующий открытию микропор эмали. Затем зуб обрабатывается жидким инфильтрантом (полимером), который проникает в эти поры и становится твердым в ходе обработки УФ-лучом. В результате развитие кариеса прекращается, а проблемная область герметизируется, восстанавливая структуру зуба.</p>
          </div>
        </div>
      </section>

      {/* Блок 5: Когда рекомендуется Айкон */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6 flex flex-col md:flex-row items-start">
            <div className="flex-1 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Когда рекомендуется Айкон</h2>
              <p className="mb-3">Выделяют 3 основных показания:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>кариес не наблюдается в дентине (заболевание находится на ранней стадии);</li>
                <li>наличие белых, кариозных пятен, возникающих на фоне снижения минерализации зубной эмали либо после удаления ортодонтических конструкций;</li>
                <li>требуется выровнять цвет, убрать дефекты эмали.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <Image
                src="/images/dentisrty/icon1.jpg"
                alt="Показания для лечения системой ICON"
                width={280}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Блок 6: Противопоказания */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Противопоказания</h2>
            <p>Метод противопоказан при глубоком поражении зуба: задета дентин, начались воспалительные процессы. А также при наличии тяжелых заболеваний, острых инфекций, аллергии на лекарства и материалы.</p>
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

      {/* Блок 7: Как проходит лечение */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Как проходит лечение</h2>
            <p className="mb-4">Перед началом проводится беседа, визуальный осмотр для оценки состояния. Далее врач приступает к самой процедуре.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Этап 1. Подготовка зуба</h3>
                <p>Убирается налёт, зуб сушится для лучшего проникновения материала внутрь зубной эмали.</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Этап 2. Нанесение кислотного геля (Etch)</h3>
                <p>Etch - препарат на основе 15% хлористоводородной кислоты, необходим для лучшего проникновения инфильтранта. Процесс нанесения включает:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>непосредственное нанесение на подготовленный участок зуба при помощи аппликатора. Время выдержки - 3 минуты;</li>
                  <li>полимеризацию. Используется УФ-лампа для затвердевания компонента, что позволяет материалу плотно запечатать микропоры и остановить дальнейшее развитие кариеса;</li>
                  <li>повторное нанесение. При необходимости может быть выполнено повторное нанесение для максимальной герметизации;</li>
                  <li>полировку. После затвердевания зуб полируют для восстановления гладкой поверхности.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Этап 3. Сушка (использование компонента Dry)</h3>
                <p>Dry - 99% этанол, позволяющий убрать остатки влаги из микропор, улучшить адгезию инфильтранта к тканям зуба.</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Этап 4. Нанесение инфильтранта (Infiltrant)</h3>
                <p>Жидкая композитная субстанция на основе метакрилатов, обладающая высокой текучестью. Она проникает в микропоры, заполняя их и герметизируя пораженные участки.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 8: Рекомендации после лечения */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6 flex flex-col md:flex-row items-start">
            <div className="flex-1 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Рекомендации после лечения</h2>
              <p className="mb-4">После процедуры важно очищать межзубные пространства при помощи ирригаторов. Устройство эффективно устраняет микробы, остатки пищи, выступает в качестве профилактической меры против кариеса и налета.</p>
              
              <p className="mb-4">Чистите зубы 2 раза в день с использованием фторсодержащей пасты. Ополаскиватели с фтором помогут дополнительно укрепить эмаль.</p>
              
              <p className="mb-4">В течение первых 2 дней после процедуры стоит избегать употребления ягод, кофе, чая и прочих продуктов, способных окрасить эмаль. Это предотвратит появление нежелательной пигментации.</p>
              
              <p className="mb-4">Регулярные визиты к стоматологу (не менее 2 раз в год) помогут контролировать состояние зубов и своевременно проводить профессиональную гигиену.</p>
              
              <p>Важно ограничить курение и употребление алкоголя, сладкого, кислого.</p>
            </div>
                         <div className="flex-shrink-0 mt-6 md:mt-0">
               <Image
                 src="/images/dentisrty/icon2.jpg"
                 alt="Рекомендации после лечения"
                 width={280}
                 height={200}
                 className="rounded-xl object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Блок 9: Эффект */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Эффект</h2>
            <p className="mb-4">Продолжительность результата зависит от ряда факторов: индивидуальные особенности, качество гигиены, соблюдение рекомендаций и образ жизни пациента.</p>
            
            <p className="mb-4">В отличие от традиционных пломб, которые могут со временем изнашиваться и требовать замены, методика ICON не нарушает зубную структуру, а действует как герметизатор, предотвращая дальнейшее разрушение. По данным клинических исследований, эффект от лечения может сохраняться до 5 лет и дольше.</p>
            
            <p className="mb-4">Что влияет на длительность эффекта:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>гигиена.</strong> Ежедневный уход за зубами, использование зубного флосса и фторсодержащих средств укрепляют эмаль, предотвращая развитие нового кариеса;</li>
              <li><strong>диета, образ жизни.</strong> Частое употребление сладких или кислых продуктов, курение, частое употребление спиртного сильно сокращают срок действия эффекта от процедуры;</li>
              <li><strong>наличие ортодонтических проблем.</strong> Неровные зубы, скученность могут затруднять уход за зубами и способствовать образованию нового налета.</li>
            </ul>
            
            <p className="mb-4">Для поддержания эффекта важно посещать стоматолога 1 раз в полгода. Во время осмотра специалист «Альтамед-с» оценит состояние зубов, проведет профилактические процедуры и при необходимости.</p>
            
            <p className="mb-4">Со временем инфильтрант утрачивает свои защитные свойства и требует повторного проведения процедуры. Поскольку данный метод минимально инвазивный, то повторное лечение также не причинит вреда зубной ткани.</p>
            
            <p>Записаться к специалисту «Альтамед-с» можно по телефону либо на сайте. На стоимости лечения кариеса методом Айкон влияет количество пораженных участков. Врач проведет осмотр, оценит ситуацию и подберет правильный способ лечения. При необходимости ответит на все интересующие вопросы и даст рекомендации для профилактики развития стоматологических заболеваний.</p>
          </div>
        </div>
      </section>

      {/* Блок 10: Вопросы-ответы */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">Вопросы-ответы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Можно ли использовать метод ICON для лечения молочных зубов?</h3>
                <p>Да, поскольку он не вызывает болевых ощущений и не требует использования бормашины. Это делает процесс более комфортным для детей, снижая уровень стресса. К тому же, процесс занимает всего 15-30 минут, что удобно при работе с детьми, которые не могут долго усидеть на одном месте.</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Как много времени занимает?</h3>
                <p>Время обработки зависит от степени и количества поврежденных участков, а также персональных особенностей пациента. В целом лечение проходит быстро и комфортно в сравнении с традиционными методами.</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Как долго держится эффект от лечения?</h3>
                <p>Обычно эффект сохраняется в течение 5 лет, а иногда и до 10 лет. Продолжительность результата зависит от того, насколько хорошо клиент следует представленным рекомендациям и ухаживает за зубами. Во избежание повторного развития болезнетворной среды и сохранения защитных свойств необходимо следить за гигиеной и делать профосмотры.</p>
              </div>
            </div>
                     </div>
         </div>
       </section>

      {/* Слайдер с врачами */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Наши врачи</h2>
            
            {/* Десктопная версия с навигацией */}
            <div className="hidden md:block relative">
              {/* Навигационные кнопки */}
              <button 
                onClick={scrollDoctorsLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors -ml-6"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={scrollDoctorsRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors -mr-6"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Слайдер врачей */}
              <div 
                ref={doctorsSliderRef}
                className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
            
            {/* Мобильная версия */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {/* Врач 1 - Прикуле Елена Юрьевна */}
                <div className="w-[280px] h-[400px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] bg-gray-50">
                    <Image 
                      src="/images/doctors/prikule-elena-yurevna Альтамед-с Одинцово.png" 
                      alt="Прикуле Елена Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={210} 
                      height={120}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[220px]">
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
                <div className="w-[280px] h-[400px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] bg-gray-50">
                    <Image
                      src="/images/doctors/Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50.webp" 
                      alt="Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[220px]">
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
                <div className="w-[280px] h-[400px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] bg-gray-50">
                    <Image
                      src="/images/doctors/Крошкин-Александр-Дмитриевич-Стоматолог-Альтамед-с-Одинцово-записаться-на-примем-8-_495_-255-44-50.webp" 
                      alt="Крошкин Александр Дмитриевич Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[220px]">
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
                <div className="w-[280px] h-[400px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцов-Роман-Владимирович Альтамед-с Одинцово.webp" 
                      alt="Рубцов Роман Владимирович Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[220px]">
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
                <div className="w-[280px] h-[400px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцова-Ольга-Юрьевна_-Стоматолог-хирург-—-Медицинский-центр-Альтамед-С.webp" 
                      alt="Рубцова Ольга Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50" 
                      width={290} 
                      height={220}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[220px]">
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

            <div className="mt-8 text-center">
              <Link 
                href="/doctors"
                className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors inline-flex items-center gap-2"
              >
                Все врачи
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с ценами */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Цены на лечение кариеса системой ICON в Одинцово</h2>
          
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Левая панель с категориями */}
              <div className="lg:w-1/3 bg-gray-50 p-6">
                <h3 className="text-lg font-bold mb-6 text-gray-800">Категории услуг</h3>
                <div className="space-y-2">
                  {priceCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePriceCategory(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activePriceCategory === index
                          ? 'bg-emerald-500 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Правая панель с услугами */}
              <div className="lg:w-2/3 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {priceCategories[activePriceCategory].title}
                  </h3>
                  <div className="h-0.5 bg-emerald-500 w-16"></div>
                </div>
                
                <div className="space-y-4">
                  {priceCategories[activePriceCategory].services.map((service, index) => (
                    <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1 pr-4">
                        <p className="text-gray-800 leading-relaxed">{service.name}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="font-bold text-emerald-600 text-lg">{service.price}</span>
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