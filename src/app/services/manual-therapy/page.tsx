import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const manualTherapyServices = [
  { code: "B01.022.001", name: "Прием (осмотр, консультация) врача мануальной терапии /30мин/", price: 3330 },
  { code: "B01.022.001.001", name: "Прием (осмотр, консультация) врача мануальной терапии /60мин/", price: 6410 },
  { code: "B01.022.001.01", name: "Прием (осмотр, консультация) врача мануальной терапии (дети до 14 лет)/30/ мин", price: 2660 },
  { code: "B01.022.001.02", name: "Прием (осмотр, консультация) врача мануальной терапии (дети до 14 лет) 60 мин", price: 4840 },
  { code: "A01.02.001", name: "Сбор анамнеза и жалоб при заболеваниях мышц", price: 660 },
];

export default function ManualTherapyPage() {
  const indications = [
    { column: 1, text: "Боли в спине и шее" },
    { column: 1, text: "Головные боли и мигрени" },
    { column: 2, text: "Ограничение подвижности суставов" },
    { column: 2, text: "Межпозвоночные грыжи" },
    { column: 3, text: "Нарушения осанки" },
    { column: 3, text: "Последствия травм" },
  ];

  const benefits = [
    "Быстрое облегчение боли без медикаментов",
    "Восстановление подвижности позвоночника и суставов",
    "Улучшение кровообращения и обмена веществ",
    "Снятие мышечных спазмов и напряжения",
    "Коррекция осанки и профилактика заболеваний",
    "Повышение общего тонуса организма",
  ];

  const conditions = [
    "Остеохондроз позвоночника различных отделов",
    "Межпозвоночные грыжи и протрузии",
    "Сколиоз и нарушения осанки",
    "Радикулит и ишиас",
    "Артрозы и артриты суставов",
    "Головные боли напряжения",
    "Мышечно-тонические синдромы",
    "Последствия травм позвоночника и суставов",
  ];

  const techniques = [
    "Мобилизация суставов — восстановление подвижности",
    "Манипуляция — быстрые точные движения для снятия блоков",
    "Мягкотканные техники — работа с мышцами и связками",
    "Постизометрическая релаксация — снятие мышечного напряжения",
    "Тракция — вытяжение позвоночника и суставов",
  ];

  const column1Items = indications.filter(item => item.column === 1);
  const column2Items = indications.filter(item => item.column === 2);
  const column3Items = indications.filter(item => item.column === 3);

  return (
    <div className="flex flex-col bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  Главная
                </Link>
              </li>
              <li><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><Link href="/services" className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2">Услуги</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Мануальная терапия</span></div></li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="pt-2 md:pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Мануальная терапия в Голицино — лечение позвоночника и суставов в центре Альтамед Голицино</h1>
        </div>
      </section>

      {/* Two-column intro with image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/yslugi/massaj.webp"
                  alt="Мануальная терапия в Альтамед Голицино"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Что такое мануальная терапия</h2>
              <p>
                Мануальная терапия — это метод лечения заболеваний опорно-двигательного аппарата с помощью специальных ручных техник и приемов. В медицинском центре Альтамед Голицино наши опытные специалисты используют современные методики мануальной терапии для эффективного лечения позвоночника и суставов.
              </p>
              <p>
                Мануальная терапия позволяет восстановить нормальную подвижность суставов, снять мышечные блоки и спазмы, улучшить кровообращение и обмен веществ в тканях. Этот метод особенно эффективен при лечении болей в спине, шее, суставах, а также при различных нарушениях осанки.
              </p>
              <p>
                В отличие от обычного массажа, мануальная терапия воздействует не только на мягкие ткани, но и на костно-суставную систему, что позволяет достичь более глубокого и долговременного эффекта. Врачи Альтамед Голицино имеют специальную подготовку и многолетний опыт работы в области мануальной терапии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Прайс услуг */}
      <section className="py-12" aria-labelledby="manual-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="manual-services-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Услуги врача мануальной терапии в Голицино</h2>
            <p className="text-gray-600">Приём и консультация врача мануальной терапии в Альтамед Голицино</p>
          </div>
          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Цена может быть неточной; мы стараемся своевременно её обновлять. Уточняйте стоимость при записи.
          </p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Прайс</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {manualTherapyServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString("ru-RU")} ₽</div>
                    </div>
                    <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 flex-shrink-0 text-center whitespace-nowrap">
                      Записаться
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for contacting */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Когда нужна мануальная терапия в Голицино
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              {column1Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {column2Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {column3Items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества мануальной терапии в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Как проходит сеанс мануальной терапии в Альтамед Голицино</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              <strong>1. Диагностика.</strong> Врач медицинского центра Альтамед Голицино проводит тщательное обследование, выявляет проблемные зоны, оценивает состояние позвоночника и суставов. При необходимости назначаются дополнительные исследования (рентген, МРТ). Диагностика включает визуальный осмотр, пальпацию и специальные тесты на подвижность.
            </p>
            <p className="text-base md:text-lg">
              <strong>2. Подготовка.</strong> Перед основными манипуляциями проводится разминка мышц и связок, что помогает расслабить напряженные участки и подготовить организм к воздействию. Это позволяет сделать процедуру более эффективной и комфортной для пациента.
            </p>
            <p className="text-base md:text-lg">
              <strong>3. Лечебное воздействие.</strong> Врач использует специальные приемы для восстановления подвижности суставов, снятия блоков и мышечных спазмов. Все манипуляции выполняются максимально аккуратно и безопасно. Специалисты Альтамед Голицино владеют различными техниками мануальной терапии и подбирают их индивидуально для каждого пациента.
            </p>
            <p className="text-base md:text-lg">
              <strong>4. Закрепление результата.</strong> После основной процедуры даются рекомендации по физическим упражнениям, режиму нагрузок и профилактике рецидивов. Врач объясняет, как поддерживать достигнутый результат и предотвратить повторное возникновение проблемы.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Методы мануальной терапии в Альтамед Голицино</h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            В медицинском центре Альтамед Голицино используются различные техники мануальной терапии, которые подбираются индивидуально в зависимости от диагноза и состояния пациента:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techniques.map((technique, idx) => (
              <div key={idx} className="bg-gray-50 rounded-[20px] p-6">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700 font-medium">{technique}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Какие заболевания лечит мануальная терапия</h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            В медицинском центре Альтамед Голицино мануальные терапевты успешно лечат следующие заболевания:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {conditions.map((condition, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contraindications */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Противопоказания к мануальной терапии</h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            Мануальная терапия — эффективный и безопасный метод лечения, однако существуют некоторые противопоказания. Перед началом лечения в Альтамед Голицино врач проводит тщательное обследование для их исключения:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Острые воспалительные процессы</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Онкологические заболевания с метастазами в позвоночник</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Свежие травмы позвоночника и суставов</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Тяжелые нарушения свертываемости крови</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Острые инфекционные заболевания</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
              <span>Нестабильность позвоночника</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4 text-base md:text-lg">
            Перед началом лечения врач Альтамед Голицино проводит тщательную диагностику и определяет возможность применения мануальной терапии в каждом конкретном случае. При наличии противопоказаний специалист предложит альтернативные методы лечения.
          </p>
        </div>
      </section>

      {/* Course of treatment */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Курс лечения мануальной терапией</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              В медицинском центре Альтамед Голицино курс мануальной терапии подбирается индивидуально для каждого пациента. Обычно для достижения стойкого эффекта требуется от 5 до 10 сеансов с интервалом 2-7 дней в зависимости от диагноза и состояния пациента.
            </p>
            <p className="text-base md:text-lg">
              Первые результаты лечения могут быть заметны уже после 1-2 сеансов в виде уменьшения боли и улучшения подвижности. Полный эффект развивается постепенно в течение курса лечения. Для поддержания результата могут потребоваться профилактические сеансы 1-2 раза в год.
            </p>
            <p className="text-base md:text-lg">
              После каждого сеанса врач Альтамед Голицино оценивает динамику лечения и при необходимости корректирует тактику. Это позволяет достичь максимальной эффективности лечения и избежать осложнений.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Почему выбирают мануальную терапию в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные специалисты</h3>
              <p className="text-gray-700">Врачи с многолетним стажем и профильным образованием, регулярно повышающие квалификацию</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Современные методики</h3>
              <p className="text-gray-700">Используем проверенные и эффективные техники лечения, соответствующие международным стандартам</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-700">Программа лечения подбирается для каждого пациента с учетом особенностей его организма</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
