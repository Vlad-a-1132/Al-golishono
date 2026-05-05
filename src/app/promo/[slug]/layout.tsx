import { Metadata } from 'next';

// Данные акций для генерации статических параметров
export function generateStaticParams() {
  return [
    { slug: 'promo-1' },
    { slug: 'promo-2' },
    { slug: 'promo-3' },
    { slug: 'promo-7' },
    { slug: 'promo-9' },
    { slug: 'promo-10' },
    { slug: 'promo-11' },
  ];
}

// Данные акций для генерации метаданных
const promotionsData: Record<string, {
  title: string;
  description: string;
  image?: string;
}> = {
  'promo-1': {
    title: 'Профессиональная гигиена полости рта — 4600 ₽',
    description:
      'Профессиональная гигиена полости рта в Альтамед Голицыно за фиксированную цену 4600 ₽, без указания процента. Комплексная чистка и уход под контролем стоматолога.',
    image: '/images/doctors/doctor banner/5f7a2bdf-c02e-4be9-8d70-20f740761fd2.webp',
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
  'promo-7': {
    title: 'Скидки для пенсионеров',
    description:
      'Скидка 10% для пенсионеров на приём врача, УЗИ и анализы в клинике Альтамед Голицыно. Не действует на ортопедию и имплантацию.',
    image: '/images/slides/2-pensia.webp',
  },
  'promo-9': {
    title: 'Детям (педиатр): приём со скидкой 20%',
    description:
      'Приём педиатра в Альтамед Голицыно со скидкой 20% для детей. Запись на консультацию и наблюдение у педиатра.',
    image: '/images/doctors/doctor banner/3cd15f11-ac00-4095-afc7-ee19d84b37fe.webp',
  },
  'promo-10': {
    title: 'Лазерная эпиляция: скидки — до 40%',
    description:
      'Лазерная эпиляция в Альтамед Голицыно — скидки до 40%. Уточняйте актуальный прайс и зоны при записи.',
    image: '/images/doctors/doctor banner/8b8366ac-c1bf-4d9e-8f59-1b2305ee0f54.webp',
  },
  'promo-11': {
    title: 'Курс из 10 капельниц — скидка 20%',
    description:
      'Курс капельниц в Альтамед Голицыно: скидка 20%. Нужны направление врача и препараты — оплата отдельно или в курсе уточняется при записи.',
    image: '/images/doctors/doctor banner/873d9451-97ea-48fa-97da-9e78bfabf67e.webp',
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

