"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import AppointmentForm from '@/components/AppointmentForm';

type DayServiceItem = string | { name: string; discount: string; highlighted?: boolean };
type PromoWithDayServices = { mondayServices?: DayServiceItem[]; fridayServices?: DayServiceItem[] };

export default function PromoDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Данные акций на февраль 2026
  const promotions = [
    {
      id: 1,
      category: "dentistry",
      image: "/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp",
      startDate: "01.02.2026",
      endDate: "28.02.2026",
      title: "Профессиональная гигиена полости рта",
      description: "Цена: 4600 ₽ (было 6600 ₽)",
      fullDescription: "Специальное предложение на февраль! Профессиональная гигиена полости рта со скидкой. Комплексная чистка зубов, удаление зубного камня и налета. Экономия 2000 рублей!",
      details: [
        "Цена со скидкой: 4600 ₽",
        "Обычная цена: 6600 ₽",
        "Экономия: 2000 ₽",
        "Комплексная чистка зубов",
        "Удаление зубного камня",
        "Полировка эмали",
        "Акция действует до 28 февраля 2026 года"
      ]
    },
    {
      id: 2,
      category: "dentistry",
      image: "/images/promo/st prom.png",
      startDate: "01.02.2026",
      endDate: "28.02.2026",
      title: "Лечение зубов (терапия)",
      description: "Скидка 20% на все виды лечения",
      fullDescription: "В феврале действует скидка 20% на все виды терапевтического лечения зубов. Качественное лечение кариеса, пульпита, периодонтита по выгодной цене.",
      details: [
        "Скидка 20% на лечение",
        "Лечение кариеса",
        "Лечение пульпита",
        "Лечение периодонтита",
        "Реставрация зубов",
        "Современные материалы",
        "Акция действует до 28 февраля 2026 года"
      ]
    },
    {
      id: 3,
      category: "dentistry",
      image: "/images/yslugi/implant.webp",
      startDate: "01.02.2026",
      endDate: "28.02.2026",
      title: "Имплантация зубов",
      description: "Скидка 30% — цена: 41160 ₽ (было 58800 ₽)",
      fullDescription: "Уникальное предложение февраля! Имплантация одного зуба со скидкой 30%. Используем качественные импланты проверенных производителей. Экономия 17640 рублей на один имплант!",
      details: [
        "Скидка 30% на имплантацию",
        "Цена за 1 зуб: 41160 ₽",
        "Обычная цена: 58800 ₽",
        "Экономия: 17640 ₽",
        "Качественные импланты",
        "Гарантия на работу",
        "Консультация имплантолога",
        "Акция действует до 28 февраля 2026 года"
      ]
    },
    {
      id: 4,
      category: "diagnostics",
      image: "/images/slides/3-analizy.webp",
      startDate: "01.02.2026",
      endDate: "15.02.2026",
      title: "Скидки на анализы (1-15 февраля)",
      description: "Понедельник-Суббота 15%, Воскресенье 25%",
      fullDescription: "С 1 по 15 февраля действуют специальные скидки на все виды лабораторных анализов. Сдавайте анализы выгодно!",
      details: [
        "Период: с 1 по 15 февраля 2026",
        "Понедельник-Суббота: скидка 15%",
        "Воскресенье: скидка 25%",
        "Применяется ко всем видам анализов",
        "Забор крови с 8:00 до 13:00",
        "Скидки не суммируются"
      ]
    },
    {
      id: 5,
      category: "diagnostics",
      image: "/images/slides/3-analizy.webp",
      startDate: "15.02.2026",
      endDate: "28.02.2026",
      title: "Скидки на анализы (15-28 февраля)",
      description: "Пн/Ср/Пт 15%, Вт/Вс 25%",
      fullDescription: "С 15 по 28 февраля действуют специальные скидки на все виды лабораторных анализов. Выбирайте удобный день!",
      details: [
        "Период: с 15 по 28 февраля 2026",
        "Понедельник: скидка 15%",
        "Вторник: скидка 25%",
        "Среда: скидка 15%",
        "Пятница: скидка 15%",
        "Воскресенье: скидка 25%",
        "Применяется ко всем видам анализов",
        "Забор крови с 8:00 до 13:00",
        "Скидки не суммируются"
      ]
    },
    {
      id: 7,
      category: "consultations",
      image: "/images/slides/2-pensia.webp",
      startDate: "01.02.2026",
      endDate: "28.02.2026",
      title: "Скидки для пенсионеров",
      description: "10% на приём врача, УЗИ, анализы",
      fullDescription: "Клиника «Альтамед-Голицыно» заботится о доступности медицинских услуг для пенсионеров. Постоянная скидка 10% на приём врача, УЗИ и анализы.",
      details: [
        "Скидка 10% для пенсионеров",
        "Распространяется на приём врача",
        "Распространяется на УЗИ",
        "Распространяется на анализы",
        "Не действует на ортопедию и имплантацию",
        "При предъявлении пенсионного удостоверения",
        "Скидки не суммируются"
      ]
    },
    {
      id: 8,
      category: "special",
      image: "/images/doctors/doctor banner/Screenshot_1238.png",
      startDate: "05.03.2026",
      endDate: "20.03.2026",
      title: "Праздничные скидки для женщин",
      description: "С 5 по 20 марта — 15% на консультации и анализы, 25% на комплекс гинекологических процедур",
      fullDescription: "С 5 по 20 марта в клинике «Альтамед Голицыно» действуют праздничные скидки для женщин. Получите скидку 15% на все консультации врачей и лабораторные анализы. Специальное предложение — скидка 25% при единовременном прохождении комплекса гинекологических процедур: приём врача-гинеколога, УЗИ органов малого таза, забор биоматериала, мазок на флору и кольпоскопия.",
      details: [
        "Срок действия акции: с 5 по 20 марта",
        "Скидка 15% на все консультации врачей",
        "Скидка 15% на все лабораторные анализы",
        "Скидка 25% при единовременном прохождении комплекса процедур",
        "В комплекс входят: приём врача-гинеколога, УЗИ органов малого таза, забор биоматериала, мазок на флору, кольпоскопия",
        "Записывайтесь заранее на удобное время"
      ]
    }
  ];

  // Находим текущую акцию по slug
  const promoId = slug ? parseInt(slug.replace('promo-', '')) : null;
  const promo = promotions.find(p => p.id === promoId);

  if (!promo) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Акция не найдена</h1>
          <Link href="/promo" className="text-emerald-600 hover:text-emerald-700">
            Вернуться к списку акций
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/promo" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Акции</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Акция</span>
                </div>
              </li>
            </ol>
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
                {promo.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-emerald-100">
                {promo.description}
              </p>
            </div>
            <div className="relative">
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main section */}
      {/* Время работы КТ (только для акции КТ) */}
      {promo.id === 1 && (
        <section className="py-8">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-[20px] p-8 text-white shadow-lg">
              <div className="flex items-start">
                <svg className="w-8 h-8 mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Время работы КТ</h3>
                  <p className="text-lg mb-2">КТ работает с 9:30 до 15:00</p>
                  <p className="text-white/90">Кроме воскресенья и понедельника</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Описание акции */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Об акции</h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4 text-lg">
              {promo.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Условия скидок — только для акции «Праздничные скидки для женщин» */}
      {promo.id === 8 && (
        <section className="py-12 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Условия скидок</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-rose-200">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">15%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Общие скидки</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    На все консультации врачей
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    На все лабораторные анализы
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-pink-300">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">25%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Комплекс процедур</h3>
                    <p className="text-sm text-gray-600 mt-1">При единовременном прохождении:</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {["Приём врача-гинеколога", "УЗИ органов малого таза", "Забор биоматериала", "Мазок на флору", "Кольпоскопия"].map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Специальный блок для акции "День пенсионера" */}
      {promo.id === 7 && (
        <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Услуги со скидкой</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Понедельник */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">Пн</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Понедельник</h3>
                    <p className="text-emerald-600 font-semibold text-lg">Скидка 20%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(promo as PromoWithDayServices).mondayServices?.map((service, idx) => {
                    const isHighlighted = typeof service === 'object' && service.highlighted;
                    const serviceName = typeof service === 'object' ? `${service.name} – ${service.discount}` : service;
                    
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center ${isHighlighted ? 'bg-orange-50 rounded-lg p-3 border border-orange-200' : 'text-gray-700'}`}
                      >
                        <svg className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-emerald-500'} mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`text-sm ${isHighlighted ? 'text-orange-700 font-semibold' : ''}`}>
                          {serviceName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Пятница */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">Пт</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Пятница</h3>
                    <p className="text-blue-600 font-semibold text-lg">Скидка 20%</p>
                    <p className="text-orange-600 font-semibold text-sm">КТ – 25%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(promo as PromoWithDayServices).fridayServices?.map((service, idx) => {
                    const isHighlighted = typeof service === 'object' && service.highlighted;
                    const serviceName = typeof service === 'object' ? `${service.name} – ${service.discount}` : service;
                    const serviceDiscount = typeof service === 'object' ? service.discount : null;
                    
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center ${isHighlighted ? 'bg-orange-50 rounded-lg p-3 border border-orange-200' : 'text-gray-700'}`}
                      >
                        <svg className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-blue-500'} mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`text-sm ${isHighlighted ? 'text-orange-700 font-semibold' : ''}`}>
                          {serviceName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Детали акции */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Условия акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promo.details.map((detail, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как получить скидку */}
      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как получить скидку?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <p className="text-gray-700 font-medium">Запишитесь на прием</p>
              <p className="text-gray-600 text-sm mt-2">Выберите удобное для вас время</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <p className="text-gray-700 font-medium">Подтвердите участие в акции</p>
              <p className="text-gray-600 text-sm mt-2">Сообщите о скидке при записи</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <p className="text-gray-700 font-medium">Получите скидку</p>
              <p className="text-gray-600 text-sm mt-2">Экономия уже включена в стоимость</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}

