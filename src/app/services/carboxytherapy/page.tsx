"use client"

import Image from "next/image";

export default function CarboxytherapyPage() {
  const prices: Array<{ name: string; price: number }> = [
    { name: "Лечение спины", price: 1800 },
    { name: "Сеанс карбокситерапии трапецевидных мышц и лопатки", price: 1500 },
    { name: "Сеанс карбокситерапии тазобедренный сустав", price: 1200 },
    { name: "Сеанс карбокситерапии плечевого сустава", price: 1000 },
    { name: "Сеанс карбокситерапии локтевого сустава", price: 1000 },
    { name: "Сеанс карбокситерапии коленного сустава", price: 1000 },
    { name: "Сеанс карбокситерапии кисти рук", price: 800 },
    { name: "Сеанс карбокситерапии голеностопного сустава", price: 1000 },
    { name: "Сеанс карбокситерапии при головных болях", price: 1000 },
    { name: "Сеанс карбокситерапии лица (1 процедура)", price: 1500 },
    { name: "Сеанс карбокситерапии лица (5 процедур)", price: 6500 },
    { name: "Сеанс карбокситерапии зоны подбородка, шеи (1 процедура)", price: 1300 },
    { name: "Сеанс карбокситерапии зоны подбородка, шеи (5 процедур)", price: 4950 },
    { name: "Сеанс карбокситерапии волосистой части головы (1 процедура)", price: 1000 },
    { name: "Сеанс карбокситерапии волосистой части головы (5 процедур)", price: 4500 },
    { name: "Сеанс карбокситерапии живота стандарт (1 процедура)", price: 1000 },
    { name: "Сеанс карбокситерапии живота стандарт (5 процедур)", price: 4500 },
    { name: "Сеанс карбокситерапии живота макси (1 процедура)", price: 1300 },
    { name: "Сеанс карбокситерапии живота макси (5 процедур)", price: 5850 },
    { name: "Сеанс карбокситерапии жирового горба на спине (1 процедура)", price: 1500 },
    { name: "Сеанс карбокситерапии жирового горба на спине (5 процедур)", price: 6750 },
    { name: "Сеанс карбокситерапии зоны колен (1 процедура)", price: 700 },
    { name: "Сеанс карбокситерапии зоны колен (5 процедур)", price: 3150 },
    { name: "Сеанс карбокситерапии зоны предплечья (1 процедура)", price: 1100 },
    { name: "Сеанс карбокситерапии зоны предплечья (5 процедур)", price: 4950 },
    { name: "Сеанс карбокситерапии зоны ягодиц (1 процедура)", price: 1500 },
    { name: "Сеанс карбокситерапии зоны ягодиц (5 процедур)", price: 6750 },
    { name: "Сеанс карбокситерапии зоны боков реберная часть (1 процедура)", price: 1000 },
    { name: "Сеанс карбокситерапии зоны боков реберная часть (5 процедур)", price: 4500 },
    { name: "Сеанс карбокситерапии внешняя поверхность бедра обе ноги (1 процедура)", price: 1200 },
    { name: "Сеанс карбокситерапии внешняя поверхность бедра обе ноги (5 процедур)", price: 5400 },
    { name: "Сеанс карбокситерапии внутренняя поверхность бедра обе ноги (1 процедура)", price: 1200 },
    { name: "Сеанс карбокситерапии внутреняя поверхность бедра обе ноги (5 процедур)", price: 5400 },
  ];

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

  return (
    <div className="flex flex-col bg-white">
      {/* Title without banner */}
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Карбокситерапия</h1>
        </div>
      </section>

      {/* Green info block */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-emerald-500 rounded-[20px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-8 text-white">
                <p className="mb-4">
                  Карбокситерапия — метод лечения, основанный на регулируемом введении
                  чистого углекислого медицинского газа.
                </p>
                <p className="mb-4">
                  Инъекции газа оказывают комплексное воздействие на ткани: улучшают кровоснабжение,
                  снижают выраженность болевого синдрома и влияют на воспалительный процесс.
                </p>
                <p>
                  Газ вводится внутримышечно, подкожно или внутрикожно с помощью очень тонких игл.
                  Активируя оздоровление тканей, углекислый газ выводится естественным путем через
                  лёгкие и почки спустя несколько минут.
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[240px] md:h-auto">
                <Image
                  src="/images/yslugi/Carboxytherapy.webp"
                  alt="Карбокситерапия"
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
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества карбокситерапии</h2>
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
              <h3 className="text-2xl font-bold mb-4">Показания к применению</h3>
              <div className="bg-gray-50 rounded-[20px] p-6">
                <ul className="space-y-3 text-gray-800">
                  {indications.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block w-3 h-3 rounded-full border-2 border-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Положительные результаты</h3>
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
                  Метод также применяется для решения косметологических задач и улучшения качества кожи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl font-bold mb-4">Подготовка к проведению процедуры</h3>
          <div className="text-gray-800 space-y-4">
            <p>
              На консультации врач оценивает возможность проведения карбокситерапии и исключает
              противопоказания (беременность и ГВ, обострения хронических заболеваний и др.).
            </p>
            <p>
              За 3 дня до процедуры рекомендуется пить 2–3 литра воды в день для повышения
              эффективности процессов. При проведении на лице стоит воздержаться от косметики.
            </p>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Цены</h3>
          <div className="overflow-x-auto bg-white rounded-[20px] border border-gray-100 shadow-sm">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Наименование</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Цена, руб.</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">{row.price.toLocaleString("ru-RU")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}


