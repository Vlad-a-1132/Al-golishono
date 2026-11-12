import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Акции на анализы KDL | Альтамед Голицыно",
  description:
    "Комплексные лабораторные исследования KDL по специальным ценам в Альтамед Голицыно. Состав исследований и условия уточняйте при записи.",
};

const offers = [
  {
    title: "Гормональный профиль для мужчин",
    description: "Для оценки мужского гормонального статуса.",
    price: 1029,
    oldPrice: 3600,
    discount: 71,
    image: "male-hormones.jpg",
  },
  {
    title: "Фрагментация ДНК сперматозоидов",
    description: "Для оценки мужской репродуктивной функции.",
    price: 6292,
    oldPrice: 7215,
    discount: 12,
    image: "dna-fragmentation.jpg",
  },
  {
    title: "Гормональный профиль для женщин",
    description: "Для оценки гормонального баланса и женского здоровья.",
    price: 2210,
    oldPrice: 7622,
    discount: 71,
    image: "female-hormones.jpg",
  },
  {
    title: "Чекап экспертный для женщин",
    description: "Для комплексной оценки женского здоровья.",
    price: 5721,
    oldPrice: 13826,
    discount: 58,
    image: "womens-checkup.jpg",
  },
  {
    title: "Кардиологический профиль",
    description: "Для базовой оценки сердечно-сосудистых рисков.",
    price: 2354,
    oldPrice: 6402,
    discount: 63,
    image: "cardiac-profile.jpg",
  },
  {
    title: "Индекс дислипидемии ApoB / ApoA1",
    description: "Для оценки нарушений липидного обмена и атерориска.",
    price: 891,
    oldPrice: 1600,
    discount: 44,
    image: "lipid-index.jpg",
  },
  {
    title: "Скрининг рака шейки матки",
    description: "ПАП-тест и ВПЧ 14 типов.",
    price: 2309,
    oldPrice: 3099,
    discount: 25,
    image: "cervical-screening.jpg",
  },
  {
    title: "Фемофлор II",
    description: "Для оценки состояния интимной микрофлоры.",
    price: 2762,
    oldPrice: 3176,
    discount: 13,
    image: "femoflor.jpg",
  },
  {
    title: "Обследование щитовидной железы",
    description: "Для комплексной оценки функции щитовидной железы.",
    price: 2336,
    oldPrice: 6913,
    discount: 66,
    image: "thyroid.jpg",
  },
  {
    title: "Чекап «Хроническая усталость»",
    description: "Для оценки причин снижения энергии и хронической усталости.",
    price: 5260,
    oldPrice: 7310,
    discount: 28,
    image: "chronic-fatigue.jpg",
  },
  {
    title: "Диагностика дефицита железа",
    description: "Для диагностики дефицита железа и скрытой анемии.",
    price: 2167,
    oldPrice: 3248,
    discount: 33,
    image: "iron-deficiency.jpg",
  },
];

const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")} ₽`;

export default function KdlPromotionsPage() {
  return (
    <main className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-2 py-5 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-700">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/promo" className="hover:text-emerald-700">Акции</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-800">Исследования KDL</span>
        </nav>

        <header className="border-b border-gray-200 pb-7 pt-2 sm:pb-8 sm:pt-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase text-[#9e1558]">
            <span>Альтамед Голицыно</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>KDL</span>
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">Акции на анализы KDL</h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
                Комплексные исследования по специальным ценам в Альтамед Голицыно.
              </p>
            </div>
            <a href="tel:+74959896480" className="inline-flex min-h-10 items-center gap-2 border-b-2 border-emerald-500 pb-1 text-sm font-semibold text-gray-900 hover:text-emerald-700">
              +7 (495) 989-64-80 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <section aria-labelledby="offers-heading" className="pt-8">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 sm:mb-6">
            <div className="flex items-baseline gap-3">
              <h2 id="offers-heading" className="text-xl font-bold text-gray-900 sm:text-2xl">Комплексные исследования</h2>
              <span className="text-sm font-semibold text-[#a81360]">{offers.length}</span>
            </div>
            <p className="text-sm text-gray-500">Состав и условия уточняйте при записи</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => {
              const image = `/images/promo/kdl/${offer.image}`;
              return (
                <article key={offer.image} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <a href={image} target="_blank" rel="noopener noreferrer" aria-label={`Открыть афишу акции: ${offer.title}`} className="block aspect-[9/16] overflow-hidden bg-[#a20c5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600">
                    <img src={image} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase text-[#a81360]">Выгода до {offer.discount}%</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">{offer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-gray-100 pt-4">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-xl font-bold text-gray-900">{formatPrice(offer.price)}</span>
                        <span className="text-sm text-gray-400 line-through">{formatPrice(offer.oldPrice)}</span>
                      </div>
                      <a href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-md bg-[#13a77a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                        Записаться
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-8 border-t border-gray-200 pt-6 text-sm leading-relaxed text-gray-600">
          <p>Состав исследований, сроки и условия акций уточняйте у администратора клиники.</p>
          <p className="mt-3 font-semibold text-gray-800">Имеются противопоказания. Требуется консультация специалиста.</p>
        </div>
      </div>
    </main>
  );
}
