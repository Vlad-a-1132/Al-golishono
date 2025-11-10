import { Metadata } from 'next';

// Данные акций для генерации статических параметров
export function generateStaticParams() {
  return [
    { slug: 'promo-1' },
    { slug: 'promo-2' },
    { slug: 'promo-3' },
    { slug: 'promo-4' },
    { slug: 'promo-5' },
  ];
}

// Данные акций для генерации метаданных
const promotionsData: Record<string, {
  title: string;
  description: string;
  image?: string;
}> = {
  'promo-1': {
    title: 'Скидки на компьютерную томографию',
    description: 'Скидки на КТ в Одинцово - Понедельник, Среда, Пятница 20%, Суббота 25%. Запись на компьютерную томографию в медицинском центре Альтамед-с.',
    image: '/images/slides/1-kt.webp',
  },
  'promo-2': {
    title: 'Комплексное ультразвуковое исследование для женщин',
    description: 'Комплексное УЗИ для женщин в Одинцово - УЗИ органов малого таза + молочных желез + щитовидной железы за 5000 ₽. Экономия 1200 рублей.',
    image: '/images/slides/yzi.webp',
  },
  'promo-3': {
    title: 'Скидки для пенсионеров и многодетных',
    description: 'Скидки 10% для пенсионеров и многодетных семей на все услуги клиники Альтамед-Св Одинцово. Исключение: стоматология.',
    image: '/images/slides/2-pensia.webp',
  },
  'promo-4': {
    title: 'Скидки на анализы',
    description: 'Скидки на анализы в Одинцово - Понедельник, Среда, Пятница 10%, Воскресенье 15%. Сдача анализов в медицинском центре Альтамед-с.',
    image: '/images/slides/3-analizy.webp',
  },
  'promo-5': {
    title: 'Кольпоскопия в подарок при первичном приеме гинеколога',
    description: 'При первичном приеме врача акушера-гинеколога в Одинцово - кольпоскопия в подарок! Акция действует весь 2025 год в клинике Альтамед-с.',
    image: '/images/slides/kolpos.webp',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const promo = promotionsData[slug] || {
    title: 'Акции и спецпредложения',
    description: 'Акции и спецпредложения медицинского центра Альтамед-Св Одинцово',
  };

  return {
    title: `${promo.title} - Акции | Медицинский центр Альтамед-Св Одинцово`,
    description: promo.description,
    keywords: [
      'акции Альтамед-с',
      'скидки медицинский центр Одинцово',
      'спецпредложения клиники Одинцово',
      promo.title.toLowerCase(),
      'Московская область медицинские акции',
      'Одинцовский район скидки на услуги'
    ],
    openGraph: {
      title: `${promo.title} - Акции | Альтамед-с`,
      description: promo.description,
      url: `https://altamed-s.ru/promo/${slug}`,
      siteName: 'Альтамед-с',
      images: promo.image ? [
        {
          url: `https://altamed-s.ru${promo.image}`,
          width: 1200,
          height: 630,
          alt: promo.title,
        },
      ] : undefined,
      locale: 'ru_RU',
      type: 'website',
    },
    alternates: {
      canonical: `https://altamed-s.ru/promo/${slug}`,
    },
  };
}

export default function PromoSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

