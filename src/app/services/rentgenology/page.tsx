import Link from "next/link";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Рентгеология в Одинцово | Клиника «Альтамед-С»",
  description:
    "Рентгеология в клинике «Альтамед-С» в Одинцово: цифровая рентгенодиагностика с протоколами для головы, шеи, позвоночника и конечностей. Современные аппараты, экспертные врачи и быстрый результат.",
  keywords: [
    "рентгеология одинцово",
    "цифровой рентген одинцово",
    "рентгенодиагностика в одинцово",
    "рентген позвоночника одинцово",
    "рентгенография головы и шеи одинцово",
    "рентген конечностей одинцово",
    "клиника альтамед-с рентген"
  ],
  alternates: {
    canonical: "https://altamed-c.ru/services/rentgenology"
  },
  openGraph: {
    title: "Рентгеология в Одинцово — клиника «Альтамед-С»",
    description:
      "Расширенная рентгенодиагностика: стоматологические, ортопедические и травматологические исследования, цифровая обработка и консультация врача-рентгенолога.",
    url: "https://altamed-c.ru/services/rentgenology",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/rentgen.webp",
        width: 1200,
        height: 630,
        alt: "Рентгеология в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

type RadiologyService = {
  name: string;
  price: string;
};

type RadiologyCategory = {
  title: string;
  subtitle?: string;
  services: RadiologyService[];
};

const radiologyCategories: RadiologyCategory[] = [
  {
    title: "Голова и шея",
    subtitle: "Нейрорентгенология и челюстно-лицевая диагностика",
    services: [
      { name: "Рентгенография турецкого седла", price: "2000 ₽" },
      { name: "Рентгенография скуловой кости", price: "2900 ₽" },
      { name: "Рентгенография всего черепа, в одной или более проекциях", price: "2900 ₽" },
      { name: "Рентгенография первого и второго шейного позвонка", price: "2600 ₽" },
      { name: "Рентгенография шейного отдела позвоночника", price: "2600 ₽" },
      { name: "Рентгенография шейно-дорсального отдела позвоночника", price: "2600 ₽" },
      { name: "Рентгенография костей лицевого скелета", price: "2900 ₽" },
      { name: "Рентгенография черепа в прямой проекции", price: "2000 ₽" },
      { name: "Рентгенография носоглотки", price: "2400 ₽" },
      { name: "Рентгенография глазницы", price: "2100 ₽" },
      { name: "Рентгенография гортани и трахеи", price: "2000 ₽" },
      { name: "Рентгенография придаточных пазух носа", price: "2100 ₽" }
    ]
  },
  {
    title: "Позвоночник",
    subtitle: "Специализированные протоколы с функциональными пробами",
    services: [
      { name: "Рентгенография грудного отдела позвоночника", price: "2900 ₽" },
      { name: "Рентгенография грудного и поясничного отдела позвоночника", price: "2900 ₽" },
      { name: "Рентгенография поясничного отдела позвоночника", price: "2900 ₽" },
      { name: "Рентгенография пояснично-крестцового отдела позвоночника", price: "3200 ₽" },
      { name: "Рентгенография крестца и копчика", price: "2900 ₽" },
      { name: "Рентгенография крестца", price: "2900 ₽" },
      { name: "Рентгенография копчика", price: "2600 ₽" },
      { name: "Рентгенография позвоночника, специальные исследования и проекции", price: "2900 ₽" },
      { name: "Рентгенография позвоночника с функциональными пробами", price: "3500 ₽" },
      { name: "Рентгенография позвоночника, вертикальная", price: "2900 ₽" }
    ]
  },
  {
    title: "Верхние конечности",
    subtitle: "Ортопедическая рентгеология для суставов и костей",
    services: [
      { name: "Рентгенография верхней конечности", price: "2600 ₽" },
      { name: "Рентгенография ключицы", price: "2000 ₽" },
      { name: "Рентгенография лопатки", price: "2000 ₽" },
      { name: "Рентгенография головки плечевой кости", price: "2400 ₽" },
      { name: "Рентгенография плечевой кости", price: "2600 ₽" },
      { name: "Рентгенография локтевой и лучевой кости", price: "2600 ₽" },
      { name: "Рентгенография запястья", price: "2500 ₽" },
      { name: "Рентгенография пясти", price: "2500 ₽" },
      { name: "Рентгенография кисти", price: "2500 ₽" },
      { name: "Рентгенография фаланг пальцев кисти", price: "2400 ₽" },
      { name: "Рентгенография пальцев фаланговых костей кисти", price: "2400 ₽" },
      { name: "Рентгенография I пальца кисти", price: "2100 ₽" },
      { name: "Рентгенография локтевого сустава", price: "2900 ₽" },
      { name: "Рентгенография лучезапястного сустава", price: "2900 ₽" },
      { name: "Рентгенография плечевого сустава", price: "2000 ₽" },
      { name: "Рентгенография акромиально-ключичного сочленения", price: "2000 ₽" }
    ]
  },
  {
    title: "Нижние конечности и таз",
    subtitle: "Спортивная и травматологическая рентгеология",
    services: [
      { name: "Рентгенография нижней конечности", price: "2600 ₽" },
      { name: "Рентгенография таза", price: "2500 ₽" },
      { name: "Рентгенография бедренной кости", price: "2900 ₽" },
      { name: "Рентгенография большой и малой берцовых костей", price: "2900 ₽" },
      { name: "Рентгенография лодыжки", price: "2900 ₽" },
      { name: "Рентгенография предплюсны", price: "2100 ₽" },
      { name: "Рентгенография пяточной кости", price: "2000 ₽" },
      { name: "Рентгенография плюсны и фаланг пальцев стопы", price: "2700 ₽" },
      { name: "Рентгенография стопы в одной проекции", price: "2000 ₽" },
      { name: "Рентгенография стопы в двух проекциях", price: "3100 ₽" },
      { name: "Рентгенография стопы с функциональной нагрузкой", price: "3900 ₽" },
      { name: "Рентгенография фаланг пальцев ноги", price: "2600 ₽" },
      { name: "Рентгенография I пальца стопы в одной проекции", price: "2600 ₽" },
      { name: "Рентгенография коленного сустава", price: "2900 ₽" },
      { name: "Рентгенография тазобедренного сустава", price: "2400 ₽" },
      { name: "Рентгенография голеностопного сустава", price: "2900 ₽" }
    ]
  },
  {
    title: "Грудная клетка и брюшная полость",
    subtitle: "Диагностика органов дыхания и пищеварения",
    services: [
      { name: "Рентгенография ребра(ер)", price: "2500 ₽" },
      { name: "Рентгенография грудины", price: "2600 ₽" },
      { name: "Рентгенография лёгких", price: "2500 ₽" },
      { name: "Прицельная рентгенография органов грудной клетки", price: "2800 ₽" },
      { name: "Обзорный снимок брюшной полости и органов малого таза", price: "2500 ₽" },
      { name: "Обзорная рентгенография органов брюшной полости", price: "2500 ₽" }
    ]
  },
  {
    title: "Дополнительные услуги",
    subtitle: "Подготовка, выдача и хранение диагностических данных",
    services: [
      { name: "Описание и интерпретация рентгенографических изображений", price: "1900 ₽" },
      { name: "Запись на цифровой носитель для пациента", price: "600 ₽" },
      { name: "Распечатка снимка на плёнке 20×25", price: "500 ₽" },
      { name: "Распечатка снимка на плёнке 35×43", price: "700 ₽" }
    ]
  }
];

export default function RentgenologyPage() {
  return (
    <div className="flex flex-col min-h-full bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    href="/services"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2"
                  >
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    Рентгеология
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Рентгеология в клинике «<span className="italic">Альтамед-С</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Расширенная цифровая рентгенодиагностика: экспертные обследования для стоматологии, травматологии,
              неврологии и терапии в одном центре.
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#4A5568] relative overflow-hidden">
                <img
                  src="/images/yslugi/rentgen.webp"
                  alt="Рентгеология в Одинцово"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Цифровая рентгеология</div>
                <Link
                  href="/appointments"
                  className="bg-[#4A5568] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#3d4454] transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#4A5568] relative overflow-hidden rounded-[20px] shadow-lg">
              <img
                src="/images/yslugi/rentgen.webp"
                alt="Рентгенологическое отделение Альтамед-С"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Рентгеология: Услуги рентгенографии</h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                  Полный спектр рентгенологических исследований в клинике «Альтамед-С» в Одинцово: специализированные
                  протоколы, экспертное описание и моментальная выдача снимков.
                </p>
                <Link
                  href="/appointments"
                  className="bg-[#4A5568] text-white rounded-full px-8 py-3 font-medium hover:bg-[#3d4454] transition-colors"
                >
                  Записаться на рентген
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">Что такое рентгеология в «Альтамед-С»</h2>
              <p>
                Мы объединили классический рентген и современные методики обработки данных, чтобы врачи разных
                специальностей — от ортопедов и травматологов до стоматологов и неврологов — получали исчерпывающую
                информацию. Каждый протокол обследования сопровождается консультацией рентгенолога, рекомендациями
                по подготовке и возможностью получить снимки в цифровом и печатном виде.
              </p>
              <p>
                В отличие от стандартного отделения рентгена, рентгеология в «Альтамед-С» включает расширенный
                спектр исследований, дополнительные серии проекций, функциональные пробы и комплексные отчёты.
                Мы работаем на низкодозных цифровых аппаратах, соблюдая принципы ALARA — минимально достаточная
                лучевая нагрузка для пациента.
              </p>
              <p>
                Рентгенологические данные по запросу могут быть переданы лечащему специалисту через защищённые
                каналы: это ускоряет постановку диагноза и помогает избегать повторных исследований.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Почему выбирают наше рентгенологическое отделение</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Персональные протоколы для каждого отдела: от нейрорентгенологии до травматологии и гнатологии.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Цифровой архив и удобная выдача результатов: снимки на плёнке, в формате DICOM и с экспертным описанием.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Отдельные временные окна для пациентов с травмами, детей и тех, кому требуется особый комфорт.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Врачи-рентгенологи с опытом более 10 лет и постоянные курсы повышения квалификации в области рентгеологии.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Каталоги рентгенологических исследований</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Ниже — подробное описание услуг рентгеологического отделения. Списки структурированы по областям тела,
            чтобы вы могли быстро найти нужное обследование. Для записи выберите услугу и нажмите кнопку «Записаться».
          </p>

          <div className="space-y-10">
            {radiologyCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  {category.subtitle && (
                    <p className="text-white/80 text-sm mt-1">{category.subtitle}</p>
                  )}
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                      >
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight">
                            {service.name}
                          </h4>
                          <div className="text-[#4A5568] font-semibold text-lg mt-3">
                            {service.price}
                          </div>
                        </div>
                        <Link
                          href="/appointments"
                          className="inline-flex items-center justify-center bg-[#4A5568] text-white px-4 py-2 rounded-md text-sm hover:bg-[#3d4454] transition-colors duration-300"
                        >
                          Записаться
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Дополнительные возможности рентгеологии</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Стоматологические протоколы</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Экстраоральные снимки, оценка ВНЧС, планирование имплантации и ортодонтии. Результаты синхронизируются
                с отделениями стоматологии и гнатологии клиники.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Травматологическая поддержка</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Экстренные окна для пациентов с травмами и спортивными повреждениями, оперативное описание и передача
                снимков лечащему хирургу или реабилитологу.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Комплексные отчёты</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                При необходимости формируем расширенный протокол с динамикой состояния, рекомендациями по дополнительным
                исследованиям и цифровым архивом для наблюдения в других клиниках.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна рентгенологическая диагностика в Одинцово?
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Запишитесь в клинику «Альтамед-С», чтобы выбрать удобное время, получить подготовку к обследованию и
                забрать результаты в день исследования. Наши администраторы подскажут, какие документы и снимки
                понадобятся вашему врачу.
              </p>
            </div>
            <Link
              href="/appointments"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на рентгеологию
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                name: "Клиника «Альтамед-С» — рентгеология в Одинцово",
                url: "https://altamed-c.ru/services/rentgenology",
                image: "https://altamed-c.ru/images/yslugi/rentgen.webp",
                medicalSpecialty: "RadiationTherapy",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Одинцово",
                  addressRegion: "Московская область",
                  streetAddress: "ул. Советская, 9"
                },
                telephone: "+7 (495) 640-09-03",
                priceRange: "₽₽",
                serviceType: "Рентгенологические исследования",
                description:
                  "Цифровая рентгеология в клинике «Альтамед-С»: исследования головы, позвоночника, конечностей, органов грудной клетки и дополнительные услуги с экспертным описанием.",
                sameAs: [
                  "https://altamed-c.ru",
                  "https://yandex.ru/maps/org/altamed_s/1919839667"
                ]
              })
            }}
          />
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

