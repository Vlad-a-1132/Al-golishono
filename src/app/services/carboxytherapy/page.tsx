"use client"

import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function CarboxytherapyPage() {
  const benefits = [
    {
      title: "Заметный эффект после первой процедуры.",
      text: "Лечебный или эстетический результат проявляются вскоре после проведения терапии.",
    },
    {
      title: "Хорошая переносимость и минимум ограничений.",
      text: "Подходит для взрослых пациентов и практически не имеет противопоказаний.",
    },
    {
      title: "Комфортность проведения.",
      text: "Дозатор с подогревом и точной дозировкой делает процедуру максимально комфортной.",
    },
    {
      title: "Отсутствие реабилитационного периода.",
      text: "Можно сразу возвращаться к обычной активности.",
    },
  ];

  const indications = [
    "артрит",
    "артроз",
    "остеохондроз",
    "вертеброгенный алгический синдром",
    "синдром Рейно",
    "боль и скованность в суставах и мышцах",
    "вазомоторные цефалгии",
    "мигрень",
    "головные боли иной природы",
  ];

  const results = [
    "обезболивание",
    "снятие мышечного спазма",
    "стимуляция образования эндорфинов",
    "улучшение настроения",
    "борьба с локальными жировыми отложениями",
    "улучшение состояния кожи",
    "активация метаболических процессов",
  ];

  const carboxyServices = [
    {
      category: "Карбокситерапия. Лечение опорно-двигательного аппарата и суставов",
      services: [
        { code: "024001", name: "Лечение спины (позвоночник)", price: 1320 },
        { code: "024002", name: "Сеанс карбокситерапии трапециевидных мышц и лопатки", price: 1100 },
        { code: "024003", name: "Сеанс карбокситерапии тазобедренных суставов", price: 880 },
        { code: "024004", name: "Сеанс карбокситерапии плечевого сустава", price: 770 },
        { code: "024005", name: "Сеанс карбокситерапии локтевого сустава", price: 770 },
        { code: "024006", name: "Сеанс карбокситерапии коленного сустава", price: 770 },
        { code: "024007", name: "Сеанс карбокситерапии кисти рук", price: 550 },
        { code: "024008", name: "Сеанс карбокситерапии голеностопного сустава", price: 770 },
        { code: "024009", name: "Сеанс карбокситерапии при головных болях", price: 770 },
      ],
    },
    {
      category: "Карбокситерапия эстетическая",
      services: [
        { code: "024010", name: "Сеанс карбокситерапии зоны подбородка, шеи", price: 1210 },
        { code: "024011", name: "Сеанс карбокситерапии волосястой части головы", price: 1100 },
        { code: "024012", name: "Сеанс карбокситерапии зоны живота (стандарт)", price: 1100 },
        { code: "024013", name: "Сеанс карбокситерапии зоны живота (Макси)", price: 1430 },
        { code: "024014", name: "Сеанс карбокситерапии жирового горба на спине", price: 1650 },
        { code: "024015", name: "Сеанс карбокситерапии зоны колен", price: 770 },
        { code: "024016", name: "Сеанс карбокситерапии зоны предплечья", price: 1210 },
        { code: "024017", name: "Сеанс карбокситерапии зоны ягодиц", price: 1650 },
        { code: "024018", name: "Сеанс карбокситерапии зоны боков (реберная часть)", price: 1100 },
        { code: "024019", name: "Сеанс карбокситерапии внешней поверхности бедра (обе ноги)", price: 1320 },
        { code: "024020", name: "Сеанс карбокситерапии внутренней поверхности бедра (обе ноги)", price: 1320 },
        { code: "024021", name: "Сеанс карбокситерапии лица", price: 770 },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Title without banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Карбокситерапия в Голицино — лечение в медицинском центре Альтамед Голицино</h1>
        </div>
      </section>

      {/* Green info block */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-emerald-500 rounded-[20px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-8 text-white">
                <p className="mb-4">
                  Карбокситерапия — современный метод лечения, основанный на регулируемом введении
                  чистого углекислого медицинского газа. В медицинском центре Альтамед Голицино эта процедура проводится опытными специалистами с использованием современного оборудования.
                </p>
                <p className="mb-4">
                  Инъекции газа оказывают комплексное воздействие на ткани: улучшают кровоснабжение,
                  снижают выраженность болевого синдрома и влияют на воспалительный процесс. Метод широко применяется в реабилитационной медицине и косметологии.
                </p>
                <p>
                  Газ вводится внутримышечно, подкожно или внутрикожно с помощью очень тонких игл.
                  Активируя оздоровление тканей, углекислый газ выводится естественным путем через
                  лёгкие и почки спустя несколько минут. Процедура абсолютно безопасна и не требует реабилитации.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[240px] md:h-auto">
                <Image
                  src="/images/yslugi/Carboxytherapy.webp"
                  alt="Карбокситерапия в Альтамед Голицино"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества карбокситерапии в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((b, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold mb-1">{b.title}</div>
                  <div className="text-gray-700 text-sm md:text-base">{b.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <div className="font-semibold mb-1">{benefits[3].title}</div>
                <div className="text-gray-700 text-sm md:text-base">{benefits[3].text}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indications and results */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Показания к применению карбокситерапии</h3>
              <div className="bg-gray-50 rounded-[20px] p-6">
                <ul className="space-y-3 text-gray-800">
                  {indications.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block w-3 h-3 rounded-full border-2 border-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  Карбокситерапия в Альтамед Голицино эффективна при лечении хронических болей, воспалительных процессов и нарушений кровообращения. Процедура назначается после консультации с врачом.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Положительные результаты лечения</h3>
              <div className="bg-gray-50 rounded-[20px] p-6">
                <ul className="space-y-3 text-gray-800">
                  {results.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block w-3 h-3 rounded-full border-2 border-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  Метод также применяется для решения косметологических задач и улучшения качества кожи. В медицинском центре Альтамед Голицино карбокситерапия используется как самостоятельный метод лечения, так и в составе комплексной терапии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Как работает карбокситерапия</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              Карбокситерапия основана на введении медицинского углекислого газа (CO2) в ткани организма. В медицинском центре Альтамед Голицино процедура выполняется с помощью специального аппарата, который обеспечивает точную дозировку и контроль процесса.
            </p>
            <p className="text-base md:text-lg">
              При введении углекислого газа организм воспринимает это как сигнал о недостатке кислорода и запускает компенсаторные механизмы: расширяются сосуды, улучшается кровообращение, активизируются обменные процессы. Это приводит к улучшению питания тканей, снятию воспаления и болевого синдрома.
            </p>
            <p className="text-base md:text-lg">
              Углекислый газ быстро выводится из организма естественным путем, не накапливаясь в тканях. Процедура безопасна и может проводиться курсами для достижения стойкого терапевтического эффекта.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl font-bold mb-4">Подготовка к проведению процедуры в Альтамед Голицино</h3>
          <div className="text-gray-800 space-y-4">
            <p>
              На консультации врач медицинского центра Альтамед Голицино оценивает возможность проведения карбокситерапии и исключает противопоказания (беременность и ГВ, обострения хронических заболеваний и др.). Специалист определяет показания к процедуре и составляет индивидуальный план лечения.
            </p>
            <p>
              За 3 дня до процедуры рекомендуется пить 2–3 литра воды в день для повышения эффективности процессов. При проведении на лице стоит воздержаться от косметики. В день процедуры желательно не употреблять алкоголь и не принимать препараты, влияющие на свертываемость крови.
            </p>
            <p>
              Процедура проводится в комфортных условиях медицинского центра Альтамед Голицино. Длительность сеанса составляет от 15 до 30 минут в зависимости от области воздействия. После процедуры можно сразу вернуться к обычной деятельности.
            </p>
          </div>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Области применения карбокситерапии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Лечебное применение</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Лечение заболеваний опорно-двигательного аппарата</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Терапия головных болей и мигреней</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Улучшение кровообращения в конечностях</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Реабилитация после травм и операций</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Косметологическое применение</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Улучшение состояния кожи лица и тела</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Коррекция локальных жировых отложений</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Устранение целлюлита</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Омоложение кожи и улучшение ее тонуса</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Цены на карбокситерапию</h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Стоимость указана за один сеанс карбокситерапии и носит информационный характер. Актуальные цены и
            возможные скидки при покупке курса (5 процедур — скидка 10%, 10 процедур — скидка 15%) уточняйте у
            администратора клиники Альтамед Голицино.
          </p>
          <div className="space-y-6">
            {carboxyServices.map((block, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-emerald-50 px-4 md:px-6 py-3 border-b border-emerald-100">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-900">
                    {block.category}
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {block.services.map((service) => (
                      <div
                        key={service.code}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-100 rounded-xl px-4 py-3 bg-gray-50"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                          <div className="text-sm md:text-base font-medium text-gray-900">
                            {service.name}
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4 text-emerald-700 font-semibold text-base">
                          {service.price.toLocaleString("ru-RU")} ₽
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs md:text-sm text-gray-500">
            Информация о ценах не является публичной офертой. Подробности уточняйте при записи на приём.
          </p>
        </div>
      </section>

      {/* Course of treatment */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Курс лечения карбокситерапией</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              В медицинском центре Альтамед Голицино курс карбокситерапии подбирается индивидуально для каждого пациента. Обычно для достижения стойкого эффекта требуется от 5 до 10 процедур с интервалом 3-7 дней.
            </p>
            <p className="text-base md:text-lg">
              Первые результаты лечения могут быть заметны уже после 2-3 процедур. Для поддержания эффекта рекомендуется проходить профилактические курсы 1-2 раза в год. Специалисты Альтамед Голицино разрабатывают индивидуальную программу лечения с учетом особенностей каждого пациента.
            </p>
            <p className="text-base md:text-lg">
              После завершения курса лечения врач дает рекомендации по поддержанию достигнутого результата, включая физические упражнения, режим питания и образ жизни.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Почему выбирают карбокситерапию в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Современное оборудование</h3>
              <p className="text-gray-700">Используем аппараты последнего поколения с точной дозировкой</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные специалисты</h3>
              <p className="text-gray-700">Врачи с многолетним опытом работы в области реабилитации</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-700">Программа лечения разрабатывается для каждого пациента</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
