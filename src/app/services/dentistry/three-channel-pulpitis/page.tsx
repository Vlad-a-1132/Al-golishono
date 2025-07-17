"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ThreeChannelPulpitisPage() {
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // State for price categories
  const [activePriceCategory, setActivePriceCategory] = useState(0);

  // Price categories data for three-channel pulpitis
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
        { name: "Инфильтрационная анестезия (в зависимости от категории сложности)", price: "от 1 000 руб." }
      ]
    }
  ];

  const tabs = [
    { name: "Лечение", href: "/services/dentistry/treatment" },
    { name: "Наши врачи", href: "/doctors" },
    { name: "Цены", href: "/prices" },
    { name: "Заболевания", href: "/services/dentistry/diseases" }
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
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-500">Лечение зубов</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Лечение пульпита трехканального зуба</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 lg:mb-0">
              Лечение пульпита трехканального зуба
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

      {/* Main content block with teal background and pulpitis treatment image */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-[20px] p-8 mx-4 md:mx-0 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-white mb-6 lg:mb-0">
                <p className="text-lg leading-relaxed">
                  Лечение пульпита трехканального зуба - процедура, направленная на предотвращение боли, исключение воспалений при заболевании пульпы. Пульпит бывает на резцах, клыках в зубе мудрости. В них три канала, поэтому требуется комплексный терапевтический подход для предотвращения удаления зубов с глубокими полостями.
                </p>
              </div>
              
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-80 h-60 rounded-[20px] overflow-hidden bg-white">
                  <Image
                    src="/images/dentisrty/каналы.jpg"
                    alt="Лечение пульпита трехканального зуба"
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

      {/* Показания к процедуре */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Показания к процедуре
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">Симптомы определяются острой или хронической формой заболевания.</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">1) Острый пульпит боль носит характер хронической формы заболевания, когда поражены три канала зуба:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Пульсирующая боль носит длительный характер, затем обычно исчезает, но возращается спустя время.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">развивающиеся антибактериальные сильные, пульсирующие боли;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">ноющие толчки боли;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">увеличивающийся промежуток между приступами боли;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">боль, распространяющаяся на соседние области, виски и шею;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">повышенная чувствительность при употреблении горячей пищи.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">2) Хронический пульпит. Если человек не обращается в клинику с острым проявлением, то образуется хроническая форма. Признаки болезни становятся менее</h3>
                <p className="text-gray-700 mb-3">выраженными. Человек думает, что воспаление прошло, но это обманчиво. На самом деле процесс инфекции продолжается. Признаки:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">слабые боли, которые возникают из-за перепада температуры;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">возможное отсутствие боли.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Противопоказания */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row gap-8 mx-4 md:mx-0">
            <div className="lg:w-2/3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Противопоказания
              </h2>
              
              <p className="text-gray-700 mb-4">Лечение зуба не рекомендуется в случае:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">у пациента другое инфекционное заболевание в острой форме;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">женщины на первом и третьем триместре беременности;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">у пациента обострение хронической болезни;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">человек переносит вирусы или инфекции менее недели назад.</span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                Если пульпит угрожает жизни пациента и необходимо срочно провести лечение,
                то перечисленные пункты не будут считаться абсолютными противопоказаниями.
              </p>
            </div>
            
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <div className="w-full max-w-80 h-60 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/dentisrty/66.jpg"
                  alt="Противопоказания к лечению"
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Этапы лечения */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Этапы лечения
            </h2>
            
            <p className="text-gray-700 mb-6">Лечение пульпита 3-канального зуба проводят несколькими методами:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">1) Осмотр и консультация.</h3>
                <p className="text-gray-700">Прием стоматолога начинается с выяснения истории заболевания. Стоматолог определяет характер боли, когда появились симптомы, сколько длятся. Осмотр пациента проводится визуально на предмет состояния. Осмотр проводится ротовой полости.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">2) Диагностика.</h3>
                <p className="text-gray-700">Далее специалист осуществляет дополнительные обследования для установления верного диагноза. Применяется постукивание, зондирование, как реагирует зуб на воздействие раздражителями. Прежде всего обследуют глубину кариозной полости. Чтобы составить необходимый план терапии, назначают <Link href="/services/dentistry/diagnostics" className="text-emerald-600 hover:text-emerald-700 underline">рентген или компьютерную томографию</Link>.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">3) Проведение лечения.</h3>
                <p className="text-gray-700">Сначала выполняется <Link href="/services/dentistry/anesthesia" className="text-emerald-600 hover:text-emerald-700 underline">анестезия и изоляция рабочего поля</Link>. Затем специалист выбирает один из методов терапии, учитывая результаты обследования клиента. Возможно выполнить витальный метод, где специалист полностью удаляет пораженную пульпу из корневых каналов и полость пломбируется. Лечение проводится под местной анестезией или седацией. В первом случае пациент находится в сознании, но всё проводится под локальным обезболиванием. Во втором - пациент засыпает.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-700">Для полной экстирпации (удаления) пульпы применяют различные методы:</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Биологический - возможность биологического сохранения пульпы. Если пациент обратился во время первого периода в стоматологию, а воспаление только началось, то можно попробовать сберечь пульпу. При таком способе укладывают лекарственные прокладки в полость зуба, затем ставят временную пломбу. Через несколько дней стоматолог анализирует прогресс. Если практически отсутствует постоянная боль, то полость обрабатывают антисептическими составами и пломбируют. Спустя время устанавливается постоянная пломба.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Витальная ампутация - возможность частичного сохранения пульпы. Особенность трехканального моляра заключается в разделении на коронковую и корневую пульпу. Метод основывается на удалении коронковой части. Потом накладывают <Link href="/services/dentistry/medications" className="text-emerald-600 hover:text-emerald-700 underline">лекарственный состав и пломбируют</Link>. Спустя время <Link href="/services/dentistry/permanent-filling" className="text-emerald-600 hover:text-emerald-700 underline">устанавливается постоянная пломба</Link>.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Витальная экстирпация. Пульпа удаляется целиком, каналы обрабатываются и затем пломбируются. Для завершения всех процедур требуется еще одно посещение клиники.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Девитальная экстирпация. В первую очередь пульпа некротизируется специальным составом, затем ставится временная пломба. Через 3-7 суток пломбу удаляют, пульпу извлекают, обрабатывают каналы и пломбируют. Услуга осуществляется также за два посещения клиники.</span>
                </li>
              </ul>
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

      {/* Реабилитация */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="flex flex-col lg:flex-row gap-8 mx-4 md:mx-0">
            <div className="lg:w-2/3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Реабилитация
              </h2>
              
              <p className="text-gray-700 mb-4">Онемение после анестезии может длиться несколько часов. Пока не пройдёт полностью, не принимайте пищу, чтобы не прикусить язык или щёку.</p>
              
              <p className="text-gray-700 mb-4">После проведения процедуры может наблюдаться болезненный дискомфорт в области зуба, который подвергся воздействию. Неудобство пройдёт через некоторое время. Если сохраняется дольше двух недель или возникла острая боль, то нужно обратиться к врачу.</p>
              
              <p className="text-gray-700 mb-4">Чтобы пломба не потемнела, не употребляйте продукты с красителями. Например, чай, кофе. Не рекомендуется употреблять твёрдую пищу, чтобы не сколоть пломбу. К такой пище относятся орехи, сухари.</p>
              
              <p className="text-gray-700">Зубы без пульпы лишены внутреннего питания и минерализации, поэтому требуют особой заботы. Необходимо регулярно выполнять гигиенические процедуры дома и проводить профчистку в клинике.</p>
            </div>
            
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <div className="w-full max-w-80 h-60 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/dentisrty/77.jpg"
                  alt="Реабилитация после лечения"
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Профилактика */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gray-50 rounded-[20px] p-6 md:p-8 mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Профилактика
            </h2>
            
            <p className="text-gray-700 mb-4">
              Пульпит является итогом развивающегося кариеса. Поэтому основная профилактика - это <Link href="/services/dentistry/caries-treatment" className="text-emerald-600 hover:text-emerald-700 underline">лечение кариеса</Link> как можно раньше. Необходимо посещать вашего стоматолога минимум один раз в полгода.
            </p>
            
            <p className="text-gray-700 mb-4">
              Если вы заинтересованы в лечении трехканального зуба, то приглашаем вас на прием к специалистам клиники «Альтамед-с». Для записи на консультацию позвоните по номеру <Link href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 underline">+7 (495) 255-44-50</Link> или воспользуйтесь формой обратной связи.
            </p>
            
            <div className="bg-[#f7fafb] rounded-[20px] p-6 md:p-8 mb-6">
              <p className="text-center text-gray-700">
                Узнать подробности и записаться на консультацию специалиста вы можете по телефону: <Link href="tel:+74952554450" className="text-emerald-600 hover:text-emerald-700 underline">+7 (495) 255-44-50</Link> или заполнив форму обратной связи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Информационный слайдер */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Полезная информация</h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation buttons */}
            <button 
              onClick={scrollDoctorsLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{ marginLeft: '-20px' }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={scrollDoctorsRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{ marginRight: '-20px' }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Info slider */}
            <div 
              ref={doctorsSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-600">Что такое пульпит?</h3>
                  <p className="text-gray-700 text-sm mb-4">Пульпит - это воспаление мягких тканей зуба (пульпы), которое сопровождается острой болью и требует незамедлительного лечения.</p>
                  <Link href="/services/dentistry/pulpitis-info" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Подробнее →
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-600">Современные методы</h3>
                  <p className="text-gray-700 text-sm mb-4">Используем передовые технологии и материалы для эффективного лечения пульпита с минимальным дискомфортом.</p>
                  <Link href="/services/dentistry/modern-methods" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Подробнее →
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-600">Профилактика</h3>
                  <p className="text-gray-700 text-sm mb-4">Регулярные осмотры и своевременное лечение кариеса помогают предотвратить развитие пульпита.</p>
                  <Link href="/services/dentistry/prevention" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Подробнее →
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-600">Анестезия</h3>
                  <p className="text-gray-700 text-sm mb-4">Применяем современные методы обезболивания для комфортного проведения процедуры лечения.</p>
                  <Link href="/services/dentistry/anesthesia" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Подробнее →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Цены на лечение пульпита трехканального зуба</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left sidebar with categories */}
              <div className="lg:w-80">
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="space-y-2">
                    {priceCategories.map((category, index) => (
                      <button 
                        key={index}
                        onClick={() => setActivePriceCategory(index)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          activePriceCategory === index 
                            ? 'bg-emerald-600 text-white' 
                            : 'text-white hover:bg-slate-600'
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content area */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6 text-emerald-600 border-b-2 border-emerald-600 pb-2 inline-block">
                  {priceCategories[activePriceCategory].title}
                </h3>
                
                <div className="space-y-4">
                  {priceCategories[activePriceCategory].services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                        <span className="text-gray-900">{service.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-emerald-600 font-bold text-lg mr-2">{service.price}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <button className="bg-emerald-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors">
                    Записаться на консультацию
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 