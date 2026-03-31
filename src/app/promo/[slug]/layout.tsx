import { Metadata } from 'next';

// Данные акций для генерации статических параметров
export function generateStaticParams() {
  return [
    { slug: 'promo-1' },
    { slug: 'promo-2' },
    { slug: 'promo-3' },
    { slug: 'promo-6' },
    { slug: 'promo-7' },
  ];
}

// Данные акций для генерации метаданных
const promotionsData: Record<string, {
  title: string;
  description: string;
  image?: string;
}> = {
  'promo-1': {
    title: 'Профессиональная гигиена полости рта',
    description: 'Профессиональная гигиена полости рта в Альтамед Голицыно — специальная цена и бережная чистка для здоровья зубов и дёсен.',
    image: '/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp',
  },
  'promo-2': {
    title: 'Комплексное ультразвуковое исследование для женщин',
    description: 'Комплексное УЗИ для женщин в Голицыно - УЗИ органов малого таза + молочных желез + щитовидной железы за 5000 ₽. Экономия 1200 рублей.',
    image: '/images/slides/yzi.webp',
  },
  'promo-3': {
    title: 'Скидки для пенсионеров и многодетных',
    description: 'Скидки 10% для пенсионеров и многодетных семей на все услуги клиники Альтамед Голицыно. Исключение: стоматология.',
    image: '/images/slides/2-pensia.webp',
  },
  'promo-6': {
    title: 'Скидка 30% на общий массаж медицинский',
    description: 'Скидка 30% на общий массаж медицинский (А21.01.001) в Голицыно. Цена: 3430 ₽ (было 4200 ₽). Экономия 770 рублей в клинике Альтамед Голицыно.',
    image: '/images/promo/task_01kbdkwa0xftb9wh0jek05ksz3_1764615024_img_0.webp',
  },
  'promo-7': {
    title: 'День пенсионера',
    description: 'День пенсионера в Голицыно - специальные скидки до 25% на медицинские услуги. Понедельник и Пятница - скидки 20-25% в клинике Альтамед Голицыно.',
    image: '/images/yslugi/task_01kcqt39h1evj89apdf39y58f8_1766030720_img_1.webp',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const promo = promotionsData[slug] || {
    title: 'Акции и спецпредложения',
    description: 'Акции и спецпредложения медицинского центра Альтамед Голицыно',
  };

  return {
    title: `${promo.title} - Акции | Медицинский центр Альтамед Голицыно`,
    description: promo.description,
    keywords: [
      'акции Альтамед Голицыно',
      'скидки медицинский центр Голицыно',
      'спецпредложения клиники Голицыно',
      promo.title.toLowerCase(),
      'Московская область медицинские акции',
      'Голицыно скидки на услуги'
    ],
    openGraph: {
      title: `${promo.title} - Акции | Альтамед Голицыно`,
      description: promo.description,
      url: `https://altamed-s.ru/promo/${slug}`,
      siteName: 'Альтамед Голицыно',
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

