"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import AppointmentForm from '@/components/AppointmentForm';

export default function PromoDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Данные акций (те же, что на главной странице promo)
  const promotions = [
    {
      id: 1,
      category: "diagnostics",
      image: "/images/slides/1-kt.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки на компьютерную томографию",
      description: "Понедельник, Среда, Пятница – 20%, Суббота – 25%",
      fullDescription: "Воспользуйтесь специальными скидками на компьютерную томографию (КТ) в нашей клинике. Скидки действуют только в определенные дни недели. Записывайтесь заранее на удобное для вас время.",
      details: [
        "Понедельник - скидка 20%",
        "Среда - скидка 20%",
        "Пятница - скидка 20%",
        "Суббота - скидка 25%",
        "Скидки не распространяются на КТ с контрастом",
        "Записываться необходимо заранее, количество мест ограничено"
      ]
    },
    {
      id: 2,
      category: "diagnostics",
      image: "/images/slides/yzi.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Комплексное ультразвуковое исследование для женщин",
      description: "УЗИ органов малого таза + молочных желез + щитовидной железы. Цена: 5000 ₽ (было 6200 ₽)",
      fullDescription: "Комплексное ультразвуковое исследование для женщин включает три важнейших обследования за одну процедуру. Экономия 1200 рублей!",
      details: [
        "УЗИ органов малого таза - оценка состояния матки, яичников",
        "УЗИ молочных желез - раннее выявление патологий",
        "УЗИ щитовидной железы - контроль функции щитовидной железы",
        "Выполняется за один визит",
        "Экономия 1200 рублей по сравнению с раздельными обследованиями"
      ]
    },
    {
      id: 3,
      category: "consultations",
      image: "/images/slides/2-pensia.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки для пенсионеров и многодетных",
      description: "– 10% на все услуги, кроме стоматологии",
      fullDescription: "Клиника «Альтамед-с» заботится о доступности медицинских услуг для пенсионеров и многодетных семей. Специальная скидка 10% распространяется на большинство услуг клиники.",
      details: [
        "Скидка 10% на все услуги",
        "Исключение: стоматологические услуги",
        "Для пенсионеров при предъявлении пенсионного удостоверения",
        "Для многодетных семей при предъявлении удостоверения",
        "Скидка не суммируется с другими акциями",
        "Действует на все виды диагностики и лечения"
      ]
    },
    {
      id: 4,
      category: "diagnostics",
      image: "/images/slides/3-analizy.webp",
      startDate: "01.10.2025",
      endDate: "31.12.2025",
      title: "Скидки на анализы",
      description: "Понедельник, Среда, Пятница - 10%, Воскресенье - 15%. (скидки не суммируются)",
      fullDescription: "Специальные скидки на лабораторные анализы в определенные дни недели. Сдавайте анализы выгодно!",
      details: [
        "Понедельник - скидка 10%",
        "Среда - скидка 10%",
        "Пятница - скидка 10%",
        "Воскресенье - скидка 15%",
        "Скидки не суммируются с другими акциями",
        "Применяется ко всем видам анализов",
        "Забор крови с 8:00 до 12:00 в дни акции"
      ]
    },
    {
      id: 5,
      category: "consultations",
      image: "/images/slides/kolpos.webp",
      startDate: "01.01.2025",
      endDate: "31.12.2025",
      title: "При первичном приёме врача акушера-гинеколога - кольпоскопия в подарок!",
      description: "Акция до конца 2025 года",
      fullDescription: "При первичном приёме врача-гинеколога в нашей клинике вы получаете кольпоскопию бесплатно в подарок! Не упустите возможность пройти важное обследование.",
      details: [
        "Только для новых пациентов",
        "При первичном приеме врача-гинеколога",
        "Кольпоскопия - обследование шейки матки под микроскопом",
        "Выполняется в тот же день приёма",
        "Без дополнительной оплаты",
        "Акция действует весь 2025 год"
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

      {/* Main section */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <div className="px-4 md:px-0">
              <div className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Акция
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              {promo.title}
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              С {promo.startDate} по {promo.endDate}
            </p>
          </header>

          {/* Banner */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-gradient-to-br from-emerald-500 to-emerald-700 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">{promo.title}</div>
                <Link 
                  href="/appointments" 
                  className="bg-emerald-600 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-emerald-700 transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-gradient-to-br from-emerald-500 to-emerald-700 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{promo.title}</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">{promo.description}</p>
                <Link 
                  href="/appointments" 
                  className="bg-emerald-600 text-white rounded-full px-8 py-3 font-medium hover:bg-emerald-700 transition-colors"
                >
                  Записаться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

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

