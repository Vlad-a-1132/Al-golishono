"use client";

import Image from "next/image";
import Link from "next/link";

export default function FrontTeethPage() {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Блок 1: Заголовок и картинка */}
      <section className="py-8 bg-gradient-to-br from-[#4A9B8E] to-[#25685C] relative">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: '83rem' }}>
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Лечение передних зубов</h1>
            <p className="text-base md:text-lg font-medium">
              Фронтальная группа зубов отвечает не только за функциональность, но и эстетику улыбки. Наличие кариозных повреждений, пигментации, сколов и прочих дефектов могут создать дискомфорт и даже психологические комплексы. Проблема усугубляется еще тем, что толщина их эмали более тонкая (особенно в зоне шейки зуба), поэтому ее легко повредить, а проникновение инфекции происходит буквально за несколько недель. Главное – не затягивать с посещением стоматолога!
            </p>
            <p className="text-base md:text-lg font-medium mt-4">
              Используемые методики в «Альтамед-с» позволяют эффективно вернуть былую структуру и эстетику зубов с минимальным вмешательством. Мы устраним проблемы любой сложности!
            </p>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
            <Image
              src="/images/dentisrty/передние зубы.jpg"
              alt="Лечение передних зубов"
              width={320}
              height={180}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Блок 2: Почему появляется кариес? */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Почему появляется кариес?</h2>
            <p className="mb-4">Причин этому достаточно:</p>
            <ul className="list-disc pl-6 space-y-3 text-base">
              <li><strong>недостаточная гигиена.</strong> Остатки пищи, налет создают среду для размножения бактерий, особенно в области межзубных промежутков и пришеечной зоны;</li>
              <li><strong>потребление сахара.</strong> Фронтальные зубы не так хорошо очищаются в процессе жевания как премоляры/моляры;</li>
              <li><strong>тонкая эмаль.</strong> Небольшая толщина защитного барьера делает передние зубы крайне уязвимыми к кариесу, особенно при недостаточности фтора;</li>
              <li><strong>нарушение прикуса, кривизна.</strong> Наличие таких проблем приводит к более быстрому разрушению и поражению микробами;</li>
              <li><strong>наличие привычек что-либо грызть.</strong> Орехи, семечки, карандаши, ручки и прочее. Под механическим воздействием появляются микротрещины, куда быстро попадает инфекция.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Блок 3: Как развивается болезнь */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6 flex flex-col md:flex-row items-start">
            <div className="flex-1 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Как развивается болезнь</h2>
              <p className="mb-4">От очага заболевания до глубокого кариеса разделяет 4 этапа:</p>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li><strong>Меловое (белое) пятно.</strong> Говорит о истончении эмали.</li>
                <li><strong>Появление микротрещин.</strong> Повышается неприятная чувствительность к холодному/горячему/кислому.</li>
                <li><strong>Болезнь доходит до дентина.</strong> Зуб может появиться темный оттенок, усиливается боль.</li>
                <li><strong>Поражение дентина.</strong> Заметная полость, деформируется угол режущей кромки.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <Image
                src="/images/dentisrty/karies2.jpg"
                alt="Развитие кариеса"
                width={280}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Блок 4: Виды кариеса передних зубов */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Виды кариеса передних зубов</h2>
            <ul className="list-disc pl-6 space-y-3 text-base">
              <li><strong>Корневой:</strong> часто встречается у людей с заболеванием десен либо пожилых пациентов. Инфекция поражает корни, которые могут быть оголены из-за опущения десны.</li>
              <li><strong>Межзубной:</strong> локализуется в зубных промежутках. Трудно заметить, развивается медленно.</li>
              <li><strong>Пришеечный:</strong> данная зона чаще остальных подвергается инфекции, поскольку плохо очищается.</li>
              <li><strong>Поверхностный:</strong> представлен в виде белого пятна, образуется на поверхности зуба. Относится к начальной стадии развития болезни.</li>
              <li><strong>Глубокий:</strong> поражен дентин, пульпа зуба.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Затягивать с посещением врача не рекомендуется, дабы не усугубить ситуацию вплоть до удаления нерва либо зуба. Поэтому при появлении первых признаков нужно сразу записываться к специалисту: ощущение боли, повышенная чувствительность, появление пятен, изменение цвета зубов, застревание еды в межзубных промежутках.
            </p>
          </div>
        </div>
      </section>

      {/* Блок 5: Когда необходимо лечение */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Когда необходимо лечение</h2>
            <p className="mb-4">Основные показания:</p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>кариес;</li>
              <li>травмы, сколы;</li>
              <li>эстетические дефекты. Изменение цвета, неровности зубов, эрозия;</li>
              <li>коррекция формы. Неровные, поврежденные зубы;</li>
              <li>патологическая стираемость зубов. Возникает из-за неправильного прикуса, бруксизма;</li>
              <li>гипоплазия. Проблемы с эмалью зубов.</li>
              <li>потемнение;</li>
              <li>Противопоказания: тяжелые болезни, период лактации, ожидания ребенка, аллергия на препараты, гемофилия.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Блок 6: Реабилитация */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Реабилитация</h2>
            <p className="mb-4">После лечения передних зубов в течение 2-3 часов нельзя принимать пищу, напитки. Если пломба композитная, то пить можно, а прием пищи только через 2 часа, поскольку отвердение материала происходит спустя часы, указанного стоматологом.</p>
            
            <p className="mb-4">Важно соблюдать гигиену, использовать флосс, ополаскиватели, ирригатор (при возможности). Также нужно избегать физнагрузки несколько дней.</p>
            
            <p className="mb-4">Может наблюдаться отек, болезненные ощущения после прекращения действия обезболивающего. Для устранения дискомфорта используйте холодные компрессоры, анальгетики.</p>
            
            <p>Записаться к специалисту «Альтамед-с» можно по телефону *** либо на сайте. На стоимость процедуры влияет запущенность случая, количество зубных каналов, выбранная методика лечения.</p>
          </div>
        </div>
      </section>

      {/* Блок 7: Информационный блок */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <p className="text-center text-gray-700">
              Узнать подробности и записаться на консультацию специалиста вы можете по телефону: +7 (495) 255-44-50 или заполнив форму обратной связи.
            </p>
          </div>
        </div>
      </section>

      {/* Блок 8: Лечение */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">Лечение</h2>
            
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <p className="mb-6">Способ лечения кариеса на передних зубах подбирается в зависимости от стадии развития проблемы. Если кариес на начальном этапе, то используются консервативные методы, в противном случае прибегают к хирургическому лечению.</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Кариес только начал развиваться (консервативное лечение)</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">1) Диагностика</h4>
                    <p className="mb-3">Врач проведет тщательный осмотр состояния зубов: визуальный, при помощи флуоресценции (диагностические лампы) либо направит на рентген-графию. Полученные данные дадут полное представление о текущей ситуации и помогут выбрать оптимальный подход к лечению.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">2) Консервативное лечение подразумевает реминерализацию при помощи:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>фторирование.</strong> Гели, растворы наносят на поверхность зуба, что способствует укреплению эмали;</li>
                      <li><strong>ICON-лечение.</strong> Восстановление функциональности зуба без сверления. Наносится специальный состав, который заполняет микропоры и препятствует дальнейшему развитию инфекции;</li>
                      <li><strong>Дополнительно потребуется использовать зубные пасты с большим содержанием фтора и посещать стоматолога 1 раз в полгода.</strong></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Поверхностный кариес</h3>
                  <p className="mb-3">Глубокие ткани не затронуты, но имеются бороздки, микроскопические углубления:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">1) Диагностика</h4>
                      <p>Включает визуальный осмотр и рентген-снимок, чтобы верно оценить глубину поражения.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">2) Препарирование</h4>
                      <p>Проблемный участок обезболивается (дозировка подбирается всегда персонально) и вскрывается полость зуба. Далее убираются все некротические, пораженные фрагменты. Создается четкая форма для дальнейшего пломбирования. Последний шаг – обработка антисептиком для уничтожения всех бактерий.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">3) Установка пломбы</h4>
                      <p>Образованную полость заполняют композитными материалами, оттенок которых подбирается в соответствии с родным зубом. Материал наносится и полимеризуется (при помощи специальной лампы) послойно. Каждый слой затвердевает под воздействием света. Далее производится шлифовка и полировка, чтобы получить гладкость и блеск.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">4) Оценка прикуса</h4>
                      <p>Выполняется контроль прикуса, чтобы пломба не мешала смыканию зубов и отсутствовала дополнительная на него нагрузка.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Глубокий кариес</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">1) Диагностика</h4>
                      <p>Делается рентген-снимок для оценки корневых каналов и степени повреждения.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">2) Чистка каналов, удаление нерва</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 lg:w-80">
                <Image
                  src="/images/dentisrty/karies3.jpg"
                  alt="Лечение кариеса передних зубов"
                  width={320}
                  height={240}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <p className="mb-4">Делается укол с обезболивающим (место укола также может быть обезболено). Дозировка подбирается индивидуально. Далее зуб изолируется при помощи коффердама (это необходимо, чтобы бактерии, слюна не попали в полость). Выполняется вскрытие коронковой зубной полости. В пораженный корень вводится дезинфицирующий материал и убирается специальным инструментом (эндодонтический файл). Врач аккуратными движениями вычищивает или захватывает пульпу и выгребает ее из полости. Пациент болей не ощущает, поскольку используется качественная анестезия.</p>
              
              <p className="mb-4">Затем каналы очищаются и обрабатываются антисептиком. Полученная полость заполняется специальными герметиками.</p>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">3) Восстановление коронковой части</h4>
                <p>Делается при помощи композитной пломбы либо устанавливается коронка, если зуб сильно разрушен.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">4) Полировка, контроль</h4>
                <p>Поверхность зуба шлифуется для получения гладкости и блеска. Контролируется смыкание зубов. Если пломба мешает, то ее немного стачивают.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">Хирургическое лечение</h4>
                <p>В нашей клинике мы используем все возможные способы, чтобы избежать удаления зуба. Чаще всего применяется апексификация (резекция верхушки корня) - делается разрез для получения доступа к кости (в области корня). Затем удаляются все мертвые ткани и срезается верхушка корня (около 2-3 мм).</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">Реставрация и восстановление</h4>
                <p>В нашей клинике «Альтамед-с» мы используем такие техники как:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>виниры.</strong> Используются, когда структуры зубов. Это тонкие керамические или композитные накладки, которые фиксируются на переднюю поверхность зубов, скрывая дефекты: трещины, потемнения или неровности;</li>
                  <li><strong>коронки.</strong> Если кариес сильно разрушил зуб, и его структура не может быть восстановлена с помощью пломбы, применяется коронка. Изготавливаются из металла, керамики или металлокерамики. Процедура включает предварительное обтачивание зуба, снятие слепков по которому в зуботехнической лаборатории изготавливается коронка на зуб;</li>
                  <li><strong>протезы, импланты.</strong> Если зуб был полностью разрушен / удален, для восстановления используется имплантация. Имплант — титановый штифт, который вживляется в челюстную кость, имитируя корень зуба. После его интеграции с костью, на имплант устанавливается коронка.</li>
                </ul>
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
    </div>
  );
} 