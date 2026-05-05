"use client"

import Link from "next/link";

export default function PromoPage() {
  // Данные акций
  const promotions = [
    {
      id: 1,
      category: "dentistry",
      image: "/images/doctors/doctor banner/5f7a2bdf-c02e-4be9-8d70-20f740761fd2.webp",
      title: "Профессиональная гигиена полости рта — 4600 ₽",
      description: "Фиксированная цена, без указания процента."
    },
    {
      id: 9,
      category: "pediatrics",
      image: "/images/doctors/doctor banner/3cd15f11-ac00-4095-afc7-ee19d84b37fe.webp",
      title: "Детям (педиатр)",
      description: "Приём педиатра — скидка 20%"
    },
    {
      id: 10,
      category: "cosmetology",
      image: "/images/doctors/doctor banner/8b8366ac-c1bf-4d9e-8f59-1b2305ee0f54.webp",
      title: "Лазерная эпиляция",
      description: "Скидки — до 40%"
    },
    {
      id: 11,
      category: "infusions",
      image: "/images/doctors/doctor banner/873d9451-97ea-48fa-97da-9e78bfabf67e.webp",
      title: "Курс из 10 капельниц",
      description:
        "Скидка 20%. Обязательно: направление от врача и препараты (оплачиваются отдельно или в курсе — уточняйте при записи)."
    },
    {
      id: 2,
      category: "dentistry",
      image: "/images/promo/st prom.png",
      title: "Лечение зубов (терапия)",
      description: "Скидка 20% на все виды лечения"
    },
    {
      id: 3,
      category: "dentistry",
      image: "/images/yslugi/implant.webp",
      title: "Имплантация зубов",
      description: "Скидка 30% — цена: 41160 ₽ (было 58800 ₽)"
    },
    {
      id: 7,
      category: "consultations",
      image: "/images/slides/2-pensia.webp",
      title: "Скидки для пенсионеров",
      description: "10% на приём врача, УЗИ, анализы"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-600">
              Медицинский центр
            </Link>
            <span className="mx-2">/</span>
            <span className="text-emerald-600 font-medium">Акции</span>
          </nav>
        </div>
      </section>

      {/* Page Title */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Акции
          </h1>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {promotions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {promotions.map((promo) => {
                // Генерируем slug на основе ID
                const slug = `promo-${promo.id}`;
                return (
                  <Link
                    key={promo.id}
                    href={`/promo/${slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error('Failed to load promo image:', promo.image);
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {promo.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {promo.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Акций в этой категории пока нет
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

